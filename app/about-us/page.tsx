'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
import Link from 'next/link';

const TIMELINE_EVENTS = [
  {
    year: '2016',
    title: 'Company Founded',
    desc: 'Better.com was founded with a mission to digitize the antiquated mortgage industry, making homeownership accessible and fee-free.',
  },
  {
    year: '2018',
    title: '$1 Billion Funded',
    desc: 'We hit our first major milestone of funding $1B in home loans, proving that consumer-first digital lending is the future.',
  },
  {
    year: '2020',
    title: '50-State Coverage',
    desc: 'Expanded lending operations to all 50 US states, helping hundreds of thousands of families secure loans during record-low rate periods.',
  },
  {
    year: '2022',
    title: 'HELOC & Title Services',
    desc: 'Launched digital Home Equity Lines of Credit and Title Insurance services, bringing speed and transparency to more parts of the home-buying transaction.',
  },
  {
    year: '2026',
    title: '$100 Billion+ Milestones',
    desc: 'Now one of America\'s leading fintech mortgage companies, having funded over $100B in loans and served over 400,000 customers.',
  },
];

const LEADERSHIP = [
  {
    name: 'Vishal Garg',
    title: 'Founder & Chief Executive Officer',
    initials: 'VG',
    gradient: 'from-emerald-500 to-teal-700',
  },
  {
    name: 'Kevin Ryan',
    title: 'Chief Financial Officer',
    initials: 'KR',
    gradient: 'from-blue-500 to-indigo-700',
  },
  {
    name: 'Diane Yu',
    title: 'Chief Technology Officer',
    initials: 'DY',
    gradient: 'from-purple-500 to-pink-700',
  },
  {
    name: 'Sarah Pierce',
    title: 'Head of Operations',
    initials: 'SP',
    gradient: 'from-orange-400 to-red-600',
  },
];

const PRESS = [
  { name: 'Forbes', quote: 'Better is completely digitizing the home loan process.' },
  { name: 'The Wall Street Journal', quote: 'No lender fees and a 100% online platform that saves customers thousands.' },
  { name: 'The New York Times', quote: 'Redefining mortgage transparency and closing in record times.' },
  { name: 'Bloomberg', quote: 'A fintech giant disrupting traditional bank mortgage operations.' },
];

