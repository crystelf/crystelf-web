import { useRef, useState, type KeyboardEvent } from "react";
import { EmptyState } from "@/components/ui/EmptyState";
import { ItemCard, ItemGrid, type ItemBadge } from "@/components/ui/ItemCard";
import { Section } from "@/components/ui/Section";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { cx } from "@/components/ui/cx";
import { useLanguage } from "@/contexts/LanguageContext";

export interface CatalogEntry {
  id: string;
  title: string;
  description: string;
  href?: string;
  tags?: readonly string[];
  badge?: ItemBadge;
}

export interface CatalogGroup {
  id: string;
  name: string;
  description: string;
  entries: readonly CatalogEntry[];
}

interface GroupedCatalogProps {
  id: string;
  index: string;
  label: string;
  title: string;
  subtitle: string;
  tabsLabel: string;
  countOne: string;
  countOther: string;
  actionLabel: string;
  emptyCommand: string;
  groups: readonly CatalogGroup[];
}

function targetIndex(key: string, index: number, last: number): number | null {
  switch (key) {
    case "ArrowRight":
      return index === last ? 0 : index + 1;
    case "ArrowLeft":
      return index === 0 ? last : index - 1;
    case "Home":
      return 0;
    case "End":
      return last;
    default:
      return null;
  }
}

export function GroupedCatalog({
  id,
  index,
  label,
  title,
  subtitle,
  tabsLabel,
  countOne,
  countOther,
  actionLabel,
  emptyCommand,
  groups,
}: GroupedCatalogProps) {
  const { t } = useLanguage();
  const titleId = `${id}-title`;
  const [activeId, setActiveId] = useState(groups[0]?.id ?? "");
  const tabRefs = useRef<Record<string, HTMLButtonElement | null>>({});
  const active = groups.find((group) => group.id === activeId) ?? groups[0];

  const select = (groupId: string) => {
    setActiveId(groupId);
    tabRefs.current[groupId]?.focus();
  };

  const handleKeyDown = (event: KeyboardEvent<HTMLButtonElement>, position: number) => {
    const next = targetIndex(event.key, position, groups.length - 1);
    if (next === null) {
      return;
    }
    event.preventDefault();
    select(groups[next].id);
  };

  return (
    <Section id={id} titleId={titleId}>
      <SectionHeader index={index} label={label} title={title} subtitle={subtitle} titleId={titleId} />
      <div role="tablist" aria-label={tabsLabel} className="mb-8 grid gap-4 sm:grid-cols-2">
        {groups.map((group, position) => {
          const selected = group.id === active.id;
          const count = group.entries.length;
          return (
            <button
              key={group.id}
              ref={(node) => {
                tabRefs.current[group.id] = node;
              }}
              type="button"
              role="tab"
              id={`${id}-tab-${group.id}`}
              aria-selected={selected}
              aria-controls={`${id}-panel-${group.id}`}
              tabIndex={selected ? 0 : -1}
              onClick={() => setActiveId(group.id)}
              onKeyDown={(event) => handleKeyDown(event, position)}
              className={cx(
                "flex min-h-11 cursor-pointer flex-col gap-1 border p-5 text-left transition-colors",
                selected
                  ? "corner-marks border-accent bg-accent-soft"
                  : "border-line bg-surface hover:border-line-strong",
              )}
            >
              <span className="label-mono">
                {count} {count === 1 ? countOne : countOther}
              </span>
              <span className="text-lg font-medium text-fg md:text-xl">{group.name}</span>
              <span className="text-sm text-fg-muted">{group.description}</span>
            </button>
          );
        })}
      </div>
      <div
        role="tabpanel"
        id={`${id}-panel-${active.id}`}
        aria-labelledby={`${id}-tab-${active.id}`}
        tabIndex={0}
      >
        {active.entries.length > 0 ? (
          <ItemGrid key={active.id}>
            {active.entries.map((entry) => (
              <li key={entry.id}>
                <ItemCard
                  title={entry.title}
                  description={entry.description}
                  href={entry.href}
                  actionLabel={actionLabel}
                  tags={entry.tags}
                  badge={entry.badge}
                />
              </li>
            ))}
          </ItemGrid>
        ) : (
          <EmptyState
            key={active.id}
            command={emptyCommand}
            title={t.emptyState.comingSoon}
            description={t.emptyState.description}
          />
        )}
      </div>
    </Section>
  );
}
