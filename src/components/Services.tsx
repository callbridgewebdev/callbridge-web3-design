
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { AppWindow, Image, Smartphone, Server, Globe, BarChart4, TrendingUp, Headset } from "lucide-react";

const Services = () => {
  const services = [
    {
      title: "Web Interface Application",
      description: "We develop web applications customized to your business needs, ensuring a seamless user experience, better performance, and optimal functionality.",
      icon: <AppWindow className="h-8 w-8 text-web3-purple" />
    },
    {
      title: "Graphics Interface Design",
      description: "Using user-centric design principles, our skilled designers produce visually stunning user interfaces that provide better usability and overall satisfaction.",
      icon: <Image className="h-8 w-8 text-web3-purple" />
    },
    {
      title: "Mobile Responsive Interface",
      description: "By utilizing our responsive website interface for mobile devices, we deliver user-friendly experiences on iOS and Android devices that are optimized for multi-touch screens without the need for an app.",
      icon: <Smartphone className="h-8 w-8 text-web3-purple" />
    },
    {
      title: "Data Server & Domain Hosting",
      description: "To ensure your online security, we offer secure hosting and domain registration services that are both reliable and safe.",
      icon: <Server className="h-8 w-8 text-web3-purple" />
    },
    {
      title: "Digital Marketing Campaigns",
      description: "Our strategic digital marketing campaigns drive targeted traffic, increase brand awareness, accelerate your website, and increase conversions through SEO, social media, and other platforms.",
      icon: <BarChart4 className="h-8 w-8 text-web3-purple" />
    },
    {
      title: "Tech Support Consultancy",
      description: "Our technical expertise can help you develop a digital business strategy, streamline your operations and stay ahead of the curve with current industry trends.",
      icon: <Headset className="h-8 w-8 text-web3-purple" />
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
