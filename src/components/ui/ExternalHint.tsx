import { ExternalLinkIcon } from "@/components/icons";
import { useLanguage } from "@/contexts/LanguageContext";

export function ExternalHint() {
  const { t } = useLanguage();
  return (
    <>
      <ExternalLinkIcon className="size-3.5 shrink-0" />
      <span className="sr-only"> {t.a11y.openInNewTab}</span>
    </>
  );
}
