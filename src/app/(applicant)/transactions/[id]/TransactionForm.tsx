
import { Button } from "@/components/ui/button";
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import { Separator } from "@/components/ui/separator";
import { getCustomerById, getProductsByShopId } from '@/data/dataMethods';
import { PaymentMethod } from "@/types/enums";
import { Product, TransactionItem } from '@/types/interfaces';
import { zodResolver } from "@hookform/resolvers/zod";
import { Calculator, Plus, Trash2 } from "lucide-react";
import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react';
import { useForm } from "react-hook-form";
import * as z from "zod";


const formSchema = z.object({
    customerId: z.string().min(1, "Please select a customer"),
    paymentMethod: z.string().min(1, "Please select a payment method"),
    paidAmount: z.number().min(0, "Paid amount must be 0 or greater"),
    notes: z.string().optional(),
    transactionDate: z.string().min(1, "Please select a date"),
});

interface TransactionFormProps {
    onClose: () => void;
}

const TransactionForm: React.FC<TransactionFormProps> = ({ onClose }) => {
    const navigate = useRouter();
    const preSelectedCustomerId = "1";

    const [items, setItems] = useState<TransactionItem[]>([]);
    const [products, setProducts] = useState<Product[]>(getProductsByShopId("shop-1"));
    const [currentItem, setCurrentItem] = useState<{
        productId: string;
        quantity: number;
    }>({
        productId: "",
        quantity: 1,
    });

    // Calculate totals
    const totalAmount = items.reduce((sum, item) => sum + item.totalPrice, 0);

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            customerId: preSelectedCustomerId || "",
            paymentMethod: PaymentMethod.CASH,
            paidAmount: totalAmount,
            notes: "",
            transactionDate: new Date().toISOString().split('T')[0],
        },
    });

    // Update paid amount when total changes
    useEffect(() => {
        form.setValue('paidAmount', totalAmount);
    }, [totalAmount, form]);

    const customer = preSelectedCustomerId ? getCustomerById(preSelectedCustomerId) : null;

    const handleAddItem = () => {
        if (!currentItem.productId || currentItem.quantity <= 0) return;

        const product = products.find(p => p.id === currentItem.productId);
        if (!product) return;

        const newItem: TransactionItem = {
            productId: currentItem.productId,
            quantity: currentItem.quantity,
            pricePerUnit: product.price,
            totalPrice: product.price * currentItem.quantity,
        };

        setItems([...items, newItem]);
        setCurrentItem({ productId: "", quantity: 1 });
    };

    const handleRemoveItem = (index: number) => {
        setItems(items.filter((_, i) => i !== index));
    };

    const findProductById = (id: string): Product | undefined => {
        return products.find(product => product.id === id);
    };

    const onSubmit = (values: z.infer<typeof formSchema>) => {
        if (items.length === 0) {
            form.setError("root", {
                type: "manual",
                message: "Please add at least one item to the transaction",
            });
            return;
        }

        const paidAmount = Number(values.paidAmount);
        const dueAmount = Math.max(0, totalAmount - paidAmount);

        const newTransaction = {
            customerId: values.customerId,
            items: items,
            totalAmount: totalAmount,
            paidAmount: paidAmount,
            dueAmount: dueAmount,
            paymentMethod: values.paymentMethod as PaymentMethod,
            transactionDate: new Date(values.transactionDate),
            notes: values.notes,
        };

        console.log('Transaction submitted:', newTransaction);
        // In a real app, this would call an API to save the transaction

        onClose();
        navigate.push('/transactions');
    };

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                {/* Customer Information */}
                <div className="space-y-4">
                    <h3 className="text-lg font-medium">Customer Information</h3>
                    {customer ? (
                        <div className="bg-agri-green-50 p-4 rounded-md dark:bg-agri-green-700/50">
                            <p className="font-medium">{customer.name}</p>
                            <p className="text-sm text-gray-500 dark:text-gray-400">{customer.phone}</p>
                            <p className="text-sm text-gray-500 dark:text-gray-400">{customer.address || 'No address provided'}</p>
                            <input type="hidden" {...form.register("customerId")} value={customer.id} />
                        </div>
                    ) : (
                        <FormField
                            control={form.control}
                            name="customerId"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Customer</FormLabel>
                                    <Select
                                        onValueChange={field.onChange}
                                        defaultValue={field.value}
                                    >
                                        <FormControl>
                                            <SelectTrigger className="dark:bg-agri-green-700 dark:border-agri-green-600 dark:text-white">
                                                <SelectValue placeholder="Select customer" />
                                            </SelectTrigger>
                                        </FormControl>
                                        <SelectContent className="dark:bg-agri-green-700 dark:border-agri-green-600 dark:text-white">
                                            {getCustomersByShopId("shop-1").map(customer => (
                                                <SelectItem
                                                    key={customer.id}
                                                    value={customer.id}
                                                    className="dark:hover:bg-agri-green-600"
                                                >
                                                    {customer.name} ({customer.phone})
                                                </SelectItem>
                                            ))}
                                        </SelectContent>
                                    </Select>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                    )}
                </div>

                <Separator className="my-4 dark:bg-agri-green-700" />

                {/* Product Items */}
                <div className="space-y-4">
                    <h3 className="text-lg font-medium">Products</h3>

                    <div className="space-y-4">
                        {/* Added Items Table */}
                        {items.length > 0 && (
                            <div className="border rounded-md overflow-hidden dark:border-agri-green-700">
                                <table className="min-w-full divide-y divide-gray-200 dark:divide-agri-green-700">
                                    <thead className="bg-gray-50 dark:bg-agri-green-700">
                                        <tr>
                                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider dark:text-gray-300">
                                                Product
                                            </th>
                                            <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider dark:text-gray-300">
                                                Price
                                            </th>
                                            <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider dark:text-gray-300">
                                                Quantity
                                            </th>
                                            <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider dark:text-gray-300">
                                                Total
                                            </th>
                                            <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider dark:text-gray-300">
                                                Action
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody className="bg-white divide-y divide-gray-200 dark:bg-agri-green-800 dark:divide-agri-green-700">
                                        {items.map((item, index) => {
                                            const product = findProductById(item.productId);
                                            return (
                                                <tr key={index}>
                                                    <td className="px-6 py-4 whitespace-nowrap">
                                                        <div className="text-sm font-medium dark:text-white">
                                                            {product?.name || "Unknown Product"}
                                                        </div>
                                                    </td>
                                                    <td className="px-6 py-4 whitespace-nowrap text-right text-sm dark:text-white">
                                                        ${item.pricePerUnit.toFixed(2)}
                                                    </td>
                                                    <td className="px-6 py-4 whitespace-nowrap text-right text-sm dark:text-white">
                                                        {item.quantity}
                                                    </td>
                                                    <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium dark:text-white">
                                                        ${item.totalPrice.toFixed(2)}
                                                    </td>
                                                    <td className="px-6 py-4 whitespace-nowrap text-right">
                                                        <Button
                                                            type="button"
                                                            variant="outline"
                                                            size="icon"
                                                            className="h-8 w-8 p-0 inline-flex bg-red-50 text-red-600 border-red-200 hover:bg-red-100 hover:text-red-700 dark:bg-red-900/20 dark:border-red-700 dark:text-red-400"
                                                            onClick={() => handleRemoveItem(index)}
                                                        >
                                                            <Trash2 className="h-4 w-4" />
                                                        </Button>
                                                    </td>
                                                </tr>
                                            );
                                        })}
                                    </tbody>
                                    <tfoot className="bg-gray-50 dark:bg-agri-green-700">
                                        <tr>
                                            <td className="px-6 py-3 text-left text-sm font-medium dark:text-white">
                                                Total
                                            </td>
                                            <td colSpan={2}></td>
                                            <td className="px-6 py-3 text-right text-sm font-bold dark:text-white">
                                                ${totalAmount.toFixed(2)}
                                            </td>
                                            <td></td>
                                        </tr>
                                    </tfoot>
                                </table>
                            </div>
                        )}

                        {/* Add Item Form */}
                        <div className="flex gap-4 items-end">
                            <div className="flex-grow">
                                <label className="text-sm font-medium block mb-1 dark:text-gray-300">
                                    Product
                                </label>
                                <Select
                                    value={currentItem.productId}
                                    onValueChange={(value) => setCurrentItem({ ...currentItem, productId: value })}
                                >
                                    <SelectTrigger className="dark:bg-agri-green-700 dark:border-agri-green-600 dark:text-white">
                                        <SelectValue placeholder="Select product" />
                                    </SelectTrigger>
                                    <SelectContent className="dark:bg-agri-green-700 dark:border-agri-green-600 dark:text-white">
                                        {products.map(product => (
                                            <SelectItem
                                                key={product.id}
                                                value={product.id}
                                                className="dark:hover:bg-agri-green-600"
                                            >
                                                {product.name} - ${product.price.toFixed(2)}
                                            </SelectItem>
                                        ))}
                                    </SelectContent>
                                </Select>
                            </div>

                            <div>
                                <label className="text-sm font-medium block mb-1 dark:text-gray-300">
                                    Quantity
                                </label>
                                <Input
                                    type="number"
                                    min="1"
                                    value={currentItem.quantity}
                                    onChange={(e) => setCurrentItem({
                                        ...currentItem,
                                        quantity: parseInt(e.target.value) || 1
                                    })}
                                    className="w-24 dark:bg-agri-green-700 dark:border-agri-green-600 dark:text-white"
                                />
                            </div>

                            <Button
                                type="button"
                                className="bg-agri-green-600 hover:bg-agri-green-700 dark:bg-agri-green-600"
                                onClick={handleAddItem}
                                disabled={!currentItem.productId}
                            >
                                <Plus className="mr-2 h-4 w-4" /> Add Item
                            </Button>
                        </div>
                    </div>
                </div>

                <Separator className="my-4 dark:bg-agri-green-700" />

                {/* Payment Details */}
                <div className="space-y-4">
                    <h3 className="text-lg font-medium">Payment Details</h3>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <FormField
                            control={form.control}
                            name="paymentMethod"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Payment Method</FormLabel>
                                    <Select
                                        onValueChange={field.onChange}
                                        defaultValue={field.value}
                                    >
                                        <FormControl>
                                            <SelectTrigger className="dark:bg-agri-green-700 dark:border-agri-green-600 dark:text-white">
                                                <SelectValue placeholder="Select payment method" />
                                            </SelectTrigger>
                                        </FormControl>
                                        <SelectContent className="dark:bg-agri-green-700 dark:border-agri-green-600 dark:text-white">
                                            {Object.values(PaymentMethod).map(method => (
                                                <SelectItem
                                                    key={method}
                                                    value={method}
                                                    className="dark:hover:bg-agri-green-600"
                                                >
                                                    {method}
                                                </SelectItem>
                                            ))}
                                        </SelectContent>
                                    </Select>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />

                        <FormField
                            control={form.control}
                            name="transactionDate"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Transaction Date</FormLabel>
                                    <FormControl>
                                        <Input
                                            type="date"
                                            {...field}
                                            className="dark:bg-agri-green-700 dark:border-agri-green-600 dark:text-white"
                                        />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                    </div>

                    <div className="space-y-4">
                        <FormField
                            control={form.control}
                            name="paidAmount"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Paid Amount</FormLabel>
                                    <FormControl>
                                        <Input
                                            type="number"
                                            step="0.01"
                                            {...field}
                                            onChange={(e) => field.onChange(parseFloat(e.target.value) || 0)}
                                            className="dark:bg-agri-green-700 dark:border-agri-green-600 dark:text-white"
                                        />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />

                        <div className="flex justify-between items-center p-4 bg-gray-50 rounded-md dark:bg-agri-green-700/50">
                            <span className="text-sm font-medium">Total Amount:</span>
                            <span className="font-bold">${totalAmount.toFixed(2)}</span>
                        </div>

                        <div className="flex justify-between items-center p-4 bg-gray-50 rounded-md dark:bg-agri-green-700/50">
                            <span className="text-sm font-medium">Amount Due:</span>
                            <span className="font-bold text-amber-600 dark:text-amber-400">
                                ${Math.max(0, totalAmount - (parseFloat(form.watch("paidAmount").toString()) || 0)).toFixed(2)}
                            </span>
                        </div>
                    </div>

                    <FormField
                        control={form.control}
                        name="notes"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Notes (Optional)</FormLabel>
                                <FormControl>
                                    <Input
                                        {...field}
                                        className="dark:bg-agri-green-700 dark:border-agri-green-600 dark:text-white"
                                    />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                </div>

                {form.formState.errors.root && (
                    <p className="text-sm font-medium text-red-500 dark:text-red-400">
                        {form.formState.errors.root.message}
                    </p>
                )}

                <div className="flex justify-end space-x-2 pt-4">
                    <Button
                        type="button"
                        variant="outline"
                        onClick={onClose}
                        className="dark:border-agri-green-600 dark:text-white dark:hover:bg-agri-green-700"
                    >
                        Cancel
                    </Button>
                    <Button
                        type="submit"
                        className="bg-agri-green-600 hover:bg-agri-green-700 text-white"
                        disabled={items.length === 0}
                    >
                        <Calculator className="mr-2 h-4 w-4" /> Complete Transaction
                    </Button>
                </div>
            </form>
        </Form>
    );
};

export default TransactionForm;

function getCustomersByShopId(shopId: string) {
    // This is a temporary implementation
    // In a real app, this would be imported from dataMethods.ts
    return require('@/data/dummyData').customers.filter(
        (customer: any) => customer.shopId === shopId
    );
}
