
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import TokenUtility from "@/components/TokenUtility";
import Roadmap from "@/components/Roadmap";
import Partners from "@/components/Partners";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const Index = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("services");

  const handleTabChange = (value: string) => {
    setActiveTab(value);
    if (value === "packages") {
      navigate("/packages");
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main>
        <Hero />
        <div className="container mx-auto px-4 py-8 text-center">
          <Tabs value={activeTab} onValueChange={handleTabChange} className="w-full justify-center">
            <TabsList className="mb-8">
              <TabsTrigger value="services">Services</TabsTrigger>
              <TabsTrigger value="packages">Packages</TabsTrigger>
            </TabsList>
            <TabsContent value="services">
              <Services />
            </TabsContent>
          </Tabs>
        </div>
        <TokenUtility />
        <Roadmap />
        <Partners />
        <CTA />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
