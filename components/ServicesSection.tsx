import React, { useMemo } from "react";
import { motion } from "motion/react";
import {
  CodeBracketIcon,
  CloudIcon,
  BookOpenIcon,
  BotIcon,
  DriveIcon,
  MisskeyIcon,
  GiteaIcon,
  MinecraftIcon,
} from "../constants";
import { Service } from "../types";
import { useLanguage } from "../contexts/LanguageContext";
import {
  fadeInUpInitial,
  fadeInUpAnimate,
  fadeInTo,
  viewportOptions,
  cardHover,
  cardTap,
  getStaggerConfig,
  getFadeInitial,
} from "../utils/animations";

function ServiceCard({ service, index }: { service: Service; index: number }) {
  return (
    <motion.a
      href={service.link}
      target="_blank"
      rel="noopener noreferrer"
      className="group block p-6 bg-white dark:bg-slate-800 rounded-xl shadow-lg hover:shadow-2xl"
      initial={getFadeInitial(index % 3 === 0 ? "left" : index % 3 === 2 ? "right" : "up", 18)}
      whileInView={fadeInTo}
      viewport={viewportOptions}
      transition={getStaggerConfig(index * 0.1)}
      whileHover={cardHover}
      whileTap={cardTap}
    >
      <div className="flex items-center space-x-4">
        <motion.div
          className="flex-shrink-0 text-blue-500 dark:text-blue-400"
          whileHover={{ scale: 1.1, rotate: 5 }}
          transition={{ type: "spring", stiffness: 400, damping: 10 }}
        >
          {service.icon}
        </motion.div>
        <div>
          <h3 className="text-lg font-semibold text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
            {service.title}
          </h3>
        </div>
      </div>
      <p className="mt-4 text-slate-500 dark:text-slate-400">
        {service.description}
      </p>
    </motion.a>
  );
}

function ServicesSection() {
  const { t } = useLanguage();

  const services: Service[] = useMemo(
    () => [
      {
        icon: <CodeBracketIcon />,
        title: t.servicesData.core.title,
        description: t.servicesData.core.description,
        link: "https://github.com/crystelf/crystelf-core",
      },
      {
        icon: <BookOpenIcon />,
        title: t.servicesData.docs.title,
        description: t.servicesData.docs.description,
        link: "https://docs.crystelf.top",
      },
      {
        icon: <BotIcon />,
        title: t.servicesData.cloudRobot.title,
        description: t.servicesData.cloudRobot.description,
        link: "https://docs.crystelf.top/bot",
      },
      {
        icon: <DriveIcon />,
        title: t.servicesData.drive.title,
        description: t.servicesData.drive.description,
        link: "https://alist.crystelf.top",
      },
      {
        icon: <MisskeyIcon />,
        title: t.servicesData.lab.title,
        description: t.servicesData.lab.description,
        link: "https://lab.crystelf.top",
      },
      {
        icon: <GiteaIcon />,
        title: t.servicesData.gitea.title,
        description: t.servicesData.gitea.description,
        link: "https://git.crystelf.top",
      },
      {
        icon: <MinecraftIcon />,
        title: t.servicesData.mc.title,
        description: t.servicesData.mc.description,
        link: "https://mc.crystelf.top",
      },
    ],
    [t],
  );

  return (
    <section id="services" className="py-20 bg-slate-100 dark:bg-slate-950">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-12"
          initial={fadeInUpInitial}
          whileInView={fadeInUpAnimate}
          viewport={viewportOptions}
          transition={getStaggerConfig(0.1)}
        >
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            {t.services.title}
          </h2>
          <p className="mt-4 text-lg text-slate-600 dark:text-slate-400">
            {t.services.subtitle}
          </p>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard key={index} service={service} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default ServicesSection;
