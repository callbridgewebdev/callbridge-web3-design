
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Check, Package } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function Packages() {
  const packages = [
    {
      name: "Static Web Design",
      price: "₱1,250.00",
      description: "All the basics for businesses that are just getting started.",
      features: [
        "Premium Web Design (Up to 6 Pages)",
        "Bootstrap HTML5 + CSS / SASS design",
        "Mobile Responsive Website",
        "10GB Hosting Space",
        "25GB Monthly Bandwidth",
        "99% Server Uptime",
        "Domain Extension (.com or net)",
        "Free Web Server Hosting",
        "Free Web SSL Security & Protection",
        "24/7 Online Costumers Support",
        "1 Year Service Warranty & Validity",
      ],
      href: "/quote",
    },
    {
      name: "Dynamic Web Design",
      price: "₱2,500.00",
      description: "All the basics for businesses that are just getting started.",
      features: [
        "Premium Web Design (Up to 8 Pages)",
        "Bootstrap HTML5 + CSS / SASS design",
        "Laravel & CodeIgniter Framework",
        "Mobile Responsive Website",
        "20GB Hosting Space",
        "50GB Monthly Bandwidth",
        "99% Server Uptime",
        "Free Domain Extension (.com or .net)",
        "Free Web Server Hosting",
        "Free Web SSL Security & Protection",
        "24/7 Online Costumers Support",
        "1 Year Service Warranty & Validity",
      ],
      href: "/quote",
      popular: true,
    },
    {
      name: "Custom Web Design",
      price: "₱5,000.00",
      description: "Advanced features for pros who need more customization.",
      features: [
        "Premium Web Design (Up to 10 Pages)",
        "Bootstrap HTML5 + CSS / SASS design",
        "Laravel & CodeIgniter Framework",
        "Mobile Responsive Website",
        "Payment System Integration",
        "50GB Hosting Space",
        "100GB Monthly Bandwidth",
        "99% Server Uptime",
        "Free Domain Extension (.com or .net)",
        "Free Web Server Hosting",
        "Free Web SSL Security & Protection",
        "24/7 Online Costumers Support",
        "1 Year Service Warranty & Validity",
      ],
      href: "/quote",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <Badge variant="outline" className="mb-4">Packages</Badge>
            <h1 className="text-4xl font-bold mb-4">Monthly Service Packages</h1>
            <p className="text-muted-foreground">
              Choose the perfect package for your business needs. All plans include premium support and hosting.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {packages.map((pkg) => (
              <Card
                key={pkg.name}
                className={`web3-card relative ${
                  pkg.popular ? "border-primary shadow-lg scale-105" : ""
                }`}
              >
                {pkg.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                    <Badge className="bg-gradient-purple">Most Popular</Badge>
                  </div>
                )}
                <CardHeader>
                  <div className="mb-4">
                    <Package className="h-8 w-8 text-web3-purple" />
                  </div>
                  <CardTitle>{pkg.name}</CardTitle>
                  <div className="mt-4">
                    <span className="text-3xl font-bold">{pkg.price}</span>
                    <span className="text-muted-foreground"> /month</span>
                  </div>
                  <p className="text-sm text-muted-foreground mt-2">{pkg.description}</p>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <ul className="space-y-2">
                      {pkg.features.map((feature) => (
                        <li key={feature} className="flex items-start">
                          <Check className="h-4 w-4 text-primary mr-2 mt-1" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button
                    className={`w-full ${pkg.popular ? "bg-gradient-purple" : ""}`}
                    asChild
                  >
                    <Link to={pkg.href}>Get Started</Link>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
