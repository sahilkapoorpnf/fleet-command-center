import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { MapPin, Truck, Navigation, Maximize2, Phone } from "lucide-react";

interface Driver {
  id: string;
  name: string;
  truck: string;
  status: "moving" | "stopped" | "idle";
  location: string;
  coordinates: { x: number; y: number };
  speed?: number;
  heading?: string;
}

interface LiveTrackingMapProps {
  drivers?: Driver[];
  compact?: boolean;
  onDriverClick?: (driver: Driver) => void;
}

const defaultDrivers: Driver[] = [
  { id: "1", name: "John Smith", truck: "TRK-001", status: "moving", location: "I-10, Phoenix, AZ", coordinates: { x: 65, y: 35 }, speed: 62, heading: "East" },
  { id: "2", name: "Mike Johnson", truck: "TRK-002", status: "moving", location: "I-94, Chicago, IL", coordinates: { x: 55, y: 25 }, speed: 58, heading: "West" },
  { id: "3", name: "Sarah Davis", truck: "TRK-003", status: "stopped", location: "Truck Stop, Dallas, TX", coordinates: { x: 45, y: 55 }, speed: 0, heading: "N/A" },
  { id: "4", name: "Tom Wilson", truck: "TRK-004", status: "idle", location: "Warehouse, Seattle, WA", coordinates: { x: 15, y: 20 }, speed: 0, heading: "N/A" },
  { id: "5", name: "Emily Brown", truck: "TRK-005", status: "moving", location: "I-95, Miami, FL", coordinates: { x: 80, y: 75 }, speed: 55, heading: "North" },
];

