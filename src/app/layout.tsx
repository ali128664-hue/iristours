import type { Metadata } from "next";
import "./globals.css";
import SmoothScroll from "@/components/layout/SmoothScroll";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import FloatingWhatsApp from "@/components/shared/FloatingWhatsApp";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Iris Tours | Rent a Car in Lahore & Pakpattan",
  description: "Best Rent a Car in Lahore DHA and Pakpattan. Premium luxury car rental, SUVs, wedding cars, airport transfers, and northern tours in Pakistan. Book instantly via WhatsApp.",
  keywords: "Rent a car in Lahore, Best Rent a Car DHA Lahore, Cheap car rental Lahore, Luxury car rental Lahore, Wedding cars Lahore, Airport transfer Lahore, Prado for rent Lahore, Corolla for rent Lahore, V8 for rent Pakistan, Rent a car near me Lahore, Rent a car Pakpattan, Rent a car Lahore to Islamabad, DHA Phase 1 Rent a Car, Chauffeur driven cars Lahore, SUV rental Lahore, Iris Tours Lahore",
  alternates: {
    canonical: "https://iristours.net",
  },
  openGraph: {
    title: "Iris Tours | Rent a Car in Lahore & Pakpattan",
    description: "Best Rent a Car in Lahore DHA and Pakpattan. Premium luxury car rental, SUVs, and wedding cars.",
    type: "website",
    locale: "en_PK",
    url: "https://iristours.net",
    siteName: "Iris Tours",
  },
  other: {
    "geo.region": "PK-PB",
    "geo.placename": "Lahore",
    "geo.position": "31.4820;74.4079",
    "ICBM": "31.4820, 74.4079"
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <Script id="local-business-schema" type="application/ld+json" dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "AutoRental",
            "name": "Iris Tours & Rental Car Services",
            "image": "https://iristours.net/logo.png",
            "@id": "https://iristours.net",
            "url": "https://iristours.net",
            "telephone": "+923066305875",
            "priceRange": "PKR",
            "address": [
              {
                "@type": "PostalAddress",
                "streetAddress": "143 Street, 153, Sector-H, DHA Phase-1",
                "addressLocality": "Lahore",
                "addressRegion": "Punjab",
                "postalCode": "54000",
                "addressCountry": "PK"
              },
              {
                "@type": "PostalAddress",
                "streetAddress": "Malka Hans",
                "addressLocality": "Pakpattan",
                "addressRegion": "Punjab",
                "addressCountry": "PK"
              }
            ],
            "geo": {
              "@type": "GeoCoordinates",
              "latitude": 31.4820,
              "longitude": 74.4079
            },
            "openingHoursSpecification": {
              "@type": "OpeningHoursSpecification",
              "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
              "opens": "00:00",
              "closes": "23:59"
            },
            "sameAs": ["https://wa.me/923066305875"]
          })
        }} />
      </head>
      <body className="antialiased bg-bg-primary text-text-primary min-h-screen flex flex-col">
        <SmoothScroll>
          <Navbar />
          <main className="flex-grow pt-[88px]">
            {children}
          </main>
          <Footer />
          <FloatingWhatsApp />
        </SmoothScroll>
      </body>
    </html>
  );
}
