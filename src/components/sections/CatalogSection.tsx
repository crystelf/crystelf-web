import { EmptyState } from "@/components/ui/EmptyState";
import { ItemCard, ItemGrid } from "@/components/ui/ItemCard";
import { Section } from "@/components/ui/Section";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { useLanguage } from "@/contexts/LanguageContext";
import type { ServiceItem } from "@/data/types";
import type { Translations } from "@/locales";

interface CatalogSectionProps {
  id: string;
  index: string;
  copy: Translations["services"];
  items: readonly ServiceItem[];
}

export function CatalogSection({ id, index, copy, items }: CatalogSectionProps) {
  const { t, locale } = useLanguage();
  const titleId = `${id}-title`;

  return (
    <Section id={id} titleId={titleId}>
      <SectionHeader
        index={index}
        label={copy.label}
        title={copy.title}
        subtitle={copy.subtitle}
        titleId={titleId}
      />
      {items.length > 0 ? (
        <ItemGrid>
          {items.map((item) => (
            <li key={item.id}>
              <ItemCard
                title={item.name}
                description={item.description[locale]}
                href={item.url}
                actionLabel={copy.itemAction}
                tags={item.tags}
              />
            </li>
          ))}
        </ItemGrid>
      ) : (
        <EmptyState
          command={copy.emptyCommand}
          title={t.emptyState.comingSoon}
          description={t.emptyState.description}
        />
      )}
    </Section>
  );
}
