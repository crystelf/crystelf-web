import { useMemo } from "react";
import {
  CodeBracketIcon,
  BookOpenIcon,
  BotIcon,
  DriveIcon,
  MisskeyIcon,
  GiteaIcon,
  MinecraftIcon,
} from "@/components/icons";
import { Service } from "@/types";
import { useLanguage } from "@/contexts/LanguageContext";
import { useReveal } from "@/hooks/useReveal";

function ServiceCard({ service, index }: { service: Service; index: number }) {
  const reveal = useReveal<HTMLAnchorElement>(index);

  return (
    <a
      {...reveal}
      href={service.link}
      target="_blank"
      rel="noopener noreferrer"
      className={`group block rounded-2xl bg-white/95 p-6 shadow-lg shadow-slate-200/60 dark:bg-slate-800/95 dark:shadow-slate-950/30`}
    >
      <div className="relative flex items-center space-x-4">
        <div className="shrink-0 text-blue-500 transition duration-300 group-hover:scale-110 group-hover:rotate-3 dark:text-blue-400">
          {service.icon}
        </div>
        <div>
          <h3 className="text-lg font-semibold text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
            {service.title}
          </h3>
        </div>
      </div>
      <p className="relative mt-4 text-slate-500 dark:text-slate-400">
        {service.description}
      </p>
    </a>
  );
}

function ServicesSection() {
  const { t } = useLanguage();
  const headerReveal = useReveal<HTMLDivElement>();

  const services: Service[] = useMemo(
    () => [
      {
        icon: <CodeBracketIcon className="size-8" />,
        title: t.servicesData.core.title,
        description: t.servicesData.core.description,
        link: "https://github.com/crystelf/crystelf-core",
      },
      {
        icon: <BookOpenIcon className="size-8" />,
        title: t.servicesData.docs.title,
        description: t.servicesData.docs.description,
        link: "https://docs.crystelf.top",
      },
      {
        icon: <BotIcon className="size-8" />,
        title: t.servicesData.cloudRobot.title,
        description: t.servicesData.cloudRobot.description,
        link: "https://docs.crystelf.top/bot",
      },
      {
        icon: <DriveIcon className="size-8" />,
        title: t.servicesData.drive.title,
        description: t.servicesData.drive.description,
        link: "https://alist.crystelf.top",
      },
      {
        icon: <MisskeyIcon className="size-8" />,
        title: t.servicesData.lab.title,
        description: t.servicesData.lab.description,
        link: "https://lab.crystelf.top",
      },
      {
        icon: <GiteaIcon className="size-8" />,
        title: t.servicesData.gitea.title,
        description: t.servicesData.gitea.description,
        link: "https://git.crystelf.top",
      },
      {
        icon: <MinecraftIcon className="size-8" />,
        title: t.servicesData.mc.title,
        description: t.servicesData.mc.description,
        link: "https://mc.crystelf.top",
      },
    ],
    [
      t.servicesData.core.title,
      t.servicesData.core.description,
      t.servicesData.docs.title,
      t.servicesData.docs.description,
      t.servicesData.cloudRobot.title,
      t.servicesData.cloudRobot.description,
      t.servicesData.drive.title,
      t.servicesData.drive.description,
      t.servicesData.lab.title,
      t.servicesData.lab.description,
      t.servicesData.gitea.title,
      t.servicesData.gitea.description,
      t.servicesData.mc.title,
      t.servicesData.mc.description,
    ],
  );

  return (
    <section
      id="services"
      className="relative overflow-hidden py-20 bg-slate-100 dark:bg-slate-950"
    >
      <div className="container relative mx-auto px-4 sm:px-6 lg:px-8">
        <div
          {...headerReveal}
          className="mb-12 text-center"
        >
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
