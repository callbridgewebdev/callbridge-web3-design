
import { useState, useEffect } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  CreditCard, 
  Download, 
  FileText, 
  Crown, 
  Wallet,
  Calendar,
  DollarSign,
  Users
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { toast } from "@/hooks/use-toast";

const Dashboard = () => {
  const [userStats, setUserStats] = useState({
    totalProjects: 3,
    activeSubscription: "Premium",
    walletBalance: "2.5 ETH",
    lastPayment: "Dec 15, 2024"
  });

  const [downloadableFiles] = useState([
    {
      id: 1,
      name: "Project Template 1",
      type: "React Template",
      size: "2.5 MB",
      downloadUrl: "#"
    },
    {
      id: 2,
      name: "Web3 Integration Guide",
      type: "PDF Document",
      size: "1.8 MB",
      downloadUrl: "#"
    },
    {
      id: 3,
      name: "Smart Contract Template",
      type: "Solidity File",
      size: "856 KB",
      downloadUrl: "#"
    },
    {
      id: 4,
      name: "UI Component Library",
      type: "React Components",
      size: "4.2 MB",
      downloadUrl: "#"
    }
  ]);

  const handleDownload = (fileName: string) => {
    toast({
      title: "Download Started",
      description: `Downloading ${fileName}...`,
    });
  };

  const handleSubscriptionUpgrade = () => {
    toast({
      title: "Subscription Upgrade",
      description: "Redirecting to subscription plans...",
    });
  };

  const handlePaymentHistory = () => {
    toast({
      title: "Payment History",
      description: "Loading your payment history...",
    });
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          {/* Welcome Section */}
          <div className="mb-8">
            <h1 className="text-3xl md:text-4xl font-bold mb-2">Welcome to Your Dashboard</h1>
            <p className="text-muted-foreground">Manage your projects, subscriptions, and downloads</p>
          </div>

          {/* Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Total Projects</CardTitle>
                <FileText className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{userStats.totalProjects}</div>
                <p className="text-xs text-muted-foreground">+2 from last month</p>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Subscription</CardTitle>
                <Crown className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{userStats.activeSubscription}</div>
                <p className="text-xs text-muted-foreground">Active plan</p>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Wallet Balance</CardTitle>
                <Wallet className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{userStats.walletBalance}</div>
                <p className="text-xs text-muted-foreground">Current balance</p>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Last Payment</CardTitle>
                <Calendar className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">$99</div>
                <p className="text-xs text-muted-foreground">{userStats.lastPayment}</p>
              </CardContent>
            </Card>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Payments & Subscription Section */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <CreditCard className="w-5 h-5" />
                  Payments & Subscription
                </CardTitle>
                <CardDescription>
                  Manage your subscription and payment methods
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between p-4 border rounded-lg">
                  <div>
                    <h3 className="font-semibold">Premium Plan</h3>
                    <p className="text-sm text-muted-foreground">$99/month • Next billing: Jan 15, 2025</p>
                  </div>
                  <Badge variant="default">Active</Badge>
                </div>
                
                <div className="flex gap-2">
                  <Button onClick={handleSubscriptionUpgrade} className="flex-1">
                    <Crown className="w-4 h-4 mr-2" />
                    Upgrade Plan
                  </Button>
                  <Button variant="outline" onClick={handlePaymentHistory} className="flex-1">
                    <DollarSign className="w-4 h-4 mr-2" />
                    Payment History
                  </Button>
                </div>
                
                <div className="pt-4 border-t">
                  <h4 className="font-medium mb-2">Recent Transactions</h4>
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>Premium Subscription</span>
                      <span className="text-green-600">$99.00</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span>Additional Storage</span>
                      <span className="text-green-600">$19.00</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Download Files Section */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Download className="w-5 h-5" />
                  Available Downloads
                </CardTitle>
                <CardDescription>
                  Access your project files and resources
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {downloadableFiles.map((file) => (
                    <div key={file.id} className="flex items-center justify-between p-3 border rounded-lg hover:bg-muted/50 transition-colors">
                      <div className="flex-1">
                        <h4 className="font-medium text-sm">{file.name}</h4>
                        <p className="text-xs text-muted-foreground">{file.type} • {file.size}</p>
                      </div>
                      <Button 
                        size="sm" 
                        variant="outline"
                        onClick={() => handleDownload(file.name)}
                      >
                        <Download className="w-3 h-3 mr-1" />
                        Download
                      </Button>
                    </div>
                  ))}
                </div>
                
                <div className="pt-4 border-t mt-4">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-muted-foreground">Total Downloads This Month</span>
                    <Badge variant="secondary">12 files</Badge>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Quick Actions */}
          <Card className="mt-6">
            <CardHeader>
              <CardTitle>Quick Actions</CardTitle>
              <CardDescription>Common tasks and shortcuts</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <Button variant="outline" className="h-20 flex-col gap-2">
                  <FileText className="w-6 h-6" />
                  <span>New Project</span>
                </Button>
                <Button variant="outline" className="h-20 flex-col gap-2">
                  <Users className="w-6 h-6" />
                  <span>Invite Team</span>
                </Button>
                <Button variant="outline" className="h-20 flex-col gap-2">
                  <Download className="w-6 h-6" />
                  <span>Bulk Download</span>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Dashboard;
