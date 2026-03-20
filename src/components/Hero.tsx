"use client";

import { motion } from "framer-motion";
import { useLang } from "./LanguageProvider";

const text = {
  en: {
    badge: "Portfolio",
    headline:
      "Management student building at the intersection of business, finance, creativity, and digital systems.",
    intro:
      "I'm passionate about structured problem solving, financial analysis, and creating thoughtful systems — whether it's a financial model, a brand identity, or a personal productivity framework.",
    viewProjects: "View Projects",
    resume: "Resume",
    contact: "Contact",
  },
  ko: {
    badge: "포트폴리오",
    headline:
      "비즈니스, 금융, 창의성, 디지털 시스템의 교차점에서 성장하는 경영학과 학생입니다.",
    intro:
      "체계적인 문제 해결, 재무 분석, 그리고 사려 깊은 시스템 구축에 열정을 가지고 있습니다 — 재무 모델, 브랜드 아이덴티티, 혹은 개인 생산성 프레임워크가 그 대상입니다.",
    viewProjects: "프로젝트 보기",
    resume: "이력서",
    contact: "연락하기",
  },
};

export default function Hero() {
  const { lang } = useLang();
  const t = text[lang];

  return (
    <section className="min-h-screen flex items-center justify-center px-6 pt-16">
      <div className="max-w-3xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-sm tracking-widest uppercase text-[var(--accent)] mb-4 font-medium">
            {t.badge}
          </p>
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold tracking-tight leading-tight mb-6">
            Kihun Lee
          </h1>
          <p className="text-lg sm:text-xl text-[var(--muted)] leading-relaxed max-w-2xl mx-auto mb-4">
            {t.headline}
          </p>
          <p className="text-base text-[var(--muted)] leading-relaxed max-w-xl mx-auto mb-10">
            {t.intro}
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
            {t.viewProjects}
          </a>
          <a
            href="#resume"
            className="px-6 py-3 border border-[var(--border)] rounded-lg text-sm font-medium hover:border-[var(--accent)] hover:text-[var(--accent)] transition-colors"
          >
            {t.resume}
          </a>
          <a
            href="#contact"
            className="px-6 py-3 border border-[var(--border)] rounded-lg text-sm font-medium hover:border-[var(--accent)] hover:text-[var(--accent)] transition-colors"
          >
            {t.contact}
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
