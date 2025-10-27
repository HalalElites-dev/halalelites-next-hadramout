'use client';

import { useState, useEffect } from "react";
import { Phone } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { NAV_LINKS } from "@/lib/constants";
import { cn, scrollToSection } from "@/lib/utils";
import { OrderDialog } from "../ui/orderdialog";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isAnimated, setIsAnimated] = useState(false);

  useEffect(() => {
    // Trigger entrance animation on mount
    const timer = setTimeout(() => {
      setIsAnimated(true);
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  useEffect(() => {
    // Trigger entrance animation on mount
    const timer = setTimeout(() => {
      setIsAnimated(true);
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    // Prevent body scroll when menu is open
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    // Cleanup on unmount
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMenuOpen]);
  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    setIsMenuOpen(false);
    if (href.startsWith("#")) {
      e.preventDefault();
      scrollToSection(href.substring(1));
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border transition-opacity duration-500 ${isAnimated ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4"
          }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-auto py-4">
            {/* Logo */}
            <div className="flex-shrink-0">
              <Link href="/" className="flex items-center">
                <div className="flex items-center" style={{ width: 130, height: 60 }}>
                  <Image
                    alt="logo"
                    src="/logo.png"
                    width={150}
                    height={60}
                    className="object-contain mt-3"
                  />
                </div>
              </Link>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-8">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={cn(
                    "text-md font-medium text-brand-primary hover:text-brand-secondary transition-colors uppercase relative group"
                  )}
                  onClick={(e) => handleNavClick(e, link.href)}
                >
                  {link.label}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-brand-primary transition-all group-hover:w-full"></span>
                </Link>
              ))}
            </nav>

            {/* Desktop CTA */}
            <div className="hidden lg:flex items-center gap-4">
              <div className="flex items-center space-x-2 text-brand-secondary">
                <Phone className="h-4 w-4 text-brand-primary" />
                <Link href="tel:+14194410029" className="text-sm hover:underline">+1 (419) 441-0029</Link>
              </div>
            
              <OrderDialog 
                doorDashUrl="https://www.doordash.com/en/store/hadramout-restaurant-toledo-29921082/?srsltid=AfmBOoqeItcuGNjdkUoJW1tY00nTATc1Zq5Eh565CAayuWUsHNDPXlQ5"
                uberEatsUrl="https://www.ubereats.com/store/hadramout-restaurants/CvqtjKNqUay4t8YSau_1iQ?ps=1"
              />
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={toggleMenu}
              className="md:flex lg:hidden relative w-10 h-10 flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-ring rounded-md"
              aria-label="Toggle menu"
            >
              <div className="relative w-6 h-5">
                <span
                  className={`absolute left-0 w-full h-0.5 bg-brand-primary rounded-full transition-all duration-300 ${isMenuOpen ? "top-1/2 -translate-y-1/2 rotate-45" : "top-0 rotate-0"
                    }`}
                />
                <span
                  className={`absolute left-0 top-1/2 -translate-y-1/2 w-full h-0.5 bg-brand-primary rounded-full transition-all duration-300 ${isMenuOpen ? "opacity-0 scale-0" : "opacity-100 scale-100"
                    }`}
                />
                <span
                  className={`absolute left-0 w-full h-0.5 bg-brand-primary rounded-full transition-all duration-300 ${isMenuOpen ? "top-1/2 -translate-y-1/2 -rotate-45" : "bottom-0 rotate-0"
                    }`}
                />
              </div>
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 z-40 bg-background/95 backdrop-blur-lg md:flex lg:hidden transition-all duration-300 ${isMenuOpen ? "opacity-100 visible" : "opacity-0 invisible"
          }`}
      >
        <div
          className={`container mx-auto px-4 pt-24 pb-8 transition-transform duration-300 ${isMenuOpen ? "translate-x-0" : "translate-x-full"
            }`}
        >
          <nav className="flex flex-col gap-6">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-2xl font-semibold text-brand-primary hover:text-brand-secondary transition-colors uppercase text-center pt-2"
                onClick={(e) => handleNavClick(e, link.href)}
              >
                {link.label}
              </Link>
            ))}
            <div className="flex flex-col gap-4 mt-8">
              <div className="flex items-center space-x-2 text-brand-secondary justify-center">
                <Phone className="h-5 w-5 text-brand-primary" />
                <Link href="tel:+14194410029" className="text-lg">+1 (419) 441-0029</Link>
              </div>
               <OrderDialog
                doorDashUrl="https://www.doordash.com/en/store/hadramout-restaurant-toledo-29921082/?srsltid=AfmBOoqeItcuGNjdkUoJW1tY00nTATc1Zq5Eh565CAayuWUsHNDPXlQ5"
                uberEatsUrl="https://www.ubereats.com/store/hadramout-restaurants/CvqtjKNqUay4t8YSau_1iQ?ps=1"
              />
            </div>
          </nav>
        </div>
      </div>
    </>
  );
}