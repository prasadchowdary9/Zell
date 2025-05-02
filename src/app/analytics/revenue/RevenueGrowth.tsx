"use client";
import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
  { name: '2020', value: 80000 },
  { name: '2021', value: 100000 },
  { name: '2022', value: 120000 },
  { name: '2023', value: 150000 },
  { name: '2024', value: 180000 }
];

const RevenueGrowthChart = () => (
  <Card>
    <CardHeader>
      <CardTitle>Revenue Growth</CardTitle>
    </CardHeader>
    <CardContent className="h-80">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip formatter={(value) => [`$${value}`, 'Revenue']} />
          <Legend />
          <Bar dataKey="value" name="Annual Revenue" fill="#8884d8" />
        </BarChart>
      </ResponsiveContainer>
    </CardContent>
  </Card>
);

export default RevenueGrowthChart;
