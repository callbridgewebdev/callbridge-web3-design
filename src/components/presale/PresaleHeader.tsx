
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { Timer } from "lucide-react";
import { PresaleData } from "@/lib/types";

interface PresaleHeaderProps {
  isLoading: boolean;
  presaleData: PresaleData | undefined;
  error: unknown;
  refetch: () => void;
  formatTimeRemaining: () => string;
}

const PresaleHeader = ({ isLoading, presaleData, error, refetch, formatTimeRemaining }: PresaleHeaderProps) => {
  return (
    <div className="text-center max-w-2xl mx-auto mb-16">
      <Badge variant="outline" className="mb-4">Presale</Badge>
      <h1 className="text-4xl font-bold mb-4">$CWD Token Presale</h1>
      <p className="text-muted-foreground mb-6">
        Join our presale to get $CWD tokens at the best possible price. Early investors receive special bonuses and benefits.
      </p>
      {isLoading ? (
        <Skeleton className="h-8 w-64 mx-auto" />
      ) : error ? (
        <div className="text-destructive text-sm">
          Error loading presale data. Please try again.
          <Button variant="outline" size="sm" className="ml-2" onClick={refetch}>
            Retry
          </Button>
        </div>
      ) : (
        <div className="inline-flex items-center gap-2 text-sm bg-muted/50 px-4 py-2 rounded-full">
          <Timer className="h-4 w-4 text-primary" />
          <span>
            {presaleData?.isActive 
              ? `Phase ${presaleData.phase} ends in: ${formatTimeRemaining()}` 
              : "Presale ended"}
          </span>
        </div>
      )}
    </div>
  );
};

export default PresaleHeader;
