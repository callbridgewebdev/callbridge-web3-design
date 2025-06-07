
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
import RegistrationForm from './RegistrationForm';

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
  const [showRegistration, setShowRegistration] = useState(false);

  const handleConnect = async (walletType: 'metamask' | 'trust') => {
    const connection = await connectWeb3Wallet(walletType);
    
    if (connection) {
      setWalletData(connection);
      setIsOpen(false);
      
      toast({
        title: "Wallet Connected",
        description: `Connected to ${walletType === 'metamask' ? 'MetaMask' : 'Trust Wallet'}`,
      });
      
      // Show registration form after successful wallet connection
      setShowRegistration(true);
      
      // Call the onConnected callback if provided
      if (onConnected) {
        onConnected();
      }
    }
  };

  // Function to format the wallet address for display
  const formatAddress = (address: string) => {
    if (!address) return '';
    return `${address.substring(0, 6)}...${address.substring(address.length - 4)}`;
  };

  const handleRegistrationClose = () => {
    setShowRegistration(false);
  };

  return (
    <>
      {walletData ? (
        <Button 
          onClick={onConnected} 
          className="w-full"
          variant="outline"
        >
          <span className="flex items-center">
            <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
            {formatAddress(walletData.address)}
          </span>
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

      {/* Registration Form */}
      {showRegistration && walletData && (
        <RegistrationForm
          isOpen={showRegistration}
          onClose={handleRegistrationClose}
          walletAddress={walletData.address}
        />
      )}
    </>
  );
};

export default WalletConnect;
