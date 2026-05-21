'use client';

import React from 'react';
import { motion } from 'framer-motion';

interface WizardStepProps {
  children: React.ReactNode;
}

const variants = {
  enter: {
    x: 20,
    opacity: 0,
  },
  center: {
    x: 0,
    opacity: 1,
  },
  exit: {
    x: -20,
    opacity: 0,
  },
};

export default function WizardStep({ children }: WizardStepProps) {
  return (
    <motion.div
      variants={variants}
      initial="enter"
      animate="center"
      exit="exit"
      transition={{
        x: { type: 'spring', stiffness: 300, damping: 30 },
        opacity: { duration: 0.2 },
      }}
      className="w-full max-w-lg mx-auto flex flex-col space-y-6"
    >
      {children}
    </motion.div>
  );
}
