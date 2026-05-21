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
    <div className="flex bg-gray-100/80 p-1 rounded-full border border-border/60 w-full">
      {options.map((option) => {
        const isSelected = option.value === value;
        return (
          <button
            key={option.value}
            type="button"
            onClick={() => onChange(option.value)}
            className={`flex-1 text-center py-2.5 px-4 rounded-full text-sm font-bold transition-all duration-200 ${
              isSelected
                ? 'bg-green-500 text-white shadow-sm'
                : 'text-muted hover:text-ink hover:bg-gray-200/40'
            }`}
          >
            {option.label}
          </button>
        );
      })}
    </div>
  );
}
