
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Percent } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function Staking() {
  const stakingPlans = [
    {
      title: "Flexible",
      period: "No lock period",
      apy: "8%",
      minStake: "1,000 $CWD",
      features: [
        "Withdraw anytime",
        "Daily rewards",
        "No voting rights"
      ]
    },
    {
      title: "Standard",
      period: "3 months lock",
      apy: "15%",
      minStake: "5,000 $CWD",
      features: [
        "Early unstake fee 10%",
        "Weekly rewards",
        "Basic voting rights"
      ]
    },
    {
      title: "Premium",
      period: "12 months lock",
      apy: "25%",
      minStake: "10,000 $CWD",
      features: [
        "No early unstake",
        "Monthly rewards",
        "Full voting rights"
      ]
    }
  ];

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
            {stakingPlans.map((plan, index) => (
              <Card key={index}>
                <CardHeader>
                  <div className="flex items-center gap-2">
                    <Percent className="h-6 w-6 text-primary" />
                    <CardTitle>{plan.title}</CardTitle>
                  </div>
                  <CardDescription>{plan.period}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="text-3xl font-bold text-primary">{plan.apy} APY</div>
                  <p className="text-sm text-muted-foreground">Min Stake: {plan.minStake}</p>
                  <ul className="space-y-2">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-2">
                        <div className="h-2 w-2 rounded-full bg-primary"></div>
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button className="w-full">Start Staking</Button>
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
