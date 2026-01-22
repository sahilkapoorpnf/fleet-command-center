import { Truck, Navigation, Camera, Phone, Clock, Package, MapPin, CheckCircle, AlertTriangle } from "lucide-react";
import { PresentationSlide } from "../PresentationSlide";
import { PhoneMockup } from "../PhoneMockup";
import { FeatureCard } from "../FeatureCard";

const DriverHomeScreen = () => (
  <div className="bg-background min-h-full">
    {/* Header */}
    <div className="bg-sidebar text-sidebar-foreground px-4 py-3">
      <div className="flex items-center justify-between">
        <div>
          <h3 className="font-semibold text-sm">Driver Portal</h3>
          <p className="text-[10px] text-sidebar-foreground/60">John Smith</p>
        </div>
        <div className="flex gap-2">
          <div className="w-8 h-8 rounded-full bg-sidebar-accent flex items-center justify-center">
            <span className="text-[10px]">🔔</span>
          </div>
        </div>
      </div>
    </div>

    {/* Status Toggle */}
    <div className="p-4">
      <div className="bg-success/10 border border-success/30 rounded-xl p-4 mb-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-success flex items-center justify-center">
              <Truck className="w-5 h-5 text-success-foreground" />
            </div>
            <div>
              <p className="font-semibold text-sm">On Duty</p>
              <p className="text-[10px] text-muted-foreground">Active since 6:00 AM</p>
            </div>
          </div>
          <div className="w-12 h-6 bg-success rounded-full relative">
            <div className="absolute right-1 top-1 w-4 h-4 bg-white rounded-full" />
          </div>
        </div>
      </div>

      {/* Current Load */}
      <div className="bg-card border border-border rounded-xl p-4 mb-4">
        <div className="flex items-center justify-between mb-3">
          <span className="text-xs font-semibold">Current Load</span>
          <span className="px-2 py-0.5 bg-primary/10 text-primary rounded-full text-[10px]">In Transit</span>
        </div>
        <div className="space-y-2">
          <div className="flex items-start gap-2">
            <MapPin className="w-4 h-4 text-success mt-0.5" />
            <div>
              <p className="text-[10px] text-muted-foreground">Pickup</p>
              <p className="text-xs font-medium">Los Angeles, CA</p>
            </div>
          </div>
          <div className="flex items-start gap-2">
            <MapPin className="w-4 h-4 text-destructive mt-0.5" />
            <div>
              <p className="text-[10px] text-muted-foreground">Delivery</p>
              <p className="text-xs font-medium">Phoenix, AZ</p>
            </div>
          </div>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="grid grid-cols-2 gap-3 mb-4">
        <button className="bg-primary text-primary-foreground rounded-xl p-3 flex flex-col items-center gap-1">
          <Navigation className="w-5 h-5" />
          <span className="text-[10px] font-medium">Navigate</span>
        </button>
        <button className="bg-card border border-border rounded-xl p-3 flex flex-col items-center gap-1">
          <Camera className="w-5 h-5 text-muted-foreground" />
          <span className="text-[10px] font-medium">Upload POD</span>
        </button>
        <button className="bg-card border border-border rounded-xl p-3 flex flex-col items-center gap-1">
          <Phone className="w-5 h-5 text-muted-foreground" />
          <span className="text-[10px] font-medium">Call Dispatch</span>
        </button>
        <button className="bg-card border border-border rounded-xl p-3 flex flex-col items-center gap-1">
          <AlertTriangle className="w-5 h-5 text-warning" />
          <span className="text-[10px] font-medium">Report Issue</span>
        </button>
      </div>

      {/* HOS Summary */}
      <div className="bg-card border border-border rounded-xl p-4">
        <div className="flex items-center gap-2 mb-3">
          <Clock className="w-4 h-4 text-primary" />
          <span className="text-xs font-semibold">Hours of Service</span>
        </div>
        <div className="space-y-2">
          <div className="flex justify-between text-xs">
            <span className="text-muted-foreground">Drive Time</span>
            <span className="font-medium">6h 30m / 11h</span>
          </div>
          <div className="h-2 bg-muted rounded-full overflow-hidden">
            <div className="h-full bg-primary rounded-full" style={{ width: "59%" }} />
          </div>
        </div>
      </div>
    </div>
  </div>
);

