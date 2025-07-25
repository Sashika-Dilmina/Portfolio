import mongoose from 'mongoose';

const ExpenseSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, 'Please provide expense title'],
    trim: true,
  },
  description: {
    type: String,
    trim: true,
  },
  category: {
    type: String,
    required: [true, 'Please provide expense category'],
    enum: [
      'Rent',
      'Utilities',
      'Inventory',
      'Marketing',
      'Staff Salary',
      'Equipment',
      'Maintenance',
      'Transportation',
      'Insurance',
      'Taxes',
      'Office Supplies',
      'Other'
    ],
  },
  amount: {
    type: Number,
    required: [true, 'Please provide expense amount'],
    min: [0, 'Amount cannot be negative'],
  },
  date: {
    type: Date,
    required: [true, 'Please provide expense date'],
    default: Date.now,
  },
  paymentMethod: {
    type: String,
    enum: ['cash', 'card', 'bank_transfer', 'cheque', 'upi', 'other'],
    default: 'cash',
  },
  vendor: {
    type: String,
    trim: true,
  },
  receiptNumber: {
    type: String,
    trim: true,
  },
  isRecurring: {
    type: Boolean,
    default: false,
  },
  recurringPeriod: {
    type: String,
    enum: ['daily', 'weekly', 'monthly', 'yearly'],
  },
  addedBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  addedByName: {
    type: String,
    required: true,
  },
  status: {
    type: String,
    enum: ['pending', 'approved', 'rejected'],
    default: 'approved',
  },
  notes: {
    type: String,
  },
}, {
  timestamps: true,
});

// Index for efficient date-based queries
ExpenseSchema.index({ date: -1 });
ExpenseSchema.index({ category: 1, date: -1 });

export default mongoose.models.Expense || mongoose.model('Expense', ExpenseSchema);