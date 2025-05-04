'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
  { name: 'Tomatoes', value: 1200 },
  { name: 'Potatoes', value: 900 },
  { name: 'Onions', value: 800 },
  { name: 'Carrots', value: 700 },
  { name: 'Lettuce', value: 600 }
];

const BestSellingProductsChart = () => (
  <Card>
    <CardHeader>
      <CardTitle>Best Selling Products</CardTitle>
    </CardHeader>
    <CardContent className="h-80">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={data} layout="vertical" margin={{ top: 5, right: 30, left: 30, bottom: 5 }}>
          <XAxis type="number" />
          <YAxis type="category" dataKey="name" />
          <CartesianGrid strokeDasharray="3 3" />
          <Tooltip formatter={(value) => [`${value} units`, 'Units Sold']} />
          <Legend />
          <Bar dataKey="value" name="Units Sold" fill="#82ca9d" />
        </BarChart>
      </ResponsiveContainer>
    </CardContent>
  </Card>
);

export default BestSellingProductsChart;
