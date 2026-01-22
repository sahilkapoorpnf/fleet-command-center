import { ReactNode } from "react";
import { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

interface PresentationSlideProps {
  title: string;
  subtitle?: string;
  icon?: LucideIcon;
  children: ReactNode;
  className?: string;
  variant?: "default" | "hero" | "feature";
}

export const PresentationSlide = ({ 
  title, 
  subtitle, 
  icon: Icon,
  children, 
  className,
  variant = "default"
}: PresentationSlideProps) => {
  return (
    <section 
      className={cn(
        "min-h-screen w-full py-12 px-6 flex flex-col",
        variant === "hero" && "gradient-hero",
        variant === "feature" && "bg-card",
        className
      )}
    >
      <div className="max-w-7xl mx-auto w-full flex-1 flex flex-col">
        {/* Slide Header */}
        <div className="text-center mb-8">
          {Icon && (
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-primary/10 mb-4">
              <Icon className="w-8 h-8 text-primary" />
            </div>
          )}
          <h2 className="text-3xl md:text-4xl font-bold mb-2">{title}</h2>
          {subtitle && (
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">{subtitle}</p>
          )}
        </div>
        
        {/* Slide Content */}
        <div className="flex-1 flex items-center justify-center">
          {children}
        </div>
      </div>
    </section>
  );
};
