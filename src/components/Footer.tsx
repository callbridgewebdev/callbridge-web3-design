
import { Link } from "react-router-dom";
import { Separator } from "@/components/ui/separator";

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
              <a href="https://twitter.com" className="text-muted-foreground hover:text-primary" aria-label="Twitter">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path></svg>
              </a>
              <a href="https://telegram.org" className="text-muted-foreground hover:text-primary" aria-label="Telegram">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5"><path d="M21.5 15a2.5 2.5 0 0 1-2.5 2.5H5a2.5 2.5 0 0 1-2.5-2.5V9a2.5 2.5 0 0 1 2.5-2.5h14a2.5 2.5 0 0 1 2.5 2.5v6Z"></path><path d="m3.5 9 9 6 9-6"></path><path d="m3.5 15 6.75-4.5"></path><path d="m21.5 15-6.75-4.5"></path></svg>
              </a>
              <a href="https://discord.com" className="text-muted-foreground hover:text-primary" aria-label="Discord">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5"><circle cx="9" cy="12" r="1"></circle><circle cx="15" cy="12" r="1"></circle><path d="M7.5 7.2c.7-.5 1.4-.7 2.2-.7h4.7c1 0 1.8.5 2.6 1a5 5 0 0 1 1.5 4.3 7.1 7.1 0 0 1-2 4.2c-3.7 3.4-9.5 1.7-13.3-1.4"></path><path d="M15.7 11.1c.4.5.4 1.2.2 1.8-.3.7-1 1.1-1.8 1.1H8.8c-1 0-1.7-.6-2-1.4a2 2 0 0 1 .5-2.2"></path><path d="M8.8 15.2h1.8c2.1 0 4-1.3 4.7-3.2.5-1.6.2-3.2-.7-4.5a5 5 0 0 0-4-2.1H8.8a4.3 4.3 0 0 0-4 2.6 4 4 0 0 0 .2 3.3 4 4 0 0 0 3.2 2.4"></path><path d="m7 16.8-.7 1.9a.2.2 0 0 0 .3.2l1.7-1.3"></path><path d="m16.8 16.8.7 1.9a.2.2 0 0 1-.3.2l-1.7-1.3"></path></svg>
              </a>
              <a href="https://medium.com" className="text-muted-foreground hover:text-primary" aria-label="Medium">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5"><rect width="18" height="18" x="3" y="3" rx="2"></rect><circle cx="9" cy="9" r="1"></circle><path d="M7 15h2"></path><path d="M15 7v2"></path><path d="M7 13h6"></path><path d="M15 11h2"></path><path d="M11 15h6"></path></svg>
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
