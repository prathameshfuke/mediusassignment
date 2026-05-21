import React from 'react';
import MortgageCalculator from '@/components/calculator/MortgageCalculator';

export const metadata = {
  title: 'Mortgage Calculator - Better.com Replica',
  description: 'Calculate your monthly mortgage payments using our free interactive calculator. Customize home price, down payment, loan term, and interest rates.',
};

export default function MortgageCalculatorPage() {
  return <MortgageCalculator />;
}
