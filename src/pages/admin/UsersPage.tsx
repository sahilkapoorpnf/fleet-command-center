import { useState } from "react";
import { AdminHeader } from "@/components/admin/AdminHeader";
import { DataTable, StatusBadge, Column } from "@/components/admin/DataTable";
import { FormModal, FormField } from "@/components/admin/FormModal";
import { useToast } from "@/hooks/use-toast";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";

interface User {
  id: string;
  name: string;
  email: string;
  role: string;
  lastLogin: string;
  status: string;
}

const roleColors: Record<string, string> = {
  "Super Admin": "bg-destructive/10 text-destructive border-destructive/20",
  "Fleet Manager": "bg-warning/10 text-warning border-warning/20",
  Dispatcher: "bg-primary/10 text-primary border-primary/20",
  Driver: "bg-success/10 text-success border-success/20",
};

const initialUsers: User[] = [
  { id: "1", name: "Admin User", email: "admin@bitdecentro.com", role: "Super Admin", lastLogin: "2024-01-15 09:30 AM", status: "Active" },
  { id: "2", name: "Fleet Manager", email: "fleet@bitdecentro.com", role: "Fleet Manager", lastLogin: "2024-01-15 08:45 AM", status: "Active" },
  { id: "3", name: "Dispatch Lead", email: "dispatch@bitdecentro.com", role: "Dispatcher", lastLogin: "2024-01-14 04:20 PM", status: "Active" },
  { id: "4", name: "John Smith", email: "john.smith@email.com", role: "Driver", lastLogin: "2024-01-15 07:00 AM", status: "Active" },
  { id: "5", name: "Inactive User", email: "inactive@email.com", role: "Dispatcher", lastLogin: "2024-01-01 10:00 AM", status: "Inactive" },
];

const columns: Column<User>[] = [
  {
    key: "name",
    label: "User",
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
  {
    key: "role",
    label: "Role",
    render: (item) => (
      <Badge variant="outline" className={roleColors[item.role] || ""}>
        {item.role}
      </Badge>
    ),
  },
  { key: "lastLogin", label: "Last Login" },
  { key: "status", label: "Status", render: (item) => <StatusBadge status={item.status} /> },
];

const formFields: FormField[] = [
  { name: "name", label: "Full Name", type: "text", placeholder: "John Doe", required: true },
  { name: "email", label: "Email", type: "email", placeholder: "john@example.com", required: true },
  {
    name: "role",
    label: "Role",
    type: "select",
    options: [
      { value: "Super Admin", label: "Super Admin" },
      { value: "Fleet Manager", label: "Fleet Manager" },
      { value: "Dispatcher", label: "Dispatcher" },
      { value: "Driver", label: "Driver" },
    ],
  },
  {
    name: "status",
    label: "Status",
    type: "select",
    options: [
      { value: "Active", label: "Active" },
      { value: "Inactive", label: "Inactive" },
    ],
  },
];

export const UsersPage = () => {
  const [users, setUsers] = useState(initialUsers);
  const [modalOpen, setModalOpen] = useState(false);
  const [editingUser, setEditingUser] = useState<User | null>(null);
  const { toast } = useToast();

  const handleAdd = () => {
    setEditingUser(null);
    setModalOpen(true);
  };

  const handleEdit = (user: User) => {
    setEditingUser(user);
    setModalOpen(true);
  };

  const handleDelete = (user: User) => {
    setUsers(users.filter((u) => u.id !== user.id));
    toast({ title: "User deleted", description: `${user.name} has been removed.` });
  };

  const handleSubmit = (data: Record<string, string>) => {
    if (editingUser) {
      setUsers(users.map((u) => (u.id === editingUser.id ? { ...u, ...data } : u)));
      toast({ title: "User updated", description: `${data.name} has been updated.` });
    } else {
      const newUser = { ...data, id: String(Date.now()), lastLogin: "Never" } as User;
      setUsers([...users, newUser]);
      toast({ title: "User added", description: `${data.name} has been added.` });
    }
  };

  return (
    <div className="min-h-screen">
      <AdminHeader title="Users & Roles Management" />
      <div className="p-6">
        <DataTable
          title="All Users"
          data={users}
          columns={columns}
          onAdd={handleAdd}
          onEdit={handleEdit}
          onDelete={handleDelete}
          searchPlaceholder="Search users..."
        />
      </div>

      <FormModal
        open={modalOpen}
        onOpenChange={setModalOpen}
        title={editingUser ? "Edit User" : "Add New User"}
        description={editingUser ? "Update user information" : "Create a new user account"}
        fields={formFields}
        onSubmit={handleSubmit}
        initialData={editingUser || {}}
        submitLabel={editingUser ? "Update" : "Add User"}
      />
    </div>
  );
};
