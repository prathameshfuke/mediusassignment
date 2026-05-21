'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const FOOTER_SECTIONS = [
  {
    title: 'Products',
    links: [
      { label: 'Buy a Home', href: '/mortgage-calculator' },
      { label: 'Refinance', href: '#' },
      { label: 'HELOC', href: '#' },
      { label: 'Rates', href: '#' },
      { label: 'Better+', href: '#' },
    ],
  },
  {
    title: 'Company',
    links: [
      { label: 'About Us', href: '/about-us' },
      { label: 'Careers', href: '#' },
      { label: 'Press', href: '#' },
      { label: 'Partners', href: '#' },
      { label: 'Investor Relations', href: '#' },
    ],
  },
  {
    title: 'Legal',
    links: [
      { label: 'Privacy Policy', href: '#' },
      { label: 'Terms of Use', href: '#' },
      { label: 'Licensing', href: '#' },
      { label: 'NMLS Consumer Access', href: '#' },
      { label: 'Disclosures', href: '#' },
    ],
  },
];

export default function Footer() {
  const pathname = usePathname();

  // Don't show Footer on start wizard page
  if (pathname === '/start') {
    return null;
  }

  return (
    <footer className="bg-[#faf9f7] border-t border-border pt-20 pb-12 mt-auto">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Top: Logo and columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-16">
          {/* Logo column */}
          <div className="lg:col-span-2 flex flex-col space-y-6">
            <Link href="/" className="flex items-center space-x-1 focus:outline-none group self-start">
              <span className="font-serif text-[28px] font-bold text-green-500 lowercase tracking-tighter transition-transform duration-200 group-hover:scale-105">
                better
              </span>
              <span className="w-1.5 h-1.5 rounded-full bg-green-500 mt-3 transition-transform duration-200 group-hover:scale-125"></span>
            </Link>
            <p className="text-muted text-sm max-w-sm leading-relaxed">
              Better is making homeownership simpler, faster, and more accessible for all Americans. 
              By digitizing the process, we eliminate friction and middleman fees to save you thousands.
            </p>
            <div className="flex items-center space-x-5 pt-2">
              <a href="#" className="text-muted hover:text-green-500 transition-colors" aria-label="Facebook">
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                </svg>
              </a>
              <a href="#" className="text-muted hover:text-green-500 transition-colors" aria-label="Twitter">
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
                </svg>
              </a>
              <a href="#" className="text-muted hover:text-green-500 transition-colors" aria-label="Instagram">
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                </svg>
              </a>
              <a href="#" className="text-muted hover:text-green-500 transition-colors" aria-label="LinkedIn">
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                  <rect x="2" y="9" width="4" height="12"></rect>
                  <circle cx="4" cy="4" r="2"></circle>
                </svg>
              </a>
            </div>
          </div>

          {/* Links columns */}
          {FOOTER_SECTIONS.map((section) => (
            <div key={section.title} className="flex flex-col space-y-5">
              <h3 className="font-sans font-bold text-ink text-xs uppercase tracking-widest">
                {section.title}
              </h3>
              <ul className="flex flex-col space-y-3">
                {section.links.map((link) => (
                  <li key={link.label} className="self-start">
                    <Link
                      href={link.href}
                      className="text-muted hover-underline-animation text-sm font-medium"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <hr className="border-border mb-10" />

        {/* Bottom: Licensing and regulatory texts */}
        <div className="flex flex-col space-y-6 text-xs text-muted leading-relaxed">
          <p>
            © {new Date().getFullYear()} Better Mortgage Corporation. All rights reserved. 
            Better Mortgage Corporation is a direct lender. NMLS ID #1178653. 
            Equal Housing Lender.
          </p>
          <p>
            Better Mortgage Corporation, 3 World Trade Center, 59th Floor, New York, NY 10007. 
            For licensing information, go to: www.nmlsconsumeraccess.org. 
            Licensed by the Department of Financial Protection and Innovation under the California Residential Mortgage Lending Act. 
            Texas Mortgage Banker Disclosure: consumers may file complaints with the Department of Savings and Mortgage Lending.
          </p>
          <p className="border-t border-border pt-6 text-[11px] text-muted/60">
            Terms, conditions, and fees apply. All loan applications are subject to credit and underwriting approval. 
            Not all applicants will qualify. Rates and terms are subject to change without notice. 
            The calculated monthly payments shown on this website are estimates for illustrative purposes only.
          </p>
        </div>
      </div>
    </footer>
  );
}
