import React from 'react';
import RedStar from './RedStar';

export default function Navbar() {
  return (
    <header className="max-w-7xl mx-auto px-6 md:px-12 py-6 flex items-center justify-between">
      <div className="flex items-center gap-2 font-black text-xl tracking-tight">
        <RedStar className="w-5 h-5" />
        <span>Joshua.</span>
      </div>

      <nav className="hidden md:flex items-center gap-8 text-xs font-semibold uppercase tracking-wider text-gray-800">
        <a href="#home" className="hover:text-[#E53925] transition-colors">Home</a>
        <a href="#about" className="hover:text-[#E53925] transition-colors">About</a>
        <a href="#contact" className="hover:text-[#E53925] transition-colors">Contact</a>
      </nav>

      <button className="border border-black px-5 py-2 text-xs font-bold uppercase tracking-wider hover:bg-black hover:text-white transition-all">
        Let's talk
      </button>
    </header>
  );
}