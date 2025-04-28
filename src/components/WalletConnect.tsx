
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
import { connectWeb3Wallet, type Web3Connection } from '@/lib/web3';

declare global {
  interface Window {
    ethereum?: any;
    trustwallet?: any;
  }
}

const WalletConnect = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [walletData, setWalletData] = useState<Web3Connection | null>(null);

  const handleConnect = async (walletType: 'metamask' | 'trust') => {
    const connection = await connectWeb3Wallet(walletType);
    
    if (connection) {
      setWalletData(connection);
      setIsOpen(false);
      
      toast({
        title: "Wallet Connected",
        description: `Connected to ${walletType === 'metamask' ? 'MetaMask' : 'Trust Wallet'}`,
      });
    }
  };

  return (
    <>
      <Button 
        onClick={() => setIsOpen(true)} 
        className="wallet-button"
        variant={walletData ? "outline" : "default"}
      >
        <Wallet className="w-4 h-4 mr-1" />
        {walletData ? 
          `${walletData.address.slice(0, 6)}...${walletData.address.slice(-4)} (${walletData.balance} ETH)` : 
          'Connect Wallet'
        }
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
