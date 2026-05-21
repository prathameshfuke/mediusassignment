'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
import Link from 'next/link';
import CountUp from '@/components/ui/CountUp';

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

const InterlockingCirclesArt = () => (
  <motion.svg
    animate={{ rotate: 360 }}
    transition={{ repeat: Infinity, duration: 45, ease: 'linear' }}
    className="w-72 h-72 sm:w-96 sm:h-96 text-green-500/10"
    viewBox="0 0 200 200"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <circle cx="80" cy="100" r="50" stroke="currentColor" strokeWidth="2.5" className="text-green-500/30" />
    <circle cx="120" cy="100" r="50" stroke="currentColor" strokeWidth="2.5" className="text-teal-500/30" />
    <circle cx="100" cy="80" r="55" stroke="currentColor" strokeWidth="1.5" strokeDasharray="4 4" className="text-green-600/20" />
    <path d="M80 100 A 50 50 0 0 1 120 100" stroke="var(--green-500)" strokeWidth="4" strokeLinecap="round" className="opacity-80" />
  </motion.svg>
);

export default function AboutUs() {
  return (
    <div className="flex flex-col min-h-screen bg-cream">
      {/* 1. Hero Section (60/40 Split) */}
      <section className="bg-green-900 text-white py-24 md:py-32 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:16px_16px]"></div>
        
        <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            <motion.span
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-green-100 uppercase text-xs sm:text-sm font-bold tracking-widest"
            >
              Our Story
            </motion.span>
            
            <motion.h1
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.6 }}
              className="font-serif text-[38px] sm:text-[48px] md:text-[56px] leading-tight mt-4 font-black tracking-tight"
            >
              We&apos;re making homeownership simpler, faster, and more accessible for all Americans
            </motion.h1>

            {/* Inline Animated Counter */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="mt-8 inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm px-4 py-2.5 rounded-full border border-white/20 text-xs sm:text-sm font-bold shadow-sm"
            >
              <span className="text-green-100 font-extrabold flex items-center">
                <CountUp end={10000} suffix="+" />
              </span>
              <span className="text-white/90">families helped this month</span>
            </motion.div>
          </div>

          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <InterlockingCirclesArt />
          </div>
        </div>
      </section>

      {/* 2. Mission Statement Section (Editorial) */}
      <section className="bg-white py-28 border-b border-border/60">
        <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-5">
            <h2 className="font-serif text-3xl sm:text-4xl text-ink mb-6 font-black">
              Our Mission
            </h2>
            <p className="font-serif text-lg sm:text-xl text-ink italic leading-relaxed border-l-4 border-green-500 pl-6 py-2 bg-green-50/35 pr-4 rounded-r-xl">
              &ldquo;The status quo is broken. Buying a home is one of the most significant financial decisions most people will ever make, yet the mortgage industry remains slow, paper-heavy, and full of hidden fees. We&apos;re here to change that.&rdquo;
            </p>
          </div>
          <div className="lg:col-span-7 text-muted text-base sm:text-lg space-y-6 leading-relaxed font-medium">
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
      <section className="bg-cream py-28 border-b border-border/60">
        <div className="max-w-5xl mx-auto px-6 md:px-12">
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-ink text-center mb-20 font-black">
            Company Milestones
          </h2>

          {/* Desktop Timeline */}
          <div className="relative space-y-10">
            {TIMELINE_EVENTS.map((event, idx) => (
              <motion.div
                key={event.year}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="relative"
              >
                {/* Mobile visual layouts */}
                <div className="md:hidden flex space-x-4 pl-4 relative">
                  {/* Dash Line & Dot */}
                  <div className="flex flex-col items-center">
                    <div className="w-4 h-4 rounded-full bg-white border-[3px] border-green-500 shadow-green z-10" />
                    {idx < TIMELINE_EVENTS.length - 1 && (
                      <div className="w-0.5 border-l-2 border-dashed border-green-500/20 flex-grow my-1" />
                    )}
                  </div>
                  <div className="bg-white p-6 rounded-2xl border border-border shadow-sm flex-grow pb-8">
                    <span className="font-sans font-black text-xl text-green-500 block mb-2">{event.year}</span>
                    <h3 className="font-sans font-bold text-lg text-ink mb-2">
                      {event.title}
                    </h3>
                    <p className="text-muted text-sm leading-relaxed">
                      {event.desc}
                    </p>
                  </div>
                </div>

                {/* Desktop layout */}
                <div className="hidden md:grid grid-cols-9 gap-4 items-center">
                  {idx % 2 === 0 ? (
                    <>
                      {/* Left Card */}
                      <div className="col-span-4 text-right bg-white p-6 rounded-2xl border border-border shadow-sm hover:shadow-md transition-shadow">
                        <h3 className="font-sans font-bold text-lg text-ink mb-2">
                          {event.title}
                        </h3>
                        <p className="text-muted text-sm leading-relaxed">
                          {event.desc}
                        </p>
                      </div>
                      {/* Middle Line and Dot */}
                      <div className="col-span-1 flex justify-center relative h-full">
                        <div className="w-0.5 border-l-2 border-dashed border-green-500/30 h-full absolute top-0" />
                        <div className="w-4 h-4 rounded-full bg-white border-[3px] border-green-500 shadow-green z-10 mt-6" />
                      </div>
                      {/* Right Date */}
                      <div className="col-span-4 text-left pl-6">
                        <span className="font-sans font-black text-[32px] text-green-500">{event.year}</span>
                      </div>
                    </>
                  ) : (
                    <>
                      {/* Left Date */}
                      <div className="col-span-4 text-right pr-6">
                        <span className="font-sans font-black text-[32px] text-green-500">{event.year}</span>
                      </div>
                      {/* Middle Line and Dot */}
                      <div className="col-span-1 flex justify-center relative h-full">
                        <div className="w-0.5 border-l-2 border-dashed border-green-500/30 h-full absolute top-0" />
                        <div className="w-4 h-4 rounded-full bg-white border-[3px] border-green-500 shadow-green z-10 mt-6" />
                      </div>
                      {/* Right Card */}
                      <div className="col-span-4 text-left bg-white p-6 rounded-2xl border border-border shadow-sm hover:shadow-md transition-shadow">
                        <h3 className="font-sans font-bold text-lg text-ink mb-2">
                          {event.title}
                        </h3>
                        <p className="text-muted text-sm leading-relaxed">
                          {event.desc}
                        </p>
                      </div>
                    </>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Leadership Team Grid */}
      <section className="bg-white py-28 border-b border-border/60">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="text-center max-w-2xl mx-auto mb-20">
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-ink mb-4 font-black">
              Our Leadership
            </h2>
            <p className="text-muted text-base sm:text-lg font-medium leading-relaxed">
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
                className="flex flex-col items-center text-center bg-cream/30 rounded-2xl p-6 hover:shadow-lg hover:-translate-y-1.5 transition-all duration-300 group border border-border/50"
              >
                {/* Custom Vector Avatar */}
                <div className={`w-32 h-32 rounded-full bg-gradient-to-br ${member.gradient} flex items-center justify-center text-white text-3xl font-extrabold shadow-inner mb-6 border-2 border-transparent group-hover:border-green-500 transition-all duration-300`}>
                  {member.initials}
                </div>
                <h3 className="font-sans font-bold text-lg text-ink">
                  {member.name}
                </h3>
                <p className="text-[10px] font-bold text-muted uppercase tracking-widest mt-1.5">
                  {member.title}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Press Logos Section */}
      <section className="bg-cream py-28 border-b border-border/60">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-ink text-center mb-16 font-black">
            In the Press
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {PRESS.map((item, idx) => (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="bg-white p-6 rounded-2xl border border-border flex flex-col justify-between hover:shadow-md transition-shadow cursor-pointer"
              >
                <p className="text-muted text-sm leading-relaxed italic mb-6 font-medium">
                  &ldquo;{item.quote}&rdquo;
                </p>
                <div className="flex items-center justify-between border-t border-border/40 pt-4 mt-auto">
                  <span className="font-serif font-black text-ink text-base">
                    {item.name}
                  </span>
                  <ExternalLink size={14} className="text-muted" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Join Our Team CTA */}
      <section className="bg-green-900 py-24 text-white text-center relative overflow-hidden border-t border-green-950">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:16px_16px]"></div>
        <div className="max-w-3xl mx-auto px-6 relative z-10 flex flex-col items-center">
          <h2 className="font-serif text-3xl sm:text-4xl mb-4 font-black tracking-tight">
            Join our mission
          </h2>
          <p className="text-green-100/90 text-base sm:text-lg mb-8 max-w-xl font-medium">
            We are looking for builders, thinkers, and problem solvers to help us create a better financial system. Check out our open roles.
          </p>
          <Link
            href="#"
            className="bg-white hover:bg-green-50 text-green-900 font-bold px-10 py-4.5 rounded-full transition-all duration-200 shadow-md hover:shadow-lg hover:scale-[1.02] active:scale-[0.98]"
          >
            View Open Positions
          </Link>
        </div>
      </section>
    </div>
  );
}
