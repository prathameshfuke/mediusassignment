'use client';

import React from 'react';
import CountUp from '@/components/ui/CountUp';

interface DonutChartProps {
  principalAndInterest: number;
  propertyTaxes: number;
  homeInsurance: number;
  hoaFees: number;
}

export default function DonutChart({
  principalAndInterest,
  propertyTaxes,
  homeInsurance,
  hoaFees,
}: DonutChartProps) {
  // Coerce inputs to numbers to protect against potential string props
  const pAndI = Number(principalAndInterest) || 0;
  const propTaxes = Number(propertyTaxes) || 0;
  const ins = Number(homeInsurance) || 0;
  const hoa = Number(hoaFees) || 0;

  const total = pAndI + propTaxes + ins + hoa;

  const data = [
    { name: 'Principal & Interest', value: pAndI, color: '#017848' },
    { name: 'Property Taxes', value: propTaxes, color: '#003d25' },
    { name: 'Home Insurance', value: ins, color: '#1ee07f' },
    { name: 'HOA Fees', value: hoa, color: '#9ca3af' },
  ].filter(item => item.value > 0);

  // Donut geometry details
  const radius = 70;
  const circumference = 2 * Math.PI * radius; // ~439.82
  const strokeWidth = 14;

  let currentAccumulatedLength = 0;
  const segments = data.map((item) => {
    const percent = total > 0 ? item.value / total : 0;
    const strokeLength = percent * circumference;
    const accumulatedLength = currentAccumulatedLength;
    currentAccumulatedLength += strokeLength;

    return {
      ...item,
      strokeLength,
      accumulatedLength,
    };
  });

  return (
    <div className="relative w-[180px] h-[180px] flex items-center justify-center shrink-0 select-none">
      <svg
        viewBox="0 0 160 160"
        className="w-full h-full transform -rotate-90"
      >
        {/* Background track circle */}
        <circle
          cx="80"
          cy="80"
          r={radius}
          fill="transparent"
          stroke="#f1f3f5"
          strokeWidth={strokeWidth}
        />
        {/* Animated value segments */}
        {segments.map((seg) => (
          <circle
            key={seg.name}
            cx="80"
            cy="80"
            r={radius}
            fill="transparent"
            stroke={seg.color}
            strokeWidth={strokeWidth}
            strokeDasharray={`${seg.strokeLength} ${circumference}`}
            strokeDashoffset={-seg.accumulatedLength}
            strokeLinecap="butt"
            style={{
              transition: 'stroke-dasharray 0.6s cubic-bezier(0.25, 1, 0.5, 1), stroke-dashoffset 0.6s cubic-bezier(0.25, 1, 0.5, 1), stroke 0.6s',
            }}
          />
        ))}
      </svg>

      {/* Center content */}
      <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
        <span className="text-[10px] font-bold text-muted uppercase tracking-widest font-sans">Total</span>
        <span className="text-xl font-bold text-ink mt-0.5 flex items-baseline">
          <span className="text-sm font-semibold mr-0.5">$</span>
          <CountUp end={total} duration={400} />
        </span>
      </div>
    </div>
  );
}

