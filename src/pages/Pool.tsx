
import React, { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Droplets, Waves, Plus, Coins, RefreshCw, Loader } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { toast } from "@/hooks/use-toast";
import WalletConnect from "@/components/WalletConnect";
import { useQuery } from "@tanstack/react-query";

interface PoolData {
  id: string;
  name: string;
  pair: string;
  tvl: number;
  apy: number;
  volume24h: number;
  tokenA: {
    symbol: string;
    color: string;
  };
  tokenB: {
    symbol: string;
    color: string;
  };
}

const fetchPoolData = async (): Promise<PoolData[]> => {
  // This would typically fetch from a blockchain API
  // For now we'll simulate with slightly randomized mock data
  await new Promise(resolve => setTimeout(resolve, 1000)); // Simulate network delay
  
  const pools: PoolData[] = [
    {
      id: "pool-1",
      name: "CWD / BNB",
      pair: "CWD-BNB",
      tvl: 428952 + (Math.random() * 5000 - 2500),
      apy: 24.5 + (Math.random() * 2 - 1),
      volume24h: 52187 + (Math.random() * 1000 - 500),
      tokenA: { symbol: "CWD", color: "bg-blue-500" },
      tokenB: { symbol: "BNB", color: "bg-green-500" }
    },
    {
      id: "pool-2",
      name: "CWD / BUSD",
      pair: "CWD-BUSD",
      tvl: 312621 + (Math.random() * 4000 - 2000),
      apy: 18.2 + (Math.random() * 1.5 - 0.75),
      volume24h: 38459 + (Math.random() * 900 - 450),
      tokenA: { symbol: "CWD", color: "bg-blue-500" },
      tokenB: { symbol: "BUSD", color: "bg-purple-500" }
    }
  ];
  
  return pools;
};

