import { useLanguage } from "@/contexts/LanguageContext";
import { useReveal } from "@/hooks/useReveal";

function AboutSection() {
  const { t } = useLanguage();
  const titleReveal = useReveal<HTMLHeadingElement>();
  const descriptionReveal = useReveal<HTMLParagraphElement>(1);
  const contactReveal = useReveal<HTMLDivElement>(2);

  return (
    <section
      id="about"
      className="relative overflow-hidden py-20 bg-slate-100 dark:bg-slate-950"
    >
      <div className="container relative mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2
            {...titleReveal}
            className="text-3xl font-bold tracking-tight sm:text-4xl"
          >
            {t.about.title}
          </h2>
          <p
            {...descriptionReveal}
            className="mt-6 text-lg leading-8 text-slate-600 dark:text-slate-400"
          >
            {t.about.description}
          </p>
          <div
            {...contactReveal}
            className="mt-10 rounded-3xl bg-white/85 p-8 shadow-xl shadow-slate-200/60 dark:bg-slate-900/65 dark:shadow-slate-950/30"
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
