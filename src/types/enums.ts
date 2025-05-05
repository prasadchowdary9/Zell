
export enum RoleType {
  SUPER_ADMIN = 'SUPER_ADMIN',
  ADMIN = 'ADMIN',
  USER = 'USER',
  STAFF='STAFF',
  AGENT='AGENT',
  TECHNICIAN = 'Technician',
}

export enum ProductCategory {
  SEEDS = 'Seeds',
  FERTILIZERS = 'Fertilizers',
  PESTICIDES = 'Pesticides',
  TOOLS = 'Tools',
  MACHINERY = 'Machinery',
  IRRIGATION = 'Irrigation',
  FEEDS = 'Feeds',
  OTHER = 'Other'
}

export enum ProductUnit {
  KG = 'kg',
  GRAMS = 'grams',
  LITRES = 'litres',
  ML = 'ml',
  PIECES = 'pcs',
  BAGS = 'bags',
  BOTTLES = 'bottles',
  PACKETS = 'packets'
}

export enum NotificationType {
  LOW_STOCK = 'Low Stock Alert',
  PAYMENT_DUE = 'Payment Due',
  ADMIN_MESSAGE = 'Admin Message',
  HIGH_DUE = 'High Due',
  

}

export enum PaymentMethod {
  CASH = 'Cash',
  CARD = 'Card',
  BANK_TRANSFER = 'Bank Transfer',
  MOBILE_PAYMENT = 'Mobile Payment',
  CREDIT = 'Credit',
  DUE = 'Due',
  PHONE_PAY='Phone Pay',
  GOOGLE_PAY='Google Pay',
  PAYTM='PayTM',
  UPI='UPI',
}
