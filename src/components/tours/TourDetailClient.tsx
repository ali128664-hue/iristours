"use client";

import { useState } from "react";
import { Button } from "@/components/ui/Button";
import WhatsAppBookingPopup from "@/components/shared/WhatsAppBookingPopup";

interface TourDetailClientProps {
  tour: any;
}

export default function TourDetailClient({ tour }: TourDetailClientProps) {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  return (
    <>
      <div className="bg-bg-card border border-border-primary rounded-2xl p-6 sticky top-24">
        <h3 className="text-xl font-bold text-text-primary mb-6 uppercase tracking-wider border-b border-border-primary pb-4">
          Book This Tour
        </h3>
        
        <div className="space-y-4 mb-8">
          <p className="text-text-secondary text-sm leading-relaxed mb-4">
            Our tour packages are highly customizable. Contact us on WhatsApp to discuss your exact requirements, travel dates, and get a tailored quotation instantly.
          </p>
          
          <div className="bg-bg-primary p-4 rounded-xl border border-border-primary">
            <h4 className="text-sm font-semibold text-text-primary mb-2">Need a custom itinerary?</h4>
            <p className="text-xs text-text-secondary">We can adjust days, vehicles, and destinations based on your preferences.</p>
          </div>
        </div>

        <Button 
          variant="primary" 
          className="w-full py-4"
          onClick={() => setIsPopupOpen(true)}
        >
          Book on WhatsApp
        </Button>
      </div>

      <WhatsAppBookingPopup
        isOpen={isPopupOpen}
        onClose={() => setIsPopupOpen(false)}
        productName={tour.title}
        category="Tour Package"
      />
    </>
  );
}
