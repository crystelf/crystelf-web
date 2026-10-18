import type { zhCN } from "@/locales/zh-CN";

export const enUS: typeof zhCN = {
  meta: {
    title: "Crystelf",
    description:
      "Crystelf is a community-driven team that builds open-source software and runs non-profit services for the community.",
    ogTitle: "Crystelf",
    ogDescription: "Community-driven open-source software and non-profit services.",
  },
  brand: {
    name: "Crystelf",
    latinName: "Crystelf",
  },
  a11y: {
    skipToContent: "Skip to main content",
    openInNewTab: "(opens in a new tab)",
    mainNav: "Main",
    menu: "Site menu",
    openMenu: "Open menu",
    closeMenu: "Close menu",
    githubLink: "Crystelf on GitHub",
  },
  nav: {
    services: "Services",
    projects: "Projects",
    about: "About",
  },
  theme: {
    dark: "Dark mode",
  },
  language: {
    select: "Language",
    chinese: "简体中文",
    english: "English",
    chineseShort: "中文",
    englishShort: "EN",
  },
  hero: {
    label: "community-driven open source",
    titleLead: "Building open source",
    titleAccent: "for the community",
    lead: "Crystelf is a community-driven team. We build open-source software and run non-profit services, giving developers and the wider community the tools and infrastructure they need to get more done.",
    primaryAction: "Explore services",
    secondaryAction: "View on GitHub",
    terminal: {
      title: "~/crystelf",
      session: [
        { command: "whoami", output: ["Crystelf"] },
        {
          command: "cat ./mission.txt",
          output: [
            "Build open-source software.",
            "Run non-profit services.",
            "Make creative work easier.",
          ],
        },
        { command: "ls", output: ["services/  projects/  about/"] },
      ],
    },
  },
  services: {
    label: "services",
    title: "Community services",
    subtitle: "Non-profit services that Crystelf and our community maintain together.",
    emptyCommand: "ls ./services",
    itemAction: "Visit service",
  },
  projects: {
    label: "projects",
    title: "Open-source projects",
    subtitle:
      "From tools for developers and communities to user-facing front ends, we build every project in the open.",
    emptyCommand: "ls ./projects",
    itemAction: "View source",
  },
  emptyState: {
    comingSoon: "Coming soon",
    description: "We're still putting this together. It will show up here once it's live.",
  },
  about: {
    label: "about",
    title: "About Crystelf",
    body: [
      "Crystelf is a community-driven organization focused on open-source software and non-profit services. We want to build tools that are powerful and efficient, and free for as many people as possible to use.",
      "We believe in the power of collaboration, and we welcome contributors from every background to help keep our community a friendly place.",
    ],
    contactCommand: "cat ./contact",
    contactComingSoon: "Contact details coming soon",
    contactDescription:
      "We're setting up our contact channels and will list them here once they're ready.",
  },
  footer: {
    owner: "Crystelf",
    github: "GitHub",
  },
};
