import { useRef, useState, type KeyboardEvent } from "react";
import { EmptyState } from "@/components/ui/EmptyState";
import { ItemCard, ItemGrid } from "@/components/ui/ItemCard";
import { Section } from "@/components/ui/Section";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { cx } from "@/components/ui/cx";
import { useLanguage } from "@/contexts/LanguageContext";
import { projectGroups, projects } from "@/data/projects";
import type { ProjectGroup } from "@/data/types";

const tabId = (group: ProjectGroup) => `projects-tab-${group}`;
const panelId = (group: ProjectGroup) => `projects-panel-${group}`;

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

export function ProjectsSection() {
  const { t, locale } = useLanguage();
  const copy = t.projects;
  const [active, setActive] = useState<ProjectGroup>(projectGroups[0]);
  const tabRefs = useRef<Partial<Record<ProjectGroup, HTMLButtonElement | null>>>({});
  const items = projects.filter((project) => project.group === active);

  const select = (group: ProjectGroup) => {
    setActive(group);
    tabRefs.current[group]?.focus();
  };

  const handleKeyDown = (event: KeyboardEvent<HTMLButtonElement>, index: number) => {
    const next = targetIndex(event.key, index, projectGroups.length - 1);
    if (next === null) {
      return;
    }
    event.preventDefault();
    select(projectGroups[next]);
  };

  return (
    <Section id="projects" titleId="projects-title">
      <SectionHeader
        index="02"
        label={copy.label}
        title={copy.title}
        subtitle={copy.subtitle}
        titleId="projects-title"
      />
      <div role="tablist" aria-label={copy.tabsLabel} className="mb-8 grid gap-4 sm:grid-cols-2">
        {projectGroups.map((group, index) => {
          const selected = group === active;
          const count = projects.filter((project) => project.group === group).length;
          const info = copy.groups[group];
          return (
            <button
              key={group}
              ref={(node) => {
                tabRefs.current[group] = node;
              }}
              type="button"
              role="tab"
              id={tabId(group)}
              aria-selected={selected}
              aria-controls={panelId(group)}
              tabIndex={selected ? 0 : -1}
              onClick={() => setActive(group)}
              onKeyDown={(event) => handleKeyDown(event, index)}
              className={cx(
                "flex min-h-11 cursor-pointer flex-col gap-1 border p-5 text-left transition-colors",
                selected
                  ? "corner-marks border-accent bg-accent-soft"
                  : "border-line bg-surface hover:border-line-strong",
              )}
            >
              <span className="label-mono">
                {count} {count === 1 ? copy.countOne : copy.countOther}
              </span>
              <span className="text-lg font-medium text-fg md:text-xl">{info.name}</span>
              <span className="text-sm text-fg-muted">{info.description}</span>
            </button>
          );
        })}
      </div>
      <div role="tabpanel" id={panelId(active)} aria-labelledby={tabId(active)} tabIndex={0}>
        {items.length > 0 ? (
          <ItemGrid key={active}>
            {items.map((item) => (
              <li key={item.id}>
                <ItemCard
                  title={item.name}
                  description={item.description[locale]}
                  href={item.url}
                  actionLabel={copy.itemAction}
                  tags={item.tags}
                  status={{ label: copy.status[item.status], tone: item.status }}
                />
              </li>
            ))}
          </ItemGrid>
        ) : (
          <EmptyState
            key={active}
            command={copy.emptyCommand}
            title={t.emptyState.comingSoon}
            description={t.emptyState.description}
          />
        )}
      </div>
    </Section>
  );
}
