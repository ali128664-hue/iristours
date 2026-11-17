/**
 * WhatsAppBookingPopup.tsx — Booking Popup Form (بکنگ فارم پاپ اپ)
 *
 * Opens from a vehicle card or tour page. Collects the booking details,
 * checks the required fields, then opens WhatsApp with a ready-made message.
 *
 * HOW TO CHANGE:
 *  - WhatsApp number → PHONE_NUMBER below (country code + number, no spaces)
 *  - WhatsApp message template → the `message` string in handleSubmit
 *  - Form fields → the <Field> blocks inside the form
 */

"use client";

import { useEffect, useMemo, useState } from "react";
import { createPortal } from "react-dom";
import { motion, AnimatePresence } from "framer-motion";
import { X, Calendar, MapPin, Users, MessageSquare } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import { useCurrency } from "@/context/CurrencyContext";
import { convertAndFormatPrice } from "@/utils/currency";

const PHONE_NUMBER = "923154973906";

interface BookingPopupProps {
  isOpen: boolean;
  onClose: () => void;
  productName: string;
  category: string;
  dailyPrice?: number;
}

const emptyForm = {
  name: "",
  phone: "",
  pickupCity: "Lahore",
  dropCity: "",
  pickupDate: "",
  returnDate: "",
  passengers: "",
  notes: "",
};

type FormState = typeof emptyForm;
type FormErrors = Partial<Record<keyof FormState, string>>;

const inputClass =
  "w-full bg-bg-primary border border-border-primary rounded-xl px-4 py-3 text-text-primary placeholder:text-slate-400 focus:border-accent-primary focus:outline-none transition-colors";

function todayISO(): string {
  const d = new Date();
  const month = String(d.getMonth() + 1).padStart(2, "0");
  const day = String(d.getDate()).padStart(2, "0");
  return `${d.getFullYear()}-${month}-${day}`;
}

function Field({
  label,
  htmlFor,
  error,
  icon,
  children,
}: {
  label: string;
  htmlFor: string;
  error?: string;
  icon?: React.ReactNode;
  children: React.ReactNode;
}) {
  return (
    <div className="space-y-1.5">
      <label htmlFor={htmlFor} className="text-sm text-text-secondary font-medium flex items-center gap-2">
        {icon}
        {label}
      </label>
      {children}
      {error && (
        <p className="text-xs font-semibold text-red-600" role="alert">
          {error}
        </p>
      )}
    </div>
  );
}

