"use client"
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import React from 'react';

const dummyProducts = [
    // Fertilizers
    { id: 1, name: 'IFFCO Urea 46%', price: '₹270', category: 'fertilizers' },
    { id: 2, name: 'NPK 20:20:0:0 (IFFCO)', price: '₹700', category: 'fertilizers' },
    { id: 3, name: 'NPK 10:26:26 (NFCL)', price: '₹1,111', category: 'fertilizers' },
    { id: 4, name: 'DAP 18:46:0 (IFFCO)', price: '₹1,125', category: 'fertilizers' },
    { id: 5, name: 'Potash (MOP) 60% (MFL)', price: '₹0', category: 'fertilizers' },
    { id: 6, name: 'Katyayani NPK 19:19:19', price: '₹732', category: 'fertilizers' },
    { id: 7, name: 'Katyayani Ferrous Sulphate', price: '₹305', category: 'fertilizers' },
    { id: 8, name: 'Katyayani Pro Grow (Gibberellic Acid)', price: '₹373', category: 'fertilizers' },

    // Pesticides
    { id: 9, name: 'Bayer Confidor 17.8% SL', price: '₹1,200', category: 'pesticides' },
    { id: 10, name: 'Syngenta Karate 5% EC', price: '₹850', category: 'pesticides' },
    { id: 11, name: 'Tata Rallis Reeva 50% WP', price: '₹1,050', category: 'pesticides' },
    { id: 12, name: 'UPL Saaf Fungicide', price: '₹600', category: 'pesticides' },
    { id: 13, name: 'Indofil M-45', price: '₹400', category: 'pesticides' },
    { id: 14, name: 'Dhanuka M-45', price: '₹420', category: 'pesticides' },
    { id: 15, name: 'BASF Cabrio Top', price: '₹1,500', category: 'pesticides' },

    // Seeds
    { id: 16, name: 'Mahyco Hybrid Tomato Seeds', price: '₹150', category: 'seeds' },
    { id: 17, name: 'Syngenta Corn Seeds', price: '₹1,200', category: 'seeds' },
    { id: 18, name: 'Nunhems Watermelon Seeds', price: '₹500', category: 'seeds' },
    { id: 19, name: 'Rasi Cotton Seeds', price: '₹730', category: 'seeds' },
    { id: 20, name: 'Advanta Paddy Seeds', price: '₹1,000', category: 'seeds' },
    { id: 21, name: 'Kaveri Maize Seeds', price: '₹1,100', category: 'seeds' },
    { id: 22, name: 'JK Agri Groundnut Seeds', price: '₹1,300', category: 'seeds' },
    { id: 23, name: 'Nuziveedu Hybrid Bajra Seeds', price: '₹600', category: 'seeds' },

    // Others
    { id: 24, name: 'Drip Irrigation Kit (100 plants)', price: '₹2,500', category: 'others' },
    { id: 25, name: 'Tarpaulin Sheet 12x18 ft', price: '₹1,200', category: 'others' },
    { id: 26, name: 'Knapsack Sprayer 16L', price: '₹1,800', category: 'others' },
    { id: 27, name: 'Soil Testing Kit', price: '₹3,500', category: 'others' },
    { id: 28, name: 'Plastic Crates (Set of 5)', price: '₹1,000', category: 'others' },
    { id: 29, name: 'Vermicompost 50 kg', price: '₹400', category: 'others' },
    { id: 30, name: 'Cocopeat Block 5 kg', price: '₹250', category: 'others' },
];

export default function Page() {
  const [searchTerm, setSearchTerm] = React.useState('');
    const [categoryFilter, setCategoryFilter] = React.useState('all');


    const filteredProducts = dummyProducts.filter(product =>
        product.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
        (categoryFilter === 'all' || product.category === categoryFilter)
    );


  return (
    <div className="container mx-auto p-4">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">Products Available</h1>
        <Button className="bg-green-500 hover:bg-green-600">Add Product</Button>
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
                      <SelectValue placeholder="Filter by category" />
                  </SelectTrigger>
                  <SelectContent>
                      <SelectItem value="all">All Categories</SelectItem>
                      <SelectItem value="pesticides">Pesticides</SelectItem>
                      <SelectItem value="fertilizers">Fertilizers</SelectItem>
                      <SelectItem value="seeds">Seeds</SelectItem>
                      <SelectItem value="others">Others</SelectItem>
                  </SelectContent>
              </Select>

      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredProducts.map((product) => (
          <Card key={product.id}>
            <CardHeader>
              <CardTitle>{product.name}</CardTitle>
            </CardHeader>
            <CardContent>
              <p>Price: {product.price}</p>
              <p>Category: {product.category}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}