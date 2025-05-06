import React from 'react';
import CustomerRetentionChart from './CustomerRetentionChart';
import CustomerLifetimeValueChart from './CustomerLifetimeValueChart';
import CustomerDemographicsChart from './CustomerDemographicsChart';
import PurchaseFrequencyChart from './PurchaseFrequencyChart';

const CustomerAnalyticsPage: React.FC = () => {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold text-agri-green-800">Customer Analytics</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <CustomerRetentionChart />
        <CustomerLifetimeValueChart />
        <CustomerDemographicsChart />
        <PurchaseFrequencyChart />
      </div>
    </div>
  );
};

export default CustomerAnalyticsPage;
