
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function PresaleTerms() {
  const presaleTermsContent = [
    {
      title: "Participation Eligibility",
      content: "To participate in the $CWD token presale, you must be of legal age in your jurisdiction and comply with all applicable laws and regulations."
    },
    {
      title: "Token Purchase",
      content: "The minimum and maximum purchase amounts will be clearly specified on the presale page. All purchases are final and non-refundable once confirmed on the blockchain."
    },
    {
      title: "Distribution",
      content: "Tokens will be distributed to the purchaser's wallet address immediately after the transaction is confirmed. Ensure you provide a valid BSC wallet address."
    },
    {
      title: "Risks",
      content: "Participating in token presales involves significant risk. You should carefully consider your financial situation and understanding of cryptocurrencies before participating."
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
