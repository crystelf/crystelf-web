import { useLanguage } from "@/contexts/LanguageContext";
import { useReveal } from "@/hooks/useReveal";

function HeroSection() {
  const { t } = useLanguage();
  const titleReveal = useReveal<HTMLHeadingElement>();
  const subtitleReveal = useReveal<HTMLParagraphElement>(1);
  const actionsReveal = useReveal<HTMLDivElement>(2);

  return (
    <section className="relative py-24 md:py-32 lg:py-48 text-center overflow-hidden bg-white dark:bg-slate-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        <h1
          {...titleReveal}
          className="text-4xl font-extrabold tracking-tight text-slate-900 md:text-6xl dark:text-slate-100"
        >
          {t.hero.welcome}{" "}
          <span className="text-blue-600 dark:text-blue-400">
            {t.hero.welcome2}
          </span>
        </h1>
        <p
          {...subtitleReveal}
          className="mt-4 max-w-2xl mx-auto text-lg md:text-xl text-slate-600 dark:text-slate-300"
        >
          {t.hero.subtitle}
        </p>
        <div
          {...actionsReveal}
          className="mt-8 flex flex-col justify-center gap-4 sm:flex-row"
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
