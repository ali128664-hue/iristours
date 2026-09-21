"use client";

import React from "react";
import { History, TrendingDown, TrendingUp, Calendar, AlertCircle } from "lucide-react";
import clsx from "clsx";
import fuelData from "@/data/fuelPrices.json";

export default function FuelPriceHistory() {
  const history = fuelData.history;

  return (
    <div className="w-full bg-white rounded-3xl border border-border-primary p-6 md:p-10 shadow-xl">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
        <div>
          <span className="text-xs font-bold uppercase tracking-wider text-accent-primary bg-accent-primary/10 px-3 py-1 rounded-full inline-block mb-3">
            Trend &amp; Archives
          </span>
          <h3 className="text-2xl md:text-3xl font-extrabold text-text-primary">
            Pakistan Fuel Price History &amp; Revisions
          </h3>
          <p className="text-sm text-text-secondary mt-1">
            Tracking bi-weekly fuel price notifications issued by OGRA and the Ministry of Petroleum.
          </p>
        </div>

        <div className="text-xs text-text-secondary bg-bg-secondary px-4 py-2 rounded-2xl border border-border-primary">
          <span className="font-bold text-text-primary block">Next Expected Review:</span>
          {fuelData.meta.nextExpectedRevision}
        </div>
      </div>

      {/* History Table */}
      <div className="overflow-x-auto rounded-2xl border border-border-primary">
        <table className="w-full text-left text-xs border-collapse">
          <thead>
            <tr className="bg-bg-secondary border-b border-border-primary text-[11px] font-bold uppercase tracking-wider text-text-secondary">
              <th className="py-4 px-5">Revision Date</th>
              <th className="py-4 px-4">Petrol (Rs./L)</th>
              <th className="py-4 px-4">Petrol Change</th>
              <th className="py-4 px-4">Diesel (Rs./L)</th>
              <th className="py-4 px-4">Diesel Change</th>
              <th className="py-4 px-5">Key Market Driver</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-border-primary/60">
            {history.map((entry, idx) => {
              const petrolNegative = entry.petrolChange < 0;
              const dieselNegative = entry.dieselChange < 0;

              return (
                <tr
                  key={entry.date}
                  className={clsx("hover:bg-amber-50/30 transition-colors", idx === 0 && "bg-amber-50/20 font-semibold")}
                >
                  <td className="py-4 px-5 font-bold text-text-primary flex items-center gap-2">
                    <Calendar size={14} className="text-accent-primary" />
                    <span>{entry.date}</span>
                    {idx === 0 && (
                      <span className="text-[10px] uppercase font-bold bg-accent-primary text-white px-2 py-0.5 rounded-full ml-1">
                        Current
                      </span>
                    )}
                  </td>
                  <td className="py-4 px-4 font-extrabold text-text-primary">
                    Rs. {entry.petrolPrice.toFixed(2)}
                  </td>
                  <td className="py-4 px-4">
                    <span
                      className={clsx(
                        "inline-flex items-center gap-1 font-bold text-[11px] px-2 py-0.5 rounded-md",
                        petrolNegative ? "text-emerald-700 bg-emerald-50" : "text-rose-700 bg-rose-50"
                      )}
                    >
                      {petrolNegative ? <TrendingDown size={12} /> : <TrendingUp size={12} />}
                      {entry.petrolChange > 0 ? `+Rs. ${entry.petrolChange.toFixed(2)}` : `Rs. ${entry.petrolChange.toFixed(2)}`}
                    </span>
                  </td>
                  <td className="py-4 px-4 font-extrabold text-text-primary">
                    Rs. {entry.dieselPrice.toFixed(2)}
                  </td>
                  <td className="py-4 px-4">
                    <span
                      className={clsx(
                        "inline-flex items-center gap-1 font-bold text-[11px] px-2 py-0.5 rounded-md",
                        dieselNegative ? "text-emerald-700 bg-emerald-50" : "text-rose-700 bg-rose-50"
                      )}
                    >
                      {dieselNegative ? <TrendingDown size={12} /> : <TrendingUp size={12} />}
                      {entry.dieselChange > 0 ? `+Rs. ${entry.dieselChange.toFixed(2)}` : `Rs. ${entry.dieselChange.toFixed(2)}`}
                    </span>
                  </td>
                  <td className="py-4 px-5 text-text-secondary text-[11px]">
                    {entry.notes}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      <div className="mt-4 flex items-center gap-2 text-xs text-text-secondary">
        <AlertCircle size={14} className="text-accent-primary flex-shrink-0" />
        <span>
          Prices in Pakistan are revised every 15 days (1st and 16th of each calendar month) based on international Platt crude pricing, PSO import costs, exchange rate fluctuation, and Petroleum Development Levy (PDL).
        </span>
      </div>
    </div>
  );
}
