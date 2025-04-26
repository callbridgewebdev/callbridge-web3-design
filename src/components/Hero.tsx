
import { Button } from "@/components/ui/button";
import { ArrowRight, MessageSquare } from "lucide-react";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="relative pt-24 pb-16 md:pt-32 md:pb-24 overflow-hidden hexagon-bg">
      <div className="absolute inset-0 bg-gradient-radial opacity-60"></div>
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-web3-purple to-web3-blue"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="lg:w-1/2 text-center lg:text-left">
            <div className="inline-block rounded-full bg-primary/10 px-3 py-1 text-sm font-medium text-primary mb-6">
              Blockchain-Powered Web Design
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Web Design for the <span className="text-gradient">Decentralized</span> Future
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-8">
              Callbridge combines stunning web design with blockchain technology, 
              enabling payments in $CWD tokens on the Binance Smart Chain.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button className="wallet-button text-lg px-8 py-6" asChild>
                <Link to="/quote">
                  Get a Free Quote <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button variant="outline" size="lg" className="border-primary/20 hover:bg-primary/5" asChild>
                <Link to="/contact" className="flex items-center">
                  <MessageSquare className="mr-2 h-5 w-5" />
                  Talk to Us
                </Link>
              </Button>
            </div>
          </div>
          
          <div className="lg:w-1/2 relative">
            <div className="relative z-10 bg-white dark:bg-web3-dark rounded-xl shadow-xl border border-gray-100 dark:border-gray-800 p-4">
              <div className="rounded-lg overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1498050108023-c5249f4df085" 
                  alt="Web Design Showcase" 
                  className="w-full h-auto rounded-lg object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-gradient-purple rounded-xl p-4 shadow-lg">
                <div className="flex items-center gap-2">
                  <div className="h-8 w-8 rounded-full bg-white flex items-center justify-center">
                    <span className="font-bold text-web3-purple">$</span>
                  </div>
                  <div>
                    <p className="text-white font-medium">$CWD Token</p>
                    <p className="text-white/80 text-xs">BSC Chain</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="absolute -z-10 -top-8 -left-8 w-full h-full rounded-xl bg-web3-blue/30 animate-float"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
