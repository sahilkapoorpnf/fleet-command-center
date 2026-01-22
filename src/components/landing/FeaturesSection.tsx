import { Badge } from "@/components/ui/badge";
import { 
  MapPin, 
  BarChart3, 
  Bell, 
  Shield, 
  Smartphone,
  Zap
} from "lucide-react";

const features = [
  {
    icon: MapPin,
    title: "Real-Time Tracking",
    description: "Track every truck in your fleet with GPS precision. Know exactly where your loads are at any moment.",
  },
  {
    icon: BarChart3,
    title: "Advanced Analytics",
    description: "Comprehensive dashboards with insights on performance, revenue, and operational efficiency.",
  },
  {
    icon: Bell,
    title: "Smart Notifications",
    description: "Automated alerts for load updates, delays, and important milestones delivered instantly.",
  },
  {
    icon: Shield,
    title: "Compliance Ready",
    description: "Built-in ELD compliance, FMCSA regulations, and automatic documentation.",
  },
  {
    icon: Smartphone,
    title: "Mobile First",
    description: "Native mobile apps for drivers with offline support and seamless synchronization.",
  },
  {
    icon: Zap,
    title: "Quick Dispatch",
    description: "Assign loads to drivers in seconds with intelligent matching and availability tracking.",
  },
];

export const FeaturesSection = () => {
  return (
    <section id="features" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <Badge variant="outline" className="mb-4">Features</Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Everything You Need to{" "}
            <span className="text-gradient">Manage Your Fleet</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Powerful tools designed specifically for the trucking industry to help you 
            streamline operations and boost profitability.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={feature.title}
              className="group p-6 rounded-2xl bg-card border border-border/50 hover:border-primary/30 hover:shadow-lg transition-all duration-300 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                <feature.icon className="w-6 h-6 text-primary group-hover:text-primary-foreground" />
              </div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
