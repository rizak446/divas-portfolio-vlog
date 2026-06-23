import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const navLinks = [
  { name: "Work", href: "#work" },
  { name: "Vlog", href: "#vlog" },
  { name: "About", href: "#about" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [activeSection, setActiveSection] = useState("");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Monitor scroll for glassmorphism background transition
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Monitor intersection to update active navigation links
  useEffect(() => {
    const sections = ["work", "vlog", "about", "contact", "home"];
    const observers = [];

    const observerOptions = {
      root: null,
      rootMargin: "-40% 0px -50% 0px", // Focus on the middle of the viewport
      threshold: 0,
    };

    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const id = entry.target.id;
          setActiveSection(id === "home" ? "" : id);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    sections.forEach((id) => {
      const element = document.getElementById(id);
      if (element) {
        observer.observe(element);
        observers.push(element);
      }
    });

    return () => {
      observers.forEach((el) => observer.unobserve(el));
    };
  }, []);

  const handleLinkClick = (e, href) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const targetElement = document.querySelector(href);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth" });
      // Set active directly for snappier feedback
      setActiveSection(href.substring(1));
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-bg-base/70 backdrop-blur-md border-b border-white/5 py-4"
          : "bg-transparent py-6"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">
        {/* Logo / Name */}
        <a
          href="#home"
          onClick={(e) => handleLinkClick(e, "#home")}
          className="font-display font-extrabold text-xl tracking-tight text-text-primary hover:opacity-80 transition duration-300 flex items-center gap-2 focus-visible:outline-none"
        >
          <span className="w-8 h-8 rounded-lg bg-accent-indigo flex items-center justify-center text-white text-sm font-display font-bold">
            D
          </span>
          <span>Divas</span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => {
            const isActive = activeSection === link.href.substring(1);
            return (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleLinkClick(e, link.href)}
                className={`relative font-sans text-sm font-medium tracking-wide transition-colors duration-300 py-1 ${
                  isActive ? "text-accent-indigo" : "text-text-muted hover:text-text-primary"
                }`}
              >
                {link.name}
                {isActive && (
                  <motion.span
                    layoutId="activeIndicator"
                    className="absolute bottom-0 left-0 right-0 h-[2px] bg-accent-indigo rounded-full shadow-[0_0_8px_#6366f1]"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
              </a>
            );
          })}
        </nav>

        {/* Hamburger Icon */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 text-text-primary hover:text-accent-indigo transition-colors focus-visible:outline-none"
          aria-label="Toggle navigation menu"
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="absolute top-full left-0 right-0 bg-bg-surface/95 backdrop-blur-lg border-b border-white/5 md:hidden"
          >
            <nav className="flex flex-col py-6 px-8 gap-5">
              {navLinks.map((link) => {
                const isActive = activeSection === link.href.substring(1);
                return (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={(e) => handleLinkClick(e, link.href)}
                    className={`font-display text-lg font-bold tracking-wide transition-colors ${
                      isActive ? "text-accent-indigo" : "text-text-muted"
                    }`}
                  >
                    {link.name}
                  </a>
                );
              })}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
