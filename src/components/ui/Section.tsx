import type { ReactNode } from "react";
import { Container } from "@/components/ui/Container";

interface SectionProps {
  id: string;
  titleId: string;
  children: ReactNode;
}

export function Section({ id, titleId, children }: SectionProps) {
  return (
    <section id={id} aria-labelledby={titleId} className="border-t border-line">
      <Container className="py-20 md:py-28">{children}</Container>
    </section>
  );
}
