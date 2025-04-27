
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function CookiePolicy() {
  const cookiePolicyContent = [
    {
      title: "What Are Cookies",
      content: "Cookies are small text files that are stored on your device when you visit our website. They help us provide you with a better experience by remembering your preferences and actions."
    },
    {
      title: "How We Use Cookies",
      content: "We use cookies to understand how you interact with our website, authenticate users, remember your preferences, and provide personalized content and advertisements."
    },
    {
      title: "Types of Cookies",
      content: "We use both session cookies (temporary) and persistent cookies (remain until deleted). Some cookies are essential for the website to function, while others help us improve our services."
    },
    {
      title: "Managing Cookies",
      content: "You can control and/or delete cookies as you wish. You can delete all cookies that are already on your computer and set most browsers to prevent them from being placed."
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <Badge variant="outline" className="mb-4">Legal</Badge>
            <h1 className="text-4xl font-bold mb-4">Cookie Policy</h1>
            <p className="text-muted-foreground">
              Information about how we use cookies on our website.
            </p>
          </div>

          <div className="max-w-3xl mx-auto space-y-6">
            {cookiePolicyContent.map((section, index) => (
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
