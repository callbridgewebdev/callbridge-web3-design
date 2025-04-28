
import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Droplets, Waves } from "lucide-react";

const PoolPage = () => {
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

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          <Card className="web3-card">
            <CardHeader>
              <div className="flex items-center gap-2 mb-2">
                <Droplets className="h-5 w-5 text-web3-purple" />
                <Badge variant="outline">Active Pools</Badge>
              </div>
              <CardTitle>Liquidity Pools</CardTitle>
              <CardDescription>Current available pools for liquidity provision</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="rounded-lg border p-4">
                <div className="flex justify-between items-center mb-2">
                  <div className="flex items-center gap-2">
                    <div className="flex -space-x-2">
                      <div className="w-6 h-6 rounded-full bg-blue-500"></div>
                      <div className="w-6 h-6 rounded-full bg-green-500"></div>
                    </div>
                    <span className="font-medium">CWD / BNB</span>
                  </div>
                  <Badge>24.5% APY</Badge>
                </div>
                <div className="text-sm text-muted-foreground">
                  <div className="flex justify-between mb-1">
                    <span>TVL:</span>
                    <span>$428,952</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Volume (24h):</span>
                    <span>$52,187</span>
                  </div>
                </div>
              </div>
              
              <div className="rounded-lg border p-4">
                <div className="flex justify-between items-center mb-2">
                  <div className="flex items-center gap-2">
                    <div className="flex -space-x-2">
                      <div className="w-6 h-6 rounded-full bg-blue-500"></div>
                      <div className="w-6 h-6 rounded-full bg-purple-500"></div>
                    </div>
                    <span className="font-medium">CWD / BUSD</span>
                  </div>
                  <Badge>18.2% APY</Badge>
                </div>
                <div className="text-sm text-muted-foreground">
                  <div className="flex justify-between mb-1">
                    <span>TVL:</span>
                    <span>$312,621</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Volume (24h):</span>
                    <span>$38,459</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="web3-card">
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
        </div>

        <div className="bg-muted/30 rounded-lg p-6 text-center mb-12">
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

        <Card>
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
