import { GitHubIcon } from "@/components/icons";
import { Container } from "@/components/ui/Container";
import { ExternalHint } from "@/components/ui/ExternalHint";
import { useLanguage } from "@/contexts/LanguageContext";
import { GITHUB_ORG_URL } from "@/data/site";

export function Footer() {
  const { t } = useLanguage();
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-line">
      <Container className="flex flex-col items-center gap-2 py-8 text-center">
        <p className="label-mono">
          © {year} {t.footer.owner} · {t.footer.rights}
        </p>
        <a
          href={GITHUB_ORG_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex min-h-11 items-center gap-2 text-sm text-fg-muted transition-colors hover:text-accent"
        >
          <GitHubIcon className="size-4 shrink-0" />
          {t.footer.github}
          <ExternalHint />
        </a>
      </Container>
    </footer>
  );
}
