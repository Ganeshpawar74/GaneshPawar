import { useState, useEffect } from "react";
import { Terminal, Menu, X } from "lucide-react";

export function Navbar() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      if (totalScroll > 0) {
        setScrollProgress((window.scrollY / totalScroll) * 100);
      }
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Skills", href: "#skills" },
    { label: "Projects", href: "#projects" },
    { label: "Experience", href: "#experience" },
    { label: "Contact", href: "#contact" }
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled 
          ? "bg-[#0a0a0f]/80 backdrop-blur-md border-b border-white/5 py-3 shadow-lg" 
          : "bg-transparent py-5"
      }`}
    >
      {/* Scroll Progress Bar */}
      <div 
        className="absolute top-0 left-0 h-[2px] bg-gradient-to-r from-accent-blue via-accent-purple to-accent-green transition-all duration-100" 
        style={{ width: `${scrollProgress}%` }}
      />

      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        {/* Brand/Logo */}
        <a href="#home" className="flex items-center gap-1.5 font-display font-semibold text-lg tracking-tight hover:opacity-80 transition-opacity">
          <Terminal className="w-4 h-4 text-accent-blue" />
          <span className="text-white font-mono">
            ganesh<span className="text-accent-blue">.ai()</span>
          </span>
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-text-secondary hover:text-white font-sans text-sm tracking-wide transition-colors font-medium relative group"
            >
              {item.label}
              <span className="absolute -bottom-1 left-0 w-0 h-[1.5px] bg-accent-blue transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
          <a
            href="#chatbot-trigger"
            onClick={(e) => {
              e.preventDefault();
              const chatbotBtn = document.getElementById("chatbot-toggle-btn");
              if (chatbotBtn) chatbotBtn.click();
            }}
            className="px-4 py-1.5 rounded-full border border-accent-blue/30 text-accent-blue hover:bg-accent-blue hover:text-dark-bg text-sm font-semibold transition-all shadow-[0_0_15px_rgba(0,212,255,0.1)] hover:shadow-[0_0_20px_rgba(0,212,255,0.3)]"
          >
            Ask AI 🤖
          </a>
        </div>

        {/* Mobile Toggle */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden text-text-primary hover:text-white transition-colors"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden fixed top-[57px] left-0 right-0 bottom-0 bg-[#0a0a0f] border-t border-white/5 px-6 py-8 flex flex-col gap-6 z-50">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              onClick={() => setMobileMenuOpen(false)}
              className="text-text-secondary hover:text-white font-display text-2xl tracking-wide transition-colors"
            >
              {item.label}
            </a>
          ))}
          <button
            onClick={() => {
              setMobileMenuOpen(false);
              const chatbotBtn = document.getElementById("chatbot-toggle-btn");
              if (chatbotBtn) chatbotBtn.click();
            }}
            className="w-full text-center py-3 rounded-xl border border-accent-blue/30 text-accent-blue font-semibold hover:bg-accent-blue/10 transition-colors mt-4"
          >
            Ask AI Assistant 🤖
          </button>
        </div>
      )}
    </nav>
  );
}
