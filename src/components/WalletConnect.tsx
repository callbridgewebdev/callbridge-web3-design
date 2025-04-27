
import { useState } from 'react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Wallet } from "lucide-react";
import { toast } from "@/hooks/use-toast";

const WalletConnect = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleConnect = async (walletType: 'metamask' | 'trust') => {
    try {
      const provider = walletType === 'metamask' ? window.ethereum : window.trustwallet;
      
      if (!provider) {
        toast({
          title: `${walletType === 'metamask' ? 'MetaMask' : 'Trust Wallet'} not found`,
          description: `Please install ${walletType === 'metamask' ? 'MetaMask' : 'Trust Wallet'} to continue`,
          variant: "destructive",
        });
        return;
      }

      await provider.request({ method: 'eth_requestAccounts' });
      
      toast({
        title: "Wallet Connected",
        description: "Successfully connected to your wallet",
      });
      
      setIsOpen(false);
    } catch (error) {
      toast({
        title: "Connection Failed",
        description: "Failed to connect to wallet. Please try again.",
        variant: "destructive",
      });
    }
  };

  return (
    <>
      <Button onClick={() => setIsOpen(true)} className="wallet-button">
        <Wallet className="w-4 h-4 mr-1" />
        Connect Wallet
      </Button>

      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Connect Wallet</DialogTitle>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <Button onClick={() => handleConnect('metamask')} className="w-full">
              Connect with MetaMask
            </Button>
            <Button onClick={() => handleConnect('trust')} className="w-full">
              Connect with Trust Wallet
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default WalletConnect;
