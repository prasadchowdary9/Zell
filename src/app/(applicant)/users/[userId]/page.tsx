"use client";

import { useRouter } from "next/navigation"; // Still needed for navigation
import React, { useState } from "react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Switch } from "@/components/ui/switch";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { format } from "date-fns";
import {
  ArrowLeft,
  Calendar,
  Download,
  Edit,
  FileText,
  Printer
} from "lucide-react";

// Enums & Types (mocked here)
enum PaymentMethod {
  Cash = "Cash",
  Credit = "Credit",
  Online = "Online",
}

interface Item {
  name: string;
  quantity: number;
  price: number;
}

interface Transaction {
  id: string;
  customerId: string;
  transactionDate: string;
  totalAmount: number;
  dueAmount: number;
  items: Item[];
  paymentMethod: PaymentMethod;
}

interface Customer {
  id: string;
  name: string;
  phone: string;
  email?: string;
  address?: string;
}

// Mock Data
const mockCustomer: Customer = {
  id: "1",
  name: "John Doe",
  phone: "+1234567890",
  email: "john@example.com",
  address: "123 Main Street, Springfield",
};

const mockTransactions: Transaction[] = [
  {
    id: "txn-001",
    customerId: "1",
    transactionDate: new Date("2024-12-01").toISOString(),
    totalAmount: 500,
    dueAmount: 200,
    items: [{ name: "Fertilizer", quantity: 2, price: 250 }],
    paymentMethod: PaymentMethod.Cash,
  },
  {
    id: "txn-002",
    customerId: "1",
    transactionDate: new Date("2025-01-15").toISOString(),
    totalAmount: 300,
    dueAmount: 0,
    items: [{ name: "Seeds", quantity: 3, price: 100 }],
    paymentMethod: PaymentMethod.Online,
  },
];

// Interest Calculation
const calculateInterest = (transaction: Transaction, interestRate: number) => {
  const daysOverdue = Math.floor(
    (new Date().getTime() - new Date(transaction.transactionDate).getTime()) /
    (1000 * 60 * 60 * 24)
  );

  if (transaction.dueAmount === 0 || daysOverdue <= 0) {
    return 0;
  }

  return transaction.dueAmount * (interestRate / 100) * (daysOverdue / 365);
};

