
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Gift, ArrowRight, Facebook, Twitter, Youtube, MessageCircle } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WalletConnect from "@/components/WalletConnect";

export default function Airdrop() {
  const socialTasks = [
    {
      platform: "Twitter",
      icon: Twitter,
      tasks: [
        "Follow @CallbridgeWD",
        "Like & Retweet pinned post",
        "Tag 3 friends"
      ],
      reward: 50
    },
    {
      platform: "Telegram",
      icon: MessageCircle,
      tasks: [
        "Join Telegram group",
        "Share announcement",
        "Stay active member"
      ],
      reward: 50
    },
    {
      platform: "Facebook",
      icon: Facebook,
      tasks: [
        "Like Facebook page",
        "Share latest post",
        "Comment with #Callbridge"
      ],
      reward: 25
    },
    {
      platform: "YouTube",
      icon: Youtube,
      tasks: [
        "Subscribe to channel",
        "Like latest video",
        "Comment on video"
      ],
      reward: 25
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <Badge variant="outline" className="mb-4">Airdrop</Badge>
            <h1 className="text-4xl font-bold mb-4">Claim Your $CWD Tokens</h1>
            <p className="text-muted-foreground">
              Complete social media tasks to earn free $CWD tokens. Join our community and be part of our growth journey.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto mb-8">
            {socialTasks.map((task, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                  <div className="flex items-center gap-2">
                    <task.icon className="h-6 w-6 text-primary" />
                    <CardTitle>{task.platform}</CardTitle>
                  </div>
                  <CardDescription>Earn {task.reward} $CWD</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <ul className="space-y-2">
                    {task.tasks.map((t, idx) => (
                      <li key={idx} className="flex items-center gap-2">
                        <div className="h-2 w-2 rounded-full bg-primary"></div>
                        <span className="text-sm">{t}</span>
                      </li>
                    ))}
                  </ul>
                  <Button className="w-full" variant="outline">
                    Complete Tasks
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          <Card className="max-w-xl mx-auto">
            <CardHeader>
              <div className="flex items-center gap-2">
                <Gift className="h-6 w-6 text-primary" />
                <CardTitle>Claim Tokens</CardTitle>
              </div>
              <CardDescription>Connect wallet to claim your earned tokens</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="bg-muted/50 p-4 rounded-lg">
                <div className="flex justify-between mb-2">
                  <span className="text-sm text-muted-foreground">Total Tasks Completed</span>
                  <span className="font-medium">0/12</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-muted-foreground">Tokens Available to Claim</span>
                  <span className="font-medium">0 $CWD</span>
                </div>
              </div>
              <WalletConnect />
            </CardContent>
          </Card>
        </div>
      </main>
      <Footer />
    </div>
  );
}
