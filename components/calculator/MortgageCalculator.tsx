'use client';

import React, { useState, useMemo } from 'react';
import InputPanel from './InputPanel';
import ResultPanel from './ResultPanel';
import { HelpCircle } from 'lucide-react';

export default function MortgageCalculator() {
  // Inputs state with defaults requested:
  // Home price: $300,000, Down: 20%, 30yr, 6.5%, taxes: $265, ZIP: 421005
  const [homePrice, setHomePrice] = useState(300000);
  const [downPaymentPercent, setDownPaymentPercent] = useState(20);
  const [downPaymentAmt, setDownPaymentAmt] = useState(60000);
  const [loanTerm, setLoanTerm] = useState(30); // 15, 20, or 30 years
  const [interestRate, setInterestRate] = useState(6.5);
  const [zipCode, setZipCode] = useState('421005');
  const [propertyTaxes, setPropertyTaxes] = useState(265);
  const [homeInsurance, setHomeInsurance] = useState(100);
  const [hoaFees, setHoaFees] = useState(0);

  // Recalculate Principal & Interest using useMemo to optimize re-renders
  const principalAndInterest = useMemo(() => {
    const principal = homePrice - downPaymentAmt;
    if (principal <= 0) return 0;
    
    // If interest rate is 0, avoid division by zero
    if (interestRate <= 0) {
      return Math.round(principal / (loanTerm * 12));
    }
    
    const r = interestRate / 12 / 100; // monthly rate
    const n = loanTerm * 12; // total months
    
    const payment = (principal * (r * Math.pow(1 + r, n))) / (Math.pow(1 + r, n) - 1);
    
    return isNaN(payment) || !isFinite(payment) ? 0 : Math.round(payment);
  }, [homePrice, downPaymentAmt, loanTerm, interestRate]);

  return (
    <section className="py-12 bg-surface min-h-[calc(100vh-68px)]">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header */}
        <div className="mb-10 max-w-2xl">
          <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-better-green-dark mb-4">
            Mortgage Calculator
          </h1>
          <p className="text-text-secondary text-sm sm:text-base leading-relaxed">
            Estimate your monthly mortgage payment including principal, interest, taxes, insurance, and HOA fees. Adjust inputs in real time to see the breakdown and find your ideal budget.
          </p>
        </div>

        {/* Layout Grid (Mobile-first: stack inputs above, results below) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Inputs Panel: 7 cols on large screens */}
          <div className="lg:col-span-7">
            <InputPanel
              homePrice={homePrice}
              setHomePrice={setHomePrice}
              downPaymentPercent={downPaymentPercent}
              setDownPaymentPercent={setDownPaymentPercent}
              downPaymentAmt={downPaymentAmt}
              setDownPaymentAmt={setDownPaymentAmt}
              loanTerm={loanTerm}
              setLoanTerm={setLoanTerm}
              interestRate={interestRate}
              setInterestRate={setInterestRate}
              zipCode={zipCode}
              setZipCode={setZipCode}
              propertyTaxes={propertyTaxes}
              setPropertyTaxes={setPropertyTaxes}
              homeInsurance={homeInsurance}
              setHomeInsurance={setHomeInsurance}
              hoaFees={hoaFees}
              setHoaFees={setHoaFees}
            />
          </div>

          {/* Results Panel: 5 cols on large screens */}
          <div className="lg:col-span-5 lg:sticky lg:top-24">
            <ResultPanel
              principalAndInterest={principalAndInterest}
              propertyTaxes={propertyTaxes}
              homeInsurance={homeInsurance}
              hoaFees={hoaFees}
            />
          </div>
        </div>

        {/* Info/Disclaimers section */}
        <div className="mt-16 bg-white p-6 sm:p-8 rounded-2xl border border-border shadow-sm max-w-4xl">
          <h3 className="font-sans font-bold text-lg text-text-primary flex items-center space-x-2 mb-4">
            <HelpCircle className="text-better-green" size={20} />
            <span>Understanding your mortgage payment</span>
          </h3>
          <div className="text-sm text-text-secondary space-y-4 leading-relaxed">
            <p>
              Your monthly payment is more than just paying back the money you borrowed. It also includes local government taxes, homeowner insurance policies, and potentially homeowners association (HOA) dues:
            </p>
            <ul className="list-disc pl-5 space-y-2">
              <li>
                <strong>Principal & Interest:</strong> Principal is the actual money returning to pay down the initial loan balance. Interest is the lender&apos;s fee for borrowing the money.
              </li>
              <li>
                <strong>Property Taxes:</strong> Collected by local counties and municipalities to pay for public schools, fire departments, roads, and municipal infrastructure.
              </li>
              <li>
                <strong>Home Insurance:</strong> Protection for your home structure and contents in case of fire, storms, or theft. Most lenders require this.
              </li>
              <li>
                <strong>HOA Fees:</strong> Required if your home resides in a managed community, condo building, or townhouse development to cover shared amenities and neighborhood maintenance.
              </li>
            </ul>
          </div>
        </div>

      </div>
    </section>
  );
}
