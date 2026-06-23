import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Play, ChevronDown } from "lucide-react";
import { personalData } from "../data";

export default function Hero() {
  const handleScrollTo = (e, targetId) => {
    e.preventDefault();
    const targetElement = document.querySelector(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col justify-center items-center px-6 pt-24 overflow-hidden bg-bg-base"
    >
      {/* Background grid lines */}
      <div className="absolute inset-0 bg-grid-lines pointer-events-none opacity-50" />

      {/* Floating glowing orbs */}
      <div className="absolute top-[20%] left-[10%] w-[35vw] h-[35vw] rounded-full bg-accent-indigo/10 blur-[130px] animate-float-slow pointer-events-none" />
      <div className="absolute bottom-[20%] right-[10%] w-[30vw] h-[30vw] rounded-full bg-accent-lime/5 blur-[120px] animate-float-medium pointer-events-none" />

      {/* Top radial mask to smooth out grid lines near edges */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_20%,#0A0A0F_85%)] pointer-events-none" />

      {/* Content wrapper */}
      <div className="max-w-4xl mx-auto text-center z-10 flex flex-col items-center">
        {/* "Currently building" Live Badge */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-8"
        >
          <a
            href="#work"
            onClick={(e) => handleScrollTo(e, "#work")}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-bg-surface border border-white/5 hover:border-accent-indigo/30 transition duration-300 text-xs font-medium tracking-wide text-text-muted hover:text-text-primary focus-visible:outline-none"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent-lime opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-accent-lime"></span>
            </span>
            <span className="text-text-primary font-bold">Currently building</span>
            <span className="text-white/20">|</span>
            <span className="text-accent-indigo font-semibold flex items-center gap-1">
              JustBin <ArrowRight size={12} />
            </span>
          </a>
        </motion.div>

        {/* Display Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="font-display font-extrabold text-7xl md:text-9xl tracking-tight text-white mb-4"
        >
          {personalData.name}
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="font-display font-bold text-xl md:text-3xl tracking-wide text-gradient-accent mb-6"
        >
          {personalData.title}
        </motion.p>

        {/* Description One-liner */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="font-sans text-base md:text-lg text-text-muted max-w-xl mx-auto leading-relaxed mb-12"
        >
          {personalData.subtitle}
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col sm:flex-row items-center gap-4 w-full justify-center sm:w-auto"
        >
          <a
            href="#work"
            onClick={(e) => handleScrollTo(e, "#work")}
            className="w-full sm:w-auto px-8 py-4 rounded-xl bg-accent-indigo text-white font-semibold text-sm shadow-[0_0_20px_rgba(99,102,241,0.35)] hover:shadow-[0_0_35px_rgba(99,102,241,0.55)] transition-all duration-300 hover:-translate-y-0.5 text-center flex items-center justify-center gap-2 group"
          >
            View Work
            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </a>
          <a
            href="#vlog"
            onClick={(e) => handleScrollTo(e, "#vlog")}
            className="w-full sm:w-auto px-8 py-4 rounded-xl bg-bg-surface border border-white/10 text-white font-semibold text-sm hover:bg-white/5 transition-all duration-300 hover:-translate-y-0.5 text-center flex items-center justify-center gap-2"
          >
            Watch Vlogs
            <Play size={14} className="fill-white" />
          </a>
        </motion.div>
      </div>

      {/* Down indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: [0, 1, 0] }}
        transition={{ duration: 2, repeat: Infinity, delay: 1 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-text-muted pointer-events-none"
      >
        <ChevronDown size={24} />
      </motion.div>
    </section>
  );
}
