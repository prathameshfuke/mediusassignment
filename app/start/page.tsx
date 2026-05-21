'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { ArrowLeft, PhoneCall } from 'lucide-react';
import { AnimatePresence } from 'framer-motion';

import ProgressBar from '@/components/start/ProgressBar';
import StepOne from '@/components/start/StepOne';
import StepTwo from '@/components/start/StepTwo';
import StepThree from '@/components/start/StepThree';
import SummaryStep from '@/components/start/SummaryStep';

export default function StartWizard() {
  const [step, setStep] = useState(1);
  const [goal, setGoal] = useState('');
  const [propertyUse, setPropertyUse] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');

  const nextStep = () => setStep((prev) => Math.min(4, prev + 1));
  const prevStep = () => setStep((prev) => Math.max(1, prev - 1));
  
  const resetWizard = () => {
    setGoal('');
    setPropertyUse('');
    setEmail('');
    setPhone('');
    setStep(1);
  };

  // Calculate progress percentage
  // Step 1: 33%, Step 2: 66%, Step 3: 100%, Step 4: 100%
  const progress = step === 1 ? 33 : step === 2 ? 66 : 100;

  return (
    <div className="fixed inset-0 bg-white z-[60] flex flex-col justify-between overflow-y-auto">
      
      {/* Upper Part: Header & Progress Bar */}
      <div>
        {/* Minimal Header */}
        <header className="h-[68px] border-b border-border flex items-center justify-between px-6 max-w-7xl mx-auto w-full">
          {/* Logo & Back button */}
          <div className="flex items-center space-x-6">
            <Link href="/" className="flex items-center space-x-1 focus:outline-none shrink-0">
              <span className="font-serif text-[26px] font-bold text-better-green lowercase tracking-tighter">
                better
              </span>
              <span className="w-1.5 h-1.5 rounded-full bg-better-accent mt-3"></span>
            </Link>

            {/* Back Button (Only visible on steps 2 and 3) */}
            {step > 1 && step < 4 && (
              <button
                onClick={prevStep}
                className="flex items-center space-x-1.5 text-xs font-bold text-text-primary hover:text-better-green transition-colors border border-border px-3 py-1.5 rounded-full"
              >
                <ArrowLeft size={14} />
                <span>Back</span>
              </button>
            )}
          </div>

          {/* Right helper text */}
          <div className="flex items-center space-x-2 text-text-secondary text-xs sm:text-sm font-medium">
            <PhoneCall size={14} className="text-better-green" />
            <span className="hidden sm:inline">Questions? Call</span>
            <a href="tel:1-800-228-8370" className="font-bold text-text-primary hover:underline">
              (800) 228-8370
            </a>
          </div>
        </header>

        {/* Progress Bar */}
        {step < 4 && <ProgressBar progress={progress} />}
      </div>

      {/* Center: Main Step Area */}
      <main className="flex-grow flex items-center justify-center py-12 px-6">
        <div className="w-full max-w-md">
          <AnimatePresence mode="wait">
            {step === 1 && (
              <StepOne
                key="step-1"
                value={goal}
                onChange={setGoal}
                onNext={nextStep}
              />
            )}
            {step === 2 && (
              <StepTwo
                key="step-2"
                value={propertyUse}
                onChange={setPropertyUse}
                onNext={nextStep}
              />
            )}
            {step === 3 && (
              <StepThree
                key="step-3"
                email={email}
                setEmail={setEmail}
                phone={phone}
                setPhone={setPhone}
                onSubmit={nextStep}
              />
            )}
            {step === 4 && (
              <SummaryStep
                key="step-4"
                goal={goal}
                propertyUse={propertyUse}
                email={email}
                phone={phone}
                onReset={resetWizard}
              />
            )}
          </AnimatePresence>
        </div>
      </main>

      {/* Footer / Safety lock icon */}
      <footer className="py-6 border-t border-border bg-surface text-center">
        <div className="max-w-7xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between text-xs text-text-secondary gap-3">
          <span>Better Mortgage Corp. | NMLS #1178653</span>
          <div className="flex items-center space-x-1">
            <span>🔒 Secure SSL Encrypted Connection</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
