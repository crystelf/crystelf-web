import { useState, useEffect } from "react";
import { useTheme } from "@/contexts/ThemeContext";
import { useLanguage } from "@/contexts/LanguageContext";
import LanguageSelector from "@/components/layout/LanguageSelector";
import { CrystelfLogo, GitHubIcon, MoonIcon, SunIcon } from "@/components/icons";
import { getIntroDelay } from "@/utils/animations";

function Header() {
  const { theme, toggleTheme } = useTheme();
  const { t } = useLanguage();
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: t.nav.services, href: "#services" },
    { name: t.nav.projects, href: "#projects" },
    { name: t.nav.about, href: "#about" },
  ];

  return (
    <header className="sticky top-0 z-50">
      <div className="container relative mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className={`intro-item mt-3 flex h-16 items-center justify-between transition-all duration-300 ${
            isScrolled
              ? "rounded-2xl bg-white/72 px-4 shadow-lg shadow-slate-200/50 ring-1 ring-slate-900/5 backdrop-blur-xl dark:bg-slate-900/72 dark:shadow-slate-950/40 dark:ring-white/10"
              : "px-0"
          }`}
          style={getIntroDelay(0)}
        >
          <a
            href="#"
            className="group flex items-center space-x-2 text-2xl font-bold text-blue-600 dark:text-blue-400"
          >
            <div className="h-8 w-8 shrink-0 transition duration-500 group-hover:rotate-360">
              <CrystelfLogo className="size-8" />
            </div>
            <span>crystelf</span>
          </a>
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link, index) => (
              <a
                key={link.name}
                href={link.href}
                className="group intro-item relative text-sm font-medium text-slate-600 transition duration-200 hover:-translate-y-0.5 hover:text-blue-600 dark:text-slate-300 dark:hover:text-blue-400"
                style={getIntroDelay(220 + index * 70)}
              >
                {link.name}
                <span className="absolute -bottom-1 left-0 h-px w-full origin-left scale-x-0 bg-current opacity-70 transition-transform duration-300 group-hover:scale-x-100" />
              </a>
            ))}
          </nav>
          <div className="flex items-center space-x-3 sm:space-x-4">
            <LanguageSelector />
            <a
              href="https://github.com/crystelf"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full p-2 text-slate-500 transition duration-200 hover:-translate-y-0.5 hover:scale-110 hover:text-blue-600 dark:text-slate-400 dark:hover:text-blue-400"
            >
              <GitHubIcon className="size-6" />
            </a>
            <button
              onClick={toggleTheme}
              className="rounded-full p-2 text-slate-500 transition duration-200 hover:-translate-y-0.5 hover:scale-110 hover:rotate-12 hover:text-blue-600 dark:text-slate-400 dark:hover:text-blue-400"
            >
              {theme === "light" ? (
                <MoonIcon className="size-6" />
              ) : (
                <SunIcon className="size-6" />
              )}
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
