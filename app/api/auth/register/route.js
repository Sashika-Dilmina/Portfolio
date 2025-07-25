import { NextResponse } from 'next/server';
import connectDB from '@/lib/mongodb';
import User from '@/lib/models/User';
import { signToken, authenticateUser } from '@/lib/auth';

export async function POST(request) {
  try {
    await connectDB();
    
    const { name, email, password, role } = await request.json();
    
    if (!name || !email || !password) {
      return NextResponse.json(
        { error: 'Name, email, and password are required' },
        { status: 400 }
      );
    }
    
    // Check if this is the first user (make them admin)
    const userCount = await User.countDocuments();
    const isFirstUser = userCount === 0;
    
    // If not first user, check if requester is admin
    if (!isFirstUser) {
      const currentUser = authenticateUser(request);
      if (!currentUser || currentUser.role !== 'admin') {
        return NextResponse.json(
          { error: 'Only admins can create new users' },
          { status: 403 }
        );
      }
    }
    
    // Check if user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return NextResponse.json(
        { error: 'User already exists with this email' },
        { status: 400 }
      );
    }
    
    // Create new user
    const newUser = new User({
      name,
      email,
      password,
      role: isFirstUser ? 'admin' : (role || 'staff'),
    });
    
    await newUser.save();
    
    // Generate JWT token
    const token = signToken({
      userId: newUser._id,
      email: newUser.email,
      name: newUser.name,
      role: newUser.role,
    });
    
    return NextResponse.json({
      message: 'User created successfully',
      token,
      user: {
        id: newUser._id,
        name: newUser.name,
        email: newUser.email,
        role: newUser.role,
      },
    }, { status: 201 });
  } catch (error) {
    console.error('Registration error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}