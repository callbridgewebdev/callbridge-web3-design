
import { useState, useEffect } from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Gift, ArrowRight, Facebook, Twitter, Youtube, MessageCircle, CheckCircle, CircleDashed } from "lucide-react";
import { useQuery } from "@tanstack/react-query";
import { toast } from "@/hooks/use-toast";
import { Progress } from "@/components/ui/progress";
import { Skeleton } from "@/components/ui/skeleton";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WalletConnect from "@/components/WalletConnect";
import { fetchAirdropData } from "@/lib/blockchain";
import { AirdropData } from "@/lib/types";

export default function Airdrop() {
  const [walletConnected, setWalletConnected] = useState(false);
  const [completedTasks, setCompletedTasks] = useState<Record<string, boolean>>({
    twitter: false,
    telegram: false,
    facebook: false,
    youtube: false
  });
  
  // Fetch airdrop data from smart contract
  const { 
    data: airdropData, 
    isLoading: isLoadingAirdropData,
    error: airdropDataError,
    refetch: refetchAirdropData
  } = useQuery({
    queryKey: ['airdropData'],
    queryFn: fetchAirdropData,
    refetchInterval: 60000, // Auto refetch every minute
  });

  // Calculate progress
  const calculateProgress = () => {
    if (!airdropData) return 0;
    return (airdropData.claimedTokens / airdropData.totalTokensAllocated) * 100;
  };

  // Calculate user's earned tokens
  const calculateEarnedTokens = () => {
    if (!airdropData) return 0;
    
    return Object.entries(completedTasks)
      .reduce((total, [task, completed]) => {
        if (completed && airdropData.rewardPerTask[task as keyof typeof airdropData.rewardPerTask]) {
          return total + airdropData.rewardPerTask[task as keyof typeof airdropData.rewardPerTask];
        }
        return total;
      }, 0);
  };

  // Mark task as completed
  const completeTask = (platform: string) => {
    if (completedTasks[platform]) {
      return; // Task already completed
    }
    
    // In a real implementation, this would verify with the smart contract
    toast({
      title: "Verifying completion",
      description: `Verifying your ${platform} task...`,
    });
    
    // Simulate delay for verification
    setTimeout(() => {
      setCompletedTasks(prev => ({
        ...prev,
        [platform]: true
      }));
      
      toast({
        title: "Task completed",
        description: `Your ${platform} task has been verified!`,
      });
      
      refetchAirdropData();
    }, 1500);
  };

  // Claim tokens
  const claimTokens = () => {
    const earnedTokens = calculateEarnedTokens();
    
    if (earnedTokens <= 0) {
      toast({
        title: "No tokens to claim",
        description: "Complete tasks to earn tokens first",
        variant: "destructive",
      });
      return;
    }
    
    // In a real implementation, this would call the smart contract
    toast({
      title: "Processing claim",
      description: "Claiming your tokens from the smart contract...",
    });
    
    // Simulate delay for blockchain interaction
    setTimeout(() => {
      toast({
        title: "Tokens claimed!",
        description: `You have successfully claimed ${earnedTokens} $CWD tokens!`,
      });
      
      refetchAirdropData();
    }, 2000);
  };

  const socialTasks = [
    {
      platform: "Twitter",
      icon: Twitter,
      tasks: [
        "Follow @CallbridgeWD",
        "Like & Retweet pinned post",
        "Tag 3 friends"
      ],
      reward: airdropData?.rewardPerTask.twitter || 50
    },
    {
      platform: "Telegram",
      icon: MessageCircle,
      tasks: [
        "Join Telegram group",
        "Share announcement",
        "Stay active member"
      ],
      reward: airdropData?.rewardPerTask.telegram || 50
    },
    {
      platform: "Facebook",
      icon: Facebook,
      tasks: [
        "Like Facebook page",
        "Share latest post",
        "Comment with #Callbridge"
      ],
      reward: airdropData?.rewardPerTask.facebook || 25
    },
    {
      platform: "YouTube",
      icon: Youtube,
      tasks: [
        "Subscribe to channel",
        "Like latest video",
        "Comment on video"
      ],
      reward: airdropData?.rewardPerTask.youtube || 25
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <Badge variant="outline" className="mb-4">Airdrop</Badge>
            <h1 className="text-4xl font-bold mb-4">Claim Your $CWD Tokens</h1>
            <p className="text-muted-foreground mb-6">
              Complete social media tasks to earn free $CWD tokens. Join our community and be part of our growth journey.
            </p>
            
            {isLoadingAirdropData ? (
              <Skeleton className="h-8 w-64 mx-auto" />
            ) : (
              <div className="inline-flex items-center gap-2 text-sm bg-muted/50 px-4 py-2 rounded-full">
                <Gift className="h-4 w-4 text-primary" />
                <span>
                  {airdropData?.isActive 
                    ? `Airdrop ends in: ${Math.ceil((airdropData.endsAt.getTime() - Date.now()) / (1000 * 60 * 60 * 24))} days` 
                    : "Airdrop ended"}
                </span>
              </div>
            )}
          </div>

          {/* Airdrop progress card */}
          <Card className="max-w-xl mx-auto mb-8">
            <CardHeader>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Gift className="h-6 w-6 text-primary" />
                  <CardTitle>Airdrop Progress</CardTitle>
                </div>
              </div>
              <CardDescription>Track the overall airdrop distribution</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {isLoadingAirdropData ? (
                <>
                  <Skeleton className="h-2 w-full my-4" />
                  <div className="grid grid-cols-2 gap-4">
                    <Skeleton className="h-20 w-full" />
                    <Skeleton className="h-20 w-full" />
                  </div>
                </>
              ) : (
                <>
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>Claimed Tokens</span>
                      <span>{airdropData ? `${airdropData.claimedTokens.toLocaleString()} / ${airdropData.totalTokensAllocated.toLocaleString()} $CWD` : "0 / 0 $CWD"}</span>
                    </div>
                    <Progress value={calculateProgress()} className="h-2" />
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-muted/50 p-4 rounded-lg">
                      <p className="text-sm text-muted-foreground">Participants</p>
                      <p className="font-medium">{airdropData?.participantCount.toLocaleString() || "0"}</p>
                    </div>
                    <div className="bg-muted/50 p-4 rounded-lg">
                      <p className="text-sm text-muted-foreground">Remaining</p>
                      <p className="font-medium">{airdropData?.remainingTokens.toLocaleString() || "0"} $CWD</p>
                    </div>
                  </div>
                </>
              )}
            </CardContent>
          </Card>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto mb-8">
            {socialTasks.map((task, index) => (
              <Card key={index} className={`hover:shadow-lg transition-shadow duration-300 ${completedTasks[task.platform.toLowerCase()] ? 'border-green-500/30' : ''}`}>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <task.icon className="h-6 w-6 text-primary" />
                      <CardTitle>{task.platform}</CardTitle>
                    </div>
                    {completedTasks[task.platform.toLowerCase()] && (
                      <CheckCircle className="h-5 w-5 text-green-500" />
                    )}
                  </div>
                  <CardDescription>Earn {task.reward} $CWD</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <ul className="space-y-2">
                    {task.tasks.map((t, idx) => (
                      <li key={idx} className="flex items-center gap-2">
                        <div className="h-2 w-2 rounded-full bg-primary"></div>
                        <span className="text-sm">{t}</span>
                      </li>
                    ))}
                  </ul>
                  <Button 
                    className="w-full" 
                    variant={completedTasks[task.platform.toLowerCase()] ? "outline" : "outline"}
                    disabled={completedTasks[task.platform.toLowerCase()] || !walletConnected}
                    onClick={() => completeTask(task.platform.toLowerCase())}
                  >
                    {completedTasks[task.platform.toLowerCase()] ? (
                      "Completed"
                    ) : (
                      <>
                        Complete Tasks
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </>
                    )}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          <Card className="max-w-xl mx-auto">
            <CardHeader>
              <div className="flex items-center gap-2">
                <Gift className="h-6 w-6 text-primary" />
                <CardTitle>Claim Tokens</CardTitle>
              </div>
              <CardDescription>Connect wallet to claim your earned tokens</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="bg-muted/50 p-4 rounded-lg">
                <div className="flex justify-between mb-2">
                  <span className="text-sm text-muted-foreground">Total Tasks Completed</span>
                  <span className="font-medium">{Object.values(completedTasks).filter(Boolean).length}/4</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-muted-foreground">Tokens Available to Claim</span>
                  <span className="font-medium">{calculateEarnedTokens()} $CWD</span>
                </div>
              </div>
              <WalletConnect 
                onConnected={() => {
                  setWalletConnected(true);
                  claimTokens();
                }}
                customText={walletConnected ? "Claim Tokens" : "Connect Wallet to Claim"}
              />
            </CardContent>
          </Card>
        </div>
      </main>
      <Footer />
    </div>
  );
}
