import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { MapPin, Navigation, Clock, Package, ChevronRight, Phone } from "lucide-react";
import { cn } from "@/lib/utils";

interface LoadCardProps {
  loadNumber: string;
  origin: string;
  destination: string;
  status: string;
  pickupTime?: string;
  deliveryTime?: string;
  distance?: string;
  weight?: string;
  onAccept?: () => void;
  onViewDetails?: () => void;
  onNavigate?: () => void;
  onCall?: () => void;
  showActions?: boolean;
  variant?: "compact" | "detailed";
}

const statusColors: Record<string, string> = {
  "Pending": "bg-warning/10 text-warning border-warning/20",
  "Assigned": "bg-primary/10 text-primary border-primary/20",
  "In-Transit": "bg-success/10 text-success border-success/20",
  "Picked Up": "bg-primary/10 text-primary border-primary/20",
  "Delivered": "bg-success/10 text-success border-success/20",
  "Completed": "bg-muted text-muted-foreground border-border",
};

export const LoadCard = ({
  loadNumber,
  origin,
  destination,
  status,
  pickupTime,
  deliveryTime,
  distance,
  weight,
  onAccept,
  onViewDetails,
  onNavigate,
  onCall,
  showActions = true,
  variant = "detailed",
}: LoadCardProps) => {
  return (
    <div className="bg-card rounded-xl border border-border overflow-hidden">
      {/* Header */}
      <div className="px-4 py-3 flex items-center justify-between border-b border-border bg-muted/30">
        <div className="flex items-center gap-2">
          <Package className="w-4 h-4 text-primary" />
          <span className="font-semibold text-sm">{loadNumber}</span>
        </div>
        <Badge variant="outline" className={cn("text-xs", statusColors[status])}>
          {status}
        </Badge>
      </div>

      {/* Content */}
      <div className="p-4">
        {/* Route */}
        <div className="flex gap-3 mb-4">
          <div className="flex flex-col items-center">
            <div className="w-3 h-3 rounded-full bg-success border-2 border-success/30" />
            <div className="w-0.5 h-8 bg-border my-1" />
            <div className="w-3 h-3 rounded-full bg-destructive border-2 border-destructive/30" />
          </div>
          <div className="flex-1 space-y-3">
            <div>
              <p className="text-[10px] text-muted-foreground uppercase tracking-wide">Pickup</p>
              <p className="text-sm font-medium">{origin}</p>
              {pickupTime && <p className="text-xs text-muted-foreground">{pickupTime}</p>}
            </div>
            <div>
              <p className="text-[10px] text-muted-foreground uppercase tracking-wide">Delivery</p>
              <p className="text-sm font-medium">{destination}</p>
              {deliveryTime && <p className="text-xs text-muted-foreground">{deliveryTime}</p>}
            </div>
          </div>
        </div>

        {/* Meta Info */}
        {variant === "detailed" && (distance || weight) && (
          <div className="flex gap-4 mb-4 text-xs text-muted-foreground">
            {distance && (
              <div className="flex items-center gap-1">
                <Navigation className="w-3 h-3" />
                <span>{distance}</span>
              </div>
            )}
            {weight && (
              <div className="flex items-center gap-1">
                <Package className="w-3 h-3" />
                <span>{weight}</span>
              </div>
            )}
          </div>
        )}

        {/* Actions */}
        {showActions && (
          <div className="flex gap-2">
            {onAccept && (
              <Button onClick={onAccept} className="flex-1" size="sm">
                Accept Load
              </Button>
            )}
            {onNavigate && (
              <Button onClick={onNavigate} variant="outline" size="sm" className="flex-1">
                <Navigation className="w-4 h-4 mr-1" />
                Navigate
              </Button>
            )}
            {onCall && (
              <Button onClick={onCall} variant="outline" size="icon" className="shrink-0">
                <Phone className="w-4 h-4" />
              </Button>
            )}
            {onViewDetails && (
              <Button onClick={onViewDetails} variant="ghost" size="icon" className="shrink-0">
                <ChevronRight className="w-4 h-4" />
              </Button>
            )}
          </div>
        )}
      </div>
    </div>
  );
};
