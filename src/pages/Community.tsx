
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Users } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function Community() {
  const communities = [
    {
      platform: "Discord",
      members: "5,000+",
      description: "Join our active Discord community for real-time discussions",
      link: "#"
    },
    {
      platform: "Telegram",
      members: "10,000+",
      description: "Get instant updates and chat with the team",
      link: "#"
    },
    {
      platform: "Twitter",
      members: "25,000+",
      description: "Follow us for the latest news and announcements",
      link: "#"
    },
    {
      platform: "Medium",
      members: "2,000+",
      description: "Read our detailed articles and updates",
      link: "#"
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <Badge variant="outline" className="mb-4">Community</Badge>
            <h1 className="text-4xl font-bold mb-4">Join Our Community</h1>
            <p className="text-muted-foreground">
              Connect with other $CWD token holders and stay updated with the latest news and developments.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {communities.map((community, index) => (
              <Card key={index}>
                <CardHeader>
                  <div className="flex items-center gap-2">
                    <Users className="h-6 w-6 text-primary" />
                    <CardTitle>{community.platform}</CardTitle>
                  </div>
                  <CardDescription>{community.members} members</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground">{community.description}</p>
                  <Button asChild className="w-full">
                    <a href={community.link} target="_blank" rel="noopener noreferrer">
                      Join {community.platform}
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
