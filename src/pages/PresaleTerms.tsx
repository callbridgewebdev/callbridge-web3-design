
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { AlertTriangle } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function PresaleTerms() {
  const presaleTermsContent = [
    {
      title: "Participation Eligibility",
      content: "To participate in the $CWD token presale, you must be of legal age in your jurisdiction and comply with all applicable laws and regulations. Residents of countries where token sales are restricted may not be eligible to participate. You are solely responsible for ensuring your compliance with local laws."
    },
    {
      title: "Token Purchase",
      content: "The minimum purchase amount is 0.1 BNB and the maximum is 20 BNB per wallet address. All purchases are final and non-refundable once confirmed on the blockchain. The price is fixed at 10,000 $CWD per 1 BNB. Early participants will receive a 15% bonus during the first phase of the presale."
    },
    {
      title: "Distribution",
      content: "Tokens will be distributed to the purchaser's wallet address immediately after the transaction is confirmed. Ensure you provide a valid BSC wallet address that you control (not an exchange wallet). Tokens purchased during the presale will be subject to a vesting period of 6 months with 25% unlocked at TGE and 25% unlocked every 2 months thereafter."
    },
    {
      title: "Risks",
      content: "Participating in token presales involves significant risk, including but not limited to regulatory uncertainty, market volatility, technical vulnerabilities, and project execution risks. You should carefully consider your financial situation and understanding of cryptocurrencies before participating. Never invest funds that you cannot afford to lose."
    },
    {
      title: "KYC/AML Requirements",
      content: "Participants may be required to complete Know Your Customer (KYC) and Anti-Money Laundering (AML) procedures before claiming tokens. Failure to complete required KYC/AML procedures may result in disqualification and loss of allocated tokens."
    },
    {
      title: "Privacy Policy",
      content: "All personal information collected during the presale will be handled in accordance with our Privacy Policy. By participating in the presale, you consent to the collection and processing of your personal data as described in our Privacy Policy."
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <Badge variant="outline" className="mb-4">Legal</Badge>
            <h1 className="text-4xl font-bold mb-4">Presale Terms</h1>
            <p className="text-muted-foreground">
              Terms and conditions for participating in the $CWD token presale.
            </p>
          </div>

          <Alert className="mb-8 max-w-3xl mx-auto border-amber-500 bg-amber-500/10">
            <AlertTriangle className="h-4 w-4 text-amber-500" />
            <AlertTitle>Important Notice</AlertTitle>
            <AlertDescription>
              This document contains the complete terms and conditions governing your participation in the $CWD token presale.
              Please read carefully before participating. By participating in the presale, you agree to be bound by these terms.
            </AlertDescription>
          </Alert>

          <div className="max-w-3xl mx-auto space-y-6">
            {presaleTermsContent.map((section, index) => (
              <Card key={index} className="p-6">
                <CardContent>
                  <h2 className="text-xl font-semibold mb-4">{section.title}</h2>
                  <p className="text-muted-foreground">{section.content}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
