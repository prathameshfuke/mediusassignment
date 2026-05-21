'use client';

import React, { useState } from 'react';
import { Mail, Phone, ArrowRight } from 'lucide-react';
import WizardStep from './WizardStep';

interface StepThreeProps {
  email: string;
  setEmail: (val: string) => void;
  phone: string;
  setPhone: (val: string) => void;
  onSubmit: () => void;
}

export default function StepThree({
  email,
  setEmail,
  phone,
  setPhone,
  onSubmit,
}: StepThreeProps) {
  const [errors, setErrors] = useState<{ email?: string; phone?: string }>({});

  const validate = () => {
    const newErrors: { email?: string; phone?: string } = {};

    // Validate email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email) {
      newErrors.email = 'Email address is required';
    } else if (!emailRegex.test(email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    // Validate phone (digits only, min 10 length)
    const rawPhone = phone.replace(/\D/g, '');
    if (!phone) {
      newErrors.phone = 'Phone number is required';
    } else if (rawPhone.length < 10) {
      newErrors.phone = 'Please enter a valid 10-digit phone number';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) {
      onSubmit();
    }
  };

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    // Format input as (XXX) XXX-XXXX
    const raw = e.target.value.replace(/\D/g, '');
    let formatted = raw;
    if (raw.length > 3 && raw.length <= 6) {
      formatted = `(${raw.slice(0, 3)}) ${raw.slice(3)}`;
    } else if (raw.length > 6) {
      formatted = `(${raw.slice(0, 3)}) ${raw.slice(3, 6)}-${raw.slice(6, 10)}`;
    }
    setPhone(formatted);
  };

  return (
    <WizardStep>
      <div className="text-center mb-6">
        <h2 className="font-serif text-2xl sm:text-3xl text-ink font-bold tracking-tight">
          Let&apos;s save your progress
        </h2>
        <p className="text-muted text-sm mt-2">
          Enter your contact details so we can save your application state.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-5">
        {/* Email Input */}
        <div className="flex flex-col space-y-1.5 text-left">
          <label htmlFor="email" className="text-xs font-bold text-muted uppercase tracking-widest font-sans">
            Email Address
          </label>
          <div className="relative">
            <span className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-muted">
              <Mail size={16} />
            </span>
            <input
              type="email"
              id="email"
              placeholder="name@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className={`w-full pl-10 pr-4 py-3 rounded-xl border text-sm font-semibold transition-all outline-none font-sans ${
                errors.email
                  ? 'border-red-500 focus:border-red-500 focus:ring-2 focus:ring-red-500/20 bg-red-50/10 text-red-900'
                  : 'border-border/80 focus:border-green-500 focus:ring-2 focus:ring-green-500/20 bg-white text-ink'
              }`}
            />
          </div>
          {errors.email && <span className="text-red-500 text-xs font-semibold">{errors.email}</span>}
        </div>

        {/* Phone Input */}
        <div className="flex flex-col space-y-1.5 text-left">
          <label htmlFor="phone" className="text-xs font-bold text-muted uppercase tracking-widest font-sans">
            Phone Number
          </label>
          <div className="relative">
            <span className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-muted">
              <Phone size={16} />
            </span>
            <input
              type="text"
              id="phone"
              placeholder="(555) 555-5555"
              value={phone}
              onChange={handlePhoneChange}
              maxLength={14}
              className={`w-full pl-10 pr-4 py-3 rounded-xl border text-sm font-semibold transition-all outline-none font-sans ${
                errors.phone
                  ? 'border-red-500 focus:border-red-500 focus:ring-2 focus:ring-red-500/20 bg-red-50/10 text-red-900'
                  : 'border-border/80 focus:border-green-500 focus:ring-2 focus:ring-green-500/20 bg-white text-ink'
              }`}
            />
          </div>
          {errors.phone && <span className="text-red-500 text-xs font-semibold">{errors.phone}</span>}
        </div>

        <button
          type="submit"
          className="w-full bg-green-500 hover:bg-green-600 text-white font-semibold py-4 rounded-xl shadow-md hover:shadow-lg transition-all flex items-center justify-center space-x-2 text-base mt-2"
        >
          <span>Continue</span>
          <ArrowRight size={18} />
        </button>

        <p className="text-[10px] text-muted text-center leading-relaxed">
          By clicking continue, you agree to receive automated messages from Better.com at the number provided. Consent is not a condition of purchase.
        </p>
      </form>
    </WizardStep>
  );
}
