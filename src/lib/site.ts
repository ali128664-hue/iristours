/**
 * site.ts — Business details used across the whole website (ایک جگہ سے سب تبدیل کریں)
 *
 * Change the phone number, WhatsApp number, email or address here once and
 * every page that imports these values updates automatically.
 */

export const SITE_URL = "https://iristours.net";

export const PHONE = {
  /** Number for tel: links (international format, no spaces) */
  tel: "+923154973906",
  /** How the number is shown to visitors */
  display: "0315-4973906",
  international: "+92 315 497 3906",
};

/** Second number (shown on the contact page; contact-form messages go here) */
export const SECOND_PHONE = {
  tel: "+923066305875",
  display: "0306-6305875",
  whatsapp: "923066305875",
};

/** WhatsApp number: country code + number, no "+" or spaces */
export const WHATSAPP_NUMBER = "923154973906";

export const EMAIL = "info@iristours.net";

export const ADDRESS = {
  lahore: "143 Street, 153, Sector-H, DHA Phase-1, Lahore",
  islamabad: "Islamabad, Pakistan",
};

export const SOCIAL = {
  facebook: "https://web.facebook.com/people/Iris-tours-Rental-Car/100083145616731/",
  googleMaps: "https://maps.app.goo.gl/3M34CsuyqWTeb7oc8",
};

/** Builds a WhatsApp chat link with a ready-made message */
export function whatsappLink(message = "Hi Iris Tours! I want to book a car."): string {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}
