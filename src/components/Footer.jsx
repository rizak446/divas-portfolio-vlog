import React from "react";
import { Mail } from "lucide-react";
import { personalData } from "../data";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-bg-base border-t border-white/5 py-12 md:py-16">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-8">
        
        {/* Name and Tagline */}
        <div className="text-center md:text-left">
          <div className="font-display font-extrabold text-lg text-white mb-1.5">
            {personalData.name}
          </div>
          <p className="font-sans text-xs text-text-muted">
            Builder. Designer. Founder.
          </p>
        </div>

        {/* Social Icons Row */}
        <div className="flex items-center gap-6">
          <a
            href={`mailto:${personalData.email}`}
            className="text-text-muted hover:text-accent-indigo transition-colors duration-300"
            aria-label="Email"
          >
            <Mail size={18} />
          </a>
          <a
            href={personalData.socials.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-text-muted hover:text-accent-indigo transition-colors duration-300"
            aria-label="GitHub"
          >
            <svg viewBox="0 0 24 24" className="w-[18px] h-[18px] fill-current text-text-muted hover:text-accent-indigo transition-colors duration-300" aria-hidden="true">
              <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>
            </svg>
          </a>
          <a
            href={personalData.socials.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="text-text-muted hover:text-accent-indigo transition-colors duration-300"
            aria-label="LinkedIn"
          >
            <svg viewBox="0 0 24 24" className="w-[18px] h-[18px] fill-current text-text-muted hover:text-accent-indigo transition-colors duration-300" aria-hidden="true">
              <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.779-1.75-1.75s.784-1.75 1.75-1.75 1.75.779 1.75 1.75-.784 1.75-1.75 1.75zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
            </svg>
          </a>
          <a
            href={personalData.socials.twitter}
            target="_blank"
            rel="noopener noreferrer"
            className="text-text-muted hover:text-accent-indigo transition-colors duration-300"
            aria-label="Twitter"
          >
            <svg viewBox="0 0 24 24" className="w-[18px] h-[18px] fill-current text-text-muted hover:text-accent-indigo transition-colors duration-300" aria-hidden="true">
              <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
            </svg>
          </a>
          <a
            href={personalData.socials.youtube}
            target="_blank"
            rel="noopener noreferrer"
            className="text-text-muted hover:text-accent-indigo transition-colors duration-300"
            aria-label="YouTube / Vlog"
          >
            <svg viewBox="0 0 24 24" className="w-[18px] h-[18px] fill-current text-text-muted hover:text-accent-indigo transition-colors duration-300" aria-hidden="true">
              <path d="M23.498 6.163a3.003 3.003 0 0 0-2.11-2.11C19.517 3.545 12 3.545 12 3.545s-7.517 0-9.388.508a3.003 3.003 0 0 0-2.11 2.11C0 8.033 0 12 0 12s0 3.967.502 5.837a3.003 3.003 0 0 0 2.11 2.11c1.871.508 9.388.508 9.388.508s7.517 0 9.388-.508a3.003 3.003 0 0 0 2.11-2.11C24 15.967 24 12 24 12s0-3.967-.502-5.837zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
            </svg>
          </a>
        </div>

        {/* Copyright and Credits */}
        <div className="text-center md:text-right font-sans text-xs text-text-muted space-y-1">
          <p>&copy; {currentYear} {personalData.name}. All rights reserved.</p>
          <p>
            Built with <span className="text-red-500">☕</span> and <a href="https://react.dev" target="_blank" rel="noopener noreferrer" className="hover:text-accent-indigo transition-colors">React</a>
          </p>
        </div>

      </div>
    </footer>
  );
}
