
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { FileText } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function Documentation() {
  const docs = [
    {
      title: "Getting Started",
      description: "Learn about $CWD token and how to get started",
      sections: ["What is $CWD?", "How to buy", "Wallet setup"]
    },
    {
      title: "Token Economics",
      description: "Understanding the tokenomics of $CWD",
      sections: ["Distribution", "Vesting schedule", "Use cases"]
    },
    {
      title: "Features & Benefits",
      description: "Explore the benefits of holding $CWD tokens",
      sections: ["Governance rights", "Staking rewards", "Service discounts"]
    },
    {
      title: "Technical Documentation",
      description: "Technical details and implementation guides",
      sections: ["Smart contract", "Security audit", "Integration guide"]
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <Badge variant="outline" className="mb-4">Documentation</Badge>
            <h1 className="text-4xl font-bold mb-4">$CWD Documentation</h1>
            <p className="text-muted-foreground">
              Comprehensive guides and documentation for the $CWD token ecosystem.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {docs.map((doc, index) => (
              <Card key={index}>
                <CardHeader>
                  <div className="flex items-center gap-2">
                    <FileText className="h-6 w-6 text-primary" />
                    <CardTitle>{doc.title}</CardTitle>
                  </div>
                  <CardDescription>{doc.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {doc.sections.map((section, idx) => (
                      <li key={idx} className="flex items-center gap-2">
                        <div className="h-2 w-2 rounded-full bg-primary"></div>
                        <span className="text-sm">{section}</span>
                      </li>
                    ))}
                  </ul>
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
