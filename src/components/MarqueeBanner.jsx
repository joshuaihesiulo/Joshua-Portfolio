import React from 'react';
import RedStar from './RedStar';
import { marqueeItems } from '../data/portfolioData';

export default function MarqueeBanner() {
  return (
    <div className="relative w-full overflow-hidden bg-black text-white py-3.5 transform -rotate-2 scale-105 my-8 shadow-xl">
      <div className="flex whitespace-nowrap animate-marquee">
        {[...Array(3)].map((_, idx) => (
          <div key={idx} className="flex items-center gap-6 mx-4 text-xs sm:text-sm font-extrabold tracking-widest uppercase">
            {marqueeItems.map((item, i) => (
              <React.Fragment key={i}>
                <span>{item}</span>
                <RedStar className="w-3 h-3 text-[#E53925]" />
              </React.Fragment>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}