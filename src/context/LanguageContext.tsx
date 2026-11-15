"use client";

import React, { createContext, useContext, useEffect, useState, useTransition } from "react";
import { Locale, TRANSLATIONS } from "@/config/translations";

interface LanguageContextType {
  locale: Locale;
  direction: "rtl" | "ltr";
  setLocale: (locale: Locale) => void;
  toggleLocale: () => void;
  t: (typeof TRANSLATIONS)["ar"];
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const STORAGE_KEY = "abdulsamad_lang_pref";

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  // Default to Arabic as requested: "bilingual (Arabic RTL default + English)"
  const [locale, setLocaleState] = useState<Locale>("ar");
  const [, startTransition] = useTransition();

  useEffect(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY) as Locale | null;
      if (saved === "ar" || saved === "en") {
        setLocaleState(saved);
        document.documentElement.dir = saved === "ar" ? "rtl" : "ltr";
        document.documentElement.lang = saved;
      } else {
        document.documentElement.dir = "rtl";
        document.documentElement.lang = "ar";
      }
    } catch {
      document.documentElement.dir = "rtl";
      document.documentElement.lang = "ar";
    }
  }, []);

  const setLocale = (newLocale: Locale) => {
    startTransition(() => {
      setLocaleState(newLocale);
      try {
        localStorage.setItem(STORAGE_KEY, newLocale);
      } catch {
        // ignore localStorage error
      }
      document.documentElement.dir = newLocale === "ar" ? "rtl" : "ltr";
      document.documentElement.lang = newLocale;
    });
  };

  const toggleLocale = () => {
    setLocale(locale === "ar" ? "en" : "ar");
  };

  const direction = locale === "ar" ? "rtl" : "ltr";
  const t = TRANSLATIONS[locale];

  return (
    <LanguageContext.Provider
      value={{
        locale,
        direction,
        setLocale,
        toggleLocale,
        t,
      }}
    >
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}
