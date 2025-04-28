
import { CalendarDays } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const roadmapData = [
  {
    quarter: "Q2 2025",
    title: "Platform Launch",
    items: ["Initial DEX Launch", "Token Launch", "Community Building"]
  },
  {
    quarter: "Q3 2025",
    title: "Ecosystem Growth",
    items: ["Staking Platform", "Token Utility Expansion", "Strategic Partnerships"]
  },
  {
    quarter: "Q4 2025",
    title: "Platform Evolution",
    items: ["Advanced Trading Features", "Cross-chain Integration", "NFT Marketplace"]
  },
  {
    quarter: "Q1 2026",
    title: "Global Expansion",
    items: ["International Markets", "Mobile App Launch", "Enterprise Solutions"]
  },
  {
    quarter: "Q2 2026",
    title: "Future Innovation",
    items: ["DAO Governance", "DeFi 2.0 Features", "Metaverse Integration"]
  }
];

const Roadmap = () => {
  return (
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Development Roadmap</h2>
          <p className="text-muted-foreground">Our strategic plan for growth and innovation</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {roadmapData.map((phase, index) => (
            <Card key={phase.quarter} className="relative overflow-hidden group hover:shadow-lg transition-shadow duration-300">
              <div className="absolute top-0 left-0 w-1 h-full bg-gradient-purple" />
              <CardContent className="p-6">
                <div className="flex items-center gap-2 mb-4 text-primary">
                  <CalendarDays className="h-5 w-5" />
                  <span className="font-semibold">{phase.quarter}</span>
                </div>
                <h3 className="text-xl font-semibold mb-3">{phase.title}</h3>
                <ul className="space-y-2">
                  {phase.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-center gap-2 text-muted-foreground">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary/60" />
                      {item}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Roadmap;
