"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center px-6 pt-16">
      <div className="max-w-3xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-sm tracking-widest uppercase text-[var(--accent)] mb-4 font-medium">
            Portfolio
          </p>
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold tracking-tight leading-tight mb-6">
            Kihun Lee
          </h1>
          <p className="text-lg sm:text-xl text-[var(--muted)] leading-relaxed max-w-2xl mx-auto mb-4">
            Management student building at the intersection of business,
            finance, creativity, and digital systems.
          </p>
          <p className="text-base text-[var(--muted)] leading-relaxed max-w-xl mx-auto mb-10">
            I&apos;m passionate about structured problem solving, financial analysis,
            and creating thoughtful systems — whether it&apos;s a financial model, a
            brand identity, or a personal productivity framework.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap items-center justify-center gap-4"
        >
          <a
            href="#projects"
            className="px-6 py-3 bg-[var(--accent)] text-white rounded-lg text-sm font-medium hover:opacity-90 transition-opacity"
          >
            View Projects
          </a>
          <a
            href="#resume"
            className="px-6 py-3 border border-[var(--border)] rounded-lg text-sm font-medium hover:border-[var(--accent)] hover:text-[var(--accent)] transition-colors"
          >
            Resume
          </a>
          <a
            href="#contact"
            className="px-6 py-3 border border-[var(--border)] rounded-lg text-sm font-medium hover:border-[var(--accent)] hover:text-[var(--accent)] transition-colors"
          >
            Contact
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="mt-20"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="mx-auto text-[var(--muted)] animate-bounce"
          >
            <path d="M12 5v14M19 12l-7 7-7-7" />
          </svg>
        </motion.div>
      </div>
    </section>
  );
}
