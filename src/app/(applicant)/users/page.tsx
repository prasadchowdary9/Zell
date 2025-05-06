"use client";

import {
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";
import {
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { SidebarSeparator } from "@/components/ui/sidebar";
import { AlertDialog } from "@radix-ui/react-alert-dialog";
import { DropdownMenu } from "@radix-ui/react-dropdown-menu";
import { Edit, MoreVertical, Plus, Trash2, User } from "lucide-react";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import CustomerForm from "../users/CustomerForm";

const dummyFarmers = [
  { id: 1, name: "Ravi Kumar", phone: "9876543210", village: "Anakapalle" },
  { id: 2, name: "Sita Rani", phone: "9123456780", village: "Pendurthi" },
  { id: 3, name: "Mahesh Babu", phone: "9988776655", village: "Gajuwaka" },
  { id: 4, name: "Lakshmi Devi", phone: "9876123456", village: "Malkapuram" },
  { id: 5, name: "Rajesh Kumar", phone: "9876123456", village: "Malkapuram" },
  { id: 6, name: "Anita Sharma", phone: "9876123456", village: "Malkapuram" },
  { id: 7, name: "Vikram Singh", phone: "9876123456", village: "Malkapuram" },
  { id: 8, name: "Priya Patel", phone: "9876123456", village: "Malkapuram" },
  { id: 9, name: "Arjun Reddy", phone: "9876123456", village: "Malkapuram" },
  { id: 10, name: "Sunita Rao", phone: "9876123456", village: "Malkapuram" },
];

export default function FarmersPage() {
  const [searchTerm, setSearchTerm] = React.useState("");
  const [villageFilter, setVillageFilter] = React.useState("all");
  const [isFormOpen, setIsFormOpen] = useState(false);
  const router = useRouter();

  const filteredFarmers = dummyFarmers.filter(
    (farmer) =>
      (farmer.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        farmer.phone.includes(searchTerm)) &&
      (villageFilter === "all" || farmer.village === villageFilter)
  );

  const uniqueVillages = [
    ...new Set(dummyFarmers.map((farmer) => farmer.village)),
  ];

  return (
    <div className="container mx-auto p-4">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">Farmers</h1>
        <Button
          className="bg-green-500 hover:bg-green-600"
          onClick={() => setIsFormOpen(true)}
        >
          <Plus />
          Add Farmer
        </Button>
      </div>
      {isFormOpen && (
        <div>
          <CustomerForm onClose={() => setIsFormOpen(false)} />
          <SidebarSeparator className=" m-4" />
        </div>
      )}

      <div className="flex gap-4 mb-6">
        <Input
          placeholder="Search farmers..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="max-w-sm"
        />

        <Select
          value={villageFilter}
          onValueChange={(value) => setVillageFilter(value)}
        >
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Filter by village" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Villages</SelectItem>
            {uniqueVillages.map((village) => (
              <SelectItem key={village} value={village}>
                {village}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      <div className="space-y-4">
        {filteredFarmers.map((farmer) => (
          <div
            key={farmer.id}
            className="flex items-center justify-between bg-primary-foreground shadow-md rounded-lg p-4"
          >
            <div>
              <p className="text-lg font-bold">{farmer.name}</p>
              <p className="text-sm text-gray-600">Phone: {farmer.phone}</p>
              <p className="text-sm text-gray-600">Village: {farmer.village}</p>
            </div>
            <div className="flex gap-2">
              <Button
                variant="outline"
                className="bg-blue-500 dark:bg-blue-500 text-black hover:bg-blue-700 dark:hover:bg-blue-900"
                onClick={() => router.push(`/users/${farmer.id}`)}
              >
                <User /> View Profile
              </Button>

              <Button
                variant="outline"
                className="bg-green-500 hover:bg-green-600 dark:bg-green-500 text-black hover:bg-green-600 dark:hover:bg-green-600"
              >
                <Plus />
                Add Transaction
              </Button>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" size="icon">
                    <MoreVertical className="h-4 w-4" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  <DropdownMenuItem>
                    <Edit />
                    Edit
                  </DropdownMenuItem>
                  <AlertDialog>
                    <AlertDialogTrigger asChild>
                      <DropdownMenuItem onSelect={(e) => e.preventDefault()}>
                        <Trash2 className="h-4 w-4" />
                        <span className="text-red-500">Delete</span>
                      </DropdownMenuItem>
                    </AlertDialogTrigger>
                    <AlertDialogContent>
                      <AlertDialogHeader>
                        <AlertDialogTitle>
                          Are you sure you want to Delete?
                        </AlertDialogTitle>
                        <AlertDialogDescription>
                          This action will Delete User from database.
                        </AlertDialogDescription>
                      </AlertDialogHeader>
                      <AlertDialogFooter>
                        <AlertDialogCancel>Cancel</AlertDialogCancel>
                        <AlertDialogAction className="text-black-500 bg-red-600 ">
                          Delete
                        </AlertDialogAction>
                      </AlertDialogFooter>
                    </AlertDialogContent>
                  </AlertDialog>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
