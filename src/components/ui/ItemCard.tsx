import type { ReactNode } from "react";
import { ExternalHint } from "@/components/ui/ExternalHint";
import { useReveal } from "@/hooks/useReveal";

interface ItemCardProps {
  title: string;
  description: string;
  href: string;
  actionLabel: string;
  tags?: readonly string[];
}

export function ItemCard({ title, description, href, actionLabel, tags }: ItemCardProps) {
  return (
    <article className="flex h-full flex-col gap-3 border border-line bg-surface p-6">
      <h3 className="text-lg font-medium text-fg md:text-xl">{title}</h3>
      <p className="text-sm text-fg-muted">{description}</p>
      {tags && tags.length > 0 && (
        <ul className="flex flex-wrap gap-2">
          {tags.map((tag) => (
            <li key={tag} className="label-mono rounded-xs border border-line px-2 py-1">
              {tag}
            </li>
          ))}
        </ul>
      )}
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-auto inline-flex min-h-11 items-center gap-1.5 self-start text-sm text-accent underline decoration-1 underline-offset-4 transition-colors hover:text-accent-hover"
      >
        {actionLabel}
        <span className="sr-only"> {title}</span>
        <ExternalHint />
      </a>
    </article>
  );
}

export function ItemGrid({ children }: { children: ReactNode }) {
  const reveal = useReveal<HTMLUListElement>();
  return (
    <ul {...reveal} className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {children}
    </ul>
  );
}
