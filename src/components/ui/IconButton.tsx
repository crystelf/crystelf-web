import type { ComponentProps } from "react";
import { cx } from "@/components/ui/cx";
import { useLanguage } from "@/contexts/LanguageContext";

const ICON_BUTTON =
  "inline-flex size-11 shrink-0 items-center justify-center rounded-xs text-fg-muted transition-colors hover:bg-surface-muted hover:text-accent aria-pressed:text-accent";

type IconButtonProps = ComponentProps<"button"> & { label: string };

export function IconButton({
  label,
  className,
  type = "button",
  ...props
}: IconButtonProps) {
  return (
    <button
      type={type}
      aria-label={label}
      className={cx(ICON_BUTTON, className)}
      {...props}
    />
  );
}

type IconLinkProps = ComponentProps<"a"> & { label: string; external?: boolean };

export function IconLink({
  label,
  external = false,
  className,
  ...props
}: IconLinkProps) {
  const { t } = useLanguage();
  return (
    <a
      aria-label={external ? `${label} ${t.a11y.openInNewTab}` : label}
      target={external ? "_blank" : undefined}
      rel={external ? "noopener noreferrer" : undefined}
      className={cx(ICON_BUTTON, className)}
      {...props}
    />
  );
}
