
import { 
    User, 
    Shop,
    Product, 
    Stock,
    Customer,
    Transaction,

  } from "../types/interfaces";
  import { 
    RoleType, 
    ProductCategory, 
    ProductUnit,
    PaymentMethod
  } from "../types/enums";
  
  // Shops
  export const shops: Shop[] = [
    {
      id: "shop-1",
      name: "Green Valley Agro Supply",
      phone: "+1234567890",
      email: "info@greenvalleyagro.com",
      address: "123 Farm Road, Greenville",
      location: "Greenville",
      owner: "John Farmer",
      ownerId: "user-1",
      createdAt: new Date("2023-01-01"),
      updatedAt: new Date("2023-01-01")
    },
    {
      id: "shop-2",
      name: "Harvest Helper Supply Co.",
      phone: "+1234567891",
      email: "contact@harvesthelper.com",
      address: "456 Field Lane, Harvestville",
      location: "Harvestville",
      owner: "Sarah Field",
      ownerId: "user-2",
      createdAt: new Date("2023-02-15"),
      updatedAt: new Date("2023-02-15")
    },
    {
      id: "shop-3",
      name: "Rural Roots Farm Supplies",
      phone: "+1234567892",
      email: "sales@ruralroots.com",
      address: "789 Countryside Blvd, Farmland",
      location: "Farmland",
      owner: "Mike Grounds",
      ownerId: "user-3",
      createdAt: new Date("2023-03-10"),
      updatedAt: new Date("2023-03-10")
    }
  ];
  
  // Users
  export const users: User[] = [
    {
        id: "user-1",
        name: "John Farmer",
        email: "john@greenvalleyagro.com",
        password: "password123",
        role: RoleType.ADMIN,
        shopId: "shop-1",
        createdAt: new Date("2023-01-01"),
        updatedAt: new Date("2023-01-01"),
        phone: "",
        is_verified: false
    },
    {
        id: "user-2",
        name: "Sarah Field",
        email: "sarah@harvesthelper.com",
        password: "password123",
        role: RoleType.ADMIN,
        shopId: "shop-2",
        createdAt: new Date("2023-02-15"),
        updatedAt: new Date("2023-02-15"),
        phone: "",
        is_verified: false
    },
    {
        id: "user-3",
        name: "Mike Grounds",
        email: "mike@ruralroots.com",
        password: "password123",
        role: RoleType.ADMIN,
        shopId: "shop-3",
        createdAt: new Date("2023-03-10"),
        updatedAt: new Date("2023-03-10"),
        phone: "",
        is_verified: false
    },
    {
        id: "user-4",
        name: "Emily Staff",
        email: "emily@greenvalleyagro.com",
        password: "password123",
        role: RoleType.STAFF,
        shopId: "shop-1",
        createdAt: new Date("2023-01-05"),
        updatedAt: new Date("2023-01-05"),
        phone: "",
        is_verified: false
    },
    {
        id: "user-5",
        name: "Tom Worker",
        email: "tom@harvesthelper.com",
        password: "password123",
        role: RoleType.STAFF,
        shopId: "shop-2",
        createdAt: new Date("2023-02-20"),
        updatedAt: new Date("2023-02-20"),
        phone: "",
        is_verified: false
    }
  ];
  
  // Products
  export const products: Product[] = [
    {
        id: "product-1",
        name: "Premium NPK Fertilizer",
        description: "Balanced NPK fertilizer for all crops",
        category: ProductCategory.FERTILIZERS,
        unit: ProductUnit.KG,
        price: 25.99,
        costPrice: 18.50,
        stockQuantity: 250,
        lowStockThreshold: 50,
        shopId: "shop-1",
        createdAt: new Date("2023-01-15"),
        updatedAt: new Date("2023-01-15"),
        manufacturer: "",
        expiryDate: new Date("2026-01-15"),
    },
    {
        id: "product-2",
        name: "Organic Compost",
        description: "100% natural organic compost",
        category: ProductCategory.FERTILIZERS,
        unit: ProductUnit.KG,
        price: 15.50,
        costPrice: 8.75,
        stockQuantity: 180,
        lowStockThreshold: 40,
        shopId: "shop-1",
        createdAt: new Date("2023-01-16"),
        updatedAt: new Date("2023-01-16"),
        manufacturer: "",
        expiryDate: new Date("2026-01-15"),
    },
    {
        id: "product-3",
        name: "Insect Control Spray",
        description: "Effective against common crop pests",
        category: ProductCategory.PESTICIDES,
        unit: ProductUnit.LITRES,
        price: 32.99,
        costPrice: 20.50,
        stockQuantity: 75,
        lowStockThreshold: 30,
        shopId: "shop-1",
        createdAt: new Date("2023-01-17"),
        updatedAt: new Date("2023-01-17"),
        manufacturer: "",
        expiryDate:  new Date("2026-01-15"),
    },
    {
        id: "product-4",
        name: "Hybrid Corn Seeds",
        description: "High-yield hybrid corn seeds",
        category: ProductCategory.SEEDS,
        unit: ProductUnit.PACKETS,
        price: 45.00,
        costPrice: 30.00,
        stockQuantity: 120,
        lowStockThreshold: 25,
        shopId: "shop-1",
        createdAt: new Date("2023-01-18"),
        updatedAt: new Date("2023-01-18"),
        manufacturer: "",
        expiryDate: new Date("2026-01-15"),
    },
    {
        id: "product-5",
        name: "Garden Hoe",
        description: "Durable garden hoe for weeding",
        category: ProductCategory.TOOLS,
        unit: ProductUnit.PIECES,
        price: 18.99,
        costPrice: 12.50,
        stockQuantity: 45,
        lowStockThreshold: 20,
        shopId: "shop-2",
        createdAt: new Date("2023-02-18"),
        updatedAt: new Date("2023-02-18"),
        manufacturer: "",
        expiryDate:  new Date("2026-01-15"),
    },
    {
        id: "product-6",
        name: "Liquid Nitrogen Fertilizer",
        description: "Fast-acting liquid nitrogen fertilizer",
        category: ProductCategory.FERTILIZERS,
        unit: ProductUnit.LITRES,
        price: 30.50,
        costPrice: 22.25,
        stockQuantity: 95,
        lowStockThreshold: 40,
        shopId: "shop-2",
        createdAt: new Date("2023-02-19"),
        updatedAt: new Date("2023-02-19"),
        manufacturer: "",
        expiryDate:  new Date("2026-01-15"),
    },
    {
        id: "product-7",
        name: "Weed Control Solution",
        description: "Selective herbicide for weed control",
        category: ProductCategory.PESTICIDES,
        unit: ProductUnit.LITRES,
        price: 28.75,
        costPrice: 19.50,
        stockQuantity: 65,
        lowStockThreshold: 30,
        shopId: "shop-2",
        createdAt: new Date("2023-02-20"),
        updatedAt: new Date("2023-02-20"),
        manufacturer: "",
        expiryDate:  new Date("2026-01-15"),
    },
    {
        id: "product-8",
        name: "Tomato Seeds",
        description: "Disease-resistant tomato seeds",
        category: ProductCategory.SEEDS,
        unit: ProductUnit.PACKETS,
        price: 12.99,
        costPrice: 7.50,
        stockQuantity: 200,
        lowStockThreshold: 35,
        shopId: "shop-3",
        createdAt: new Date("2023-03-15"),
        updatedAt: new Date("2023-03-15"),
        manufacturer: "",
        expiryDate:  new Date("2026-01-15"),
    },
    {
        id: "product-9",
        name: "Pruning Shears",
        description: "Sharp pruning shears for gardening",
        category: ProductCategory.TOOLS,
        unit: ProductUnit.PIECES,
        price: 22.50,
        costPrice: 15.00,
        stockQuantity: 50,
        lowStockThreshold: 15,
        shopId: "shop-3",
        createdAt: new Date("2023-03-16"),
        updatedAt: new Date("2023-03-16"),
        manufacturer: "",
        expiryDate:  new Date("2026-01-15"),
    },
    {
        id: "product-10",
        name: "Potassium Fertilizer",
        description: "High-potassium fertilizer for flowering and fruiting",
        category: ProductCategory.FERTILIZERS,
        unit: ProductUnit.KG,
        price: 26.99,
        costPrice: 18.00,
        stockQuantity: 85,
        lowStockThreshold: 30,
        shopId: "shop-3",
        createdAt: new Date("2023-03-17"),
        updatedAt: new Date("2023-03-17"),
        manufacturer: "",
        expiryDate:  new Date("2026-01-15"),
    }
  ];
  
  // Stocks
  export const stocks: Stock[] = [
    {
      id: "stock-1",
      productId: "product-1",
      shopId: "shop-1",
      quantity: 250,
      minStockLevel: 50,
      updatedAt: new Date("2023-04-01")
    },
    {
      id: "stock-2",
      productId: "product-2",
      shopId: "shop-1",
      quantity: 180,
      minStockLevel: 40,
      updatedAt: new Date("2023-04-01")
    },
    {
      id: "stock-3",
      productId: "product-3",
      shopId: "shop-1",
      quantity: 75,
      minStockLevel: 30,
      updatedAt: new Date("2023-04-01")
    },
    {
      id: "stock-4",
      productId: "product-4",
      shopId: "shop-1",
      quantity: 120,
      minStockLevel: 25,
      updatedAt: new Date("2023-04-01")
    },
    {
      id: "stock-5",
      productId: "product-1",
      shopId: "shop-1",
      quantity: 150,
      minStockLevel: 50,
      updatedAt: new Date("2023-04-02")
    },
    {
      id: "stock-6",
      productId: "product-5",
      shopId: "shop-2",
      quantity: 45,
      minStockLevel: 20,
      updatedAt: new Date("2023-04-03")
    },
    {
      id: "stock-7",
      productId: "product-6",
      shopId: "shop-2",
      quantity: 95,
      minStockLevel: 40,
      updatedAt: new Date("2023-04-03")
    },
    {
      id: "stock-8",
      productId: "product-7",
      shopId: "shop-2",
      quantity: 15,
      minStockLevel: 30,
      updatedAt: new Date("2023-04-03")
    },
    {
      id: "stock-9",
      productId: "product-8",
      shopId: "shop-3",
      quantity: 200,
      minStockLevel: 35,
      updatedAt: new Date("2023-04-04")
    },
    {
      id: "stock-10",
      productId: "product-9",
      shopId: "shop-3",
      quantity: 12,
      minStockLevel: 15,
      updatedAt: new Date("2023-04-04")
    }
  ];
  
  // Customers
  export const customers: Customer[] = [
    {
      id: "customer-1",
      name: "Robert Green",
      phone: "+1234567100",
      email: "robert@example.com",
      address: "123 Farmer Lane, Greenville",
      shopId: "shop-1",
      createdAt: new Date("2023-01-20"),
      updatedAt: new Date("2023-01-20")
    },
    {
      id: "customer-2",
      name: "Lisa Brown",
      phone: "+1234567101",
      email: "lisa@example.com",
      address: "456 Harvest Road, Greenville",
      shopId: "shop-1",
      createdAt: new Date("2023-01-21"),
      updatedAt: new Date("2023-01-21")
    },
    {
      id: "customer-3",
      name: "James Field",
      phone: "+1234567102",
      shopId: "shop-1",
      createdAt: new Date("2023-01-22"),
      updatedAt: new Date("2023-01-22")
    },
    {
      id: "customer-4",
      name: "Maria Garcia",
      phone: "+1234567103",
      address: "789 Crop Street, Harvestville",
      shopId: "shop-2",
      createdAt: new Date("2023-02-22"),
      updatedAt: new Date("2023-02-22")
    },
    {
      id: "customer-5",
      name: "David Smith",
      phone: "+1234567104",
      email: "david@example.com",
      shopId: "shop-2",
      createdAt: new Date("2023-02-23"),
      updatedAt: new Date("2023-02-23")
    },
    {
      id: "customer-6",
      name: "Jennifer Wilson",
      phone: "+1234567105",
      email: "jennifer@example.com",
      address: "321 Rural Road, Farmland",
      shopId: "shop-3",
      createdAt: new Date("2023-03-20"),
      updatedAt: new Date("2023-03-20")
    },
    {
      id: "customer-7",
      name: "Michael Clark",
      phone: "+1234567106",
      shopId: "shop-3",
      createdAt: new Date("2023-03-21"),
      updatedAt: new Date("2023-03-21")
    }
  ];
  
  // Transactions
  export const transactions: Transaction[] = [
    {
      id: "trans-1",
      customerId: "customer-1",
      shopId: "shop-1",
      items: [
        {
          id: "item-1",
          productId: "product-1",
          quantity: 5,
          pricePerUnit: 25.99,
          unitPrice: 25.99,
          totalPrice: 129.95,
          total: 129.95
        },
        {
          id: "item-2",
          productId: "product-3",
          quantity: 2,
          pricePerUnit: 32.99,
          unitPrice: 32.99,
          totalPrice: 65.98,
          total: 65.98
        }
      ],
      products: [], // For backward compatibility
      totalAmount: 195.93,
      paidAmount: 100.00,
      dueAmount: 95.93,
      paymentMethod: PaymentMethod.CASH,
      transactionDate: new Date("2023-04-05"),
      createdBy: "user-1",
      createdAt: new Date("2023-04-05"),
      updatedAt: new Date("2023-04-05")
    },
    {
      id: "trans-2",
      customerId: "customer-2",
      shopId: "shop-1",
      items: [
        {
          id: "item-3",
          productId: "product-2",
          quantity: 10,
          pricePerUnit: 15.50,
          unitPrice: 15.50,
          totalPrice: 155.00,
          total: 155.00
        }
      ],
      products: [], // For backward compatibility
      totalAmount: 155.00,
      paidAmount: 155.00,
      dueAmount: 0,
      paymentMethod: PaymentMethod.CASH,
      transactionDate: new Date("2023-04-06"),
      createdBy: "user-1",
      createdAt: new Date("2023-04-06"),
      updatedAt: new Date("2023-04-06")
    },
    {
      id: "trans-3",
      customerId: "customer-3",
      shopId: "shop-1",
      items: [
        {
          id: "item-4",
          productId: "product-1",
          quantity: 3,
          pricePerUnit: 25.99,
          unitPrice: 25.99,
          totalPrice: 77.97,
          total: 77.97
        },
        {
          id: "item-5",
          productId: "product-4",
          quantity: 1,
          pricePerUnit: 45.00,
          unitPrice: 45.00,
          totalPrice: 45.00,
          total: 45.00
        }
      ],
      products: [], // For backward compatibility
      totalAmount: 122.97,
      paidAmount: 50.00,
      dueAmount: 72.97,
      paymentMethod: PaymentMethod.CREDIT,
      transactionDate: new Date("2023-04-07"),
      createdBy: "user-4",
      createdAt: new Date("2023-04-07"),
      updatedAt: new Date("2023-04-07")
    },
    {
      id: "trans-4",
      customerId: "customer-4",
      shopId: "shop-2",
      items: [
        {
          id: "item-6",
          productId: "product-5",
          quantity: 2,
          pricePerUnit: 18.99,
          unitPrice: 18.99,
          totalPrice: 37.98,
          total: 37.98
        },
        {
          id: "item-7",
          productId: "product-6",
          quantity: 5,
          pricePerUnit: 30.50,
          unitPrice: 30.50,
          totalPrice: 152.50,
          total: 152.50
        }
      ],
      products: [], // For backward compatibility
      totalAmount: 190.48,
      paidAmount: 190.48,
      dueAmount: 0,
      paymentMethod: PaymentMethod.BANK_TRANSFER,
      transactionDate: new Date("2023-04-10"),
      createdBy: "user-2",
      createdAt: new Date("2023-04-10"),
      updatedAt: new Date("2023-04-10")
    },
    {
      id: "trans-5",
      customerId: "customer-6",
      shopId: "shop-3",
      items: [
        {
          id: "item-8",
          productId: "product-8",
          quantity: 10,
          pricePerUnit: 12.99,
          unitPrice: 12.99,
          totalPrice: 129.90,
          total: 129.90
        },
        {
          id: "item-9",
          productId: "product-9",
          quantity: 1,
          pricePerUnit: 22.50,
          unitPrice: 22.50,
          totalPrice: 22.50,
          total: 22.50
        }
      ],
      products: [], // For backward compatibility
      totalAmount: 152.40,
      paidAmount: 100.00,
      dueAmount: 52.40,
      paymentMethod: PaymentMethod.MOBILE_PAYMENT,
      transactionDate: new Date("2023-04-12"),
      createdBy: "user-3",
      createdAt: new Date("2023-04-12"),
      updatedAt: new Date("2023-04-12")
    }
  ];
  