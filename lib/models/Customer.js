import mongoose from 'mongoose';

const CustomerSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Please provide customer name'],
    trim: true,
  },
  phone: {
    type: String,
    required: [true, 'Please provide phone number'],
    unique: true,
    trim: true,
  },
  email: {
    type: String,
    lowercase: true,
    trim: true,
  },
  address: {
    street: String,
    city: String,
    state: String,
    pincode: String,
  },
  totalPurchases: {
    type: Number,
    default: 0,
    min: [0, 'Total purchases cannot be negative'],
  },
  totalSpent: {
    type: Number,
    default: 0,
    min: [0, 'Total spent cannot be negative'],
  },
  rewardPoints: {
    type: Number,
    default: 0,
    min: [0, 'Reward points cannot be negative'],
  },
  lastPurchaseDate: {
    type: Date,
  },
  customerType: {
    type: String,
    enum: ['regular', 'vip', 'wholesale'],
    default: 'regular',
  },
  isActive: {
    type: Boolean,
    default: true,
  },
  notes: {
    type: String,
  },
}, {
  timestamps: true,
});

// Virtual for customer status based on total spent
CustomerSchema.virtual('status').get(function() {
  if (this.totalSpent >= 50000) return 'VIP';
  if (this.totalSpent >= 20000) return 'Premium';
  if (this.totalSpent >= 5000) return 'Regular';
  return 'New';
});

// Ensure virtual fields are serialized
CustomerSchema.set('toJSON', { virtuals: true });

export default mongoose.models.Customer || mongoose.model('Customer', CustomerSchema);