"use client";

import { useState } from "react";
import { Button } from "@/components/ui/Button";
import WhatsAppBookingPopup from "@/components/shared/WhatsAppBookingPopup";

interface VehicleDetailClientProps {
  vehicle: any;
}

export default function VehicleDetailClient({ vehicle }: VehicleDetailClientProps) {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  return (
    <>
      <div className="bg-bg-card border border-border-primary rounded-2xl p-6 sticky top-24">
        <h3 className="text-xl font-bold text-text-primary mb-6 uppercase tracking-wider border-b border-border-primary pb-4">
          Rental Summary
        </h3>
        
        <div className="space-y-4 mb-8">
          <div className="flex justify-between items-center">
            <span className="text-text-secondary">Daily Rent</span>
            <span className="text-lg font-bold text-accent-primary">Rs. {vehicle.rent.daily.toLocaleString()}</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-text-secondary">Weekly Rent</span>
            <span className="text-lg font-bold text-text-primary">Rs. {vehicle.rent.weekly.toLocaleString()}</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-text-secondary">Monthly Rent</span>
            <span className="text-lg font-bold text-text-primary">Rs. {vehicle.rent.monthly.toLocaleString()}</span>
          </div>
          <div className="flex justify-between items-center pt-4 border-t border-border-primary">
            <span className="text-text-secondary">Driver</span>
            <span className="font-semibold text-accent-primary">
              {vehicle.driverIncluded ? "Included" : "Self Drive Option"}
            </span>
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
        productName={vehicle.name}
        category={vehicle.category}
        dailyPrice={vehicle.rent.daily}
      />
    </>
  );
}
