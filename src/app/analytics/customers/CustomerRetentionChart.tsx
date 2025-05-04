"use client";
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const CustomerRetentionChart: React.FC = () => {
  const [selectedPeriod, setSelectedPeriod] = useState('Monthly');

  const retentionData = {
    Monthly: [
      { name: 'Jan', retained: 85, new: 15 },
      { name: 'Feb', retained: 82, new: 18 },
      { name: 'Mar', retained: 78, new: 22 },
      { name: 'Apr', retained: 80, new: 20 },
      { name: 'May', retained: 85, new: 15 },
      { name: 'Jun', retained: 87, new: 13 }
    ],
    Weekly: [
      { name: 'Week 1', retained: 80, new: 20 },
      { name: 'Week 2', retained: 85, new: 15 },
      { name: 'Week 3', retained: 88, new: 12 },
      { name: 'Week 4', retained: 83, new: 17 },
    ],
    Quarterly: [
      { name: 'Q1', retained: 80, new: 20 },
      { name: 'Q2', retained: 82, new: 18 },
    ]
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Customer Retention</CardTitle>
      </CardHeader>
      <CardContent className="h-80">
        <div className="mb-4">
          <label htmlFor="period" className="text-xl font-semibold">Select Time Period:</label>
          <select
            id="period"
            value={selectedPeriod}
            onChange={(e) => setSelectedPeriod(e.target.value)}
            className="ml-2 p-2 border rounded bg-black text-white-700"
          >
            <option value="Weekly">Weekly</option>
            <option value="Monthly">Monthly</option>
            <option value="Quarterly">Quarterly</option>
          </select>
        </div>
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={retentionData[selectedPeriod]} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip formatter={(value) => [`${value}%`, '']} />
            <Legend />
            <Bar dataKey="retained" name="Retained Customers" stackId="a" fill="#82ca9d" />
            <Bar dataKey="new" name="New Customers" stackId="a" fill="#8884d8" />
          </BarChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
};

export default CustomerRetentionChart;
