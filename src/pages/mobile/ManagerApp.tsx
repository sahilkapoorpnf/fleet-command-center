import { useState } from "react";
import { MobileHeader } from "@/components/mobile/MobileHeader";
import { MobileBottomNav } from "@/components/mobile/MobileBottomNav";
import { StatusCard } from "@/components/mobile/StatusCard";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Logo } from "@/components/Logo";
import { Link } from "react-router-dom";
import {
  Home,
  BarChart3,
  Truck,
  DollarSign,
  FileText,
  Settings,
  TrendingUp,
  TrendingDown,
  Fuel,
  Wrench,
  AlertTriangle,
  CheckCircle2,
  Users,
  Package,
  Clock,
  ChevronRight,
  Calendar,
  Shield,
} from "lucide-react";

const bottomNavItems = [
  { icon: Home, label: "Home", path: "/manager" },
  { icon: BarChart3, label: "Analytics", path: "/manager/analytics" },
  { icon: Truck, label: "Fleet", path: "/manager/fleet" },
  { icon: DollarSign, label: "Finance", path: "/manager/finance" },
  { icon: FileText, label: "Reports", path: "/manager/reports" },
];

const MenuContent = () => (
  <div className="h-full flex flex-col">
    <div className="p-4 border-b border-sidebar-border">
      <Logo className="h-8" />
    </div>
    <nav className="flex-1 p-4 space-y-1">
      {[
        { icon: Home, label: "Dashboard", path: "/manager" },
        { icon: BarChart3, label: "Analytics", path: "/manager/analytics" },
        { icon: Truck, label: "Fleet Management", path: "/manager/fleet" },
        { icon: DollarSign, label: "Financial Reports", path: "/manager/finance" },
        { icon: Fuel, label: "Fuel Tracking", path: "/manager/fuel" },
        { icon: Wrench, label: "Maintenance", path: "/manager/maintenance" },
        { icon: Shield, label: "Compliance", path: "/manager/compliance" },
        { icon: FileText, label: "Documents", path: "/manager/documents" },
        { icon: Settings, label: "Settings", path: "/manager/settings" },
      ].map((item) => (
        <Link
          key={item.path}
          to={item.path}
          className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-sidebar-foreground/80 hover:bg-sidebar-accent hover:text-sidebar-foreground transition-colors"
        >
          <item.icon className="w-5 h-5" />
          <span className="text-sm">{item.label}</span>
        </Link>
      ))}
    </nav>
    <div className="p-4 border-t border-sidebar-border">
      <Link to="/">
        <Button variant="ghost" className="w-full text-sidebar-foreground/60 hover:text-sidebar-foreground">
          Back to Website
        </Button>
      </Link>
    </div>
  </div>
);

const alerts = [
  { type: "warning", message: "3 trucks due for maintenance", icon: Wrench },
  { type: "info", message: "5 driver certifications expiring", icon: FileText },
  { type: "success", message: "Revenue target 94% achieved", icon: TrendingUp },
];

