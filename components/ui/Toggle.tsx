'use client';

import React from 'react';

interface ToggleOption<T extends string | number> {
  value: T;
  label: string;
}

interface ToggleProps<T extends string | number> {
  options: ToggleOption<T>[];
  value: T;
  onChange: (val: T) => void;
}

export default function Toggle<T extends string | number>({ options, value, onChange }: ToggleProps<T>) {
  return (
    <div className="flex bg-surface p-1 rounded-full border border-border w-full">
      {options.map((option) => {
        const isSelected = option.value === value;
        return (
          <button
            key={option.value}
            type="button"
            onClick={() => onChange(option.value)}
            className={`flex-1 text-center py-2.5 px-4 rounded-full text-sm font-semibold transition-all duration-200 ${
              isSelected
                ? 'bg-better-green text-white shadow-sm'
                : 'text-text-primary hover:text-better-green-dark hover:bg-gray-100/50'
            }`}
          >
            {option.label}
          </button>
        );
      })}
    </div>
  );
}
