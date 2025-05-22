import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { MessageCircle, Menu, X, Coins, Wallet } from "lucide-react";
import { Link } from "react-router-dom";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleOpenTelegram = () => {
    window.open("https://t.me/SmashMoleBot", "_blank");
  };

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled
          ? "bg-[#945929]/70 backdrop-blur-md shadow-md py-2"
          : "bg-transparent py-4"
      )}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-5">
          <img src="/imgs/logo.png" alt="logo" className="w-24"/>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <a
            href="#tokenomics"
            className="font-medium hover:text-game-blue transition-colors"
          >
            Tokenomics
          </a>
          <a
            href="#vesting"
            className="font-medium hover:text-game-blue transition-colors"
          >
            Vesting
          </a>
          <a
            href="#team"
            className="font-medium hover:text-game-blue transition-colors"
          >
            Team
          </a>
          <a
            href="#partners"
            className="font-medium hover:text-game-blue transition-colors"
          >
            Partners
          </a>
          <a
            href="#features"
            className="font-medium hover:text-game-blue transition-colors"
          >
            Features
          </a>
          <Button
            onClick={handleOpenTelegram}
            className="flex items-center bg-game-blue hover:bg-game-blue/80"
          >
            <Wallet className="mr-2 h-5 w-5" /> Play & Earn
          </Button>
        </nav>

        {/* Mobile menu button */}
        <div className="md:hidden">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X /> : <Menu />}
          </Button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white shadow-lg py-4 px-4">
          <nav className="flex flex-col space-y-4">
            <a
              href="#tokenomics"
              className="font-medium hover:text-game-blue transition-colors py-2 border-b"
              onClick={() => setMobileMenuOpen(false)}
            >
              Tokenomics
            </a>
            <a
              href="#vesting"
              className="font-medium hover:text-game-blue transition-colors py-2 border-b"
              onClick={() => setMobileMenuOpen(false)}
            >
              Vesting
            </a>
            <a
              href="#team"
              className="font-medium hover:text-game-blue transition-colors py-2 border-b"
              onClick={() => setMobileMenuOpen(false)}
            >
              Team
            </a>
            <a
              href="#partners"
              className="font-medium hover:text-game-blue transition-colors py-2 border-b"
              onClick={() => setMobileMenuOpen(false)}
            >
              Partners
            </a>
            <a
              href="#features"
              className="font-medium hover:text-game-blue transition-colors py-2 border-b"
              onClick={() => setMobileMenuOpen(false)}
            >
              Features
            </a>
            <Button
              onClick={() => {
                handleOpenTelegram();
                setMobileMenuOpen(false);
              }}
              className="flex items-center bg-game-blue hover:bg-game-blue/80 w-full justify-center"
            >
              <Wallet className="mr-2 h-5 w-5" /> Play & Earn
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
