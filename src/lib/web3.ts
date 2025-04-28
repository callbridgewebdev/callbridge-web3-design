
import { toast } from "@/hooks/use-toast";

export type Web3WalletType = 'metamask' | 'trust';

export interface Web3Connection {
  address: string;
  chainId: number;
  balance: string;
}

export const connectWeb3Wallet = async (walletType: Web3WalletType): Promise<Web3Connection | null> => {
  try {
    const provider = walletType === 'metamask' ? window.ethereum : window.trustwallet;
    
    if (!provider) {
      toast({
        title: `${walletType === 'metamask' ? 'MetaMask' : 'Trust Wallet'} not found`,
        description: `Please install ${walletType === 'metamask' ? 'MetaMask' : 'Trust Wallet'} to continue`,
        variant: "destructive",
      });
      return null;
    }

    // Request account access
    const accounts = await provider.request({ method: 'eth_requestAccounts' });
    
    if (!accounts || accounts.length === 0) {
      throw new Error('No accounts found');
    }

    // Get chain ID
    const chainId = await provider.request({ method: 'eth_chainId' });
    
    // Get balance
    const balance = await provider.request({
      method: 'eth_getBalance',
      params: [accounts[0], 'latest']
    });

    // Convert balance from wei to ether
    const balanceInEther = (parseInt(balance, 16) / 1e18).toFixed(4);

    return {
      address: accounts[0],
      chainId: parseInt(chainId, 16),
      balance: balanceInEther
    };
  } catch (error) {
    console.error('Web3 connection error:', error);
    toast({
      title: "Connection Failed",
      description: "Failed to connect to wallet. Please try again.",
      variant: "destructive",
    });
    return null;
  }
};
