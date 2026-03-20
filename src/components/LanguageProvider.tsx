"use client";

import { createContext, useContext, useEffect, useState } from "react";

export type Lang = "en" | "ko";

const LanguageContext = createContext<{
  lang: Lang;
  toggleLang: () => void;
}>({
  lang: "en",
  toggleLang: () => {},
});

export function useLang() {
  return useContext(LanguageContext);
}

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLang] = useState<Lang>("en");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const stored = localStorage.getItem("lang") as Lang | null;
    if (stored === "en" || stored === "ko") {
      setLang(stored);
    }
  }, []);

  const toggleLang = () => {
    const next: Lang = lang === "en" ? "ko" : "en";
    setLang(next);
    localStorage.setItem("lang", next);
  };

  if (!mounted) {
    return <>{children}</>;
  }

  return (
    <LanguageContext.Provider value={{ lang, toggleLang }}>
      {children}
    </LanguageContext.Provider>
  );
}
