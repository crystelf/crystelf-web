import { cx } from "@/components/ui/cx";
import { useLanguage } from "@/contexts/LanguageContext";

const OPTIONS = [
  { locale: "zh-CN", lang: "zh-CN", name: "chinese", short: "chineseShort" },
  { locale: "en-US", lang: "en", name: "english", short: "englishShort" },
] as const;

export function LanguageSwitcher() {
  const { locale, setLocale, t } = useLanguage();

  return (
    <div
      role="group"
      aria-label={t.language.select}
      className="inline-flex shrink-0 rounded-xs border border-line-strong"
    >
      {OPTIONS.map((option, index) => {
        const isActive = option.locale === locale;
        return (
          <button
            key={option.locale}
            type="button"
            lang={option.lang}
            aria-label={t.language[option.name]}
            aria-pressed={isActive}
            onClick={() => setLocale(option.locale)}
            className={cx(
              "h-11 min-w-11 px-3 font-mono text-sm transition-colors",
              index > 0 && "border-l border-line-strong",
              isActive ? "bg-accent-soft text-accent" : "text-fg-muted hover:text-accent",
            )}
          >
            {t.language[option.short]}
          </button>
        );
      })}
    </div>
  );
}
