
export enum RoleType {
  ADMIN = 'ADMIN',
  STAFF = 'STAFF',
  CASHIER = 'CASHIER'
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
  G = 'g',
  L = 'L',
  ML = 'ml',
  PIECES = 'pcs',
  BAGS = 'bags',
  BOTTLES = 'bottles',
  PACKETS = 'packets'
}

export enum NotificationType {
  LOW_STOCK = 'Low Stock Alert',
  PAYMENT_DUE = 'Payment Due',
  CUSTOMER_BIRTHDAY = 'Customer Birthday',
  SPECIAL_OFFER = 'Special Offer'
}

export enum PaymentMethod {
  CASH = 'Cash',
  CARD = 'Card',
  BANK_TRANSFER = 'Bank Transfer',
  MOBILE_PAYMENT = 'Mobile Payment',
  CREDIT = 'Credit'
}
