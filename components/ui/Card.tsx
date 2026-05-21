'use client';

import React from 'react';

interface CardProps {
  selected?: boolean;
  onClick?: () => void;
  className?: string;
  children: React.ReactNode;
}

export default function Card({
  selected = false,
  onClick,
  className = '',
  children,
}: CardProps) {
  return (
    <div
      onClick={onClick}
      className={`group relative p-6 rounded-2xl border-2 transition-all duration-300 cursor-pointer ${
        selected
          ? 'border-green-500 bg-green-50/40 shadow-md ring-2 ring-green-500/20 scale-[1.01]'
          : 'border-border/80 bg-white hover:border-green-500/40 hover:shadow-md hover:-translate-y-0.5'
      } ${className}`}
    >
      {children}
    </div>
  );
}
