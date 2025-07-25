import { NextResponse } from 'next/server';
import connectDB from '@/lib/mongodb';
import Sale from '@/lib/models/Sale';
import Product from '@/lib/models/Product';
import Customer from '@/lib/models/Customer';
import { authenticateUser } from '@/lib/auth';
import mongoose from 'mongoose';

export async function GET(request) {
  try {
    await connectDB();
    
    const user = authenticateUser(request);
    if (!user) {
      return NextResponse.json(
        { error: 'Authentication required' },
        { status: 401 }
      );
    }
    
    const { searchParams } = new URL(request.url);
    const page = parseInt(searchParams.get('page')) || 1;
    const limit = parseInt(searchParams.get('limit')) || 10;
    const startDate = searchParams.get('startDate');
    const endDate = searchParams.get('endDate');
    const customerId = searchParams.get('customerId');
    
    const skip = (page - 1) * limit;
    
    // Build query
    let query = {};
    
    if (startDate && endDate) {
      query.createdAt = {
        $gte: new Date(startDate),
        $lte: new Date(endDate),
      };
    }
    
    if (customerId) {
      query.customerId = customerId;
    }
    
    const sales = await Sale.find(query)
      .populate('customerId', 'name phone')
      .populate('cashierId', 'name')
      .sort({ createdAt: -1 })
      .skip(skip)
      .limit(limit);
    
    const total = await Sale.countDocuments(query);
    
    return NextResponse.json({
      sales,
      pagination: {
        page,
        limit,
        total,
        pages: Math.ceil(total / limit),
      },
    });
  } catch (error) {
    console.error('Get sales error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}

export async function POST(request) {
  const session = await mongoose.startSession();
  session.startTransaction();
  
  try {
    await connectDB();
    
    const user = authenticateUser(request);
    if (!user) {
      return NextResponse.json(
        { error: 'Authentication required' },
        { status: 401 }
      );
    }
    
    const saleData = await request.json();
    const { items, customerId, customerName, customerPhone, discount = 0, tax = 0, paymentMethod, notes } = saleData;
    
    if (!items || items.length === 0) {
      return NextResponse.json(
        { error: 'Sale items are required' },
        { status: 400 }
      );
    }
    
    // Calculate totals and validate stock
    let subtotal = 0;
    const saleItems = [];
    
    for (const item of items) {
      const product = await Product.findById(item.productId).session(session);
      if (!product) {
        throw new Error(`Product not found: ${item.productId}`);
      }
      
      if (product.quantity < item.quantity) {
        throw new Error(`Insufficient stock for ${product.name}. Available: ${product.quantity}, Requested: ${item.quantity}`);
      }
      
      const itemTotal = product.price * item.quantity;
      subtotal += itemTotal;
      
      saleItems.push({
        productId: product._id,
        productName: product.name,
        quantity: item.quantity,
        unitPrice: product.price,
        totalPrice: itemTotal,
      });
      
      // Update product stock
      await Product.findByIdAndUpdate(
        product._id,
        { $inc: { quantity: -item.quantity } },
        { session }
      );
    }
    
    const totalAmount = subtotal - discount + tax;
    
    // Create sale
    const sale = new Sale({
      customerId: customerId || null,
      customerName: customerName || 'Walk-in Customer',
      customerPhone: customerPhone || null,
      items: saleItems,
      subtotal,
      discount,
      tax,
      totalAmount,
      paymentMethod: paymentMethod || 'cash',
      cashierId: user.userId,
      cashierName: user.name,
      notes,
    });
    
    await sale.save({ session });
    
    // Update customer stats if customer exists
    if (customerId) {
      await Customer.findByIdAndUpdate(
        customerId,
        {
          $inc: { 
            totalPurchases: 1,
            totalSpent: totalAmount,
            rewardPoints: Math.floor(totalAmount / 100) // 1 point per 100 currency units
          },
          lastPurchaseDate: new Date(),
        },
        { session }
      );
    }
    
    await session.commitTransaction();
    
    const populatedSale = await Sale.findById(sale._id)
      .populate('customerId', 'name phone')
      .populate('cashierId', 'name');
    
    return NextResponse.json({
      message: 'Sale created successfully',
      sale: populatedSale,
    }, { status: 201 });
  } catch (error) {
    await session.abortTransaction();
    console.error('Create sale error:', error);
    return NextResponse.json(
      { error: error.message || 'Internal server error' },
      { status: 500 }
    );
  } finally {
    session.endSession();
  }
}