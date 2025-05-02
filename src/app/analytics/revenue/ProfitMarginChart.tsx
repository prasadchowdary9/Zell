"use client";
import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
  { name: 'Jan', revenue: 12000, cost: 8000, profit: 4000 },
  { name: 'Feb', revenue: 15000, cost: 9000, profit: 6000 },
  { name: 'Mar', revenue: 18000, cost: 10000, profit: 8000 },
  { name: 'Apr', revenue: 16000, cost: 9500, profit: 6500 },
  { name: 'May', revenue: 21000, cost: 12000, profit: 9000 },
  { name: 'Jun', revenue: 19000, cost: 11000, profit: 8000 }
];

const ProfitMarginChart = () => (
  <Card>
    <CardHeader>
      <CardTitle>Profit Margins</CardTitle>
    </CardHeader>
    <CardContent className="h-80">
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip formatter={(value) => [`$${value}`, '']} />
          <Legend />
          <Line type="monotone" dataKey="revenue" stroke="#8884d8" name="Revenue" />
          <Line type="monotone" dataKey="cost" stroke="#ff7300" name="Cost" />
          <Line type="monotone" dataKey="profit" stroke="#82ca9d" name="Profit" />
        </LineChart>
      </ResponsiveContainer>
    </CardContent>
  </Card>
);

export default ProfitMarginChart;
