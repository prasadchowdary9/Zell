import { 
    users, 
    shops, 
    products, 
    stocks,
    customers,
    transactions
  } from './dummyData';
  import { 
    User, 
    Shop, 
    Product, 
    Stock,
    Customer,
    Transaction,
    DashboardStats
  } from '../types/interfaces';
  import { v4 as uuidv4 } from 'uuid';
  
  // Authentication
  export const authenticateUser = (email: string, password: string): User | null => {
    const user = users.find(user => user.email === email && user.password === password);
    return user || null;
  };
  
  // User Methods
  export const getAllUsers = (): User[] => users;
  
  export const getUserById = (id: string): User | undefined => {
    return users.find(user => user.id === id);
  };
  
  export const getUsersByShopId = (shopId: string): User[] => {
    return users.filter(user => user.shopId === shopId);
  };
  
  export const createUser = (user: Omit<User, 'id' | 'createdAt' | 'updatedAt'>): User => {
    const newUser = {
      ...user,
      id: `user-${uuidv4()}`,
      createdAt: new Date(),
      updatedAt: new Date()
    };
    users.push(newUser);
    return newUser;
  };
  
  export const updateUser = (id: string, data: Partial<User>): User | undefined => {
    const index = users.findIndex(user => user.id === id);
    if (index !== -1) {
      users[index] = {
        ...users[index],
        ...data,
        updatedAt: new Date()
      };
      return users[index];
    }
    return undefined;
  };
  
  export const deleteUser = (id: string): boolean => {
    const index = users.findIndex(user => user.id === id);
    if (index !== -1) {
      users.splice(index, 1);
      return true;
    }
    return false;
  };
  
  // Shop Methods
  export const getAllShops = (): Shop[] => shops;
  
  export const getShopById = (id: string): Shop | undefined => {
    return shops.find(shop => shop.id === id);
  };
  
  export const createShop = (shop: Omit<Shop, 'id' | 'createdAt' | 'updatedAt'>): Shop => {
    const newShop = {
      ...shop,
      id: `shop-${uuidv4()}`,
      createdAt: new Date(),
      updatedAt: new Date()
    };
    shops.push(newShop);
    return newShop;
  };
  
  export const updateShop = (id: string, data: Partial<Shop>): Shop | undefined => {
    const index = shops.findIndex(shop => shop.id === id);
    if (index !== -1) {
      shops[index] = {
        ...shops[index],
        ...data,
        updatedAt: new Date()
      };
      return shops[index];
    }
    return undefined;
  };
  
  export const deleteShop = (id: string): boolean => {
    const index = shops.findIndex(shop => shop.id === id);
    if (index !== -1) {
      shops.splice(index, 1);
      return true;
    }
    return false;
  };
  
  // Product Methods
  export const getAllProducts = (): Product[] => products;
  
  export const getProductById = (id: string): Product | undefined => {
    return products.find(product => product.id === id);
  };
  
  export const getProductsByShopId = (shopId: string): Product[] => {
    return products.filter(product => product.shopId === shopId);
  };
  
  export const createProduct = (product: Omit<Product, 'id' | 'createdAt' | 'updatedAt'>): Product => {
    const newProduct = {
      ...product,
      id: `product-${uuidv4()}`,
      createdAt: new Date(),
      updatedAt: new Date()
    };
    products.push(newProduct);
    return newProduct;
  };
  
  export const updateProduct = (id: string, data: Partial<Product>): Product | undefined => {
    const index = products.findIndex(product => product.id === id);
    if (index !== -1) {
      products[index] = {
        ...products[index],
        ...data,
        updatedAt: new Date()
      };
      return products[index];
    }
    return undefined;
  };
  
  export const deleteProduct = (id: string): boolean => {
    const index = products.findIndex(product => product.id === id);
    if (index !== -1) {
      products.splice(index, 1);
      return true;
    }
    return false;
  };
  
  // Stock Methods
  export const getAllStocks = (): Stock[] => stocks;
  
  export const getStockById = (id: string): Stock | undefined => {
    return stocks.find(stock => stock.id === id);
  };
  
  export const getStockByProductAndShop = (productId: string, shopId: string): Stock | undefined => {
    return stocks.find(stock => stock.productId === productId && stock.shopId === shopId);
  };
  
  export const getStocksByShopId = (shopId: string): Stock[] => {
    return stocks.filter(stock => stock.shopId === shopId);
  };
  
  export const getLowStocks = (shopId: string): Stock[] => {
    const shopProducts = products.filter(product => product.shopId === shopId);
    return stocks.filter(stock => {
      const product = shopProducts.find(p => p.id === stock.productId);
      return product && stock.quantity <= product.lowStockThreshold;
    });
  };
  
  export const createStock = (stock: Omit<Stock, 'id' | 'updatedAt'>): Stock => {
    const newStock = {
      ...stock,
      id: `stock-${uuidv4()}`,
      updatedAt: new Date()
    };
    stocks.push(newStock);
    return newStock;
  };
  
  export const updateStock = (id: string, data: Partial<Stock>): Stock | undefined => {
    const index = stocks.findIndex(stock => stock.id === id);
    if (index !== -1) {
      stocks[index] = {
        ...stocks[index],
        ...data,
        updatedAt: new Date()
      };
      return stocks[index];
    }
    return undefined;
  };
  
  export const deleteStock = (id: string): boolean => {
    const index = stocks.findIndex(stock => stock.id === id);
    if (index !== -1) {
      stocks.splice(index, 1);
      return true;
    }
    return false;
  };
  
  // Customer Methods
  export const getAllCustomers = (): Customer[] => customers;
  
  export const getCustomerById = (id: string): Customer | undefined => {
    return customers.find(customer => customer.id === id);
  };
  
  export const getCustomersByShopId = (shopId: string): Customer[] => {
    return customers.filter(customer => customer.shopId === shopId);
  };
  
  export const createCustomer = (customer: Omit<Customer, 'id' | 'createdAt' | 'updatedAt'>): Customer => {
    const newCustomer = {
      ...customer,
      id: `customer-${uuidv4()}`,
      createdAt: new Date(),
      updatedAt: new Date()
    };
    customers.push(newCustomer);
    return newCustomer;
  };
  
  export const updateCustomer = (id: string, data: Partial<Customer>): Customer | undefined => {
    const index = customers.findIndex(customer => customer.id === id);
    if (index !== -1) {
      customers[index] = {
        ...customers[index],
        ...data,
        updatedAt: new Date()
      };
      return customers[index];
    }
    return undefined;
  };
  
  export const deleteCustomer = (id: string): boolean => {
    const index = customers.findIndex(customer => customer.id === id);
    if (index !== -1) {
      customers.splice(index, 1);
      return true;
    }
    return false;
  };
  
  // Transaction Methods
  export const getAllTransactions = (): Transaction[] => transactions;
  
  export const getTransactionById = (id: string): Transaction | undefined => {
    return transactions.find(transaction => transaction.id === id);
  };
  
  export const getTransactionsByCustomerId = (customerId: string): Transaction[] => {
    return transactions.filter(transaction => transaction.customerId === customerId);
  };
  
  export const getTransactionsByShopId = (shopId: string): Transaction[] => {
    return transactions.filter(transaction => transaction.shopId === shopId);
  };
  
  export const createTransaction = (transaction: Omit<Transaction, 'id' | 'createdAt' | 'updatedAt'>): Transaction => {
    const newTransaction = {
      ...transaction,
      id: `trans-${uuidv4()}`,
      createdAt: new Date(),
      updatedAt: new Date()
    };
    transactions.push(newTransaction);
    return newTransaction;
  };
  
  export const updateTransaction = (id: string, data: Partial<Transaction>): Transaction | undefined => {
    const index = transactions.findIndex(transaction => transaction.id === id);
    if (index !== -1) {
      transactions[index] = {
        ...transactions[index],
        ...data,
        updatedAt: new Date()
      };
      return transactions[index];
    }
    return undefined;
  };
  
  export const deleteTransaction = (id: string): boolean => {
    const index = transactions.findIndex(transaction => transaction.id === id);
    if (index !== -1) {
      transactions.splice(index, 1);
      return true;
    }
    return false;
  };
  
  // Dashboard Stats
  export const getDashboardStats = (shopId: string): DashboardStats => {
    const shopProducts = products.filter(product => product.shopId === shopId);
    
    const lowStocks = stocks.filter(stock => {
      const product = shopProducts.find(p => p.id === stock.productId);
      return product && stock.quantity <= product.lowStockThreshold;
    });
    
    const recentProducts = [...shopProducts]
      .sort((a, b) => b.createdAt.getTime() - a.createdAt.getTime())
      .slice(0, 5);
    
    const shopTransactions = transactions.filter(
      trans => trans.shopId === shopId
    );
    
    const totalSales = shopTransactions.reduce(
      (sum, transaction) => sum + transaction.totalAmount,
      0
    );
    
    const outstandingDues = shopTransactions.reduce(
      (sum, transaction) => sum + transaction.dueAmount,
      0
    );
  
    return {
  totalProducts: shopProducts.length,
  lowStockCount: lowStocks.length,
  recentProducts,
  totalSales,
  outstandingDues,
  totalCustomers: 0,
  
};
  };
  
  // PDF Generation Settings
  const pdfSettings = new Map<string, unknown>();
  
  export const savePdfSettings = (shopId: string, settings: unknown) => {
    pdfSettings.set(shopId, settings);
    return settings;
  };
  
  export const getPdfSettings = (shopId: string) => {
    return pdfSettings.get(shopId) || {};
  };
  
  // Notification Settings
  const notificationSettings = new Map<string, unknown>();
  
  export const saveNotificationSettings = (userId: string, settings: unknown) => {
    notificationSettings.set(userId, settings);
    return settings;
  };
  
  export const getNotificationSettings = (userId: string) => {
    return notificationSettings.get(userId) || {};
  };
  
  // Message Templates
  const messageTemplates = new Map<string, unknown>();
  
  export const saveMessageTemplates = (shopId: string, templates: unknown) => {
    messageTemplates.set(shopId, templates);
    return templates;
  };
  
  export const getMessageTemplates = (shopId: string) => {
    return messageTemplates.get(shopId) || {};
  };
  
  // User Settings
  const userSettings = new Map<string, unknown>();
  
  export const saveUserSettings = (userId: string, settings: unknown) => {
    userSettings.set(userId, settings);
    return settings;
  };
  
  export const getUserSettings = (userId: string) => {
    return userSettings.get(userId) || {};
  };
  