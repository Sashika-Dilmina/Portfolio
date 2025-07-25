import mongoose from 'mongoose';

const ProductSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Please provide a product name'],
    trim: true,
  },
  category: {
    type: String,
    required: [true, 'Please provide a category'],
    trim: true,
  },
  price: {
    type: Number,
    required: [true, 'Please provide a selling price'],
    min: [0, 'Price cannot be negative'],
  },
  costPrice: {
    type: Number,
    required: [true, 'Please provide a cost price'],
    min: [0, 'Cost price cannot be negative'],
  },
  quantity: {
    type: Number,
    required: [true, 'Please provide quantity'],
    min: [0, 'Quantity cannot be negative'],
    default: 0,
  },
  minStockLevel: {
    type: Number,
    default: 5,
    min: [0, 'Minimum stock level cannot be negative'],
  },
  description: {
    type: String,
    trim: true,
  },
  barcode: {
    type: String,
    unique: true,
    sparse: true,
  },
  isActive: {
    type: Boolean,
    default: true,
  },
}, {
  timestamps: true,
});

// Virtual for profit margin
ProductSchema.virtual('profitMargin').get(function() {
  return this.price - this.costPrice;
});

// Virtual for profit percentage
ProductSchema.virtual('profitPercentage').get(function() {
  if (this.costPrice === 0) return 0;
  return ((this.price - this.costPrice) / this.costPrice * 100).toFixed(2);
});

// Virtual for low stock alert
ProductSchema.virtual('isLowStock').get(function() {
  return this.quantity <= this.minStockLevel;
});

// Ensure virtual fields are serialized
ProductSchema.set('toJSON', { virtuals: true });

export default mongoose.models.Product || mongoose.model('Product', ProductSchema);