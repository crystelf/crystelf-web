import React, { useState, useRef, useEffect } from "react";
import { useLanguage } from "../contexts/LanguageContext";
import { Locale } from "@/locales";

function GlobeIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1.5em"
      height="1.5em"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="10" />
      <line x1="2" y1="12" x2="22" y2="12" />
      <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
    </svg>
  );
}

function ChevronDownIcon({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <polyline points="6 9 12 15 18 9" />
    </svg>
  );
}

function CheckIcon({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <polyline points="20 6 9 17 4 12" />
    </svg>
  );
}

const languages: { code: Locale; name: string; nativeName: string }[] = [
  { code: "zh-CN", name: "Chinese", nativeName: "简体中文" },
  { code: "en-US", name: "English", nativeName: "English" },
];

function LanguageSelector() {
  const { locale, setLocale, t } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const currentLanguage = languages.find((lang) => lang.code === locale) ?? languages[0];

  // 点击外部关闭下拉菜单
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node) &&
        buttonRef.current &&
        !buttonRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    }

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
      return () => {
        document.removeEventListener("mousedown", handleClickOutside);
      };
    }
  }, [isOpen]);

  // ESC 键关闭下拉菜单
  useEffect(() => {
    function handleEscape(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setIsOpen(false);
      }
    }

    if (isOpen) {
      document.addEventListener("keydown", handleEscape);
      return () => {
        document.removeEventListener("keydown", handleEscape);
      };
    }
  }, [isOpen]);
  //const currentLanguage = languages.find((lang) => lang.code === locale);
  const handleLanguageChange = (newLocale: Locale) => {
    setLocale(newLocale);
    setIsOpen(false);
  };

  return (
    <div className="relative">
      <button
        ref={buttonRef}
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 rounded-xl px-3 py-2 text-slate-500 transition-[transform,color,background-color,box-shadow] duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] hover:scale-[1.04] hover:bg-white/70 hover:text-blue-600 hover:shadow-sm dark:text-slate-400 dark:hover:bg-slate-800/70 dark:hover:text-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-white dark:focus:ring-offset-slate-900 active:scale-[0.98]"
        aria-label={t.language.select}
        aria-expanded={isOpen}
        aria-haspopup="true"
      >
        <GlobeIcon />
        <span className="hidden text-sm font-medium sm:inline">
          {currentLanguage.nativeName}
        </span>
        <div
          className={`transition duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] ${
            isOpen ? "rotate-180" : ""
          }`}
        >
          <ChevronDownIcon />
        </div>
      </button>

      {isOpen && (
        <div
          ref={dropdownRef}
          className="dropdown-panel absolute right-0 z-50 mt-2 w-52 origin-top-right rounded-2xl border border-slate-200/80 bg-white/95 p-1.5 shadow-xl shadow-slate-200/60 backdrop-blur-xl dark:border-slate-700/80 dark:bg-slate-800/95 dark:shadow-slate-950/40 sm:w-60"
          role="menu"
          aria-orientation="vertical"
        >
          {languages.map((language, index) => (
            <button
              key={language.code}
              onClick={() => handleLanguageChange(language.code)}
              className={`dropdown-item flex w-full items-center justify-between rounded-xl px-4 py-3 text-sm transition-[transform,color,background-color,box-shadow] duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] hover:scale-[1.01] active:scale-[0.99] ${
                locale === language.code
                  ? "bg-blue-50/90 font-medium text-blue-600 shadow-sm shadow-blue-100/80 dark:bg-blue-900/25 dark:text-blue-400 dark:shadow-blue-950/20"
                  : "text-slate-700 hover:bg-slate-100/90 dark:text-slate-300 dark:hover:bg-slate-700/80"
              }`}
              role="menuitem"
              style={
                {
                  "--enter-delay": `${index * 45}ms`,
                } as React.CSSProperties
              }
            >
              <div className="flex flex-col items-start">
                <span className="font-medium">{language.nativeName}</span>
                <span className="text-xs text-slate-500 dark:text-slate-400">
                  {language.name}
                </span>
              </div>
              <span
                className={`transition duration-200 ${
                  locale === language.code
                    ? "scale-100 opacity-100"
                    : "scale-0 opacity-0"
                }`}
              >
                <CheckIcon className="text-blue-600 dark:text-blue-400" />
              </span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

export default LanguageSelector;
