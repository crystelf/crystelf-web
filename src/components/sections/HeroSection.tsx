import { GitHubIcon } from "@/components/icons";
import { ButtonLink } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { useLanguage } from "@/contexts/LanguageContext";
import { GITHUB_ORG_URL } from "@/data/site";
import { useReveal } from "@/hooks/useReveal";

function HeroTerminal() {
  const { t } = useLanguage();
  const reveal = useReveal<HTMLDivElement>(4);
  const { title, session } = t.hero.terminal;

  return (
    <div {...reveal} aria-hidden="true" className="min-w-0 border border-line bg-surface shadow-offset">
      <div className="flex items-center gap-2 border-b border-line px-4 py-2">
        <span className="size-2.5 shrink-0 border border-line-strong" />
        <span className="size-2.5 shrink-0 border border-line-strong" />
        <span className="size-2.5 shrink-0 border border-line-strong" />
        <span className="label-mono ml-2 min-w-0">{title}</span>
      </div>
      <div className="flex flex-col gap-4 bg-surface blueprint-grid p-5 font-mono text-sm whitespace-pre-wrap md:p-6">
        {session.map((entry) => (
          <div key={entry.command}>
            <p className="text-fg">
              <span className="text-accent">{"$ "}</span>
              {entry.command}
            </p>
            {entry.output.map((line, index) => (
              <p key={index} className="text-fg-muted">
                {line}
              </p>
            ))}
          </div>
        ))}
        <p className="text-fg">
          <span className="text-accent">{"$ "}</span>
          <span className="term-cursor" />
        </p>
      </div>
    </div>
  );
}

export function HeroSection() {
  const { t } = useLanguage();
  const label = useReveal<HTMLParagraphElement>();
  const title = useReveal<HTMLHeadingElement>(1);
  const lead = useReveal<HTMLParagraphElement>(2);
  const actions = useReveal<HTMLDivElement>(3);

  return (
    <section id="hero" aria-labelledby="hero-title">
      <Container className="grid gap-12 py-16 md:py-24 lg:grid-cols-2 lg:items-center">
        <div className="min-w-0">
          <p {...label} className="label-mono">
            <span className="text-accent" aria-hidden="true">
              {"// "}
            </span>
            {t.hero.label}
          </p>
          <h1
            {...title}
            id="hero-title"
            className="mt-4 text-4xl font-semibold tracking-tight md:text-6xl"
          >
            {t.hero.titleLead}{" "}
            <span className="block text-accent">{t.hero.titleAccent}</span>
          </h1>
          <p {...lead} className="mt-6 max-w-text text-base text-fg-muted md:text-lg">
            {t.hero.lead}
          </p>
          <div {...actions} className="mt-8 flex flex-col gap-3 sm:flex-row">
            <ButtonLink href="#services" variant="primary">
              {t.hero.primaryAction}
            </ButtonLink>
            <ButtonLink href={GITHUB_ORG_URL} variant="secondary" external>
              <GitHubIcon className="size-4 shrink-0" />
              {t.hero.secondaryAction}
            </ButtonLink>
          </div>
        </div>
        <HeroTerminal />
      </Container>
    </section>
  );
}
