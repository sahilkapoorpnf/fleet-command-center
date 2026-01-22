import { useState } from "react";
import { AdminHeader } from "@/components/admin/AdminHeader";
import { DataTable, StatusBadge, Column } from "@/components/admin/DataTable";
import { FormModal, FormField } from "@/components/admin/FormModal";
import { useToast } from "@/hooks/use-toast";
import { Badge } from "@/components/ui/badge";

interface Load {
  id: string;
  loadNumber: string;
  origin: string;
  destination: string;
  weight: string;
  rate: string;
  driver: string;
  status: string;
}

const initialLoads: Load[] = [
  { id: "1", loadNumber: "LD-2024-001", origin: "Los Angeles, CA", destination: "Phoenix, AZ", weight: "42,000 lbs", rate: "$2,500", driver: "John Smith", status: "In-Transit" },
  { id: "2", loadNumber: "LD-2024-002", origin: "Dallas, TX", destination: "Houston, TX", weight: "35,000 lbs", rate: "$1,800", driver: "Mike Johnson", status: "Delivered" },
  { id: "3", loadNumber: "LD-2024-003", origin: "Chicago, IL", destination: "Detroit, MI", weight: "28,000 lbs", rate: "$1,500", driver: "Sarah Davis", status: "Pending" },
  { id: "4", loadNumber: "LD-2024-004", origin: "Seattle, WA", destination: "Portland, OR", weight: "40,000 lbs", rate: "$1,200", driver: "Tom Wilson", status: "In-Transit" },
  { id: "5", loadNumber: "LD-2024-005", origin: "Miami, FL", destination: "Atlanta, GA", weight: "38,000 lbs", rate: "$2,100", driver: "James Brown", status: "Completed" },
];

const columns: Column<Load>[] = [
  {
    key: "loadNumber",
    label: "Load #",
    render: (item) => (
      <span className="font-mono font-medium text-primary">{item.loadNumber}</span>
    ),
  },
  { key: "origin", label: "Origin" },
  { key: "destination", label: "Destination" },
  {
    key: "weight",
    label: "Weight",
    render: (item) => <Badge variant="secondary">{item.weight}</Badge>,
  },
  {
    key: "rate",
    label: "Rate",
    render: (item) => <span className="font-semibold text-success">{item.rate}</span>,
  },
  { key: "driver", label: "Driver" },
  { key: "status", label: "Status", render: (item) => <StatusBadge status={item.status} /> },
];

const formFields: FormField[] = [
  { name: "loadNumber", label: "Load Number", type: "text", placeholder: "LD-2024-XXX", required: true },
  { name: "origin", label: "Origin", type: "text", placeholder: "City, State", required: true },
  { name: "destination", label: "Destination", type: "text", placeholder: "City, State", required: true },
  { name: "weight", label: "Weight", type: "text", placeholder: "40,000 lbs", required: true },
  { name: "rate", label: "Rate", type: "text", placeholder: "$2,000", required: true },
  {
    name: "driver",
    label: "Assigned Driver",
    type: "select",
    options: [
      { value: "Unassigned", label: "Unassigned" },
      { value: "John Smith", label: "John Smith" },
      { value: "Mike Johnson", label: "Mike Johnson" },
      { value: "Sarah Davis", label: "Sarah Davis" },
      { value: "Tom Wilson", label: "Tom Wilson" },
    ],
  },
  {
    name: "status",
    label: "Status",
    type: "select",
    options: [
      { value: "Pending", label: "Pending" },
      { value: "In-Transit", label: "In-Transit" },
      { value: "Delivered", label: "Delivered" },
      { value: "Completed", label: "Completed" },
      { value: "Cancelled", label: "Cancelled" },
    ],
  },
];

export const LoadsPage = () => {
  const [loads, setLoads] = useState(initialLoads);
  const [modalOpen, setModalOpen] = useState(false);
  const [editingLoad, setEditingLoad] = useState<Load | null>(null);
  const { toast } = useToast();

  const handleAdd = () => {
    setEditingLoad(null);
    setModalOpen(true);
  };

  const handleEdit = (load: Load) => {
    setEditingLoad(load);
    setModalOpen(true);
  };

  const handleDelete = (load: Load) => {
    setLoads(loads.filter((l) => l.id !== load.id));
    toast({ title: "Load deleted", description: `${load.loadNumber} has been removed.` });
  };

  const handleSubmit = (data: Record<string, string>) => {
    if (editingLoad) {
      setLoads(loads.map((l) => (l.id === editingLoad.id ? { ...l, ...data } : l)));
      toast({ title: "Load updated", description: `${data.loadNumber} has been updated.` });
    } else {
      const newLoad = { ...data, id: String(Date.now()) } as Load;
      setLoads([...loads, newLoad]);
      toast({ title: "Load added", description: `${data.loadNumber} has been added.` });
    }
  };

  return (
    <div className="min-h-screen">
      <AdminHeader title="Loads Management" />
      <div className="p-6">
        <DataTable
          title="All Loads"
          data={loads}
          columns={columns}
          onAdd={handleAdd}
          onEdit={handleEdit}
          onDelete={handleDelete}
          searchPlaceholder="Search loads..."
        />
      </div>

      <FormModal
        open={modalOpen}
        onOpenChange={setModalOpen}
        title={editingLoad ? "Edit Load" : "Add New Load"}
        description={editingLoad ? "Update load information" : "Enter load details"}
        fields={formFields}
        onSubmit={handleSubmit}
        initialData={editingLoad || {}}
        submitLabel={editingLoad ? "Update" : "Add Load"}
      />
    </div>
  );
};
