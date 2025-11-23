import React, { useMemo } from "react";
import { motion } from "motion/react";
import { AiIcon, CodeBracketIcon, FolderIcon, PluginIcon } from "../constants";
import { Project } from "../types";
import { useLanguage } from "../contexts/LanguageContext";
import {
  fadeInUpInitial,
  fadeInUpAnimate,
  fadeInTo,
  viewportOptions,
  cardHover,
  cardTap,
  getStaggerConfig,
  springConfig,
  getFadeInitial,
} from "../utils/animations";

function ProjectCard({ project, index }: { project: Project; index: number }) {
  return (
    <motion.div
      className="group flex flex-col p-6 bg-white dark:bg-slate-800 rounded-xl shadow-lg hover:shadow-2xl"
      initial={getFadeInitial(index % 3 === 0 ? "left" : index % 3 === 2 ? "right" : "up", 18)}
      whileInView={fadeInTo}
      viewport={viewportOptions}
      transition={getStaggerConfig(index * 0.1)}
      whileHover={cardHover}
      whileTap={cardTap}
    >
      <div className="flex-grow">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <motion.div
              className="flex-shrink-0 text-blue-500 dark:text-blue-400"
              whileHover={{ scale: 1.1, rotate: 5 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              {project.icon}
            </motion.div>
            <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
              {project.title}
            </h3>
          </div>
          <motion.a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-400 group-hover:text-blue-500 dark:group-hover:text-blue-400 transition-colors"
            aria-label={`View ${project.title} on GitHub`}
            whileHover={{ scale: 1.2, rotate: 15 }}
            whileTap={{ scale: 0.9 }}
            transition={springConfig.snappy}
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
          </motion.a>
        </div>
        <p className="mt-4 text-slate-500 dark:text-slate-400">
          {project.description}
        </p>
      </div>
      <div className="mt-4 pt-4 border-t border-slate-100 dark:border-slate-700/50">
        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag, tagIndex) => (
            <motion.span
              key={tag}
              className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800 dark:bg-blue-900/50 dark:text-blue-300"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={viewportOptions}
              transition={getStaggerConfig(tagIndex * 0.05)}
              whileHover={{ scale: 1.1 }}
            >
              {tag}
            </motion.span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

function ProjectShowcaseSection() {
  const { t } = useLanguage();

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
    [t],
  );

  return (
    <section id="projects" className="py-20 bg-white dark:bg-slate-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-12"
          initial={fadeInUpInitial}
          whileInView={fadeInUpAnimate}
          viewport={viewportOptions}
          transition={getStaggerConfig(0.1)}
        >
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            {t.projects.title}
          </h2>
          <p className="mt-4 text-lg text-slate-600 dark:text-slate-400">
            {t.projects.subtitle}
          </p>
        </motion.div>
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
