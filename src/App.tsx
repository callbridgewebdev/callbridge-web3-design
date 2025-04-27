
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Portfolio from "./pages/Portfolio";
import FAQ from "./pages/FAQ";
import Pricing from "./pages/Pricing";
import Quote from "./pages/Quote";
import NotFound from "./pages/NotFound";
import Airdrop from "./pages/Airdrop";
import Presale from "./pages/Presale";
import Staking from "./pages/Staking";
import Swap from "./pages/Swap";
import Chart from "./pages/Chart";
import Documentation from "./pages/Documentation";
import Community from "./pages/Community";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/quote" element={<Quote />} />
          <Route path="/airdrop" element={<Airdrop />} />
          <Route path="/presale" element={<Presale />} />
          <Route path="/staking" element={<Staking />} />
          <Route path="/swap" element={<Swap />} />
          <Route path="/chart" element={<Chart />} />
          <Route path="/docs" element={<Documentation />} />
          <Route path="/community" element={<Community />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
