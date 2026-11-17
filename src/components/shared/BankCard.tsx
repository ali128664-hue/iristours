"use client";

/**
 * BankCard.tsx — bank account details with copy buttons.
 * Used on the homepage and the contact page.
 * HOW TO CHANGE: edit BANK below.
 */

import { useState } from "react";
import { Copy, Check, Landmark } from "lucide-react";

export const BANK = {
  bank: "Faysal Bank Limited",
  title: "MUNIR HUSSAIN",
  account: "0419007791557002",
  iban: "PK75FAYS0419007791557002",
  branch: "IBB Maulana Shaukat Ali Road",
};

function CopyRow({ label, value }: { label: string; value: string }) {
  const [copied, setCopied] = useState(false);
  const copy = async () => {
    try {
      await navigator.clipboard.writeText(value);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      /* clipboard not available — the number is still visible to copy by hand */
    }
  };
  return (
    <div className="flex items-center justify-between gap-3 py-3.5">
      <div className="min-w-0">
        <dt className="text-sm text-slate-500">{label}</dt>
        <dd className="truncate font-mono text-[15px] font-semibold text-text-primary">{value}</dd>
      </div>
      <button
        type="button"
        onClick={copy}
        aria-label={`Copy ${label}`}
        className="flex flex-shrink-0 items-center gap-1.5 rounded-full border border-border-primary px-3.5 py-2 text-sm font-semibold text-text-primary hover:border-slate-400 transition-colors"
      >
        {copied ? <Check size={15} className="text-emerald-600" /> : <Copy size={15} />}
        {copied ? "Copied" : "Copy"}
      </button>
    </div>
  );
}

export default function BankCard({ className = "" }: { className?: string }) {
  return (
        <div className={`rounded-3xl border border-border-primary bg-white p-5 md:p-7 ${className}`}>
          <div className="flex items-center gap-3 border-b border-border-primary pb-4">
            <span className="flex h-11 w-11 items-center justify-center rounded-full bg-brand-ink text-white">
              <Landmark size={20} aria-hidden="true" />
            </span>
            <div>
              <p className="font-semibold text-text-primary">{BANK.bank}</p>
              <p className="text-sm text-slate-500">{BANK.branch}</p>
            </div>
          </div>
          <dl className="divide-y divide-border-primary">
            <div className="py-3.5">
              <dt className="text-sm text-slate-500">Account title</dt>
              <dd className="text-[15px] font-semibold text-text-primary">{BANK.title}</dd>
            </div>
            <CopyRow label="Account number" value={BANK.account} />
            <CopyRow label="IBAN" value={BANK.iban} />
          </dl>
        </div>
  );
}
