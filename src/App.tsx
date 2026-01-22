import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import { AdminLayout } from "./layouts/AdminLayout";
import { Dashboard } from "./pages/admin/Dashboard";
import { TrucksPage } from "./pages/admin/TrucksPage";
import { DriversPage } from "./pages/admin/DriversPage";
import { LoadsPage } from "./pages/admin/LoadsPage";
import { UsersPage } from "./pages/admin/UsersPage";
import { PlaceholderPage } from "./pages/admin/PlaceholderPage";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          
          {/* Admin Routes */}
          <Route path="/admin" element={<AdminLayout />}>
            <Route index element={<Dashboard />} />
            <Route path="trucks" element={<TrucksPage />} />
            <Route path="drivers" element={<DriversPage />} />
            <Route path="loads" element={<LoadsPage />} />
            <Route path="routes" element={<PlaceholderPage title="Routes Management" />} />
            <Route path="reports" element={<PlaceholderPage title="Reports" />} />
            <Route path="documents" element={<PlaceholderPage title="Documents" />} />
            <Route path="users" element={<UsersPage />} />
            <Route path="settings" element={<PlaceholderPage title="Settings" />} />
          </Route>

          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
