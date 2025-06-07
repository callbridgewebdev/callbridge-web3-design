
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
    <section className="py-12 md:py-20 bg-muted/30">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-12 md:mb-16">
          <Badge variant="outline" className="mb-4 text-sm font-medium">
            Strategic Planning
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 md:mb-6 bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent">
            Development Roadmap
          </h2>
          <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto px-4">
            Our comprehensive roadmap outlines key milestones and strategic initiatives 
            for platform growth and ecosystem development over the next year.
          </p>
        </div>
        
        <div className="relative max-w-4xl mx-auto">
          {/* Timeline line - visible on all devices */}
          <div className="absolute left-6 md:left-1/2 md:transform md:-translate-x-1/2 w-0.5 md:w-1 h-full bg-gradient-to-b from-primary via-blue-500 to-purple-500 z-0" />
          
          <div className="space-y-8 md:space-y-12">
            {roadmapData.map((phase, index) => {
              const IconComponent = phase.icon;
              const isEven = index % 2 === 0;
              
              return (
                <div key={phase.quarter} className={`relative flex ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'} flex-col md:items-center gap-6 md:gap-8`}>
                  {/* Timeline dot */}
                  <div className="absolute left-3.5 md:left-1/2 md:transform md:-translate-x-1/2 w-5 h-5 md:w-12 md:h-12 bg-background border-2 md:border-4 border-primary rounded-full flex items-center justify-center z-10">
                    <IconComponent className="w-3 h-3 md:w-5 md:h-5 text-primary" />
                  </div>
                  
                  {/* Content card */}
                  <div className={`w-full md:w-5/12 ml-12 md:ml-0 ${isEven ? 'md:pr-8 lg:pr-16' : 'md:pl-8 lg:pl-16'}`}>
                    <Card className="group hover:shadow-xl transition-all duration-300 border-2 hover:border-primary/20">
                      <CardContent className="p-6 md:p-8">
                        <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-4 md:mb-6">
                          <div className="flex items-center gap-3 mb-3 sm:mb-0">
                            <div className="w-8 h-8 md:w-10 md:h-10 rounded-lg bg-primary/10 flex items-center justify-center md:hidden">
                              <IconComponent className="w-4 h-4 md:w-5 md:h-5 text-primary" />
                            </div>
                            <div>
                              <Badge className={`${getStatusColor(phase.status)} mb-2 text-xs md:text-sm`}>
                                {phase.quarter}
                              </Badge>
                              <h3 className="text-lg md:text-2xl font-bold text-foreground">
                                {phase.title}
                              </h3>
                            </div>
                          </div>
                        </div>
                        
                        <div className="space-y-3 md:space-y-4">
                          {phase.items.map((item, itemIndex) => (
                            <div key={itemIndex} className="flex items-start gap-3 group/item">
                              <div className="w-1.5 h-1.5 md:w-2 md:h-2 rounded-full bg-primary/60 mt-2 group-hover/item:bg-primary transition-colors flex-shrink-0" />
                              <span className="text-sm md:text-base text-muted-foreground group-hover/item:text-foreground transition-colors font-medium">
                                {item}
                              </span>
                            </div>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                  
                  {/* Spacer for alternating layout on desktop */}
                  <div className="hidden md:block w-5/12" />
                </div>
              );
            })}
          </div>
        </div>
        
        <div className="text-center mt-12 md:mt-16">
          <p className="text-xs md:text-sm text-muted-foreground px-4">
            * Timeline is subject to market conditions and technical requirements
          </p>
        </div>
      </div>
    </section>
  );
};

export default Roadmap;
