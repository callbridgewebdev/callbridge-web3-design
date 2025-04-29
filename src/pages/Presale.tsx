
import { useState, useEffect } from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Input } from "@/components/ui/input";
import { Timer, ArrowDownToLine, ExternalLink, Clock, RefreshCw } from "lucide-react";
import { useQuery } from "@tanstack/react-query";
import { toast } from "@/hooks/use-toast";
import { Skeleton } from "@/components/ui/skeleton";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WalletConnect from "@/components/WalletConnect";
import { fetchPresaleData } from "@/lib/blockchain";
import { PresaleData } from "@/lib/types";

export default function Presale() {
  const [purchaseAmount, setPurchaseAmount] = useState<string>("");
  const [estimatedTokens, setEstimatedTokens] = useState<number>(0);
  const [walletConnected, setWalletConnected] = useState(false);

  // Fetch presale data from smart contract with real-time updates
  const { 
    data: presaleData, 
    isLoading: isLoadingPresaleData,
    error: presaleDataError,
    refetch: refetchPresaleData
  } = useQuery({
    queryKey: ['presaleData'],
    queryFn: fetchPresaleData,
    refetchInterval: 15000, // Auto refetch every 15 seconds for real-time data
    retry: 3,
    retryDelay: attempt => Math.min(attempt > 1 ? 2 ** attempt * 1000 : 1000, 30 * 1000),
  });

  // Calculate time remaining
  const calculateTimeRemaining = () => {
    if (!presaleData) return { days: 0, hours: 0, minutes: 0 };
    
    const now = new Date();
    const timeLeft = Math.max(0, presaleData.endTime.getTime() - now.getTime());
    
    const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
    
    return { days, hours, minutes };
  };

  // Format time remaining
  const formatTimeRemaining = () => {
    const { days, hours, minutes } = calculateTimeRemaining();
    return `${days}d ${hours}h ${minutes}m`;
  };

  // Calculate estimated tokens based on purchase amount
  useEffect(() => {
    if (!presaleData || !purchaseAmount || isNaN(parseFloat(purchaseAmount))) {
      setEstimatedTokens(0);
      return;
    }
    
    const amount = parseFloat(purchaseAmount);
    const tokens = amount / presaleData.tokenPrice;
    const bonusTokens = tokens * (presaleData.bonus / 100);
    
    setEstimatedTokens(tokens + bonusTokens);
  }, [purchaseAmount, presaleData]);

  // Handle purchase
  const handlePurchase = () => {
    if (!purchaseAmount || parseFloat(purchaseAmount) <= 0) {
      toast({
        title: "Invalid amount",
        description: "Please enter a valid amount to purchase",
        variant: "destructive",
      });
      return;
    }

    if (presaleData && parseFloat(purchaseAmount) < presaleData.minContribution) {
      toast({
        title: "Amount too low",
        description: `Minimum contribution is ${presaleData.minContribution} BNB`,
        variant: "destructive",
      });
      return;
    }

    if (presaleData && parseFloat(purchaseAmount) > presaleData.maxContribution) {
      toast({
        title: "Amount too high",
        description: `Maximum contribution is ${presaleData.maxContribution} BNB`,
        variant: "destructive",
      });
      return;
    }

    toast({
      title: "Purchase initiated",
      description: "Please confirm the transaction in your wallet",
    });
    
    // Simulate blockchain transaction completion
    setTimeout(() => {
      toast({
        title: "Purchase successful!",
        description: `You have successfully purchased ${estimatedTokens.toLocaleString()} $CWD tokens!`,
      });
      
      setPurchaseAmount("");
      refetchPresaleData();
    }, 2000);
  };

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
            {isLoadingPresaleData ? (
              <Skeleton className="h-8 w-64 mx-auto" />
            ) : presaleDataError ? (
              <div className="text-destructive text-sm">
                Error loading presale data. Please try again.
                <Button variant="outline" size="sm" className="ml-2" onClick={() => refetchPresaleData()}>
                  Retry
                </Button>
              </div>
            ) : (
              <div className="inline-flex items-center gap-2 text-sm bg-muted/50 px-4 py-2 rounded-full">
                <Timer className="h-4 w-4 text-primary" />
                <span>
                  {presaleData?.isActive 
                    ? `Phase ${presaleData.phase} ends in: ${formatTimeRemaining()}` 
                    : "Presale ended"}
                </span>
              </div>
            )}
          </div>

          <Card className="max-w-2xl mx-auto">
            <CardHeader>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <ArrowDownToLine className="h-6 w-6 text-primary" />
                  <CardTitle>
                    {isLoadingPresaleData 
                      ? <Skeleton className="h-5 w-36" /> 
                      : `Phase ${presaleData?.phase || 1} Presale`
                    }
                  </CardTitle>
                </div>
                <Button 
                  variant="ghost" 
                  size="sm" 
                  onClick={() => refetchPresaleData()}
                  disabled={isLoadingPresaleData}
                >
                  <RefreshCw className="h-4 w-4" />
                </Button>
              </div>
              <CardDescription>
                {isLoadingPresaleData 
                  ? <Skeleton className="h-4 w-48" /> 
                  : `${presaleData?.bonus || 0}% bonus for early investors`
                }
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-2">
                {isLoadingPresaleData ? (
                  <>
                    <div className="flex justify-between text-sm">
                      <span>Progress</span>
                      <Skeleton className="h-4 w-12" />
                    </div>
                    <Skeleton className="h-2 w-full my-1" />
                    <Skeleton className="h-4 w-32 ml-auto" />
                  </>
                ) : presaleDataError ? (
                  <div className="text-center p-4">
                    <p className="text-destructive mb-2">Failed to load presale data</p>
                    <Button variant="outline" onClick={() => refetchPresaleData()}>Retry</Button>
                  </div>
                ) : (
                  <>
                    <div className="flex justify-between text-sm">
                      <span>Progress</span>
                      <span>{presaleData?.progress.toFixed(1)}%</span>
                    </div>
                    <Progress value={presaleData?.progress || 0} className="h-2" />
                    <p className="text-xs text-muted-foreground text-right">
                      {presaleData?.bnbRaised.toFixed(1)} BNB / {presaleData?.hardCap} BNB
                    </p>
                  </>
                )}
              </div>

              <div className="grid grid-cols-2 gap-4">
                {isLoadingPresaleData ? (
                  <>
                    <Skeleton className="h-24 w-full" />
                    <Skeleton className="h-24 w-full" />
                  </>
                ) : presaleDataError ? (
                  <div className="col-span-2 text-center">
                    <Button variant="outline" onClick={() => refetchPresaleData()}>
                      <RefreshCw className="mr-2 h-4 w-4" />
                      Reload Data
                    </Button>
                  </div>
                ) : (
                  <>
                    <div className="bg-muted/50 p-4 rounded-lg">
                      <p className="text-sm text-muted-foreground">Price</p>
                      <p className="font-medium">1 BNB = {(1 / presaleData!.tokenPrice).toLocaleString()} $CWD</p>
                      <p className="text-xs text-muted-foreground">≈ ${presaleData?.tokenPrice.toFixed(4)} per $CWD</p>
                    </div>
                    <div className="bg-muted/50 p-4 rounded-lg">
                      <p className="text-sm text-muted-foreground">Your Purchase</p>
                      <p className="font-medium">
                        {purchaseAmount ? `${purchaseAmount} BNB` : "0 BNB"}
                      </p>
                      <p className="text-xs text-muted-foreground">
                        Min: {presaleData?.minContribution} BNB | Max: {presaleData?.maxContribution} BNB
                      </p>
                    </div>
                  </>
                )}
              </div>

              <div className="space-y-4 bg-muted/30 p-4 rounded-lg">
                {isLoadingPresaleData ? (
                  <>
                    <div className="flex justify-between text-sm">
                      <span>Listing Price</span>
                      <Skeleton className="h-4 w-16" />
                    </div>
                    <div className="flex justify-between text-sm">
                      <span>Presale Price</span>
                      <Skeleton className="h-4 w-16" />
                    </div>
                    <div className="flex justify-between text-sm font-medium">
                      <span>Your Profit at Launch</span>
                      <Skeleton className="h-4 w-16" />
                    </div>
                  </>
                ) : presaleDataError ? (
                  <div className="text-center py-2">
                    <p className="text-sm text-muted-foreground">Price data unavailable</p>
                  </div>
                ) : (
                  <>
                    <div className="flex justify-between text-sm">
                      <span>Listing Price</span>
                      <span>${presaleData?.listingPrice.toFixed(4)}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span>Presale Price</span>
                      <span>${presaleData?.tokenPrice.toFixed(4)}</span>
                    </div>
                    <div className="flex justify-between text-sm font-medium">
                      <span>Your Profit at Launch</span>
                      <span className="text-green-500">
                        +{(((presaleData?.listingPrice || 0) / (presaleData?.tokenPrice || 1)) * 100 - 100).toFixed(0)}%
                      </span>
                    </div>
                  </>
                )}
              </div>

              <div className="space-y-4">
                <div className="space-y-2">
                  <label className="text-sm">Amount to Invest (BNB)</label>
                  <Input 
                    type="number" 
                    placeholder={`Min: ${presaleData?.minContribution || 0.1} BNB`} 
                    value={purchaseAmount}
                    onChange={(e) => setPurchaseAmount(e.target.value)}
                    min={presaleData?.minContribution || 0.1}
                    max={presaleData?.maxContribution || 10}
                    step="0.01"
                    disabled={!presaleData?.isActive || !!presaleDataError}
                  />
                </div>
                
                <div className="bg-muted/30 p-3 rounded-lg">
                  <div className="flex justify-between text-sm">
                    <span>You Will Receive</span>
                    <span className="font-medium">
                      {estimatedTokens > 0 ? `${estimatedTokens.toLocaleString()} $CWD` : "0 $CWD"}
                    </span>
                  </div>
                  {estimatedTokens > 0 && presaleData?.bonus && (
                    <div className="flex justify-between text-xs text-muted-foreground mt-1">
                      <span>Includes {presaleData.bonus}% Bonus</span>
                      <span>+{(estimatedTokens * presaleData.bonus / (100 + presaleData.bonus)).toLocaleString()} $CWD</span>
                    </div>
                  )}
                </div>

                <WalletConnect 
                  onConnected={() => {
                    setWalletConnected(true);
                    if (purchaseAmount && parseFloat(purchaseAmount) > 0) {
                      handlePurchase();
                    }
                  }}
                  customText={walletConnected ? "Buy Tokens" : "Connect Wallet to Buy"}
                />
              </div>

              <div className="flex flex-col md:flex-row justify-between text-sm text-muted-foreground pt-2">
                <div className="flex items-center gap-1 mb-2 md:mb-0">
                  <Clock className="h-4 w-4" />
                  <span>
                    Contributors: {isLoadingPresaleData ? "..." : presaleData?.contributors.toLocaleString()}
                  </span>
                </div>
                <div className="flex items-center gap-1">
                  <ExternalLink className="h-4 w-4" />
                  <a href="https://bscscan.com/address/0x1234567890123456789012345678901234567890" target="_blank" rel="noopener noreferrer" className="hover:underline">
                    View Contract
                  </a>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
      <Footer />
    </div>
  );
}
