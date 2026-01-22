import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { 
  ChevronLeft, 
  ChevronRight, 
  Home, 
  Truck, 
  LayoutDashboard, 
  Settings, 
  Radio, 
  BarChart3, 
  MapPin, 
  Workflow 
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Logo } from "@/components/Logo";
import { PresentationSlide } from "@/components/presentation/PresentationSlide";
import { ProcessFlow } from "@/components/presentation/ProcessFlow";
import { AdminDashboardSlide } from "@/components/presentation/slides/AdminDashboardSlide";
import { AdminManagementSlide } from "@/components/presentation/slides/AdminManagementSlide";
import { DriverAppSlide } from "@/components/presentation/slides/DriverAppSlide";
import { DispatcherAppSlide } from "@/components/presentation/slides/DispatcherAppSlide";
import { ManagerAppSlide } from "@/components/presentation/slides/ManagerAppSlide";
import { GPSTrackingSlide } from "@/components/presentation/slides/GPSTrackingSlide";
import { cn } from "@/lib/utils";

const slides = [
  { id: "hero", icon: Home, label: "Introduction" },
  { id: "process", icon: Workflow, label: "Process Flow" },
  { id: "admin-dashboard", icon: LayoutDashboard, label: "Admin Dashboard" },
  { id: "admin-management", icon: Settings, label: "Fleet Management" },
  { id: "driver-app", icon: Truck, label: "Driver App" },
  { id: "dispatcher-app", icon: Radio, label: "Dispatcher App" },
  { id: "manager-app", icon: BarChart3, label: "Manager App" },
  { id: "gps-tracking", icon: MapPin, label: "GPS Tracking" },
];

export const PresentationPage = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight" || e.key === " ") {
        e.preventDefault();
        setCurrentSlide((prev) => Math.min(prev + 1, slides.length - 1));
      } else if (e.key === "ArrowLeft") {
        e.preventDefault();
        setCurrentSlide((prev) => Math.max(prev - 1, 0));
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => Math.min(prev + 1, slides.length - 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => Math.max(prev - 1, 0));
  };

  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      {/* Fixed Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur border-b border-border">
        <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2">
            <Logo size="sm" />
          </Link>
          
          {/* Slide Indicators */}
          <div className="hidden md:flex items-center gap-1">
            {slides.map((slide, index) => (
              <button
                key={slide.id}
                onClick={() => goToSlide(index)}
                className={cn(
                  "flex items-center gap-1 px-2 py-1 rounded-md text-xs transition-colors",
                  index === currentSlide 
                    ? "bg-primary text-primary-foreground" 
                    : "text-muted-foreground hover:text-foreground hover:bg-muted"
                )}
              >
                <slide.icon className="w-3 h-3" />
                <span className="hidden lg:inline">{slide.label}</span>
              </button>
            ))}
          </div>

          {/* Slide Counter */}
          <div className="text-sm text-muted-foreground">
            {currentSlide + 1} / {slides.length}
          </div>
        </div>
      </header>

      {/* Slides Container */}
      <div className="pt-16">
        {/* Hero Slide */}
        {currentSlide === 0 && (
          <PresentationSlide
            title="TruckDispatch Pro"
            subtitle="Complete fleet management solution for modern trucking operations"
            variant="hero"
          >
            <div className="text-center space-y-8">
              <div className="flex items-center justify-center gap-4 flex-wrap">
                {[
                  { icon: Truck, label: "50+ Trucks Managed" },
                  { icon: Radio, label: "Real-Time Dispatch" },
                  { icon: MapPin, label: "Live GPS Tracking" },
                  { icon: BarChart3, label: "Analytics Dashboard" },
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-2 bg-card border border-border rounded-full px-4 py-2">
                    <item.icon className="w-5 h-5 text-primary" />
                    <span className="text-sm font-medium">{item.label}</span>
                  </div>
                ))}
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto mt-12">
                <div className="bg-card border border-border rounded-2xl p-6 text-center">
                  <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                    <LayoutDashboard className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="font-semibold mb-2">Super Admin Panel</h3>
                  <p className="text-sm text-muted-foreground">Complete fleet oversight with CRUD operations for trucks, drivers, loads, and users</p>
                </div>
                <div className="bg-card border border-border rounded-2xl p-6 text-center">
                  <div className="w-16 h-16 rounded-2xl bg-success/10 flex items-center justify-center mx-auto mb-4">
                    <Truck className="w-8 h-8 text-success" />
                  </div>
                  <h3 className="font-semibold mb-2">Mobile Apps</h3>
                  <p className="text-sm text-muted-foreground">Dedicated apps for Drivers, Dispatchers, and Fleet Managers</p>
                </div>
                <div className="bg-card border border-border rounded-2xl p-6 text-center">
                  <div className="w-16 h-16 rounded-2xl bg-warning/10 flex items-center justify-center mx-auto mb-4">
                    <MapPin className="w-8 h-8 text-warning" />
                  </div>
                  <h3 className="font-semibold mb-2">Live Tracking</h3>
                  <p className="text-sm text-muted-foreground">Real-time GPS monitoring with status updates and ETA predictions</p>
                </div>
              </div>

              <Button size="lg" onClick={nextSlide} className="mt-8">
                Start Presentation
                <ChevronRight className="w-5 h-5 ml-2" />
              </Button>
            </div>
          </PresentationSlide>
        )}

        {/* Process Flow Slide */}
        {currentSlide === 1 && (
          <PresentationSlide
            title="Dispatch Process Flow"
            subtitle="From load creation to delivery confirmation — a seamless workflow"
            icon={Workflow}
          >
            <ProcessFlow />
          </PresentationSlide>
        )}

        {/* Admin Dashboard Slide */}
        {currentSlide === 2 && <AdminDashboardSlide />}

        {/* Admin Management Slide */}
        {currentSlide === 3 && <AdminManagementSlide />}

        {/* Driver App Slide */}
        {currentSlide === 4 && <DriverAppSlide />}

        {/* Dispatcher App Slide */}
        {currentSlide === 5 && <DispatcherAppSlide />}

        {/* Manager App Slide */}
        {currentSlide === 6 && <ManagerAppSlide />}

        {/* GPS Tracking Slide */}
        {currentSlide === 7 && <GPSTrackingSlide />}
      </div>

      {/* Navigation Controls */}
      <div className="fixed bottom-6 left-1/2 -translate-x-1/2 flex items-center gap-4 bg-card/90 backdrop-blur border border-border rounded-full px-6 py-3 shadow-lg">
        <Button
          variant="ghost"
          size="icon"
          onClick={prevSlide}
          disabled={currentSlide === 0}
          className="rounded-full"
        >
          <ChevronLeft className="w-5 h-5" />
        </Button>

        {/* Progress dots */}
        <div className="flex items-center gap-2">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={cn(
                "w-2 h-2 rounded-full transition-all",
                index === currentSlide 
                  ? "bg-primary w-6" 
                  : "bg-muted hover:bg-muted-foreground/50"
              )}
            />
          ))}
        </div>

        <Button
          variant="ghost"
          size="icon"
          onClick={nextSlide}
          disabled={currentSlide === slides.length - 1}
          className="rounded-full"
        >
          <ChevronRight className="w-5 h-5" />
        </Button>
      </div>

      {/* Keyboard hint */}
      <div className="fixed bottom-6 right-6 text-xs text-muted-foreground hidden md:block">
        Use ← → arrows or space to navigate
      </div>
    </div>
  );
};
