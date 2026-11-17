/**
 * BankDetailsSection.tsx — bank account for advance payments (homepage).
 *
 * HOW TO CHANGE: bank details are in src/components/shared/BankCard.tsx.
 * Receipts go to SECOND_PHONE in src/lib/site.ts
 */

import { FaWhatsapp } from "react-icons/fa";
import { Section } from "@/components/ui/Section";
import { SECOND_PHONE } from "@/lib/site";
import BankCard from "@/components/shared/BankCard";

export default function BankDetailsSection() {
  return (
    <Section>
      <div className="grid gap-8 lg:grid-cols-12 lg:gap-12">
        <div className="lg:col-span-5">
          <h2 className="text-3xl md:text-[2.6rem]">Pay an advance by bank transfer</h2>
          <p className="mt-3 text-base md:text-lg leading-relaxed text-text-secondary">
            For advance bookings and corporate accounts. After paying, send the receipt on WhatsApp with your booking details and we confirm the car straight away.
          </p>
          <p className="mt-3 text-[15px] text-text-secondary">Cash, EasyPaisa, JazzCash and cards are also accepted.</p>
          <a
            href={`https://wa.me/${SECOND_PHONE.whatsapp}?text=${encodeURIComponent("Hi Iris Tours, I have made the payment. Here is the receipt screenshot.")}`}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-flex items-center gap-2 rounded-full bg-[#25D366] px-6 py-3.5 font-semibold text-white hover:bg-[#1fb85a] transition-colors"
          >
            <FaWhatsapp size={19} />
            Send receipt on WhatsApp
          </a>
        </div>

        <BankCard className="lg:col-span-7" />
      </div>
    </Section>
  );
}
