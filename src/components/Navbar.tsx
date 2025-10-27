"use client";

import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { cn } from '@/lib/utils';
import Image from 'next/image';

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

  const navItems = [
    { label: 'Home', href: '#home' },
    { label: 'Features', href: '#features' },
    { label: 'Industries', href: '#industries' },
    { label: 'Integrations', href: '#integrations' },
    { label: 'Demos', href: '#demos' },
    { label: 'Pricing', href: '#pricing' },
    { label: 'Contact Us', href: '#contact' },
  ];

  return (
    <nav className={cn(
      "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
      isScrolled 
        ? "bg-black/60 backdrop-blur-xl border-b border-white/10" 
        : "bg-transparent border-b border-transparent"
    )}>
      <div className="w-full px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-20">
            {/* Logo - moved more to the left */}
            <div className="flex items-center flex-shrink-0 pl-24">
                <div className="flex items-center space-x-0">
                <span className="text-5xl  font-bold bg-gradient-to-r from-[#939393] to-[#530280] bg-clip-text text-transparent">
                    KOEL AI
                </span>
                <Image
                  src="/logo.png"
                  alt="KoelAi Logo"
                  width={85}
                  height={85}
                  className="rounded-lg "
                />
                </div>
            </div>

          {/* Desktop Navigation - centered */}
          <div className="hidden md:block flex-1">
            <div className="flex items-center justify-center space-x-8">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="text-gray-300 hover:text-white px-3 py-2 text-1xl font-medium transition-colors duration-200 hover:bg-white/5 rounded-lg"
                >
                  {item.label}
                </a>
              ))}
            </div>
          </div>

          {/* CTA Buttons - moved more to the right */}
          <div className="hidden md:flex items-center space-x-6 flex-shrink-0 pr-16">
            <button className="text-gray-300 hover:text-white px-4 py-2 text-sm font-medium transition-colors">
              Sign In
            </button>
            <button className="bg-gradient-to-r from-[#060010] to-[#08000e] text-white px-7 py-2.5 rounded-full text-sm font-medium hover:from-[#390159] hover:to-[#480170] transition-all duration-200 transform hover:scale-105 shadow-lg shadow-purple-500/25">
              Get Started 
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
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
            <a
              key={item.label}
              href={item.href}
              className="text-gray-300 hover:text-white block px-3 py-2 text-base font-medium hover:bg-white/5 rounded-lg transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              {item.label}
            </a>
          ))}
          <div className="pt-4 pb-2 border-t border-white/5 mt-4">
            <button className="w-full text-left text-gray-300 hover:text-white px-3 py-2 text-base font-medium hover:bg-white/5 rounded-lg transition-colors mb-2">
              Sign In
            </button>
            <button className="w-full bg-gradient-to-r from-[#7C3AED] to-[#5B21B6] text-white px-3 py-2 rounded-lg text-base font-medium hover:from-[#6B21A8] hover:to-[#4C1D95] transition-all duration-200 shadow-lg shadow-purple-500/25">
              Get Started Free
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
