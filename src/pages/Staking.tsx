
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Percent, Lock, Timer } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WalletConnect from "@/components/WalletConnect";

export default function Staking() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <Badge variant="outline" className="mb-4">Staking</Badge>
            <h1 className="text-4xl font-bold mb-4">Stake $CWD Tokens</h1>
            <p className="text-muted-foreground">
              Earn passive income by staking your $CWD tokens. Choose from different staking plans and earn rewards.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                title: "Flexible",
                period: "No lock period",
                apy: "8%",
                minStake: "1,000 $CWD",
                features: [
                  "Withdraw anytime",
                  "Daily rewards",
                  "No voting rights",
                  "0% unstaking fee"
                ],
                activeStakers: "1.2K",
                tvl: "$245K"
              },
              {
                title: "Standard",
                period: "3 months lock",
                apy: "15%",
                minStake: "5,000 $CWD",
                features: [
                  "Early unstake fee 10%",
                  "Weekly rewards",
                  "Basic voting rights",
                  "Priority support"
                ],
                activeStakers: "2.5K",
                tvl: "$890K"
              },
              {
                title: "Premium",
                period: "12 months lock",
                apy: "25%",
                minStake: "10,000 $CWD",
                features: [
                  "Locked for entire period",
                  "Monthly rewards",
                  "Full voting rights",
                  "VIP benefits"
                ],
                activeStakers: "985",
                tvl: "$1.2M"
              }
            ].map((plan, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                  <div className="flex items-center gap-2">
                    <Percent className="h-6 w-6 text-primary" />
                    <CardTitle>{plan.title}</CardTitle>
                  </div>
                  <CardDescription className="flex items-center gap-2">
                    <Lock className="h-4 w-4" />
                    {plan.period}
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="text-3xl font-bold text-primary">{plan.apy} APY</div>
                  <div className="space-y-4">
                    <div>
                      <p className="text-sm text-muted-foreground">Min Stake</p>
                      <p className="font-medium">{plan.minStake}</p>
                    </div>
                    <div className="grid grid-cols-2 gap-2 text-sm">
                      <div className="bg-muted/50 p-2 rounded-lg">
                        <p className="text-muted-foreground">Active Stakers</p>
                        <p className="font-medium">{plan.activeStakers}</p>
                      </div>
                      <div className="bg-muted/50 p-2 rounded-lg">
                        <p className="text-muted-foreground">TVL</p>
                        <p className="font-medium">{plan.tvl}</p>
                      </div>
                    </div>
                    <ul className="space-y-2">
                      {plan.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center gap-2">
                          <div className="h-2 w-2 rounded-full bg-primary"></div>
                          <span className="text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <div className="space-y-3">
                      <Input type="number" placeholder="Enter amount to stake" className="w-full" />
                      <WalletConnect />
                    </div>
                  </div>
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
