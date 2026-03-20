"use client";

import { motion } from "framer-motion";
import { useLang } from "./LanguageProvider";

const text = {
  en: {
    label: "Resume",
    heading: "My Resume",
    education: "Education",
    degree: "Bachelor of Business Administration",
    school: "University of Toronto Scarborough",
    specialization: "Specialization in Management — Accounting & Finance",
    graduation: "Expected Graduation: 2027",
    highlights: "Highlights",
    h1: "Finance case competition participant",
    h2: "Marketing Chief Director — UTKSA",
    h3: "Self-directed projects in financial modeling & data analysis",
    h4: "Proficient in Excel, Python, Canva, and PowerPoint",
    download: "Download Resume",
    getInTouch: "Get in Touch",
  },
  ko: {
    label: "이력서",
    heading: "이력서",
    education: "학력",
    degree: "경영학 학사 (BBA)",
    school: "토론토 대학교 스카보로 캠퍼스",
    specialization: "전공: 경영학 — 회계 & 금융",
    graduation: "졸업 예정: 2027",
    highlights: "주요 활동",
    h1: "금융 케이스 경진대회 참가",
    h2: "마케팅 총괄 디렉터 — UTKSA",
    h3: "재무 모델링 & 데이터 분석 자기주도 프로젝트",
    h4: "Excel, Python, Canva, PowerPoint 능숙",
    download: "이력서 다운로드",
    getInTouch: "연락하기",
  },
};

export default function Resume() {
  const { lang } = useLang();
  const t = text[lang];

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
            {t.label}
          </h2>
          <h3 className="text-3xl sm:text-4xl font-bold mb-12">{t.heading}</h3>
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
              <h4 className="font-semibold mb-4 text-lg">{t.education}</h4>
              <div className="space-y-1">
                <p className="font-medium">{t.degree}</p>
                <p className="text-sm text-[var(--muted)]">{t.school}</p>
                <p className="text-sm text-[var(--muted)]">{t.specialization}</p>
                <p className="text-xs text-[var(--accent)]">{t.graduation}</p>
              </div>
            </div>

            <div>
              <h4 className="font-semibold mb-4 text-lg">{t.highlights}</h4>
              <ul className="space-y-2 text-sm text-[var(--muted)]">
                {[t.h1, t.h2, t.h3, t.h4].map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent)] mt-1.5 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="flex flex-wrap gap-4">
            <a
              href="#"
              className="inline-flex items-center gap-2 px-6 py-3 bg-[var(--accent)] text-white rounded-lg text-sm font-medium hover:opacity-90 transition-opacity"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>
              {t.download}
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-6 py-3 border border-[var(--border)] rounded-lg text-sm font-medium hover:border-[var(--accent)] hover:text-[var(--accent)] transition-colors"
            >
              {t.getInTouch}
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
