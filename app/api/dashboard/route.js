import { NextResponse } from 'next/server';
import connectDB from '@/lib/mongodb';
import Sale from '@/lib/models/Sale';
import Product from '@/lib/models/Product';
import Customer from '@/lib/models/Customer';
import Expense from '@/lib/models/Expense';
import { authenticateUser } from '@/lib/auth';

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
    const period = searchParams.get('period') || 'today'; // today, week, month, year
    
    // Calculate date ranges
    const now = new Date();
    let startDate, endDate;
    
    switch (period) {
      case 'today':
        startDate = new Date(now.getFullYear(), now.getMonth(), now.getDate());
        endDate = new Date(now.getFullYear(), now.getMonth(), now.getDate() + 1);
        break;
      case 'week':
        const weekStart = new Date(now);
        weekStart.setDate(now.getDate() - now.getDay());
        weekStart.setHours(0, 0, 0, 0);
        startDate = weekStart;
        endDate = new Date(weekStart.getTime() + 7 * 24 * 60 * 60 * 1000);
        break;
      case 'month':
        startDate = new Date(now.getFullYear(), now.getMonth(), 1);
        endDate = new Date(now.getFullYear(), now.getMonth() + 1, 1);
        break;
      case 'year':
        startDate = new Date(now.getFullYear(), 0, 1);
        endDate = new Date(now.getFullYear() + 1, 0, 1);
        break;
      default:
        startDate = new Date(now.getFullYear(), now.getMonth(), now.getDate());
        endDate = new Date(now.getFullYear(), now.getMonth(), now.getDate() + 1);
    }
    
    // Get sales data
    const salesData = await Sale.aggregate([
      {
        $match: {
          createdAt: { $gte: startDate, $lt: endDate },
          status: 'completed'
        }
      },
      {
        $group: {
          _id: null,
          totalSales: { $sum: '$totalAmount' },
          totalTransactions: { $sum: 1 },
          averageOrderValue: { $avg: '$totalAmount' }
        }
      }
    ]);
    
    // Get expenses data
    const expensesData = await Expense.aggregate([
      {
        $match: {
          date: { $gte: startDate, $lt: endDate }
        }
      },
      {
        $group: {
          _id: null,
          totalExpenses: { $sum: '$amount' }
        }
      }
    ]);
    
    // Get low stock products
    const lowStockProducts = await Product.find({
      $expr: { $lte: ['$quantity', '$minStockLevel'] },
      isActive: true
    }).limit(10);
    
    // Get top selling products
    const topProducts = await Sale.aggregate([
      {
        $match: {
          createdAt: { $gte: startDate, $lt: endDate },
          status: 'completed'
        }
      },
      { $unwind: '$items' },
      {
        $group: {
          _id: '$items.productId',
          productName: { $first: '$items.productName' },
          totalQuantity: { $sum: '$items.quantity' },
          totalRevenue: { $sum: '$items.totalPrice' }
        }
      },
      { $sort: { totalQuantity: -1 } },
      { $limit: 5 }
    ]);
    
    // Get recent customers
    const recentCustomers = await Customer.find({ isActive: true })
      .sort({ createdAt: -1 })
      .limit(5);
    
    // Get sales trend data (last 7 days)
    const salesTrend = await Sale.aggregate([
      {
        $match: {
          createdAt: { 
            $gte: new Date(now.getTime() - 7 * 24 * 60 * 60 * 1000),
            $lt: now 
          },
          status: 'completed'
        }
      },
      {
        $group: {
          _id: {
            year: { $year: '$createdAt' },
            month: { $month: '$createdAt' },
            day: { $dayOfMonth: '$createdAt' }
          },
          totalSales: { $sum: '$totalAmount' },
          totalTransactions: { $sum: 1 }
        }
      },
      { $sort: { '_id.year': 1, '_id.month': 1, '_id.day': 1 } }
    ]);
    
    // Calculate totals
    const totalSales = salesData[0]?.totalSales || 0;
    const totalExpenses = expensesData[0]?.totalExpenses || 0;
    const profit = totalSales - totalExpenses;
    const totalTransactions = salesData[0]?.totalTransactions || 0;
    const averageOrderValue = salesData[0]?.averageOrderValue || 0;
    
    // Get total counts
    const totalProducts = await Product.countDocuments({ isActive: true });
    const totalCustomers = await Customer.countDocuments({ isActive: true });
    
    return NextResponse.json({
      summary: {
        totalSales,
        totalExpenses,
        profit,
        totalTransactions,
        averageOrderValue,
        totalProducts,
        totalCustomers,
        lowStockCount: lowStockProducts.length
      },
      lowStockProducts,
      topProducts,
      recentCustomers,
      salesTrend,
      period
    });
  } catch (error) {
    console.error('Dashboard error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}