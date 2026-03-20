"use client";

import { motion } from "framer-motion";
import { experiences } from "@/lib/data";
import { useLang } from "./LanguageProvider";

const text = {
  en: { label: "Experience", heading: "Leadership & Involvement" },
  ko: { label: "경험", heading: "리더십 & 활동" },
};

export default function Experience() {
  const { lang } = useLang();
  const t = text[lang];

  return (
    <section id="experience" className="py-24 px-6">
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

        <div className="relative">
          <div className="absolute left-0 md:left-8 top-0 bottom-0 w-px bg-[var(--border)]" />

          <div className="space-y-12">
            {experiences.map((exp, i) => (
              <motion.div
                key={exp.role.en}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="relative pl-8 md:pl-20"
              >
                <div className="absolute left-0 md:left-8 top-1.5 w-2.5 h-2.5 rounded-full bg-[var(--accent)] -translate-x-1" />

                <p className="text-xs text-[var(--accent)] font-medium mb-1 tracking-wide">
                  {exp.period}
                </p>
                <h4 className="text-lg font-semibold mb-1">{exp.role[lang]}</h4>
                <p className="text-sm text-[var(--muted)] mb-2">
                  {exp.organization[lang]}
                </p>
                <p className="text-sm text-[var(--muted)] leading-relaxed">
                  {exp.description[lang]}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
