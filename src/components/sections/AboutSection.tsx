import { ExternalHint } from "@/components/ui/ExternalHint";
import { Section } from "@/components/ui/Section";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { useLanguage } from "@/contexts/LanguageContext";
import { GITHUB_ORG_HANDLE, GITHUB_ORG_URL, QQ_GROUPS } from "@/data/site";
import { useReveal } from "@/hooks/useReveal";

export function AboutSection() {
  const { t, locale } = useLanguage();
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
          <h3 className="mt-3 text-lg font-medium text-fg md:text-xl">{t.about.contactTitle}</h3>
          <p className="mt-3 text-sm text-fg-muted">{t.about.contactDescription}</p>
          <dl className="mt-5 flex flex-col divide-y divide-line border-t border-line">
            {QQ_GROUPS.map((group) => (
              <div key={group.id} className="flex flex-col gap-1 py-3">
                <dt className="text-sm text-fg-muted">
                  {t.about.qqGroupLabel} · {group.name[locale]}
                </dt>
                <dd className="font-mono text-base text-fg select-all">{group.number}</dd>
              </div>
            ))}
            <div className="flex flex-col gap-1 pt-3">
              <dt className="text-sm text-fg-muted">{t.about.githubLabel}</dt>
              <dd>
                <a
                  href={GITHUB_ORG_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex min-h-11 items-center gap-1.5 font-mono text-base text-accent underline decoration-1 underline-offset-4 transition-colors hover:text-accent-hover"
                >
                  {GITHUB_ORG_HANDLE}
                  <ExternalHint />
                </a>
              </dd>
            </div>
          </dl>
        </div>
      </div>
    </Section>
  );
}
