"use client";

import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { cn } from '@/lib/utils';
import Image from 'next/image';
import Link from 'next/link';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsScrolled(scrollTop > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    // Check if we need to scroll to a section after navigation
    const hash = window.location.hash;
    if (hash) {
      // Small delay to ensure page is loaded
      setTimeout(() => {
        const sectionId = hash.substring(1);
        const element = document.getElementById(sectionId);
        if (element) {
          const offset = 80;
          const elementPosition = element.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.pageYOffset - offset;
          
          window.scrollTo({
            top: offsetPosition,
            behavior: "smooth"
          });
        }
      }, 100);
    }
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
      setIsMenuOpen(false);
    }
  };

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith('#')) {
      if (window.location.pathname === '/') {
        // On home page - scroll to section
        e.preventDefault();
        scrollToSection(href.substring(1));
      } else {
        // On different page - navigate to home with hash
        setIsMenuOpen(false);
        // Let the Link handle navigation with the hash
      }
    }
  };

  const navItems = [
    { label: 'Home', href: '/' },
    { label: 'Features', href: '/#features' },
    { label: 'Industries', href: '/industries' },
    { label: 'Integrations', href: '/integrations' },
    { label: 'Demos', href: '/#demos' },
    { label: 'Pricing', href: '/pricing' },
    { label: 'Contact Us', href: '/#contact' },
  ];

  return (
    <nav className={cn(
      "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
      isScrolled
        ? "bg-black/60 backdrop-blur-xl border-b border-white/10"
        : "bg-transparent border-b border-transparent"
    )}>
      <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16" style={{ fontFamily: 'var(--font-roboto-mono)' }}>
            <div className="flex items-center justify-between h-20">
            {/* Logo - Responsive padding */}
            <div className="flex items-center flex-shrink-0 pl-4 sm:pl-8 md:pl-12 lg:pl-16 xl:pl-24 2xl:pl-28">
                <div className="flex items-center space-x-0">
                <Image
                  src="/logo1.png"
                  alt="KoelAi Logo"
                  width={300}
                  height={300}
                  className="w-32 h-32 sm:w-36 sm:h-36 md:w-40 md:h-40 lg:w-48 lg:h-48 xl:w-56 xl:h-56 2xl:w-64 2xl:h-64 rounded-lg object-contain"
                  priority
                />
                </div>
            </div>

          {/* Desktop Navigation - Responsive spacing and hidden on smaller desktops */}
          <div className="hidden lg:flex flex-1 items-center mt-5">
            <div className="flex items-center justify-start space-x-2 md:space-x-3 lg:space-x-4 xl:space-x-6 2xl:space-x-8 w-full ml-4 md:ml-8 lg:ml-12 xl:ml-16">
              {navItems.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className="text-gray-300 hover:text-white px-2 lg:px-3 py-2 text-sm lg:text-base xl:text-lg font-medium transition-colors duration-200 hover:bg-white/5 rounded-lg whitespace-nowrap"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>

          {/* CTA Buttons - Responsive padding and hidden on smaller screens */}
          <div className="hidden lg:flex items-center space-x-3 xl:space-x-6 flex-shrink-0 pr-4 md:pr-8 lg:pr-12 xl:pr-16 mt-5" style={{ fontFamily: 'var(--font-roboto-mono)' }} >
            <button className="bg-gradient-to-r from-[#060010] to-[#08000e] text-white px-4 lg:px-6 xl:px-7 py-2 lg:py-2.5 rounded-full text-xs lg:text-sm font-medium hover:from-[#390159] hover:to-[#480170] transition-all duration-200 transform hover:scale-105 shadow-lg shadow-purple-500/25 whitespace-nowrap">
              Sign In
            </button>
          </div>

          {/* Mobile menu button - Show on tablet and mobile */}
          <div className="lg:hidden pr-4">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-white/10 transition-colors"
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={cn(
          "md:hidden transition-all duration-200 ease-in-out",
          isMenuOpen 
            ? "max-h-96 opacity-100" 
            : "max-h-0 opacity-0 overflow-hidden"
        )}
      >
        <div className={cn(
          "px-2 pt-2 pb-3 space-y-1 backdrop-blur-xl transition-all duration-300",
          isScrolled 
            ? "bg-black/80 border-t border-white/10" 
            : "bg-black/40 border-t border-white/5"
        )}>
          {navItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="text-gray-300 hover:text-white block px-3 py-2 text-base font-medium hover:bg-white/5 rounded-lg transition-colors"
              onClick={(e) => handleNavClick(e, item.href)}
            >
              {item.label}
            </Link>
          ))}
          <div className="pt-4 pb-2 border-t border-white/5 mt-4">
            <button className="w-full text-left text-gray-300 hover:text-white px-3 py-2 text-base font-medium hover:bg-white/5 rounded-lg transition-colors mb-2">
              Sign In
            </button>
            {/* <button className="w-full bg-gradient-to-r from-[#7C3AED] to-[#5B21B6] text-white px-3 py-2 rounded-lg text-base font-medium hover:from-[#6B21A8] hover:to-[#4C1D95] transition-all duration-200 shadow-lg shadow-purple-500/25">
              Get Started Free
            </button> */}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
