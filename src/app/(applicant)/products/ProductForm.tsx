"use client";

import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { format } from "date-fns";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Form, FormField, FormItem, FormLabel, FormControl, FormMessage } from "@/components/ui/form";
import { Select, SelectTrigger, SelectContent, SelectValue, SelectItem } from "@/components/ui/select";
import { Popover, PopoverTrigger, PopoverContent } from "@/components/ui/popover";
import { Calendar } from "@/components/ui/calendar";
import { CalendarIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import { ProductCategory, ProductUnit } from "@/types/enums";
import { Product } from "@/types/interfaces";

const formSchema = z.object({
  name: z.string().min(2, "Product name is required"),
  description: z.string().min(5, "Description should be at least 5 characters"),
  category: z.string().min(1, "Select a category"),
  price: z.coerce.number().positive("Price must be a positive number"),
  costPrice: z.coerce.number().positive("Cost price must be a positive number"),
  unit: z.string().min(1, "Select a unit"),
  stockQuantity: z.coerce.number().int().nonnegative(),
  lowStockThreshold: z.coerce.number().int().nonnegative(),
  manufacturer: z.string().min(2, "Manufacturer is required"),
  expiryDate: z.date().optional(),
  image: z.instanceof(File).optional(),
});



interface ProductFormProps {
  product?: Product;
  onClose: () => void;
}

const ProductForm: React.FC<ProductFormProps> = ({ product, onClose }) => {
  const isEdit = !!product;

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: product?.name || "",
      description: product?.description || "",
      category: product?.category || ProductCategory.FERTILIZERS,
      price: product?.price || 0,
      costPrice: product?.costPrice || 0,
      unit: product?.unit || ProductUnit.KG,
      stockQuantity: product?.stockQuantity || 0,
      lowStockThreshold: product?.lowStockThreshold || 10,
      manufacturer: product?.manufacturer ? String(product.manufacturer) : "",
      expiryDate: product?.expiryDate ? new Date(product.expiryDate) : undefined,
      image: product?.image instanceof File ? product.image : undefined,
    },
  });

  const onSubmit = (values: z.infer<typeof formSchema>) => {
    console.log(values);
    setTimeout(() => {
      onClose();
    }, 500);
  };

  return (
    <Form {...form}>
  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
    <FormField
      control={form.control}
      name="name"
      render={({ field }) => (
        <FormItem>
          <FormLabel>Product Name</FormLabel>
          <FormControl>
            <Input placeholder="e.g. Urea 46%" {...field} />
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />

    <FormField
      control={form.control}
      name="description"
      render={({ field }) => (
        <FormItem>
          <FormLabel>Description</FormLabel>
          <FormControl>
            <Textarea placeholder="Brief description of the product" {...field} />
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />

    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <FormField
        control={form.control}
        name="category"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Category</FormLabel>
            <Select onValueChange={field.onChange} defaultValue={field.value}>
              <FormControl>
                <SelectTrigger>
                  <SelectValue placeholder="Select category" />
                </SelectTrigger>
              </FormControl>
              <SelectContent>
                {Object.values(ProductCategory).map((cat) => (
                  <SelectItem key={cat} value={cat}>
                    {cat.charAt(0).toUpperCase() + cat.slice(1)}
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
        name="unit"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Unit</FormLabel>
            <Select onValueChange={field.onChange} defaultValue={field.value}>
              <FormControl>
                <SelectTrigger>
                  <SelectValue placeholder="Select unit" />
                </SelectTrigger>
              </FormControl>
              <SelectContent>
                {Object.values(ProductUnit).map((unit) => (
                  <SelectItem key={unit} value={unit}>
                    {unit.toUpperCase()}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            <FormMessage />
          </FormItem>
        )}
      />
    </div>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <FormField
        control={form.control}
        name="price"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Selling Price</FormLabel>
            <FormControl>
              <Input type="number" placeholder="e.g. 1000" {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />

      <FormField
        control={form.control}
        name="costPrice"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Cost Price</FormLabel>
            <FormControl>
              <Input type="number" placeholder="e.g. 850" {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
    </div>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <FormField
        control={form.control}
        name="stockQuantity"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Stock Quantity</FormLabel>
            <FormControl>
              <Input type="number" placeholder="e.g. 100" {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />

      <FormField
        control={form.control}
        name="lowStockThreshold"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Low Stock Threshold</FormLabel>
            <FormControl>
              <Input type="number" placeholder="e.g. 10" {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
    </div>

    <FormField
      control={form.control}
      name="manufacturer"
      render={({ field }) => (
        <FormItem>
          <FormLabel>Manufacturer</FormLabel>
          <FormControl>
            <Input placeholder="e.g. IFFCO" {...field} />
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />

    <FormField
      control={form.control}
      name="expiryDate"
      render={({ field }) => (
        <FormItem className="flex flex-col">
          <FormLabel>Expiry Date</FormLabel>
          <Popover>
            <PopoverTrigger asChild>
              <FormControl>
                <Button
                  variant="outline"
                  className={cn(
                    "justify-start text-left font-normal",
                    !field.value && "text-muted-foreground"
                  )}
                >
                  {field.value ? format(field.value, "PPP") : "Select expiry date"}
                  <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                </Button>
              </FormControl>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0" align="start">
              <Calendar
                mode="single"
                selected={field.value}
                onSelect={field.onChange}
                disabled={(date) => date < new Date()}
                initialFocus
              />
            </PopoverContent>
          </Popover>
          <FormMessage />
        </FormItem>
      )}
    />

    {/* Image Upload Field */}
    <FormField
      control={form.control}
      name="image"
      render={({ field }) => (
        <FormItem>
          <FormLabel>Product Image</FormLabel>
          <FormControl>
            <Input
              type="file"
              accept="image/*"
              onChange={(e) => field.onChange(e.target.files?.[0])}
            />
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />

    <div className="flex justify-end gap-3 pt-4">
      <Button
        type="button"
        onClick={onClose}
        className="bg-red-600 hover:bg-red-700 text-white"
      >
        Cancel
      </Button>
      <Button
        type="submit"
        className="bg-green-600 hover:bg-green-700 text-white"
      >
        {isEdit ? "Update Product" : "Add Product"}
      </Button>
    </div>
  </form>
</Form>

  );
};

export default ProductForm;
