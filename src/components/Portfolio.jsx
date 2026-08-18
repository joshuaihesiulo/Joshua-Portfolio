import React from 'react';
import RedStar from './RedStar';

export default function Portfolio() {
  return (
    <section className="max-w-5xl mx-auto px-6 md:px-12 pt-12 pb-24 text-center">
      <div className="space-y-2 mb-12">
        <RedStar className="w-6 h-6 mx-auto" />
        <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">Portfolio</h2>
        <p className="text-[10px] font-bold tracking-widest text-gray-500 uppercase">REGONITIONS & ACCOIMPLISHMENTS</p>
      </div>

<div className="max-w-md mx-auto border border-black bg-white overflow-hidden text-left shadow-lg">
          <div className="bg-[#E53925] text-white text-[10px] font-bold px-3 py-1 inline-block uppercase tracking-wider">
            AI WEB APP
          </div>
          <div className="p-6 bg-gray-900 text-white min-h-[160px] flex flex-col items-start justify-end gap-2">
            <h3 className="text-xl font-bold">NaijaCounts</h3>
            <p className="text-xs text-gray-400">AI calorie calculator — React, Zustand, Vite & Google Gemini (WAFCT 2019)</p>
          </div>
        </div>
    </section>
  );
}