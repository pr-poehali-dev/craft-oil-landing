
interface MobileNavigationProps {
  activeSection: string;
  setActiveSection: (section: string) => void;
}

const MobileNavigation = ({ activeSection, setActiveSection }: MobileNavigationProps) => {
  return (
    <div className="fixed bottom-6 right-6 md:hidden flex flex-col gap-2">
      <button
        onClick={() => setActiveSection("hero")}
        className={`w-12 h-12 rounded-full flex items-center justify-center ${
          activeSection === "hero" ? "bg-butter text-foreground" : "bg-background/80 text-foreground/60"
        }`}
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
          <polyline points="9 22 9 12 15 12 15 22" />
        </svg>
      </button>
      <button
        onClick={() => setActiveSection("about")}
        className={`w-12 h-12 rounded-full flex items-center justify-center ${
          activeSection === "about" ? "bg-butter text-foreground" : "bg-background/80 text-foreground/60"
        }`}
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10" />
          <path d="M12 16v-4" />
          <path d="M12 8h.01" />
        </svg>
      </button>
      <button
        onClick={() => setActiveSection("products")}
        className={`w-12 h-12 rounded-full flex items-center justify-center ${
          activeSection === "products" ? "bg-butter text-foreground" : "bg-background/80 text-foreground/60"
        }`}
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="m20 7-9-4-9 4 9 4Z" />
          <path d="M9 11v5.5a2.5 2.5 0 0 0 2.5 2.5 2.5 2.5 0 0 0 2.5-2.5V11" />
          <path d="m4.5 9 7 4 7-4" />
        </svg>
      </button>
      <button
        onClick={() => setActiveSection("contact")}
        className={`w-12 h-12 rounded-full flex items-center justify-center ${
          activeSection === "contact" ? "bg-butter text-foreground" : "bg-background/80 text-foreground/60"
        }`}
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M22 7.7c0 1-.2 2-.6 3l-4 7c-.3.7-1 1.3-1.8 1.3H2.8c-.8 0-1.5-.6-1.8-1.4h0L0 16C.5 15.7 1 15 1 14a3 3 0 0 0-1-2l2-3.3C2.3 8 3 7.5 3.8 7.5h5.9c.2-.4.5-.8.9-1.1a5 5 0 0 1 4.8-1c2 .4 3.5 2 3.9 4 .1.5.1.9 0 1.3h.7c1 0 2 .5 2.5 1.3.1.2.2.4.3.6H22Z" />
          <path d="M10.3 14c-.5.5-.8 1-.8 1.6 0 .9.9 1.6 2 1.6 1 0 2-.7 2-1.6 0-.6-.4-1.2-.9-1.6" />
          <path d="M15 11c-.6-.5-1.4-1-2.3-1h-3.4c-.9 0-1.7.5-2.3 1" />
          <path d="M3 14h.3c.3 0 .5.1.6.3.2.3.2.5.1.8l-.7.9a1 1 0 1 0 1.6 1.2L7 14" />
        </svg>
      </button>
    </div>
  );
};

export default MobileNavigation;
