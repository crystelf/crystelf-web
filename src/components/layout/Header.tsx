import { GitHubIcon } from "@/components/icons";
import { BrandMark } from "@/components/layout/BrandMark";
import { LanguageSwitcher } from "@/components/layout/LanguageSwitcher";
import { MobileNav } from "@/components/layout/MobileNav";
import { NAV_IDS, NAV_ITEMS } from "@/components/layout/navigation";
import { ThemeToggle } from "@/components/layout/ThemeToggle";
import { Container } from "@/components/ui/Container";
import { cx } from "@/components/ui/cx";
import { IconLink } from "@/components/ui/IconButton";
import { useLanguage } from "@/contexts/LanguageContext";
import { GITHUB_ORG_URL } from "@/data/site";
import { useActiveSection } from "@/hooks/useActiveSection";
import { useScrolled } from "@/hooks/useScrolled";

export function Header() {
  const { t } = useLanguage();
  const activeId = useActiveSection(NAV_IDS);
  const isScrolled = useScrolled();

  return (
    <header
      className={cx(
        "sticky top-0 z-40 border-b bg-canvas transition-colors",
        isScrolled ? "border-line" : "border-transparent",
      )}
    >
      <Container className="flex h-16 items-center justify-between gap-4">
        <a
          href="#hero"
          className="inline-flex min-h-11 items-center gap-2 font-mono text-sm font-medium text-fg transition-colors hover:text-accent"
        >
          <BrandMark />
        </a>
        <nav aria-label={t.a11y.mainNav} className="hidden md:block">
          <ul className="flex items-center gap-6">
            {NAV_ITEMS.map((item) => {
              const isActive = activeId === item.id;
              return (
                <li key={item.id}>
                  <a
                    href={`#${item.id}`}
                    aria-current={isActive ? "true" : undefined}
                    className={cx(
                      "inline-flex h-11 items-center font-mono text-sm transition-colors hover:text-accent",
                      isActive ? "text-accent" : "text-fg-muted",
                    )}
                  >
                    {t.nav[item.id]}
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>
        <div className="hidden items-center gap-2 md:flex">
          <LanguageSwitcher />
          <ThemeToggle />
          <IconLink href={GITHUB_ORG_URL} label={t.a11y.githubLink} external>
            <GitHubIcon className="size-5" />
          </IconLink>
        </div>
        <MobileNav activeId={activeId} />
      </Container>
    </header>
  );
}
