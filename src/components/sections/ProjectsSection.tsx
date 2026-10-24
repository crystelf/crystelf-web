import { GroupedCatalog, type CatalogGroup } from "@/components/sections/GroupedCatalog";
import { useLanguage } from "@/contexts/LanguageContext";
import { projectGroups, projects } from "@/data/projects";

export function ProjectsSection() {
  const { t, locale } = useLanguage();
  const copy = t.projects;

  const groups: CatalogGroup[] = projectGroups.map((group) => ({
    id: group,
    name: copy.groups[group].name,
    description: copy.groups[group].description,
    entries: projects
      .filter((project) => project.group === group)
      .map((project) => ({
        id: project.id,
        title: project.name,
        description: project.description[locale],
        href: project.url,
        tags: project.tags,
        badge: { label: copy.status[project.status], tone: project.status },
      })),
  }));

  return (
    <GroupedCatalog
      id="projects"
      index="02"
      label={copy.label}
      title={copy.title}
      subtitle={copy.subtitle}
      tabsLabel={copy.tabsLabel}
      countOne={copy.countOne}
      countOther={copy.countOther}
      actionLabel={copy.itemAction}
      emptyCommand={copy.emptyCommand}
      groups={groups}
    />
  );
}