export const LiveTrackingMap = ({ 
  drivers = defaultDrivers, 
  compact = false,
  onDriverClick 
}: LiveTrackingMapProps) => {
  const [selectedDriver, setSelectedDriver] = useState<Driver | null>(null);

  const handleDriverClick = (driver: Driver) => {
    setSelectedDriver(selectedDriver?.id === driver.id ? null : driver);
    onDriverClick?.(driver);
  };

  const getStatusColor = (status: Driver["status"]) => {
    switch (status) {
      case "moving": return "bg-success";
      case "stopped": return "bg-warning";
      case "idle": return "bg-muted-foreground";
    }
  };

  const getStatusBadge = (status: Driver["status"]) => {
    switch (status) {
      case "moving": return "bg-success/10 text-success border-success/20";
      case "stopped": return "bg-warning/10 text-warning border-warning/20";
      case "idle": return "bg-muted text-muted-foreground border-muted";
    }
  };

  return (
    <Card className={compact ? "" : "overflow-hidden"}>
      <CardHeader className="pb-2">
        <div className="flex items-center justify-between">
          <CardTitle className="text-base flex items-center gap-2">
            <Navigation className="w-4 h-4 text-primary" />
            Live Tracking
          </CardTitle>
          <div className="flex items-center gap-2">
            <Badge variant="outline" className="text-[10px]">
              {drivers.filter(d => d.status === "moving").length} moving
            </Badge>
            <Button variant="ghost" size="icon" className="h-7 w-7">
              <Maximize2 className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </CardHeader>
      <CardContent className="p-0">
        {/* Map Container */}
        <div className="relative h-48 bg-gradient-to-br from-primary/5 via-primary/10 to-primary/5 overflow-hidden">
          {/* Grid Lines */}
          <div className="absolute inset-0 opacity-20">
            {[...Array(8)].map((_, i) => (
              <div key={`h-${i}`} className="absolute w-full h-px bg-primary/30" style={{ top: `${(i + 1) * 12.5}%` }} />
            ))}
            {[...Array(8)].map((_, i) => (
              <div key={`v-${i}`} className="absolute h-full w-px bg-primary/30" style={{ left: `${(i + 1) * 12.5}%` }} />
            ))}
          </div>

          {/* Route Lines (decorative) */}
          <svg className="absolute inset-0 w-full h-full" style={{ pointerEvents: 'none' }}>
            <path
              d="M 10% 50% Q 30% 30%, 50% 40% T 90% 35%"
              fill="none"
              stroke="hsl(var(--primary))"
              strokeWidth="2"
              strokeDasharray="4 4"
              opacity="0.3"
            />
            <path
              d="M 20% 80% Q 40% 60%, 60% 70% T 85% 50%"
              fill="none"
              stroke="hsl(var(--primary))"
              strokeWidth="2"
              strokeDasharray="4 4"
              opacity="0.3"
            />
          </svg>

          {/* Driver Markers */}
          {drivers.map((driver) => (
            <button
              key={driver.id}
              onClick={() => handleDriverClick(driver)}
              className={`absolute transform -translate-x-1/2 -translate-y-1/2 transition-all duration-200 ${
                selectedDriver?.id === driver.id ? "z-20 scale-125" : "z-10 hover:scale-110"
              }`}
              style={{ left: `${driver.coordinates.x}%`, top: `${driver.coordinates.y}%` }}
            >
              <div className="relative">
                {/* Pulse animation for moving trucks */}
                {driver.status === "moving" && (
                  <span className="absolute inset-0 animate-ping rounded-full bg-success/40" />
                )}
                <div className={`w-8 h-8 rounded-full flex items-center justify-center shadow-lg border-2 border-background ${getStatusColor(driver.status)}`}>
                  <Truck className="w-4 h-4 text-white" />
                </div>
              </div>
            </button>
          ))}

          {/* Selected Driver Info Popup */}
          {selectedDriver && (
            <div 
              className="absolute z-30 bg-background border border-border rounded-lg shadow-xl p-3 min-w-[180px] transform -translate-x-1/2"
              style={{ 
                left: `${Math.min(Math.max(selectedDriver.coordinates.x, 25), 75)}%`, 
                top: `${selectedDriver.coordinates.y + 12}%` 
              }}
            >
              <div className="flex items-start gap-2">
                <Avatar className="w-8 h-8">
                  <AvatarFallback className="bg-primary/10 text-primary text-xs">
                    {selectedDriver.name.split(" ").map(n => n[0]).join("")}
                  </AvatarFallback>
                </Avatar>
                <div className="flex-1 min-w-0">
                  <p className="font-medium text-sm truncate">{selectedDriver.name}</p>
                  <p className="text-[10px] text-muted-foreground">{selectedDriver.truck}</p>
                </div>
              </div>
              <div className="mt-2 space-y-1">
                <div className="flex items-center gap-1 text-[10px] text-muted-foreground">
                  <MapPin className="w-3 h-3" />
                  <span className="truncate">{selectedDriver.location}</span>
                </div>
                <div className="flex items-center justify-between">
                  <Badge variant="outline" className={`text-[9px] ${getStatusBadge(selectedDriver.status)}`}>
                    {selectedDriver.status === "moving" ? `${selectedDriver.speed} mph ${selectedDriver.heading}` : selectedDriver.status}
                  </Badge>
                  <Button variant="ghost" size="icon" className="h-6 w-6">
                    <Phone className="w-3 h-3" />
                  </Button>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Driver Legend */}
        {!compact && (
          <div className="p-3 border-t border-border">
            <div className="flex items-center justify-between text-[10px]">
              <div className="flex items-center gap-3">
                <span className="flex items-center gap-1">
                  <span className="w-2 h-2 rounded-full bg-success" />
                  Moving ({drivers.filter(d => d.status === "moving").length})
                </span>
                <span className="flex items-center gap-1">
                  <span className="w-2 h-2 rounded-full bg-warning" />
                  Stopped ({drivers.filter(d => d.status === "stopped").length})
                </span>
                <span className="flex items-center gap-1">
                  <span className="w-2 h-2 rounded-full bg-muted-foreground" />
                  Idle ({drivers.filter(d => d.status === "idle").length})
                </span>
              </div>
              <span className="text-muted-foreground">Updated just now</span>
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  );
};
