'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
  { name: 'Tomatoes', turnover: 12 },
  { name: 'Potatoes', turnover: 8 },
  { name: 'Onions', turnover: 10 },
  { name: 'Carrots', turnover: 7 },
  { name: 'Lettuce', turnover: 15 }
];

const InventoryOverviewChart = () => (
  <Card>
    <CardHeader>
      <CardTitle>Inventory Turnover</CardTitle>
    </CardHeader>
    <CardContent className="h-80">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip formatter={(value) => [`${value} times/year`, 'Turnover Rate']} />
          <Legend />
          <Bar dataKey="turnover" fill="#8884d8" />
        </BarChart>
      </ResponsiveContainer>
    </CardContent>
  </Card>
);

export default InventoryOverviewChart;
