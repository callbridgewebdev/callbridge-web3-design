
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { ArrowDownToLine } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function Presale() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <Badge variant="outline" className="mb-4">Presale</Badge>
            <h1 className="text-4xl font-bold mb-4">$CWD Token Presale</h1>
            <p className="text-muted-foreground">
              Join our presale to get $CWD tokens at the best possible price. Early investors receive special bonuses and benefits.
            </p>
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
              </div>

              <div className="grid grid-cols-2 gap-4 text-sm">
                <div>
                  <p className="text-muted-foreground">Raised</p>
                  <p className="font-medium">324.5 BNB</p>
                </div>
                <div>
                  <p className="text-muted-foreground">Target</p>
                  <p className="font-medium">500 BNB</p>
                </div>
                <div>
                  <p className="text-muted-foreground">Price</p>
                  <p className="font-medium">1 BNB = 10,000 $CWD</p>
                </div>
                <div>
                  <p className="text-muted-foreground">Min Purchase</p>
                  <p className="font-medium">0.1 BNB</p>
                </div>
              </div>

              <Button className="w-full">Connect Wallet to Participate</Button>
            </CardContent>
          </Card>
        </div>
      </main>
      <Footer />
    </div>
  );
}
