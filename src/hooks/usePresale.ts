
import { useState, useEffect } from "react";
import { useQuery } from "@tanstack/react-query";
import { fetchPresaleData } from "@/lib/blockchain";

export function usePresale() {
  // Fetch presale data from smart contract with real-time updates
  const { 
    data: presaleData, 
    isLoading, 
    error,
    refetch
  } = useQuery({
    queryKey: ['presaleData'],
    queryFn: fetchPresaleData,
    refetchInterval: 15000, // Auto refetch every 15 seconds for real-time data
    retry: 3,
    retryDelay: attempt => Math.min(attempt > 1 ? 2 ** attempt * 1000 : 1000, 30 * 1000),
  });
  
  // Calculate time remaining
  const calculateTimeRemaining = () => {
    if (!presaleData) return { days: 0, hours: 0, minutes: 0 };
    
    const now = new Date();
    const timeLeft = Math.max(0, presaleData.endTime.getTime() - now.getTime());
    
    const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
    
    return { days, hours, minutes };
  };

  // Format time remaining
  const formatTimeRemaining = () => {
    const { days, hours, minutes } = calculateTimeRemaining();
    return `${days}d ${hours}h ${minutes}m`;
  };

  return {
    presaleData,
    isLoading,
    error,
    refetch,
    calculateTimeRemaining,
    formatTimeRemaining
  };
}
