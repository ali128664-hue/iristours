/**
 * FaqClient.tsx — FAQ page list. Questions are passed in from page.tsx.
 */

import { ChevronDown } from "lucide-react";
import PageHeader from "@/components/ui/PageHeader";
import { Section } from "@/components/ui/Section";
import CtaBand from "@/components/ui/CtaBand";

export interface FaqItem {
  question: string;
  answer: string;
}

export default function FaqClient({ faqs }: { faqs: FaqItem[] }) {
  return (
    <>
      <PageHeader
        title="Frequently asked questions"
        intro="Booking, payment, drivers and cancellations. If your question is not here, message us on WhatsApp."
        crumbs={[{ label: "FAQ" }]}
      />
      <Section>
        <div className="mx-auto max-w-3xl divide-y divide-border-primary border-y border-border-primary">
          {faqs.map((faq, i) => (
            <details key={faq.question} className="group py-1" open={i === 0}>
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 py-5 text-left text-base md:text-lg font-semibold text-text-primary [&::-webkit-details-marker]:hidden">
                {faq.question}
                <ChevronDown size={20} className="flex-shrink-0 text-slate-400 transition-transform group-open:rotate-180" aria-hidden="true" />
              </summary>
              <p className="pb-6 pr-8 leading-relaxed text-text-secondary">{faq.answer}</p>
            </details>
          ))}
        </div>
      </Section>
      <Section className="pt-0 md:pt-0">
        <CtaBand title="Still have a question?" text="Message us on WhatsApp. We are available every day, 24 hours." message="Hi Iris Tours! I have a question:" />
      </Section>
    </>
  );
}
