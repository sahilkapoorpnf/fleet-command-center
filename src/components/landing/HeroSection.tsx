import { Button } from "@/components/ui/button";
import { ArrowRight, Truck, MapPin, Clock } from "lucide-react";
import { Link } from "react-router-dom";

export const HeroSection = () => {
  return (
    <section className="pt-24 pb-16 gradient-hero">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6 animate-fade-in">
            <Truck className="w-4 h-4" />
            <span>Trusted by 500+ Trucking Companies</span>
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 animate-fade-in" style={{ animationDelay: "0.1s" }}>
            Streamline Your{" "}
            <span className="text-gradient">Truck Dispatching</span>{" "}
            Operations
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto animate-fade-in" style={{ animationDelay: "0.2s" }}>
            Powerful dispatching software that connects dispatchers, drivers, and fleet managers. 
            Real-time tracking, load management, and seamless communication in one platform.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12 animate-fade-in" style={{ animationDelay: "0.3s" }}>
            <Link to="/admin">
              <Button size="lg" className="gradient-primary text-lg px-8 animate-pulse-glow">
                Get Started Free
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
            <Button size="lg" variant="outline" className="text-lg px-8">
              Watch Demo
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 max-w-2xl mx-auto animate-fade-in" style={{ animationDelay: "0.4s" }}>
            <div className="text-center">
              <div className="flex items-center justify-center gap-2 text-primary mb-2">
                <Truck className="w-5 h-5" />
              </div>
              <div className="text-3xl font-bold text-foreground">10K+</div>
              <div className="text-sm text-muted-foreground">Active Trucks</div>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center gap-2 text-primary mb-2">
                <MapPin className="w-5 h-5" />
              </div>
              <div className="text-3xl font-bold text-foreground">500+</div>
              <div className="text-sm text-muted-foreground">Companies</div>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center gap-2 text-primary mb-2">
                <Clock className="w-5 h-5" />
              </div>
              <div className="text-3xl font-bold text-foreground">99.9%</div>
              <div className="text-sm text-muted-foreground">Uptime</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
