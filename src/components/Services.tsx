
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Code, Layout, PenTool, Shuffle, BarChart4, Wallet } from "lucide-react";

const Services = () => {
  const services = [
    {
      title: "Web Design",
      description: "Professional, responsive designs that represent your brand perfectly.",
      icon: <Layout className="h-8 w-8 text-web3-purple" />
    },
    {
      title: "Development",
      description: "Clean code and powerful functionality, built with the latest technologies.",
      icon: <Code className="h-8 w-8 text-web3-purple" />
    },
    {
      title: "UI/UX Design",
      description: "User-centered design that creates seamless, intuitive experiences.",
      icon: <PenTool className="h-8 w-8 text-web3-purple" />
    },
    {
      title: "Web3 Integration",
      description: "Connect your site to blockchain technology and decentralized applications.",
      icon: <Shuffle className="h-8 w-8 text-web3-purple" />
    },
    {
      title: "Tokenized Payments",
      description: "Accept payments in $CWD tokens with lower fees and faster processing.",
      icon: <Wallet className="h-8 w-8 text-web3-purple" />
    },
    {
      title: "Analytics",
      description: "Comprehensive reporting and insights to optimize performance.",
      icon: <BarChart4 className="h-8 w-8 text-web3-purple" />
    }
  ];

  return (
    <section className="py-20 bg-muted/50">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Services</h2>
          <p className="text-muted-foreground">
            Comprehensive web design and development services, enhanced with blockchain technology.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="web3-card hover:translate-y-[-5px] transition-all duration-300">
              <CardHeader>
                <div className="mb-4">{service.icon}</div>
                <CardTitle>{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">{service.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
