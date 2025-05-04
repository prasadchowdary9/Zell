'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { BarChart, Bar, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
  { name: 'Tomatoes', costPrice: 0.5, sellingPrice: 1.2, margin: 58 },
  { name: 'Potatoes', costPrice: 0.4, sellingPrice: 0.9, margin: 55 },
  { name: 'Onions', costPrice: 0.3, sellingPrice: 0.8, margin: 62 },
  { name: 'Carrots', costPrice: 0.35, sellingPrice: 0.7, margin: 50 },
  { name: 'Lettuce', costPrice: 0.45, sellingPrice: 1.0, margin: 55 }
];

const ProfitMarginsChart = () => (
  <Card>
    <CardHeader>
      <CardTitle>Profit Margins</CardTitle>
    </CardHeader>
    <CardContent className="h-80">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis yAxisId="left" />
          <YAxis yAxisId="right" orientation="right" />
          <Tooltip formatter={(value, name) => {
            if (name === "margin") return [`${value}%`, 'Profit Margin'];
            return [`$${value}`, name === "costPrice" ? 'Cost Price' : 'Selling Price'];
          }} />
          <Legend />
          <Bar yAxisId="left" dataKey="costPrice" name="Cost Price" fill="#8884d8" />
          <Bar yAxisId="left" dataKey="sellingPrice" name="Selling Price" fill="#82ca9d" />
          <Line yAxisId="right" type="monotone" dataKey="margin" stroke="#ff7300" name="Margin %" />
        </BarChart>
      </ResponsiveContainer>
    </CardContent>
  </Card>
);

export default ProfitMarginsChart;
