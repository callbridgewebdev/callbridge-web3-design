
import { useState, useEffect } from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { useQuery } from "@tanstack/react-query";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Progress } from "@/components/ui/progress";
import { Skeleton } from "@/components/ui/skeleton";
import { toast } from "@/hooks/use-toast";
import { Percent, Lock, Timer, RefreshCw } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WalletConnect from "@/components/WalletConnect";
import { fetchStakingPlans } from "@/lib/blockchain";
import { StakingPlanData } from "@/lib/types";

export default function Staking() {
  const [selectedPlan, setSelectedPlan] = useState<string>("flexible");
  const [stakeAmount, setStakeAmount] = useState<string>("");
  const [walletConnected, setWalletConnected] = useState(false);
  const [estimatedRewards, setEstimatedRewards] = useState<number>(0);
  
  // Fetch staking plans from smart contract
  const { 
    data: stakingPlans, 
    isLoading: isLoadingStakingPlans,
    error: stakingPlansError,
    refetch: refetchStakingPlans
  } = useQuery({
    queryKey: ['stakingPlans'],
    queryFn: fetchStakingPlans,
    refetchInterval: 60000, // Auto refetch every minute
  });

  // Get current selected plan
  const currentPlan = stakingPlans?.find(p => p.id === selectedPlan);

  // Calculate estimated annual rewards
  useEffect(() => {
    if (!currentPlan || !stakeAmount || isNaN(parseFloat(stakeAmount))) {
      setEstimatedRewards(0);
      return;
    }
    
    const amount = parseFloat(stakeAmount);
    const apy = parseFloat(currentPlan.apy);
    
    setEstimatedRewards((amount * apy) / 100);
  }, [stakeAmount, currentPlan]);

  // Handle staking
  const handleStake = () => {
    if (!currentPlan) return;
    
    if (!stakeAmount || parseFloat(stakeAmount) <= 0) {
      toast({
        title: "Invalid amount",
        description: "Please enter a valid amount to stake",
        variant: "destructive",
      });
      return;
    }

    if (parseFloat(stakeAmount) < currentPlan.minStake) {
      toast({
        title: "Amount too low",
        description: `Minimum stake is ${currentPlan.minStake.toLocaleString()} $CWD`,
        variant: "destructive",
      });
      return;
    }

    // In a real implementation, this would call the smart contract
    toast({
      title: "Staking initiated",
      description: "Please confirm the transaction in your wallet",
    });
    
    // Simulate delay for blockchain interaction
    setTimeout(() => {
      toast({
        title: "Tokens staked!",
        description: `You have successfully staked ${parseFloat(stakeAmount).toLocaleString()} $CWD tokens!`,
      });
      
      setStakeAmount("");
      refetchStakingPlans();
    }, 2000);
  };

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

          <div className="flex justify-end mb-4">
            <Button 
              variant="outline" 
              size="sm" 
              onClick={() => refetchStakingPlans()}
              disabled={isLoadingStakingPlans}
            >
              <RefreshCw className="h-4 w-4 mr-2" />
              Refresh Data
            </Button>
          </div>

          <Tabs defaultValue={selectedPlan} onValueChange={setSelectedPlan} className="mb-6">
            <TabsList className="grid grid-cols-3 w-full max-w-md mx-auto mb-4">
              <TabsTrigger value="flexible">Flexible</TabsTrigger>
              <TabsTrigger value="standard">Standard</TabsTrigger>
              <TabsTrigger value="premium">Premium</TabsTrigger>
            </TabsList>
          </Tabs>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {isLoadingStakingPlans ? (
              Array(3).fill(0).map((_, i) => (
                <Card key={i} className="hover:shadow-lg transition-shadow duration-300">
                  <CardHeader>
                    <Skeleton className="h-6 w-24 mb-2" />
                    <Skeleton className="h-4 w-32" />
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <Skeleton className="h-8 w-24" />
                    <div className="space-y-4">
                      <Skeleton className="h-12 w-full" />
                      <Skeleton className="h-24 w-full" />
                      <Skeleton className="h-36 w-full" />
                      <Skeleton className="h-12 w-full" />
                    </div>
                  </CardContent>
                </Card>
              ))
            ) : stakingPlansError ? (
              <div className="col-span-3 text-center text-destructive">
                Error loading staking plans. Please try again.
              </div>
            ) : (
              stakingPlans?.map((plan) => (
                <Card 
                  key={plan.id} 
                  className={`hover:shadow-lg transition-shadow duration-300 ${plan.id === selectedPlan ? 'border-primary/50 shadow-md' : ''}`}
                >
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
                    <div className="text-3xl font-bold text-primary">{plan.apy}% APY</div>
                    <div className="space-y-4">
                      <div>
                        <p className="text-sm text-muted-foreground">Min Stake</p>
                        <p className="font-medium">{plan.minStake.toLocaleString()} $CWD</p>
                      </div>
                      <div className="grid grid-cols-2 gap-2 text-sm">
                        <div className="bg-muted/50 p-2 rounded-lg">
                          <p className="text-muted-foreground">Active Stakers</p>
                          <p className="font-medium">{plan.activeStakers.toLocaleString()}</p>
                        </div>
                        <div className="bg-muted/50 p-2 rounded-lg">
                          <p className="text-muted-foreground">TVL</p>
                          <p className="font-medium">${plan.tvl.toLocaleString()}</p>
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
                        {plan.id === selectedPlan && (
                          <>
                            <div className="space-y-2">
                              <label className="text-sm">Amount to Stake</label>
                              <Input 
                                type="number" 
                                placeholder={`Min ${plan.minStake.toLocaleString()} $CWD`} 
                                className="w-full" 
                                value={stakeAmount}
                                onChange={(e) => setStakeAmount(e.target.value)}
                                min={plan.minStake}
                              />
                            </div>
                            
                            {parseFloat(stakeAmount) > 0 && (
                              <div className="bg-muted/50 p-3 rounded-lg text-sm">
                                <div className="flex justify-between">
                                  <span>Estimated Annual Rewards</span>
                                  <span className="font-medium">{estimatedRewards.toLocaleString()} $CWD</span>
                                </div>
                                <div className="flex justify-between text-xs text-muted-foreground mt-1">
                                  <span>Monthly</span>
                                  <span>{(estimatedRewards / 12).toFixed(2)} $CWD</span>
                                </div>
                              </div>
                            )}
                            
                            <WalletConnect 
                              onConnected={() => {
                                setWalletConnected(true);
                                if (stakeAmount && parseFloat(stakeAmount) > 0) {
                                  handleStake();
                                }
                              }}
                              customText={walletConnected ? "Stake Now" : "Connect Wallet to Stake"}
                            />
                          </>
                        )}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))
            )}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
