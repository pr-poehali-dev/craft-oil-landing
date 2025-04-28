import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";
import { Menu } from "lucide-react";

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

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-cream-light/95 shadow-md py-2" : "bg-transparent py-4"
      }`}
    >
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
        <a href="#" className="flex items-center">
          <span className="font-buttermilk text-2xl md:text-3xl text-olive-dark">МаслоДар</span>
        </a>

        {/* Desktop Menu */}
        <nav className="hidden md:flex items-center space-x-6">
          <a href="#about" className="text-foreground hover:text-primary transition-colors">О нас</a>
          <a href="#products" className="text-foreground hover:text-primary transition-colors">Наша продукция</a>
          <a href="#process" className="text-foreground hover:text-primary transition-colors">Производство</a>
          <a href="#contact" className="text-foreground hover:text-primary transition-colors">Контакты</a>
          <Button variant="default" className="bg-butter hover:bg-butter-dark text-foreground">
            Заказать
          </Button>
        </nav>

        {/* Mobile Menu Button */}
        <Button 
          variant="ghost" 
          size="icon" 
          className="md:hidden"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          <Menu className="h-6 w-6" />
        </Button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-cream-light/95 border-t border-border">
          <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
            <a href="#about" className="text-foreground hover:text-primary transition-colors py-2">О нас</a>
            <a href="#products" className="text-foreground hover:text-primary transition-colors py-2">Наша продукция</a>
            <a href="#process" className="text-foreground hover:text-primary transition-colors py-2">Производство</a>
            <a href="#contact" className="text-foreground hover:text-primary transition-colors py-2">Контакты</a>
            <Button variant="default" className="bg-butter hover:bg-butter-dark text-foreground w-full">
              Заказать
            </Button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;