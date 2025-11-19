import React from "react";
import { useLanguage } from "../contexts/LanguageContext";

function AboutSection() {
  const { t } = useLanguage();

  return (
    <section id="about" className="py-20 bg-slate-100 dark:bg-slate-950">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            {t.about.title}
          </h2>
          <p className="mt-6 text-lg leading-8 text-slate-600 dark:text-slate-400">
            {t.about.description}
          </p>
          <div className="mt-10">
            <h3 className="text-2xl font-semibold">{t.about.contactUs}</h3>
            <p className="mt-4 text-lg text-slate-600 dark:text-slate-400">
              {t.about.contactDescription}
            </p>
            <a
              href="https://github.com/crystelf"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-block rounded-md bg-blue-600 px-6 py-3 text-base font-medium text-white shadow-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-transform hover:-translate-y-1"
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
