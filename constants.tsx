import React from "react";
import { Service, NavLink, Project } from "./types";

// SVG Icons as Components
export const CodeBracketIcon: React.FC<{ className?: string }> = ({
  className = "h-8 w-8",
}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
    className={className}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M14.25 9.75 16.5 12l-2.25 2.25m-4.5 0L7.5 12l2.25-2.25M6 20.25h12A2.25 2.25 0 0 0 20.25 18V6A2.25 2.25 0 0 0 18 3.75H6A2.25 2.25 0 0 0 3.75 6v12A2.25 2.25 0 0 0 6 20.25Z"
    />
  </svg>
);

export const CloudIcon: React.FC<{ className?: string }> = ({
  className = "h-8 w-8",
}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
    className={className}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M2.25 15a4.5 4.5 0 0 0 4.5 4.5H18a3.75 3.75 0 0 0 1.332-7.257 3 3 0 0 0-5.43-2.242 4.5 4.5 0 0 0-8.23 3.482Z"
    />
  </svg>
);

export const BookOpenIcon: React.FC<{ className?: string }> = ({
  className = "h-8 w-8",
}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
    className={className}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M12 6.042A8.967 8.967 0 0 0 6 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 0 1 6 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 0 1 6-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0 0 18 18a8.967 8.967 0 0 0-6 2.292m0-14.25v14.25"
    />
  </svg>
);

export const FolderIcon: React.FC<{ className?: string }> = ({
  className = "h-8 w-8",
}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
    className={className}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M3.75 9.75h16.5m-16.5 0A2.25 2.25 0 0 1 5.25 7.5h13.5a2.25 2.25 0 0 1 2.25 2.25m-16.5 0v6.75a2.25 2.25 0 0 0 2.25 2.25h12a2.25 2.25 0 0 0 2.25-2.25v-6.75m-16.5 0H3.75m16.5 0h.008v.008h-.008v-.008Z"
    />
  </svg>
);

// Data
export const SERVICES: Service[] = [
  {
    icon: <CodeBracketIcon />,
    title: "Crystelf Core",
    description:
      "The core framework of our ecosystem, providing fundamental functionalities and tools for developers.",
    link: "https://github.com/crystelf/crystelf-core",
  },
  {
    icon: <CloudIcon />,
    title: "Public Cloud Robot",
    description:
      "A non-profit cloud-based robot service offering various automated functionalities for communities.",
    link: "https://github.com/crystelf",
  },
  {
    icon: <BookOpenIcon />,
    title: "Crystelf Docs",
    description:
      "Comprehensive documentation for all our projects and services, guiding you through every step.",
    link: "https://github.com/crystelf/crystelf-docs",
  },
];

export const PROJECTS: Project[] = [
  {
    icon: <FolderIcon />,
    title: "Awesome Project One",
    description:
      "A revolutionary tool that changes how we approach modern web development, built with performance in mind.",
    link: "https://github.com/crystelf",
    tags: ["TypeScript", "React", "Node.js"],
  },
  {
    icon: <FolderIcon />,
    title: "Project Phoenix",
    description:
      "An innovative data visualization library that makes complex datasets understandable and beautiful.",
    link: "https://github.com/crystelf",
    tags: ["D3.js", "JavaScript", "CSS"],
  },
  {
    icon: <FolderIcon />,
    title: "Go-Utilities",
    description:
      "A collection of essential, high-performance utility functions for Go developers to streamline their workflow.",
    link: "https://github.com/crystelf",
    tags: ["Go", "CLI", "Utilities"],
  },
];

export const NAV_LINKS: NavLink[] = [
  {
    name: "Official Website",
    href: "https://crystelf.top",
    pingUrl: "https://crystelf.top",
    description: "Our main portal and homepage.",
  },
  {
    name: "GitHub Organization",
    href: "https://github.com/crystelf",
    pingUrl: "https://github.com",
    description: "Explore our source code and contribute.",
  },
  {
    name: "Core Project",
    href: "https://github.com/crystelf/crystelf-core",
    pingUrl: "https://github.com",
    description: "The core framework repository.",
  },
  {
    name: "Documentation",
    href: "https://github.com/crystelf/crystelf-docs",
    pingUrl: "https://github.com",
    description: "Project documentation and guides.",
  },
];
