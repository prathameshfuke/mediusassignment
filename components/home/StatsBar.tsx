'use client';

import React from 'react';
import { motion } from 'framer-motion';

const STATS = [
  { value: '$100B+', label: 'funded in home loans' },
  { value: '400,000+', label: 'happy customers served' },
  { value: '#1', label: 'online mortgage lender on Google' },
];

export default function StatsBar() {
  return (
    <section className="bg-white border-y border-border py-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-4 divide-y md:divide-y-0 md:divide-x divide-border">
          {STATS.map((stat, idx) => (
            <motion.div
              key={stat.value}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="flex flex-col items-center text-center px-4 py-6 md:py-2 first:pt-0 last:pb-0 md:first:pt-2 md:last:pb-2"
            >
              <span className="font-sans font-black text-4xl sm:text-5xl text-better-green">
                {stat.value}
              </span>
              <span className="text-sm font-medium text-text-secondary mt-2 max-w-[200px]">
                {stat.label}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
