"use client";

import React, { useState, useMemo } from "react";
import { Globe, Search, ArrowUpRight, ArrowDownRight, RefreshCw } from "lucide-react";
import clsx from "clsx";
import fuelData from "@/data/fuelPrices.json";

type CurrencyCode = "PKR" | "USD" | "AED" | "SAR" | "GBP" | "CAD" | "EUR";

const CURRENCY_SYMBOLS: Record<CurrencyCode, string> = {
  PKR: "Rs. ",
  USD: "$",
  AED: "AED ",
  SAR: "SAR ",
  GBP: "£",
  CAD: "CA$",
  EUR: "€",
};

interface Props {
  exchangeRates?: typeof fuelData.exchangeRates;
  international?: typeof fuelData.international;
}

export default function InternationalFuelPrices({
  exchangeRates: propRates,
  international: propInternational,
}: Props = {}) {
  const [currency, setCurrency] = useState<CurrencyCode>("PKR");
  const [searchTerm, setSearchTerm] = useState("");

  const exchangeRates = (propRates?.rates || fuelData.exchangeRates.rates) as Record<string, number>;
  const internationalList = propInternational || fuelData.international;
  const baseRate = exchangeRates[currency] || 1;
  const pkrRate = exchangeRates["PKR"] || 280.25;

  // Pakistan reference prices in USD
  const pkItem = internationalList.find((c) => c.code === "PK");
  const pkPetrolUsd = pkItem?.petrolUsd || 1.388;

  // Filtered countries
  const filteredCountries = useMemo(() => {
    return internationalList.filter(
      (c) =>
        c.country.toLowerCase().includes(searchTerm.toLowerCase()) ||
        c.currency.toLowerCase().includes(searchTerm.toLowerCase()) ||
        c.code.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [searchTerm, internationalList]);

  const convertPrice = (usdPrice: number): string => {
    const val = usdPrice * baseRate;
    return val >= 10 ? val.toFixed(2) : val.toFixed(3);
  };

  return (
    <div className="w-full bg-white rounded-3xl border border-border-primary p-6 md:p-10 shadow-xl">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8">
        <div>
          <span className="text-xs font-bold uppercase tracking-wider text-accent-primary bg-accent-primary/10 px-3 py-1 rounded-full inline-block mb-3">
            Global Benchmarks
          </span>
          <h3 className="text-2xl md:text-3xl font-extrabold text-text-primary">
            International Fuel Prices Comparison
          </h3>
          <p className="text-sm text-text-secondary mt-1">
            Compare retail fuel costs in Pakistan against UAE, Saudi Arabia, UK, USA, Canada, and global markets.
          </p>
        </div>

        {/* Currency Switcher Buttons */}
        <div className="flex items-center gap-1.5 p-1 bg-bg-secondary rounded-2xl border border-border-primary overflow-x-auto scrollbar-hide">
          {(["PKR", "USD", "AED", "SAR", "GBP", "CAD", "EUR"] as CurrencyCode[]).map((cur) => (
            <button
              key={cur}
              type="button"
              onClick={() => setCurrency(cur)}
              className={clsx(
                "px-3 py-1.5 text-xs font-extrabold rounded-xl transition-all whitespace-nowrap",
                currency === cur
                  ? "bg-accent-primary text-white shadow-sm"
                  : "text-text-secondary hover:text-text-primary"
              )}
            >
              {cur}
            </button>
          ))}
        </div>
      </div>

      {/* Search Input Bar */}
      <div className="relative mb-6">
        <Search
          size={16}
          className="absolute left-4 top-1/2 -translate-y-1/2 text-text-secondary"
        />
        <input
          type="text"
          placeholder="Search country (e.g. UAE, Saudi Arabia, Canada, UK, Oman)..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full pl-11 pr-4 py-3 bg-bg-secondary rounded-2xl border border-border-primary text-xs font-semibold text-text-primary focus:outline-none focus:ring-2 focus:ring-accent-primary/40 transition-all"
        />
      </div>

      {/* Table Container */}
      <div className="overflow-x-auto rounded-2xl border border-border-primary">
        <table className="w-full text-left text-xs border-collapse">
          <thead>
            <tr className="bg-bg-secondary border-b border-border-primary text-[11px] font-bold uppercase tracking-wider text-text-secondary">
              <th className="py-4 px-5">Country</th>
              <th className="py-4 px-4">Local Rate</th>
              <th className="py-4 px-4">
                Petrol ({CURRENCY_SYMBOLS[currency]}/L)
              </th>
              <th className="py-4 px-4">
                Diesel ({CURRENCY_SYMBOLS[currency]}/L)
              </th>
              <th className="py-4 px-5 text-right">vs. Pakistan</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-border-primary/60">
            {filteredCountries.map((c) => {
              const petrolDisplay = convertPrice(c.petrolUsd);
              const dieselDisplay = convertPrice(c.dieselUsd);
              const isPakistan = c.code === "PK";

              // Difference from Pakistan Petrol price
              const pctDiff = Math.round(((c.petrolUsd - pkPetrolUsd) / pkPetrolUsd) * 100);
              const isCheaper = pctDiff < 0;

              return (
                <tr
                  key={c.code}
                  className={clsx(
                    "hover:bg-amber-50/40 transition-colors",
                    isPakistan && "bg-accent-primary/5 font-semibold"
                  )}
                >
                  <td className="py-4 px-5 flex items-center gap-3 font-bold text-text-primary">
                    <span className="text-xl" role="img" aria-label={c.country}>
                      {c.flag}
                    </span>
                    <div>
                      <span>{c.country}</span>
                      {isPakistan && (
                        <span className="ml-2 text-[10px] font-extrabold uppercase bg-accent-primary text-white px-2 py-0.5 rounded-full">
                          Domestic Baseline
                        </span>
                      )}
                    </div>
                  </td>
                  <td className="py-4 px-4 text-text-secondary font-medium">
                    {c.petrolLocal} {c.currency}/L
                  </td>
                  <td className="py-4 px-4 font-bold text-text-primary">
                    {CURRENCY_SYMBOLS[currency]}
                    {petrolDisplay}
                  </td>
                  <td className="py-4 px-4 font-bold text-text-primary">
                    {CURRENCY_SYMBOLS[currency]}
                    {dieselDisplay}
                  </td>
                  <td className="py-4 px-5 text-right font-bold">
                    {isPakistan ? (
                      <span className="text-text-secondary text-[11px] font-normal">Reference</span>
                    ) : (
                      <span
                        className={clsx(
                          "inline-flex items-center gap-0.5 px-2.5 py-1 rounded-full text-[11px]",
                          isCheaper
                            ? "bg-emerald-50 text-emerald-700"
                            : "bg-rose-50 text-rose-700"
                        )}
                      >
                        {isCheaper ? <ArrowDownRight size={13} /> : <ArrowUpRight size={13} />}
                        {Math.abs(pctDiff)}% {isCheaper ? "cheaper" : "costlier"}
                      </span>
                    )}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      <div className="mt-4 flex items-center justify-between text-[11px] text-text-secondary">
        <span>* International prices are benchmarked weekly against retail petroleum indexes.</span>
        <span>Forex rate: 1 USD = {pkrRate.toFixed(2)} PKR</span>
      </div>
    </div>
  );
}
