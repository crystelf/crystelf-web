
import React from 'react';
import { PROJECTS } from '../constants';
import { Project } from '../types';

const ProjectCard: React.FC<{ project: Project; index: number }> = ({ project, index }) => {
    return (
        <div 
            className="group flex flex-col p-6 bg-white dark:bg-slate-800 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 ease-in-out transform hover:-translate-y-2 animate-fade-in-up"
            style={{ animationDelay: `${index * 0.1}s` }}
        >
            <div className="flex-grow">
                <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                        <div className="flex-shrink-0 text-primary-500 dark:text-primary-400">
                            {project.icon}
                        </div>
                        <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
                            {project.title}
                        </h3>
                    </div>
                    <a href={project.link} target="_blank" rel="noopener noreferrer" className="text-slate-400 group-hover:text-primary-500 dark:group-hover:text-primary-400 transition-colors" aria-label={`View ${project.title} on GitHub`}>
                         <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor"><path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z" /><path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z" /></svg>
                    </a>
                </div>
                <p className="mt-4 text-slate-500 dark:text-slate-400">
                    {project.description}
                </p>
            </div>
            <div className="mt-4 pt-4 border-t border-slate-100 dark:border-slate-700/50">
                <div className="flex flex-wrap gap-2">
                    {project.tags.map(tag => (
                        <span key={tag} className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-primary-100 text-primary-800 dark:bg-primary-900/50 dark:text-primary-300">
                            {tag}
                        </span>
                    ))}
                </div>
            </div>
        </div>
    );
};

const ProjectShowcaseSection: React.FC = () => {
  return (
    <section id="projects" className="py-20 bg-white dark:bg-slate-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Project Showcase</h2>
          <p className="mt-4 text-lg text-slate-600 dark:text-slate-400">
            A selection of our open-source creations.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PROJECTS.map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectShowcaseSection;
