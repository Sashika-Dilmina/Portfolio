# RetailEase - Smart Retail Business Management System

A comprehensive retail management system built with the MERN stack (MongoDB, Express.js, React/Next.js, Node.js) to help small retail businesses manage their inventory, sales, customers, and expenses efficiently.

## 🚀 Features

### 👥 User Management & Authentication
- **Admin & Staff Roles**: Different access levels for administrators and cashiers
- **JWT Authentication**: Secure login system with token-based authentication
- **Role-based Access Control**: Admins have full access, staff can only make sales and check stock

### 📦 Product & Inventory Management
- **Product CRUD Operations**: Add, edit, delete, and view products
- **Stock Level Tracking**: Real-time inventory management
- **Low Stock Alerts**: Automatic notifications when products run low
- **Category Management**: Organize products by categories
- **Profit Margin Calculation**: Track cost price vs selling price

### 🧾 Sales Management
- **Point of Sale (POS)**: Create sales with multiple products
- **Invoice Generation**: Automatic invoice creation with sale numbers
- **Payment Methods**: Support for cash, card, UPI, and other payment types
- **Sales History**: Complete transaction history with search and filtering
- **Stock Updates**: Automatic inventory updates after sales

### 👤 Customer Management
- **Customer Database**: Store customer information and purchase history
- **Customer Analytics**: Track total purchases, spending, and status
- **Reward Points System**: Automatic points calculation for loyal customers
- **Purchase History**: View customer's previous transactions

### 💸 Expense Tracking
- **Expense Categories**: Rent, utilities, inventory, marketing, etc.
- **Expense Logging**: Record and categorize business expenses
- **Date-based Filtering**: View expenses by date ranges
- **Payment Method Tracking**: Track how expenses were paid

### 📊 Dashboard & Analytics
- **Real-time Analytics**: Sales, expenses, and profit overview
- **Period Filtering**: View data for today, week, month, or year
- **Top Products**: Best-selling products analytics
- **Sales Trends**: Visual representation of sales performance
- **Business KPIs**: Key metrics like average order value, total transactions

## 🛠️ Tech Stack

| Layer | Technology |
|-------|------------|
| **Frontend** | Next.js 15, React, Tailwind CSS |
| **Backend** | Next.js API Routes, Node.js |
| **Database** | MongoDB with Mongoose ODM |
| **Authentication** | JWT, bcryptjs |
| **UI Components** | Radix UI, Lucide React |
| **Notifications** | React Hot Toast |
| **HTTP Client** | Axios |
| **Deployment** | Vercel (Frontend), MongoDB Atlas (Database) |

## 📋 Prerequisites

Before you begin, ensure you have the following installed:
- Node.js (v18 or higher)
- MongoDB (local installation or MongoDB Atlas account)
- npm or yarn package manager

## 🚀 Getting Started

### 1. Clone the Repository
```bash
git clone https://github.com/yourusername/retailease.git
cd retailease
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Environment Setup
Create a `.env.local` file in the root directory:
```env
# MongoDB Configuration
MONGODB_URI=mongodb://localhost:27017/retailease
# Or for MongoDB Atlas:
# MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/retailease

# JWT Secret Key (change this in production)
JWT_SECRET=your-super-secret-jwt-key-change-this-in-production

# Next.js Configuration
NEXTAUTH_URL=http://localhost:3000
NEXTAUTH_SECRET=your-nextauth-secret-key

# Application Settings
NODE_ENV=development
```

### 4. Start MongoDB
If using local MongoDB:
```bash
# On macOS with Homebrew
brew services start mongodb/brew/mongodb-community

# On Ubuntu
sudo systemctl start mongod

# On Windows
net start MongoDB
```

### 5. Run the Development Server
```bash
npm run dev
```

### 6. Access the Application
Open [http://localhost:3000](http://localhost:3000) in your browser.

## 🎯 First Time Setup

1. **Create Admin Account**: 
   - Visit `/register` to create the first admin account
   - The first user automatically becomes an admin
   - Subsequent users can only be created by admins

2. **Add Sample Data**:
   - Login with your admin account
   - Add some products to get started
   - Create a few customer records
   - Make some test sales to see the dashboard in action

## 📁 Project Structure

```
retailease/
├── app/                          # Next.js App Router
│   ├── api/                      # API Routes
│   │   ├── auth/                 # Authentication endpoints
│   │   ├── products/             # Product management
│   │   ├── sales/                # Sales management
│   │   ├── customers/            # Customer management
│   │   ├── expenses/             # Expense tracking
│   │   └── dashboard/            # Analytics endpoint
│   ├── dashboard/                # Dashboard page
│   ├── login/                    # Login page
│   ├── register/                 # Registration page
│   └── layout.jsx                # Root layout
├── components/                   # Reusable UI components
│   ├── ui/                       # Base UI components
│   └── Layout.jsx                # Main app layout
├── lib/                          # Utilities and configurations
│   ├── models/                   # MongoDB models
│   ├── context/                  # React contexts
│   ├── mongodb.js                # Database connection
│   ├── auth.js                   # Authentication utilities
│   └── utils.js                  # Helper functions
├── public/                       # Static assets
└── package.json                  # Project dependencies
```

## 🔧 Configuration

### Database Models

The application uses the following MongoDB collections:

- **Users**: Store user accounts with roles
- **Products**: Product catalog with inventory
- **Sales**: Transaction records with items
- **Customers**: Customer information and analytics
- **Expenses**: Business expense tracking

### Environment Variables

| Variable | Description | Default |
|----------|-------------|---------|
| `MONGODB_URI` | MongoDB connection string | `mongodb://localhost:27017/retailease` |
| `JWT_SECRET` | Secret key for JWT tokens | Required |
| `NODE_ENV` | Environment mode | `development` |

## 📱 Usage Guide

### For Administrators
1. **User Management**: Create staff accounts
2. **Product Management**: Add/edit products and categories
3. **Inventory Control**: Set minimum stock levels
4. **Business Analytics**: View comprehensive reports
5. **Expense Management**: Track all business expenses

### For Staff/Cashiers
1. **Sales Processing**: Create sales and generate invoices
2. **Inventory Check**: View current stock levels
3. **Customer Service**: Access customer information
4. **Basic Reporting**: View sales summaries

## 🚀 Deployment

### Vercel Deployment
1. Push your code to GitHub
2. Connect your repository to Vercel
3. Set environment variables in Vercel dashboard
4. Deploy with zero configuration

### MongoDB Atlas Setup
1. Create a MongoDB Atlas account
2. Create a new cluster
3. Get your connection string
4. Update `MONGODB_URI` in your environment variables

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- Built with Next.js and the React ecosystem
- UI components powered by Radix UI
- Icons by Lucide React
- Styling with Tailwind CSS

## 📞 Support

If you encounter any issues or have questions, please:
1. Check the [Issues](https://github.com/yourusername/retailease/issues) page
2. Create a new issue if your problem isn't already reported
3. Provide detailed information about your environment and the issue

---

**RetailEase** - Simplifying retail business management, one transaction at a time. 🏪✨
