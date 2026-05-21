'use client';

import React from 'react';
import Card from '@/components/ui/Card';
import { Home, Compass, TrendingUp } from 'lucide-react';
import WizardStep from './WizardStep';

interface StepTwoProps {
  value: string;
  onChange: (val: string) => void;
  onNext: () => void;
}

const OPTIONS = [
  {
    value: 'primary',
    label: 'Primary Home',
    desc: 'I plan to live here as my main residence for most of the year.',
    icon: <Home className="w-6 h-6 text-better-green" />,
  },
  {
    value: 'secondary',
    label: 'Secondary Home',
    desc: 'A vacation home or seasonal residence I will occupy occasionally.',
    icon: <Compass className="w-6 h-6 text-better-green" />,
  },
  {
    value: 'investment',
    label: 'Investment Property',
    desc: 'A rental or investment property to generate income or equity.',
    icon: <TrendingUp className="w-6 h-6 text-better-green" />,
  },
];

export default function StepTwo({ value, onChange, onNext }: StepTwoProps) {
  const handleSelect = (val: string) => {
    onChange(val);
    // Auto advance with small delay for visual feedback
    setTimeout(() => {
      onNext();
    }, 250);
  };

  return (
    <WizardStep>
      <div className="text-center mb-4">
        <h2 className="font-serif text-2xl sm:text-3xl text-better-green-dark font-bold">
          How will you use this property?
        </h2>
        <p className="text-text-secondary text-sm mt-2">
          Your property type affects loan rates and underwriting guidelines.
        </p>
      </div>

      <div className="space-y-4">
        {OPTIONS.map((opt) => (
          <Card
            key={opt.value}
            selected={value === opt.value}
            onClick={() => handleSelect(opt.value)}
            className="flex items-center space-x-4 text-left"
          >
            <div className="w-12 h-12 rounded-xl bg-better-green-light flex items-center justify-center shrink-0">
              {opt.icon}
            </div>
            <div>
              <h3 className="font-sans font-bold text-base text-text-primary">
                {opt.label}
              </h3>
              <p className="text-text-secondary text-xs mt-0.5 leading-relaxed">
                {opt.desc}
              </p>
            </div>
          </Card>
        ))}
      </div>
    </WizardStep>
  );
}
