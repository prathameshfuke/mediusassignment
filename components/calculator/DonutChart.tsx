'use client';

import React, { useEffect, useState } from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts';

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
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const total = principalAndInterest + propertyTaxes + homeInsurance + hoaFees;

  const data = [
    { name: 'Principal & Interest', value: principalAndInterest, color: '#017848' },
    { name: 'Property Taxes', value: propertyTaxes, color: '#004733' },
    { name: 'Home Insurance', value: homeInsurance, color: '#1ee07f' },
    { name: 'HOA Fees', value: hoaFees, color: '#6b7280' },
  ].filter(item => item.value > 0);

  if (!isMounted) {
    return (
      <div className="w-[200px] h-[200px] rounded-full border-[20px] border-gray-100 flex items-center justify-center animate-pulse">
        <span className="text-xs text-text-secondary">Loading...</span>
      </div>
    );
  }

  return (
    <div className="relative w-[200px] h-[200px]">
      <ResponsiveContainer width="100%" height="100%">
        <PieChart>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            innerRadius={65}
            outerRadius={85}
            paddingAngle={2}
            dataKey="value"
            stroke="none"
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={entry.color} />
            ))}
          </Pie>
        </PieChart>
      </ResponsiveContainer>

      {/* Center content */}
      <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
        <span className="text-xs font-semibold text-text-secondary uppercase tracking-wider">Total</span>
        <span className="text-xl font-bold text-text-primary mt-0.5">
          {new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'USD',
            maximumFractionDigits: 0,
          }).format(total)}
        </span>
      </div>
    </div>
  );
}
