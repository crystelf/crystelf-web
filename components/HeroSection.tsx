import React from "react";
import { motion } from "motion/react";
import { useLanguage } from "../contexts/LanguageContext";
import {
  fadeInUpInitial,
  fadeInUpAnimate,
  viewportOptions,
  buttonHover,
  buttonTap,
  getStaggerConfig,
  springConfig,
} from "../utils/animations";

function HeroSection() {
  const { t } = useLanguage();

  return (
    <section className="relative py-24 md:py-32 lg:py-48 text-center overflow-hidden bg-white dark:bg-slate-900">
      <motion.div
        className="absolute inset-0 bg-gradient-radial from-blue-100/50 to-transparent dark:from-blue-900/30 dark:to-transparent"
        style={{ transform: "scale(1.5)" }}
        animate={{ opacity: [0.4, 0.7, 0.4] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
      />
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.h1
          className="text-4xl md:text-6xl font-extrabold tracking-tight text-slate-900 dark:text-slate-100"
          initial={fadeInUpInitial}
          whileInView={fadeInUpAnimate}
          viewport={viewportOptions}
          transition={getStaggerConfig(0)}
        >
          {t.hero.welcome}{" "}
          <span className="text-blue-600 dark:text-blue-400">
            {t.hero.welcome2}
          </span>
        </motion.h1>
        <motion.p
          className="mt-4 max-w-2xl mx-auto text-lg md:text-xl text-slate-600 dark:text-slate-300"
          initial={fadeInUpInitial}
          whileInView={fadeInUpAnimate}
          viewport={viewportOptions}
          transition={getStaggerConfig(0.1)}
        >
          {t.hero.subtitle}
        </motion.p>
        <motion.div
          className="mt-8 flex justify-center gap-4"
          initial={fadeInUpInitial}
          whileInView={fadeInUpAnimate}
          viewport={viewportOptions}
          transition={getStaggerConfig(0.2)}
        >
          <motion.a
            href="#services"
            className="inline-block rounded-md bg-blue-600 px-6 py-3 text-base font-medium text-white shadow-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
            whileHover={buttonHover}
            whileTap={buttonTap}
          >
            {t.hero.exploreServices}
          </motion.a>
          <motion.a
            href="https://github.com/crystelf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block rounded-md bg-slate-200 dark:bg-slate-800 px-6 py-3 text-base font-medium text-slate-700 dark:text-slate-200 shadow-lg hover:bg-slate-300 dark:hover:bg-slate-700 focus:outline-none focus:ring-2 focus:ring-slate-500 focus:ring-offset-2"
            whileHover={buttonHover}
            whileTap={buttonTap}
          >
            {t.hero.viewOnGitHub}
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}

export default HeroSection;
