
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { History, Target, Users, Award } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function About() {
  const features = [
    {
      title: "Our History",
      description: "Founded in 2024, Callbridge has been at the forefront of blockchain-powered web design services.",
      icon: History,
    },
    {
      title: "Our Mission",
      description: "To revolutionize web design through blockchain technology and create innovative digital experiences.",
      icon: Target,
    },
    {
      title: "Our Team",
      description: "A diverse team of designers, developers, and blockchain experts working together to deliver excellence.",
      icon: Users,
    },
    {
      title: "Our Achievements",
      description: "Recognized for innovative blockchain integration in web design services across multiple industries.",
      icon: Award,
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <Badge variant="outline" className="mb-4">About Us</Badge>
            <h1 className="text-4xl font-bold mb-4">Building the Future of Web Design</h1>
            <p className="text-muted-foreground">
              Callbridge combines cutting-edge web design with blockchain technology to create
              innovative digital experiences powered by our native $CWD token.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
            {features.map((feature, index) => (
              <Card key={index} className="web3-card">
                <CardHeader>
                  <div className="flex items-center gap-2">
                    <feature.icon className="h-6 w-6 text-primary" />
                    <CardTitle>{feature.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">
                    {feature.description}
                  </CardDescription>
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
