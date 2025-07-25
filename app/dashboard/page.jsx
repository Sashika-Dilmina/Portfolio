'use client';
import { useState, useEffect } from 'react';
import { useAuth } from '@/lib/context/AuthContext';
import Layout from '@/components/Layout';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { 
  DollarSign, 
  ShoppingCart, 
  Package, 
  Users, 
  AlertTriangle,
  TrendingUp,
  TrendingDown,
  Activity
} from 'lucide-react';
import { formatCurrency, formatDate } from '@/lib/utils';
import axios from 'axios';
import toast from 'react-hot-toast';

export default function DashboardPage() {
  const { user, isAuthenticated, loading } = useAuth();
  const [dashboardData, setDashboardData] = useState(null);
  const [period, setPeriod] = useState('today');
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (isAuthenticated) {
      fetchDashboardData();
    }
  }, [isAuthenticated, period]);

  const fetchDashboardData = async () => {
    try {
      setIsLoading(true);
      const response = await axios.get(`/api/dashboard?period=${period}`);
      setDashboardData(response.data);
    } catch (error) {
      toast.error('Failed to fetch dashboard data');
      console.error('Dashboard error:', error);
    } finally {
      setIsLoading(false);
    }
  };

  if (loading || !isAuthenticated) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  const summary = dashboardData?.summary || {};
  const lowStockProducts = dashboardData?.lowStockProducts || [];
  const topProducts = dashboardData?.topProducts || [];
  const recentCustomers = dashboardData?.recentCustomers || [];

  const stats = [
    {
      title: 'Total Sales',
      value: formatCurrency(summary.totalSales || 0),
      icon: DollarSign,
      color: 'text-green-600',
      bg: 'bg-green-50',
    },
    {
      title: 'Total Expenses',
      value: formatCurrency(summary.totalExpenses || 0),
      icon: TrendingDown,
      color: 'text-red-600',
      bg: 'bg-red-50',
    },
    {
      title: 'Net Profit',
      value: formatCurrency(summary.profit || 0),
      icon: TrendingUp,
      color: summary.profit >= 0 ? 'text-green-600' : 'text-red-600',
      bg: summary.profit >= 0 ? 'bg-green-50' : 'bg-red-50',
    },
    {
      title: 'Transactions',
      value: summary.totalTransactions || 0,
      icon: ShoppingCart,
      color: 'text-blue-600',
      bg: 'bg-blue-50',
    },
    {
      title: 'Products',
      value: summary.totalProducts || 0,
      icon: Package,
      color: 'text-purple-600',
      bg: 'bg-purple-50',
    },
    {
      title: 'Customers',
      value: summary.totalCustomers || 0,
      icon: Users,
      color: 'text-indigo-600',
      bg: 'bg-indigo-50',
    },
  ];

  return (
    <Layout>
      <div className="space-y-6">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h1 className="text-2xl font-bold text-gray-900">Dashboard</h1>
            <p className="text-gray-600">Welcome back, {user?.name}</p>
          </div>
          <div className="mt-4 sm:mt-0">
            <select
              value={period}
              onChange={(e) => setPeriod(e.target.value)}
              className="px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            >
              <option value="today">Today</option>
              <option value="week">This Week</option>
              <option value="month">This Month</option>
              <option value="year">This Year</option>
            </select>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <Card key={index}>
                <CardContent className="p-6">
                  <div className="flex items-center">
                    <div className={`p-2 rounded-lg ${stat.bg}`}>
                      <Icon className={`h-6 w-6 ${stat.color}`} />
                    </div>
                    <div className="ml-4">
                      <p className="text-sm font-medium text-gray-600">{stat.title}</p>
                      <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Low Stock Alert */}
          {lowStockProducts.length > 0 && (
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <AlertTriangle className="h-5 w-5 text-yellow-500 mr-2" />
                  Low Stock Alert
                </CardTitle>
                <CardDescription>Products running low on stock</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {lowStockProducts.slice(0, 5).map((product) => (
                    <div key={product._id} className="flex items-center justify-between">
                      <div>
                        <p className="font-medium">{product.name}</p>
                        <p className="text-sm text-gray-600">{product.category}</p>
                      </div>
                      <div className="text-right">
                        <p className="text-sm font-medium text-red-600">
                          {product.quantity} left
                        </p>
                        <p className="text-xs text-gray-500">
                          Min: {product.minStockLevel}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          )}

          {/* Top Products */}
          <Card>
            <CardHeader>
              <CardTitle>Top Selling Products</CardTitle>
              <CardDescription>Best performing products this {period}</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {topProducts.length > 0 ? (
                  topProducts.map((product, index) => (
                    <div key={product._id} className="flex items-center justify-between">
                      <div className="flex items-center">
                        <span className="flex items-center justify-center w-6 h-6 bg-blue-100 text-blue-600 rounded-full text-sm font-medium mr-3">
                          {index + 1}
                        </span>
                        <div>
                          <p className="font-medium">{product.productName}</p>
                          <p className="text-sm text-gray-600">
                            {product.totalQuantity} units sold
                          </p>
                        </div>
                      </div>
                      <p className="font-medium text-green-600">
                        {formatCurrency(product.totalRevenue)}
                      </p>
                    </div>
                  ))
                ) : (
                  <p className="text-gray-500 text-center py-4">No sales data available</p>
                )}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Recent Customers */}
        <Card>
          <CardHeader>
            <CardTitle>Recent Customers</CardTitle>
            <CardDescription>Newly registered customers</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {recentCustomers.length > 0 ? (
                recentCustomers.map((customer) => (
                  <div key={customer._id} className="flex items-center justify-between">
                    <div>
                      <p className="font-medium">{customer.name}</p>
                      <p className="text-sm text-gray-600">{customer.phone}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-sm text-gray-600">
                        {formatDate(customer.createdAt)}
                      </p>
                      <p className="text-xs text-gray-500 capitalize">
                        {customer.status}
                      </p>
                    </div>
                  </div>
                ))
              ) : (
                <p className="text-gray-500 text-center py-4">No customers yet</p>
              )}
            </div>
          </CardContent>
        </Card>

        {isLoading && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white p-6 rounded-lg">
              <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600 mx-auto"></div>
              <p className="mt-2 text-gray-600">Loading dashboard...</p>
            </div>
          </div>
        )}
      </div>
    </Layout>
  );
}