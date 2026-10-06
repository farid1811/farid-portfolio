"use client";

import React, { createContext, useContext, useState, useEffect } from "react";

export type Language = "en" | "id";

interface LanguageContextType {
  lang: Language;
  setLang: (lang: Language) => void;
  toggleLang: () => void;
  t: (content: { en: string; id: string } | string | undefined) => string;
  tArr: (content: { en: string[]; id: string[] } | string[] | undefined) => string[];
}

const LanguageContext = createContext<LanguageContextType>({
  lang: "en",
  setLang: () => {},
  toggleLang: () => {},
  t: (content) => {
    if (!content) return "";
    if (typeof content === "string") return content;
    return content.en || "";
  },
  tArr: (content) => {
    if (!content) return [];
    if (Array.isArray(content)) return content;
    return content.en || [];
  },
});

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLangState] = useState<Language>("en");

  useEffect(() => {
    const saved = localStorage.getItem("farid_lang") as Language | null;
    if (saved === "en" || saved === "id") {
      setLangState(saved);
      document.documentElement.lang = saved;
    } else {
      document.documentElement.lang = "en";
    }
  }, []);

  const setLang = (newLang: Language) => {
    setLangState(newLang);
    localStorage.setItem("farid_lang", newLang);
    document.documentElement.lang = newLang;
  };

  const toggleLang = () => {
    const next = lang === "en" ? "id" : "en";
    setLang(next);
  };

  const t = (content: { en: string; id: string } | string | undefined): string => {
    if (!content) return "";
    if (typeof content === "string") return content;
    return content[lang] || content.en || "";
  };

  const tArr = (content: { en: string[]; id: string[] } | string[] | undefined): string[] => {
    if (!content) return [];
    if (Array.isArray(content)) return content;
    return content[lang] || content.en || [];
  };

  return (
    <LanguageContext.Provider value={{ lang, setLang, toggleLang, t, tArr }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  return useContext(LanguageContext);
}
