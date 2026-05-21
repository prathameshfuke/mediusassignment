'use client';

import React from 'react';
import { Zap, Percent, HeartHandshake } from 'lucide-react';
import { motion } from 'framer-motion';

const FEATURES = [
  {
    icon: <Zap className="w-6 h-6 text-better-green" />,
    title: 'Fast',
    description: 'Get pre-approved in as little as 3 minutes. Our fully digital process keeps things moving quickly, helping you lock in your rate without the typical bank delays.',
  },
  {
    icon: <Percent className="w-6 h-6 text-better-green" />,
    title: 'Affordable',
    description: 'No commission, no lender fees. We pass the savings directly to you, saving our customers an average of $8,200 over the lifetime of their mortgage.',
  },
  {
    icon: <HeartHandshake className="w-6 h-6 text-better-green" />,
    title: 'Honest',
    description: 'Our loan officers are paid salary, not commission. They focus on finding the best loan option for your budget, not padding their own paychecks.',
  },
];

export default function WhyBetter() {
  return (
    <section className="bg-surface py-20 border-b border-border">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="font-serif text-3xl sm:text-4xl text-better-green-dark mb-4">
            Why choose Better?
          </h2>
          <p className="text-text-secondary text-base sm:text-lg">
            We&apos;ve reimagined the home financing process from the ground up to make buying or refinancing a home simple, fast, and transparent.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {FEATURES.map((feature, idx) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.15 }}
              className="bg-white p-8 rounded-2xl border border-border shadow-sm hover:shadow-md transition-shadow duration-300 flex flex-col space-y-4"
            >
              <div className="w-12 h-12 rounded-xl bg-better-green-light flex items-center justify-center">
                {feature.icon}
              </div>
              <h3 className="font-sans font-bold text-xl text-text-primary">
                {feature.title}
              </h3>
              <p className="text-text-secondary text-sm leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
