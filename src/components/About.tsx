"use client";

import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-sm tracking-widest uppercase text-[var(--accent)] mb-3 font-medium">
            About
          </h2>
          <h3 className="text-3xl sm:text-4xl font-bold mb-8">
            A bit about me
          </h3>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="space-y-4 text-[var(--muted)] leading-relaxed"
          >
            <p>
              I&apos;m a BBA student at the University of Toronto Scarborough,
              specializing in Management with a focus on accounting and finance.
              I&apos;m drawn to the clarity of numbers and the structure of
              financial systems.
            </p>
            <p>
              Beyond the classroom, I enjoy building things — financial models,
              marketing campaigns, analytical dashboards, and personal systems
              that help me think and work better.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="space-y-4 text-[var(--muted)] leading-relaxed"
          >
            <p>
              I believe the best work happens at intersections — business and
              creativity, analysis and design, strategy and execution. That
              mindset drives how I approach everything from case competitions to
              club leadership.
            </p>
            <p>
              I&apos;m currently seeking internship opportunities in investment
              banking, accounting, finance, and business advisory where I can
              apply my analytical skills and grow professionally.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
