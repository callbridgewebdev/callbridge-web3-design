
import { Link } from "react-router-dom";
import { Separator } from "@/components/ui/separator";
import { Facebook, Twitter, Youtube, MessageCircle } from "lucide-react";

const Footer = () => {
  const utilityLinks = [
    { name: "Airdrop", href: "/airdrop" },
    { name: "Presale", href: "/presale" },
    { name: "Staking", href: "/staking" },
    { name: "Swap", href: "/swap" },
    { name: "DEX Chart", href: "/chart" },
    { name: "Documentation", href: "/docs" },
    { name: "Community", href: "/community" },
  ];

  const legalLinks = [
    { name: "Privacy Policy", href: "/privacy" },
    { name: "Terms and Conditions", href: "/terms" },
    { name: "Presale Terms", href: "/presale-terms" },
    { name: "Cookie Policy", href: "/cookie-policy" },
    { name: "FAQ", href: "/faq" },
  ];

  const mainLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Pricing", href: "/pricing" },
    { name: "Portfolio", href: "/portfolio" },
    { name: "Quotation", href: "/quote" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <footer className="bg-muted/30 pt-16 pb-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center mb-4">
              <div className="h-8 w-8 rounded-lg bg-gradient-purple flex items-center justify-center mr-2">
                <span className="font-bold text-white text-lg">C</span>
              </div>
              <h3 className="font-bold text-lg">Callbridge</h3>
            </div>
            <p className="text-muted-foreground mb-4">
              Blockchain-powered web design services with native $CWD token on the Binance Smart Chain.
            </p>
            <div className="flex space-x-4">
              <a href="https://facebook.com" className="text-muted-foreground hover:text-primary" aria-label="Facebook">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="https://twitter.com" className="text-muted-foreground hover:text-primary" aria-label="Twitter">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="https://youtube.com" className="text-muted-foreground hover:text-primary" aria-label="Youtube">
                <Youtube className="w-5 h-5" />
              </a>
              <a href="https://telegram.org" className="text-muted-foreground hover:text-primary" aria-label="Telegram">
                <MessageCircle className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4">Main Links</h3>
            <ul className="space-y-2">
              {mainLinks.map((link, index) => (
                <li key={index}>
                  <Link to={link.href} className="text-muted-foreground hover:text-primary">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4">Utility</h3>
            <ul className="space-y-2">
              {utilityLinks.map((link, index) => (
                <li key={index}>
                  <Link to={link.href} className="text-muted-foreground hover:text-primary">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4">Legal</h3>
            <ul className="space-y-2">
              {legalLinks.map((link, index) => (
                <li key={index}>
                  <Link to={link.href} className="text-muted-foreground hover:text-primary">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <Separator className="my-6" />

        <div className="flex flex-col md:flex-row justify-between items-center text-sm">
          <p className="text-muted-foreground mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} Callbridge Web Design Services. All rights reserved.
          </p>
          <div className="flex items-center">
            <img 
              src="https://bscscan.com/images/brandassets/BscScan-logo-circle.png" 
              alt="BSC Scan" 
              className="h-5 w-5 mr-2"
            />
            <p className="text-muted-foreground">
              $CWD Token: <span className="font-medium">0x000...000</span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
