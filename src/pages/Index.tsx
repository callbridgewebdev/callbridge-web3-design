
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import TokenUtility from "@/components/TokenUtility";
import Roadmap from "@/components/Roadmap";
import Partners from "@/components/Partners";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main>
        <Hero />
        <Services />
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
