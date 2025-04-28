
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Coins, GanttChart, LineChart, Gift, Percent, ArrowDownToLine, Users, RefreshCw, Pool } from "lucide-react";
import { Link } from "react-router-dom";

const TokenUtility = () => {
  const utilityLinks = [
    {
      title: "Airdrop",
      description: "Claim free $CWD tokens as rewards for early adopters and community members.",
      details: [
        "Claim up to 1000 $CWD tokens",
        "Complete social tasks to earn more",
        "Weekly rewards for active members",
        "Referral bonuses available"
      ],
      icon: <Gift className="h-6 w-6" />,
      href: "/airdrop",
      color: "bg-pink-100 text-pink-600 dark:bg-pink-900/20 dark:text-pink-400"
    },
    {
      title: "Presale",
      description: "Participate in our token presale with special bonuses for early investors.",
      details: [
        "Minimum purchase: 0.1 BNB",
        "15% bonus in first phase",
        "Vesting period: 6 months",
        "Whitelist spots available"
      ],
      icon: <ArrowDownToLine className="h-6 w-6" />,
      href: "/presale",
      color: "bg-blue-100 text-blue-600 dark:bg-blue-900/20 dark:text-blue-400"
    },
    {
      title: "Staking",
      description: "Stake your $CWD tokens to earn passive income and participate in governance.",
      details: [
        "Up to 25% APY rewards",
        "Lock periods: 3-12 months",
        "Governance voting rights",
        "Compound rewards option"
      ],
      icon: <Percent className="h-6 w-6" />,
      href: "/staking",
      color: "bg-green-100 text-green-600 dark:bg-green-900/20 dark:text-green-400"
    },
    {
      title: "Swap",
      description: "Easily exchange $CWD tokens with other cryptocurrencies on our platform.",
      details: [
        "Direct BSC token swaps",
        "Low 0.3% swap fee",
        "Multiple token pairs",
        "Real-time price updates"
      ],
      icon: <RefreshCw className="h-6 w-6" />,
      href: "/swap",
      color: "bg-purple-100 text-purple-600 dark:bg-purple-900/20 dark:text-purple-400"
    },
    {
      title: "Pool",
      description: "Provide liquidity and earn rewards from trading fees and incentives.",
      details: [
        "Earn trading fees from pools",
        "Multiple pool pairs available",
        "Automated rewards distribution",
        "Incentivized liquidity mining"
      ],
      icon: <Pool className="h-6 w-6" />,
      href: "/pool",
      color: "bg-indigo-100 text-indigo-600 dark:bg-indigo-900/20 dark:text-indigo-400"
    },
    {
      title: "DEX Chart",
      description: "View real-time charts and trading data for the $CWD token.",
      details: [
        "Live price tracking",
        "Trading volume analytics",
        "Market cap information",
        "Liquidity pool data"
      ],
      icon: <LineChart className="h-6 w-6" />,
      href: "/chart",
      color: "bg-amber-100 text-amber-600 dark:bg-amber-900/20 dark:text-amber-400"
    },
    {
      title: "Documentation",
      description: "Detailed guides and documentation for using the $CWD token ecosystem.",
      details: [
        "Technical whitepaper",
        "API documentation",
        "Integration guides",
        "Smart contract details"
      ],
      icon: <GanttChart className="h-6 w-6" />,
      href: "/docs",
      color: "bg-slate-100 text-slate-600 dark:bg-slate-900/20 dark:text-slate-400"
    },
    {
      title: "Community",
      description: "Join our community of designers, developers, and token holders.",
      details: [
        "Active Discord server",
        "Governance forum",
        "Developer resources",
        "Community events"
      ],
      icon: <Users className="h-6 w-6" />,
      href: "/community",
      color: "bg-cyan-100 text-cyan-600 dark:bg-cyan-900/20 dark:text-cyan-400"
    }
  ];

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <Badge variant="outline" className="mb-4 border-primary/20 bg-primary/5">
            Powered by $CWD Token
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Token Utility</h2>
          <p className="text-muted-foreground">
            Callbridge Web Design Services operates on the Binance Smart Chain using our native $CWD token—join our community, explore our presale, stake your tokens, and help shape the future of decentralized web design.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          <div className="col-span-full sm:col-span-2 lg:row-span-2 lg:col-span-2">
            <Card className="web3-card h-full">
              <CardHeader className="border-b">
                <div className="flex items-center gap-3 mb-2">
                  <Coins className="h-6 w-6 text-web3-purple" />
                  <Badge className="bg-gradient-purple hover:bg-gradient-purple">BSC Token</Badge>
                </div>
                <CardTitle className="text-2xl">$CWD Token</CardTitle>
                <CardDescription className="text-base">
                  The native utility token for Callbridge Web Design Services
                </CardDescription>
              </CardHeader>
              <CardContent className="pt-6 space-y-4">
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="bg-muted/50 rounded-lg p-4">
                    <p className="text-sm text-muted-foreground">Total Supply</p>
                    <p className="text-xl font-bold">1,000,000,000</p>
                  </div>
                  <div className="bg-muted/50 rounded-lg p-4">
                    <p className="text-sm text-muted-foreground">Decimals</p>
                    <p className="text-xl font-bold">18</p>
                  </div>
                </div>
                <p className="text-muted-foreground">
                  $CWD is more than just a payment method—it's the key to unlocking special perks, discounts, and governance rights within the Callbridge ecosystem.
                </p>
                <p className="text-muted-foreground">
                  Token holders can participate in platform decisions, receive discounts on services, and earn rewards through various utility programs.
                </p>
              </CardContent>
            </Card>
          </div>

          {utilityLinks.map((link, index) => (
            <Card key={index} className="web3-card hover:translate-y-[-5px] transition-all duration-300">
              <Link to={link.href}>
                <CardHeader>
                  <div className={`mb-4 inline-flex p-3 rounded-lg ${link.color}`}>
                    {link.icon}
                  </div>
                  <CardTitle>{link.title}</CardTitle>
                  <CardDescription className="text-base">{link.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    {link.details.map((detail, idx) => (
                      <li key={idx} className="flex items-center">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary/60 mr-2" />
                        {detail}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Link>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TokenUtility;
