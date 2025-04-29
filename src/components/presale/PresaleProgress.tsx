
import { Progress } from "@/components/ui/progress";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { RefreshCw } from "lucide-react";
import { PresaleData } from "@/lib/types";

interface PresaleProgressProps {
  isLoading: boolean;
  presaleData: PresaleData | undefined;
  error: unknown;
  refetch: () => void;
}

const PresaleProgress = ({ isLoading, presaleData, error, refetch }: PresaleProgressProps) => {
  return (
    <div className="space-y-2">
      {isLoading ? (
        <>
          <div className="flex justify-between text-sm">
            <span>Progress</span>
            <Skeleton className="h-4 w-12" />
          </div>
          <Skeleton className="h-2 w-full my-1" />
          <Skeleton className="h-4 w-32 ml-auto" />
        </>
      ) : error ? (
        <div className="text-center p-4">
          <p className="text-destructive mb-2">Failed to load presale data</p>
          <Button variant="outline" onClick={refetch}>Retry</Button>
        </div>
      ) : (
        <>
          <div className="flex justify-between text-sm">
            <span>Progress</span>
            <span>{presaleData?.progress.toFixed(1)}%</span>
          </div>
          <Progress value={presaleData?.progress || 0} className="h-2" />
          <p className="text-xs text-muted-foreground text-right">
            {presaleData?.bnbRaised.toFixed(1)} BNB / {presaleData?.hardCap} BNB
          </p>
        </>
      )}
    </div>
  );
};

export default PresaleProgress;
