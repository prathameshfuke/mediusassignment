'use client';

import React from 'react';
import Link from 'next/link';
import DonutChart from './DonutChart';

interface ResultPanelProps {
  principalAndInterest: number;
  propertyTaxes: number;
  homeInsurance: number;
  hoaFees: number;
}

export default function ResultPanel({
  principalAndInterest,
  propertyTaxes,
  homeInsurance,
  hoaFees,
}: ResultPanelProps) {
  const total = principalAndInterest + propertyTaxes + homeInsurance + hoaFees;

  const formatCurrency = (val: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      maximumFractionDigits: 0,
    }).format(val);
  };

  const BREAKDOWN_ITEMS = [
    {
      name: 'Principal & Interest',
      value: principalAndInterest,
      color: 'bg-better-green',
      desc: 'The core loan payment (principal and interest combined).',
    },
    {
      name: 'Property Taxes',
      value: propertyTaxes,
      color: 'bg-better-green-dark',
      desc: 'Local government taxes based on your property value.',
    },
    {
      name: 'Home Insurance',
      value: homeInsurance,
      color: 'bg-better-accent',
      desc: 'Monthly estimate for protecting your home against damage.',
    },
    {
      name: 'HOA Fees',
      value: hoaFees,
      color: 'bg-gray-400',
      desc: 'Monthly dues paid to a homeowners association (if applicable).',
    },
  ];

  return (
    <div className="bg-white p-6 sm:p-8 rounded-2xl border border-border shadow-sm flex flex-col justify-between h-full space-y-8">
      {/* Upper Part: Summary */}
      <div className="flex flex-col space-y-6">
        <div>
          <h3 className="text-sm font-semibold text-text-secondary uppercase tracking-wider">
            Estimated monthly payment
          </h3>
          <p className="text-[44px] sm:text-[54px] font-sans font-black text-better-green-dark leading-none mt-2">
            {formatCurrency(total)}
            <span className="text-base sm:text-lg font-medium text-text-secondary tracking-normal">/mo</span>
          </p>
        </div>

        {/* Donut Chart wrapper */}
        <div className="flex justify-center py-4">
          <DonutChart
            principalAndInterest={principalAndInterest}
            propertyTaxes={propertyTaxes}
            homeInsurance={homeInsurance}
            hoaFees={hoaFees}
          />
        </div>

        {/* Legend Grid */}
        <div className="space-y-3 pt-2">
          {BREAKDOWN_ITEMS.map((item) => (
            <div
              key={item.name}
              className="flex justify-between items-center group relative cursor-help hover:bg-surface p-2 rounded-lg transition-colors duration-150"
            >
              <div className="flex items-center space-x-3">
                <span className={`w-3.5 h-3.5 rounded-full ${item.color} shrink-0`} />
                <div className="flex flex-col">
                  <span className="text-sm font-semibold text-text-primary">{item.name}</span>
                  <span className="text-[10px] text-text-secondary hidden group-hover:block absolute bg-better-green-dark text-white p-2 rounded shadow-lg z-10 top-[-40px] left-8 max-w-xs pointer-events-none">
                    {item.desc}
                  </span>
                </div>
              </div>
              <span className="text-sm font-bold text-text-primary">
                {formatCurrency(item.value)}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Part: CTA */}
      <div className="pt-6 border-t border-border flex flex-col space-y-3">
        <Link
          href="/start"
          className="bg-better-green hover:bg-better-green-dark text-white text-center text-base font-semibold py-4 px-6 rounded-full transition-all duration-200 shadow-md hover:shadow-lg focus:outline-none"
        >
          Get pre-approved
        </Link>
        <p className="text-center text-xs text-text-secondary">
          No credit score impact | Pre-approve in 3 minutes
        </p>
      </div>
    </div>
  );
}
