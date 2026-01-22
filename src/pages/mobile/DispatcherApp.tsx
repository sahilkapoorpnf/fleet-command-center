import { useState } from "react";
import { MobileHeader } from "@/components/mobile/MobileHeader";
import { MobileBottomNav } from "@/components/mobile/MobileBottomNav";
import { StatusCard } from "@/components/mobile/StatusCard";
import { LoadCard } from "@/components/mobile/LoadCard";
import { LiveTrackingMap } from "@/components/mobile/LiveTrackingMap";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Logo } from "@/components/Logo";
import { Link } from "react-router-dom";
import {
  Home,
  Package,
  Truck,
  Users,
  MessageSquare,
  Search,
  Plus,
  Filter,
  Settings,
  MapPin,
  Phone,
  ChevronRight,
  Clock,
  CheckCircle2,
  AlertTriangle,
  Navigation,
} from "lucide-react";

const bottomNavItems = [
  { icon: Home, label: "Home", path: "/dispatcher" },
  { icon: Package, label: "Loads", path: "/dispatcher/loads" },
  { icon: Truck, label: "Fleet", path: "/dispatcher/fleet" },
  { icon: Users, label: "Drivers", path: "/dispatcher/drivers" },
  { icon: MessageSquare, label: "Messages", path: "/dispatcher/messages" },
];

