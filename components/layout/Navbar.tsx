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
  const [visible, setVisible] = useState(true);
  const [prevScrollPos, setPrevScrollPos] = useState(0);

  // Handle scroll logic: hide on scroll down, show on scroll up
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;
      
      // Determine direction of scroll
      const isScrollingUp = prevScrollPos > currentScrollPos;
      
      // Show if scrolling up, or if we are at the top
      if (currentScrollPos < 10) {
        setVisible(true);
        setScrolled(false);
      } else {
        setVisible(isScrollingUp);
        setScrolled(true);
      }
      
      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [prevScrollPos]);

  // Don't show Navbar on start wizard page
  if (pathname === '/start') {
    return null;
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 w-full h-[68px] transition-all duration-300 ${
        visible ? 'translate-y-0' : '-translate-y-full'
      } ${
        scrolled 
          ? 'bg-white/80 backdrop-blur-md border-b border-border shadow-md' 
          : 'bg-cream border-b border-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto h-full px-6 md:px-12 flex items-center justify-between">
        {/* Left Side: Logo & Navigation Links */}
        <div className="flex items-center space-x-12">
          <Link href="/" className="flex items-center space-x-1 focus:outline-none group">
            <span className="font-serif text-[26px] font-bold text-green-500 lowercase tracking-tighter transition-transform duration-200 group-hover:scale-105">
              better
            </span>
            <span className="w-1.5 h-1.5 rounded-full bg-green-500 mt-3 transition-transform duration-200 group-hover:scale-125"></span>
          </Link>

          <nav className="hidden md:flex items-center space-x-8">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="text-sm font-semibold text-ink hover-underline-animation"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/about-us"
              className="text-sm font-semibold text-ink hover-underline-animation"
            >
              About Us
            </Link>
          </nav>
        </div>

        {/* Right Side: CTAs */}
        <div className="hidden md:flex items-center space-x-6">
          <Link
            href="/start"
            className="text-sm font-bold text-ink hover-underline-animation px-2 py-1"
          >
            Sign in
          </Link>
          <Link
            href="/start"
            className="bg-green-500 hover:bg-green-600 text-white text-sm font-bold px-6 py-3 rounded-full transition-all duration-200 shadow-md hover:shadow-green hover:scale-[1.02] active:scale-[0.98]"
          >
            Get started
          </Link>
        </div>

        {/* Mobile Hamburger Toggle */}
        <div className="flex md:hidden items-center">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-ink hover:text-green-500 p-2 focus:outline-none transition-colors"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Dropdown with Overlay */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop Blur Overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 top-[68px] bg-ink/20 backdrop-blur-sm z-30 md:hidden"
            />

            {/* Slide-in Drawer */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed top-[68px] right-0 bottom-0 w-[280px] bg-white border-l border-border shadow-lg z-40 md:hidden flex flex-col justify-between"
            >
              <div className="px-6 py-8 flex flex-col space-y-6">
                {NAV_LINKS.map((link) => (
                  <Link
                    key={link.label}
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className="text-base font-semibold text-ink hover:text-green-500 py-1 transition-colors border-b border-border/40 pb-2"
                  >
                    {link.label}
                  </Link>
                ))}
                <Link
                  href="/about-us"
                  onClick={() => setIsOpen(false)}
                  className="text-base font-semibold text-ink hover:text-green-500 py-1 transition-colors border-b border-border/40 pb-2"
                >
                  About Us
                </Link>
              </div>

              <div className="p-6 border-t border-border flex flex-col space-y-3 bg-cream/50">
                <Link
                  href="/start"
                  onClick={() => setIsOpen(false)}
                  className="text-center text-sm font-bold text-ink py-3 border border-border rounded-full hover:bg-white transition-all active:scale-[0.98]"
                >
                  Sign in
                </Link>
                <Link
                  href="/start"
                  onClick={() => setIsOpen(false)}
                  className="text-center text-sm font-bold bg-green-500 hover:bg-green-600 text-white py-3 rounded-full shadow-sm hover:scale-[1.02] active:scale-[0.98] transition-all"
                >
                  Get started
                </Link>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
}
