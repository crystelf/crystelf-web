import React, { useMemo } from "react";
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
import useInViewAnimation from "../hooks/useInViewAnimation";

function ServiceCard({ service, index }: { service: Service; index: number }) {
  const [cardRef, cardVisible] = useInViewAnimation<HTMLAnchorElement>();

  return (
    <a
      ref={cardRef}
      href={service.link}
      target="_blank"
      rel="noopener noreferrer"
      className={`group block p-6 bg-white dark:bg-slate-800 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 ease-in-out transform hover:-translate-y-2 ${
        cardVisible ? "animate-fade-in-up" : "before-fade-in-up"
      }`}
      style={{ animationDelay: `${index * 0.1}s` }}
    >
      <div className="flex items-center space-x-4">
        <div className="flex-shrink-0 text-blue-500 dark:text-blue-400">
          {service.icon}
        </div>
        <div>
          <h3 className="text-lg font-semibold text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
            {service.title}
          </h3>
        </div>
      </div>
      <p className="mt-4 text-slate-500 dark:text-slate-400">
        {service.description}
      </p>
    </a>
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
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            {t.services.title}
          </h2>
          <p className="mt-4 text-lg text-slate-600 dark:text-slate-400">
            {t.services.subtitle}
          </p>
        </div>
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
