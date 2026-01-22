import { ReactNode } from "react";

interface DesktopMockupProps {
  children: ReactNode;
  title?: string;
}

export const DesktopMockup = ({ children, title }: DesktopMockupProps) => {
  return (
    <div className="flex flex-col items-center gap-3">
      {title && (
        <h4 className="text-sm font-medium text-muted-foreground">{title}</h4>
      )}
      <div className="relative">
        {/* Monitor frame */}
        <div className="relative bg-sidebar rounded-xl p-2 shadow-2xl">
          {/* Top bar with dots */}
          <div className="flex items-center gap-2 px-3 py-2 bg-sidebar rounded-t-lg">
            <div className="flex gap-1.5">
              <div className="w-3 h-3 rounded-full bg-destructive/80" />
              <div className="w-3 h-3 rounded-full bg-warning/80" />
              <div className="w-3 h-3 rounded-full bg-success/80" />
            </div>
            <div className="flex-1 mx-4">
              <div className="bg-sidebar-accent rounded-md px-3 py-1 text-[10px] text-sidebar-foreground/60 text-center">
                truckdispatch.app/admin
              </div>
            </div>
          </div>
          
          {/* Screen */}
          <div className="w-[800px] h-[480px] bg-background overflow-hidden">
            <div className="w-full h-full overflow-y-auto">
              {children}
            </div>
          </div>
        </div>
        
        {/* Stand */}
        <div className="mx-auto w-24 h-8 bg-gradient-to-b from-sidebar to-sidebar-accent" />
        <div className="mx-auto w-40 h-2 bg-sidebar rounded-b-lg" />
      </div>
    </div>
  );
};
