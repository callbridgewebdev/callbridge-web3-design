
import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export interface TokenContractData {
  currentPrice: number;
  currentPriceUSD: number;
  marketCap: number;
  volume24h: number;
  circulatingSupply: number;
  totalSupply: number;
  holderCount: number;
  transactionCount: number;
  lastUpdated: Date;
}

export interface PoolData {
  id: string;
  name: string;
  token1: string;
  token2: string;
  apr: number;
  totalLiquidity: number;
  userLiquidity: number;
  token1Balance: number;
  token2Balance: number;
}

export interface PresaleData {
  phase: number;
  tokenPrice: number;
  listingPrice: number;
  bnbRaised: number;
  hardCap: number;
  softCap: number;
  minContribution: number;
  maxContribution: number;
  progress: number;
  startTime: Date;
  endTime: Date;
  bonus: number;
  tokensForSale: number;
  tokensSold: number;
  contributors: number;
  isActive: boolean;
  lastUpdated: Date;
}

export interface AirdropData {
  isActive: boolean;
  totalTokensAllocated: number;
  remainingTokens: number;
  claimedTokens: number;
  participantCount: number;
  tasksCompleted: {
    twitter: number;
    telegram: number;
    facebook: number;
    youtube: number;
  };
  rewardPerTask: {
    twitter: number;
    telegram: number;
    facebook: number;
    youtube: number;
  };
  userTasks: {
    twitter: boolean;
    telegram: boolean;
    facebook: boolean;
    youtube: boolean;
  } | null;
  userRewards: number;
  endsAt: Date;
  lastUpdated: Date;
}

export interface StakingPlanData {
  id: string;
  title: string;
  period: string;
  apy: string;
  minStake: number;
  activeStakers: number;
  tvl: number;
  features: string[];
  userStaked: number;
  userRewards: number;
  lastClaimedAt: Date | null;
  lastUpdated: Date;
}

export interface SwapData {
  rate: {
    bnbToCwd: number;
    cwdToBnb: number;
  };
  liquidityPoolSize: number;
  slippageTolerance: number;
  tradingVolume24h: number;
  bnbPrice: number;
  cwdPrice: number;
  lastUpdated: Date;
}
