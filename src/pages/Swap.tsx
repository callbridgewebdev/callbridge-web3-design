
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { RefreshCw, ArrowDownUp } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function Swap() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <Badge variant="outline" className="mb-4">Swap</Badge>
            <h1 className="text-4xl font-bold mb-4">Swap Tokens</h1>
            <p className="text-muted-foreground">
              Swap $CWD tokens with other cryptocurrencies instantly at the best rates.
            </p>
          </div>

          <Card className="max-w-md mx-auto">
            <CardHeader>
              <div className="flex items-center gap-2">
                <RefreshCw className="h-6 w-6 text-primary" />
                <CardTitle>Swap Tokens</CardTitle>
              </div>
              <CardDescription>Exchange tokens at the best rates</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <div className="space-y-2">
                  <label className="text-sm">You Pay</label>
                  <div className="flex gap-2">
                    <Input type="number" placeholder="0.0" />
                    <Button variant="outline">BNB</Button>
                  </div>
                </div>

                <div className="flex justify-center">
                  <Button variant="ghost" size="icon">
                    <ArrowDownUp className="h-4 w-4" />
                  </Button>
                </div>

                <div className="space-y-2">
                  <label className="text-sm">You Receive</label>
                  <div className="flex gap-2">
                    <Input type="number" placeholder="0.0" />
                    <Button variant="outline">$CWD</Button>
                  </div>
                </div>
              </div>

              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Exchange Rate</span>
                  <span>1 BNB = 10,000 $CWD</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Slippage Tolerance</span>
                  <span>0.5%</span>
                </div>
              </div>

              <Button className="w-full">Connect Wallet to Swap</Button>
            </CardContent>
          </Card>
        </div>
      </main>
      <Footer />
    </div>
  );
}
