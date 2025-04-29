
import { Clock, ExternalLink } from "lucide-react";
import { PresaleData } from "@/lib/types";

interface PresaleFooterProps {
  isLoading: boolean;
  presaleData: PresaleData | undefined;
}

const PresaleFooter = ({ isLoading, presaleData }: PresaleFooterProps) => {
  return (
    <div className="flex flex-col md:flex-row justify-between text-sm text-muted-foreground pt-2">
      <div className="flex items-center gap-1 mb-2 md:mb-0">
        <Clock className="h-4 w-4" />
        <span>
          Contributors: {isLoading ? "..." : presaleData?.contributors.toLocaleString()}
        </span>
      </div>
      <div className="flex items-center gap-1">
        <ExternalLink className="h-4 w-4" />
        <a href="https://bscscan.com/address/0x1234567890123456789012345678901234567890" target="_blank" rel="noopener noreferrer" className="hover:underline">
          View Contract
        </a>
      </div>
    </div>
  );
};

export default PresaleFooter;
