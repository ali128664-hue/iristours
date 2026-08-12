"use client";

import React, { createContext, useContext, useState, useEffect } from 'react';
import { Currency } from '@/utils/currency';

interface CurrencyContextType {
  currency: Currency;
  toggleCurrency: () => void;
  setCurrency: (currency: Currency) => void;
}

const CurrencyContext = createContext<CurrencyContextType | undefined>(undefined);

export const CurrencyProvider = ({ children }: { children: React.ReactNode }) => {
  const [currency, setCurrencyState] = useState<Currency>('PKR');
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const savedCurrency = localStorage.getItem('currency') as Currency;
    if (savedCurrency && (savedCurrency === 'PKR' || savedCurrency === 'USD')) {
      setCurrencyState(savedCurrency);
    }
  }, []);

  const setCurrency = (newCurrency: Currency) => {
    setCurrencyState(newCurrency);
    localStorage.setItem('currency', newCurrency);
  };

  const toggleCurrency = () => {
    setCurrency(currency === 'PKR' ? 'USD' : 'PKR');
  };

  // Prevent hydration mismatch by defaulting to PKR or waiting for mount
  // It's usually fine to render the initial state (PKR) and then re-render if needed
  if (!mounted) {
    return <CurrencyContext.Provider value={{ currency: 'PKR', toggleCurrency, setCurrency }}>{children}</CurrencyContext.Provider>;
  }

  return (
    <CurrencyContext.Provider value={{ currency, toggleCurrency, setCurrency }}>
      {children}
    </CurrencyContext.Provider>
  );
};

export const useCurrency = () => {
  const context = useContext(CurrencyContext);
  if (context === undefined) {
    throw new Error('useCurrency must be used within a CurrencyProvider');
  }
  return context;
};
