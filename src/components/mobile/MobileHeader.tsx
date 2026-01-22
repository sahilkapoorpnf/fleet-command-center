import { Bell, Menu, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Logo } from "@/components/Logo";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Badge } from "@/components/ui/badge";

interface MobileHeaderProps {
  title: string;
  userRole: string;
  onMenuClick?: () => void;
  notifications?: number;
  menuContent?: React.ReactNode;
}

export const MobileHeader = ({ title, userRole, notifications = 0, menuContent }: MobileHeaderProps) => {
  return (
    <header className="sticky top-0 z-50 bg-sidebar text-sidebar-foreground px-4 py-3 flex items-center justify-between shadow-lg">
      <div className="flex items-center gap-3">
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon" className="text-sidebar-foreground hover:bg-sidebar-accent">
              <Menu className="w-5 h-5" />
            </Button>
          </SheetTrigger>
          <SheetContent side="left" className="bg-sidebar text-sidebar-foreground w-72 p-0">
            {menuContent}
          </SheetContent>
        </Sheet>
        <div>
          <h1 className="font-semibold text-base">{title}</h1>
          <p className="text-xs text-sidebar-foreground/60">{userRole}</p>
        </div>
      </div>
      
      <div className="flex items-center gap-2">
        <Button variant="ghost" size="icon" className="relative text-sidebar-foreground hover:bg-sidebar-accent">
          <Bell className="w-5 h-5" />
          {notifications > 0 && (
            <Badge className="absolute -top-1 -right-1 w-5 h-5 p-0 flex items-center justify-center text-[10px] bg-destructive">
              {notifications}
            </Badge>
          )}
        </Button>
        <Button variant="ghost" size="icon" className="text-sidebar-foreground hover:bg-sidebar-accent">
          <User className="w-5 h-5" />
        </Button>
      </div>
    </header>
  );
};
