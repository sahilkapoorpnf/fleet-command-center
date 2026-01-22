import { Settings, Truck, Users, Package, Search, Plus, Edit, Trash2 } from "lucide-react";
import { PresentationSlide } from "../PresentationSlide";
import { DesktopMockup } from "../DesktopMockup";

const TablePreview = ({ title, columns, rows }: { title: string; columns: string[]; rows: string[][] }) => (
  <div className="bg-card border border-border rounded-lg p-3">
    <div className="flex items-center justify-between mb-3">
      <h4 className="text-xs font-semibold">{title}</h4>
      <div className="flex items-center gap-2">
        <div className="flex items-center gap-1 bg-muted rounded-md px-2 py-1">
          <Search className="w-3 h-3 text-muted-foreground" />
          <span className="text-[10px] text-muted-foreground">Search...</span>
        </div>
        <button className="flex items-center gap-1 bg-primary text-primary-foreground rounded-md px-2 py-1">
          <Plus className="w-3 h-3" />
          <span className="text-[10px]">Add New</span>
        </button>
      </div>
    </div>
    <div className="overflow-hidden">
      {/* Header */}
      <div className="grid gap-2 text-[10px] font-medium text-muted-foreground border-b border-border py-2" 
           style={{ gridTemplateColumns: `repeat(${columns.length + 1}, 1fr)` }}>
        {columns.map((col, i) => (
          <div key={i}>{col}</div>
        ))}
        <div className="text-right">Actions</div>
      </div>
      {/* Rows */}
      {rows.map((row, i) => (
        <div key={i} className="grid gap-2 text-[10px] py-2 border-b border-border last:border-0"
             style={{ gridTemplateColumns: `repeat(${columns.length + 1}, 1fr)` }}>
          {row.map((cell, j) => (
            <div key={j} className={j === row.length - 1 ? "font-medium" : ""}>{cell}</div>
          ))}
          <div className="flex items-center justify-end gap-1">
            <button className="p-1 hover:bg-muted rounded"><Edit className="w-3 h-3" /></button>
            <button className="p-1 hover:bg-destructive/10 rounded text-destructive"><Trash2 className="w-3 h-3" /></button>
          </div>
        </div>
      ))}
    </div>
  </div>
);

export const AdminManagementSlide = () => {
  return (
    <PresentationSlide
      title="Fleet Management"
      subtitle="Complete CRUD operations for Trucks, Drivers, Loads, and Users"
      icon={Settings}
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Trucks Management */}
        <DesktopMockup title="Trucks Management">
          <div className="p-4 bg-background">
            <div className="bg-card border-b border-border px-4 py-3 mb-4">
              <div className="flex items-center gap-2">
                <Truck className="w-4 h-4 text-primary" />
                <h3 className="font-semibold text-sm">Trucks Management</h3>
              </div>
            </div>
            <TablePreview
              title="All Trucks"
              columns={["Truck #", "Make", "Model", "Year", "Status"]}
              rows={[
                ["TRK-001", "Freightliner", "Cascadia", "2022", "Active"],
                ["TRK-002", "Peterbilt", "579", "2021", "Active"],
                ["TRK-003", "Kenworth", "T680", "2023", "Maintenance"],
              ]}
            />
          </div>
        </DesktopMockup>

        {/* Drivers Management */}
        <DesktopMockup title="Drivers Management">
          <div className="p-4 bg-background">
            <div className="bg-card border-b border-border px-4 py-3 mb-4">
              <div className="flex items-center gap-2">
                <Users className="w-4 h-4 text-primary" />
                <h3 className="font-semibold text-sm">Drivers Management</h3>
              </div>
            </div>
            <TablePreview
              title="All Drivers"
              columns={["Name", "License", "Phone", "Status"]}
              rows={[
                ["John Smith", "CDL-A", "(555) 123-4567", "Active"],
                ["Sarah Johnson", "CDL-A", "(555) 234-5678", "On Route"],
                ["Mike Davis", "CDL-B", "(555) 345-6789", "Off Duty"],
              ]}
            />
          </div>
        </DesktopMockup>

        {/* Loads Management */}
        <DesktopMockup title="Loads Management">
          <div className="p-4 bg-background">
            <div className="bg-card border-b border-border px-4 py-3 mb-4">
              <div className="flex items-center gap-2">
                <Package className="w-4 h-4 text-primary" />
                <h3 className="font-semibold text-sm">Loads Management</h3>
              </div>
            </div>
            <TablePreview
              title="All Loads"
              columns={["Load #", "Origin", "Destination", "Status"]}
              rows={[
                ["LD-2024-001", "Los Angeles, CA", "Phoenix, AZ", "In-Transit"],
                ["LD-2024-002", "Dallas, TX", "Houston, TX", "Delivered"],
                ["LD-2024-003", "Chicago, IL", "Detroit, MI", "Pending"],
              ]}
            />
          </div>
        </DesktopMockup>

        {/* Users Management */}
        <DesktopMockup title="Users Management">
          <div className="p-4 bg-background">
            <div className="bg-card border-b border-border px-4 py-3 mb-4">
              <div className="flex items-center gap-2">
                <Users className="w-4 h-4 text-primary" />
                <h3 className="font-semibold text-sm">Users Management</h3>
              </div>
            </div>
            <TablePreview
              title="All Users"
              columns={["Name", "Email", "Role", "Status"]}
              rows={[
                ["Admin User", "admin@fleet.com", "Super Admin", "Active"],
                ["Dispatcher 1", "dispatch@fleet.com", "Dispatcher", "Active"],
                ["Manager", "manager@fleet.com", "Fleet Manager", "Active"],
              ]}
            />
          </div>
        </DesktopMockup>
      </div>
    </PresentationSlide>
  );
};
