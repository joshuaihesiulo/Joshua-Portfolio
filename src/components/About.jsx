import React from 'react';
import RedStar from './RedStar';

export default function About() {
  return (
    <section className="max-w-7xl mx-auto px-6 md:px-12 py-20 grid grid-cols-1 lg:grid-cols-12 gap-12">
      <div className="lg:col-span-5 space-y-3">
        <div className="flex items-center gap-2 text-xs font-bold tracking-widest uppercase text-gray-700">
          <span>JOSHUA</span>
          <RedStar className="w-3 h-3" />
          <span>IHESIULO</span>
        </div>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-black leading-tight tracking-tight">
          Frontend web developer and AI engineer crafting intelligent web experiences.
        </h2>
      </div>

      <div className="lg:col-span-7 space-y-6">
        <p className="text-base sm:text-lg md:text-xl font-bold leading-relaxed text-black">
          I'm Joshua Ihesiulo — a frontend web developer and AI engineer based in
          Aba, Nigeria, building fast, accessible web apps with React,
          JavaScript, Tailwind CSS, and Vite.
        </p>
        <p className="text-xs sm:text-sm leading-relaxed text-gray-600">
          I'm a graduate of the RAD5 Tech Hub x WeCreateTech TECHCERT Program
          (Cohort 1), certified in Google AI Essentials, and certified in Python
          from the University of Michigan on Coursera. I'm currently exploring AI
          agent frameworks like LangGraph and CrewAI to build intelligent,
          agent-driven applications.
        </p>

        <div className="pt-6 grid grid-cols-3 gap-4 border-t border-gray-200">
          <div>
            <span className="block text-[10px] font-bold tracking-widest text-gray-400 uppercase">LOCATION</span>
            <span className="text-xs sm:text-sm font-bold text-black mt-1 block">Aba, Nigeria</span>
          </div>
          <div>
            <span className="block text-[10px] font-bold tracking-widest text-gray-400 uppercase">ROLE</span>
            <span className="text-xs sm:text-sm font-bold text-black mt-1 block">Frontend Dev & AI Eng</span>
          </div>
          <div>
            <span className="block text-[10px] font-bold tracking-widest text-gray-400 uppercase">CERTIFIED</span>
            <span className="text-xs sm:text-sm font-bold text-black mt-1 block">Google AI Essentials</span>
          </div>
        </div>
      </div>
    </section>
  );
}