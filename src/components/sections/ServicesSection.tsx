import { GroupedCatalog, type CatalogGroup } from "@/components/sections/GroupedCatalog";
import { useLanguage } from "@/contexts/LanguageContext";
import { serviceGroups, services } from "@/data/services";

export function ServicesSection() {
  const { t, locale } = useLanguage();
  const copy = t.services;

  const groups: CatalogGroup[] = serviceGroups.map((group) => ({
    id: group,
    name: copy.groups[group].name,
    description: copy.groups[group].description,
    entries: services
      .filter((service) => service.group === group)
      .map((service) => ({
        id: service.id,
        title: service.name[locale],
        description: service.description[locale],
        href: service.url,
        tags: service.tags,
        badge: service.requiresJoin ? { label: copy.joinRequired, tone: "notice" } : undefined,
      })),
  }));

  return (
    <GroupedCatalog
      id="services"
      index="01"
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
