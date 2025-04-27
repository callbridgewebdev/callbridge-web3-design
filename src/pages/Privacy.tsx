
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function Privacy() {
  const privacyContent = [
    {
      title: "Information Collection",
      content: "We collect information that you provide directly to us, including when you create an account, make a purchase, or contact us for support. This may include your name, email address, wallet address, and transaction data."
    },
    {
      title: "Use of Information",
      content: "We use the information we collect to provide, maintain, and improve our services, process your transactions, send you technical notices and support messages, and communicate with you about products, services, and events."
    },
    {
      title: "Data Security",
      content: "We implement appropriate technical and organizational security measures to protect your personal information. However, no security system is impenetrable and we cannot guarantee the security of our systems 100%."
    },
    {
      title: "Token Transactions",
      content: "When you interact with our smart contracts or perform token transactions, this information is recorded on the blockchain and may be publicly visible."
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <Badge variant="outline" className="mb-4">Legal</Badge>
            <h1 className="text-4xl font-bold mb-4">Privacy Policy</h1>
            <p className="text-muted-foreground">
              Learn how we collect, use, and protect your information.
            </p>
          </div>

          <div className="max-w-3xl mx-auto space-y-6">
            {privacyContent.map((section, index) => (
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
