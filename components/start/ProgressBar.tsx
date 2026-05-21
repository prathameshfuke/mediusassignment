'use client';

import React from 'react';

interface ProgressBarProps {
  progress: number; // percentage from 0 to 100
}

export default function ProgressBar({ progress }: ProgressBarProps) {
  return (
    <div className="w-full h-1 bg-gray-100 relative">
      <div
        className="h-full bg-better-green transition-all duration-300 ease-out rounded-r-full"
        style={{ width: `${progress}%` }}
        role="progressbar"
        aria-valuenow={progress}
        aria-valuemin={0}
        aria-valuemax={100}
      />
    </div>
  );
}
