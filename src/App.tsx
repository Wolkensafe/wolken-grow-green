import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import ITSolutions from "./pages/services/ITSolutions";
import CyberSecurity from "./pages/services/CyberSecurity";
import DigitalMarketing from "./pages/services/DigitalMarketing";
import ContentCopywriting from "./pages/services/ContentCopywriting";
import ProductPhotography from "./pages/services/ProductPhotography";
import FinancialServices from "./pages/services/FinancialServices";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/services/it-solutions-and-consulting" element={<ITSolutions />} />
          <Route path="/services/cyber-security" element={<CyberSecurity />} />
          <Route path="/services/digital-marketing-and-seo" element={<DigitalMarketing />} />
          <Route path="/services/content-and-copywriting" element={<ContentCopywriting />} />
          <Route path="/services/product-photography" element={<ProductPhotography />} />
          <Route path="/services/financial-services" element={<FinancialServices />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
