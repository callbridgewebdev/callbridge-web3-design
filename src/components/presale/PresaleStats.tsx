
import { Skeleton } from "@/components/ui/skeleton";
import { Button } from "@/components/ui/button";
import { RefreshCw } from "lucide-react";
import { PresaleData } from "@/lib/types";

interface PresaleStatsProps {
  isLoading: boolean;
  presaleData: PresaleData | undefined;
  error: unknown;
  refetch: () => void;
  purchaseAmount: string;
}

const PresaleStats = ({ isLoading, presaleData, error, refetch, purchaseAmount }: PresaleStatsProps) => {
  return (
    <div className="grid grid-cols-2 gap-4">
      {isLoading ? (
        <>
          <Skeleton className="h-24 w-full" />
          <Skeleton className="h-24 w-full" />
        </>
      ) : error ? (
        <div className="col-span-2 text-center">
          <Button variant="outline" onClick={refetch}>
            <RefreshCw className="mr-2 h-4 w-4" />
            Reload Data
          </Button>
        </div>
      ) : (
        <>
          <div className="bg-muted/50 p-4 rounded-lg">
            <p className="text-sm text-muted-foreground">Price</p>
            <p className="font-medium">1 BNB = {(1 / (presaleData?.tokenPrice || 1)).toLocaleString()} $CWD</p>
            <p className="text-xs text-muted-foreground">≈ ${presaleData?.tokenPrice.toFixed(4)} per $CWD</p>
          </div>
          <div className="bg-muted/50 p-4 rounded-lg">
            <p className="text-sm text-muted-foreground">Your Purchase</p>
            <p className="font-medium">
              {purchaseAmount ? `${purchaseAmount} BNB` : "0 BNB"}
            </p>
            <p className="text-xs text-muted-foreground">
              Min: {presaleData?.minContribution} BNB | Max: {presaleData?.maxContribution} BNB
            </p>
          </div>
        </>
      )}
    </div>
  );
};

export default PresaleStats;
