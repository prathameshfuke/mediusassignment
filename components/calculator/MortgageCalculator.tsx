'use client';

import React, { useState, useMemo, useEffect } from 'react';
import Link from 'next/link';
import { HelpCircle } from 'lucide-react';
import Slider from '@/components/ui/Slider';
import CountUp from '@/components/ui/CountUp';
import DonutChart from './DonutChart';

const TERM_OPTIONS = [
  { value: 15, label: '15 years' },
  { value: 20, label: '20 years' },
  { value: 30, label: '30 years' },
];

export default function MortgageCalculator() {
  // Inputs state with defaults requested:
  // Home price: $300,000, Down: 20%, 30yr, 6.5%, taxes: $265, ZIP: 421005
  const [homePrice, setHomePrice] = useState(300000);
  const [downPaymentPercent, setDownPaymentPercent] = useState(20);
  const [downPaymentAmt, setDownPaymentAmt] = useState(60000);
  const [downPaymentMode, setDownPaymentMode] = useState<'percent' | 'dollar'>('percent');
  const [loanTerm, setLoanTerm] = useState(30); // 15, 20, or 30 years
  const [interestRate, setInterestRate] = useState(6.5);
  const [zipCode, setZipCode] = useState('421005');
  const [propertyTaxes, setPropertyTaxes] = useState(265);
  const [homeInsurance, setHomeInsurance] = useState(100);
  const [hoaFees, setHoaFees] = useState(0);

  // Robust, cursor-safe local typing inputs
  const [priceInput, setPriceInput] = useState(homePrice.toLocaleString());
  const [downPaymentInput, setDownPaymentInput] = useState('');
  const [interestInput, setInterestInput] = useState(interestRate.toString());
  const [zipInput, setZipInput] = useState(zipCode);

  // Breakdown local typing inputs
  const [taxesInput, setTaxesInput] = useState(propertyTaxes.toString());
  const [insuranceInput, setInsuranceInput] = useState(homeInsurance.toString());
  const [hoaInput, setHoaInput] = useState(hoaFees.toString());

  // Sync formatted displays on parent state updates (e.g. from sliders or defaults)
  useEffect(() => {
    setPriceInput(homePrice.toLocaleString());
  }, [homePrice]);

  useEffect(() => {
    if (downPaymentMode === 'dollar') {
      setDownPaymentInput(downPaymentAmt.toLocaleString());
    } else {
      setDownPaymentInput(downPaymentPercent.toString());
    }
  }, [downPaymentAmt, downPaymentPercent, downPaymentMode]);

  useEffect(() => {
    setInterestInput(interestRate.toString());
  }, [interestRate]);

  useEffect(() => {
    setZipInput(zipCode);
  }, [zipCode]);

  useEffect(() => {
    setTaxesInput(propertyTaxes.toString());
  }, [propertyTaxes]);

  useEffect(() => {
    setInsuranceInput(homeInsurance.toString());
  }, [homeInsurance]);

  useEffect(() => {
    setHoaInput(hoaFees.toString());
  }, [hoaFees]);

  // Recalculate Principal & Interest
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

  // Total Payment
  const totalPayment = useMemo(() => {
    return principalAndInterest + propertyTaxes + homeInsurance + hoaFees;
  }, [principalAndInterest, propertyTaxes, homeInsurance, hoaFees]);

  // Handle Home Price changes
  const handleHomePriceChange = (val: number) => {
    const targetVal = Math.max(0, val);
    setHomePrice(targetVal);
    // Keep down payment percentage stable, update dollar amount
    const newAmt = Math.round((targetVal * downPaymentPercent) / 100);
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
      // Dynamic fallback for any other zip code (1.2% annual rate)
      const calculatedTax = Math.round((homePrice * 0.012) / 12);
      setPropertyTaxes(calculatedTax);
    }
  }, [zipCode, homePrice]);

  return (
    <section className="pt-28 md:pt-32 pb-16 bg-cream min-h-[calc(100vh-68px)]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        
        {/* Header */}
        <div className="mb-10 max-w-3xl">
          <h1 className="font-serif text-4xl sm:text-5xl text-ink mb-3 tracking-tight font-black">
            Mortgage Calculator
          </h1>
          <p className="text-muted text-sm sm:text-base leading-relaxed font-medium">
            Estimate your monthly mortgage payment including principal, interest, taxes, insurance, and HOA fees. Adjust inputs in real time to see the breakdown and find your ideal budget.
          </p>
        </div>

        {/* Dashboard layout card */}
        <div className="bg-white p-5 sm:p-10 rounded-[2rem] border border-border/80 shadow-md flex flex-col space-y-8 transition-all duration-300 hover:shadow-lg">
          
          {/* 1. Large Displays (Home Price and Monthly Payment Side-by-side) */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-end">
            <div className="flex flex-col space-y-2">
              <label htmlFor="home-price-input" className="text-xs uppercase tracking-wider font-bold text-muted">
                Home price
              </label>
              <div className="relative flex items-center border-b-2 border-border/80 focus-within:border-green-500 transition-colors duration-200 pb-1">
                <span className="text-3xl sm:text-4xl md:text-5xl font-black text-ink leading-none font-sans select-none">$</span>
                <input
                  type="text"
                  id="home-price-input"
                  value={priceInput}
                  onChange={(e) => {
                    const rawValue = e.target.value.replace(/,/g, '');
                    if (/^\d*$/.test(rawValue)) {
                      setPriceInput(rawValue === '' ? '' : Number(rawValue).toLocaleString());
                      if (rawValue !== '') {
                        handleHomePriceChange(Number(rawValue));
                      }
                    }
                  }}
                  onBlur={() => {
                    if (priceInput === '' || Number(priceInput.replace(/,/g, '')) <= 0) {
                      setPriceInput((300000).toLocaleString());
                      handleHomePriceChange(300000);
                    }
                  }}
                  className="block w-full text-3xl sm:text-4xl md:text-5xl font-black text-ink bg-transparent focus:outline-none ml-1 font-sans leading-none"
                />
              </div>
            </div>

            <div className="flex flex-col space-y-1.5 md:items-end">
              <span className="text-xs uppercase tracking-wider font-bold text-muted md:text-right">
                Estimated monthly payment
              </span>
              <p className="text-3xl sm:text-4xl md:text-5xl font-black text-green-600 leading-none flex items-baseline md:justify-end font-sans">
                <span className="text-xl sm:text-2xl font-extrabold mr-0.5">$</span>
                <CountUp end={totalPayment} duration={400} />
                <span className="text-xs sm:text-sm font-bold text-muted/80 tracking-normal ml-1">/mo</span>
              </p>
            </div>
          </div>

          {/* 2. Main Price Drag-Slider */}
          <div className="pt-1 select-none">
            <Slider
              min={50000}
              max={1500000}
              step={5000}
              value={homePrice}
              onChange={handleHomePriceChange}
            />
          </div>

          {/* 3. Parameter Input Row (Premium Inlaid Cards Grid) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 pt-2">
            
            {/* Down Payment (Input + inline switch inside label) */}
            <div className="flex flex-col space-y-1 bg-gray-50/50 hover:bg-gray-50 border border-border/60 rounded-2xl p-3.5 transition-colors duration-150 focus-within:bg-white focus-within:border-green-500 focus-within:ring-2 focus-within:ring-green-500/10">
              <div className="flex justify-between items-center w-full select-none">
                <span className="text-[10px] uppercase tracking-wider font-black text-muted">
                  Down payment
                </span>
                
                {/* Switcher in Label */}
                <div className="flex bg-gray-200/50 p-0.5 rounded-full text-[9px] font-black shadow-inner border border-black/5 shrink-0">
                  <button
                    type="button"
                    onClick={() => setDownPaymentMode('percent')}
                    className={`px-2 py-0.5 rounded-full transition-all duration-150 ${
                      downPaymentMode === 'percent'
                        ? 'bg-white text-ink shadow-xs'
                        : 'text-muted hover:text-ink'
                    }`}
                  >
                    %
                  </button>
                  <button
                    type="button"
                    onClick={() => setDownPaymentMode('dollar')}
                    className={`px-2 py-0.5 rounded-full transition-all duration-150 ${
                      downPaymentMode === 'dollar'
                        ? 'bg-white text-ink shadow-xs'
                        : 'text-muted hover:text-ink'
                    }`}
                  >
                    $
                  </button>
                </div>
              </div>

              <div className="flex items-center mt-1 w-full">
                {downPaymentMode === 'dollar' && (
                  <span className="text-base font-extrabold text-ink font-sans select-none mr-0.5">$</span>
                )}
                <input
                  type="text"
                  value={downPaymentInput}
                  onChange={(e) => {
                    const rawValue = e.target.value.replace(/,/g, '');
                    if (downPaymentMode === 'dollar') {
                      if (/^\d*$/.test(rawValue)) {
                        setDownPaymentInput(rawValue === '' ? '' : Number(rawValue).toLocaleString());
                        if (rawValue !== '') {
                          handleDownAmtChange(Number(rawValue));
                        }
                      }
                    } else {
                      if (/^\d*\.?\d*$/.test(rawValue)) {
                        setDownPaymentInput(rawValue);
                        const num = Number(rawValue);
                        if (!isNaN(num) && rawValue !== '') {
                          handleDownPercentChange(num);
                        }
                      }
                    }
                  }}
                  onBlur={() => {
                    if (downPaymentInput === '') {
                      if (downPaymentMode === 'dollar') {
                        handleDownAmtChange(60000);
                      } else {
                        handleDownPercentChange(20);
                      }
                    }
                  }}
                  className="w-full text-base font-extrabold text-ink bg-transparent focus:outline-none font-sans"
                />
                {downPaymentMode === 'percent' && (
                  <span className="text-base font-extrabold text-ink font-sans select-none ml-0.5">%</span>
                )}
              </div>
            </div>

            {/* Interest Rate */}
            <div className="flex flex-col space-y-1 bg-gray-50/50 hover:bg-gray-50 border border-border/60 rounded-2xl p-3.5 transition-colors duration-150 focus-within:bg-white focus-within:border-green-500 focus-within:ring-2 focus-within:ring-green-500/10">
              <label htmlFor="interest-rate-input" className="text-[10px] uppercase tracking-wider font-black text-muted select-none">
                Interest rate
              </label>
              <div className="flex items-center mt-1 w-full">
                <input
                  type="text"
                  id="interest-rate-input"
                  value={interestInput}
                  onChange={(e) => {
                    const val = e.target.value;
                    if (/^\d*\.?\d*$/.test(val)) {
                      setInterestInput(val);
                      const num = Number(val);
                      if (!isNaN(num) && val !== '') {
                        setInterestRate(num);
                      }
                    }
                  }}
                  onBlur={() => {
                    if (interestInput === '' || Number(interestInput) <= 0) {
                      setInterestRate(6.5);
                    }
                  }}
                  className="w-full text-base font-extrabold text-ink bg-transparent focus:outline-none font-sans"
                />
                <span className="text-base font-extrabold text-ink font-sans select-none ml-0.5">%</span>
              </div>
            </div>

            {/* Loan Term (Inlaid inline select) */}
            <div className="flex flex-col space-y-1 bg-gray-50/50 hover:bg-gray-50 border border-border/60 rounded-2xl p-3.5 transition-colors duration-150 focus-within:bg-white focus-within:border-green-500 focus-within:ring-2 focus-within:ring-green-500/10">
              <span className="text-[10px] uppercase tracking-wider font-black text-muted select-none">
                Loan term
              </span>
              <div className="flex bg-gray-200/40 p-0.5 rounded-xl border border-black/5 mt-1 select-none w-full">
                {TERM_OPTIONS.map((option) => {
                  const isSelected = option.value === loanTerm;
                  return (
                    <button
                      key={option.value}
                      type="button"
                      onClick={() => setLoanTerm(option.value)}
                      className={`flex-1 text-center py-1 rounded-lg text-xs font-black transition-all duration-150 ${
                        isSelected
                          ? 'bg-white text-ink shadow-sm'
                          : 'text-muted hover:text-ink'
                      }`}
                    >
                      {option.value} yr
                    </button>
                  );
                })}
              </div>
            </div>

            {/* ZIP code */}
            <div className="flex flex-col space-y-1 bg-gray-50/50 hover:bg-gray-50 border border-border/60 rounded-2xl p-3.5 transition-colors duration-150 focus-within:bg-white focus-within:border-green-500 focus-within:ring-2 focus-within:ring-green-500/10">
              <label htmlFor="zip-code-input" className="text-[10px] uppercase tracking-wider font-black text-muted select-none">
                ZIP code
              </label>
              <input
                type="text"
                maxLength={5}
                id="zip-code-input"
                value={zipInput}
                onChange={(e) => {
                  const val = e.target.value.replace(/\D/g, '');
                  setZipInput(val);
                  if (val.length === 5) {
                    setZipCode(val);
                  }
                }}
                onBlur={() => {
                  if (zipInput.length < 5) {
                    setZipInput('421005');
                    setZipCode('421005');
                  }
                }}
                className="w-full text-base font-extrabold text-ink bg-transparent focus:outline-none font-sans mt-1"
              />
            </div>
          </div>

          {/* 4. Secondary Breakdown Section (Split Chart/Details) */}
          <div className="border-t border-border/60 pt-10 mt-6 grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            {/* Donut Chart (Center Display - Sized safely for mobile viewports) */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="relative flex items-center justify-center w-[210px] h-[210px] sm:w-[230px] sm:h-[230px] rounded-full border border-dashed border-border bg-cream/10 shrink-0">
                <DonutChart
                  principalAndInterest={principalAndInterest}
                  propertyTaxes={propertyTaxes}
                  homeInsurance={homeInsurance}
                  hoaFees={hoaFees}
                />
              </div>
            </div>

            {/* Editable Breakdown rows & sliders */}
            <div className="lg:col-span-7 space-y-5">
              <h3 className="text-xs uppercase tracking-wider font-black text-ink/80 select-none">
                Monthly payment breakdown
              </h3>
              
              <div className="space-y-3.5">
                
                {/* 1. Principal & Interest (Calculated) */}
                <div className="bg-gray-50/40 hover:bg-gray-50/80 border border-border/40 p-4 rounded-2xl flex flex-col space-y-2 shadow-sm transition-all duration-200">
                  <div className="flex justify-between items-center">
                    <div className="flex items-center space-x-2.5">
                      <span className="w-3 h-3 rounded-full bg-green-500 shrink-0 ring-4 ring-green-50" />
                      <span className="text-sm font-extrabold text-ink">Principal & Interest</span>
                    </div>
                    <span className="text-sm font-black text-ink font-sans">
                      $<CountUp end={principalAndInterest} duration={300} />
                    </span>
                  </div>
                  <p className="text-xs text-muted leading-relaxed pl-5.5">
                    Primary mortgage payment covering borrowed money and interest percentage.
                  </p>
                </div>

                {/* 2. Property Taxes (Adjustable) */}
                <div className="bg-gray-50/40 hover:bg-gray-50/80 border border-border/40 p-4 rounded-2xl flex flex-col space-y-3 shadow-sm transition-all duration-200">
                  <div className="flex justify-between items-center w-full">
                    <div className="flex items-center space-x-2.5 select-none">
                      <span className="w-3 h-3 rounded-full bg-[#003d25] shrink-0 ring-4 ring-green-900/10" />
                      <span className="text-sm font-extrabold text-ink">Property Taxes</span>
                    </div>
                    <div className="flex items-center space-x-1 border-b border-dashed border-border/80 focus-within:border-green-500">
                      <span className="text-sm font-bold text-ink/70 leading-none font-sans select-none">$</span>
                      <input
                        type="text"
                        value={taxesInput}
                        onChange={(e) => {
                          const val = e.target.value.replace(/\D/g, '');
                          setTaxesInput(val);
                          if (val !== '') {
                            setPropertyTaxes(Number(val));
                          }
                        }}
                        onBlur={() => {
                          if (taxesInput === '') {
                            setPropertyTaxes(0);
                          }
                        }}
                        className="w-16 text-sm font-extrabold text-ink bg-transparent focus:outline-none text-right font-sans"
                        placeholder="0"
                      />
                    </div>
                  </div>
                  <div className="pl-5.5 flex flex-col space-y-2 w-full">
                    <div className="select-none">
                      <Slider
                        min={0}
                        max={2000}
                        step={5}
                        value={propertyTaxes}
                        onChange={setPropertyTaxes}
                      />
                    </div>
                    <p className="text-xs text-muted leading-relaxed">
                      Adjust to match your specific local municipality tax estimates.
                    </p>
                  </div>
                </div>

                {/* 3. Home Insurance (Adjustable) */}
                <div className="bg-gray-50/40 hover:bg-gray-50/80 border border-border/40 p-4 rounded-2xl flex flex-col space-y-3 shadow-sm transition-all duration-200">
                  <div className="flex justify-between items-center w-full">
                    <div className="flex items-center space-x-2.5 select-none">
                      <span className="w-3 h-3 rounded-full bg-[#1ee07f] shrink-0 ring-4 ring-green-400/20" />
                      <span className="text-sm font-extrabold text-ink">Home Insurance</span>
                    </div>
                    <div className="flex items-center space-x-1 border-b border-dashed border-border/80 focus-within:border-green-500">
                      <span className="text-sm font-bold text-ink/70 leading-none font-sans select-none">$</span>
                      <input
                        type="text"
                        value={insuranceInput}
                        onChange={(e) => {
                          const val = e.target.value.replace(/\D/g, '');
                          setInsuranceInput(val);
                          if (val !== '') {
                            setHomeInsurance(Number(val));
                          }
                        }}
                        onBlur={() => {
                          if (insuranceInput === '') {
                            setHomeInsurance(0);
                          }
                        }}
                        className="w-16 text-sm font-extrabold text-ink bg-transparent focus:outline-none text-right font-sans"
                        placeholder="0"
                      />
                    </div>
                  </div>
                  <div className="pl-5.5 flex flex-col space-y-2 w-full">
                    <div className="select-none">
                      <Slider
                        min={0}
                        max={500}
                        step={5}
                        value={homeInsurance}
                        onChange={setHomeInsurance}
                      />
                    </div>
                    <p className="text-xs text-muted leading-relaxed">
                      Adjust based on structural hazard policies or broker quotes.
                    </p>
                  </div>
                </div>

                {/* 4. HOA Fees (Adjustable) */}
                <div className="bg-gray-50/40 hover:bg-gray-50/80 border border-border/40 p-4 rounded-2xl flex flex-col space-y-3 shadow-sm transition-all duration-200">
                  <div className="flex justify-between items-center w-full">
                    <div className="flex items-center space-x-2.5 select-none">
                      <span className="w-3 h-3 rounded-full bg-gray-400 shrink-0 ring-4 ring-gray-100" />
                      <span className="text-sm font-extrabold text-ink">HOA Fees</span>
                    </div>
                    <div className="flex items-center space-x-1 border-b border-dashed border-border/80 focus-within:border-green-500">
                      <span className="text-sm font-bold text-ink/70 leading-none font-sans select-none">$</span>
                      <input
                        type="text"
                        value={hoaInput}
                        onChange={(e) => {
                          const val = e.target.value.replace(/\D/g, '');
                          setHoaInput(val);
                          if (val !== '') {
                            setHoaFees(Number(val));
                          }
                        }}
                        onBlur={() => {
                          if (hoaInput === '') {
                            setHoaFees(0);
                          }
                        }}
                        className="w-16 text-sm font-extrabold text-ink bg-transparent focus:outline-none text-right font-sans"
                        placeholder="0"
                      />
                    </div>
                  </div>
                  <div className="pl-5.5 flex flex-col space-y-2 w-full">
                    <div className="select-none">
                      <Slider
                        min={0}
                        max={1000}
                        step={5}
                        value={hoaFees}
                        onChange={setHoaFees}
                      />
                    </div>
                    <p className="text-xs text-muted leading-relaxed">
                      Enter monthly homeowners association fees for condo/shared properties.
                    </p>
                  </div>
                </div>

              </div>
            </div>

          </div>

          {/* 5. Pre-approval action footer */}
          <div className="border-t border-border/60 pt-8 flex flex-col items-center space-y-4">
            <Link
              href="/start"
              className="bg-green-500 hover:bg-green-600 text-white font-bold px-10 py-5 rounded-full shadow-green hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 w-full sm:w-auto text-center"
            >
              Get pre-approved in 3 minutes
            </Link>
            <p className="text-xs text-muted font-sans font-medium">
              Pre-approval is 100% online and does not affect your credit score.
            </p>
          </div>

        </div>

        {/* Info/Disclaimers section */}
        <div className="mt-12 bg-white p-6 sm:p-10 rounded-3xl border border-border/80 shadow-md transition-all duration-300 hover:shadow-lg">
          <h3 className="font-sans font-bold text-lg text-ink flex items-center space-x-2.5 mb-5 select-none">
            <HelpCircle className="text-green-500" size={22} />
            <span>Understanding your mortgage payment breakdown</span>
          </h3>
          <div className="text-sm text-muted space-y-4 leading-relaxed font-sans font-medium">
            <p>
              Your monthly payment is more than just paying back the money you borrowed. It also includes local government taxes, homeowner insurance policies, and potentially homeowners association (HOA) dues:
            </p>
            <ul className="list-disc pl-5 space-y-3 text-ink/90">
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
