import { LayoutDashboard, Truck, Users, Package, DollarSign, TrendingUp, Clock } from "lucide-react";
import { PresentationSlide } from "../PresentationSlide";
import { DesktopMockup } from "../DesktopMockup";
import { FeatureCard } from "../FeatureCard";

export const AdminDashboardSlide = () => {
  return (
    <PresentationSlide
      title="Admin Dashboard"
      subtitle="Complete overview of your fleet operations with real-time metrics"
      icon={LayoutDashboard}
    >
      <div className="flex flex-col lg:flex-row gap-8 items-center">
        <DesktopMockup title="Dashboard Overview">
          <div className="p-4 bg-background">
            {/* Mini Header */}
            <div className="bg-card border-b border-border px-4 py-3 mb-4">
              <h3 className="font-semibold text-sm">Dashboard</h3>
            </div>
            
            {/* Stats Grid */}
            <div className="grid grid-cols-4 gap-3 mb-4">
              {[
                { icon: Truck, label: "Total Trucks", value: "156", color: "text-primary" },
                { icon: Users, label: "Active Drivers", value: "89", color: "text-success" },
                { icon: Package, label: "Active Loads", value: "234", color: "text-warning" },
                { icon: DollarSign, label: "Revenue (MTD)", value: "$1.2M", color: "text-primary" },
              ].map((stat, i) => (
                <div key={i} className="bg-card border border-border rounded-lg p-3">
                  <div className="flex items-center gap-2 mb-2">
                    <stat.icon className={`w-4 h-4 ${stat.color}`} />
                    <span className="text-[10px] text-muted-foreground">{stat.label}</span>
                  </div>
                  <div className="text-lg font-bold">{stat.value}</div>
                </div>
              ))}
            </div>

            {/* Charts Row */}
            <div className="grid grid-cols-3 gap-3 mb-4">
              {[
                { icon: TrendingUp, label: "On-Time Delivery", value: "94.5%", color: "text-success" },
                { icon: Clock, label: "Avg. Transit Time", value: "2.4 days", color: "text-primary" },
                { icon: Package, label: "Pending Dispatches", value: "18", color: "text-warning" },
              ].map((item, i) => (
                <div key={i} className="bg-card border border-border rounded-lg p-3">
                  <div className="flex items-center gap-2 mb-2">
                    <item.icon className={`w-4 h-4 ${item.color}`} />
                    <span className="text-xs font-medium">{item.label}</span>
                  </div>
                  <div className={`text-2xl font-bold ${item.color}`}>{item.value}</div>
                </div>
              ))}
            </div>

            {/* Recent Loads Table */}
            <div className="bg-card border border-border rounded-lg p-3">
              <h4 className="text-xs font-semibold mb-2">Recent Loads</h4>
              <div className="space-y-1">
                {[
                  { load: "LD-2024-001", origin: "Los Angeles, CA", dest: "Phoenix, AZ", status: "In-Transit" },
                  { load: "LD-2024-002", origin: "Dallas, TX", dest: "Houston, TX", status: "Delivered" },
                  { load: "LD-2024-003", origin: "Chicago, IL", dest: "Detroit, MI", status: "Pending" },
                ].map((row, i) => (
                  <div key={i} className="flex items-center justify-between text-[10px] py-1 border-b border-border last:border-0">
                    <span className="font-medium">{row.load}</span>
                    <span className="text-muted-foreground">{row.origin}</span>
                    <span className="text-muted-foreground">{row.dest}</span>
                    <span className={`px-2 py-0.5 rounded-full text-[8px] font-medium ${
                      row.status === "In-Transit" ? "bg-primary/10 text-primary" :
                      row.status === "Delivered" ? "bg-success/10 text-success" :
                      "bg-warning/10 text-warning"
                    }`}>{row.status}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </DesktopMockup>

        <div className="grid grid-cols-1 gap-4 max-w-xs">
          <FeatureCard
            icon={TrendingUp}
            title="Real-Time Metrics"
            description="Monitor fleet performance with live KPIs and trend analysis"
          />
          <FeatureCard
            icon={Package}
            title="Load Tracking"
            description="Track all active loads with status updates and ETAs"
          />
          <FeatureCard
            icon={DollarSign}
            title="Revenue Analytics"
            description="View revenue trends and financial performance"
          />
        </div>
      </div>
    </PresentationSlide>
  );
};
