
import { useState, useEffect } from "react";
import { Input } from "@/components/ui/input";
import WalletConnect from "@/components/WalletConnect";
import { toast } from "@/hooks/use-toast";
import { PresaleData } from "@/lib/types";

interface PurchaseFormProps {
  presaleData: PresaleData | undefined;
  error: unknown;
  refetch: () => void;
}

const PurchaseForm = ({ presaleData, error, refetch }: PurchaseFormProps) => {
  const [purchaseAmount, setPurchaseAmount] = useState<string>("");
  const [estimatedTokens, setEstimatedTokens] = useState<number>(0);
  const [walletConnected, setWalletConnected] = useState(false);
  
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
      refetch();
    }, 2000);
  };
  
  return (
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
          disabled={!presaleData?.isActive || !!error}
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
  );
};

export default PurchaseForm;
