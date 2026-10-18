import { CrystelfLogo } from "@/components/icons";
import { useLanguage } from "@/contexts/LanguageContext";

export function BrandMark() {
  const { t } = useLanguage();
  return (
    <>
      <CrystelfLogo className="size-6 shrink-0 text-accent" />
      <span>{t.brand.name}</span>
    </>
  );
}
