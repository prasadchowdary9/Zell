
import { RoleType, ProductCategory, ProductUnit, NotificationType, PaymentMethod } from '@/types/enums';
import { File } from 'buffer';

export interface User {
  id: string;
  name: string;
  email: string;
  password: string; // In a real app, this would be hashed
  role: RoleType;
  phone?: string;
  shopId: string;
  createdAt: Date;
  lastLogin?: Date;
  updatedAt: Date;
}

export interface Shop {
  id: string;
  name: string;
  email: string;
  phone: string;
  address: string;
  location: string;
  owner: string;
  ownerId: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  category: ProductCategory;
  unit: ProductUnit;
  stockQuantity: number;
  lowStockThreshold: number;
  costPrice: number;
  shopId: string;
  createdAt: Date;
  updatedAt: Date;
  manufacturer:String;
  expiryDate:Date;
  image?: File;
}

export interface Stock {
  id: string;
  productId: string;
  shopId: string;
  quantity: number;
  minStockLevel: number;
  updatedAt: Date;
}

export interface Customer {
  id: string;
  name: string;
  phone: string;
  email?: string;
  address?: string;
  village?: string;
  mandal?: string;
  district?: string;

  shopId: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface Transaction {
  id: string;
  customerId: string;
  shopId: string;
  items: TransactionItem[];
  products: any[]; // For backwards compatibility
  totalAmount: number;
  paidAmount: number;
  dueAmount: number;
  paymentMethod: PaymentMethod;
  transactionDate: Date;
  createdBy: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface TransactionItem {
  id?: string;
  productId: string;
  quantity: number;
  pricePerUnit: number;
  unitPrice?: number;
  totalPrice: number;
  total?: number;
}

export interface NotificationSetting {
  type: NotificationType;
  enabled: boolean;
  daysBeforeDue: number;
}

export interface DashboardStats {
  totalProducts: number;
  lowStockCount: number;
  recentProducts: Product[];
  totalSales: number;
  outstandingDues: number;
}