export default function AboutUs() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* 1. Hero Section */}
      <section className="bg-better-green-dark text-white py-20 md:py-28 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:16px_16px]"></div>
        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <motion.span
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-better-accent uppercase text-xs sm:text-sm font-bold tracking-widest"
          >
            Our Story
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.6 }}
            className="font-serif text-[36px] sm:text-[48px] md:text-[56px] leading-tight mt-4 font-bold"
          >
            We&apos;re making homeownership simpler, faster, and more accessible for all Americans
          </motion.h1>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="w-16 h-1 bg-better-accent mx-auto mt-8 rounded-full"
          />
        </div>
      </section>

      {/* 2. Mission Statement Section (Editorial) */}
      <section className="bg-white py-20 border-b border-border">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-5">
            <h2 className="font-serif text-3xl sm:text-4xl text-better-green-dark mb-6">
              Our Mission
            </h2>
            <p className="font-serif text-lg sm:text-xl text-text-primary italic leading-relaxed border-l-4 border-better-green pl-6 py-2">
              &ldquo;The status quo is broken. Buying a home is one of the most significant financial decisions most people will ever make, yet the mortgage industry remains slow, paper-heavy, and full of hidden fees. We&apos;re here to change that.&rdquo;
            </p>
          </div>
          <div className="lg:col-span-7 text-text-secondary text-base sm:text-lg space-y-6 leading-relaxed">
            <p>
              Better was founded in 2016 because the home loan process was needlessly stressful and expensive. We believed that by stripping away high commission loan officers, paper application sheets, and old-school bank hierarchies, we could build a streamlined digital experience.
            </p>
            <p>
              Our proprietary technology connects directly to financial databases to instantly verify income and credit, running thousands of pricing options in seconds to find the best rate. By automating the underwriting process, we completely eliminate lender fees, passing all savings directly to homebuyers.
            </p>
            <p>
              Today, we are more than just a mortgage company. We are a team of technologists, designers, and financial guides working together to unlock equity, foster generational wealth, and make the dream of homeownership a reality.
            </p>
          </div>
        </div>
      </section>

      {/* 3. Timeline / History Section */}
      <section className="bg-surface py-20 border-b border-border">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="font-serif text-3xl sm:text-4xl text-better-green-dark text-center mb-16">
            Company Milestones
          </h2>

          <div className="relative border-l-2 border-better-green/20 ml-4 md:ml-32 space-y-12">
            {TIMELINE_EVENTS.map((event, idx) => (
              <motion.div
                key={event.year}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="relative pl-8 md:pl-12"
              >
                {/* Year Label */}
                <span className="absolute left-[-16px] md:left-[-150px] top-1 md:top-0 font-sans font-black text-2xl text-better-green md:w-28 md:text-right">
                  {event.year}
                </span>

                {/* Dot */}
                <span className="absolute left-[-6px] top-3 w-3.5 h-3.5 rounded-full bg-better-green border-4 border-white shadow-sm" />

                {/* Content Card */}
                <div className="bg-white p-6 rounded-2xl border border-border shadow-sm">
                  <h3 className="font-sans font-bold text-lg text-text-primary mb-2">
                    {event.title}
                  </h3>
                  <p className="text-text-secondary text-sm leading-relaxed">
                    {event.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Leadership Team Grid */}
      <section className="bg-white py-20 border-b border-border">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="font-serif text-3xl sm:text-4xl text-better-green-dark mb-4">
              Our Leadership
            </h2>
            <p className="text-text-secondary text-base">
              A diverse team of industry veterans and technology innovators passionate about rewriting the rules of finance.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {LEADERSHIP.map((member, idx) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="flex flex-col items-center text-center bg-surface border border-border rounded-2xl p-6 hover:shadow-md transition-shadow"
              >
                {/* Custom Vector Avatar */}
                <div className={`w-32 h-32 rounded-full bg-gradient-to-br ${member.gradient} flex items-center justify-center text-white text-3xl font-extrabold shadow-inner mb-6`}>
                  {member.initials}
                </div>
                <h3 className="font-sans font-bold text-lg text-text-primary">
                  {member.name}
                </h3>
                <p className="text-text-secondary text-sm mt-1">
                  {member.title}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Press Logos Section */}
      <section className="bg-surface py-20 border-b border-border">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="font-serif text-3xl sm:text-4xl text-better-green-dark text-center mb-12">
            In the Press
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {PRESS.map((item, idx) => (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                className="bg-white p-6 rounded-2xl border border-border flex flex-col justify-between"
              >
                <p className="text-text-primary text-sm leading-relaxed italic mb-6">
                  &ldquo;{item.quote}&rdquo;
                </p>
                <div className="flex items-center justify-between border-t border-gray-50 pt-4 mt-auto">
                  <span className="font-serif font-black text-better-green-dark text-base">
                    {item.name}
                  </span>
                  <ExternalLink size={14} className="text-text-secondary" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Join Our Team CTA */}
      <section className="bg-better-green py-20 text-white text-center relative overflow-hidden">
        <div className="max-w-3xl mx-auto px-6 relative z-10 flex flex-col items-center">
          <h2 className="font-serif text-3xl sm:text-4xl mb-4 font-bold">
            Join our mission
          </h2>
          <p className="text-better-green-light text-base sm:text-lg mb-8 max-w-xl">
            We are looking for builders, thinkers, and problem solvers to help us create a better financial system. Check out our open roles.
          </p>
          <Link
            href="#"
            className="bg-white hover:bg-better-green-light text-better-green font-semibold px-8 py-4 rounded-full transition-all duration-200 shadow-md hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-white/50"
          >
            View Open Positions
          </Link>
        </div>
      </section>
    </div>
  );
}
