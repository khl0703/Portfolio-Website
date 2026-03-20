"use client";

import { motion } from "framer-motion";
import { useLang } from "./LanguageProvider";

const text = {
  en: {
    label: "Contact",
    heading: "Let's Connect",
    desc: "I'm always open to new opportunities, conversations, and collaborations. Feel free to reach out.",
  },
  ko: {
    label: "연락처",
    heading: "연락하기",
    desc: "새로운 기회, 대화, 협업에 항상 열려 있습니다. 편하게 연락해 주세요.",
  },
};

const socials = [
  {
    label: "Email",
    href: "mailto:kihun.lee@mail.utoronto.ca",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
    ),
    text: "kihun.lee@mail.utoronto.ca",
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/kihun-lee-386241325",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
    ),
    text: "linkedin.com/in/kihun-lee-386241325",
  },
  {
    label: "GitHub",
    href: "https://github.com/kihunlee",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>
    ),
    text: "github.com/kihunlee",
  },
];

export default function Contact() {
  const { lang } = useLang();
  const t = text[lang];

  return (
    <section id="contact" className="py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-sm tracking-widest uppercase text-[var(--accent)] mb-3 font-medium">
            {t.label}
          </h2>
          <h3 className="text-3xl sm:text-4xl font-bold mb-4">{t.heading}</h3>
          <p className="text-[var(--muted)] max-w-lg mx-auto">{t.desc}</p>
        </motion.div>

        <div className="grid sm:grid-cols-3 gap-6">
          {socials.map((social, i) => (
            <motion.a
              key={social.label}
              href={social.href}
              target={social.label !== "Email" ? "_blank" : undefined}
              rel={social.label !== "Email" ? "noopener noreferrer" : undefined}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="group bg-[var(--card)] border border-[var(--card-border)] rounded-xl p-6 text-center hover:border-[var(--accent)] transition-all duration-300 hover:shadow-lg"
            >
              <div className="w-12 h-12 rounded-full bg-[var(--accent-light)] flex items-center justify-center mx-auto mb-4 text-[var(--accent)] group-hover:scale-110 transition-transform">
                {social.icon}
              </div>
              <h4 className="font-semibold mb-1">{social.label}</h4>
              <p className="text-sm text-[var(--muted)] break-all">
                {social.text}
              </p>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
