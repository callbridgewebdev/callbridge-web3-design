
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar, Legend } from 'recharts';
import { LineChart as ChartIcon, Clock, Wallet, Coins, Activity } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useState, useEffect } from "react";
import { useQuery } from "@tanstack/react-query";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { TokenContractData } from "@/lib/types";
import { fetchTokenData, fetchPriceHistory, fetchVolumeData } from "@/lib/blockchain";
import { Skeleton } from "@/components/ui/skeleton";

export default function Chart() {
  const [timeframe, setTimeframe] = useState<string>("7d");
  
  // Fetch token data from smart contract
  const { 
    data: tokenData, 
    isLoading: isLoadingTokenData,
    error: tokenDataError,
    refetch: refetchTokenData
  } = useQuery({
    queryKey: ['tokenData'],
    queryFn: fetchTokenData,
    refetchInterval: 30000, // Auto refetch every 30 seconds
  });
  
  // Fetch price history data based on selected timeframe
  const { 
    data: priceHistoryData,
    isLoading: isLoadingPriceHistory,
    error: priceHistoryError
  } = useQuery({
    queryKey: ['priceHistory', timeframe],
    queryFn: () => fetchPriceHistory(timeframe as "7d" | "30d" | "90d"),
  });
  
  // Fetch volume data
  const { 
    data: volumeData,
    isLoading: isLoadingVolumeData,
    error: volumeDataError
  } = useQuery({
    queryKey: ['volumeData'],
    queryFn: () => fetchVolumeData(7),
  });

  // Format stats data from token data
  const stats = [
    { label: "Market Cap", value: tokenData ? `$${tokenData.marketCap.toLocaleString()}` : "$0" },
    { label: "24h Volume", value: tokenData ? `$${tokenData.volume24h.toLocaleString()}` : "$0" },
    { label: "Circulating Supply", value: tokenData ? `${tokenData.circulatingSupply.toLocaleString()} $CWD` : "0 $CWD" },
    { label: "Total Supply", value: tokenData ? `${tokenData.totalSupply.toLocaleString()} $CWD` : "0 $CWD" },
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
                {isLoadingTokenData ? "Updating..." : `Last updated: ${new Date().toLocaleTimeString()}`}
              </span>
              <Button 
                variant="outline" 
                size="sm" 
                onClick={() => refetchTokenData()}
                disabled={isLoadingTokenData}
              >
                Refresh
              </Button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
            {stats.map((stat, index) => (
              <Card key={index}>
                <CardHeader>
                  <CardDescription>{stat.label}</CardDescription>
                  {isLoadingTokenData ? (
                    <Skeleton className="h-6 w-24" />
                  ) : (
                    <CardTitle>{stat.value}</CardTitle>
                  )}
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
                {isLoadingPriceHistory ? (
                  <div className="flex items-center justify-center h-full">
                    <Skeleton className="h-[350px] w-full" />
                  </div>
                ) : priceHistoryError ? (
                  <div className="flex items-center justify-center h-full text-destructive">
                    Error loading price data. Please try again.
                  </div>
                ) : (
                  <ResponsiveContainer width="100%" height="100%">
                    <LineChart data={priceHistoryData}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="date" />
                      <YAxis />
                      <Tooltip labelFormatter={(value) => `Date: ${value}`} />
                      <Line 
                        type="monotone" 
                        dataKey="price" 
                        stroke="#8884d8" 
                        strokeWidth={2} 
                        name="$CWD Price"
                        dot={{ r: 4 }}
                        activeDot={{ r: 6 }}
                      />
                    </LineChart>
                  </ResponsiveContainer>
                )}
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
                  {isLoadingVolumeData ? (
                    <div className="flex items-center justify-center h-full">
                      <Skeleton className="h-[250px] w-full" />
                    </div>
                  ) : volumeDataError ? (
                    <div className="flex items-center justify-center h-full text-destructive">
                      Error loading volume data. Please try again.
                    </div>
                  ) : (
                    <ResponsiveContainer width="100%" height="100%">
                      <BarChart data={volumeData}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="date" />
                        <YAxis />
                        <Tooltip 
                          formatter={(value) => `$${Number(value).toLocaleString()}`}
                          labelFormatter={(value) => `Date: ${value}`}
                        />
                        <Bar 
                          dataKey="volume" 
                          fill="#82ca9d" 
                          name="Trading Volume"
                          radius={[4, 4, 0, 0]} 
                        />
                      </BarChart>
                    </ResponsiveContainer>
                  )}
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
                      {isLoadingTokenData ? (
                        <Skeleton className="h-6 w-16 mt-1" />
                      ) : (
                        <p className="text-xl font-bold">${tokenData?.currentPrice.toFixed(4) || "0.00"}</p>
                      )}
                    </div>
                    <div className="bg-muted/50 rounded-lg p-4">
                      <p className="text-sm text-muted-foreground">All-Time High</p>
                      <p className="text-xl font-bold">$0.30</p>
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-muted/50 rounded-lg p-4">
                      <p className="text-sm text-muted-foreground">Holders</p>
                      {isLoadingTokenData ? (
                        <Skeleton className="h-6 w-16 mt-1" />
                      ) : (
                        <p className="text-xl font-bold">{tokenData?.holderCount.toLocaleString() || "0"}</p>
                      )}
                    </div>
                    <div className="bg-muted/50 rounded-lg p-4">
                      <p className="text-sm text-muted-foreground">Transactions</p>
                      {isLoadingTokenData ? (
                        <Skeleton className="h-6 w-16 mt-1" />
                      ) : (
                        <p className="text-xl font-bold">{tokenData?.transactionCount.toLocaleString() || "0"}</p>
                      )}
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
