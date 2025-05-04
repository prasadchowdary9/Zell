import MonthlyRevenueChart from "./MonthlyRevenueCharts";
import ProfitMarginChart from "./ProfitMarginChart";
import RevenueGrowthChart from "./RevenueGrowth";
import RevenueSourceChart from "./RevenueSourceChart";

export default function Analytics() {
  return (
    <div className="space-y-6">
      {/* First row: Single item spanning all 4 columns on large screens */}
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 h-120">
        <div className="bg-primary-foreground p-6 rounded-lg lg:col-span-4">
          <MonthlyRevenueChart />
        </div>
      </div>

      {/* Second row: Three charts in one row on large screens */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="bg-primary-foreground p-6 rounded-lg">
          <ProfitMarginChart />
        </div>
        <div className="bg-primary-foreground p-6 rounded-lg">
          <RevenueGrowthChart />
        </div>
        <div className="bg-primary-foreground p-6 rounded-lg">
          <RevenueSourceChart />
        </div>
      </div>
    </div>
  );
}
