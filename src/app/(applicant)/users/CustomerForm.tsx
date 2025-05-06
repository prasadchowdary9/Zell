"use client";

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
import { Customer } from "@/types/interfaces";
import { zodResolver } from "@hookform/resolvers/zod";
import React from "react";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { useRouter } from 'next/navigation';

// ✅ Validation schema
const formSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  phone: z.string().min(10, "Phone number must be at least 10 digits"),
  email: z.string().email("Invalid email address").optional().or(z.literal("")),
  village: z.string().optional(),
  mandal: z.string().optional(),
  state: z.string().min(1, "Please select a state"),
  image: z.string().url("Invalid image URL"),
  district: z.string().optional(),
});

interface CustomerFormProps {
  customer?: Customer;
  onClose: () => void;
}

const CustomerForm: React.FC<CustomerFormProps> = ({ customer, onClose }) => {
  const isEdit = !!customer;
  const navigate = useRouter();

  const defaultValues = {
    name: customer?.name || "",
    phone: customer?.phone || "",
    email: customer?.email || "",
    village: "",
    mandal: "",
    district: "",
    state: "Andhra Pradesh",
  };
  const states = [
    "Andhra Pradesh",
    "Arunachal Pradesh",
    "Assam",
    "Bihar",
    "Chhattisgarh",
    "Goa",
    "Gujarat",
    "Haryana",
    "Himachal Pradesh",
    "Jharkhand",
    "Karnataka",
    "Kerala",
    "Madhya Pradesh",
    "Maharashtra",
    "Manipur",
    "Meghalaya",
    "Mizoram",
    "Nagaland",
    "Odisha",
    "Punjab",
    "Rajasthan",
    "Sikkim",
    "Tamil Nadu",
    "Telangana",
    "Tripura",
    "Uttar Pradesh",
    "Uttarakhand",
    "West Bengal",
    "Andaman and Nicobar Islands",
    "Chandigarh",
    "Dadra and Nagar Haveli and Daman and Diu",
    "Delhi",
    "Jammu and Kashmir",
    "Ladakh",
    "Lakshadweep",
    "Puducherry"
  ];

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues,
  });

  const onSubmit = (values: z.infer<typeof formSchema>) => {
    console.log("Submitted Customer:", values);
    setTimeout(onClose, 500);
  };

  return (
    <Form {...form}>
  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <FormField
        control={form.control}
        name="name"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Full Name</FormLabel>
            <FormControl>
              <Input
                placeholder="Enter customer name"
                {...field}
                className="dark:bg-agri-green-700 dark:border-agri-green-600 dark:text-white"
              />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />

      <FormField
        control={form.control}
        name="phone"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Phone Number</FormLabel>
            <FormControl>
              <Input
                placeholder="Enter phone number"
                {...field}
                className="dark:bg-agri-green-700 dark:border-agri-green-600 dark:text-white"
              />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />

      <FormField
        control={form.control}
        name="email"
        render={({ field }) => (
          <FormItem className="md:col-span-2">
            <FormLabel>Email Address (Optional)</FormLabel>
            <FormControl>
              <Input
                placeholder="Enter email address"
                type="email"
                {...field}
                value={field.value || ""}
                className="dark:bg-agri-green-700 dark:border-agri-green-600 dark:text-white"
              />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />

      <FormField
        control={form.control}
        name="state"
        render={({ field }) => (
          <FormItem>
            <FormLabel>State</FormLabel>
            <Select onValueChange={field.onChange} defaultValue={field.value}>
              <FormControl>
                <SelectTrigger className="dark:bg-agri-green-700 dark:border-agri-green-600 dark:text-white">
                  <SelectValue placeholder="Select state" />
                </SelectTrigger>
              </FormControl>
              <SelectContent className="dark:bg-agri-green-700 dark:border-agri-green-600 dark:text-white">
                {states.map((state) => (
                  <SelectItem
                    key={state}
                    value={state}
                    className="dark:hover:bg-agri-green-600"
                  >
                    {state}
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
        name="district"
        render={({ field }) => (
          <FormItem>
            <FormLabel>District</FormLabel>
            <FormControl>
              <Input
                placeholder="Enter District"
                {...field}
                className="dark:bg-agri-green-700 dark:border-agri-green-600 dark:text-white"
              />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />

      <FormField
        control={form.control}
        name="mandal"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Mandal/Taluk</FormLabel>
            <FormControl>
              <Input
                placeholder="Enter mandal/taluk"
                {...field}
                className="dark:bg-agri-green-700 dark:border-agri-green-600 dark:text-white"
              />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />

      <FormField
        control={form.control}
        name="village"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Village</FormLabel>
            <FormControl>
              <Input
                placeholder="Enter village"
                {...field}
                className="dark:bg-agri-green-700 dark:border-agri-green-600 dark:text-white"
              />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
          />
           {/* Image Upload Field */}
              <FormField
                control={form.control}
                name="image"
                render={({ field }) => (
                  <FormItem >
                    <FormLabel>Farmer Image (Optional)</FormLabel>
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
    </div>

    <div className="flex justify-end space-x-3 pt-6">
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
        {isEdit ? "Update Farmer" : "Add Farmer"}
      </Button>
    </div>
  </form>
</Form>

  );
};

export default CustomerForm;
