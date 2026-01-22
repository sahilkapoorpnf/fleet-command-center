import { MapPin, Truck, Navigation, Radio, Clock, Route } from "lucide-react";
import { PresentationSlide } from "../PresentationSlide";
import { FeatureCard } from "../FeatureCard";

export const GPSTrackingSlide = () => {
  return (
    <PresentationSlide
      title="Live GPS Tracking"
      subtitle="Real-time visibility into your entire fleet with interactive mapping"
      icon={MapPin}
    >
      <div className="flex flex-col gap-8 items-center w-full">
        {/* Large Map Demo */}
        <div className="relative w-full max-w-4xl h-80 bg-gradient-to-br from-primary/5 via-background to-primary/10 rounded-2xl border border-border overflow-hidden shadow-xl">
          {/* Grid lines */}
          <div className="absolute inset-0" style={{
            backgroundImage: "linear-gradient(hsl(var(--border)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--border)) 1px, transparent 1px)",
            backgroundSize: "50px 50px"
          }} />
          
          {/* Route lines */}
          <svg className="absolute inset-0 w-full h-full">
            <path d="M 100 200 Q 200 100 350 150 T 600 120" stroke="hsl(var(--primary))" strokeWidth="3" fill="none" strokeDasharray="8 4" opacity="0.6" />
            <path d="M 200 280 Q 300 200 450 220 T 700 180" stroke="hsl(var(--success))" strokeWidth="3" fill="none" strokeDasharray="8 4" opacity="0.6" />
          </svg>
          
          {/* Driver markers */}
          {[
            { x: "15%", y: "60%", status: "moving", driver: "John S.", load: "LD-001" },
            { x: "35%", y: "40%", status: "moving", driver: "Sarah J.", load: "LD-004" },
            { x: "55%", y: "55%", status: "stopped", driver: "Mike D.", load: "LD-007" },
            { x: "75%", y: "35%", status: "moving", driver: "Tom W.", load: "LD-012" },
            { x: "25%", y: "75%", status: "idle", driver: "James B.", load: "—" },
            { x: "85%", y: "65%", status: "moving", driver: "Lisa M.", load: "LD-015" },
          ].map((marker, i) => (
            <div key={i} className="absolute group" style={{ left: marker.x, top: marker.y }}>
              {/* Pulse effect for moving */}
              {marker.status === "moving" && (
                <div className="absolute inset-0 w-10 h-10 -translate-x-1/2 -translate-y-1/2 rounded-full bg-success/30 animate-ping" />
              )}
              
              {/* Marker */}
              <div className={`relative w-10 h-10 -translate-x-1/2 -translate-y-1/2 rounded-full flex items-center justify-center shadow-lg cursor-pointer transition-transform hover:scale-110 ${
                marker.status === "moving" ? "bg-success" :
                marker.status === "stopped" ? "bg-warning" :
                "bg-muted"
              }`}>
                <Truck className="w-5 h-5 text-white" />
              </div>
              
              {/* Tooltip */}
              <div className="absolute left-1/2 -translate-x-1/2 bottom-full mb-2 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
                <div className="bg-card border border-border rounded-lg p-2 shadow-lg whitespace-nowrap">
                  <p className="text-xs font-semibold">{marker.driver}</p>
                  <p className="text-[10px] text-muted-foreground">{marker.load}</p>
                  <p className={`text-[10px] font-medium ${
                    marker.status === "moving" ? "text-success" :
                    marker.status === "stopped" ? "text-warning" :
                    "text-muted-foreground"
                  }`}>{marker.status.charAt(0).toUpperCase() + marker.status.slice(1)}</p>
                </div>
              </div>
            </div>
          ))}
          
          {/* Legend */}
          <div className="absolute bottom-4 left-4 bg-card/90 backdrop-blur border border-border rounded-lg p-3">
            <p className="text-xs font-semibold mb-2">Status</p>
            <div className="space-y-1">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-success" />
                <span className="text-[10px]">Moving</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-warning" />
                <span className="text-[10px]">Stopped</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-muted" />
                <span className="text-[10px]">Idle</span>
              </div>
            </div>
          </div>
          
          {/* Active Count */}
          <div className="absolute top-4 right-4 bg-card/90 backdrop-blur border border-border rounded-lg p-3">
            <p className="text-2xl font-bold text-primary">6</p>
            <p className="text-[10px] text-muted-foreground">Active Drivers</p>
          </div>
        </div>

        {/* Feature Cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 w-full max-w-4xl">
          <FeatureCard
            icon={MapPin}
            title="Real-Time Location"
            description="Track driver positions updated every 30 seconds"
          />
          <FeatureCard
            icon={Route}
            title="Route Visualization"
            description="View planned routes and actual paths taken"
          />
          <FeatureCard
            icon={Clock}
            title="ETA Predictions"
            description="Accurate arrival time estimates based on traffic"
          />
          <FeatureCard
            icon={Radio}
            title="Geofence Alerts"
            description="Automatic notifications at key locations"
          />
        </div>
      </div>
    </PresentationSlide>
  );
};
