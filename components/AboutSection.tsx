import React from "react";
import { motion } from "motion/react";
import { useLanguage } from "../contexts/LanguageContext";
import {
  fadeInUpInitial,
  fadeInUpAnimate,
  viewportOptions,
  getStaggerConfig,
  buttonHover,
  buttonTap,
} from "../utils/animations";

function AboutSection() {
  const { t } = useLanguage();

  return (
    <section id="about" className="py-20 bg-slate-100 dark:bg-slate-950">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2
            className="text-3xl font-bold tracking-tight sm:text-4xl"
            initial={fadeInUpInitial}
            whileInView={fadeInUpAnimate}
            viewport={viewportOptions}
            transition={getStaggerConfig(0.1)}
          >
            {t.about.title}
          </motion.h2>
          <motion.p
            className="mt-6 text-lg leading-8 text-slate-600 dark:text-slate-400"
            initial={fadeInUpInitial}
            whileInView={fadeInUpAnimate}
            viewport={viewportOptions}
            transition={getStaggerConfig(0.2)}
          >
            {t.about.description}
          </motion.p>
          <motion.div
            className="mt-10"
            initial={fadeInUpInitial}
            whileInView={fadeInUpAnimate}
            viewport={viewportOptions}
            transition={getStaggerConfig(0.3)}
          >
            <h3 className="text-2xl font-semibold">{t.about.contactUs}</h3>
            <p className="mt-4 text-lg text-slate-600 dark:text-slate-400">
              {t.about.contactDescription}
            </p>
            <motion.a
              href="https://github.com/crystelf"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-block rounded-md bg-blue-600 px-6 py-3 text-base font-medium text-white shadow-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
              whileHover={buttonHover}
              whileTap={buttonTap}
            >
              {t.about.joinConversation}
            </motion.a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default AboutSection;