export const ManagerApp = () => {
  return (
    <div className="min-h-screen bg-background pb-20">
      <MobileHeader 
        title="Fleet Manager" 
        userRole="Management" 
        notifications={3}
        menuContent={<MenuContent />}
      />

      <main className="p-4 space-y-4">
        {/* Period Selector */}
        <div className="flex items-center gap-2">
          <Button variant="outline" size="sm" className="h-8 text-xs">
            <Calendar className="w-3 h-3 mr-1" />
            This Month
          </Button>
          <Badge variant="secondary" className="text-xs">Jan 2024</Badge>
        </div>

        {/* KPI Cards */}
        <div className="grid grid-cols-2 gap-3">
          <StatusCard
            icon={DollarSign}
            title="Revenue MTD"
            value="$1.2M"
            subtitle="+18% vs last month"
            color="success"
          />
          <StatusCard
            icon={Package}
            title="Loads Completed"
            value="342"
            subtitle="12 in progress"
            color="primary"
          />
          <StatusCard
            icon={Truck}
            title="Fleet Utilization"
            value="87%"
            subtitle="156 active trucks"
            color="warning"
          />
          <StatusCard
            icon={Users}
            title="Driver Performance"
            value="94.5%"
            subtitle="On-time delivery"
            color="success"
          />
        </div>

        {/* Revenue Chart Placeholder */}
        <Card>
          <CardHeader className="pb-2">
            <div className="flex items-center justify-between">
              <CardTitle className="text-base">Revenue Trend</CardTitle>
              <Badge variant="secondary" className="text-xs">
                <TrendingUp className="w-3 h-3 mr-1" />
                +18%
              </Badge>
            </div>
          </CardHeader>
          <CardContent>
            <div className="h-32 bg-gradient-to-t from-primary/10 to-transparent rounded-lg flex items-end justify-around px-2 pb-2">
              {[40, 55, 45, 70, 60, 85, 75].map((height, i) => (
                <div
                  key={i}
                  className="w-6 bg-primary/80 rounded-t"
                  style={{ height: `${height}%` }}
                />
              ))}
            </div>
            <div className="flex justify-around text-[10px] text-muted-foreground mt-2">
              <span>Mon</span>
              <span>Tue</span>
              <span>Wed</span>
              <span>Thu</span>
              <span>Fri</span>
              <span>Sat</span>
              <span>Sun</span>
            </div>
          </CardContent>
        </Card>

        {/* Fleet Health */}
        <Card>
          <CardHeader className="pb-2">
            <div className="flex items-center justify-between">
              <CardTitle className="text-base">Fleet Health</CardTitle>
              <ChevronRight className="w-4 h-4 text-muted-foreground" />
            </div>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <div className="flex items-center justify-between text-sm mb-2">
                <span className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-success" />
                  Active & Operational
                </span>
                <span className="font-medium">142 trucks</span>
              </div>
              <Progress value={91} className="h-2" />
            </div>
            <div>
              <div className="flex items-center justify-between text-sm mb-2">
                <span className="flex items-center gap-2">
                  <Wrench className="w-4 h-4 text-warning" />
                  In Maintenance
                </span>
                <span className="font-medium">10 trucks</span>
              </div>
              <Progress value={6} className="h-2 [&>div]:bg-warning" />
            </div>
            <div>
              <div className="flex items-center justify-between text-sm mb-2">
                <span className="flex items-center gap-2">
                  <AlertTriangle className="w-4 h-4 text-destructive" />
                  Out of Service
                </span>
                <span className="font-medium">4 trucks</span>
              </div>
              <Progress value={3} className="h-2 [&>div]:bg-destructive" />
            </div>
          </CardContent>
        </Card>

        {/* Alerts */}
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-base">Alerts & Notifications</CardTitle>
          </CardHeader>
          <CardContent className="space-y-2">
            {alerts.map((alert, index) => (
              <div
                key={index}
                className={`flex items-center gap-3 p-3 rounded-lg ${
                  alert.type === "warning"
                    ? "bg-warning/10"
                    : alert.type === "success"
                    ? "bg-success/10"
                    : "bg-primary/10"
                }`}
              >
                <alert.icon
                  className={`w-5 h-5 ${
                    alert.type === "warning"
                      ? "text-warning"
                      : alert.type === "success"
                      ? "text-success"
                      : "text-primary"
                  }`}
                />
                <span className="text-sm flex-1">{alert.message}</span>
                <ChevronRight className="w-4 h-4 text-muted-foreground" />
              </div>
            ))}
          </CardContent>
        </Card>

        {/* Quick Reports */}
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-base">Quick Reports</CardTitle>
          </CardHeader>
          <CardContent className="grid grid-cols-2 gap-2">
            <Button variant="outline" className="h-auto py-3 flex flex-col gap-1.5 justify-start">
              <Fuel className="w-5 h-5 text-warning" />
              <span className="text-xs">Fuel Report</span>
            </Button>
            <Button variant="outline" className="h-auto py-3 flex flex-col gap-1.5 justify-start">
              <Clock className="w-5 h-5 text-primary" />
              <span className="text-xs">Hours Report</span>
            </Button>
            <Button variant="outline" className="h-auto py-3 flex flex-col gap-1.5 justify-start">
              <DollarSign className="w-5 h-5 text-success" />
              <span className="text-xs">P&L Statement</span>
            </Button>
            <Button variant="outline" className="h-auto py-3 flex flex-col gap-1.5 justify-start">
              <Shield className="w-5 h-5 text-destructive" />
              <span className="text-xs">Compliance</span>
            </Button>
          </CardContent>
        </Card>
      </main>

      <MobileBottomNav items={bottomNavItems} />
    </div>
  );
};
