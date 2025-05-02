"use client";
import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { PieChart, Pie, Cell, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
  { name: 'Vegetables', value: 40 },
  { name: 'Fruits', value: 30 },
  { name: 'Dairy', value: 15 },
  { name: 'Grains', value: 10 },
  { name: 'Others', value: 5 }
];

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#8884d8'];

const RevenueSourceChart = () => (
  <Card>
    <CardHeader>
      <CardTitle>Revenue by Source</CardTitle>
    </CardHeader>
    <CardContent className="h-80 flex items-center justify-center">
      <ResponsiveContainer width="100%" height="100%">
        <PieChart>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            labelLine={false}
            outerRadius={100}
            dataKey="value"
            label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
          <Tooltip formatter={(value) => [`${value}%`, 'Percentage']} />
          <Legend />
        </PieChart>
      </ResponsiveContainer>
    </CardContent>
  </Card>
);

export default RevenueSourceChart;
