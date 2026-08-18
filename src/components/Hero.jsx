import React from 'react';
import RedStar from './RedStar';

export default function Hero() {
  return (
    <section className="max-w-7xl mx-auto px-6 md:px-12 pt-8 pb-20 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
      <div className="lg:col-span-7 space-y-6">
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight leading-[1.05] uppercase">
          HI, I'M JOSHUA. <br />
          A CREATIVE <RedStar className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 mx-1 align-baseline" /> DEVELOPER <br />
          BASED IN AB<span className="line-through decoration-[#E53925] decoration-4">IA</span>
        </h1>

        <div className="flex items-center gap-2 text-xs md:text-sm font-bold tracking-widest uppercase">
          <span>REACT</span>
          <RedStar className="w-3 h-3" />
          <span>JAVASCRIPT</span>
          <RedStar className="w-3 h-3" />
          <span>TAILWIND</span>
        </div>

        <div className="pt-4 flex items-center gap-4">
          <button className="bg-black text-white border border-black px-6 py-3 text-xs font-bold uppercase tracking-wider hover:bg-gray-800 transition">
            Got a project?
          </button>
          <button className="border border-black text-black px-6 py-3 text-xs font-bold uppercase tracking-wider hover:bg-black hover:text-white transition">
            Let's talk
          </button>
        </div>
      </div>

      <div className="lg:col-span-5 relative flex justify-center items-center">
        <div className="absolute -z-0 opacity-90 scale-125 transform rotate-12">
          <svg viewBox="0 0 200 200" className="w-72 h-72 sm:w-96 sm:h-96 text-[#E53925] fill-current">
            <path d="M100 0 L115 75 L190 60 L130 100 L190 140 L115 125 L100 200 L85 125 L10 140 L70 100 L10 60 L85 75 Z" />
          </svg>
        </div>

        <div className="relative z-10 w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 rounded-full overflow-hidden border-4 border-white shadow-2xl bg-gray-200">
          <img 
            src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=800" 
            alt="Joshua Ihesiulo" 
            className="w-full h-full object-cover grayscale contrast-125"
          />
        </div>
      </div>
    </section>
  );
}