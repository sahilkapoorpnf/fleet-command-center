import { AdminHeader } from "@/components/admin/AdminHeader";
import { Construction } from "lucide-react";

interface PlaceholderPageProps {
  title: string;
}

export const PlaceholderPage = ({ title }: PlaceholderPageProps) => {
  return (
    <div className="min-h-screen">
      <AdminHeader title={title} />
      <div className="p-6">
        <div className="flex flex-col items-center justify-center h-[60vh] text-center">
          <div className="w-20 h-20 rounded-2xl bg-primary/10 flex items-center justify-center mb-6">
            <Construction className="w-10 h-10 text-primary" />
          </div>
          <h2 className="text-2xl font-bold mb-2">{title}</h2>
          <p className="text-muted-foreground max-w-md">
            This section is under development. Check back soon for full functionality.
          </p>
        </div>
      </div>
    </div>
  );
};
