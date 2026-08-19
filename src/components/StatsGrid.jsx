import React from 'react';
import Reveal from './Reveal';

const stats = [
  { value: "1+", label: "YEAR OF EXPERIENCE", dark: false },
  { value: "10+", label: "PROJECTS COMPLETED", dark: true },
  { value: "7+", label: "CERTIFICATES", dark: false },
];

export default function StatsGrid() {
  return (
    <section className="max-w-5xl mx-auto px-6 md:px-12 py-8">
      <div className="grid grid-cols-1 md:grid-cols-3 border border-black rounded-lg overflow-hidden divide-y md:divide-y-0 md:divide-x divide-black bg-white">
        {stats.map((stat, i) => (
          <Reveal
            key={stat.label}
            delay={i * 100}
            className={`p-8 text-center space-y-1 ${stat.dark ? 'bg-black text-white' : ''}`}
          >
            <div className="text-4xl sm:text-5xl font-extrabold tracking-tight">{stat.value}</div>
            <div className={`text-[10px] font-bold tracking-widest uppercase ${stat.dark ? 'text-gray-300' : 'text-gray-600'}`}>
              {stat.label}
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}