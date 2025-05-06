import BestSellingProductsChart from "./BestSellingProductsChart";
import CategoryPerformanceChart from "./CategoryPerformanceChart";
import ProfitMarginsChart from "./ProfitMarginsChart";
import InventoryOverviewChart from "./InventoryOverviewChart";

export default function ProductsAnalytics() {
  return (
    <div className="space-y-6">
      {/* Top full-width chart */}
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 h-120">
        <div className="bg-primary-foreground p-6 rounded-lg lg:col-span-4">
          <BestSellingProductsChart />
        </div>
      </div>

      {/* Other charts in grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="bg-primary-foreground p-6 rounded-lg">
          <CategoryPerformanceChart />
        </div>
        <div className="bg-primary-foreground p-6 rounded-lg">
          <ProfitMarginsChart />
        </div>
        <div className="bg-primary-foreground p-6 rounded-lg">
          <InventoryOverviewChart />
        </div>
      </div>
    </div>
  );
}
