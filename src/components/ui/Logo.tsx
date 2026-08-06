import React from 'react';

interface LogoProps {
  className?: string;
  width?: number;
  height?: number;
}

export default function Logo({ className = "", width = 180, height = 60 }: LogoProps) {
  return (
    <svg 
      width={width} 
      height={height} 
      viewBox="0 0 300 100" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Car Silhouette */}
      <path 
        d="M 30 75 Q 30 85 40 85 L 45 85 Q 50 85 50 75 L 50 65 L 110 65 L 110 75 Q 110 85 115 85 L 120 85 Q 130 85 130 75 L 130 50 Q 130 40 120 30 L 105 20 Q 95 15 80 15 L 80 15 Q 65 15 55 20 L 40 30 Q 30 40 30 50 Z" 
        fill="currentColor" 
        className="text-text-primary"
      />
      
      {/* Headlights */}
      <circle cx="45" cy="55" r="5" fill="#ffffff" />
      <circle cx="115" cy="55" r="5" fill="#ffffff" />
      
      {/* Windshield */}
      <path 
        d="M 45 35 L 55 25 Q 80 20 105 25 L 115 35 Z" 
        fill="currentColor"
        className="text-bg-primary"
      />

      {/* Iris / Aperture Logo in Center */}
      <g transform="translate(80, 50) scale(0.6)">
        <circle cx="0" cy="0" r="22" stroke="#F59E0B" strokeWidth="6" fill="none" />
        <path d="M 0 -18 L 10 0 M 15 -10 L 0 10 M 18 0 L -10 0 M 10 15 L -10 -5 M -15 10 L 0 -10 M -18 0 L 10 0" stroke="#F59E0B" strokeWidth="3" />
      </g>

      {/* Text: Iris */}
      <text 
        x="150" 
        y="55" 
        fontFamily="sans-serif" 
        fontWeight="800" 
        fontSize="42" 
        fill="#F59E0B"
      >
        Iris
      </text>
      
      {/* Text: Tours */}
      <text 
        x="225" 
        y="55" 
        fontFamily="sans-serif" 
        fontWeight="800" 
        fontSize="42" 
        fill="currentColor"
        className="text-text-primary"
      >
        Tours
      </text>
      
      {/* Text: Rental Car */}
      <text 
        x="155" 
        y="75" 
        fontFamily="sans-serif" 
        fontWeight="600" 
        fontSize="16" 
        fill="currentColor"
        className="text-text-secondary"
        letterSpacing="2"
      >
        Rental Car
      </text>
    </svg>
  );
}
