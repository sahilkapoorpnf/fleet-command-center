import { ArrowRight, Truck, Package, MapPin, CheckCircle, Users, ClipboardList } from "lucide-react";

const steps = [
  {
    icon: ClipboardList,
    title: "Load Created",
    description: "Dispatcher creates new load with pickup/delivery details"
  },
  {
    icon: Users,
    title: "Driver Assigned",
    description: "Available driver is assigned to the load"
  },
  {
    icon: Truck,
    title: "Driver Accepts",
    description: "Driver reviews and accepts the assignment"
  },
  {
    icon: MapPin,
    title: "In Transit",
    description: "Real-time GPS tracking during transport"
  },
  {
    icon: Package,
    title: "Delivery",
    description: "Driver arrives and delivers the load"
  },
  {
    icon: CheckCircle,
    title: "Completed",
    description: "POD uploaded and load marked complete"
  }
];

export const ProcessFlow = () => {
  return (
    <div className="w-full max-w-6xl mx-auto">
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
        {steps.map((step, index) => (
          <div key={index} className="relative flex flex-col items-center">
            {/* Connector Arrow */}
            {index < steps.length - 1 && (
              <div className="hidden lg:block absolute top-8 left-[60%] w-full">
                <ArrowRight className="w-6 h-6 text-primary/40" />
              </div>
            )}
            
            {/* Step Circle */}
            <div className="w-16 h-16 rounded-full bg-primary/10 border-2 border-primary flex items-center justify-center mb-3 relative z-10">
              <step.icon className="w-7 h-7 text-primary" />
            </div>
            
            {/* Step Number */}
            <div className="absolute -top-1 -right-1 w-6 h-6 rounded-full bg-primary text-primary-foreground text-xs font-bold flex items-center justify-center">
              {index + 1}
            </div>
            
            {/* Content */}
            <h4 className="font-semibold text-sm text-center mb-1">{step.title}</h4>
            <p className="text-xs text-muted-foreground text-center">{step.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
