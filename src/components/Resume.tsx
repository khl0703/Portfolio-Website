"use client";

import { motion } from "framer-motion";

export default function Resume() {
  return (
    <section id="resume" className="py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-sm tracking-widest uppercase text-[var(--accent)] mb-3 font-medium">
            Resume
          </h2>
          <h3 className="text-3xl sm:text-4xl font-bold mb-12">
            My Resume
          </h3>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="bg-[var(--card)] border border-[var(--card-border)] rounded-xl p-8 md:p-12"
        >
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div>
              <h4 className="font-semibold mb-4 text-lg">Education</h4>
              <div className="space-y-1">
                <p className="font-medium">
                  Bachelor of Business Administration
                </p>
                <p className="text-sm text-[var(--muted)]">
                  University of Toronto Scarborough
                </p>
                <p className="text-sm text-[var(--muted)]">
                  Specialization in Management — Accounting & Finance
                </p>
                <p className="text-xs text-[var(--accent)]">
                  Expected Graduation: 2027
                </p>
              </div>
            </div>

            <div>
              <h4 className="font-semibold mb-4 text-lg">Highlights</h4>
              <ul className="space-y-2 text-sm text-[var(--muted)]">
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent)] mt-1.5 shrink-0" />
                  Finance case competition participant
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent)] mt-1.5 shrink-0" />
                  Marketing Director — UTKSA
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent)] mt-1.5 shrink-0" />
                  Self-directed projects in financial modeling & data analysis
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent)] mt-1.5 shrink-0" />
                  Proficient in Excel, Python, Canva, and PowerPoint
                </li>
              </ul>
            </div>
          </div>

          <div className="flex flex-wrap gap-4">
            {/* TODO: Replace "#" with actual resume PDF path, e.g. "/resume.pdf" */}
            <a
              href="#"
              className="inline-flex items-center gap-2 px-6 py-3 bg-[var(--accent)] text-white rounded-lg text-sm font-medium hover:opacity-90 transition-opacity"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>
              Download Resume
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-6 py-3 border border-[var(--border)] rounded-lg text-sm font-medium hover:border-[var(--accent)] hover:text-[var(--accent)] transition-colors"
            >
              Get in Touch
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
