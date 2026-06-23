import React from "react";
import { motion } from "framer-motion";
import { ExternalLink, BookOpen, ArrowUpRight } from "lucide-react";
import { projectsData } from "../data";

// Custom animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 20,
    },
  },
};

export default function Work() {
  return (
    <section id="work" className="py-24 md:py-32 bg-bg-base relative">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="mb-16 text-center md:text-left">
          <p className="font-display font-bold text-xs tracking-widest text-accent-indigo uppercase mb-2">
            Selected Work
          </p>
          <h2 className="font-display font-extrabold text-4xl md:text-6xl text-white tracking-tight">
            I build to solve.
          </h2>
        </div>

        {/* Responsive Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {projectsData.map((project, idx) => {
            // Apply different custom glow colors depending on the project
            const glowClass = 
              project.id === "justbin" || project.id === "agrosense"
                ? "shadow-glow-lime hover:border-accent-lime/20"
                : "shadow-glow-indigo hover:border-accent-indigo/20";
            
            return (
              <motion.div
                key={project.id}
                variants={cardVariants}
                className={`bg-bg-surface border border-white/5 rounded-2xl overflow-hidden flex flex-col h-full hover:-translate-y-2 transition-all duration-400 ${glowClass}`}
              >
                {/* Thumbnail Screen */}
                <div className="relative aspect-[16/10] bg-black/40 overflow-hidden group">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover object-center group-hover:scale-[1.03] transition-transform duration-500 ease-out"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-bg-surface via-transparent to-transparent opacity-60" />
                </div>

                {/* Card Content */}
                <div className="p-6 flex flex-col flex-grow">
                  <h3 className="font-display font-extrabold text-2xl text-white tracking-tight mb-2">
                    {project.title}
                  </h3>
                  <p className="font-sans text-sm text-text-muted leading-relaxed mb-6 flex-grow">
                    {project.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-[11px] font-medium tracking-wide px-2.5 py-1 rounded bg-white/5 text-text-primary border border-white/5"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Buttons */}
                  <div className="flex items-center gap-4 mt-auto pt-4 border-t border-white/5">
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 inline-flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-lg bg-white/5 hover:bg-white/10 text-white font-medium text-xs tracking-wide transition-all border border-white/5 focus-visible:outline-none"
                    >
                      Live Project
                      <ArrowUpRight size={14} className="opacity-60" />
                    </a>
                    <a
                      href={project.caseStudyUrl}
                      className="flex-1 inline-flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-lg bg-accent-indigo/10 hover:bg-accent-indigo/20 text-accent-indigo font-medium text-xs tracking-wide transition-all border border-accent-indigo/10 focus-visible:outline-none"
                    >
                      Case Study
                      <BookOpen size={14} />
                    </a>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
