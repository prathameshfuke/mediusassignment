'use client';

import React from 'react';
import Card from '@/components/ui/Card';
import { Home, RefreshCw, DollarSign } from 'lucide-react';
import WizardStep from './WizardStep';

interface StepOneProps {
  value: string;
  onChange: (val: string) => void;
  onNext: () => void;
}

const OPTIONS = [
  {
    value: 'buy',
    label: 'Buy a home',
    desc: 'I want to purchase a new property and need a mortgage.',
    icon: <Home className="w-6 h-6 text-green-500" />,
  },
  {
    value: 'refinance',
    label: 'Refinance my mortgage',
    desc: 'I want to lower my rate, change terms, or consolidate debt.',
    icon: <RefreshCw className="w-6 h-6 text-green-500" />,
  },
  {
    value: 'cashout',
    label: 'Get cash from my home',
    desc: 'I want to access my home equity for renovations or expenses.',
    icon: <DollarSign className="w-6 h-6 text-green-500" />,
  },
];

export default function StepOne({ value, onChange, onNext }: StepOneProps) {
  const handleSelect = (val: string) => {
    onChange(val);
    // Auto advance with small delay for visual feedback
    setTimeout(() => {
      onNext();
    }, 250);
  };

  return (
    <WizardStep>
      <div className="text-center mb-6">
        <h2 className="font-serif text-2xl sm:text-3xl text-ink font-bold tracking-tight">
          What are you looking to do?
        </h2>
        <p className="text-muted text-sm mt-2">
          Select an option below to start your digital application.
        </p>
      </div>

      <div className="space-y-4">
        {OPTIONS.map((opt) => (
          <Card
            key={opt.value}
            selected={value === opt.value}
            onClick={() => handleSelect(opt.value)}
            className="flex items-center space-x-4 text-left p-5"
          >
            <div className="w-12 h-12 rounded-xl bg-green-50 flex items-center justify-center shrink-0">
              {opt.icon}
            </div>
            <div>
              <h3 className="font-sans font-bold text-base text-ink/90">
                {opt.label}
              </h3>
              <p className="text-muted text-xs mt-0.5 leading-relaxed">
                {opt.desc}
              </p>
            </div>
          </Card>
        ))}
      </div>
    </WizardStep>
  );
}
