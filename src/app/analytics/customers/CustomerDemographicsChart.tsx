"use client";
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const TopCustomersWithDebtChart: React.FC = () => {
  // Static data of customers with debts
  const debtData = [
    { name: 'Customer 1', debt: 12000 },
    { name: 'Customer 2', debt: 8000 },
    { name: 'Customer 3', debt: 6000 },
    { name: 'Customer 4', debt: 5000 },
    { name: 'Customer 5', debt: 4000 },
    { name: 'Customer 6', debt: 3500 },
    { name: 'Customer 7', debt: 2500 },
    { name: 'Customer 8', debt: 1500 },
  ];

  // Sort the data by debt in descending order
  const sortedDebtData = debtData.sort((a, b) => b.debt - a.debt);

  return (
    <Card>
      <CardHeader>
        <CardTitle>Top Customers with Debt</CardTitle>
      </CardHeader>
      <CardContent className="h-80">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={sortedDebtData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip formatter={(value) => [`$${value.toLocaleString()}`, 'Debt Amount']} />
            <Legend />
            <Bar dataKey="debt" name="Debt" fill="#8884d8" />
          </BarChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
};

export default TopCustomersWithDebtChart;
