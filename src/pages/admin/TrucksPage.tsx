import { useState } from "react";
import { AdminHeader } from "@/components/admin/AdminHeader";
import { DataTable, StatusBadge, Column } from "@/components/admin/DataTable";
import { FormModal, FormField } from "@/components/admin/FormModal";
import { useToast } from "@/hooks/use-toast";

interface Truck {
  id: string;
  truckNumber: string;
  make: string;
  model: string;
  year: string;
  licensePlate: string;
  status: string;
}

const initialTrucks: Truck[] = [
  { id: "1", truckNumber: "TRK-001", make: "Freightliner", model: "Cascadia", year: "2022", licensePlate: "ABC-1234", status: "Active" },
  { id: "2", truckNumber: "TRK-002", make: "Peterbilt", model: "579", year: "2021", licensePlate: "XYZ-5678", status: "Active" },
  { id: "3", truckNumber: "TRK-003", make: "Kenworth", model: "T680", year: "2023", licensePlate: "DEF-9012", status: "Maintenance" },
  { id: "4", truckNumber: "TRK-004", make: "Volvo", model: "VNL 860", year: "2022", licensePlate: "GHI-3456", status: "Active" },
  { id: "5", truckNumber: "TRK-005", make: "International", model: "LT", year: "2020", licensePlate: "JKL-7890", status: "Inactive" },
];

const columns: Column<Truck>[] = [
  { key: "truckNumber", label: "Truck #" },
  { key: "make", label: "Make" },
  { key: "model", label: "Model" },
  { key: "year", label: "Year" },
  { key: "licensePlate", label: "License Plate" },
  { key: "status", label: "Status", render: (item) => <StatusBadge status={item.status} /> },
];

const formFields: FormField[] = [
  { name: "truckNumber", label: "Truck Number", type: "text", placeholder: "TRK-XXX", required: true },
  { name: "make", label: "Make", type: "text", placeholder: "e.g., Freightliner", required: true },
  { name: "model", label: "Model", type: "text", placeholder: "e.g., Cascadia", required: true },
  { name: "year", label: "Year", type: "number", placeholder: "2024", required: true },
  { name: "licensePlate", label: "License Plate", type: "text", placeholder: "ABC-1234", required: true },
  {
    name: "status",
    label: "Status",
    type: "select",
    options: [
      { value: "Active", label: "Active" },
      { value: "Inactive", label: "Inactive" },
      { value: "Maintenance", label: "Maintenance" },
    ],
  },
];

export const TrucksPage = () => {
  const [trucks, setTrucks] = useState(initialTrucks);
  const [modalOpen, setModalOpen] = useState(false);
  const [editingTruck, setEditingTruck] = useState<Truck | null>(null);
  const { toast } = useToast();

  const handleAdd = () => {
    setEditingTruck(null);
    setModalOpen(true);
  };

  const handleEdit = (truck: Truck) => {
    setEditingTruck(truck);
    setModalOpen(true);
  };

  const handleDelete = (truck: Truck) => {
    setTrucks(trucks.filter((t) => t.id !== truck.id));
    toast({ title: "Truck deleted", description: `${truck.truckNumber} has been removed.` });
  };

  const handleSubmit = (data: Record<string, string>) => {
    if (editingTruck) {
      setTrucks(trucks.map((t) => (t.id === editingTruck.id ? { ...t, ...data } : t)));
      toast({ title: "Truck updated", description: `${data.truckNumber} has been updated.` });
    } else {
      const newTruck = { ...data, id: String(Date.now()) } as Truck;
      setTrucks([...trucks, newTruck]);
      toast({ title: "Truck added", description: `${data.truckNumber} has been added.` });
    }
  };

  return (
    <div className="min-h-screen">
      <AdminHeader title="Trucks Management" />
      <div className="p-6">
        <DataTable
          title="All Trucks"
          data={trucks}
          columns={columns}
          onAdd={handleAdd}
          onEdit={handleEdit}
          onDelete={handleDelete}
          searchPlaceholder="Search trucks..."
        />
      </div>

      <FormModal
        open={modalOpen}
        onOpenChange={setModalOpen}
        title={editingTruck ? "Edit Truck" : "Add New Truck"}
        description={editingTruck ? "Update truck information" : "Enter truck details"}
        fields={formFields}
        onSubmit={handleSubmit}
        initialData={editingTruck || {}}
        submitLabel={editingTruck ? "Update" : "Add Truck"}
      />
    </div>
  );
};
