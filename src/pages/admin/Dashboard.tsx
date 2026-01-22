import { AdminHeader } from "@/components/admin/AdminHeader";
import { StatCard } from "@/components/admin/StatCard";
import { DataTable, StatusBadge, Column } from "@/components/admin/DataTable";
import { Truck, Users, Package, DollarSign, TrendingUp, Clock } from "lucide-react";

interface RecentLoad {
  id: string;
  loadNumber: string;
  origin: string;
  destination: string;
  driver: string;
  status: string;
}

const recentLoads: RecentLoad[] = [
  { id: "1", loadNumber: "LD-2024-001", origin: "Los Angeles, CA", destination: "Phoenix, AZ", driver: "John Smith", status: "In-Transit" },
  { id: "2", loadNumber: "LD-2024-002", origin: "Dallas, TX", destination: "Houston, TX", driver: "Mike Johnson", status: "Delivered" },
  { id: "3", loadNumber: "LD-2024-003", origin: "Chicago, IL", destination: "Detroit, MI", driver: "Sarah Davis", status: "Pending" },
  { id: "4", loadNumber: "LD-2024-004", origin: "Seattle, WA", destination: "Portland, OR", driver: "Tom Wilson", status: "In-Transit" },
  { id: "5", loadNumber: "LD-2024-005", origin: "Miami, FL", destination: "Atlanta, GA", driver: "James Brown", status: "Completed" },
];

const columns: Column<RecentLoad>[] = [
  { key: "loadNumber", label: "Load #" },
  { key: "origin", label: "Origin" },
  { key: "destination", label: "Destination" },
  { key: "driver", label: "Driver" },
  {
    key: "status",
    label: "Status",
    render: (item) => <StatusBadge status={item.status} />,
  },
];

export const Dashboard = () => {
  return (
    <div className="min-h-screen">
      <AdminHeader title="Dashboard" />
      
      <div className="p-6">
        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <StatCard
            title="Total Trucks"
            value="156"
            change="+12 this month"
            changeType="positive"
            icon={Truck}
            iconColor="text-primary"
            iconBg="bg-primary/10"
          />
          <StatCard
            title="Active Drivers"
            value="89"
            change="+5 this week"
            changeType="positive"
            icon={Users}
            iconColor="text-success"
            iconBg="bg-success/10"
          />
          <StatCard
            title="Active Loads"
            value="234"
            change="23 pending"
            changeType="neutral"
            icon={Package}
            iconColor="text-warning"
            iconBg="bg-warning/10"
          />
          <StatCard
            title="Revenue (MTD)"
            value="$1.2M"
            change="+18% vs last month"
            changeType="positive"
            icon={DollarSign}
            iconColor="text-primary"
            iconBg="bg-primary/10"
          />
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
          <div className="bg-card rounded-xl border border-border p-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-lg bg-success/10 flex items-center justify-center">
                <TrendingUp className="w-5 h-5 text-success" />
              </div>
              <h3 className="font-semibold">On-Time Delivery</h3>
            </div>
            <div className="text-4xl font-bold text-success mb-2">94.5%</div>
            <p className="text-sm text-muted-foreground">Last 30 days performance</p>
          </div>

          <div className="bg-card rounded-xl border border-border p-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                <Clock className="w-5 h-5 text-primary" />
              </div>
              <h3 className="font-semibold">Avg. Transit Time</h3>
            </div>
            <div className="text-4xl font-bold text-primary mb-2">2.4 days</div>
            <p className="text-sm text-muted-foreground">Average delivery time</p>
          </div>

          <div className="bg-card rounded-xl border border-border p-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-lg bg-warning/10 flex items-center justify-center">
                <Package className="w-5 h-5 text-warning" />
              </div>
              <h3 className="font-semibold">Pending Dispatches</h3>
            </div>
            <div className="text-4xl font-bold text-warning mb-2">18</div>
            <p className="text-sm text-muted-foreground">Awaiting assignment</p>
          </div>
        </div>

        {/* Recent Loads Table */}
        <DataTable
          title="Recent Loads"
          data={recentLoads}
          columns={columns}
          onView={() => {}}
          searchPlaceholder="Search loads..."
        />
      </div>
    </div>
  );
};
