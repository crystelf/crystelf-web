import { Section } from "@/components/ui/Section";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { useLanguage } from "@/contexts/LanguageContext";
import { useReveal } from "@/hooks/useReveal";

export function AboutSection() {
  const { t } = useLanguage();
  const body = useReveal<HTMLDivElement>();
  const contact = useReveal<HTMLDivElement>(1);

  return (
    <Section id="about" titleId="about-title">
      <SectionHeader
        index="03"
        label={t.about.label}
        title={t.about.title}
        titleId="about-title"
      />
      <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_20rem]">
        <div {...body} className="flex min-w-0 flex-col gap-4">
          {t.about.body.map((paragraph) => (
            <p key={paragraph} className="max-w-text text-base text-fg-muted">
              {paragraph}
            </p>
          ))}
        </div>
        <div {...contact} className="border border-line bg-surface p-6 corner-marks">
          <p className="font-mono text-sm text-fg-subtle">
            <span className="text-accent" aria-hidden="true">
              {"$ "}
            </span>
            {t.about.contactCommand}
          </p>
          <h3 className="mt-3 text-lg font-medium text-fg md:text-xl">
            {t.about.contactComingSoon}
          </h3>
          <p className="mt-3 text-sm text-fg-muted">{t.about.contactDescription}</p>
        </div>
      </div>
    </Section>
  );
}
