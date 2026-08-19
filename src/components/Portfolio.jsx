import React from 'react';
import RedStar from './RedStar';
import Reveal from './Reveal';
import { projectsData } from '../data/portfolioData';

export default function Portfolio() {
  return (
    <section className="max-w-5xl mx-auto px-6 md:px-12 pt-12 pb-24">
      <Reveal className="text-center space-y-2 mb-12">
        <RedStar className="w-6 h-6 mx-auto" />
        <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">Portfolio</h2>
        <p className="text-[10px] font-bold tracking-widest text-gray-500 uppercase">PROJECTS & TEAM WORKS</p>
      </Reveal>

      <div className="grid gap-8 md:grid-cols-2">
        {projectsData.map((project, i) => (
          <Reveal key={project.id} delay={i * 120} className="h-full">
            <a
              href={project.link}
              target="_blank"
              rel="noreferrer"
              className="group border border-black bg-white overflow-hidden rounded-lg text-left shadow-lg transition-shadow hover:shadow-xl flex flex-col h-full"
            >
              <div className="bg-[#E53925] text-white text-[10px] font-bold px-3 py-1.5 inline-block uppercase tracking-wider self-start">
                {project.tag}
              </div>

              <div className="p-6 bg-gray-900 text-white flex-1 flex flex-col justify-between gap-5">
                <div>
                  <h3 className="text-xl font-bold">{project.title}</h3>
                  <p className="text-xs text-gray-400 mt-2 leading-relaxed">
                    {project.description}
                  </p>
                </div>
                <div className="flex flex-wrap gap-2">
                  {project.stack.map((tech) => (
                    <span
                      key={tech}
                      className="text-[9px] font-bold tracking-widest text-gray-300 uppercase border border-gray-700 rounded-full px-2.5 py-1"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="px-6 py-4 flex items-center justify-between text-[10px] font-bold uppercase tracking-wider">
                <span className="text-black">{project.cta}</span>
                <span className="text-[#E53925] transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
                  ↗
                </span>
              </div>
            </a>
          </Reveal>
        ))}
      </div>
    </section>
  );
}