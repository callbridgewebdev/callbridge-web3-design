
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Gift, ArrowRight } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function Airdrop() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <Badge variant="outline" className="mb-4">Airdrop</Badge>
            <h1 className="text-4xl font-bold mb-4">Claim Your $CWD Tokens</h1>
            <p className="text-muted-foreground">
              Join our community and claim your free $CWD tokens. Complete tasks to earn more rewards and participate in our ecosystem growth.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <Card>
              <CardHeader>
                <div className="flex items-center gap-2">
                  <Gift className="h-6 w-6 text-primary" />
                  <CardTitle>Basic Airdrop</CardTitle>
                </div>
                <CardDescription>Complete basic tasks to earn tokens</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
                    <div className="h-2 w-2 rounded-full bg-primary"></div>
                    <span>Follow us on Twitter</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="h-2 w-2 rounded-full bg-primary"></div>
                    <span>Join our Telegram group</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="h-2 w-2 rounded-full bg-primary"></div>
                    <span>Share announcement post</span>
                  </li>
                </ul>
                <Button className="w-full">
                  Claim 100 $CWD
                  <ArrowRight className="ml-2" />
                </Button>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="flex items-center gap-2">
                  <Gift className="h-6 w-6 text-primary" />
                  <CardTitle>Premium Airdrop</CardTitle>
                </div>
                <CardDescription>Engage more to earn bonus tokens</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
                    <div className="h-2 w-2 rounded-full bg-primary"></div>
                    <span>Create content about us</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="h-2 w-2 rounded-full bg-primary"></div>
                    <span>Refer 5 friends</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="h-2 w-2 rounded-full bg-primary"></div>
                    <span>Hold tokens for 30 days</span>
                  </li>
                </ul>
                <Button className="w-full">
                  Claim 500 $CWD
                  <ArrowRight className="ml-2" />
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
