'use client';

import React from 'react';
import { motion } from 'framer-motion';
import CountUp from '@/components/ui/CountUp';

const STATS = [
  { value: 100, prefix: '$', suffix: 'B+', label: 'funded in home loans' },
  { value: 400000, prefix: '', suffix: '+', label: 'happy customers served' },
  { value: 1, prefix: '#', suffix: '', label: 'online mortgage lender on Google' },
];

export default function StatsBar() {
  return (
    <section className="bg-cream py-28 border-y border-border/60">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
          {STATS.map((stat, idx) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.15 }}
              className="relative flex flex-col items-center text-center p-8 rounded-2xl bg-white/60 backdrop-blur-sm border border-border shadow-sm hover:shadow-md hover:border-green-500/20 transition-all duration-300 group"
            >
              {/* Thin green divider line indicator inside each card on hover */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-12 h-1 bg-transparent group-hover:bg-green-500 rounded-b transition-colors duration-300" />
              
              <span className="font-sans font-black text-[40px] sm:text-[48px] text-green-500 leading-none">
                <CountUp
                  end={stat.value}
                  prefix={stat.prefix}
                  suffix={stat.suffix}
                />
              </span>
              <span className="text-sm font-semibold text-muted mt-3 max-w-[200px] leading-relaxed">
                {stat.label}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
