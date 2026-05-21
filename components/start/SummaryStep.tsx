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
        <div className="w-16 h-16 rounded-full bg-better-green-light flex items-center justify-center text-better-green mb-6 animate-bounce">
          <CheckCircle2 size={36} className="fill-current text-white bg-better-green rounded-full" />
        </div>

        <h2 className="font-serif text-2xl sm:text-3xl text-better-green-dark font-bold">
          Application Submitted!
        </h2>
        <p className="text-text-secondary text-sm mt-2 max-w-sm">
          Thank you for choosing Better. Our loan specialists are already reviewing your details.
        </p>

        {/* Info Grid */}
        <div className="w-full bg-surface border border-border rounded-2xl p-6 text-left my-8 space-y-4 shadow-inner">
          <h3 className="text-xs font-bold text-text-primary uppercase tracking-wider border-b border-border pb-2">
            Your Selections
          </h3>
          
          <div className="grid grid-cols-2 gap-y-3 text-sm">
            <span className="text-text-secondary font-medium">Goal:</span>
            <span className="text-text-primary font-bold text-right">
              {GOAL_LABELS[goal] || goal}
            </span>

            <span className="text-text-secondary font-medium">Property Use:</span>
            <span className="text-text-primary font-bold text-right">
              {PROPERTY_LABELS[propertyUse] || propertyUse}
            </span>

            <span className="text-text-secondary font-medium">Email:</span>
            <span className="text-text-primary font-bold text-right break-all">
              {email}
            </span>

            <span className="text-text-secondary font-medium">Phone:</span>
            <span className="text-text-primary font-bold text-right">
              {phone}
            </span>
          </div>
        </div>

        {/* Buttons */}
        <div className="w-full flex flex-col sm:flex-row gap-3">
          <Link
            href="/"
            className="flex-1 bg-better-green hover:bg-better-green-dark text-white font-semibold py-3.5 rounded-xl shadow-md transition-colors flex items-center justify-center space-x-2"
          >
            <HomeIcon size={18} />
            <span>Go to Homepage</span>
          </Link>
          <button
            onClick={onReset}
            className="flex-1 border border-border hover:bg-gray-50 text-text-primary font-semibold py-3.5 rounded-xl transition-all"
          >
            Start New Quote
          </button>
        </div>
      </div>
    </WizardStep>
  );
}
