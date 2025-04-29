
import { useState } from 'react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
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

interface WalletConnectProps {
  onConnected?: () => void;
  customText?: string;
}

const WalletConnect = ({ onConnected, customText }: WalletConnectProps) => {
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
      
      // Call the onConnected callback if provided
      if (onConnected) {
        onConnected();
      }
    }
  };

  return (
    <>
      {walletData ? (
        <Button 
          onClick={onConnected} 
          className="w-full"
        >
          {customText || "Continue"}
        </Button>
      ) : (
        <Button 
          onClick={() => setIsOpen(true)} 
          className="wallet-button w-full"
        >
          <Wallet className="w-4 h-4 mr-2" />
          Connect Wallet
        </Button>
      )}

      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Connect Wallet</DialogTitle>
            <DialogDescription>
              Connect your wallet to interact with the blockchain.
            </DialogDescription>
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
