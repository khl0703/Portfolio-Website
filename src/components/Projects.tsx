"use client";

import { useState, useCallback } from "react";
import { motion } from "framer-motion";
import { projects } from "@/lib/data";
import type { Project } from "@/lib/data";
import ProjectModal from "./ProjectModal";

const tagColors: Record<string, string> = {
  Finance: "bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300",
  Valuation: "bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300",
  Accounting: "bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-300",
  Analytics: "bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-300",
  Marketing: "bg-pink-100 text-pink-700 dark:bg-pink-900/30 dark:text-pink-300",
  Design: "bg-orange-100 text-orange-700 dark:bg-orange-900/30 dark:text-orange-300",
  Leadership: "bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-300",
  Technical: "bg-cyan-100 text-cyan-700 dark:bg-cyan-900/30 dark:text-cyan-300",
  Systems: "bg-stone-200 text-stone-700 dark:bg-stone-800 dark:text-stone-300",
  Productivity: "bg-stone-200 text-stone-700 dark:bg-stone-800 dark:text-stone-300",
  Excel: "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-300",
};

function getTagColor(tag: string) {
  return tagColors[tag] || "bg-stone-100 text-stone-600 dark:bg-stone-800 dark:text-stone-400";
}

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const handleClose = useCallback(() => {
    setSelectedProject(null);
  }, []);

  return (
    <section id="projects" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-sm tracking-widest uppercase text-[var(--accent)] mb-3 font-medium">
            Projects
          </h2>
          <h3 className="text-3xl sm:text-4xl font-bold mb-4">
            Featured Work
          </h3>
          <p className="text-[var(--muted)] mb-12 max-w-2xl">
            A selection of projects spanning finance, accounting, analytics, marketing, and systems design.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="group bg-[var(--card)] border border-[var(--card-border)] rounded-xl p-6 hover:border-[var(--accent)] transition-all duration-300 hover:shadow-lg flex flex-col"
            >
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className={`text-xs px-2.5 py-1 rounded-full font-medium ${getTagColor(tag)}`}
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <h4 className="text-lg font-semibold mb-3 group-hover:text-[var(--accent)] transition-colors">
                {project.title}
              </h4>

              <p className="text-sm text-[var(--muted)] leading-relaxed mb-4 flex-1">
                {project.summary}
              </p>

              <div className="flex flex-wrap gap-2 mb-4">
                {project.tools.map((tool) => (
                  <span
                    key={tool}
                    className="text-xs text-[var(--muted)] border border-[var(--border)] px-2 py-0.5 rounded"
                  >
                    {tool}
                  </span>
                ))}
              </div>

              <button
                onClick={() => setSelectedProject(project)}
                className="text-sm text-[var(--accent)] font-medium hover:underline self-start cursor-pointer"
              >
                View Details &rarr;
              </button>
            </motion.div>
          ))}
        </div>
      </div>

      <ProjectModal project={selectedProject} onClose={handleClose} />
    </section>
  );
}
