
import { useState } from "react";
import SiteNavigation from "@/components/SiteNavigation";
import MobileNavigation from "@/components/MobileNavigation";
import Footer from "@/components/Footer";
import HeroSection from "@/components/sections/HeroSection";
import AboutSection from "@/components/sections/AboutSection";
import ProductsSection from "@/components/sections/ProductsSection";
import ContactSection from "@/components/sections/ContactSection";

const Index = () => {
  const [activeSection, setActiveSection] = useState("hero");

  return (
    <div className="min-h-screen relative">
      {/* Навигация */}
      <SiteNavigation activeSection={activeSection} setActiveSection={setActiveSection} />
      
      <main className="pt-20">
        {/* Hero Section */}
        <div className={activeSection === "hero" ? "block" : "hidden"}>
          <HeroSection />
        </div>

        {/* About Section */}
        <div className={activeSection === "about" ? "block" : "hidden"}>
          <AboutSection />
        </div>

        {/* Products Section */}
        <div className={activeSection === "products" ? "block" : "hidden"}>
          <ProductsSection />
        </div>
        
        {/* Contact Section */}
        <div className={activeSection === "contact" ? "block" : "hidden"}>
          <ContactSection />
        </div>
      </main>

      {/* Footer */}
      <Footer setActiveSection={setActiveSection} />

      {/* Mobile Navigation */}
      <MobileNavigation activeSection={activeSection} setActiveSection={setActiveSection} />
    </div>
  );
};

export default Index;
