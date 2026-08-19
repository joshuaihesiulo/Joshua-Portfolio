import React from 'react';
import RedStar from './RedStar';
import Reveal from './Reveal';
import Parallax from './Parallax';
import { certificatesData } from '../data/portfolioData';

export default function Certificates() {
  return (
    <section className="relative max-w-5xl mx-auto px-6 md:px-12 py-20">
      <Reveal className="text-center space-y-2 mb-12">
        <RedStar className="w-6 h-6 mx-auto" />
        <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">Certificates</h2>
        <p className="text-[10px] font-bold tracking-widest text-gray-500 uppercase">COURSERA & PROFESSIONAL CREDENTIALS</p>
      </Reveal>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 relative z-10">
        {certificatesData.map((cert, i) => (
          <Reveal key={cert.id} delay={(i % 3) * 80} className="h-full">
            <a
              href={cert.link}
              target="_blank"
              rel="noreferrer"
              className="group border border-black bg-white overflow-hidden rounded-lg text-left shadow-lg transition-shadow hover:shadow-xl flex flex-col h-full"
            >
              <div className="overflow-hidden">
                <img
                  src={cert.image}
                  alt={cert.title}
                  loading="lazy"
                  className="aspect-[4/3] w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              <div className="p-5 flex-1 flex flex-col justify-between gap-3">
                <div>
                  <h3 className="font-bold text-sm text-black leading-snug">{cert.title}</h3>
                  <p className="text-xs text-gray-500 mt-1">{cert.issuer} · {cert.date}</p>
                </div>
                <div className="flex items-center justify-between text-[10px] font-bold uppercase tracking-wider">
                  <span className="text-[#E53925]">View credential</span>
                  <span className="text-black transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
                    ↗
                  </span>
                </div>
              </div>
            </a>
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