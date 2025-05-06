"use client";
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { PieChart, Pie, Tooltip, Legend, ResponsiveContainer, Cell } from 'recharts';

const PurchaseFrequencyChart: React.FC = () => {
  const [selectedPeriod, setSelectedPeriod] = useState('Monthly');

  const frequencyData = {
    Monthly: [
      { name: 'Weekly', value: 25 },
      { name: 'Bi-weekly', value: 30 },
      { name: 'Monthly', value: 20 },
      { name: 'Quarterly', value: 15 },
      { name: 'Yearly+', value: 10 }
    ],
    Weekly: [
      { name: 'Weekly', value: 50 },
      { name: 'Bi-weekly', value: 20 },
      { name: 'Monthly', value: 10 },
    ],
    Quarterly: [
      { name: 'Quarterly', value: 60 },
      { name: 'Yearly+', value: 20 },
    ]
  };

  const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#8884d8'];

  return (
    <Card>
      <CardHeader>
        <CardTitle>Purchase Frequency</CardTitle>
      </CardHeader>
      <CardContent className="h-80 flex items-center justify-center">
        <div className="mb-4">
          <label htmlFor="period" className="text-xl font-semibold">Select Time Period:</label>
          <select
            id="period"
            value={selectedPeriod}
            onChange={(e) => setSelectedPeriod(e.target.value)}
            className="ml-2 p-2 border rounded"
          >
            <option value="Weekly">Weekly</option>
            <option value="Monthly">Monthly</option>
            <option value="Quarterly">Quarterly</option>
          </select>
        </div>
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={frequencyData[selectedPeriod]}
              cx="50%"
              cy="50%"
              labelLine={false}
              outerRadius={100}
              fill="#8884d8"
              dataKey="value"
              label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
            >
              {frequencyData[selectedPeriod].map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
            <Tooltip formatter={(value) => [`${value}%`, 'Customers']} />
            <Legend />
          </PieChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
};

export default PurchaseFrequencyChart;
