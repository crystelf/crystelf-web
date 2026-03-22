import React from "react";
import { useLanguage } from "../contexts/LanguageContext";
import { getIntroDelay } from "../utils/animations";

function HeroSection() {
  const { t } = useLanguage();

  return (
    <section className="relative py-24 md:py-32 lg:py-48 text-center overflow-hidden bg-white dark:bg-slate-900">
      <div className="pointer-events-none absolute inset-0 bg-gradient-radial from-blue-100/60 via-blue-50/25 to-transparent dark:from-blue-900/35 dark:via-slate-900 dark:to-transparent hero-glow" />
      <div className="pointer-events-none absolute left-1/2 top-8 h-64 w-64 -translate-x-1/2 rounded-full bg-blue-300/20 blur-3xl hero-glow-delay dark:bg-blue-500/10" />
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        <h1
          className="intro-item text-4xl font-extrabold tracking-tight text-slate-900 md:text-6xl dark:text-slate-100"
          style={getIntroDelay(40)}
        >
          {t.hero.welcome}{" "}
          <span className="text-blue-600 dark:text-blue-400">
            {t.hero.welcome2}
          </span>
        </h1>
        <p
          className="mt-4 max-w-2xl mx-auto text-lg md:text-xl text-slate-600 dark:text-slate-300"
          style={getIntroDelay(160)}
        >
          {t.hero.subtitle}
        </p>
        <div
          className="intro-item mt-8 flex flex-col justify-center gap-4 sm:flex-row"
          style={getIntroDelay(280)}
        >
          <a
            href="#services"
            className="inline-flex items-center justify-center rounded-md bg-blue-600 px-6 py-3 text-base font-medium text-white shadow-lg shadow-blue-600/20 transition duration-300 hover:-translate-y-1 hover:bg-blue-700 hover:shadow-xl hover:shadow-blue-600/25 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
          >
            {t.hero.exploreServices}
          </a>
          <a
            href="https://github.com/crystelf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded-md bg-slate-200 px-6 py-3 text-base font-medium text-slate-700 shadow-lg shadow-slate-300/40 transition duration-300 hover:-translate-y-1 hover:bg-slate-300 hover:shadow-xl dark:bg-slate-800 dark:text-slate-200 dark:shadow-slate-950/30 dark:hover:bg-slate-700 focus:outline-none focus:ring-2 focus:ring-slate-500 focus:ring-offset-2"
          >
            {t.hero.viewOnGitHub}
          </a>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