export default function WhatsAppBookingPopup({ isOpen, onClose, productName, category, dailyPrice }: BookingPopupProps) {
  const [formData, setFormData] = useState<FormState>(emptyForm);
  const [errors, setErrors] = useState<FormErrors>({});
  const { currency } = useCurrency();
  const today = useMemo(() => todayISO(), []);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Rental days are worked out from the two dates (same-day return = 1 day)
  const rentalDays = useMemo(() => {
    if (!formData.pickupDate || !formData.returnDate) return null;
    const start = new Date(formData.pickupDate).getTime();
    const end = new Date(formData.returnDate).getTime();
    if (Number.isNaN(start) || Number.isNaN(end) || end < start) return null;
    return Math.max(1, Math.round((end - start) / (1000 * 60 * 60 * 24)));
  }, [formData.pickupDate, formData.returnDate]);

  // While open: Esc closes the popup and the page behind stops scrolling
  useEffect(() => {
    if (!isOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKey);
    };
  }, [isOpen, onClose]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: undefined }));
  };

  const validate = (): FormErrors => {
    const next: FormErrors = {};
    if (!formData.name.trim()) next.name = "Please enter your name.";
    if (formData.phone.replace(/\D/g, "").length < 10) next.phone = "Enter a phone number we can reach you on.";
    if (!formData.pickupDate) next.pickupDate = "Choose a pickup date.";
    if (formData.pickupDate && formData.pickupDate < today) next.pickupDate = "Pickup date cannot be in the past.";
    if (formData.returnDate && formData.pickupDate && formData.returnDate < formData.pickupDate) {
      next.returnDate = "Return date must be on or after the pickup date.";
    }
    return next;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const found = validate();
    setErrors(found);
    if (Object.keys(found).length > 0) return;

    const lines = [
      "Hello Iris Tours,",
      "",
      "I would like to book the following vehicle/tour.",
      "",
      `*Vehicle/Tour:* ${productName}`,
      `*Category:* ${category}`,
      dailyPrice ? `*Daily Rent:* ${convertAndFormatPrice(dailyPrice, currency)}` : null,
      "",
      `*Pickup City:* ${formData.pickupCity || "-"}`,
      `*Drop City:* ${formData.dropCity || "-"}`,
      `*Pickup Date:* ${formData.pickupDate}`,
      `*Return Date:* ${formData.returnDate || "-"}`,
      rentalDays ? `*Rental Days:* ${rentalDays}` : null,
      `*Passengers:* ${formData.passengers || "-"}`,
      "*Driver:* Included",
      "",
      `*Customer Name:* ${formData.name.trim()}`,
      `*Phone:* ${formData.phone.trim()}`,
      formData.notes.trim() ? `*Special Request:* ${formData.notes.trim()}` : null,
      "",
      "Kindly confirm the availability and send me the final quotation.",
      "",
      "Thank you.",
    ].filter((line): line is string => line !== null);

    const message = lines.join("\n");
    window.open(`https://wa.me/${PHONE_NUMBER}?text=${encodeURIComponent(message)}`, "_blank");
    setFormData(emptyForm);
    setErrors({});
    onClose();
  };

  // Rendered at the end of <body> so it always covers the whole screen,
  // even when the card that opened it is being animated.
  if (!mounted) return null;

  return createPortal(
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.18 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/70 backdrop-blur-sm z-[60] flex items-end sm:items-center justify-center sm:p-4"
        >
          <motion.form
            role="dialog"
            aria-modal="true"
            aria-label={`Book ${productName}`}
            noValidate
            onSubmit={handleSubmit}
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 24 }}
            transition={{ duration: 0.22, ease: "easeOut" }}
            onClick={(e) => e.stopPropagation()}
            className="bg-bg-secondary border border-border-primary rounded-t-3xl sm:rounded-3xl w-full max-w-2xl shadow-2xl overflow-hidden flex flex-col max-h-[92dvh]"
          >
            {/* Header */}
            <div className="px-6 py-5 border-b border-border-primary flex justify-between items-start gap-4">
              <div className="min-w-0">
                <p className="text-sm text-text-secondary">Book on WhatsApp</p>
                <h3 className="text-xl md:text-2xl text-text-primary truncate">{productName}</h3>
                {dailyPrice ? (
                  <p className="text-sm text-text-secondary mt-1">
                    From <span className="font-semibold text-text-primary">{convertAndFormatPrice(dailyPrice, currency)}</span> per day in the city
                  </p>
                ) : null}
              </div>
              <button
                type="button"
                onClick={onClose}
                aria-label="Close booking form"
                className="p-2.5 text-text-secondary hover:text-text-primary transition-colors bg-bg-primary rounded-full flex-shrink-0"
              >
                <X size={20} />
              </button>
            </div>

            {/* Fields — data-lenis-prevent lets the mouse wheel scroll this box, not the page */}
            <div className="px-6 py-6 overflow-y-auto custom-scrollbar" data-lenis-prevent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <Field label="Full name" htmlFor="booking-name" error={errors.name}>
                  <input id="booking-name" type="text" name="name" autoComplete="name" value={formData.name} onChange={handleChange} className={inputClass} placeholder="Your name" />
                </Field>

                <Field label="Phone number" htmlFor="booking-phone" error={errors.phone}>
                  <input id="booking-phone" type="tel" name="phone" autoComplete="tel" inputMode="tel" value={formData.phone} onChange={handleChange} className={inputClass} placeholder="03xx xxxxxxx" />
                </Field>

                <Field label="Pickup city" htmlFor="booking-pickup-city" icon={<MapPin size={14} />}>
                  <input id="booking-pickup-city" type="text" name="pickupCity" value={formData.pickupCity} onChange={handleChange} className={inputClass} placeholder="Lahore" />
                </Field>

                <Field label="Drop city (optional)" htmlFor="booking-drop-city" icon={<MapPin size={14} />}>
                  <input id="booking-drop-city" type="text" name="dropCity" value={formData.dropCity} onChange={handleChange} className={inputClass} placeholder="Islamabad" />
                </Field>

                <Field label="Pickup date" htmlFor="booking-pickup-date" icon={<Calendar size={14} />} error={errors.pickupDate}>
                  <input id="booking-pickup-date" type="date" name="pickupDate" min={today} value={formData.pickupDate} onChange={handleChange} className={inputClass} />
                </Field>

                <Field label="Return date" htmlFor="booking-return-date" icon={<Calendar size={14} />} error={errors.returnDate}>
                  <input id="booking-return-date" type="date" name="returnDate" min={formData.pickupDate || today} value={formData.returnDate} onChange={handleChange} className={inputClass} />
                </Field>

                <Field label="Passengers (optional)" htmlFor="booking-passengers" icon={<Users size={14} />}>
                  <input id="booking-passengers" type="number" name="passengers" min={1} inputMode="numeric" value={formData.passengers} onChange={handleChange} className={inputClass} placeholder="4" />
                </Field>

                <div className="rounded-xl border border-border-primary bg-bg-primary px-4 py-3 flex flex-col justify-center">
                  <span className="text-sm text-text-secondary">Rental length</span>
                  <span className="text-base font-semibold text-text-primary" aria-live="polite">
                    {rentalDays ? `${rentalDays} ${rentalDays === 1 ? "day" : "days"}` : "Pick both dates"}
                    {rentalDays && dailyPrice ? (
                      <span className="font-normal text-text-secondary"> · about {convertAndFormatPrice(dailyPrice * rentalDays, currency)} in the city</span>
                    ) : null}
                  </span>
                </div>
              </div>

              <div className="mt-5">
                <Field label="Special requests (optional)" htmlFor="booking-notes" icon={<MessageSquare size={14} />}>
                  <textarea id="booking-notes" name="notes" rows={3} value={formData.notes} onChange={handleChange} className={inputClass} placeholder="Flight number, child seat, wedding decoration..." />
                </Field>
              </div>
            </div>

            {/* Footer */}
            <div className="px-6 py-4 border-t border-border-primary bg-bg-primary flex flex-col-reverse sm:flex-row sm:justify-end gap-3">
              <button
                type="button"
                onClick={onClose}
                className="px-6 py-3 rounded-full border border-border-primary text-text-primary font-semibold hover:border-slate-400 transition-colors"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="inline-flex items-center justify-center gap-2 px-7 py-3 rounded-full bg-[#25D366] hover:bg-[#1fb85a] text-white font-semibold transition-colors"
              >
                <FaWhatsapp size={18} />
                Send on WhatsApp
              </button>
            </div>
          </motion.form>
        </motion.div>
      )}
    </AnimatePresence>,
    document.body
  );
}
