
import { useEffect, useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { RefreshCw, ArrowDownUp, AlertCircle, ExternalLink } from "lucide-react";
import { useQuery } from "@tanstack/react-query";
import { toast } from "@/hooks/use-toast";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WalletConnect from "@/components/WalletConnect";
import { Skeleton } from "@/components/ui/skeleton";
import { fetchSwapData } from "@/lib/blockchain";
import { SwapData } from "@/lib/types";

export default function Swap() {
  const [payAmount, setPayAmount] = useState<string>("");
  const [receiveAmount, setReceiveAmount] = useState<string>("");
  const [payToken, setPayToken] = useState<"BNB" | "CWD">("BNB");
  const [isCalculatingTokens, setIsCalculatingTokens] = useState<boolean>(false);

  // Fetch swap data from smart contract
  const { 
    data: swapData, 
    isLoading: isLoadingSwapData,
    error: swapDataError, 
    refetch: refetchSwapData
  } = useQuery({
    queryKey: ['swapData'],
    queryFn: fetchSwapData,
    refetchInterval: 30000, // Auto refetch every 30 seconds
  });

  // Handle pay amount change
  const handlePayChange = (value: string) => {
    setPayAmount(value);
    calculateReceiveAmount(value, payToken);
  };

  // Calculate receive amount based on pay amount and selected token
  const calculateReceiveAmount = (amount: string, token: "BNB" | "CWD") => {
    if (!swapData || !amount || isNaN(parseFloat(amount))) {
      setReceiveAmount("");
      return;
    }

    setIsCalculatingTokens(true);
    
    // Simulate a small delay to represent blockchain calculation
    setTimeout(() => {
      const numericAmount = parseFloat(amount);
      let result: number;
      
      if (token === "BNB") {
        // Converting BNB to CWD
        result = numericAmount * swapData.rate.bnbToCwd;
      } else {
        // Converting CWD to BNB
        result = numericAmount * swapData.rate.cwdToBnb;
      }
      
      setReceiveAmount(result.toFixed(token === "BNB" ? 0 : 6)); // More decimals for BNB
      setIsCalculatingTokens(false);
    }, 300);
  };

  // Switch token positions
  const switchTokens = () => {
    const newPayToken = payToken === "BNB" ? "CWD" : "BNB";
    setPayToken(newPayToken);
    
    // Swap input values
    setPayAmount(receiveAmount);
    setReceiveAmount(payAmount);
  };

  // Handle swap submission
  const handleSwap = () => {
    if (!payAmount || parseFloat(payAmount) <= 0) {
      toast({
        title: "Invalid amount",
        description: "Please enter a valid amount to swap",
        variant: "destructive",
      });
      return;
    }

    toast({
      title: "Swap initiated",
      description: "Please confirm the transaction in your wallet",
    });

    // In a real implementation, this would call the smart contract
    setTimeout(() => {
      toast({
        title: "Swap successful",
        description: `You have successfully swapped ${payAmount} ${payToken} for ${receiveAmount} ${payToken === "BNB" ? "CWD" : "BNB"}`,
      });
      
      // Reset form
      setPayAmount("");
      setReceiveAmount("");
    }, 2000);
  };

  // Update rates when token changes
  useEffect(() => {
    if (payAmount) {
      calculateReceiveAmount(payAmount, payToken);
    }
  }, [payToken, swapData]);

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
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <RefreshCw className="h-6 w-6 text-primary" />
                  <CardTitle>Swap Tokens</CardTitle>
                </div>
                <Button 
                  variant="ghost" 
                  size="sm" 
                  onClick={() => refetchSwapData()}
                  disabled={isLoadingSwapData}
                >
                  <RefreshCw className="h-4 w-4" />
                </Button>
              </div>
              <CardDescription>Exchange tokens at the best rates</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <div className="space-y-2">
                  <label className="text-sm">You Pay</label>
                  <div className="flex gap-2">
                    <Input 
                      type="number" 
                      placeholder="0.0" 
                      value={payAmount}
                      onChange={(e) => handlePayChange(e.target.value)}
                      min="0"
                      step="0.01"
                    />
                    <Button 
                      variant="outline" 
                      onClick={() => setPayToken(payToken === "BNB" ? "CWD" : "BNB")}
                      className="min-w-[80px]"
                    >
                      {payToken}
                    </Button>
                  </div>
                </div>

                <div className="flex justify-center">
                  <Button 
                    variant="ghost" 
                    size="icon" 
                    onClick={switchTokens}
                    className="rounded-full hover:bg-primary/10"
                  >
                    <ArrowDownUp className="h-4 w-4" />
                  </Button>
                </div>

                <div className="space-y-2">
                  <label className="text-sm">You Receive</label>
                  <div className="flex gap-2">
                    <Input 
                      type="text" 
                      placeholder="0.0" 
                      value={receiveAmount}
                      readOnly
                      className={isCalculatingTokens ? "animate-pulse" : ""}
                    />
                    <Button 
                      variant="outline"
                      disabled
                      className="min-w-[80px]"
                    >
                      {payToken === "BNB" ? "CWD" : "BNB"}
                    </Button>
                  </div>
                </div>
              </div>

              <div className="space-y-2 text-sm bg-muted/50 p-3 rounded-lg">
                {isLoadingSwapData ? (
                  <>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Exchange Rate</span>
                      <Skeleton className="h-4 w-24" />
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Slippage Tolerance</span>
                      <Skeleton className="h-4 w-12" />
                    </div>
                  </>
                ) : swapDataError ? (
                  <div className="flex items-center gap-2 text-destructive">
                    <AlertCircle className="h-4 w-4" />
                    <span>Failed to load swap rates</span>
                  </div>
                ) : (
                  <>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Exchange Rate</span>
                      <span>
                        {payToken === "BNB" 
                          ? `1 BNB = ${swapData?.rate.bnbToCwd.toLocaleString()} $CWD` 
                          : `1 $CWD = ${swapData?.rate.cwdToBnb.toFixed(6)} BNB`}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Slippage Tolerance</span>
                      <span>{swapData?.slippageTolerance}%</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Liquidity Pool</span>
                      <span>${swapData?.liquidityPoolSize.toLocaleString()}</span>
                    </div>
                  </>
                )}
              </div>

              <WalletConnect onConnected={handleSwap} />

              <div className="text-xs text-muted-foreground flex items-center justify-center gap-1 mt-2">
                <ExternalLink className="h-3 w-3" />
                <a href="https://bscscan.com/address/0x1234567890123456789012345678901234567890" target="_blank" rel="noopener noreferrer" className="hover:underline">
                  View Contract
                </a>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
      <Footer />
    </div>
  );
}