const PoolPage = () => {
  const [selectedPool, setSelectedPool] = useState<PoolData | null>(null);
  const [tokenAAmount, setTokenAAmount] = useState<string>("");
  const [tokenBAmount, setTokenBAmount] = useState<string>("");
  const [isAddingLiquidity, setIsAddingLiquidity] = useState(false);

  const { 
    data: pools,
    isLoading,
    isError,
    refetch
  } = useQuery({
    queryKey: ['poolData'],
    queryFn: fetchPoolData,
    refetchInterval: 30000, // Refetch every 30 seconds
  });

  const handleSelectPool = (pool: PoolData) => {
    setSelectedPool(pool);
    setTokenAAmount("");
    setTokenBAmount("");
  };

  const handleTokenAChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setTokenAAmount(value);
    
    // In a real implementation, this would calculate the equivalent amount
    // based on the current pool price ratio
    if (selectedPool && value) {
      const numValue = parseFloat(value);
      // Simulating a price ratio for the pair
      const ratio = selectedPool.pair === "CWD-BNB" ? 0.00025 : 0.25;
      setTokenBAmount((numValue * ratio).toFixed(6));
    } else {
      setTokenBAmount("");
    }
  };

  const handleTokenBChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setTokenBAmount(value);
    
    // Calculate token A based on token B input
    if (selectedPool && value) {
      const numValue = parseFloat(value);
      // Inverse of the price ratio
      const ratio = selectedPool.pair === "CWD-BNB" ? 4000 : 4;
      setTokenAAmount((numValue * ratio).toFixed(6));
    } else {
      setTokenAAmount("");
    }
  };

  const handleAddLiquidity = async () => {
    if (!selectedPool) {
      toast({
        title: "No Pool Selected",
        description: "Please select a pool first",
        variant: "destructive",
      });
      return;
    }
    
    if (!tokenAAmount || !tokenBAmount) {
      toast({
        title: "Invalid Amount",
        description: "Please enter valid amounts for both tokens",
        variant: "destructive",
      });
      return;
    }

    setIsAddingLiquidity(true);
    
    try {
      // This would typically call the web3 wallet functionality
      // to add liquidity to the selected pool
      await new Promise(resolve => setTimeout(resolve, 2000)); // Simulate transaction
      
      toast({
        title: "Liquidity Added Successfully",
        description: `Added ${tokenAAmount} ${selectedPool.tokenA.symbol} and ${tokenBAmount} ${selectedPool.tokenB.symbol} to the pool`,
        variant: "default",
      });
      
      // Reset form
      setTokenAAmount("");
      setTokenBAmount("");
      
      // Refresh pool data
      refetch();
    } catch (error) {
      toast({
        title: "Transaction Failed",
        description: "Failed to add liquidity to the pool",
        variant: "destructive",
      });
    } finally {
      setIsAddingLiquidity(false);
    }
  };
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <Badge variant="outline" className="mb-4 border-primary/20 bg-primary/5">
            Liquidity Provision
          </Badge>
          <h1 className="text-4xl font-bold mb-6">Liquidity Pool</h1>
          <p className="text-muted-foreground text-lg mb-8">
            Provide liquidity to the $CWD token pools and earn rewards from trading fees and incentives.
          </p>
        </div>

        <div className="mb-8 flex justify-end">
          <WalletConnect />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Pool List Section */}
          <Card className="col-span-1 md:col-span-2 web3-card">
            <CardHeader className="border-b">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Droplets className="h-5 w-5 text-web3-purple" />
                  <Badge variant="outline">Active Pools</Badge>
                </div>
                <Button variant="outline" size="sm" onClick={() => refetch()} className="flex items-center gap-1">
                  <RefreshCw className="h-4 w-4" />
                  <span>Refresh</span>
                </Button>
              </div>
              <CardTitle>Liquidity Pools</CardTitle>
              <CardDescription>Current available pools for liquidity provision</CardDescription>
            </CardHeader>
            <CardContent className="pt-6">
              {isLoading ? (
                <div className="text-center py-12">
                  <Loader className="h-8 w-8 animate-spin mx-auto mb-4 text-primary" />
                  <p className="text-muted-foreground">Loading pool data...</p>
                </div>
              ) : isError ? (
                <div className="text-center py-12">
                  <p className="text-destructive mb-4">Failed to load pool data</p>
                  <Button onClick={() => refetch()} variant="outline">
                    Try Again
                  </Button>
                </div>
              ) : (
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Pool</TableHead>
                      <TableHead className="text-right">TVL</TableHead>
                      <TableHead className="text-right">APY</TableHead>
                      <TableHead className="text-right">Volume (24h)</TableHead>
                      <TableHead className="text-right">Action</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {pools?.map((pool) => (
                      <TableRow 
                        key={pool.id}
                        className={selectedPool?.id === pool.id ? "bg-muted" : ""}
                      >
                        <TableCell>
                          <div className="flex items-center gap-2">
                            <div className="flex -space-x-2">
                              <div className={`w-6 h-6 rounded-full ${pool.tokenA.color}`}></div>
                              <div className={`w-6 h-6 rounded-full ${pool.tokenB.color}`}></div>
                            </div>
                            <span className="font-medium">{pool.name}</span>
                          </div>
                        </TableCell>
                        <TableCell className="text-right">${pool.tvl.toLocaleString('en-US', { maximumFractionDigits: 0 })}</TableCell>
                        <TableCell className="text-right">
                          <Badge>{pool.apy.toFixed(1)}% APY</Badge>
                        </TableCell>
                        <TableCell className="text-right">${pool.volume24h.toLocaleString('en-US', { maximumFractionDigits: 0 })}</TableCell>
                        <TableCell className="text-right">
                          <Button 
                            size="sm" 
                            variant={selectedPool?.id === pool.id ? "default" : "outline"}
                            onClick={() => handleSelectPool(pool)}
                          >
                            Select
                          </Button>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              )}
            </CardContent>
          </Card>

          {/* Add Liquidity Card */}
          <Card className="col-span-1 web3-card">
            <CardHeader>
              <div className="flex items-center gap-2 mb-2">
                <Plus className="h-5 w-5 text-web3-purple" />
                <Badge variant="outline">Add Liquidity</Badge>
              </div>
              <CardTitle>Provide Liquidity</CardTitle>
              <CardDescription>Add tokens to earn trading fees and rewards</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {selectedPool ? (
                <>
                  <div className="text-center mb-4">
                    <Badge variant="outline" className="mb-2">Selected Pool</Badge>
                    <h3 className="font-medium text-lg">{selectedPool.name}</h3>
                    <p className="text-xs text-muted-foreground">Current APY: {selectedPool.apy.toFixed(1)}%</p>
                  </div>
                  
                  <div className="space-y-4">
                    <div>
                      <Label htmlFor="tokenAAmount">Amount of {selectedPool.tokenA.symbol}</Label>
                      <div className="flex gap-2 mt-1.5">
                        <Input
                          id="tokenAAmount"
                          type="number"
                          placeholder="0.0"
                          value={tokenAAmount}
                          onChange={handleTokenAChange}
                          className="flex-1"
                        />
                        <Button variant="outline" size="sm" className="w-20" onClick={() => setTokenAAmount("100")}>
                          MAX
                        </Button>
                      </div>
                    </div>
                    
                    <div>
                      <Label htmlFor="tokenBAmount">Amount of {selectedPool.tokenB.symbol}</Label>
                      <div className="flex gap-2 mt-1.5">
                        <Input
                          id="tokenBAmount"
                          type="number"
                          placeholder="0.0"
                          value={tokenBAmount}
                          onChange={handleTokenBChange}
                          className="flex-1"
                        />
                        <Button variant="outline" size="sm" className="w-20" onClick={() => setTokenBAmount("0.025")}>
                          MAX
                        </Button>
                      </div>
                    </div>
                  </div>
                </>
              ) : (
                <div className="text-center py-8">
                  <Coins className="h-12 w-12 mx-auto mb-4 text-muted-foreground" />
                  <h4 className="text-lg font-medium mb-2">Select a Pool</h4>
                  <p className="text-muted-foreground mb-4">Please select a pool from the list to add liquidity</p>
                </div>
              )}
            </CardContent>
            <CardFooter>
              <Button 
                className="w-full" 
                disabled={!selectedPool || !tokenAAmount || !tokenBAmount || isAddingLiquidity}
                onClick={handleAddLiquidity}
              >
                {isAddingLiquidity ? (
                  <>
                    <Loader className="mr-2 h-4 w-4 animate-spin" />
                    Adding Liquidity...
                  </>
                ) : (
                  <>
                    <Plus className="mr-2 h-4 w-4" />
                    Add Liquidity
                  </>
                )}
              </Button>
            </CardFooter>
          </Card>
        </div>

        {/* Rewards Section */}
        <Card className="web3-card mt-8">
          <CardHeader>
            <div className="flex items-center gap-2 mb-2">
              <Waves className="h-5 w-5 text-web3-purple" />
              <Badge variant="outline">Incentives</Badge>
            </div>
            <CardTitle>Liquidity Rewards</CardTitle>
            <CardDescription>Benefits for liquidity providers</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-4">
              <div className="flex gap-3 items-start">
                <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <span className="font-bold">1</span>
                </div>
                <div>
                  <h4 className="font-medium">Trading Fee Rewards</h4>
                  <p className="text-sm text-muted-foreground">Earn 0.3% on all trades proportional to your pool share</p>
                </div>
              </div>
              
              <div className="flex gap-3 items-start">
                <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <span className="font-bold">2</span>
                </div>
                <div>
                  <h4 className="font-medium">Bonus CWD Tokens</h4>
                  <p className="text-sm text-muted-foreground">Receive extra CWD tokens as incentives for providing liquidity</p>
                </div>
              </div>
              
              <div className="flex gap-3 items-start">
                <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <span className="font-bold">3</span>
                </div>
                <div>
                  <h4 className="font-medium">LP Token Staking</h4>
                  <p className="text-sm text-muted-foreground">Stake your LP tokens to earn additional yield</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* How-to Section */}
        <div className="bg-muted/30 rounded-lg p-6 text-center mt-12">
          <h2 className="text-2xl font-bold mb-4">How to Provide Liquidity</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
            <div className="p-4">
              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center mb-4 mx-auto">
                <span className="font-bold">1</span>
              </div>
              <h3 className="font-medium text-center mb-2">Connect Wallet</h3>
              <p className="text-sm text-muted-foreground">Connect your MetaMask or Trust Wallet to the platform</p>
            </div>
            
            <div className="p-4">
              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center mb-4 mx-auto">
                <span className="font-bold">2</span>
              </div>
              <h3 className="font-medium text-center mb-2">Deposit Assets</h3>
              <p className="text-sm text-muted-foreground">Add equal value of CWD and paired token (BNB or BUSD)</p>
            </div>
            
            <div className="p-4">
              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center mb-4 mx-auto">
                <span className="font-bold">3</span>
              </div>
              <h3 className="font-medium text-center mb-2">Receive LP Tokens</h3>
              <p className="text-sm text-muted-foreground">Get LP tokens representing your share of the pool</p>
            </div>
          </div>
        </div>

        <Card className="mt-8">
          <CardHeader className="text-center">
            <CardTitle>Risk Disclosure</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">
              Providing liquidity involves risks including impermanent loss, where the value of your deposited assets may change relative to simply holding them. Please ensure you understand these risks before participating in liquidity pools.
            </p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
};

export default PoolPage;
