'use client';

import React, { useState } from 'react';
import { Plus } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const FAQS = [
  {
    question: 'How long does the pre-approval process take?',
    answer: 'You can get pre-approved online in about 3 minutes. After entering some basic details about your income, assets, and desired property, our automated underwriting system performs a soft credit check (which won\'t affect your credit score) and generates a pre-approval letter instantly.',
  },
  {
    question: 'What are lender fees, and does Better charge them?',
    answer: 'Lender fees are charges standard banks and brokers impose to cover application processing, underwriting, and administrative work. Better charges zero lender fees (no application, underwriting, or origination fees). We keep our overhead low through technology and pass those savings to you.',
  },
  {
    question: 'Is Better a bank or a broker?',
    answer: 'Better is a direct mortgage lender, meaning we underwrite and fund your loan ourselves. We are not brokers. This allows us to make credit decisions faster, control the user experience from start to finish, and eliminate broker commissions.',
  },
  {
    question: 'Will checking my rate affect my credit score?',
    answer: 'No. When you check your basic rates on Better.com, we perform a "soft" credit pull, which has absolutely no impact on your credit score. We only perform a "hard" credit pull later in the application process when you authorize us to lock your rate.',
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section className="bg-cream py-32 border-t border-border/60">
      <div className="max-w-3xl mx-auto px-6">
        <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-ink text-center mb-16 font-black">
          Got questions? We&apos;ve got answers.
        </h2>

        <div className="space-y-4">
          {FAQS.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={faq.question}
                className={`border border-border rounded-2xl overflow-hidden shadow-sm transition-all duration-300 ${
                  isOpen ? 'border-green-500/20 bg-green-50 pl-[1px]' : 'bg-white'
                }`}
                style={isOpen ? { borderLeft: '3px solid var(--green-500)' } : undefined}
              >
                <button
                  onClick={() => toggle(idx)}
                  className="w-full px-6 py-6 flex items-center justify-between text-left focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <span className="font-sans font-medium text-ink text-base sm:text-lg">
                    {faq.question}
                  </span>
                  <motion.span
                    animate={{ rotate: isOpen ? 45 : 0 }}
                    transition={{ duration: 0.25, ease: 'easeOut' }}
                    className="text-muted shrink-0 flex items-center justify-center w-8 h-8 rounded-full bg-cream border border-border"
                  >
                    <Plus size={16} />
                  </motion.span>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.28, ease: 'easeInOut' }}
                    >
                      <div className="px-6 pb-6 pt-1 text-sm sm:text-base text-muted border-t border-border/30 leading-relaxed">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
