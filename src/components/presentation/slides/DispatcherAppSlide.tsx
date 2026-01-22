import { Radio, Search, Plus, MapPin, Package, Users, Phone, Truck, Navigation } from "lucide-react";
import { PresentationSlide } from "../PresentationSlide";
import { PhoneMockup } from "../PhoneMockup";
import { FeatureCard } from "../FeatureCard";

const DispatcherHomeScreen = () => (
  <div className="bg-background min-h-full">
    {/* Header */}
    <div className="bg-sidebar text-sidebar-foreground px-4 py-3">
      <div className="flex items-center justify-between">
        <div>
          <h3 className="font-semibold text-sm">Dispatcher Portal</h3>
          <p className="text-[10px] text-sidebar-foreground/60">Operations Team</p>
        </div>
        <div className="flex gap-2">
          <div className="w-8 h-8 rounded-full bg-destructive flex items-center justify-center">
            <span className="text-[10px] text-destructive-foreground font-bold">3</span>
          </div>
        </div>
      </div>
    </div>

    {/* Search */}
    <div className="p-4">
      <div className="flex items-center gap-2 bg-muted rounded-xl px-3 py-2 mb-4">
        <Search className="w-4 h-4 text-muted-foreground" />
        <span className="text-xs text-muted-foreground">Search loads, drivers...</span>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-3 gap-2 mb-4">
        <div className="bg-card border border-border rounded-lg p-2 text-center">
          <p className="text-lg font-bold text-primary">12</p>
          <p className="text-[10px] text-muted-foreground">Active</p>
        </div>
        <div className="bg-card border border-border rounded-lg p-2 text-center">
          <p className="text-lg font-bold text-warning">5</p>
          <p className="text-[10px] text-muted-foreground">Pending</p>
        </div>
        <div className="bg-card border border-border rounded-lg p-2 text-center">
          <p className="text-lg font-bold text-success">8</p>
          <p className="text-[10px] text-muted-foreground">Available</p>
        </div>
      </div>

      {/* Tabs */}
      <div className="flex gap-2 mb-4">
        <button className="flex-1 bg-primary text-primary-foreground rounded-lg py-2 text-xs font-medium">Loads</button>
        <button className="flex-1 bg-muted text-muted-foreground rounded-lg py-2 text-xs font-medium">Drivers</button>
      </div>

      {/* Load Cards */}
      <div className="space-y-3">
        {[
          { id: "LD-001", origin: "LA, CA", dest: "Phoenix, AZ", status: "In Transit", driver: "John S." },
          { id: "LD-002", origin: "Dallas, TX", dest: "Houston, TX", status: "Pending", driver: "Unassigned" },
          { id: "LD-003", origin: "Chicago, IL", dest: "Detroit, MI", status: "Delivered", driver: "Mike D." },
        ].map((load, i) => (
          <div key={i} className="bg-card border border-border rounded-xl p-3">
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs font-semibold">{load.id}</span>
              <span className={`px-2 py-0.5 rounded-full text-[10px] font-medium ${
                load.status === "In Transit" ? "bg-primary/10 text-primary" :
                load.status === "Pending" ? "bg-warning/10 text-warning" :
                "bg-success/10 text-success"
              }`}>{load.status}</span>
            </div>
            <div className="flex items-center gap-2 text-[10px] text-muted-foreground mb-2">
              <MapPin className="w-3 h-3" />
              <span>{load.origin} → {load.dest}</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-[10px]">{load.driver}</span>
              <div className="flex gap-1">
                <button className="p-1.5 bg-muted rounded-lg">
                  <Phone className="w-3 h-3" />
                </button>
                <button className="p-1.5 bg-primary text-primary-foreground rounded-lg">
                  <Navigation className="w-3 h-3" />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
);

const LiveMapScreen = () => (
  <div className="bg-background min-h-full">
    {/* Header */}
    <div className="bg-sidebar text-sidebar-foreground px-4 py-3">
      <h3 className="font-semibold text-sm">Live Fleet Map</h3>
      <p className="text-[10px] text-sidebar-foreground/60">12 drivers active</p>
    </div>

    {/* Map */}
    <div className="relative h-64 bg-gradient-to-b from-primary/5 to-primary/10">
      {/* Grid lines */}
      <div className="absolute inset-0" style={{
        backgroundImage: "linear-gradient(hsl(var(--border)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--border)) 1px, transparent 1px)",
        backgroundSize: "40px 40px"
      }} />
      
      {/* Driver markers */}
      {[
        { x: "20%", y: "30%", color: "bg-success" },
        { x: "45%", y: "50%", color: "bg-primary" },
        { x: "70%", y: "25%", color: "bg-success" },
        { x: "30%", y: "70%", color: "bg-warning" },
        { x: "80%", y: "60%", color: "bg-success" },
      ].map((marker, i) => (
        <div key={i} 
          className={`absolute w-6 h-6 rounded-full ${marker.color} flex items-center justify-center shadow-lg`}
          style={{ left: marker.x, top: marker.y }}
        >
          <Truck className="w-3 h-3 text-white" />
        </div>
      ))}
    </div>

    {/* Driver List */}
    <div className="p-4">
      <h4 className="text-xs font-semibold mb-3">Active Drivers</h4>
      <div className="space-y-2">
        {[
          { name: "John Smith", status: "Moving", load: "LD-001", eta: "2h 15m" },
          { name: "Sarah Johnson", status: "Stopped", load: "LD-004", eta: "Loading" },
          { name: "Mike Davis", status: "Moving", load: "LD-007", eta: "45m" },
        ].map((driver, i) => (
          <div key={i} className="flex items-center justify-between bg-card border border-border rounded-lg p-2">
            <div className="flex items-center gap-2">
              <div className={`w-2 h-2 rounded-full ${driver.status === "Moving" ? "bg-success" : "bg-warning"}`} />
              <div>
                <p className="text-xs font-medium">{driver.name}</p>
                <p className="text-[10px] text-muted-foreground">{driver.load}</p>
              </div>
            </div>
            <span className="text-[10px] text-primary font-medium">{driver.eta}</span>
          </div>
        ))}
      </div>
    </div>
  </div>
);

export const DispatcherAppSlide = () => {
  return (
    <PresentationSlide
      title="Dispatcher Mobile App"
      subtitle="Manage loads and track drivers on-the-go with real-time visibility"
      icon={Radio}
    >
      <div className="flex flex-col lg:flex-row gap-8 items-center">
        <div className="flex gap-6">
          <PhoneMockup title="Dashboard">
            <DispatcherHomeScreen />
          </PhoneMockup>
          <PhoneMockup title="Live Map">
            <LiveMapScreen />
          </PhoneMockup>
        </div>

        <div className="grid grid-cols-1 gap-4 max-w-xs">
          <FeatureCard
            icon={MapPin}
            title="Live GPS Tracking"
            description="Monitor all driver locations in real-time on interactive map"
          />
          <FeatureCard
            icon={Package}
            title="Load Management"
            description="Create, assign, and track loads from anywhere"
          />
          <FeatureCard
            icon={Users}
            title="Driver Assignment"
            description="Quickly assign available drivers to pending loads"
          />
          <FeatureCard
            icon={Phone}
            title="Instant Communication"
            description="Call or message drivers directly from the app"
          />
        </div>
      </div>
    </PresentationSlide>
  );
};
