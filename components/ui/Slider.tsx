'use client';

import React from 'react';

interface SliderProps {
  min: number;
  max: number;
  step?: number;
  value: number;
  onChange: (val: number) => void;
  className?: string;
}

export default function Slider({
  min,
  max,
  step = 1,
  value,
  onChange,
  className = '',
}: SliderProps) {
  return (
    <div className={`w-full flex items-center ${className}`}>
      <input
        type="range"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={(e) => onChange(Number(e.target.value))}
        className="w-full"
      />
    </div>
  );
}
