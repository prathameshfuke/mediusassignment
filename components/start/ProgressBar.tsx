'use client';

import React from 'react';

interface ProgressBarProps {
  progress: number; // percentage from 0 to 100
}

export default function ProgressBar({ progress }: ProgressBarProps) {
  return (
    <div className="w-full h-1.5 bg-gray-100/80 relative overflow-hidden">
      <div
        className="h-full bg-green-500 transition-all duration-500 ease-out rounded-r-full shadow-[0_0_8px_rgba(1,120,72,0.4)]"
        style={{ width: `${progress}%` }}
        role="progressbar"
        aria-valuenow={progress}
        aria-valuemin={0}
        aria-valuemax={100}
      />
    </div>
  );
}
