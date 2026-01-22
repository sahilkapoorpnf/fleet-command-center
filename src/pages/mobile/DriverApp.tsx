import { useState } from "react";
import { MobileHeader } from "@/components/mobile/MobileHeader";
import { MobileBottomNav } from "@/components/mobile/MobileBottomNav";
import { StatusCard } from "@/components/mobile/StatusCard";
import { LoadCard } from "@/components/mobile/LoadCard";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Switch } from "@/components/ui/switch";
import { Logo } from "@/components/Logo";
import { Link } from "react-router-dom";
import {
  Home,
  Package,
  Clock,
  DollarSign,
  User,
  MapPin,
  Truck,
  FileText,
  Settings,
  ChevronRight,
  Navigation,
  Camera,
  CheckCircle2,
  AlertCircle,
} from "lucide-react";

const bottomNavItems = [
  { icon: Home, label: "Home", path: "/driver" },
  { icon: Package, label: "Loads", path: "/driver/loads" },
  { icon: Clock, label: "Hours", path: "/driver/hours" },
  { icon: DollarSign, label: "Earnings", path: "/driver/earnings" },
  { icon: User, label: "Profile", path: "/driver/profile" },
];

const MenuContent = () => (
  <div className="h-full flex flex-col">
    <div className="p-4 border-b border-sidebar-border">
      <Logo className="h-8" />
    </div>
    <nav className="flex-1 p-4 space-y-1">
      {[
        { icon: Home, label: "Dashboard", path: "/driver" },
        { icon: Package, label: "My Loads", path: "/driver/loads" },
        { icon: Clock, label: "Hours of Service", path: "/driver/hours" },
        { icon: DollarSign, label: "Earnings", path: "/driver/earnings" },
        { icon: FileText, label: "Documents", path: "/driver/documents" },
        { icon: Truck, label: "My Truck", path: "/driver/truck" },
        { icon: Settings, label: "Settings", path: "/driver/settings" },
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

export const DriverApp = () => {
  const [isOnDuty, setIsOnDuty] = useState(true);

  const currentLoad = {
    loadNumber: "LD-2024-089",
    origin: "Los Angeles, CA",
    destination: "Phoenix, AZ",
    status: "In-Transit",
    pickupTime: "Today, 8:00 AM",
    deliveryTime: "Today, 4:00 PM",
    distance: "372 mi",
    weight: "42,000 lbs",
  };

  return (
    <div className="min-h-screen bg-background pb-20">
      <MobileHeader 
        title="Driver Dashboard" 
        userRole="John Smith" 
        notifications={2}
        menuContent={<MenuContent />}
      />

      <main className="p-4 space-y-4">
        {/* Status Toggle */}
        <Card className="bg-gradient-to-r from-primary/10 to-primary/5">
          <CardContent className="p-4 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className={`w-3 h-3 rounded-full ${isOnDuty ? "bg-success animate-pulse" : "bg-muted-foreground"}`} />
              <div>
                <p className="font-semibold">{isOnDuty ? "On Duty" : "Off Duty"}</p>
                <p className="text-xs text-muted-foreground">
                  {isOnDuty ? "Available for loads" : "Not accepting loads"}
                </p>
              </div>
            </div>
            <Switch checked={isOnDuty} onCheckedChange={setIsOnDuty} />
          </CardContent>
        </Card>

        {/* Quick Stats */}
        <div className="grid grid-cols-2 gap-3">
          <StatusCard
            icon={Clock}
            title="Driving Hours"
            value="6h 24m"
            subtitle="of 11h available"
            color="primary"
          />
          <StatusCard
            icon={DollarSign}
            title="This Week"
            value="$2,840"
            subtitle="+$420 today"
            color="success"
          />
        </div>

        {/* Current Load */}
        <div>
          <div className="flex items-center justify-between mb-3">
            <h2 className="font-semibold">Current Load</h2>
            <Badge variant="secondary" className="text-xs">Active</Badge>
          </div>
          <LoadCard
            {...currentLoad}
            onNavigate={() => {}}
            onCall={() => {}}
            onViewDetails={() => {}}
          />
        </div>

        {/* Quick Actions */}
        <div>
          <h2 className="font-semibold mb-3">Quick Actions</h2>
          <div className="grid grid-cols-2 gap-3">
            <Button variant="outline" className="h-auto py-4 flex flex-col gap-2">
              <Camera className="w-6 h-6 text-primary" />
              <span className="text-xs">Upload POD</span>
            </Button>
            <Button variant="outline" className="h-auto py-4 flex flex-col gap-2">
              <CheckCircle2 className="w-6 h-6 text-success" />
              <span className="text-xs">Confirm Pickup</span>
            </Button>
            <Button variant="outline" className="h-auto py-4 flex flex-col gap-2">
              <AlertCircle className="w-6 h-6 text-warning" />
              <span className="text-xs">Report Issue</span>
            </Button>
            <Button variant="outline" className="h-auto py-4 flex flex-col gap-2">
              <FileText className="w-6 h-6 text-muted-foreground" />
              <span className="text-xs">View Documents</span>
            </Button>
          </div>
        </div>

        {/* HOS Summary */}
        <Card>
          <CardHeader className="pb-2">
            <div className="flex items-center justify-between">
              <CardTitle className="text-base">Hours of Service</CardTitle>
              <ChevronRight className="w-4 h-4 text-muted-foreground" />
            </div>
          </CardHeader>
          <CardContent className="space-y-3">
            <div className="flex items-center justify-between text-sm">
              <span className="text-muted-foreground">Drive Time</span>
              <div className="flex items-center gap-2">
                <div className="w-24 h-2 bg-muted rounded-full overflow-hidden">
                  <div className="w-[58%] h-full bg-primary rounded-full" />
                </div>
                <span className="font-medium">6h 24m / 11h</span>
              </div>
            </div>
            <div className="flex items-center justify-between text-sm">
              <span className="text-muted-foreground">On Duty</span>
              <div className="flex items-center gap-2">
                <div className="w-24 h-2 bg-muted rounded-full overflow-hidden">
                  <div className="w-[50%] h-full bg-warning rounded-full" />
                </div>
                <span className="font-medium">7h / 14h</span>
              </div>
            </div>
            <div className="flex items-center justify-between text-sm">
              <span className="text-muted-foreground">Weekly</span>
              <div className="flex items-center gap-2">
                <div className="w-24 h-2 bg-muted rounded-full overflow-hidden">
                  <div className="w-[45%] h-full bg-success rounded-full" />
                </div>
                <span className="font-medium">32h / 70h</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </main>

      <MobileBottomNav items={bottomNavItems} />
    </div>
  );
};
