import React, {
  createContext,
  useState,
  useEffect,
  useContext,
  ReactNode,
} from "react";
import { Locale, translations, Translations } from "@/locales";

interface LanguageContextType {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  t: Translations;
}

const LanguageContext = createContext<LanguageContextType | undefined>(
  undefined,
);

const LANGUAGE_STORAGE_KEY = "language";

function getInitialLocale(): Locale {
  if (typeof window === "undefined") {
    return "en-US";
  }
  const storedLocale = localStorage.getItem(
    LANGUAGE_STORAGE_KEY,
  ) as Locale | null;
  if (storedLocale && (storedLocale === "zh-CN" || storedLocale === "en-US")) {
    return storedLocale;
  }
  const browserLang = navigator.language || (navigator as any).userLanguage;
  if (browserLang.startsWith("zh")) {
    return "zh-CN";
  }
  return "en-US";
}

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [locale, setLocaleState] = useState<Locale>(() => getInitialLocale());

  useEffect(() => {
    localStorage.setItem(LANGUAGE_STORAGE_KEY, locale);
    document.documentElement.lang = locale;
  }, [locale]);

  const setLocale = (newLocale: Locale) => {
    setLocaleState(newLocale);
  };

  const t = translations[locale];

  return (
    <LanguageContext.Provider value={{ locale, setLocale, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export function useLanguage(): LanguageContextType {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}

