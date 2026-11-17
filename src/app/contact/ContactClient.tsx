"use client";

/**
 * ContactClient.tsx — Contact page (رابطہ)
 *
 * Contact details, offices, bank account and a short form that opens WhatsApp.
 * Numbers, email and address come from src/lib/site.ts
 */

import { useState } from "react";
import { Phone, Mail, Clock, MapPin } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import PageHeader from "@/components/ui/PageHeader";
import { Section } from "@/components/ui/Section";
import BankCard from "@/components/shared/BankCard";
import { ADDRESS, EMAIL, PHONE, SECOND_PHONE, whatsappLink } from "@/lib/site";

const SERVICES = ["Car with driver", "Airport transfer", "Wedding cars", "SUV or 4x4", "Northern tour", "Corporate rental", "Something else"];

const inputClass =
  "w-full rounded-xl border border-border-primary bg-white px-4 py-3 text-text-primary placeholder:text-slate-400 focus:border-accent-primary focus:outline-none";

export default function ContactClient() {
  const [form, setForm] = useState({ name: "", phone: "", service: SERVICES[0], message: "" });

  const set = (key: keyof typeof form) => (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) =>
    setForm((f) => ({ ...f, [key]: e.target.value }));

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const text = encodeURIComponent(
      `Hi, my name is ${form.name}. I am interested in: ${form.service}.\n\nPhone: ${form.phone}\n\nMessage: ${form.message}`
    );
    window.open(`https://wa.me/${SECOND_PHONE.whatsapp}?text=${text}`, "_blank");
  };

  const contacts = [
    { icon: Phone, label: "Call or WhatsApp, 24 hours", value: PHONE.international, href: `tel:${PHONE.tel}` },
    { icon: FaWhatsapp, label: "Second number", value: SECOND_PHONE.display, href: `https://wa.me/${SECOND_PHONE.whatsapp}` },
    { icon: Mail, label: "Email, for corporate enquiries", value: EMAIL, href: `mailto:${EMAIL}` },
    { icon: Clock, label: "Open", value: "Every day, 24 hours" },
  ];

  return (
    <>
      <PageHeader
        title="Contact us"
        intro="The quickest way to book is WhatsApp. We are available every day, around the clock."
        crumbs={[{ label: "Contact" }]}
        actions={
          <>
            <a
              href={whatsappLink("Hi Iris Tours! I want to book a car.")}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-[#25D366] hover:bg-[#1fb85a] px-7 py-3.5 font-semibold text-white transition-colors"
            >
              <FaWhatsapp size={19} />
              WhatsApp {PHONE.display}
            </a>
            <a href={`tel:${PHONE.tel}`} className="inline-flex items-center justify-center gap-2 rounded-full border border-white/25 hover:border-white px-7 py-3.5 font-semibold text-white transition-colors">
              <Phone size={17} className="text-brand-orange" />
              Call now
            </a>
          </>
        }
      />

      <Section>
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-12">
          <div className="space-y-6 lg:col-span-5">
            <ul className="divide-y divide-border-primary rounded-3xl border border-border-primary bg-white">
              {contacts.map(({ icon: Icon, label, value, href }) => (
                <li key={label} className="flex items-center gap-4 p-5">
                  <span className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-full bg-brand-orange/15 text-accent-primary">
                    <Icon size={19} aria-hidden="true" />
                  </span>
                  <span className="min-w-0">
                    <span className="block text-sm text-text-secondary">{label}</span>
                    {href ? (
                      <a href={href} target={href.startsWith("http") ? "_blank" : undefined} rel="noopener noreferrer" className="block truncate font-semibold text-text-primary hover:text-accent-primary">
                        {value}
                      </a>
                    ) : (
                      <span className="block font-semibold text-text-primary">{value}</span>
                    )}
                  </span>
                </li>
              ))}
            </ul>

            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
              {[
                { title: "Lahore head office", text: ADDRESS.lahore },
                { title: "Islamabad office", text: ADDRESS.islamabad },
              ].map((o) => (
                <div key={o.title} className="flex gap-4 rounded-3xl border border-border-primary bg-white p-5">
                  <MapPin size={20} className="mt-0.5 flex-shrink-0 text-accent-primary" aria-hidden="true" />
                  <div>
                    <p className="font-semibold text-text-primary">{o.title}</p>
                    <p className="mt-1 text-text-secondary">{o.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-7">
            <form onSubmit={handleSubmit} className="rounded-3xl border border-border-primary bg-white p-6 md:p-8">
              <h2 className="text-3xl">Send a message</h2>
              <p className="mt-2 text-text-secondary">This opens WhatsApp with your message ready to send.</p>

              <div className="mt-6 grid gap-5 sm:grid-cols-2">
                <label className="block space-y-1.5">
                  <span className="text-sm font-medium text-text-secondary">Your name</span>
                  <input required autoComplete="name" value={form.name} onChange={set("name")} className={inputClass} placeholder="Ali Khan" />
                </label>
                <label className="block space-y-1.5">
                  <span className="text-sm font-medium text-text-secondary">Phone number</span>
                  <input required type="tel" inputMode="tel" autoComplete="tel" value={form.phone} onChange={set("phone")} className={inputClass} placeholder="03xx xxxxxxx" />
                </label>
                <label className="block space-y-1.5 sm:col-span-2">
                  <span className="text-sm font-medium text-text-secondary">What do you need?</span>
                  <select value={form.service} onChange={set("service")} className={inputClass}>
                    {SERVICES.map((s) => (
                      <option key={s}>{s}</option>
                    ))}
                  </select>
                </label>
                <label className="block space-y-1.5 sm:col-span-2">
                  <span className="text-sm font-medium text-text-secondary">Message</span>
                  <textarea required rows={4} value={form.message} onChange={set("message")} className={inputClass} placeholder="Dates, pickup point, number of passengers..." />
                </label>
              </div>

              <button type="submit" className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#25D366] py-4 text-base font-semibold text-white hover:bg-[#1fb85a] transition-colors sm:w-auto sm:px-8">
                <FaWhatsapp size={19} />
                Send on WhatsApp
              </button>
            </form>
          </div>
        </div>
      </Section>

      <Section tone="white">
        <div className="grid gap-8 lg:grid-cols-12 lg:gap-12">
          <div className="lg:col-span-5">
            <h2 className="text-3xl md:text-[2.6rem]">Bank transfer</h2>
            <p className="mt-3 text-base md:text-lg leading-relaxed text-text-secondary">
              For advance bookings. After paying, send the receipt on WhatsApp to {SECOND_PHONE.display} with your booking details.
            </p>
          </div>
          <BankCard className="lg:col-span-7" />
        </div>
      </Section>
    </>
  );
}
