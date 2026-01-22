import { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

interface StatusCardProps {
  icon: LucideIcon;
  title: string;
  value: string;
  subtitle?: string;
  color?: "primary" | "success" | "warning" | "destructive";
  onClick?: () => void;
}

const colorClasses = {
  primary: "bg-primary/10 text-primary",
  success: "bg-success/10 text-success",
  warning: "bg-warning/10 text-warning",
  destructive: "bg-destructive/10 text-destructive",
};

export const StatusCard = ({ icon: Icon, title, value, subtitle, color = "primary", onClick }: StatusCardProps) => {
  return (
    <div 
      className={cn(
        "bg-card rounded-xl border border-border p-4 transition-all",
        onClick && "cursor-pointer hover:shadow-md active:scale-[0.98]"
      )}
      onClick={onClick}
    >
      <div className="flex items-start gap-3">
        <div className={cn("w-10 h-10 rounded-lg flex items-center justify-center", colorClasses[color])}>
          <Icon className="w-5 h-5" />
        </div>
        <div className="flex-1 min-w-0">
          <p className="text-xs text-muted-foreground mb-1">{title}</p>
          <p className="text-lg font-bold truncate">{value}</p>
          {subtitle && <p className="text-xs text-muted-foreground mt-1">{subtitle}</p>}
        </div>
      </div>
    </div>
  );
};
