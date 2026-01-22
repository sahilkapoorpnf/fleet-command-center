import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  Headphones, 
  Truck, 
  Shield, 
  Settings,
  CheckCircle2,
  ArrowRight
} from "lucide-react";
import { Link } from "react-router-dom";

const userTypes = [
  {
    icon: Headphones,
    title: "Dispatcher",
    badge: "Operations",
    description: "Manage loads, assign drivers, and track deliveries in real-time.",
    features: [
      "Real-time load tracking",
      "Driver assignment & scheduling",
      "Route optimization",
      "Customer communication",
      "Load documentation",
    ],
    color: "text-primary",
    bgColor: "bg-primary/10",
    link: "/dispatcher",
  },
  {
    icon: Truck,
    title: "Driver",
    badge: "On the Road",
    description: "Accept loads, navigate routes, and submit delivery confirmations.",
    features: [
      "Mobile-first interface",
      "Turn-by-turn navigation",
      "Electronic logging (ELD)",
      "POD capture & upload",
      "Earnings dashboard",
    ],
    color: "text-success",
    bgColor: "bg-success/10",
    link: "/driver",
  },
  {
    icon: Shield,
    title: "Fleet Manager",
    badge: "Management",
    description: "Monitor fleet performance, analyze data, and optimize operations.",
    features: [
      "Fleet performance metrics",
      "Fuel & cost tracking",
      "Maintenance scheduling",
      "Compliance monitoring",
      "Financial reports",
    ],
    color: "text-warning",
    bgColor: "bg-warning/10",
    link: "/manager",
  },
  {
    icon: Settings,
    title: "Super Admin",
    badge: "Full Control",
    description: "Complete system control with user management and configuration.",
    features: [
      "User & role management",
      "System configuration",
      "All data access",
      "Audit logs",
      "Integration settings",
    ],
    color: "text-destructive",
    bgColor: "bg-destructive/10",
    link: "/admin",
  },
];

export const UserTypesSection = () => {
  return (
    <section id="user-types" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <Badge variant="outline" className="mb-4">User Types</Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Tailored Experience for{" "}
            <span className="text-gradient">Every Role</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Our platform provides specialized interfaces and tools designed for each user type,
            ensuring maximum productivity and ease of use.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {userTypes.map((type, index) => (
            <Card 
              key={type.title} 
              className="group hover:shadow-xl transition-all duration-300 border-border/50 bg-card animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader>
                <div className={`w-12 h-12 rounded-xl ${type.bgColor} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                  <type.icon className={`w-6 h-6 ${type.color}`} />
                </div>
                <div className="flex items-center gap-2 mb-2">
                  <CardTitle className="text-xl">{type.title}</CardTitle>
                </div>
                <Badge variant="secondary" className="w-fit text-xs">
                  {type.badge}
                </Badge>
                <CardDescription className="mt-3">
                  {type.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 mb-6">
                  {type.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2 text-sm text-muted-foreground">
                      <CheckCircle2 className={`w-4 h-4 ${type.color}`} />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Link to={type.link}>
                  <Button variant="ghost" className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                    Learn More
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
