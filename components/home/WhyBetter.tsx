'use client';

import React from 'react';
import { motion } from 'framer-motion';

const FastIllustration = () => (
  <svg className="w-8 h-8 text-green-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
    <circle cx="12" cy="12" r="10" strokeDasharray="3 3" className="stroke-green-500/40" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6l4 2" />
    <path d="M12 2a10 10 0 0 1 10 10" className="stroke-green-600" strokeWidth="3" />
  </svg>
);

const AffordableIllustration = () => (
  <svg className="w-8 h-8 text-green-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
    <ellipse cx="12" cy="6" rx="8" ry="3" />
    <path d="M4 6v6c0 1.66 3.58 3 8 3s8-1.34 8-3V6" className="stroke-green-500/50" />
    <path d="M4 12v6c0 1.66 3.58 3 8 3s8-1.34 8-3v-6" className="stroke-green-600" strokeWidth="2.5" />
  </svg>
);

const HonestIllustration = () => (
  <svg className="w-8 h-8 text-green-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0 1 12 2.944a11.955 11.955 0 0 1-8.618 3.04A12.02 12.02 0 0 0 3 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
  </svg>
);

const FEATURES = [
  {
    icon: <FastIllustration />,
    title: 'Fast',
    description: 'Get pre-approved in as little as 3 minutes. Our fully digital process keeps things moving quickly, helping you lock in your rate without the typical bank delays.',
    useLightBg: false,
  },
  {
    icon: <AffordableIllustration />,
    title: 'Affordable',
    description: 'No commission, no lender fees. We pass the savings directly to you, saving our customers an average of $8,200 over the lifetime of their mortgage.',
    useLightBg: true,
  },
  {
    icon: <HonestIllustration />,
    title: 'Honest',
    description: 'Our loan officers are paid salary, not commission. They focus on finding the best loan option for your budget, not padding their own paychecks.',
    useLightBg: false,
  },
];

export default function WhyBetter() {
  return (
    <section className="bg-cream py-32 border-b border-border/60 relative overflow-hidden">
      {/* Decorative large numeral "01" watermark behind heading */}
      <div className="absolute top-10 left-1/2 -translate-x-1/2 font-serif text-[12rem] font-black text-green-500/5 select-none pointer-events-none z-0">
        01
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-20">
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-ink mb-4 font-black">
            Why choose Better?
          </h2>
          <p className="text-muted text-base sm:text-lg leading-relaxed font-medium">
            We&apos;ve reimagined the home financing process from the ground up to make buying or refinancing a home simple, fast, and transparent.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {FEATURES.map((feature, idx) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.15 }}
              className={`p-8 rounded-2xl border border-border flex flex-col space-y-5 transition-all duration-300 hover:-translate-y-2 hover:shadow-md cursor-pointer ${
                feature.useLightBg ? 'bg-green-50' : 'bg-white'
              }`}
            >
              <div className="w-14 h-14 rounded-2xl bg-cream flex items-center justify-center shadow-sm border border-border/40">
                {feature.icon}
              </div>
              <h3 className="font-sans font-bold text-xl text-ink">
                {feature.title}
              </h3>
              <p className="text-muted text-sm leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
