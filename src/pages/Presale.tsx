
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowDownToLine, RefreshCw } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

import PresaleHeader from "@/components/presale/PresaleHeader";
import PresaleProgress from "@/components/presale/PresaleProgress";
import PresaleStats from "@/components/presale/PresaleStats";
import PriceComparison from "@/components/presale/PriceComparison";
import PurchaseForm from "@/components/presale/PurchaseForm";
import PresaleFooter from "@/components/presale/PresaleFooter";
import { usePresale } from "@/hooks/usePresale";
import { useState } from "react";

export default function Presale() {
  const [purchaseAmount, setPurchaseAmount] = useState<string>("");
  const { presaleData, isLoading, error, refetch, formatTimeRemaining } = usePresale();

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <PresaleHeader 
            isLoading={isLoading} 
            presaleData={presaleData} 
            error={error}
            refetch={refetch}
            formatTimeRemaining={formatTimeRemaining}
          />

          <Card className="max-w-2xl mx-auto">
            <CardHeader>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <ArrowDownToLine className="h-6 w-6 text-primary" />
                  <CardTitle>
                    {isLoading 
                      ? <div className="h-5 w-36 bg-muted animate-pulse rounded" /> 
                      : `Phase ${presaleData?.phase || 1} Presale`
                    }
                  </CardTitle>
                </div>
                <Button 
                  variant="ghost" 
                  size="sm" 
                  onClick={() => refetch()}
                  disabled={isLoading}
                >
                  <RefreshCw className="h-4 w-4" />
                </Button>
              </div>
              <CardDescription>
                {isLoading 
                  ? <div className="h-4 w-48 bg-muted animate-pulse rounded" /> 
                  : `${presaleData?.bonus || 0}% bonus for early investors`
                }
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <PresaleProgress
                isLoading={isLoading}
                presaleData={presaleData}
                error={error}
                refetch={refetch}
              />

              <PresaleStats
                isLoading={isLoading}
                presaleData={presaleData}
                error={error}
                refetch={refetch}
                purchaseAmount={purchaseAmount}
              />

              <PriceComparison
                isLoading={isLoading}
                presaleData={presaleData}
                error={error}
              />

              <PurchaseForm
                presaleData={presaleData}
                error={error}
                refetch={refetch}
              />

              <PresaleFooter
                isLoading={isLoading}
                presaleData={presaleData}
              />
            </CardContent>
          </Card>
        </div>
      </main>
      <Footer />
    </div>
  );
}
