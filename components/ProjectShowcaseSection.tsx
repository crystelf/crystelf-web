import React, { useMemo } from "react";
import { AiIcon, CodeBracketIcon, PluginIcon } from "../constants";
import { Project } from "../types";
import { useLanguage } from "../contexts/LanguageContext";
import useInViewAnimation from "../hooks/useInViewAnimation";
import {
  getRevealDelay,
  getRevealDirection,
  getTagDelay,
  revealViewport,
} from "../utils/animations";

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const [cardRef, cardVisible] =
    useInViewAnimation<HTMLDivElement>(revealViewport);

  return (
    <div
      ref={cardRef}
      data-in-view={cardVisible}
      className={`soft-reveal ${getRevealDirection(index)} surface-card group flex flex-col rounded-2xl bg-white/95 p-6 shadow-lg shadow-slate-200/60 dark:bg-slate-800/95 dark:shadow-slate-950/30`}
      style={getRevealDelay(index * 90 + 120)}
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
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z" />
              <path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z" />
            </svg>
          </a>
        </div>
        <p className="relative mt-4 text-slate-500 dark:text-slate-400">
          {project.description}
        </p>
      </div>
      <div className="mt-4 pt-4 border-t border-slate-100 dark:border-slate-700/50">
        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag, tagIndex) => (
            <span
              key={tag}
              className={`inline-flex items-center rounded-full bg-blue-100 px-2.5 py-0.5 text-xs font-medium text-blue-800 transition duration-500 hover:-translate-y-0.5 hover:scale-105 dark:bg-blue-900/50 dark:text-blue-300 ${
                cardVisible
                  ? "translate-y-0 scale-100 opacity-100"
                  : "translate-y-1 scale-[0.98] opacity-80"
              }`}
              style={getTagDelay(tagIndex * 70 + 160)}
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
  const [headerRef, headerVisible] =
    useInViewAnimation<HTMLDivElement>(revealViewport);

  const projects: Project[] = useMemo(
    () => [
      {
        icon: <CodeBracketIcon />,
        title: t.projectsData.core.title,
        description: t.projectsData.core.description,
        link: "https://github.com/crystelf/crystelf-core",
        tags: ["TypeScript", "NestJS", "Express"],
      },
      {
        icon: <PluginIcon />,
        title: t.projectsData.plugin.title,
        description: t.projectsData.plugin.description,
        link: "https://github.com/jerryplusy/crystelf-plugin",
        tags: ["JavaScript", "Node.js", "TRSS-Yunzai"],
      },
      {
        icon: <AiIcon />,
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
      <div className="pointer-events-none absolute right-0 top-24 h-56 w-56 rounded-full bg-sky-200/25 blur-3xl dark:bg-sky-500/10" />
      <div className="container relative mx-auto px-4 sm:px-6 lg:px-8">
        <div
          ref={headerRef}
          data-in-view={headerVisible}
          className="soft-reveal mb-12 text-center"
          style={getRevealDelay(40)}
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
