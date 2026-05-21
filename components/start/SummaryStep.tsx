'use client';

import React from 'react';
import { CheckCircle2, Home as HomeIcon } from 'lucide-react';
import Link from 'next/link';
import WizardStep from './WizardStep';

interface SummaryStepProps {
  goal: string;
  propertyUse: string;
  email: string;
  phone: string;
  onReset: () => void;
}

const GOAL_LABELS: Record<string, string> = {
  buy: 'Buy a home',
  refinance: 'Refinance my mortgage',
  cashout: 'Get cash from my home',
};

const PROPERTY_LABELS: Record<string, string> = {
  primary: 'Primary Home',
  secondary: 'Secondary Home',
  investment: 'Investment Property',
};

export default function SummaryStep({
  goal,
  propertyUse,
  email,
  phone,
  onReset,
}: SummaryStepProps) {
  return (
    <WizardStep>
      <div className="text-center flex flex-col items-center">
        {/* Success Icon */}
        <div className="w-16 h-16 rounded-full bg-green-50 flex items-center justify-center text-green-500 mb-6 shadow-sm ring-1 ring-black/5 animate-pulse">
          <CheckCircle2 size={36} className="text-green-500 fill-white" />
        </div>

        <h2 className="font-serif text-2xl sm:text-3xl text-ink font-bold tracking-tight">
          Application Submitted!
        </h2>
        <p className="text-muted text-sm mt-2 max-w-sm">
          Thank you for choosing Better. Our loan specialists are already reviewing your details.
        </p>

        {/* Info Grid */}
        <div className="w-full bg-cream border border-border/80 rounded-2xl p-6 text-left my-8 space-y-4 shadow-sm">
          <h3 className="text-xs font-bold text-ink uppercase tracking-widest border-b border-border pb-2.5 font-sans">
            Your Selections
          </h3>
          
          <div className="grid grid-cols-2 gap-y-3 text-sm font-sans">
            <span className="text-muted font-semibold">Goal:</span>
            <span className="text-ink font-bold text-right">
              {GOAL_LABELS[goal] || goal}
            </span>

            <span className="text-muted font-semibold">Property Use:</span>
            <span className="text-ink font-bold text-right">
              {PROPERTY_LABELS[propertyUse] || propertyUse}
            </span>

            <span className="text-muted font-semibold">Email:</span>
            <span className="text-ink font-bold text-right break-all">
              {email}
            </span>

            <span className="text-muted font-semibold">Phone:</span>
            <span className="text-ink font-bold text-right font-sans">
              {phone}
            </span>
          </div>
        </div>

        {/* Buttons */}
        <div className="w-full flex flex-col sm:flex-row gap-3">
          <Link
            href="/"
            className="flex-1 bg-green-500 hover:bg-green-600 text-white font-semibold py-3.5 rounded-xl shadow-md transition-colors flex items-center justify-center space-x-2"
          >
            <HomeIcon size={18} />
            <span>Go to Homepage</span>
          </Link>
          <button
            onClick={onReset}
            className="flex-1 border border-border/80 hover:bg-gray-50 text-ink font-semibold py-3.5 rounded-xl transition-all shadow-sm"
          >
            Start New Quote
          </button>
        </div>
      </div>
    </WizardStep>
  );
}
