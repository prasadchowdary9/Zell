"use client"

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import React from 'react';

const inventoryItems = [
    // Equipment
    { id: 1, name: 'Wooden Plough', price: '₹1,200', category: 'Equipment' },
    { id: 2, name: 'Poultry Cages', price: '₹800', category: 'Equipment' },
    { id: 3, name: 'Seed Planter Machine', price: '₹15,000', category: 'Equipment' },
    { id: 4, name: 'Sprayer Machine', price: '₹3,500', category: 'Equipment' },

    // Tools
    { id: 5, name: 'Shears', price: '₹250', category: 'Tools' },
    { id: 6, name: 'Sticks', price: '₹150', category: 'Tools' },
    { id: 7, name: 'Plastic Baskets', price: '₹500', category: 'Tools' },
    { id: 8, name: 'Nursery Trays', price: '₹600', category: 'Tools' },

    // Miscellaneous
    { id: 9, name: 'Nylon Ropes', price: '₹100', category: 'Miscellaneous' },
    { id: 10, name: 'Plastic Covers', price: '₹200', category: 'Miscellaneous' },
    { id: 11, name: 'Rainwater Tanks', price: '₹7,000', category: 'Miscellaneous' },
    { id: 12, name: 'Solar Lights', price: '₹1,500', category: 'Miscellaneous' },
];

export default function Page() {
    const [searchTerm, setSearchTerm] = React.useState('');
    const [categoryFilter, setCategoryFilter] = React.useState('All');

    const filteredItems = inventoryItems.filter(item =>
        item.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
        (categoryFilter === 'All' || item.category === categoryFilter)
    );

    return (
        <div className="container mx-auto p-4">
            <div className="flex justify-between items-center mb-6">
                <h1 className="text-3xl font-bold">Agricultural Inventory</h1>
                <Button className="bg-green-500 hover:bg-green-600">Add Item</Button>
            </div>

            <div className="flex gap-4 mb-6">
                <Input
                    placeholder="Search products..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="max-w-sm"
                />

                <Select value={categoryFilter} onValueChange={(value) => setCategoryFilter(value)}>
                    <SelectTrigger className="w-[180px]">
                        <SelectValue placeholder="Filter by Category" />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectItem value="All">All Categories</SelectItem>
                        <SelectItem value="Equipment">Equipment</SelectItem>
                        <SelectItem value="Tools">Tools</SelectItem>
                        <SelectItem value="Miscellaneous">Miscellaneous</SelectItem>
                    </SelectContent>
                </Select>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredItems.map((item) => (
                    <Card key={item.id}>
                        <CardHeader>
                            <CardTitle>{item.name}</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p>Price: {item.price}</p>
                            <p>Category: {item.category}</p>
                        </CardContent>
                    </Card>
                ))}
            </div>
        </div>
    );
}
