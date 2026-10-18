import { CatalogSection } from "@/components/sections/CatalogSection";
import { useLanguage } from "@/contexts/LanguageContext";
import { projects } from "@/data/projects";

export function ProjectsSection() {
  const { t } = useLanguage();
  return <CatalogSection id="projects" index="02" copy={t.projects} items={projects} />;
}
