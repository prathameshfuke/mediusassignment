'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Star, ShieldCheck } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className="relative w-full bg-better-green-light py-16 md:py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left Column: Heading and CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col space-y-6 z-10"
        >
          <div className="flex items-center space-x-2 bg-white/80 backdrop-blur-sm self-start px-3 py-1.5 rounded-full border border-better-green/10 text-better-green text-xs font-semibold">
            <ShieldCheck size={14} />
            <span>NMLS #1178653 | Federal & State Licensed</span>
          </div>

          <h1 className="font-serif text-[42px] sm:text-[54px] lg:text-[64px] leading-[1.1] text-better-green-dark tracking-tight">
            Mortgages <br />
            made simple
          </h1>

          <p className="text-text-primary text-base sm:text-lg max-w-lg leading-relaxed">
            Better is a direct lender. That means we don&apos;t have to deal with brokers, and we pass those savings directly on to you. No commission, no lender fees, 100% online.
          </p>

          <div className="flex flex-col sm:flex-row items-stretch sm:items-center space-y-3 sm:space-y-0 sm:space-x-4 pt-2">
            <Link
              href="/start"
              className="bg-better-green hover:bg-better-green-dark text-white text-center text-base font-semibold px-8 py-4 rounded-full transition-all duration-200 shadow-md hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-better-green/50"
            >
              Get started
            </Link>
            <Link
              href="/mortgage-calculator"
              className="border border-better-green hover:bg-better-green/5 text-better-green text-center text-base font-semibold px-8 py-4 rounded-full transition-all duration-200 focus:outline-none"
            >
              View Rates
            </Link>
          </div>

          {/* Trust Badges */}
          <div className="pt-8 border-t border-better-green/10">
            <p className="text-xs uppercase tracking-wider font-semibold text-text-secondary mb-3">
              As trusted by
            </p>
            <div className="flex flex-wrap items-center gap-6 sm:gap-8 opacity-75">
              <span className="font-serif font-black text-xl text-better-green-dark tracking-tighter">
                CNBC
              </span>
              <span className="font-serif font-bold text-xl text-better-green-dark">
                Forbes
              </span>
              <span className="font-serif font-extrabold text-lg text-better-green-dark italic">
                The New York Times
              </span>
            </div>
          </div>
        </motion.div>

        {/* Right Column: Beautiful Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl border border-white/50"
        >
          <Image
            src="/images/better_hero_house.png"
            alt="Modern Minimalist Home"
            fill
            priority
            sizes="(max-w-1024px) 100vw, 50vw"
            className="object-cover hover:scale-105 transition-transform duration-700"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-better-green-dark/30 to-transparent pointer-events-none" />
          
          {/* Floating Card */}
          <div className="absolute bottom-6 left-6 bg-white/95 backdrop-blur-md p-4 rounded-xl shadow-lg border border-white max-w-xs flex items-center space-x-3">
            <div className="w-10 h-10 rounded-full bg-better-green-light flex items-center justify-center text-better-green">
              <Star size={20} className="fill-current" />
            </div>
            <div>
              <p className="text-xs text-text-secondary font-medium">Google Rating</p>
              <p className="text-sm font-bold text-text-primary">4.8/5 (10,000+ reviews)</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
