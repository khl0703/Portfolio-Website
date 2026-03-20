"use client";

import { useLang } from "./LanguageProvider";

const text = {
  en: {
    rights: "All rights reserved.",
    built: "Built with Next.js & Tailwind CSS",
  },
  ko: {
    rights: "All rights reserved.",
    built: "Next.js & Tailwind CSS로 제작",
  },
};

export default function Footer() {
  const { lang } = useLang();
  const t = text[lang];

  return (
    <footer className="py-8 px-6 border-t border-[var(--border)]">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-[var(--muted)]">
        <p>&copy; {new Date().getFullYear()} Kihun Lee. {t.rights}</p>
        <p>{t.built}</p>
      </div>
    </footer>
  );
}
