import { useMemo } from "react";
import {
  AiIcon,
  CodeBracketIcon,
  ExternalLinkIcon,
  PluginIcon,
} from "@/components/icons";
import { Project } from "@/types";
import { useLanguage } from "@/contexts/LanguageContext";
import { useReveal } from "@/hooks/useReveal";

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const reveal = useReveal<HTMLDivElement>(index);

  return (
    <div
      {...reveal}
      className={`group flex flex-col rounded-2xl bg-white/95 p-6 shadow-lg shadow-slate-200/60 dark:bg-slate-800/95 dark:shadow-slate-950/30`}
    >
      <div className="grow">
        <div className="relative flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <div className="shrink-0 text-blue-500 transition duration-300 group-hover:scale-110 group-hover:rotate-3 dark:text-blue-400">
              {project.icon}
            </div>
            <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
              {project.title}
            </h3>
          </div>
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-400 transition duration-300 group-hover:rotate-6 group-hover:text-blue-500 dark:group-hover:text-blue-400"
            aria-label={`View ${project.title} on GitHub`}
          >
            <ExternalLinkIcon className="size-5" />
          </a>
        </div>
        <p className="relative mt-4 text-slate-500 dark:text-slate-400">
          {project.description}
        </p>
      </div>
      <div className="mt-4 pt-4 border-t border-slate-100 dark:border-slate-700/50">
        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="inline-flex items-center rounded-full bg-blue-100 px-2.5 py-0.5 text-xs font-medium text-blue-800 transition duration-500 hover:-translate-y-0.5 hover:scale-105 dark:bg-blue-900/50 dark:text-blue-300"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

function ProjectShowcaseSection() {
  const { t } = useLanguage();
  const headerReveal = useReveal<HTMLDivElement>();

  const projects: Project[] = useMemo(
    () => [
      {
        icon: <CodeBracketIcon className="size-8" />,
        title: t.projectsData.core.title,
        description: t.projectsData.core.description,
        link: "https://github.com/crystelf/crystelf-core",
        tags: ["TypeScript", "NestJS", "Express"],
      },
      {
        icon: <PluginIcon className="size-8" />,
        title: t.projectsData.plugin.title,
        description: t.projectsData.plugin.description,
        link: "https://github.com/jerryplusy/crystelf-plugin",
        tags: ["JavaScript", "Node.js", "TRSS-Yunzai"],
      },
      {
        icon: <AiIcon className="size-8" />,
        title: t.projectsData.ai.title,
        description: t.projectsData.ai.description,
        link: "https://github.com/jerryplusy/crystelf-plugin",
        tags: ["JavaScript", "Node.js", "Open-ai"],
      },
    ],
    [
      t.projectsData.core.title,
      t.projectsData.core.description,
      t.projectsData.plugin.title,
      t.projectsData.plugin.description,
      t.projectsData.ai.title,
      t.projectsData.ai.description,
    ],
  );

  return (
    <section
      id="projects"
      className="relative overflow-hidden py-20 bg-white dark:bg-slate-900"
    >
      <div className="container relative mx-auto px-4 sm:px-6 lg:px-8">
        <div
          {...headerReveal}
          className="mb-12 text-center"
        >
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            {t.projects.title}
          </h2>
          <p className="mt-4 text-lg text-slate-600 dark:text-slate-400">
            {t.projects.subtitle}
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default ProjectShowcaseSection;
