'use client';

import React, { useRef } from 'react';
import { Star, ChevronLeft, ChevronRight, Quote, CheckCircle } from 'lucide-react';

const TESTIMONIALS = [
  {
    quote: "Better made our home buying process so smooth. The digital uploads and fast communication were amazing. We got pre-approved in under 5 minutes and closed on our first home ahead of schedule!",
    author: "Sarah & David L.",
    initials: "SL",
    type: "First-time Homebuyers",
    stars: 5,
  },
  {
    quote: "I saved over $200 a month by refinancing with Better. There were no hidden fees, just straightforward numbers from day one. Their online dashboard kept me updated every single step of the way.",
    author: "Robert M.",
    initials: "RM",
    type: "Refinanced in 2023",
    stars: 5,
  },
  {
    quote: "The customer service was phenomenal. Since they don't work on commission, their loan advisors felt like genuine partners, explaining every detail and helping us make the right financial choice.",
    author: "Jessica K.",
    initials: "JK",
    type: "Homebuyer",
    stars: 5,
  },
];

export default function Testimonials() {
  const containerRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (containerRef.current) {
      const cardWidth = containerRef.current.clientWidth;
      containerRef.current.scrollBy({
        left: direction === 'left' ? -cardWidth : cardWidth,
        behavior: 'smooth',
      });
    }
  };

  return (
    <section className="bg-cream py-28 overflow-hidden border-b border-border/60">
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col items-center">
        <div className="w-14 h-14 rounded-full bg-green-50 flex items-center justify-center mb-6 text-green-500 border border-green-500/10">
          <Quote size={24} className="fill-current" />
        </div>

        <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-ink text-center mb-16 font-black">
          What our customers say
        </h2>

        {/* Carousel Scroll Container */}
        <div
          ref={containerRef}
          className="w-full flex overflow-x-auto snap-x snap-mandatory scroll-smooth no-scrollbar space-x-6 pb-4"
        >
          {TESTIMONIALS.map((testimonial, idx) => (
            <div
              key={idx}
              className="flex-shrink-0 w-full md:w-[640px] snap-center bg-white p-8 md:p-10 rounded-2xl border-l-[4px] border-l-green-500 border border-border shadow-md flex flex-col justify-between min-h-[300px]"
            >
              <div>
                {/* Rating & Verified Badge */}
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center space-x-1">
                    {[...Array(testimonial.stars)].map((_, i) => (
                      <Star key={i} size={16} className="text-amber-500 fill-current" />
                    ))}
                  </div>
                  <div className="flex items-center space-x-1.5 bg-green-50 text-green-600 px-3 py-1 rounded-full text-xs font-bold border border-green-500/10">
                    <CheckCircle size={12} className="fill-current text-white" />
                    <span>Verified Homeowner</span>
                  </div>
                </div>

                {/* Quote */}
                <p className="font-serif text-lg sm:text-xl text-ink leading-relaxed italic">
                  &ldquo;{testimonial.quote}&rdquo;
                </p>
              </div>

              {/* Reviewer Meta Info */}
              <div className="flex items-center space-x-4 mt-8 pt-6 border-t border-border/50">
                <div className="w-12 h-12 rounded-full bg-green-100 text-green-600 flex items-center justify-center font-bold text-sm">
                  {testimonial.initials}
                </div>
                <div>
                  <p className="font-sans font-bold text-base text-ink">{testimonial.author}</p>
                  <p className="text-xs text-muted font-semibold mt-0.5">{testimonial.type}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Controls */}
        <div className="flex items-center space-x-4 mt-12">
          <button
            onClick={() => scroll('left')}
            className="w-12 h-12 rounded-full border border-border bg-white flex items-center justify-center hover:bg-green-50 hover:text-green-500 shadow-sm transition-all duration-200"
            aria-label="Previous testimonial"
          >
            <ChevronLeft size={20} />
          </button>
          
          <button
            onClick={() => scroll('right')}
            className="w-12 h-12 rounded-full border border-border bg-white flex items-center justify-center hover:bg-green-50 hover:text-green-500 shadow-sm transition-all duration-200"
            aria-label="Next testimonial"
          >
            <ChevronRight size={20} />
          </button>
        </div>
      </div>
    </section>
  );
}
