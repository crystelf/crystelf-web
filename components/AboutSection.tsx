import React from "react";
import { useLanguage } from "../contexts/LanguageContext";
import useInViewAnimation from "../hooks/useInViewAnimation";
import { getRevealDelay, revealViewport } from "../utils/animations";

function AboutSection() {
  const { t } = useLanguage();
  const [titleRef, titleVisible] =
    useInViewAnimation<HTMLHeadingElement>(revealViewport);
  const [descriptionRef, descriptionVisible] =
    useInViewAnimation<HTMLParagraphElement>(revealViewport);
  const [contactRef, contactVisible] =
    useInViewAnimation<HTMLDivElement>(revealViewport);

  return (
    <section
      id="about"
      className="relative overflow-hidden py-20 bg-slate-100 dark:bg-slate-950"
    >
      <div className="pointer-events-none absolute bottom-0 right-0 h-56 w-56 rounded-full bg-blue-200/20 blur-3xl dark:bg-blue-500/10" />
      <div className="container relative mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2
            ref={titleRef}
            data-in-view={titleVisible}
            className="soft-reveal text-3xl font-bold tracking-tight sm:text-4xl"
            style={getRevealDelay(40)}
          >
            {t.about.title}
          </h2>
          <p
            ref={descriptionRef}
            data-in-view={descriptionVisible}
            className="soft-reveal mt-6 text-lg leading-8 text-slate-600 dark:text-slate-400"
            style={getRevealDelay(140)}
          >
            {t.about.description}
          </p>
          <div
            ref={contactRef}
            data-in-view={contactVisible}
            className="soft-reveal surface-card mt-10 rounded-3xl bg-white/85 p-8 shadow-xl shadow-slate-200/60 dark:bg-slate-900/65 dark:shadow-slate-950/30"
            style={getRevealDelay(220)}
          >
            <h3 className="text-2xl font-semibold">{t.about.contactUs}</h3>
            <p className="mt-4 text-lg text-slate-600 dark:text-slate-400">
              {t.about.contactDescription}
            </p>
            <a
              href="https://github.com/crystelf"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex items-center justify-center rounded-md bg-blue-600 px-6 py-3 text-base font-medium text-white shadow-lg shadow-blue-600/20 transition duration-300 hover:-translate-y-1 hover:bg-blue-700 hover:shadow-xl hover:shadow-blue-600/25 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
            >
              {t.about.joinConversation}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutSection;
