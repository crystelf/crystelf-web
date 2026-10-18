import { useCallback, useEffect, useRef, useState, type MouseEvent } from "react";
import { CloseIcon, GitHubIcon, MenuIcon } from "@/components/icons";
import { BrandMark } from "@/components/layout/BrandMark";
import { LanguageSwitcher } from "@/components/layout/LanguageSwitcher";
import { NAV_ITEMS } from "@/components/layout/navigation";
import { ThemeToggle } from "@/components/layout/ThemeToggle";
import { cx } from "@/components/ui/cx";
import { ExternalHint } from "@/components/ui/ExternalHint";
import { IconButton } from "@/components/ui/IconButton";
import { useLanguage } from "@/contexts/LanguageContext";
import { GITHUB_ORG_URL } from "@/data/site";

const DESKTOP_QUERY = "(min-width: 48rem)";

export function MobileNav({ activeId }: { activeId: string | null }) {
  const { t } = useLanguage();
  const dialogRef = useRef<HTMLDialogElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const [isOpen, setIsOpen] = useState(false);

  const close = useCallback(() => {
    dialogRef.current?.close();
  }, []);

  const open = () => {
    const dialog = dialogRef.current;
    if (!dialog || dialog.open) {
      return;
    }
    dialog.showModal();
    setIsOpen(true);
  };

  const handleClose = () => {
    setIsOpen(false);
    triggerRef.current?.focus({ preventScroll: true });
  };

  const handleBackdropClick = (event: MouseEvent<HTMLDialogElement>) => {
    if (event.target === event.currentTarget) {
      close();
    }
  };

  useEffect(() => {
    if (!isOpen) {
      return;
    }
    const media = window.matchMedia(DESKTOP_QUERY);
    const onChange = (event: MediaQueryListEvent) => {
      if (event.matches) {
        close();
      }
    };
    media.addEventListener("change", onChange);
    return () => media.removeEventListener("change", onChange);
  }, [isOpen, close]);

  return (
    <>
      <IconButton
        ref={triggerRef}
        label={t.a11y.openMenu}
        aria-expanded={isOpen}
        aria-controls="mobile-nav"
        aria-haspopup="dialog"
        onClick={open}
        className="md:hidden"
      >
        <MenuIcon className="size-5" />
      </IconButton>
      <dialog
        ref={dialogRef}
        id="mobile-nav"
        aria-label={t.a11y.menu}
        onClose={handleClose}
        onClick={handleBackdropClick}
        className="fixed inset-y-0 right-0 left-auto m-0 h-dvh max-h-none w-80 max-w-[85vw] border-l border-line bg-surface p-0 text-fg backdrop:bg-canvas/80"
      >
        <div className="flex h-full flex-col">
          <div className="flex h-16 shrink-0 items-center justify-between gap-4 border-b border-line pr-2 pl-4">
            <span className="inline-flex items-center gap-2 font-mono text-sm font-medium">
              <BrandMark />
            </span>
            <IconButton label={t.a11y.closeMenu} onClick={close}>
              <CloseIcon className="size-5" />
            </IconButton>
          </div>
          <nav aria-label={t.a11y.mainNav} className="grow overflow-y-auto">
            <ul>
              {NAV_ITEMS.map((item) => {
                const isActive = activeId === item.id;
                return (
                  <li key={item.id}>
                    <a
                      href={`#${item.id}`}
                      aria-current={isActive ? "true" : undefined}
                      onClick={close}
                      className={cx(
                        "flex min-h-11 items-center gap-3 border-b border-line px-4 py-3 font-mono text-base transition-colors hover:text-accent",
                        isActive ? "bg-accent-soft text-accent" : "text-fg",
                      )}
                    >
                      <span className="label-mono" aria-hidden="true">
                        {item.index}
                      </span>
                      {t.nav[item.id]}
                    </a>
                  </li>
                );
              })}
            </ul>
          </nav>
          <div className="flex shrink-0 flex-col gap-4 border-t border-line p-4">
            <div className="flex flex-wrap items-center gap-3">
              <LanguageSwitcher />
              <ThemeToggle />
            </div>
            <a
              href={GITHUB_ORG_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-11 items-center gap-2 self-start text-sm text-fg-muted transition-colors hover:text-accent"
            >
              <GitHubIcon className="size-4 shrink-0" />
              {t.footer.github}
              <ExternalHint />
            </a>
          </div>
        </div>
      </dialog>
    </>
  );
}