const DriverLoadDetailsScreen = () => (
  <div className="bg-background min-h-full">
    {/* Header */}
    <div className="bg-sidebar text-sidebar-foreground px-4 py-3">
      <h3 className="font-semibold text-sm">Load Details</h3>
      <p className="text-[10px] text-sidebar-foreground/60">LD-2024-001</p>
    </div>

    <div className="p-4 space-y-4">
      {/* Status */}
      <div className="flex items-center gap-3 bg-primary/10 rounded-xl p-3">
        <Package className="w-8 h-8 text-primary" />
        <div>
          <p className="font-semibold text-sm">In Transit</p>
          <p className="text-[10px] text-muted-foreground">ETA: 4:30 PM Today</p>
        </div>
      </div>

      {/* Timeline */}
      <div className="space-y-3">
        <div className="flex gap-3">
          <div className="flex flex-col items-center">
            <div className="w-6 h-6 rounded-full bg-success flex items-center justify-center">
              <CheckCircle className="w-4 h-4 text-success-foreground" />
            </div>
            <div className="w-0.5 h-8 bg-success" />
          </div>
          <div>
            <p className="text-xs font-medium">Picked Up</p>
            <p className="text-[10px] text-muted-foreground">Los Angeles, CA • 8:00 AM</p>
          </div>
        </div>
        <div className="flex gap-3">
          <div className="flex flex-col items-center">
            <div className="w-6 h-6 rounded-full bg-primary flex items-center justify-center animate-pulse">
              <Truck className="w-4 h-4 text-primary-foreground" />
            </div>
            <div className="w-0.5 h-8 bg-muted" />
          </div>
          <div>
            <p className="text-xs font-medium">In Transit</p>
            <p className="text-[10px] text-muted-foreground">280 miles remaining</p>
          </div>
        </div>
        <div className="flex gap-3">
          <div className="w-6 h-6 rounded-full bg-muted flex items-center justify-center">
            <MapPin className="w-4 h-4 text-muted-foreground" />
          </div>
          <div>
            <p className="text-xs font-medium text-muted-foreground">Delivery</p>
            <p className="text-[10px] text-muted-foreground">Phoenix, AZ • Est. 4:30 PM</p>
          </div>
        </div>
      </div>

      {/* Load Info */}
      <div className="bg-card border border-border rounded-xl p-4 space-y-3">
        <div className="flex justify-between text-xs">
          <span className="text-muted-foreground">Weight</span>
          <span className="font-medium">42,000 lbs</span>
        </div>
        <div className="flex justify-between text-xs">
          <span className="text-muted-foreground">Distance</span>
          <span className="font-medium">372 miles</span>
        </div>
        <div className="flex justify-between text-xs">
          <span className="text-muted-foreground">Rate</span>
          <span className="font-medium">$2,450</span>
        </div>
      </div>
    </div>
  </div>
);

export const DriverAppSlide = () => {
  return (
    <PresentationSlide
      title="Driver Mobile App"
      subtitle="Empowering drivers with real-time load management and navigation"
      icon={Truck}
    >
      <div className="flex flex-col lg:flex-row gap-8 items-center">
        <div className="flex gap-6">
          <PhoneMockup title="Home Screen">
            <DriverHomeScreen />
          </PhoneMockup>
          <PhoneMockup title="Load Details">
            <DriverLoadDetailsScreen />
          </PhoneMockup>
        </div>

        <div className="grid grid-cols-1 gap-4 max-w-xs">
          <FeatureCard
            icon={Navigation}
            title="Turn-by-Turn Navigation"
            description="Integrated GPS navigation to pickup and delivery locations"
          />
          <FeatureCard
            icon={Camera}
            title="POD Upload"
            description="Capture and upload proof of delivery photos instantly"
          />
          <FeatureCard
            icon={Clock}
            title="HOS Tracking"
            description="Monitor hours of service compliance in real-time"
          />
          <FeatureCard
            icon={Phone}
            title="Quick Communication"
            description="One-tap call to dispatcher or customer"
          />
        </div>
      </div>
    </PresentationSlide>
  );
};
