
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Timer, ArrowDownToLine } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WalletConnect from "@/components/WalletConnect";

export default function Presale() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <Badge variant="outline" className="mb-4">Presale</Badge>
            <h1 className="text-4xl font-bold mb-4">$CWD Token Presale</h1>
            <p className="text-muted-foreground mb-6">
              Join our presale to get $CWD tokens at the best possible price. Early investors receive special bonuses and benefits.
            </p>
            <div className="inline-flex items-center gap-2 text-sm bg-muted/50 px-4 py-2 rounded-full">
              <Timer className="h-4 w-4 text-primary" />
              <span>Phase 1 ends in: 14d 22h 45m</span>
            </div>
          </div>

          <Card className="max-w-2xl mx-auto">
            <CardHeader>
              <div className="flex items-center gap-2">
                <ArrowDownToLine className="h-6 w-6 text-primary" />
                <CardTitle>Phase 1 Presale</CardTitle>
              </div>
              <CardDescription>15% bonus for early investors</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span>Progress</span>
                  <span>65.5%</span>
                </div>
                <Progress value={65.5} className="h-2" />
                <p className="text-xs text-muted-foreground text-right">324.5 BNB / 500 BNB</p>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="bg-muted/50 p-4 rounded-lg">
                  <p className="text-sm text-muted-foreground">Price</p>
                  <p className="font-medium">1 BNB = 10,000 $CWD</p>
                  <p className="text-xs text-muted-foreground">≈ $0.025 per $CWD</p>
                </div>
                <div className="bg-muted/50 p-4 rounded-lg">
                  <p className="text-sm text-muted-foreground">Your Purchase</p>
                  <p className="font-medium">0 BNB</p>
                  <p className="text-xs text-muted-foreground">Min: 0.1 BNB</p>
                </div>
              </div>

              <div className="space-y-4 bg-muted/30 p-4 rounded-lg">
                <div className="flex justify-between text-sm">
                  <span>Listing Price</span>
                  <span>$0.05</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span>Presale Price</span>
                  <span>$0.025</span>
                </div>
                <div className="flex justify-between text-sm font-medium">
                  <span>Your Profit at Launch</span>
                  <span className="text-green-500">+100%</span>
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
