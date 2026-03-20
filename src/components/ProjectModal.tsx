"use client";

import { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import type { Project } from "@/lib/data";
import { useLang } from "./LanguageProvider";

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

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

const text = {
  en: { aboutProject: "About This Project", toolsLabel: "Tools & Technologies" },
  ko: { aboutProject: "프로젝트 소개", toolsLabel: "사용 도구 & 기술" },
};

export default function ProjectModal({ project, onClose }: ProjectModalProps) {
  const { lang } = useLang();
  const t = text[lang];

  useEffect(() => {
    if (project) {
      document.body.style.overflow = "hidden";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [project]);

  useEffect(() => {
    function handleKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") onClose();
    }
    if (project) {
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [project, onClose]);

  return (
    <AnimatePresence>
      {project && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
        >
          <motion.div
            className="absolute inset-0 bg-black/50 backdrop-blur-sm"
            onClick={onClose}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            aria-hidden="true"
          />

          <motion.div
            className="relative w-full max-w-2xl max-h-[85vh] overflow-y-auto bg-[var(--card)] border border-[var(--card-border)] rounded-2xl shadow-2xl"
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            role="dialog"
            aria-modal="true"
            aria-labelledby="modal-title"
          >
            <button
              onClick={onClose}
              className="absolute top-4 right-4 z-10 w-8 h-8 flex items-center justify-center rounded-full bg-[var(--bg)]/80 border border-[var(--border)] text-[var(--muted)] hover:text-[var(--foreground)] hover:border-[var(--accent)] transition-colors"
              aria-label="Close modal"
            >
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                <path d="M1 1l12 12M13 1L1 13" />
              </svg>
            </button>

            <div className="p-6 sm:p-8">
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

              <h2
                id="modal-title"
                className="text-xl sm:text-2xl font-bold mb-4 pr-8"
              >
                {project.title[lang]}
              </h2>

              <div className="h-px bg-[var(--border)] mb-5" />

              <div className="mb-6">
                <h3 className="text-sm font-semibold uppercase tracking-wider text-[var(--muted)] mb-3">
                  {t.aboutProject}
                </h3>
                <p className="text-[var(--muted)] leading-relaxed text-sm sm:text-base">
                  {project.details[lang]}
                </p>
              </div>

              <div>
                <h3 className="text-sm font-semibold uppercase tracking-wider text-[var(--muted)] mb-3">
                  {t.toolsLabel}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {project.tools.map((tool) => (
                    <span
                      key={tool}
                      className="text-sm text-[var(--foreground)] border border-[var(--border)] bg-[var(--bg)] px-3 py-1.5 rounded-lg font-medium"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
