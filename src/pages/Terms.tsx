
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function Terms() {
  const termsContent = [
    {
      title: "Acceptance of Terms",
      content: "By accessing and using our website and services, you agree to be bound by these Terms and Conditions. If you do not agree with any part of these terms, you may not use our services."
    },
    {
      title: "Service Description",
      content: "We provide blockchain-powered web design services and operate the $CWD token on the Binance Smart Chain. Our services include website development, smart contract integration, and token utility features."
    },
    {
      title: "User Obligations",
      content: "You agree to use our services only for lawful purposes and in accordance with these terms. You are responsible for maintaining the security of your wallet and credentials."
    },
    {
      title: "Intellectual Property",
      content: "All content on this website, including text, graphics, logos, and software, is our property and is protected by intellectual property laws."
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <Badge variant="outline" className="mb-4">Legal</Badge>
            <h1 className="text-4xl font-bold mb-4">Terms and Conditions</h1>
            <p className="text-muted-foreground">
              Please read these terms carefully before using our services.
            </p>
          </div>

          <div className="max-w-3xl mx-auto space-y-6">
            {termsContent.map((section, index) => (
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
