
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { History, Target, Users, Award, Github, Linkedin, Twitter } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

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

  const teamMembers = [
    {
      name: "Patrick John Peguit",
      role: "Head, Web Designer",
      bio: "Expertise in web design and development customization to improve website speed and boost visibility on Google Search Engine.",
      image: "/placeholder.svg",
      social: {
        twitter: "#",
        linkedin: "#",
        github: "#",
      }
    },
    {
      name: "Juli Ann Estorgio",
      role: "Web Designer / Content Writer",
      bio: "Specialized in creating high-quality content and improving grammar to make your website branding more effective.",
      image: "/placeholder.svg",
      social: {
        twitter: "#",
        linkedin: "#",
        github: "#",
      }
    },
    {
      name: "Neo Joseph Obendencio",
      role: "Social Media Expert",
      bio: "Experts in social media marketing through advertising and promotions to attract larger audiences and target sales customers.",
      image: "/placeholder.svg",
      social: {
        twitter: "#",
        linkedin: "#",
        github: "#",
      }
    },
    {
      name: "Maristel Bacla-an",
      role: "Graphics Designer",
      bio: "Specialized in enhancing the visual appeal of your website and optimizing its front-end layout, we can attract more customers.",
      image: "/placeholder.svg",
      social: {
        twitter: "#",
        linkedin: "#",
        github: "#",
      }
    }
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

          {/* Team Section */}
          <div className="my-20">
            <div className="text-center max-w-2xl mx-auto mb-12">
              <Badge variant="outline" className="mb-4">Our Team</Badge>
              <h2 className="text-3xl font-bold mb-4">Meet the Experts</h2>
              <p className="text-muted-foreground">
                Our talented team brings together expertise in blockchain technology, web development, and creative design.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {teamMembers.map((member, index) => (
                <Card key={index} className="overflow-hidden">
                  <div className="p-6 text-center">
                    <Avatar className="h-24 w-24 mx-auto mb-4">
                      <AvatarImage src={member.image} alt={member.name} />
                      <AvatarFallback>{member.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                    </Avatar>
                    <CardTitle className="text-xl mb-1">{member.name}</CardTitle>
                    <CardDescription className="mb-3">{member.role}</CardDescription>
                    <p className="text-sm text-muted-foreground mb-4">{member.bio}</p>
                    <div className="flex justify-center space-x-2">
                      <a href={member.social.twitter} className="text-muted-foreground hover:text-primary transition-colors">
                        <Twitter className="h-5 w-5" />
                      </a>
                      <a href={member.social.linkedin} className="text-muted-foreground hover:text-primary transition-colors">
                        <Linkedin className="h-5 w-5" />
                      </a>
                      <a href={member.social.github} className="text-muted-foreground hover:text-primary transition-colors">
                        <Github className="h-5 w-5" />
                      </a>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
