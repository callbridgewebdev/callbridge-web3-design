
import { CalendarDays, Target, Rocket, Globe, Lightbulb } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const roadmapData = [
  {
    quarter: "Q3 2025",
    title: "Foundation & Launch",
    status: "upcoming",
    icon: Rocket,
    items: [
      "Core Platform Development",
      "Smart Contract Deployment", 
      "Community Building Initiative",
      "Initial Token Distribution"
    ]
  },
  {
    quarter: "Q4 2025",
    title: "Core Features",
    status: "planned",
    icon: Target,
    items: [
      "DEX Integration",
      "Staking Mechanism Launch",
      "Advanced Trading Features",
      "Partnership Agreements"
    ]
  },
  {
    quarter: "Q1 2026",
    title: "Ecosystem Expansion",
    status: "planned",
    icon: Globe,
    items: [
      "Cross-chain Compatibility",
      "NFT Marketplace Integration",
      "Mobile Application Beta",
      "Enhanced Security Protocols"
    ]
  },
  {
    quarter: "Q2 2026",
    title: "Global Growth",
    status: "vision",
    icon: Lightbulb,
    items: [
      "International Market Entry",
      "Enterprise Solutions",
      "Advanced Analytics Dashboard",
      "Multi-language Support"
    ]
  },
  {
    quarter: "Q3 2026",
    title: "Innovation Hub",
    status: "vision",
    icon: Target,
    items: [
      "DAO Governance Implementation",
      "AI-Powered Features",
      "Metaverse Integration",
      "Research & Development Lab"
    ]
  }
];

const getStatusColor = (status: string) => {
  switch (status) {
    case "upcoming":
      return "bg-primary text-primary-foreground";
    case "planned":
      return "bg-blue-500 text-white";
    case "vision":
      return "bg-purple-500 text-white";
    default:
      return "bg-muted text-muted-foreground";
  }
};

const Roadmap = () => {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4 text-sm font-medium">
            Strategic Planning
          </Badge>
          <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent">
            Development Roadmap
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Our comprehensive roadmap outlines key milestones and strategic initiatives 
            for platform growth and ecosystem development over the next year.
          </p>
        </div>
        
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-primary via-blue-500 to-purple-500 hidden lg:block" />
          
          <div className="space-y-12">
            {roadmapData.map((phase, index) => {
              const IconComponent = phase.icon;
              const isEven = index % 2 === 0;
              
              return (
                <div key={phase.quarter} className={`flex items-center ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'} flex-col gap-8`}>
                  {/* Timeline dot */}
                  <div className="hidden lg:flex absolute left-1/2 transform -translate-x-1/2 w-12 h-12 bg-background border-4 border-primary rounded-full items-center justify-center z-10">
                    <IconComponent className="w-5 h-5 text-primary" />
                  </div>
                  
                  {/* Content card */}
                  <div className={`w-full lg:w-5/12 ${isEven ? 'lg:pr-16' : 'lg:pl-16'}`}>
                    <Card className="group hover:shadow-xl transition-all duration-300 border-2 hover:border-primary/20">
                      <CardContent className="p-8">
                        <div className="flex items-center justify-between mb-6">
                          <div className="flex items-center gap-3">
                            <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center lg:hidden">
                              <IconComponent className="w-5 h-5 text-primary" />
                            </div>
                            <div>
                              <Badge className={`${getStatusColor(phase.status)} mb-2`}>
                                {phase.quarter}
                              </Badge>
                              <h3 className="text-2xl font-bold text-foreground">
                                {phase.title}
                              </h3>
                            </div>
                          </div>
                        </div>
                        
                        <div className="space-y-4">
                          {phase.items.map((item, itemIndex) => (
                            <div key={itemIndex} className="flex items-start gap-3 group/item">
                              <div className="w-2 h-2 rounded-full bg-primary/60 mt-2 group-hover/item:bg-primary transition-colors" />
                              <span className="text-muted-foreground group-hover/item:text-foreground transition-colors font-medium">
                                {item}
                              </span>
                            </div>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                  
                  {/* Spacer for alternating layout */}
                  <div className="hidden lg:block w-5/12" />
                </div>
              );
            })}
          </div>
        </div>
        
        <div className="text-center mt-16">
          <p className="text-sm text-muted-foreground">
            * Timeline is subject to market conditions and technical requirements
          </p>
        </div>
      </div>
    </section>
  );
};

export default Roadmap;
