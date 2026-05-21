'use client';

import React, { useState } from 'react';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const TESTIMONIALS = [
  {
    quote: "Better made our home buying process so smooth. The digital uploads and fast communication were amazing. We got pre-approved in under 5 minutes and closed on our first home ahead of schedule!",
    author: "Sarah & David L.",
    type: "First-time Homebuyers",
    stars: 5,
  },
  {
    quote: "I saved over $200 a month by refinancing with Better. There were no hidden fees, just straightforward numbers from day one. Their online dashboard kept me updated every single step of the way.",
    author: "Robert M.",
    type: "Refinanced in 2023",
    stars: 5,
  },
  {
    quote: "The customer service was phenomenal. Since they don't work on commission, their loan advisors felt like genuine partners, explaining every detail and helping us make the right financial choice.",
    author: "Jessica K.",
    type: "Homebuyer",
    stars: 5,
  },
];

export default function Testimonials() {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(0); // -1 for left, 1 for right

  const nextStep = () => {
    setDirection(1);
    setIndex((prev) => (prev + 1) % TESTIMONIALS.length);
  };

  const prevStep = () => {
    setDirection(-1);
    setIndex((prev) => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);
  };

  const current = TESTIMONIALS[index];

  // Animation variants
  const slideVariants = {
    enter: (dir: number) => ({
      x: dir > 0 ? 100 : -100,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (dir: number) => ({
      x: dir < 0 ? 100 : -100,
      opacity: 0,
    }),
  };

  return (
    <section className="bg-white py-20 overflow-hidden">
      <div className="max-w-4xl mx-auto px-6 flex flex-col items-center">
        <div className="w-12 h-12 rounded-full bg-better-green-light flex items-center justify-center mb-6 text-better-green">
          <Quote size={24} className="fill-current" />
        </div>

        <h2 className="font-serif text-3xl sm:text-4xl text-better-green-dark text-center mb-12">
          What our customers say
        </h2>

        {/* Carousel Container */}
        <div className="relative w-full min-h-[220px] flex items-center justify-center">
          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={index}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.3, ease: 'easeInOut' }}
              className="text-center flex flex-col items-center"
            >
              {/* Star Rating */}
              <div className="flex items-center space-x-1 mb-4">
                {[...Array(current.stars)].map((_, i) => (
                  <Star key={i} size={18} className="text-yellow-400 fill-current" />
                ))}
              </div>

              {/* Quote */}
              <p className="font-serif text-lg sm:text-xl md:text-2xl text-text-primary leading-relaxed max-w-3xl italic">
                &ldquo;{current.quote}&rdquo;
              </p>

              {/* Author Info */}
              <div className="mt-6">
                <p className="font-sans font-bold text-base text-text-primary">{current.author}</p>
                <p className="text-sm text-text-secondary mt-0.5">{current.type}</p>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Controls */}
        <div className="flex items-center space-x-6 mt-12">
          <button
            onClick={prevStep}
            className="w-11 h-11 rounded-full border border-border flex items-center justify-center hover:bg-surface hover:text-better-green transition-all"
            aria-label="Previous testimonial"
          >
            <ChevronLeft size={20} />
          </button>
          
          {/* Dots Indicator */}
          <div className="flex items-center space-x-2">
            {TESTIMONIALS.map((_, i) => (
              <button
                key={i}
                onClick={() => {
                  setDirection(i > index ? 1 : -1);
                  setIndex(i);
                }}
                className={`w-2.5 h-2.5 rounded-full transition-all duration-200 ${
                  i === index ? 'bg-better-green w-6' : 'bg-border'
                }`}
                aria-label={`Go to testimonial ${i + 1}`}
              />
            ))}
          </div>

          <button
            onClick={nextStep}
            className="w-11 h-11 rounded-full border border-border flex items-center justify-center hover:bg-surface hover:text-better-green transition-all"
            aria-label="Next testimonial"
          >
            <ChevronRight size={20} />
          </button>
        </div>
      </div>
    </section>
  );
}
