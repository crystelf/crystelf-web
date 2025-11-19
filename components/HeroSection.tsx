import React from "react";
import { useLanguage } from "../contexts/LanguageContext";
import useInViewAnimation from "../hooks/useInViewAnimation";

function HeroSection() {
  const { t } = useLanguage();
  const [headingRef, headingVisible] = useInViewAnimation<HTMLHeadingElement>();
  const [subtitleRef, subtitleVisible] =
    useInViewAnimation<HTMLParagraphElement>();
  const [ctaRef, ctaVisible] = useInViewAnimation<HTMLDivElement>();

  return (
    <section className="relative py-24 md:py-32 lg:py-48 text-center overflow-hidden bg-white dark:bg-slate-900">
      <div
        className="absolute inset-0 bg-gradient-radial from-blue-100/50 to-transparent dark:from-blue-900/30 dark:to-transparent"
        style={{ transform: "scale(1.5)" }}
      ></div>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        <h1
          ref={headingRef}
          className={`text-4xl md:text-6xl font-extrabold tracking-tight text-slate-900 dark:text-slate-100 ${
            headingVisible ? "animate-fade-in-up" : "before-fade-in-up"
          }`}
          style={{ animationDelay: "0.1s" }}
        >
          {t.hero.welcome}{" "}
          <span className="text-blue-600 dark:text-blue-400">crystelf</span>
        </h1>
        <p
          ref={subtitleRef}
          className={`mt-4 max-w-2xl mx-auto text-lg md:text-xl text-slate-600 dark:text-slate-300 ${
            subtitleVisible ? "animate-fade-in-up" : "before-fade-in-up"
          }`}
          style={{ animationDelay: "0.3s" }}
        >
          {t.hero.subtitle}
        </p>
        <div
          ref={ctaRef}
          className={`mt-8 flex justify-center gap-4 ${
            ctaVisible ? "animate-fade-in-up" : "before-fade-in-up"
          }`}
          style={{ animationDelay: "0.5s" }}
        >
          <a
            href="#services"
            className="inline-block rounded-md bg-blue-600 px-6 py-3 text-base font-medium text-white shadow-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-transform hover:-translate-y-1"
          >
            {t.hero.exploreServices}
          </a>
          <a
            href="https://github.com/crystelf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block rounded-md bg-slate-200 dark:bg-slate-800 px-6 py-3 text-base font-medium text-slate-700 dark:text-slate-200 shadow-lg hover:bg-slate-300 dark:hover:bg-slate-700 focus:outline-none focus:ring-2 focus:ring-slate-500 focus:ring-offset-2 transition-transform hover:-translate-y-1"
          >
            {t.hero.viewOnGitHub}
          </a>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
