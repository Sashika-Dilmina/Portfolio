import { NextResponse } from 'next/server';
import connectDB from '@/lib/mongodb';
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
    const page = parseInt(searchParams.get('page')) || 1;
    const limit = parseInt(searchParams.get('limit')) || 10;
    const startDate = searchParams.get('startDate');
    const endDate = searchParams.get('endDate');
    const category = searchParams.get('category');
    
    const skip = (page - 1) * limit;
    
    // Build query
    let query = {};
    
    if (startDate && endDate) {
      query.date = {
        $gte: new Date(startDate),
        $lte: new Date(endDate),
      };
    }
    
    if (category) {
      query.category = category;
    }
    
    const expenses = await Expense.find(query)
      .populate('addedBy', 'name')
      .sort({ date: -1 })
      .skip(skip)
      .limit(limit);
    
    const total = await Expense.countDocuments(query);
    
    return NextResponse.json({
      expenses,
      pagination: {
        page,
        limit,
        total,
        pages: Math.ceil(total / limit),
      },
    });
  } catch (error) {
    console.error('Get expenses error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}

export async function POST(request) {
  try {
    await connectDB();
    
    const user = authenticateUser(request);
    if (!user) {
      return NextResponse.json(
        { error: 'Authentication required' },
        { status: 401 }
      );
    }
    
    const expenseData = await request.json();
    
    // Validate required fields
    const { title, category, amount } = expenseData;
    if (!title || !category || amount === undefined) {
      return NextResponse.json(
        { error: 'Title, category, and amount are required' },
        { status: 400 }
      );
    }
    
    const expense = new Expense({
      ...expenseData,
      addedBy: user.userId,
      addedByName: user.name,
    });
    
    await expense.save();
    
    const populatedExpense = await Expense.findById(expense._id)
      .populate('addedBy', 'name');
    
    return NextResponse.json({
      message: 'Expense created successfully',
      expense: populatedExpense,
    }, { status: 201 });
  } catch (error) {
    console.error('Create expense error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}