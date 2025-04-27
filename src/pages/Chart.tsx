
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { LineChart as ChartIcon } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function Chart() {
  const data = [
    { date: '2024-01', price: 0.1 },
    { date: '2024-02', price: 0.15 },
    { date: '2024-03', price: 0.12 },
    { date: '2024-04', price: 0.18 },
    { date: '2024-05', price: 0.22 },
    { date: '2024-06', price: 0.20 },
    { date: '2024-07', price: 0.25 },
  ];

  const stats = [
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
              Track the price movement and trading activity of the $CWD token.
            </p>
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

          <Card>
            <CardHeader>
              <div className="flex items-center gap-2">
                <ChartIcon className="h-6 w-6 text-primary" />
                <CardTitle>Price Chart</CardTitle>
              </div>
              <CardDescription>$CWD/USD price history</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-[400px]">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={data}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="date" />
                    <YAxis />
                    <Tooltip />
                    <Line type="monotone" dataKey="price" stroke="#8884d8" />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
      <Footer />
    </div>
  );
}
