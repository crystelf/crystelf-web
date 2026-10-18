import type { ComponentProps } from "react";
import { cx } from "@/components/ui/cx";
import { ExternalHint } from "@/components/ui/ExternalHint";

const BASE =
  "inline-flex h-11 items-center justify-center gap-2 rounded-xs px-5 font-mono text-sm transition-colors";

const VARIANTS = {
  primary:
    "bg-accent-solid text-on-accent hover:bg-accent-solid-hover active:bg-accent-solid-hover",
  secondary:
    "border border-line-strong text-fg hover:border-accent hover:text-accent active:bg-surface-muted",
};

type ButtonLinkProps = ComponentProps<"a"> & {
  variant?: keyof typeof VARIANTS;
  external?: boolean;
};

export function ButtonLink({
  variant = "primary",
  external = false,
  className,
  children,
  ...props
}: ButtonLinkProps) {
  return (
    <a
      target={external ? "_blank" : undefined}
      rel={external ? "noopener noreferrer" : undefined}
      className={cx(BASE, VARIANTS[variant], className)}
      {...props}
    >
      {children}
      {external && <ExternalHint />}
    </a>
  );
}
