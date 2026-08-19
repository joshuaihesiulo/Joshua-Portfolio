import React from 'react';
import RedStar from './RedStar';
import Reveal from './Reveal';
import Parallax from './Parallax';
import { awardsData } from '../data/portfolioData';

export default function Awards() {
  return (
    <section className="relative max-w-5xl mx-auto px-6 md:px-12 py-20">
      <Reveal className="text-center space-y-2 mb-12">
        <RedStar className="w-6 h-6 mx-auto" />
        <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">Awards</h2>
        <p className="text-[10px] font-bold tracking-widest text-gray-500 uppercase">RECOGNITIONS & ACCOMPLISHMENTS</p>
      </Reveal>

      <div className="space-y-4 relative z-10">
        {awardsData.map((award, i) => (
          <Reveal key={award.id} delay={i * 80}>
            <div 
              className="border border-black bg-white p-4 sm:p-5 rounded-lg flex flex-col sm:flex-row sm:items-center justify-between gap-4 transition-all hover:translate-x-1"
            >
              <div className="flex items-center gap-4">
                <div className="w-8 h-8 bg-[#E53925] text-white font-black text-xs flex items-center justify-center shrink-0 rounded">
                  {award.id}
                </div>
                <div>
                  <h3 className="font-bold text-sm text-black">{award.title}</h3>
                  <p className="text-xs text-gray-500 mt-0.5">{award.subtitle}</p>
                </div>
              </div>

              <span className="text-[10px] font-bold tracking-wider text-black uppercase self-start sm:self-center">
                {award.tag}
              </span>
            </div>
          </Reveal>
        ))}
      </div>

      <Parallax speed={0.3} className="absolute right-0 top-1/2 hidden lg:block pointer-events-none">
        <div className="-translate-y-1/2 translate-x-1/2 opacity-90">
          <svg viewBox="0 0 200 200" className="w-64 h-64 text-[#E53925] fill-current">
            <path d="M100 0 L115 75 L190 60 L130 100 L190 140 L115 125 L100 200 L85 125 L10 140 L70 100 L10 60 L85 75 Z" />
          </svg>
        </div>
      </Parallax>
    </section>
  );
}