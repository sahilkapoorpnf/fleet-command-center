import { cn } from "@/lib/utils";

interface LogoProps {
  className?: string;
  showText?: boolean;
  size?: "sm" | "md" | "lg";
}

export const Logo = ({ className, showText = true, size = "md" }: LogoProps) => {
  const sizes = {
    sm: { icon: "w-8 h-8", text: "text-lg" },
    md: { icon: "w-10 h-10", text: "text-xl" },
    lg: { icon: "w-14 h-14", text: "text-2xl" },
  };

  return (
    <div className={cn("flex items-center gap-3", className)}>
      <svg
        viewBox="0 0 100 100"
        className={sizes[size].icon}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Top triangle */}
        <polygon points="50,5 75,30 50,30" fill="hsl(217 91% 60%)" />
        {/* Left square */}
        <rect x="22" y="32" width="26" height="26" fill="hsl(224 76% 48%)" />
        {/* Right half circle */}
        <path
          d="M 50 32 A 33 33 0 0 1 50 98 L 50 32"
          fill="hsl(217 91% 60%)"
        />
        {/* Grid lines */}
        <line x1="50" y1="32" x2="50" y2="58" stroke="white" strokeWidth="2" />
        <line x1="22" y1="58" x2="48" y2="58" stroke="white" strokeWidth="2" />
      </svg>
      {showText && (
        <span className={cn("font-bold tracking-tight", sizes[size].text)}>
          <span className="text-primary">bit</span>
          <span className="text-foreground">decentro</span>
        </span>
      )}
    </div>
  );
};
