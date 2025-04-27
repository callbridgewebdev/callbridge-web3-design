
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function FAQ() {
  const faqs = [
    {
      category: "General",
      items: [
        {
          question: "What is Callbridge Web Design Services?",
          answer: "Callbridge is a blockchain-powered web design service that combines traditional web development with blockchain technology, offering innovative solutions through our native $CWD token.",
        },
        {
          question: "How does the $CWD token work?",
          answer: "The $CWD token is our native utility token that provides access to premium features, discounts on services, and participation in our governance system.",
        },
      ],
    },
    {
      category: "Services",
      items: [
        {
          question: "What web design services do you offer?",
          answer: "We offer comprehensive web design services including UI/UX design, frontend development, blockchain integration, smart contract development, and ongoing maintenance.",
        },
        {
          question: "How long does a typical project take?",
          answer: "Project timelines vary based on complexity. A basic website might take 2-4 weeks, while more complex blockchain-integrated platforms can take 2-3 months.",
        },
      ],
    },
    {
      category: "Pricing",
      items: [
        {
          question: "How much do your services cost?",
          answer: "Our pricing varies based on project requirements. We offer flexible packages starting from $5,000, with discounts available for $CWD token holders.",
        },
        {
          question: "Do you offer maintenance packages?",
          answer: "Yes, we offer ongoing maintenance packages that include updates, security patches, and technical support. These can be paid in $CWD tokens for additional benefits.",
        },
      ],
    },
    {
      category: "Technical",
      items: [
        {
          question: "Which blockchain networks do you support?",
          answer: "We primarily work with the Binance Smart Chain (BSC) for our $CWD token, but we can integrate with other major networks like Ethereum, Polygon, and Solana.",
        },
        {
          question: "Can you integrate existing websites with blockchain?",
          answer: "Yes, we can upgrade existing websites to include blockchain functionality, including wallet integration, token systems, and smart contracts.",
        },
      ],
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <Badge variant="outline" className="mb-4">FAQ</Badge>
            <h1 className="text-4xl font-bold mb-4">Frequently Asked Questions</h1>
            <p className="text-muted-foreground">
              Find answers to common questions about our web design services and the $CWD token ecosystem.
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            {faqs.map((section, index) => (
              <Card key={index} className="mb-6 p-6">
                <h2 className="text-xl font-semibold mb-4">{section.category}</h2>
                <Accordion type="single" collapsible className="w-full">
                  {section.items.map((item, itemIndex) => (
                    <AccordionItem key={itemIndex} value={`item-${index}-${itemIndex}`}>
                      <AccordionTrigger>{item.question}</AccordionTrigger>
                      <AccordionContent>{item.answer}</AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </Card>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
