import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Index from "./pages/Index.tsx";
import WhyUs from "./pages/WhyUs.tsx";
import SafetyNets from "./pages/SafetyNets.tsx";
import BirdProtection from "./pages/BirdProtection.tsx";
import AllSportsNets from "./pages/AllSportsNets.tsx";
import Contact from "./pages/Contact.tsx";
import Gallery from "./pages/Gallery.tsx";
import FAQ from "./pages/FAQ.tsx";
import Blog from "./pages/Blog.tsx";
import Videos from "./pages/Videos.tsx";
import ServiceDetail from "./pages/ServiceDetail.tsx";
import NotFound from "./pages/NotFound.tsx";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/why-us" element={<WhyUs />} />
          <Route path="/safety-nets" element={<SafetyNets />} />
          <Route path="/safety-nets/:type" element={<ServiceDetail />} />
          <Route path="/bird-protection" element={<BirdProtection />} />
          <Route path="/bird-protection/:type" element={<ServiceDetail />} />
          <Route path="/sports-nets" element={<AllSportsNets />} />
          <Route path="/sports-nets/:type" element={<ServiceDetail />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/videos" element={<Videos />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
