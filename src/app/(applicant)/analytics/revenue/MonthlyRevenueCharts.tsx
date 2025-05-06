"use client";

import React, { useState } from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { Select, SelectTrigger, SelectContent, SelectItem } from '@/components/ui/select';

// Sample datasets
const dataSets = {
  weekly: [
    { name: 'Mon', value: 2000 },
    { name: 'Tue', value: 2500 },
    { name: 'Wed', value: 3000 },
    { name: 'Thu', value: 2200 },
    { name: 'Fri', value: 2800 },
    { name: 'Sat', value: 3200 },
    { name: 'Sun', value: 3100 },
  ],
  monthly: [
    { name: 'Jan', value: 12000 },
    { name: 'Feb', value: 15000 },
    { name: 'Mar', value: 18000 },
    { name: 'Apr', value: 16000 },
    { name: 'May', value: 21000 },
    { name: 'Jun', value: 19000 },
    { name: 'Jul', value: 24000 },
    { name: 'Aug', value: 26000 },
    { name: 'Sep', value: 23000 },
    { name: 'Oct', value: 25000 },
    { name: 'Nov', value: 28000 },
    { name: 'Dec', value: 30000 }
  ],
  quarterly: [
    { name: 'Q1', value: 45000 },
    { name: 'Q2', value: 56000 },
    { name: 'Q3', value: 73000 },
    { name: 'Q4', value: 83000 },
  ],
  yearly: [
    { name: '2021', value: 220000 },
    { name: '2022', value: 260000 },
    { name: '2023', value: 310000 },
    { name: '2024', value: 370000 },
  ]
};

const MonthlyRevenueChart = () => {
  const [range, setRange] = useState("monthly");

  return (
    <Card className="relative">
      <CardHeader className="flex flex-row justify-between items-center">
        <CardTitle>Revenue Trend</CardTitle>
        <Select value={range} onValueChange={(value) => setRange(value)}>
          <SelectTrigger className="w-[130px]">
            {range.charAt(0).toUpperCase() + range.slice(1)}
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="weekly">Weekly</SelectItem>
            <SelectItem value="monthly">Monthly</SelectItem>
            <SelectItem value="quarterly">Quarterly</SelectItem>
            <SelectItem value="yearly">Yearly</SelectItem>
          </SelectContent>
        </Select>
      </CardHeader>

      <CardContent className="h-80">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={dataSets[range]}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip formatter={(value) => [`$${value}`, 'Revenue']} />
            <Area type="monotone" dataKey="value" stroke="#82ca9d" fill="#82ca9d" fillOpacity={0.3} />
          </AreaChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
};

export default MonthlyRevenueChart;
