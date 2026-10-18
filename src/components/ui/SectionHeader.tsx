import { useReveal } from "@/hooks/useReveal";

interface SectionHeaderProps {
  index: string;
  label: string;
  title: string;
  subtitle?: string;
  titleId: string;
}

export function SectionHeader({ index, label, title, subtitle, titleId }: SectionHeaderProps) {
  const reveal = useReveal<HTMLDivElement>();

  return (
    <div {...reveal} className="mb-10 md:mb-14">
      <p className="label-mono">
        <span className="text-accent" aria-hidden="true">
          {`// ${index} `}
        </span>
        {label}
      </p>
      <h2 id={titleId} className="mt-3 text-2xl font-semibold tracking-tight md:text-4xl">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-4 max-w-text text-base text-fg-muted md:text-lg">{subtitle}</p>
      )}
    </div>
  );
}