const CustomerDetailPage: React.FC = () => {
  const router = useRouter();
  const customer = mockCustomer;
  const transactions = mockTransactions;

  const [interestRate, setInterestRate] = useState<number>(12);
  const [enableNotifications, setEnableNotifications] = useState<boolean>(true);
  const [enableSMS, setEnableSMS] = useState<boolean>(false);

  const handleNewTransaction = () => {
    router.push(`/transactions/new?customerId=${customer.id}`);
  };

  const handleGeneratePDF = () => {
    console.log("Generating PDF for customer:", customer.id);
  };

  const totalDue = transactions.reduce(
    (sum, transaction) => sum + transaction.dueAmount,
    0
  );
  const totalInterest = transactions.reduce(
    (sum, transaction) => sum + calculateInterest(transaction, interestRate),
    0
  );

  return (
    <div className="space-y-6 mt-3">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <Button
            variant="outline"
            size="icon"
            onClick={() => router.push("/users")}
            className="h-8 w-8"
          >
            <ArrowLeft className="h-4 w-4" />
          </Button>
          <h1 className="text-3xl font-bold text-agri-green-800 dark:text-white">
            {customer.name} Profile
          </h1>
        </div>
        <div className="flex space-x-2">
          <Button
            onClick={handleGeneratePDF}
            className="bg-green-600 hover:bg-green-700"
          >
            <Download className="mr-2 h-4 w-4" /> Export PDF
          </Button>
          <Button
            onClick={handleNewTransaction}
            className="bg-green-600 hover:bg-green-700"
          >
            <FileText className="mr-2 h-4 w-4" /> New Transaction
          </Button>
        </div>
      </div>

      {/* Customer Info */}
      <Card className="dark:bg-agri-green-800 dark:text-white dark:border-green-700 overflow-hidden">
        <CardHeader className="bg-green-100 dark:bg-green-700">
          <div className="flex justify-between items-center">
            <div>
              <CardTitle className="text-2xl">{customer.name}</CardTitle>
              <p className="text-agri-green-600 dark:text-agri-green-300">
                {customer.phone}
              </p>
            </div>
            <Button
              variant="outline"
              size="sm"
              onClick={() => router.push(`/customers/edit/${customer.id}`)}
              className="bg-gray dark:bg-dark-600"
            >
              <Edit className="mr-2 h-4 w-4" /> Edit Profile
            </Button>
          </div>
        </CardHeader>
        <CardContent className="p-6">
          <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-gray-200 dark:divide-agri-green-600">
            <div className="flex items-start justify-between pb-6 md:pb-0 md:pr-6">
              {/* Right: Even Larger Dummy Photo */}
              <div className="ml-6 w-38 h-42 flex-shrink-0 border border-green-300 rounded-xl overflow-hidden">
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhWNWquYwXfQx7-OlHSRARnCZHifw2zKkQKv995Q480z_vfnLH1r856jESWN0xMkDPmUo&usqp=CAU"
                  alt="Dummy"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Left: Contact Info */}
              <div className="mr-6">
                <h3 className="text-lg font-semibold mb-2 ">Contact Info</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  {customer.email || "No email provided"}
                </p>
                <p className="text-gray-600 dark:text-gray-300">
                  {customer.address || "No address provided"}
                </p>
              </div>



            </div>

            <div className="py-6 md:px-6">
              <h3 className="text-lg font-semibold mb-2">Account Summary</h3>
              <p className="flex justify-between">
                <span>Total Transactions:</span>
                <span className="font-medium">{transactions.length}</span>
              </p>
              <p className="flex justify-between">
                <span>Outstanding Balance:</span>
                <span className="font-medium text-amber-600 dark:text-amber-400">
                  ${totalDue.toFixed(2)}
                </span>
              </p>
              <p className="flex justify-between">
                <span>Accrued Interest:</span>
                <span className="font-medium text-red-600 dark:text-red-400">
                  ${totalInterest.toFixed(2)}
                </span>
              </p>
            </div>
            <div className="pt-6 md:pl-6 space-y-4">
              <h3 className="text-lg font-semibold mb-2">Settings</h3>
              <div className="flex items-center justify-between">
                <span>Interest Rate (%)</span>
                <Input
                  type="number"
                  value={interestRate}
                  onChange={(e) => setInterestRate(Number(e.target.value))}
                  className="w-20 text-right dark:bg-agri-green-700 dark:border-agri-green-600"
                />
              </div>
              <div className="flex items-center justify-between">
                <span>Enable Notifications</span>
                <Switch
                  checked={enableNotifications}
                  onCheckedChange={setEnableNotifications}
                />
              </div>
              <div className="flex items-center justify-between">
                <span>Enable SMS</span>
                <Switch checked={enableSMS} onCheckedChange={setEnableSMS} />
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Transaction Table */}
      <Card className="dark:bg-agri-green-800 dark:text-white dark:border-agri-green-700">
        <CardHeader className="pb-2">
          <CardTitle>Transaction History</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="rounded-md border dark:border-agri-green-700 overflow-hidden">
            <Table>
              <TableHeader className="bg-agri-green-50 dark:bg-agri-green-700">
                <TableRow className="hover:bg-agri-green-100/50 dark:hover:bg-agri-green-600/50">
                  <TableHead>Transaction ID</TableHead>
                  <TableHead>Date</TableHead>
                  <TableHead>Items</TableHead>
                  <TableHead>Amount</TableHead>
                  <TableHead>Due</TableHead>
                  <TableHead>Interest</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead className="text-right">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {transactions.length === 0 ? (
                  <TableRow>
                    <TableCell
                      colSpan={8}
                      className="text-center py-8 text-gray-500 dark:text-gray-400"
                    >
                      No transactions found
                    </TableCell>
                  </TableRow>
                ) : (
                  transactions.map((transaction) => (
                    <TableRow
                      key={transaction.id}
                      className="hover:bg-agri-green-50 dark:hover:bg-agri-green-700/50"
                    >
                      <TableCell className="font-medium">
                        {transaction.id}
                      </TableCell>
                      <TableCell>
                        <div className="flex items-center">
                          <Calendar className="mr-2 h-4 w-4 text-gray-500 dark:text-gray-400" />
                          {format(
                            new Date(transaction.transactionDate),
                            "dd MMM yyyy"
                          )}
                        </div>
                      </TableCell>
                      <TableCell>{transaction.items.length} items</TableCell>
                      <TableCell>
                        ${transaction.totalAmount.toFixed(2)}
                      </TableCell>
                      <TableCell>
                        {transaction.dueAmount > 0 ? (
                          <span className="text-amber-600 dark:text-amber-400">
                            ${transaction.dueAmount.toFixed(2)}
                          </span>
                        ) : (
                          "$0.00"
                        )}
                      </TableCell>
                      <TableCell>
                        {transaction.dueAmount > 0 ? (
                          <span className="text-red-600 dark:text-red-400">
                            $
                            {calculateInterest(
                              transaction,
                              interestRate
                            ).toFixed(2)}
                          </span>
                        ) : (
                          "$0.00"
                        )}
                      </TableCell>
                      <TableCell>
                        {transaction.dueAmount > 0 ? (
                          <Badge
                            variant="outline"
                            className="border-amber-500 text-amber-500 dark:border-amber-400 dark:text-amber-400"
                          >
                            Partial
                          </Badge>
                        ) : (
                          <Badge
                            variant="outline"
                            className="border-green-500 text-green-500 dark:border-green-400 dark:text-green-400"
                          >
                            Paid
                          </Badge>
                        )}
                      </TableCell>
                      <TableCell className="text-right space-x-2">
                        <Button
                          variant="outline"
                          size="icon"
                          className="h-8 w-8 p-0 inline-flex"
                        >
                          <FileText className="h-4 w-4" />
                        </Button>
                        <Button
                          variant="outline"
                          size="icon"
                          className="h-8 w-8 p-0 inline-flex"
                        >
                          <Printer className="h-4 w-4" />
                        </Button>
                      </TableCell>
                    </TableRow>
                  ))
                )}
              </TableBody>
            </Table>
          </div>
        </CardContent>
        <CardFooter className="flex justify-between border-t dark:border-agri-green-700 px-6 py-4">
          <div className="text-sm text-gray-500 dark:text-gray-400">
            Showing {transactions.length} transactions
          </div>
          <div className="font-medium">
            <span className="mr-2">Total Due:</span>
            <span className="text-amber-600 dark:text-amber-400">
              ${(totalDue + totalInterest).toFixed(2)}
            </span>
          </div>
        </CardFooter>
      </Card>
    </div>
  );
};

export default CustomerDetailPage;
