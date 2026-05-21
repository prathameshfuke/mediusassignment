'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Star } from 'lucide-react';
import { motion } from 'framer-motion';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] },
  },
};

export default function Hero() {
  return (
    <section className="relative w-full min-h-[92vh] flex items-center bg-cream py-20 overflow-hidden">
      {/* Subtle SVG mesh gradient blob in top-right */}
      <div className="absolute top-[-20%] right-[-10%] w-[70%] h-[120%] opacity-40 blur-[130px] pointer-events-none select-none z-0">
        <div className="absolute top-10 right-20 w-[450px] h-[450px] rounded-full bg-green-500" />
        <div className="absolute top-40 right-60 w-[400px] h-[400px] rounded-full bg-teal-400" />
        <div className="absolute top-20 right-80 w-[350px] h-[350px] rounded-full bg-green-100" />
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 w-full z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Left Content */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="lg:col-span-7 flex flex-col space-y-8"
        >
          {/* Floating animated badge */}
          <motion.div
            variants={itemVariants}
            className="self-start"
          >
            <motion.div
              animate={{ scale: [1, 1.03, 1] }}
              transition={{ repeat: Infinity, duration: 3, ease: 'easeInOut' }}
              className="flex items-center space-x-2 bg-green-50 px-4 py-2 rounded-full border border-green-500/20 text-green-600 text-xs sm:text-sm font-bold shadow-sm"
            >
              <span>⚡</span>
              <span>3 min pre-approval</span>
            </motion.div>
          </motion.div>

          {/* Headline */}
          <motion.h1
            variants={itemVariants}
            className="font-serif text-hero leading-[1.05] text-ink tracking-tight font-black"
          >
            Mortgages <br />
            made simple.
          </motion.h1>

          {/* Subtext */}
          <motion.p
            variants={itemVariants}
            className="text-muted text-base sm:text-lg max-w-xl leading-relaxed font-medium"
          >
            Better is a direct lender. That means we don&apos;t have to deal with brokers, and we pass those savings directly on to you. No commission, no lender fees, 100% online.
          </motion.p>

          {/* CTAs */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row items-stretch sm:items-center space-y-4 sm:space-y-0 sm:space-x-5 pt-2"
          >
            <Link
              href="/start"
              className="bg-green-500 hover:bg-green-600 text-white text-center text-base font-bold px-10 py-5 rounded-full transition-all duration-200 shadow-green hover:scale-[1.02] active:scale-[0.98]"
            >
              Get started
            </Link>
            <Link
              href="/mortgage-calculator"
              className="border-2 border-green-500/40 text-green-600 hover:bg-green-500/5 text-center text-base font-bold px-10 py-5 rounded-full transition-all duration-200 hover:scale-[1.02] active:scale-[0.98]"
            >
              View Rates
            </Link>
          </motion.div>

          {/* Trust Rating Row */}
          <motion.div
            variants={itemVariants}
            className="flex items-center space-x-2 text-xs sm:text-sm font-semibold text-muted/90 pt-1"
          >
            <div className="flex text-amber-500">
              <Star size={16} className="fill-current" />
              <Star size={16} className="fill-current" />
              <Star size={16} className="fill-current" />
              <Star size={16} className="fill-current" />
              <Star size={16} className="fill-current" />
            </div>
            <span>Rated 4.9 · 11,000+ reviews · No SSN required to start</span>
          </motion.div>

          {/* Trust Badges */}
          <motion.div
            variants={itemVariants}
            className="pt-8 border-t border-border/60 max-w-lg"
          >
            <p className="text-[11px] uppercase tracking-widest font-bold text-muted mb-4">
              As trusted by
            </p>
            <div className="flex flex-wrap items-center gap-8 sm:gap-10 opacity-70">
              <span className="font-serif font-black text-2xl text-ink tracking-tighter">
                CNBC
              </span>
              <span className="font-serif font-bold text-2xl text-ink">
                Forbes
              </span>
              <span className="font-serif font-extrabold text-xl text-ink italic">
                The New York Times
              </span>
            </div>
          </motion.div>
        </motion.div>

        {/* Right Column: Beautiful Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="lg:col-span-5 relative w-full aspect-[4/3] rounded-3xl overflow-hidden shadow-lg border border-border/80"
        >
          <Image
            src="/images/better_hero_house.png"
            alt="Modern Minimalist Home"
            fill
            priority
            sizes="(max-w-1024px) 100vw, 50vw"
            className="object-cover hover:scale-[1.03] transition-transform duration-700"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-ink/20 to-transparent pointer-events-none" />
          
          {/* Floating Card */}
          <div className="absolute bottom-6 left-6 bg-white/90 backdrop-blur-md p-4 rounded-2xl shadow-md border border-border/60 max-w-xs flex items-center space-x-3 select-none">
            <div className="w-10 h-10 rounded-full bg-green-50 flex items-center justify-center text-green-500 border border-green-500/10">
              <Star size={20} className="fill-current" />
            </div>
            <div>
              <p className="text-[10px] text-muted uppercase tracking-wider font-bold font-sans">Google Rating</p>
              <p className="text-sm font-bold text-ink font-sans">4.8/5 (10,000+ reviews)</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
