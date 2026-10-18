import { MoonIcon, SunIcon } from "@/components/icons";
import { IconButton } from "@/components/ui/IconButton";
import { useLanguage } from "@/contexts/LanguageContext";
import { useTheme } from "@/contexts/ThemeContext";

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();
  const { t } = useLanguage();
  const isDark = theme === "dark";

  return (
    <IconButton label={t.theme.dark} aria-pressed={isDark} onClick={toggleTheme}>
      {isDark ? <SunIcon className="size-5" /> : <MoonIcon className="size-5" />}
    </IconButton>
  );
}
