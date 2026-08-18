import React from 'react';

export default function StatsGrid() {
  return (
    <section className="max-w-5xl mx-auto px-6 md:px-12 py-8">
      <div className="grid grid-cols-1 md:grid-cols-3 border border-black rounded-lg overflow-hidden divide-y md:divide-y-0 md:divide-x divide-black bg-white">
        <div className="p-8 text-center space-y-1">
          <div className="text-4xl sm:text-5xl font-extrabold tracking-tight">1+</div>
          <div className="text-[10px] font-bold tracking-widest text-gray-600 uppercase">YEAR OF EXPERIENCE</div>
        </div>
        <div className="p-8 text-center space-y-1 bg-black text-white">
          <div className="text-4xl sm:text-5xl font-extrabold tracking-tight">10+</div>
          <div className="text-[10px] font-bold tracking-widest text-gray-300 uppercase">PROJECTS COMPLETED</div>
        </div>
        <div className="p-8 text-center space-y-1">
          <div className="text-4xl sm:text-5xl font-extrabold tracking-tight">7+</div>
          <div className="text-[10px] font-bold tracking-widest text-gray-600 uppercase">CERTIFICATES</div>
        </div>
      </div>
    </section>
  );
}