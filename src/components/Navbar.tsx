
import { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Menu, X, Wallet } from "lucide-react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  
  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Pricing", href: "/pricing" },
    { name: "Portfolio", href: "/portfolio" },
    { name: "Quotation", href: "/quote" },
    { name: "FAQ", href: "/faq" },
    { name: "Contact", href: "/contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav 
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled ? "py-2 bg-white/80 dark:bg-web3-dark/80 shadow-md backdrop-blur-md" : "py-4 bg-transparent"
      }`}
    >
      <div className="container mx-auto flex items-center justify-between px-4">
        {/* Logo */}
        <Link to="/" className="flex items-center">
          <div className="relative">
            <div className="h-10 w-10 rounded-lg bg-gradient-purple flex items-center justify-center animate-pulse-glow">
              <span className="font-bold text-white text-xl">C</span>
            </div>
          </div>
          <div className="ml-2">
            <h1 className="font-bold text-xl">Callbridge</h1>
            <p className="text-xs -mt-1 text-muted-foreground">Web Design Services</p>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-1">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.href}
              className="px-3 py-2 text-sm font-medium rounded-md hover:bg-muted transition-colors"
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* Connect Wallet Button */}
        <div className="hidden md:block">
          <Button variant="default" className="wallet-button">
            <Wallet className="w-4 h-4 mr-1" />
            Connect Wallet
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden bg-background border-t dark:border-gray-800">
          <div className="container mx-auto px-4 py-2 space-y-1">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.href}
                className="block px-3 py-2 text-base font-medium rounded-md hover:bg-muted transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            <div className="pt-2">
              <Button variant="default" className="wallet-button w-full">
                <Wallet className="w-4 h-4 mr-1" />
                Connect Wallet
              </Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
