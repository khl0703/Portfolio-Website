"use client";

import { motion } from "framer-motion";
import { useLang } from "./LanguageProvider";

const text = {
  en: {
    label: "About",
    heading: "A bit about me",
    p1: "I'm a BBA student at the University of Toronto Scarborough, specializing in Management with a focus on accounting and finance. I'm drawn to the clarity of numbers and the structure of financial systems.",
    p2: "Beyond the classroom, I enjoy building things — financial models, marketing campaigns, analytical dashboards, and personal systems that help me think and work better.",
    p3: "I believe the best work happens at intersections — business and creativity, analysis and design, strategy and execution. That mindset drives how I approach everything from case competitions to club leadership.",
    p4: "I'm currently seeking internship opportunities in investment banking, accounting, finance, and business advisory where I can apply my analytical skills and grow professionally.",
  },
  ko: {
    label: "소개",
    heading: "저에 대해",
    p1: "토론토 대학교 스카보로 캠퍼스에서 회계 및 금융에 중점을 둔 경영학(BBA)을 전공하고 있습니다. 숫자의 명확함과 금융 시스템의 구조에 매력을 느낍니다.",
    p2: "수업 밖에서도 무언가를 만드는 것을 좋아합니다 — 재무 모델, 마케팅 캠페인, 분석 대시보드, 그리고 더 나은 사고와 업무를 위한 개인 시스템을 구축합니다.",
    p3: "최고의 성과는 교차점에서 나온다고 믿습니다 — 비즈니스와 창의성, 분석과 디자인, 전략과 실행. 이러한 사고방식은 케이스 경진대회부터 동아리 리더십까지 모든 것에 대한 접근 방식을 이끕니다.",
    p4: "현재 투자은행, 회계, 금융, 비즈니스 자문 분야에서 분석 역량을 적용하고 전문적으로 성장할 수 있는 인턴십 기회를 찾고 있습니다.",
  },
};

export default function About() {
  const { lang } = useLang();
  const t = text[lang];

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
            {t.label}
          </h2>
          <h3 className="text-3xl sm:text-4xl font-bold mb-8">{t.heading}</h3>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="space-y-4 text-[var(--muted)] leading-relaxed"
          >
            <p>{t.p1}</p>
            <p>{t.p2}</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="space-y-4 text-[var(--muted)] leading-relaxed"
          >
            <p>{t.p3}</p>
            <p>{t.p4}</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
