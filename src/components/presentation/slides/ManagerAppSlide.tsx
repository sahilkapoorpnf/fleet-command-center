import { BarChart3, TrendingUp, DollarSign, Truck, AlertTriangle, Clock, Users, Package } from "lucide-react";
import { PresentationSlide } from "../PresentationSlide";
import { PhoneMockup } from "../PhoneMockup";
import { FeatureCard } from "../FeatureCard";

const ManagerDashboardScreen = () => (
  <div className="bg-background min-h-full">
    {/* Header */}
    <div className="bg-sidebar text-sidebar-foreground px-4 py-3">
      <div className="flex items-center justify-between">
        <div>
          <h3 className="font-semibold text-sm">Fleet Manager</h3>
          <p className="text-[10px] text-sidebar-foreground/60">Executive Overview</p>
        </div>
        <div className="flex gap-2">
          <div className="w-8 h-8 rounded-full bg-warning flex items-center justify-center">
            <AlertTriangle className="w-4 h-4 text-warning-foreground" />
          </div>
        </div>
      </div>
    </div>

    <div className="p-4">
      {/* KPI Cards */}
      <div className="grid grid-cols-2 gap-2 mb-4">
        {[
          { icon: DollarSign, label: "Revenue", value: "$1.2M", change: "+18%", positive: true },
          { icon: TrendingUp, label: "On-Time", value: "94.5%", change: "+2.3%", positive: true },
          { icon: Truck, label: "Fleet Util.", value: "87%", change: "-1%", positive: false },
          { icon: Package, label: "Loads/Day", value: "45", change: "+5", positive: true },
        ].map((kpi, i) => (
          <div key={i} className="bg-card border border-border rounded-xl p-3">
            <div className="flex items-center gap-2 mb-1">
              <kpi.icon className="w-4 h-4 text-primary" />
              <span className="text-[10px] text-muted-foreground">{kpi.label}</span>
            </div>
            <div className="flex items-end justify-between">
              <span className="text-lg font-bold">{kpi.value}</span>
              <span className={`text-[10px] font-medium ${kpi.positive ? "text-success" : "text-destructive"}`}>
                {kpi.change}
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* Chart Preview */}
      <div className="bg-card border border-border rounded-xl p-3 mb-4">
        <div className="flex items-center justify-between mb-3">
          <span className="text-xs font-semibold">Revenue Trend</span>
          <span className="text-[10px] text-muted-foreground">Last 7 days</span>
        </div>
        <div className="flex items-end gap-1 h-20">
          {[40, 55, 45, 60, 52, 70, 65].map((h, i) => (
            <div key={i} className="flex-1 bg-primary/20 rounded-t" style={{ height: `${h}%` }}>
              <div className="w-full bg-primary rounded-t" style={{ height: `${h}%` }} />
            </div>
          ))}
        </div>
        <div className="flex justify-between mt-2">
          {["M", "T", "W", "T", "F", "S", "S"].map((d, i) => (
            <span key={i} className="text-[8px] text-muted-foreground flex-1 text-center">{d}</span>
          ))}
        </div>
      </div>

      {/* Fleet Health */}
      <div className="bg-card border border-border rounded-xl p-3 mb-4">
        <div className="flex items-center gap-2 mb-3">
          <Truck className="w-4 h-4 text-primary" />
          <span className="text-xs font-semibold">Fleet Health</span>
        </div>
        <div className="space-y-2">
          {[
            { label: "Active", count: 45, total: 50, color: "bg-success" },
            { label: "Maintenance", count: 3, total: 50, color: "bg-warning" },
            { label: "Inactive", count: 2, total: 50, color: "bg-destructive" },
          ].map((item, i) => (
            <div key={i} className="flex items-center gap-2">
              <span className="text-[10px] text-muted-foreground w-20">{item.label}</span>
              <div className="flex-1 h-2 bg-muted rounded-full overflow-hidden">
                <div className={`h-full ${item.color} rounded-full`} style={{ width: `${(item.count/item.total)*100}%` }} />
              </div>
              <span className="text-[10px] font-medium">{item.count}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Alerts */}
      <div className="bg-card border border-border rounded-xl p-3">
        <div className="flex items-center gap-2 mb-3">
          <AlertTriangle className="w-4 h-4 text-warning" />
          <span className="text-xs font-semibold">Active Alerts</span>
        </div>
        <div className="space-y-2">
          {[
            { msg: "TRK-003 maintenance overdue", priority: "high" },
            { msg: "Driver J. Smith HOS warning", priority: "medium" },
          ].map((alert, i) => (
            <div key={i} className={`flex items-center gap-2 p-2 rounded-lg ${
              alert.priority === "high" ? "bg-destructive/10" : "bg-warning/10"
            }`}>
              <div className={`w-2 h-2 rounded-full ${
                alert.priority === "high" ? "bg-destructive" : "bg-warning"
              }`} />
              <span className="text-[10px]">{alert.msg}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  </div>
);

const ManagerReportsScreen = () => (
  <div className="bg-background min-h-full">
    {/* Header */}
    <div className="bg-sidebar text-sidebar-foreground px-4 py-3">
      <h3 className="font-semibold text-sm">Reports & Analytics</h3>
      <p className="text-[10px] text-sidebar-foreground/60">Performance Insights</p>
    </div>

    <div className="p-4 space-y-4">
      {/* Report Cards */}
      {[
        { title: "Driver Performance", icon: Users, value: "Avg. 4.8/5", trend: "↑ 0.2" },
        { title: "Fuel Efficiency", icon: TrendingUp, value: "7.2 mpg", trend: "↑ 0.3" },
        { title: "Cost per Mile", icon: DollarSign, value: "$1.85", trend: "↓ $0.05" },
        { title: "Avg. Load Time", icon: Clock, value: "2.4 days", trend: "↓ 0.2" },
      ].map((report, i) => (
        <div key={i} className="bg-card border border-border rounded-xl p-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                <report.icon className="w-5 h-5 text-primary" />
              </div>
              <div>
                <p className="text-xs font-semibold">{report.title}</p>
                <p className="text-lg font-bold">{report.value}</p>
              </div>
            </div>
            <span className="text-xs text-success font-medium">{report.trend}</span>
          </div>
        </div>
      ))}
    </div>
  </div>
);

export const ManagerAppSlide = () => {
  return (
    <PresentationSlide
      title="Fleet Manager Mobile App"
      subtitle="Executive-level insights and fleet performance monitoring"
      icon={BarChart3}
    >
      <div className="flex flex-col lg:flex-row gap-8 items-center">
        <div className="flex gap-6">
          <PhoneMockup title="Dashboard">
            <ManagerDashboardScreen />
          </PhoneMockup>
          <PhoneMockup title="Reports">
            <ManagerReportsScreen />
          </PhoneMockup>
        </div>

        <div className="grid grid-cols-1 gap-4 max-w-xs">
          <FeatureCard
            icon={BarChart3}
            title="Real-Time KPIs"
            description="Monitor key performance indicators at a glance"
          />
          <FeatureCard
            icon={DollarSign}
            title="Revenue Analytics"
            description="Track revenue trends and financial performance"
          />
          <FeatureCard
            icon={Truck}
            title="Fleet Health"
            description="Monitor vehicle status and maintenance needs"
          />
          <FeatureCard
            icon={AlertTriangle}
            title="Smart Alerts"
            description="Proactive notifications for issues requiring attention"
          />
        </div>
      </div>
    </PresentationSlide>
  );
};
