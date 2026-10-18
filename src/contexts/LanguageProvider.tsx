import {
  useCallback,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import {
  LANGUAGE_STORAGE_KEY,
  LanguageContext,
} from "@/contexts/LanguageContext";
import { translations, type Locale } from "@/locales";

function isLocale(value: string | null): value is Locale {
  return value !== null && Object.hasOwn(translations, value);
}

function readStoredLocale(): Locale | null {
  try {
    const value = localStorage.getItem(LANGUAGE_STORAGE_KEY);
    return isLocale(value) ? value : null;
  } catch {
    return null;
  }
}

function writeStoredLocale(locale: Locale): boolean {
  try {
    localStorage.setItem(LANGUAGE_STORAGE_KEY, locale);
    return true;
  } catch {
    return false;
  }
}

function getInitialLocale(): Locale {
  const stored = readStoredLocale();
  if (stored) {
    return stored;
  }
  return navigator.language.toLowerCase().startsWith("zh") ? "zh-CN" : "en-US";
}

function setMetaContent(selector: string, content: string) {
  document.head.querySelector(selector)?.setAttribute("content", content);
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>(getInitialLocale);
  const t = translations[locale];

  useEffect(() => {
    document.documentElement.lang = locale;
    document.title = t.meta.title;
    setMetaContent('meta[name="description"]', t.meta.description);
    setMetaContent('meta[property="og:title"]', t.meta.ogTitle);
    setMetaContent('meta[property="og:description"]', t.meta.ogDescription);
    setMetaContent('meta[property="og:locale"]', locale.replace("-", "_"));
  }, [locale, t]);

  const setLocale = useCallback((next: Locale) => {
    setLocaleState(next);
    writeStoredLocale(next);
  }, []);

  const value = useMemo(() => ({ locale, setLocale, t }), [locale, setLocale, t]);

  return (
    <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>
  );
}
