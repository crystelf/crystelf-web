import React from "react";
import { CodeBracketIcon, CloudIcon, BookOpenIcon } from "../constants";
import { Service } from "../types";
import { useLanguage } from "../contexts/LanguageContext";

function ServiceCard({ service, index }: { service: Service; index: number }) {
  return (
    <a
      href={service.link}
      target="_blank"
      rel="noopener noreferrer"
      className="group block p-6 bg-white dark:bg-slate-800 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 ease-in-out transform hover:-translate-y-2 animate-fade-in-up"
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

  const services: Service[] = [
    {
      icon: <CodeBracketIcon />,
      title: t.servicesData.core.title,
      description: t.servicesData.core.description,
      link: "https://github.com/crystelf/crystelf-core",
    },
    {
      icon: <CloudIcon />,
      title: t.servicesData.cloudRobot.title,
      description: t.servicesData.cloudRobot.description,
      link: "https://github.com/crystelf",
    },
    {
      icon: <BookOpenIcon />,
      title: t.servicesData.docs.title,
      description: t.servicesData.docs.description,
      link: "https://github.com/crystelf/crystelf-docs",
    },
  ];

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
            <ServiceCard key={service.title} service={service} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default ServicesSection;
