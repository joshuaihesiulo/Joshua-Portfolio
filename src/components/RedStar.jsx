import React from 'react';

export default function RedStar({ className = "w-4 h-4" }) {
  return (
    <svg 
      viewBox="0 0 24 24" 
      fill="currentColor" 
      className={`text-[#E53925] inline-block ${className}`}
    >
      <path 
        d="M12 2v20M2 12h20M4.93 4.93l14.14 14.14M4.93 19.07L19.07 4.93" 
        stroke="currentColor" 
        strokeWidth="3.5" 
        strokeLinecap="round" 
      />
    </svg>
  );
}