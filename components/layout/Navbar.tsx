'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const NAV_LINKS = [
  { label: 'Buy', href: '/mortgage-calculator' },
  { label: 'Refinance', href: '#' },
  { label: 'HELOC', href: '#' },
  { label: 'Rates', href: '#' },
  { label: 'Better+', href: '#' },
];

export default function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Don't show Navbar on start wizard page
  if (pathname === '/start') {
    return null;
  }

  return (
    <header
      className={`sticky top-0 z-50 w-full h-[68px] transition-all duration-300 ${
        scrolled 
          ? 'bg-white border-b border-gray-100 shadow-sm' 
          : 'bg-white border-b border-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto h-full px-6 flex items-center justify-between">
        {/* Left Side: Logo & Navigation Links */}
        <div className="flex items-center space-x-8">
          <Link href="/" className="flex items-center space-x-1 focus:outline-none">
            <span className="font-serif text-[26px] font-bold text-better-green lowercase tracking-tighter">
              better
            </span>
            <span className="w-1.5 h-1.5 rounded-full bg-better-accent mt-3"></span>
          </Link>

          <nav className="hidden md:flex items-center space-x-6">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="text-sm font-medium text-text-primary hover:text-better-green transition-colors duration-200"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/about-us"
              className="text-sm font-medium text-text-primary hover:text-better-green transition-colors duration-200"
            >
              About Us
            </Link>
          </nav>
        </div>

        {/* Right Side: CTAs */}
        <div className="hidden md:flex items-center space-x-4">
          <Link
            href="/start"
            className="text-sm font-semibold text-text-primary hover:underline px-4 py-2"
          >
            Sign in
          </Link>
          <Link
            href="/start"
            className="bg-better-green hover:bg-better-green-dark text-white text-sm font-semibold px-6 py-3 rounded-full transition-all duration-200 shadow-sm hover:shadow-md"
          >
            Get started
          </Link>
        </div>

        {/* Mobile Hamburger Toggle */}
        <div className="flex md:hidden items-center">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-text-primary hover:text-better-green p-2 focus:outline-none"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Dropdown */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="absolute top-[68px] left-0 w-full bg-white border-b border-border shadow-lg overflow-hidden md:hidden z-40"
          >
            <div className="px-6 py-6 flex flex-col space-y-4">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="text-base font-medium text-text-primary hover:text-better-green py-2 transition-colors duration-200"
                >
                  {link.label}
                </Link>
              ))}
              <Link
                href="/about-us"
                onClick={() => setIsOpen(false)}
                className="text-base font-medium text-text-primary hover:text-better-green py-2 transition-colors duration-200"
              >
                About Us
              </Link>
              <hr className="border-border my-2" />
              <div className="flex flex-col space-y-3 pt-2">
                <Link
                  href="/start"
                  onClick={() => setIsOpen(false)}
                  className="text-center text-base font-semibold text-text-primary hover:underline py-3 border border-border rounded-full"
                >
                  Sign in
                </Link>
                <Link
                  href="/start"
                  onClick={() => setIsOpen(false)}
                  className="text-center text-base font-semibold bg-better-green hover:bg-better-green-dark text-white py-3 rounded-full shadow-sm"
                >
                  Get started
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
