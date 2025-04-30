
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Check, Code, Shield, Cpu, Layers, Diamond } from "lucide-react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function Pricing() {
  const plans = [
    {
      name: "Web3 Starter",
      description: "Perfect for simple blockchain projects",
      price: "4,999",
      features: [
        "Custom dApp Design",
        "Web3 Wallet Integration",
        "Basic Smart Contract Setup",
        "Token Dashboard",
        "5 Content Pages",
        "3 Months Support",
      ],
      discount: "5% discount with $CWD tokens",
      href: "/quote",
      icon: <Code className="h-10 w-10 text-web3-purple" />,
    },
    {
      name: "DeFi Pro",
      description: "Ideal for emerging DeFi projects",
      price: "9,999",
      features: [
        "Everything in Starter",
        "DEX/Swap Integration",
        "Advanced Smart Contracts",
        "Staking Functionality",
        "Token Analytics Dashboard",
        "6 Months Support",
        "Multi-chain Compatibility",
      ],
      discount: "10% discount with $CWD tokens",
      href: "/quote",
      popular: true,
      icon: <Cpu className="h-10 w-10 text-web3-purple" />,
    },
    {
      name: "Enterprise Web3",
      description: "Full-scale blockchain ecosystem",
      price: "19,999",
      features: [
        "Everything in DeFi Pro",
        "Custom Token Creation",
        "DAO Governance System",
        "NFT Marketplace",
        "Cross-chain Bridging",
        "12 Months Support",
        "Priority Development",
      ],
      discount: "15% discount with $CWD tokens",
      href: "/quote",
      icon: <Diamond className="h-10 w-10 text-web3-purple" />,
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <Badge variant="outline" className="mb-4">Web3 Solutions</Badge>
            <h1 className="text-4xl font-bold mb-4">Web3 Development Pricing</h1>
            <p className="text-muted-foreground">
              Blockchain-powered solutions with exclusive discounts for $CWD token holders.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {plans.map((plan) => (
              <Card
                key={plan.name}
                className={`web3-card relative ${
                  plan.popular ? "border-primary shadow-lg scale-105" : ""
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                    <Badge className="bg-gradient-purple">Most Popular</Badge>
                  </div>
                )}
                <CardHeader>
                  <div className="mb-4">
                    {plan.icon}
                  </div>
                  <CardTitle>{plan.name}</CardTitle>
                  <CardDescription>{plan.description}</CardDescription>
                  <div className="mt-4">
                    <span className="text-4xl font-bold">${plan.price}</span>
                    <span className="text-muted-foreground"> /project</span>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <ul className="space-y-2">
                      {plan.features.map((feature) => (
                        <li key={feature} className="flex items-center">
                          <Check className="h-4 w-4 text-primary mr-2" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <div className="pt-4">
                      <p className="text-sm text-primary mb-4">{plan.discount}</p>
                      <Button
                        className={`w-full ${plan.popular ? "bg-gradient-purple" : ""}`}
                        asChild
                      >
                        <Link to={plan.href}>Get Started</Link>
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