const MenuContent = () => (
  <div className="h-full flex flex-col">
    <div className="p-4 border-b border-sidebar-border">
      <Logo className="h-8" />
    </div>
    <nav className="flex-1 p-4 space-y-1">
      {[
        { icon: Home, label: "Dashboard", path: "/dispatcher" },
        { icon: Package, label: "Manage Loads", path: "/dispatcher/loads" },
        { icon: Truck, label: "Fleet Status", path: "/dispatcher/fleet" },
        { icon: Users, label: "Drivers", path: "/dispatcher/drivers" },
        { icon: MapPin, label: "Live Tracking", path: "/dispatcher/tracking" },
        { icon: MessageSquare, label: "Messages", path: "/dispatcher/messages" },
        { icon: Settings, label: "Settings", path: "/dispatcher/settings" },
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

const loads = [
  {
    loadNumber: "LD-2024-089",
    origin: "Los Angeles, CA",
    destination: "Phoenix, AZ",
    status: "In-Transit",
    driver: "John Smith",
  },
  {
    loadNumber: "LD-2024-090",
    origin: "Dallas, TX",
    destination: "Houston, TX",
    status: "Pending",
    driver: null,
  },
  {
    loadNumber: "LD-2024-091",
    origin: "Chicago, IL",
    destination: "Detroit, MI",
    status: "Assigned",
    driver: "Mike Johnson",
  },
];

const drivers = [
  { name: "John Smith", status: "On Duty", truck: "TRK-001", location: "Phoenix, AZ" },
  { name: "Mike Johnson", status: "On Duty", truck: "TRK-002", location: "Chicago, IL" },
  { name: "Sarah Davis", status: "Off Duty", truck: "TRK-003", location: "Seattle, WA" },
  { name: "Tom Wilson", status: "On Duty", truck: "TRK-004", location: "Dallas, TX" },
];

export const DispatcherApp = () => {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <div className="min-h-screen bg-background pb-20">
      <MobileHeader 
        title="Dispatcher" 
        userRole="Operations Team" 
        notifications={5}
        menuContent={<MenuContent />}
      />

      <main className="p-4 space-y-4">
        {/* Search */}
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
          <Input
            placeholder="Search loads, drivers, trucks..."
            className="pl-10 pr-10"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <Button variant="ghost" size="icon" className="absolute right-1 top-1/2 -translate-y-1/2 h-8 w-8">
            <Filter className="w-4 h-4" />
          </Button>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-2 gap-3">
          <StatusCard
            icon={Package}
            title="Active Loads"
            value="24"
            subtitle="8 pending"
            color="primary"
          />
          <StatusCard
            icon={Truck}
            title="Available Trucks"
            value="12"
            subtitle="of 18 total"
            color="success"
          />
          <StatusCard
            icon={Users}
            title="Drivers On Duty"
            value="15"
            subtitle="3 available"
            color="warning"
          />
          <StatusCard
            icon={AlertTriangle}
            title="Alerts"
            value="3"
            subtitle="Require attention"
            color="destructive"
          />
        </div>

        {/* Live Tracking Map */}
        <LiveTrackingMap />

        {/* Tabs */}
        <Tabs defaultValue="loads" className="w-full">
          <TabsList className="w-full grid grid-cols-2">
            <TabsTrigger value="loads">Loads</TabsTrigger>
            <TabsTrigger value="drivers">Drivers</TabsTrigger>
          </TabsList>

          <TabsContent value="loads" className="mt-4 space-y-3">
            <div className="flex items-center justify-between">
              <h3 className="font-semibold">Today's Loads</h3>
              <Button size="sm" className="h-8">
                <Plus className="w-4 h-4 mr-1" />
                New Load
              </Button>
            </div>
            {loads.map((load) => (
              <LoadCard
                key={load.loadNumber}
                loadNumber={load.loadNumber}
                origin={load.origin}
                destination={load.destination}
                status={load.status}
                showActions={true}
                onAccept={load.status === "Pending" ? () => {} : undefined}
                onViewDetails={() => {}}
                variant="compact"
              />
            ))}
          </TabsContent>

          <TabsContent value="drivers" className="mt-4 space-y-3">
            <div className="flex items-center justify-between">
              <h3 className="font-semibold">Active Drivers</h3>
              <Badge variant="secondary">{drivers.length} total</Badge>
            </div>
            {drivers.map((driver) => (
              <Card key={driver.name}>
                <CardContent className="p-4">
                  <div className="flex items-center gap-3">
                    <Avatar className="w-10 h-10">
                      <AvatarFallback className="bg-primary/10 text-primary text-sm">
                        {driver.name.split(" ").map(n => n[0]).join("")}
                      </AvatarFallback>
                    </Avatar>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2">
                        <p className="font-medium text-sm">{driver.name}</p>
                        <Badge 
                          variant="outline" 
                          className={driver.status === "On Duty" 
                            ? "bg-success/10 text-success border-success/20 text-[10px]" 
                            : "bg-muted text-muted-foreground text-[10px]"
                          }
                        >
                          {driver.status}
                        </Badge>
                      </div>
                      <div className="flex items-center gap-2 text-xs text-muted-foreground mt-1">
                        <Truck className="w-3 h-3" />
                        <span>{driver.truck}</span>
                        <span>•</span>
                        <MapPin className="w-3 h-3" />
                        <span>{driver.location}</span>
                      </div>
                    </div>
                    <div className="flex gap-1">
                      <Button variant="ghost" size="icon" className="h-8 w-8">
                        <Phone className="w-4 h-4" />
                      </Button>
                      <Button variant="ghost" size="icon" className="h-8 w-8">
                        <Navigation className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </TabsContent>
        </Tabs>

        {/* Quick Actions */}
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-base">Quick Actions</CardTitle>
          </CardHeader>
          <CardContent className="grid grid-cols-3 gap-2">
            <Button variant="outline" className="h-auto py-3 flex flex-col gap-1.5">
              <Plus className="w-5 h-5 text-primary" />
              <span className="text-[10px]">New Load</span>
            </Button>
            <Button variant="outline" className="h-auto py-3 flex flex-col gap-1.5">
              <MapPin className="w-5 h-5 text-success" />
              <span className="text-[10px]">Live Map</span>
            </Button>
            <Button variant="outline" className="h-auto py-3 flex flex-col gap-1.5">
              <MessageSquare className="w-5 h-5 text-warning" />
              <span className="text-[10px]">Broadcast</span>
            </Button>
          </CardContent>
        </Card>
      </main>

      <MobileBottomNav items={bottomNavItems} />
    </div>
  );
};
