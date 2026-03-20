"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useTheme } from "./ThemeProvider";
import { useLang } from "./LanguageProvider";

const linksData = {
  en: [
    { label: "About", href: "#about" },
    { label: "Projects", href: "#projects" },
    { label: "Experience", href: "#experience" },
    { label: "Skills", href: "#skills" },
    { label: "Resume", href: "#resume" },
    { label: "Contact", href: "#contact" },
  ],
  ko: [
    { label: "소개", href: "#about" },
    { label: "프로젝트", href: "#projects" },
    { label: "경험", href: "#experience" },
    { label: "스킬", href: "#skills" },
    { label: "이력서", href: "#resume" },
    { label: "연락처", href: "#contact" },
  ],
};

export default function Navigation() {
  const { theme, toggleTheme } = useTheme();
  const { lang, toggleLang } = useLang();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  const links = linksData[lang];

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const ThemeButton = () => (
    <button
      onClick={toggleTheme}
      aria-label="Toggle theme"
      className="flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-[var(--border)] hover:border-[var(--accent)] hover:bg-[var(--accent-light)] transition-all text-sm font-medium cursor-pointer"
    >
      {theme === "dark" ? (
        <>
          <span className="text-base leading-none">☀️</span>
          <span>Light</span>
        </>
      ) : (
        <>
          <span className="text-base leading-none">🌙</span>
          <span>Dark</span>
        </>
      )}
    </button>
  );

  const LangButton = () => (
    <button
      onClick={toggleLang}
      aria-label="Toggle language"
      className="flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-[var(--border)] hover:border-[var(--accent)] hover:bg-[var(--accent-light)] transition-all text-sm font-medium cursor-pointer"
    >
      {lang === "en" ? (
        <>
          <span className="text-base leading-none">🇰🇷</span>
          <span>한국어</span>
        </>
      ) : (
        <>
          <span className="text-base leading-none">🇺🇸</span>
          <span>English</span>
        </>
      )}
    </button>
  );

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[var(--background)]/80 backdrop-blur-lg border-b border-[var(--border)]"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <a
          href="#"
          className="text-lg font-semibold tracking-tight hover:text-[var(--accent)] transition-colors"
        >
          KL
        </a>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-[var(--muted)] hover:text-[var(--foreground)] transition-colors"
            >
              {link.label}
            </a>
          ))}
          <div className="flex items-center gap-2">
            <ThemeButton />
            <LangButton />
          </div>
        </div>

        {/* Mobile menu button */}
        <div className="flex items-center gap-2 md:hidden">
          <ThemeButton />
          <LangButton />
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
            className="w-9 h-9 flex items-center justify-center"
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
            >
              {mobileOpen ? (
                <path d="M18 6L6 18M6 6l12 12" />
              ) : (
                <path d="M3 12h18M3 6h18M3 18h18" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-[var(--background)] border-b border-[var(--border)]"
          >
            <div className="px-6 py-4 flex flex-col gap-4">
              {links.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="text-sm text-[var(--muted)] hover:text-[var(--foreground)] transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
