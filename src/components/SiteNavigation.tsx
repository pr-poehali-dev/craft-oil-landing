
import { Button } from "@/components/ui/button";
import { useState } from "react";

interface SiteNavigationProps {
  activeSection: string;
  setActiveSection: (section: string) => void;
}

const SiteNavigation = ({ activeSection, setActiveSection }: SiteNavigationProps) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-cream-light/95 shadow-md py-3">
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
        <a href="#" className="flex items-center">
          <span className="font-bold text-2xl md:text-3xl text-olive-dark">МаслоДар</span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          <button 
            onClick={() => setActiveSection("hero")} 
            className={`text-foreground transition-colors ${activeSection === "hero" ? "text-butter-dark font-medium" : ""}`}
          >
            Главная
          </button>
          <button 
            onClick={() => setActiveSection("about")} 
            className={`text-foreground transition-colors ${activeSection === "about" ? "text-butter-dark font-medium" : ""}`}
          >
            О нас
          </button>
          <button 
            onClick={() => setActiveSection("products")} 
            className={`text-foreground transition-colors ${activeSection === "products" ? "text-butter-dark font-medium" : ""}`}
          >
            Продукция
          </button>
          <button 
            onClick={() => setActiveSection("contact")} 
            className={`text-foreground transition-colors ${activeSection === "contact" ? "text-butter-dark font-medium" : ""}`}
          >
            Контакты
          </button>
          <Button className="bg-butter hover:bg-butter-dark text-foreground">
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
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="3" y1="12" x2="21" y2="12"></line>
            <line x1="3" y1="6" x2="21" y2="6"></line>
            <line x1="3" y1="18" x2="21" y2="18"></line>
          </svg>
        </Button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-cream-light/95 border-t border-border">
          <div className="container mx-auto px-4 py-4 flex flex-col space-y-3">
            <button 
              onClick={() => {
                setActiveSection("hero");
                setMobileMenuOpen(false);
              }} 
              className={`text-foreground transition-colors text-left py-2 ${activeSection === "hero" ? "text-butter-dark font-medium" : ""}`}
            >
              Главная
            </button>
            <button 
              onClick={() => {
                setActiveSection("about");
                setMobileMenuOpen(false);
              }} 
              className={`text-foreground transition-colors text-left py-2 ${activeSection === "about" ? "text-butter-dark font-medium" : ""}`}
            >
              О нас
            </button>
            <button 
              onClick={() => {
                setActiveSection("products");
                setMobileMenuOpen(false);
              }} 
              className={`text-foreground transition-colors text-left py-2 ${activeSection === "products" ? "text-butter-dark font-medium" : ""}`}
            >
              Продукция
            </button>
            <button 
              onClick={() => {
                setActiveSection("contact");
                setMobileMenuOpen(false);
              }} 
              className={`text-foreground transition-colors text-left py-2 ${activeSection === "contact" ? "text-butter-dark font-medium" : ""}`}
            >
              Контакты
            </button>
            <Button className="w-full bg-butter hover:bg-butter-dark text-foreground">
              Заказать
            </Button>
          </div>
        </div>
      )}
    </header>
  );
};

export default SiteNavigation;
