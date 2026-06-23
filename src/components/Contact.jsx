import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Mail, Download, Send, CheckCircle } from "lucide-react";
import confetti from "canvas-confetti";
import { personalData } from "../data";

export default function Contact() {
  const [formState, setFormState] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const validate = () => {
    const tempErrors = {};
    if (!formState.name.trim()) tempErrors.name = "Name is required";
    if (!formState.email.trim()) {
      tempErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formState.email)) {
      tempErrors.email = "Please enter a valid email address";
    }
    if (!formState.message.trim()) tempErrors.message = "Message cannot be empty";
    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormState((prev) => ({ ...prev, [name]: value }));
    // Clear error on type
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);

    // Simulate API request
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitSuccess(true);
      setFormState({ name: "", email: "", message: "" });

      // Trigger premium visual confetti feedback!
      confetti({
        particleCount: 150,
        spread: 80,
        origin: { y: 0.6 },
        colors: ["#6366F1", "#84CC16", "#A5B4FC", "#F0F0F5"],
      });

      // Clear success notification after 5s
      setTimeout(() => setSubmitSuccess(false), 5000);
    }, 1500);
  };

  return (
    <section id="contact" className="py-24 md:py-32 bg-bg-surface relative border-t border-white/5">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="mb-16 text-center lg:text-left">
          <p className="font-display font-bold text-xs tracking-widest text-accent-indigo uppercase mb-2">
            Get In Touch
          </p>
          <h2 className="font-display font-extrabold text-4xl md:text-6xl text-white tracking-tight">
            Let's build something.
          </h2>
          <p className="font-sans text-sm text-text-muted mt-2">
            Open for freelance projects, collaborations, and interesting product ideas.
          </p>
        </div>

        {/* Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
          
          {/* Left Column: Form */}
          <div className="lg:col-span-7">
            <form onSubmit={handleSubmit} className="space-y-6">
              
              {/* Toast Notification */}
              <AnimatePresence>
                {submitSuccess && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="p-4 rounded-xl bg-accent-lime/10 border border-accent-lime/20 flex items-center gap-3 text-accent-lime text-sm font-semibold"
                  >
                    <CheckCircle size={18} />
                    <span>Thanks! Your message has been received. I'll get back to you shortly.</span>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Name Input */}
              <div>
                <label htmlFor="name" className="block text-xs font-bold uppercase tracking-wider text-text-muted mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formState.name}
                  onChange={handleInputChange}
                  className={`w-full px-4 py-3 rounded-xl bg-bg-base border ${
                    errors.name ? "border-red-500/50 focus:border-red-500" : "border-white/5 focus:border-accent-indigo"
                  } text-white text-sm font-sans focus:outline-none focus:ring-1 focus:ring-accent-indigo/20 transition duration-300`}
                  placeholder="Your name"
                />
                {errors.name && <p className="text-red-500 text-xs mt-1.5 font-medium">{errors.name}</p>}
              </div>

              {/* Email Input */}
              <div>
                <label htmlFor="email" className="block text-xs font-bold uppercase tracking-wider text-text-muted mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formState.email}
                  onChange={handleInputChange}
                  className={`w-full px-4 py-3 rounded-xl bg-bg-base border ${
                    errors.email ? "border-red-500/50 focus:border-red-500" : "border-white/5 focus:border-accent-indigo"
                  } text-white text-sm font-sans focus:outline-none focus:ring-1 focus:ring-accent-indigo/20 transition duration-300`}
                  placeholder="your.email@example.com"
                />
                {errors.email && <p className="text-red-500 text-xs mt-1.5 font-medium">{errors.email}</p>}
              </div>

              {/* Message Input */}
              <div>
                <label htmlFor="message" className="block text-xs font-bold uppercase tracking-wider text-text-muted mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={6}
                  value={formState.message}
                  onChange={handleInputChange}
                  className={`w-full px-4 py-3 rounded-xl bg-bg-base border ${
                    errors.message ? "border-red-500/50 focus:border-red-500" : "border-white/5 focus:border-accent-indigo"
                  } text-white text-sm font-sans focus:outline-none focus:ring-1 focus:ring-accent-indigo/20 transition duration-300 resize-none`}
                  placeholder="Tell me about your project or idea..."
                />
                {errors.message && <p className="text-red-500 text-xs mt-1.5 font-medium">{errors.message}</p>}
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-4 rounded-xl bg-accent-indigo text-white font-semibold text-sm hover:bg-indigo-600 active:scale-[0.98] disabled:opacity-50 disabled:scale-100 transition-all duration-300 flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(99,102,241,0.25)] hover:shadow-[0_0_35px_rgba(99,102,241,0.45)] cursor-pointer focus-visible:outline-none"
              >
                {isSubmitting ? (
                  <span className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                ) : (
                  <>
                    Send Message
                    <Send size={14} />
                  </>
                )}
              </button>
            </form>
          </div>

          {/* Right Column: Direct Info & Resume */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div className="space-y-8">
              <h3 className="font-display font-bold text-2xl text-white">
                Connect Directly
              </h3>
              <p className="font-sans text-sm text-text-muted leading-relaxed">
                Prefer email or social media? Feel free to reach out via any of the links below. I usually respond within 24 hours.
              </p>

              {/* Direct email & phone display */}
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href={`mailto:${personalData.email}`}
                  className="flex-1 inline-flex items-center justify-center sm:justify-start gap-3 px-5 py-3 rounded-xl bg-bg-base border border-white/5 hover:border-accent-indigo/30 transition duration-300 text-text-primary hover:text-white font-sans text-sm font-semibold group focus-visible:outline-none"
                >
                  <Mail size={18} className="text-accent-indigo group-hover:scale-110 transition-transform" />
                  <span>{personalData.email}</span>
                </a>
                {personalData.phone && (
                  <a
                    href={`tel:${personalData.phone}`}
                    className="flex-1 inline-flex items-center justify-center sm:justify-start gap-3 px-5 py-3 rounded-xl bg-bg-base border border-white/5 hover:border-accent-indigo/30 transition duration-300 text-text-primary hover:text-white font-sans text-sm font-semibold group focus-visible:outline-none"
                  >
                    <svg viewBox="0 0 24 24" className="w-[18px] h-[18px] text-accent-indigo fill-none stroke-current stroke-2 group-hover:scale-110 transition-transform" aria-hidden="true">
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
                    </svg>
                    <span>{personalData.phone}</span>
                  </a>
                )}
              </div>

              {/* Social Grid */}
              <div className="grid grid-cols-2 gap-4">
                <a
                  href={personalData.socials.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-4 rounded-xl bg-bg-base border border-white/5 hover:bg-white/5 transition duration-300 text-text-muted hover:text-white group focus-visible:outline-none"
                >
                  <svg viewBox="0 0 24 24" className="w-[18px] h-[18px] fill-current text-text-muted group-hover:text-accent-indigo transition-colors" aria-hidden="true">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.779-1.75-1.75s.784-1.75 1.75-1.75 1.75.779 1.75 1.75-.784 1.75-1.75 1.75zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                  </svg>
                  <span className="text-xs font-semibold">LinkedIn</span>
                </a>
                <a
                  href={personalData.socials.twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-4 rounded-xl bg-bg-base border border-white/5 hover:bg-white/5 transition duration-300 text-text-muted hover:text-white group focus-visible:outline-none"
                >
                  <svg viewBox="0 0 24 24" className="w-[18px] h-[18px] fill-current text-text-muted group-hover:text-accent-indigo transition-colors" aria-hidden="true">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                  </svg>
                  <span className="text-xs font-semibold">Twitter / X</span>
                </a>
                <a
                  href={personalData.socials.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-4 rounded-xl bg-bg-base border border-white/5 hover:bg-white/5 transition duration-300 text-text-muted hover:text-white group focus-visible:outline-none"
                >
                  <svg viewBox="0 0 24 24" className="w-[18px] h-[18px] fill-current text-text-muted group-hover:text-accent-indigo transition-colors" aria-hidden="true">
                    <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>
                  </svg>
                  <span className="text-xs font-semibold">GitHub</span>
                </a>
                <a
                  href={personalData.socials.youtube}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-4 rounded-xl bg-bg-base border border-white/5 hover:bg-white/5 transition duration-300 text-text-muted hover:text-white group focus-visible:outline-none"
                >
                  <svg viewBox="0 0 24 24" className="w-[18px] h-[18px] fill-current text-text-muted group-hover:text-accent-indigo transition-colors" aria-hidden="true">
                    <path d="M23.498 6.163a3.003 3.003 0 0 0-2.11-2.11C19.517 3.545 12 3.545 12 3.545s-7.517 0-9.388.508a3.003 3.003 0 0 0-2.11 2.11C0 8.033 0 12 0 12s0 3.967.502 5.837a3.003 3.003 0 0 0 2.11 2.11c1.871.508 9.388.508 9.388.508s7.517 0 9.388-.508a3.003 3.003 0 0 0 2.11-2.11C24 15.967 24 12 24 12s0-3.967-.502-5.837zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                  </svg>
                  <span className="text-xs font-semibold">Vlog</span>
                </a>
              </div>
            </div>

            {/* Resume Download CV */}
            <div className="pt-8 mt-8 border-t border-white/5">
              <a
                href={personalData.resumeUrl}
                download
                className="inline-flex items-center gap-2.5 px-6 py-4 rounded-xl bg-bg-base border border-white/10 hover:border-accent-indigo/40 text-white font-semibold text-sm hover:bg-white/5 transition-all duration-300 focus-visible:outline-none"
              >
                Download CV
                <Download size={14} />
              </a>
            </div>

          </div>
          
        </div>
      </div>
    </section>
  );
}
