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
          ? 'border-better-green bg-better-green-light/20 shadow-md'
          : 'border-border bg-white hover:border-better-green/40 hover:shadow-md'
      } ${className}`}
    >
      {children}
    </div>
  );
}
