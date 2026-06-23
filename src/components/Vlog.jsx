import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Play, Calendar, ArrowRight } from "lucide-react";
import { vlogData } from "../data";

const categories = ["All", "Build Log", "Life", "Tech"];

export default function Vlog() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredVlogs = activeCategory === "All"
    ? vlogData
    : vlogData.filter((vlog) => vlog.category === activeCategory);

  return (
    <section id="vlog" className="py-24 md:py-32 bg-bg-base relative">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="mb-12 text-center">
          <p className="font-display font-bold text-xs tracking-widest text-[#D97706] uppercase mb-2">
            The Vlog
          </p>
          <h2 className="font-display font-extrabold text-4xl md:text-6xl text-white tracking-tight mb-4">
            Documenting the journey.
          </h2>
          <p className="font-sans text-sm text-text-muted max-w-md mx-auto leading-relaxed">
            Build logs, life updates & behind the scenes of launching startups and creating products.
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-16">
          {categories.map((category) => {
            const isActive = activeCategory === category;
            return (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`relative px-5 py-2 rounded-full text-xs font-semibold tracking-wide transition-colors duration-300 focus-visible:outline-none ${
                  isActive
                    ? "text-[#18130F]"
                    : "text-text-muted hover:text-white border border-white/5 hover:bg-white/5"
                }`}
              >
                {isActive && (
                  <motion.span
                    layoutId="activeCategoryBg"
                    className="absolute inset-0 bg-gradient-to-r from-[#F59E0B] to-[#D97706] rounded-full shadow-[0_0_12px_rgba(217,119,6,0.35)]"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
                <span className="relative z-10">{category}</span>
              </button>
            );
          })}
        </div>

        {/* Video Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredVlogs.map((vlog) => (
              <motion.article
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                key={vlog.id}
                className="bg-[#15100B] border border-[#2D231B] rounded-2xl overflow-hidden flex flex-col h-full hover:border-[#F59E0B]/30 hover:shadow-[0_0_25px_rgba(217,119,6,0.1)] hover:-translate-y-1.5 transition-all duration-400 group"
              >
                {/* Video Thumbnail Overlay */}
                <div className="relative aspect-[16/9] bg-black/60 overflow-hidden">
                  <img
                    src={vlog.thumbnail}
                    alt={vlog.title}
                    className="w-full h-full object-cover object-center group-hover:scale-[1.03] transition-transform duration-500"
                    loading="lazy"
                  />
                  {/* Play Overlay */}
                  <div className="absolute inset-0 bg-black/30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <span className="w-12 h-12 rounded-full bg-[#F59E0B] flex items-center justify-center text-[#18130F] shadow-[0_0_15px_rgba(245,158,11,0.5)] transform scale-90 group-hover:scale-100 transition-transform duration-300">
                      <Play size={18} className="fill-[#18130F] translate-x-[1px]" />
                    </span>
                  </div>
                  {/* Category Pill Tag */}
                  <span className="absolute top-4 left-4 text-[10px] font-extrabold tracking-widest uppercase px-2.5 py-1 rounded bg-[#18130F]/90 text-[#F59E0B] border border-[#F59E0B]/20 backdrop-blur-sm">
                    {vlog.category}
                  </span>
                </div>

                {/* Card Content */}
                <div className="p-6 flex flex-col flex-grow">
                  {/* Date */}
                  <div className="flex items-center gap-1.5 text-text-muted text-[11px] font-semibold mb-3">
                    <Calendar size={12} className="text-[#F59E0B]/60" />
                    <span>{vlog.date}</span>
                  </div>
                  
                  {/* Title */}
                  <h3 className="font-display font-bold text-lg text-white leading-tight mb-2 group-hover:text-[#F59E0B] transition-colors duration-300">
                    {vlog.title}
                  </h3>
                  
                  {/* Caption */}
                  <p className="font-sans text-xs text-text-muted leading-relaxed mb-6 flex-grow">
                    {vlog.caption}
                  </p>

                  {/* Watch Link */}
                  <a
                    href={vlog.youtubeUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-xs font-bold text-[#F59E0B] group-hover:gap-2 transition-all duration-300 focus-visible:outline-none"
                  >
                    Watch Video
                    <ArrowRight size={14} />
                  </a>
                </div>
              </motion.article>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
