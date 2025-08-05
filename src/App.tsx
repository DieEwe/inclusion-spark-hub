import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import TemplateAIndex from "./pages/TemplateAIndex";
import TemplateB from "./pages/TemplateB";
import TemplateC from "./pages/TemplateC";
import Schnack1 from "./pages/Schnack1";
import Schnack2 from "./pages/Schnack2";
import Schnack3 from "./pages/Schnack3";
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
          <Route path="/template-a" element={<TemplateAIndex />} />
          <Route path="/template-a/schnack-1" element={<Schnack1 />} />
          <Route path="/template-a/schnack-2" element={<Schnack2 />} />
          <Route path="/template-a/schnack-3" element={<Schnack3 />} />
          <Route path="/template-b" element={<TemplateB />} />
          <Route path="/template-c" element={<TemplateC />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
