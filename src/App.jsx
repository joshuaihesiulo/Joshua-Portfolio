import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import MarqueeBanner from './components/MarqueeBanner';
import About from './components/About';
import StatsGrid from './components/StatsGrid';
import Awards from './components/Awards';
import Portfolio from './components/Portfolio';

export default function App() {
  return (
    <div className="bg-[#FAF9F5] min-h-screen text-black font-sans overflow-x-hidden selection:bg-[#E53925] selection:text-white">
      <Navbar />
      <Hero />
      <MarqueeBanner />
      <About />
      <StatsGrid />
      <Awards />
      <Portfolio />
    </div>
  );
}