import React from "react";
import { motion } from "framer-motion";
import { personalData } from "../data";

// Custom SVG Icons for Tools
const toolsLogos = {
  vscode: (
    <svg viewBox="0 0 24 24" className="w-6 h-6 text-[#007ACC] fill-current" aria-hidden="true">
      <path d="M23.986 6.568l-3.32-3.29a1.1 1.1 0 0 0-1.5 0L10.3 11.23l-3.79-2.86a.8.8 0 0 0-1.12.12L.15 15.11a1.1 1.1 0 0 0 .15 1.5l4.3 3.32a1.1 1.1 0 0 0 1.5 0l8.9-8.9 3.79 2.86c.3.23.7.23 1 .05l4.3-3.32c.5-.3.5-1.06-.11-1.56z" />
    </svg>
  ),
  figma: (
    <svg viewBox="0 0 24 24" className="w-6 h-6 text-[#F24E1E] fill-current" aria-hidden="true">
      <path d="M8 2c-2.21 0-4 1.79-4 4s1.79 4 4 4h4V2H8zm4 8H8c-2.21 0-4 1.79-4 4s1.79 4 4 4h4v-8zm0 8H8c-2.21 0-4-1.79-4-4V8h8v10zm0-8c0-2.21 1.79-4 4-4s4 1.79 4 4-1.79 4-4 4h-4v-4zm4 4c0 2.21-1.79 4-4 4h-4v-8h4c2.21 0 4 1.79 4 4z" />
    </svg>
  ),
  github: (
    <svg viewBox="0 0 24 24" className="w-6 h-6 text-[#F0F0F5] fill-current" aria-hidden="true">
      <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
    </svg>
  ),
  claude: (
    <svg viewBox="0 0 24 24" className="w-6 h-6 text-[#D97706] fill-current" aria-hidden="true">
      {/* Sleek floral/AI symbol representing Claude */}
      <path d="M12 2a10 10 0 0 0-4.47 21.06 1 1 0 0 0 .94-.35l1.83-2.19a4 4 0 0 1 3.4 0l1.83 2.19a1 1 0 0 0 .94.35A10 10 0 0 0 12 2zm0 4a6 6 0 1 1-6 6 6 6 0 0 1 6-6z" />
      <circle cx="12" cy="12" r="3" />
    </svg>
  ),
  framer: (
    <svg viewBox="0 0 24 24" className="w-6 h-6 text-[#0055FF] fill-current" aria-hidden="true">
      <path d="M19 2H5v7h7v7H5v6h14v-7h-7V9h7z" />
    </svg>
  ),
};

export default function About() {
  return (
    <section id="about" className="py-24 md:py-32 bg-bg-surface relative border-y border-white/5">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="mb-16 text-center md:text-left">
          <p className="font-display font-bold text-xs tracking-widest text-accent-indigo uppercase mb-2">
            Skills & About
          </p>
          <h2 className="font-display font-extrabold text-4xl md:text-6xl text-white tracking-tight">
            Who is Divas?
          </h2>
        </div>

        {/* Split Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
          
          {/* Left Column: Biography & Timeline */}
          <div className="lg:col-span-7 flex flex-col justify-between">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h3 className="font-display font-bold text-2xl text-white mb-6">
                Creative Engineering
              </h3>
              <p className="font-sans text-base text-text-muted leading-relaxed mb-8">
                {personalData.bio}
              </p>
            </motion.div>

            {/* Experience Timeline */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mt-6"
            >
              <h4 className="font-display font-bold text-sm tracking-wide text-white uppercase mb-8">
                The Journey So Far
              </h4>
              
              <div className="relative pl-6 border-l-2 border-white/5 space-y-10">
                {personalData.timeline.map((item, idx) => (
                  <div key={idx} className="relative">
                    {/* Glowing Node Marker */}
                    <span className="absolute -left-[31px] top-1.5 w-4 h-4 rounded-full bg-bg-surface border-2 border-accent-indigo flex items-center justify-center">
                      <span className="w-1.5 h-1.5 rounded-full bg-accent-indigo animate-pulse" />
                    </span>
                    
                    <div className="flex flex-wrap items-center gap-2.5 mb-2">
                      <span className="px-2.5 py-0.5 rounded-full bg-accent-indigo/15 text-accent-indigo text-[10px] font-bold border border-accent-indigo/25 tracking-wide">
                        {item.year}
                      </span>
                      <h5 className="font-display font-bold text-base text-white">
                        {item.title}
                      </h5>
                    </div>
                    <p className="font-sans text-xs text-text-muted font-medium mb-1">
                      {item.company}
                    </p>
                    <p className="font-sans text-xs text-text-muted leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Right Column: Skills & Tools Showcase */}
          <div className="lg:col-span-5 flex flex-col gap-10">
            
            {/* Skills grid */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-bg-base/40 border border-white/5 rounded-2xl p-6 shadow-sm"
            >
              <h3 className="font-display font-bold text-lg text-white mb-6">
                Core Toolkit
              </h3>
              <div className="flex flex-wrap gap-2.5">
                {personalData.skills.map((skill, idx) => (
                  <span
                    key={skill}
                    className="text-xs font-semibold tracking-wide px-3.5 py-2 rounded-xl bg-bg-base border border-white/5 hover:border-accent-indigo/30 hover:text-white transition duration-300 text-text-muted cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>

            {/* Tools list */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-bg-base/40 border border-white/5 rounded-2xl p-6 shadow-sm"
            >
              <h3 className="font-display font-bold text-lg text-white mb-6">
                Preferred Environments
              </h3>
              
              <div className="grid grid-cols-5 gap-4 justify-items-center">
                {Object.entries(toolsLogos).map(([name, logo]) => (
                  <div
                    key={name}
                    className="w-12 h-12 rounded-xl bg-bg-base border border-white/5 flex items-center justify-center hover:bg-white/5 hover:border-white/10 hover:scale-105 transition-all duration-300 group cursor-pointer"
                    title={name.toUpperCase()}
                  >
                    <div className="opacity-60 group-hover:opacity-100 transition-opacity">
                      {logo}
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
          
        </div>
      </div>
    </section>
  );
}
