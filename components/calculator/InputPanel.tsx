'use client';

import React, { useState, useEffect } from 'react';
import Slider from '@/components/ui/Slider';
import Toggle from '@/components/ui/Toggle';

interface InputPanelProps {
  homePrice: number;
  setHomePrice: (val: number) => void;
  downPaymentPercent: number;
  setDownPaymentPercent: (val: number) => void;
  downPaymentAmt: number;
  setDownPaymentAmt: (val: number) => void;
  loanTerm: number;
  setLoanTerm: (val: number) => void;
  interestRate: number;
  setInterestRate: (val: number) => void;
  zipCode: string;
  setZipCode: (val: string) => void;
  propertyTaxes: number;
  setPropertyTaxes: (val: number) => void;
  homeInsurance: number;
  setHomeInsurance: (val: number) => void;
  hoaFees: number;
  setHoaFees: (val: number) => void;
}

const TERM_OPTIONS = [
  { value: 15, label: '15 years' },
  { value: 20, label: '20 years' },
  { value: 30, label: '30 years' },
];

export default function InputPanel({
  homePrice,
  setHomePrice,
  downPaymentPercent,
  setDownPaymentPercent,
  downPaymentAmt,
  setDownPaymentAmt,
  loanTerm,
  setLoanTerm,
  interestRate,
  setInterestRate,
  zipCode,
  setZipCode,
  propertyTaxes,
  setPropertyTaxes,
  homeInsurance,
  setHomeInsurance,
  hoaFees,
  setHoaFees,
}: InputPanelProps) {
  const [downPaymentMode, setDownPaymentMode] = useState<'percent' | 'dollar'>('percent');

  // Handle Home Price slider changes
  const handleHomePriceChange = (val: number) => {
    setHomePrice(val);
    // Keep down payment percentage stable, update dollar amount
    const newAmt = Math.round((val * downPaymentPercent) / 100);
    setDownPaymentAmt(newAmt);
  };

  // Handle Down Payment percent changes
  const handleDownPercentChange = (val: number) => {
    const percent = Math.min(100, Math.max(0, val));
    setDownPaymentPercent(percent);
    const newAmt = Math.round((homePrice * percent) / 100);
    setDownPaymentAmt(newAmt);
  };

  // Handle Down Payment dollar changes
  const handleDownAmtChange = (val: number) => {
    const amt = Math.min(homePrice, Math.max(0, val));
    setDownPaymentAmt(amt);
    const newPercent = homePrice > 0 ? Number(((amt / homePrice) * 100).toFixed(1)) : 0;
    setDownPaymentPercent(newPercent);
  };

  // Handle ZIP code tax auto-filling
  useEffect(() => {
    if (zipCode === '421005') {
      setPropertyTaxes(265);
    } else if (zipCode === '90210') {
      setPropertyTaxes(850);
    } else if (zipCode === '10001') {
      setPropertyTaxes(620);
    } else if (zipCode.length >= 5) {
      // Dynamic fallback for any other zip code
      const calculatedTax = Math.round((homePrice * 0.012) / 12); // ~1.2% annual tax
      setPropertyTaxes(calculatedTax);
    }
  }, [zipCode, homePrice, setPropertyTaxes]);

  return (
    <div className="bg-white p-6 sm:p-8 rounded-2xl border border-border shadow-sm flex flex-col space-y-6">
      {/* 1. Home Price */}
      <div className="flex flex-col space-y-2">
        <div className="flex justify-between items-center">
          <label htmlFor="home-price" className="text-sm font-semibold text-text-primary">
            Home price
          </label>
          <div className="relative rounded-md shadow-sm w-36">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <span className="text-gray-500 text-sm">$</span>
            </div>
            <input
              type="number"
              name="home-price"
              id="home-price"
              value={homePrice}
              onChange={(e) => handleHomePriceChange(Number(e.target.value))}
              className="focus:ring-better-green focus:border-better-green block w-full pl-7 pr-3 py-2 text-sm font-bold border-gray-300 rounded-md border text-right"
            />
          </div>
        </div>
        <Slider
          min={50000}
          max={1500000}
          step={5000}
          value={homePrice}
          onChange={handleHomePriceChange}
        />
      </div>

      {/* 2. Down Payment */}
      <div className="flex flex-col space-y-2">
        <div className="flex justify-between items-center">
          <label htmlFor="down-payment" className="text-sm font-semibold text-text-primary">
            Down payment
          </label>
          <div className="flex items-center space-x-2">
            {/* Mode switch */}
            <div className="flex border border-border rounded-md overflow-hidden text-xs font-semibold">
              <button
                type="button"
                onClick={() => setDownPaymentMode('percent')}
                className={`px-2 py-1 ${
                  downPaymentMode === 'percent' ? 'bg-better-green text-white' : 'bg-gray-50'
                }`}
              >
                %
              </button>
              <button
                type="button"
                onClick={() => setDownPaymentMode('dollar')}
                className={`px-2 py-1 ${
                  downPaymentMode === 'dollar' ? 'bg-better-green text-white' : 'bg-gray-50'
                }`}
              >
                $
              </button>
            </div>
            {/* Input */}
            <div className="relative rounded-md shadow-sm w-28">
              <div className="absolute inset-y-0 left-0 pl-2.5 flex items-center pointer-events-none">
                <span className="text-gray-500 text-sm">{downPaymentMode === 'dollar' ? '$' : ''}</span>
              </div>
              <input
                type="number"
                name="down-payment"
                id="down-payment"
                value={downPaymentMode === 'dollar' ? downPaymentAmt : downPaymentPercent}
                onChange={(e) =>
                  downPaymentMode === 'dollar'
                    ? handleDownAmtChange(Number(e.target.value))
                    : handleDownPercentChange(Number(e.target.value))
                }
                className="focus:ring-better-green focus:border-better-green block w-full pl-6 pr-6 py-2 text-sm font-bold border-gray-300 rounded-md border text-right"
              />
              <div className="absolute inset-y-0 right-0 pr-2.5 flex items-center pointer-events-none">
                <span className="text-gray-500 text-sm">{downPaymentMode === 'percent' ? '%' : ''}</span>
              </div>
            </div>
          </div>
        </div>
        <Slider
          min={0}
          max={downPaymentMode === 'dollar' ? homePrice : 100}
          step={downPaymentMode === 'dollar' ? 1000 : 1}
          value={downPaymentMode === 'dollar' ? downPaymentAmt : downPaymentPercent}
          onChange={(val) => (downPaymentMode === 'dollar' ? handleDownAmtChange(val) : handleDownPercentChange(val))}
        />
      </div>

      {/* 3. Interest Rate & Loan Term */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="flex flex-col space-y-2">
          <label htmlFor="interest-rate" className="text-sm font-semibold text-text-primary">
            Interest rate
          </label>
          <div className="relative rounded-md shadow-sm">
            <input
              type="number"
              step="0.01"
              name="interest-rate"
              id="interest-rate"
              value={interestRate}
              onChange={(e) => setInterestRate(Number(e.target.value))}
              className="focus:ring-better-green focus:border-better-green block w-full pr-8 py-2 text-sm font-bold border-gray-300 rounded-md border text-right"
            />
            <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
              <span className="text-gray-500 text-sm">%</span>
            </div>
          </div>
        </div>

        <div className="flex flex-col space-y-2">
          <label className="text-sm font-semibold text-text-primary">
            Loan term
          </label>
          <Toggle options={TERM_OPTIONS} value={loanTerm} onChange={setLoanTerm} />
        </div>
      </div>

      {/* 4. ZIP Code & Property Tax */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="flex flex-col space-y-2">
          <label htmlFor="zip-code" className="text-sm font-semibold text-text-primary">
            ZIP code
          </label>
          <input
            type="text"
            maxLength={6}
            name="zip-code"
            id="zip-code"
            value={zipCode}
            onChange={(e) => setZipCode(e.target.value.replace(/\D/g, ''))}
            className="focus:ring-better-green focus:border-better-green block w-full px-3 py-2 text-sm font-bold border-gray-300 rounded-md border text-center"
          />
        </div>

        <div className="flex flex-col space-y-2">
          <label htmlFor="property-tax" className="text-sm font-semibold text-text-primary">
            Property taxes (monthly)
          </label>
          <div className="relative rounded-md shadow-sm">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <span className="text-gray-500 text-sm">$</span>
            </div>
            <input
              type="number"
              name="property-tax"
              id="property-tax"
              value={propertyTaxes}
              onChange={(e) => setPropertyTaxes(Number(e.target.value))}
              className="focus:ring-better-green focus:border-better-green block w-full pl-7 pr-3 py-2 text-sm font-bold border-gray-300 rounded-md border text-right"
            />
          </div>
        </div>
      </div>

      {/* 5. Home Insurance & HOA Fees */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="flex flex-col space-y-2">
          <label htmlFor="home-insurance" className="text-sm font-semibold text-text-primary">
            Home insurance (monthly)
          </label>
          <div className="relative rounded-md shadow-sm">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <span className="text-gray-500 text-sm">$</span>
            </div>
            <input
              type="number"
              name="home-insurance"
              id="home-insurance"
              value={homeInsurance}
              onChange={(e) => setHomeInsurance(Number(e.target.value))}
              className="focus:ring-better-green focus:border-better-green block w-full pl-7 pr-3 py-2 text-sm font-bold border-gray-300 rounded-md border text-right"
            />
          </div>
        </div>

        <div className="flex flex-col space-y-2">
          <label htmlFor="hoa-fees" className="text-sm font-semibold text-text-primary">
            HOA fees (monthly)
          </label>
          <div className="relative rounded-md shadow-sm">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <span className="text-gray-500 text-sm">$</span>
            </div>
            <input
              type="number"
              name="hoa-fees"
              id="hoa-fees"
              value={hoaFees}
              onChange={(e) => setHoaFees(Number(e.target.value))}
              className="focus:ring-better-green focus:border-better-green block w-full pl-7 pr-3 py-2 text-sm font-bold border-gray-300 rounded-md border text-right"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
