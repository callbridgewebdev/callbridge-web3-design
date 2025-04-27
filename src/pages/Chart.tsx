
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar, Legend } from 'recharts';
import { LineChart as ChartIcon, Clock, Wallet, Coins, Activity } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { TokenContractData } from "@/lib/types";
import { fetchTokenData } from "@/lib/blockchain";

export default function Chart() {
  const [tokenData, setTokenData] = useState<TokenContractData | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [timeframe, setTimeframe] = useState<string>("7d");

  // Sample historical data (will be replaced with real data from contract)
  const priceHistory = {
    "7d": [
      { date: '2024-04-20', price: 0.1 },
      { date: '2024-04-21', price: 0.15 },
      { date: '2024-04-22', price: 0.12 },
      { date: '2024-04-23', price: 0.18 },
      { date: '2024-04-24', price: 0.22 },
      { date: '2024-04-25', price: 0.20 },
      { date: '2024-04-26', price: 0.25 },
    ],
    "30d": [
      { date: '2024-03-27', price: 0.05 },
      { date: '2024-04-01', price: 0.08 },
      { date: '2024-04-06', price: 0.12 },
      { date: '2024-04-11', price: 0.10 },
      { date: '2024-04-16', price: 0.15 },
      { date: '2024-04-21', price: 0.18 },
      { date: '2024-04-26', price: 0.25 },
    ],
    "90d": [
      { date: '2024-01-26', price: 0.01 },
      { date: '2024-02-15', price: 0.03 },
      { date: '2024-03-07', price: 0.07 },
      { date: '2024-03-28', price: 0.12 },
      { date: '2024-04-14', price: 0.18 },
      { date: '2024-04-26', price: 0.25 },
    ],
  };

  const volumeData = [
    { date: '2024-04-20', volume: 15000 },
    { date: '2024-04-21', volume: 22000 },
    { date: '2024-04-22', volume: 18000 },
    { date: '2024-04-23', volume: 25000 },
    { date: '2024-04-24', volume: 32000 },
    { date: '2024-04-25', volume: 28000 },
    { date: '2024-04-26', volume: 35000 },
  ];

  // Fetch data from smart contract
  useEffect(() => {
    const getTokenData = async () => {
      setIsLoading(true);
      try {
        const data = await fetchTokenData();
        setTokenData(data);
      } catch (error) {
        console.error("Failed to fetch token data:", error);
      } finally {
        setIsLoading(false);
      }
    };

    getTokenData();
    
    // Set up interval to update data every 30 seconds
    const interval = setInterval(getTokenData, 30000);
    return () => clearInterval(interval);
  }, []);

  // Use sample data if real data isn't available yet
  const stats = tokenData ? [
    { label: "Market Cap", value: `$${tokenData.marketCap.toLocaleString()}` },
    { label: "24h Volume", value: `$${tokenData.volume24h.toLocaleString()}` },
    { label: "Circulating Supply", value: `${tokenData.circulatingSupply.toLocaleString()} $CWD` },
    { label: "Total Supply", value: `${tokenData.totalSupply.toLocaleString()} $CWD` },
  ] : [
    { label: "Market Cap", value: "$2.5M" },
    { label: "24h Volume", value: "$150K" },
    { label: "Circulating Supply", value: "10M $CWD" },
    { label: "Total Supply", value: "100M $CWD" },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <Badge variant="outline" className="mb-4">Chart</Badge>
            <h1 className="text-4xl font-bold mb-4">$CWD Price Chart</h1>
            <p className="text-muted-foreground">
              Track the price movement and trading activity of the $CWD token in real-time.
            </p>
          </div>

          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold">Token Overview</h2>
            <div className="flex items-center gap-2">
              <Clock className="h-4 w-4 text-muted-foreground" />
              <span className="text-sm text-muted-foreground">
                {isLoading ? "Updating..." : "Last updated: Just now"}
              </span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
            {stats.map((stat, index) => (
              <Card key={index}>
                <CardHeader>
                  <CardDescription>{stat.label}</CardDescription>
                  <CardTitle>{stat.value}</CardTitle>
                </CardHeader>
              </Card>
            ))}
          </div>

          <Card className="mb-8">
            <CardHeader>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <ChartIcon className="h-6 w-6 text-primary" />
                  <CardTitle>Price Chart</CardTitle>
                </div>
                <div className="flex gap-2">
                  <Button 
                    variant={timeframe === "7d" ? "default" : "outline"} 
                    onClick={() => setTimeframe("7d")}
                    className="h-8 text-xs"
                  >
                    7D
                  </Button>
                  <Button 
                    variant={timeframe === "30d" ? "default" : "outline"} 
                    onClick={() => setTimeframe("30d")}
                    className="h-8 text-xs"
                  >
                    30D
                  </Button>
                  <Button 
                    variant={timeframe === "90d" ? "default" : "outline"} 
                    onClick={() => setTimeframe("90d")}
                    className="h-8 text-xs"
                  >
                    90D
                  </Button>
                </div>
              </div>
              <CardDescription>$CWD/USD price history</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-[400px]">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={priceHistory[timeframe as keyof typeof priceHistory]}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="date" />
                    <YAxis />
                    <Tooltip />
                    <Line type="monotone" dataKey="price" stroke="#8884d8" strokeWidth={2} />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <div className="flex items-center gap-2">
                  <Activity className="h-6 w-6 text-primary" />
                  <CardTitle>Trading Volume</CardTitle>
                </div>
                <CardDescription>Daily trading volume in USD</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-[300px]">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={volumeData}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="date" />
                      <YAxis />
                      <Tooltip />
                      <Bar dataKey="volume" fill="#82ca9d" />
                    </BarChart>
                  </ResponsiveContainer>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="flex items-center gap-2">
                  <Wallet className="h-6 w-6 text-primary" />
                  <CardTitle>Token Metrics</CardTitle>
                </div>
                <CardDescription>Key metrics and holders information</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-muted/50 rounded-lg p-4">
                      <p className="text-sm text-muted-foreground">Current Price</p>
                      <p className="text-xl font-bold">${tokenData?.currentPrice || "0.25"}</p>
                    </div>
                    <div className="bg-muted/50 rounded-lg p-4">
                      <p className="text-sm text-muted-foreground">All-Time High</p>
                      <p className="text-xl font-bold">$0.30</p>
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-muted/50 rounded-lg p-4">
                      <p className="text-sm text-muted-foreground">Holders</p>
                      <p className="text-xl font-bold">{tokenData?.holderCount || "1,250"}</p>
                    </div>
                    <div className="bg-muted/50 rounded-lg p-4">
                      <p className="text-sm text-muted-foreground">Transactions</p>
                      <p className="text-xl font-bold">{tokenData?.transactionCount || "32,456"}</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

import { Button } from "@/components/ui/button";
