
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Events from "./pages/Events";
import Places from "./pages/Places";
import Stores from "./pages/Stores";
import Login from "./pages/Login";
import Profile from "./pages/Profile";
import Admin from "./pages/Admin";
import AdminPlaces from "./pages/AdminPlaces";
import AdminEvents from "./pages/AdminEvents";
import AdminStores from "./pages/AdminStores";
import AdminCategories from "./pages/AdminCategories";
import Permissao from "./pages/Permissao";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/eventos" element={<Events />} />
          <Route path="/lugares" element={<Places />} />
          <Route path="/lojas" element={<Stores />} />
          <Route path="/login" element={<Login />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/admin/lugares" element={<AdminPlaces />} />
          <Route path="/admin/eventos" element={<AdminEvents />} />
          <Route path="/admin/lojas" element={<AdminStores />} />
          <Route path="/admin/categorias" element={<AdminCategories />} />
          <Route path="/permissao" element={<Permissao />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
