import React from 'react';
import Hero from '@/components/home/Hero';
import StatsBar from '@/components/home/StatsBar';
import WhyBetter from '@/components/home/WhyBetter';
import Testimonials from '@/components/home/Testimonials';
import FAQ from '@/components/home/FAQ';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Hero />
      <StatsBar />
      <WhyBetter />
      <Testimonials />
      <FAQ />
    </div>
  );
}
