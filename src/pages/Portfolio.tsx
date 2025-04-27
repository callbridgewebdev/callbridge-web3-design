
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function Portfolio() {
  const projects = [
    {
      title: "DeFi Dashboard",
      category: "Web3",
      description: "A comprehensive dashboard for DeFi protocol management with real-time data integration.",
      image: "https://placehold.co/600x400",
      link: "#",
    },
    {
      title: "NFT Marketplace",
      category: "Blockchain",
      description: "Custom NFT marketplace with advanced filtering and bidding capabilities.",
      image: "https://placehold.co/600x400",
      link: "#",
    },
    {
      title: "Crypto Exchange",
      category: "Finance",
      description: "Modern cryptocurrency exchange platform with advanced trading features.",
      image: "https://placehold.co/600x400",
      link: "#",
    },
    {
      title: "DAO Platform",
      category: "Governance",
      description: "Decentralized autonomous organization platform with voting mechanisms.",
      image: "https://placehold.co/600x400",
      link: "#",
    },
    {
      title: "Web3 Social",
      category: "Social",
      description: "Decentralized social media platform with content monetization.",
      image: "https://placehold.co/600x400",
      link: "#",
    },
    {
      title: "DApp Interface",
      category: "Web3",
      description: "User interface for decentralized application with wallet integration.",
      image: "https://placehold.co/600x400",
      link: "#",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <Badge variant="outline" className="mb-4">Our Work</Badge>
            <h1 className="text-4xl font-bold mb-4">Featured Projects</h1>
            <p className="text-muted-foreground">
              Explore our portfolio of blockchain-powered web design projects that showcase
              our expertise in creating innovative digital experiences.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <Card key={index} className="web3-card overflow-hidden">
                <div className="aspect-video w-full overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform hover:scale-105"
                  />
                </div>
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <Badge>{project.category}</Badge>
                  </div>
                  <CardTitle className="text-xl">{project.title}</CardTitle>
                  <CardDescription>{project.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <Button variant="outline" className="w-full" asChild>
                    <a href={project.link}>
                      View Project <ArrowRight className="ml-2" />
                    </a>
                  </Button>
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
