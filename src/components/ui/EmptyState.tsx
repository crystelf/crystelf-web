import { useReveal } from "@/hooks/useReveal";

interface EmptyStateProps {
  command?: string;
  title: string;
  description?: string;
}

export function EmptyState({ command, title, description }: EmptyStateProps) {
  const reveal = useReveal<HTMLDivElement>();

  return (
    <div
      {...reveal}
      className="flex flex-col items-start gap-3 border border-dashed border-line-strong bg-surface px-6 py-10 md:items-center md:px-10 md:py-16 md:text-center"
    >
      {command && (
        <p className="font-mono text-sm text-fg-subtle">
          <span className="text-accent" aria-hidden="true">
            {"$ "}
          </span>
          {command}
        </p>
      )}
      <p className="text-lg font-medium text-fg">{title}</p>
      {description && <p className="text-sm text-fg-muted">{description}</p>}
    </div>
  );
}
