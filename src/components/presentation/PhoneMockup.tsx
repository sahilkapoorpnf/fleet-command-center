import { ReactNode } from "react";

interface PhoneMockupProps {
  children: ReactNode;
  title?: string;
}

export const PhoneMockup = ({ children, title }: PhoneMockupProps) => {
  return (
    <div className="flex flex-col items-center gap-3">
      {title && (
        <h4 className="text-sm font-medium text-muted-foreground">{title}</h4>
      )}
      <div className="relative">
        {/* Phone frame */}
        <div className="relative w-[280px] h-[560px] bg-sidebar rounded-[3rem] p-2 shadow-2xl border-4 border-sidebar">
          {/* Notch */}
          <div className="absolute top-2 left-1/2 -translate-x-1/2 w-24 h-6 bg-sidebar rounded-full z-10" />
          
          {/* Screen */}
          <div className="w-full h-full bg-background rounded-[2.5rem] overflow-hidden">
            <div className="w-full h-full overflow-y-auto">
              {children}
            </div>
          </div>
          
          {/* Home indicator */}
          <div className="absolute bottom-3 left-1/2 -translate-x-1/2 w-32 h-1 bg-foreground/20 rounded-full" />
        </div>
      </div>
    </div>
  );
};
