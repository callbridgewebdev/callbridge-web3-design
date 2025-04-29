
import { Skeleton } from "@/components/ui/skeleton";
import { PresaleData } from "@/lib/types";

interface PriceComparisonProps {
  isLoading: boolean;
  presaleData: PresaleData | undefined;
  error: unknown;
}

const PriceComparison = ({ isLoading, presaleData, error }: PriceComparisonProps) => {
  return (
    <div className="space-y-4 bg-muted/30 p-4 rounded-lg">
      {isLoading ? (
        <>
          <div className="flex justify-between text-sm">
            <span>Listing Price</span>
            <Skeleton className="h-4 w-16" />
          </div>
          <div className="flex justify-between text-sm">
            <span>Presale Price</span>
            <Skeleton className="h-4 w-16" />
          </div>
          <div className="flex justify-between text-sm font-medium">
            <span>Your Profit at Launch</span>
            <Skeleton className="h-4 w-16" />
          </div>
        </>
      ) : error ? (
        <div className="text-center py-2">
          <p className="text-sm text-muted-foreground">Price data unavailable</p>
        </div>
      ) : (
        <>
          <div className="flex justify-between text-sm">
            <span>Listing Price</span>
            <span>${presaleData?.listingPrice.toFixed(4)}</span>
          </div>
          <div className="flex justify-between text-sm">
            <span>Presale Price</span>
            <span>${presaleData?.tokenPrice.toFixed(4)}</span>
          </div>
          <div className="flex justify-between text-sm font-medium">
            <span>Your Profit at Launch</span>
            <span className="text-green-500">
              +{(((presaleData?.listingPrice || 0) / (presaleData?.tokenPrice || 1)) * 100 - 100).toFixed(0)}%
            </span>
          </div>
        </>
      )}
    </div>
  );
};

export default PriceComparison;
