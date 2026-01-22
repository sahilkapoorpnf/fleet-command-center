import { useState } from "react";
import { AdminHeader } from "@/components/admin/AdminHeader";
import { DataTable, StatusBadge, Column } from "@/components/admin/DataTable";
import { FormModal, FormField } from "@/components/admin/FormModal";
import { useToast } from "@/hooks/use-toast";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

interface Driver {
  id: string;
  name: string;
  email: string;
  phone: string;
  licenseNumber: string;
  assignedTruck: string;
  status: string;
}

const initialDrivers: Driver[] = [
  { id: "1", name: "John Smith", email: "john.smith@email.com", phone: "(555) 123-4567", licenseNumber: "DL-123456", assignedTruck: "TRK-001", status: "Active" },
  { id: "2", name: "Mike Johnson", email: "mike.j@email.com", phone: "(555) 234-5678", licenseNumber: "DL-234567", assignedTruck: "TRK-002", status: "Active" },
  { id: "3", name: "Sarah Davis", email: "sarah.d@email.com", phone: "(555) 345-6789", licenseNumber: "DL-345678", assignedTruck: "TRK-004", status: "On Leave" },
  { id: "4", name: "Tom Wilson", email: "tom.w@email.com", phone: "(555) 456-7890", licenseNumber: "DL-456789", assignedTruck: "TRK-003", status: "Active" },
  { id: "5", name: "James Brown", email: "james.b@email.com", phone: "(555) 567-8901", licenseNumber: "DL-567890", assignedTruck: "-", status: "Inactive" },
];

const columns: Column<Driver>[] = [
  {
    key: "name",
    label: "Driver",
    render: (item) => (
      <div className="flex items-center gap-3">
        <Avatar className="w-8 h-8">
          <AvatarFallback className="bg-primary/10 text-primary text-xs">
            {item.name.split(" ").map((n) => n[0]).join("")}
          </AvatarFallback>
        </Avatar>
        <div>
          <div className="font-medium">{item.name}</div>
          <div className="text-xs text-muted-foreground">{item.email}</div>
        </div>
      </div>
    ),
  },
  { key: "phone", label: "Phone" },
  { key: "licenseNumber", label: "License #" },
  { key: "assignedTruck", label: "Assigned Truck" },
  { key: "status", label: "Status", render: (item) => <StatusBadge status={item.status} /> },
];

const formFields: FormField[] = [
  { name: "name", label: "Full Name", type: "text", placeholder: "John Doe", required: true },
  { name: "email", label: "Email", type: "email", placeholder: "john@example.com", required: true },
  { name: "phone", label: "Phone", type: "tel", placeholder: "(555) 123-4567", required: true },
  { name: "licenseNumber", label: "License Number", type: "text", placeholder: "DL-XXXXXX", required: true },
  {
    name: "assignedTruck",
    label: "Assigned Truck",
    type: "select",
    options: [
      { value: "-", label: "Unassigned" },
      { value: "TRK-001", label: "TRK-001" },
      { value: "TRK-002", label: "TRK-002" },
      { value: "TRK-003", label: "TRK-003" },
      { value: "TRK-004", label: "TRK-004" },
    ],
  },
  {
    name: "status",
    label: "Status",
    type: "select",
    options: [
      { value: "Active", label: "Active" },
      { value: "Inactive", label: "Inactive" },
      { value: "On Leave", label: "On Leave" },
    ],
  },
];

export const DriversPage = () => {
  const [drivers, setDrivers] = useState(initialDrivers);
  const [modalOpen, setModalOpen] = useState(false);
  const [editingDriver, setEditingDriver] = useState<Driver | null>(null);
  const { toast } = useToast();

  const handleAdd = () => {
    setEditingDriver(null);
    setModalOpen(true);
  };

  const handleEdit = (driver: Driver) => {
    setEditingDriver(driver);
    setModalOpen(true);
  };

  const handleDelete = (driver: Driver) => {
    setDrivers(drivers.filter((d) => d.id !== driver.id));
    toast({ title: "Driver deleted", description: `${driver.name} has been removed.` });
  };

  const handleSubmit = (data: Record<string, string>) => {
    if (editingDriver) {
      setDrivers(drivers.map((d) => (d.id === editingDriver.id ? { ...d, ...data } : d)));
      toast({ title: "Driver updated", description: `${data.name} has been updated.` });
    } else {
      const newDriver = { ...data, id: String(Date.now()) } as Driver;
      setDrivers([...drivers, newDriver]);
      toast({ title: "Driver added", description: `${data.name} has been added.` });
    }
  };

  return (
    <div className="min-h-screen">
      <AdminHeader title="Drivers Management" />
      <div className="p-6">
        <DataTable
          title="All Drivers"
          data={drivers}
          columns={columns}
          onAdd={handleAdd}
          onEdit={handleEdit}
          onDelete={handleDelete}
          searchPlaceholder="Search drivers..."
        />
      </div>

      <FormModal
        open={modalOpen}
        onOpenChange={setModalOpen}
        title={editingDriver ? "Edit Driver" : "Add New Driver"}
        description={editingDriver ? "Update driver information" : "Enter driver details"}
        fields={formFields}
        onSubmit={handleSubmit}
        initialData={editingDriver || {}}
        submitLabel={editingDriver ? "Update" : "Add Driver"}
      />
    </div>
  );
};
