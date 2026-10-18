import { CatalogSection } from "@/components/sections/CatalogSection";
import { useLanguage } from "@/contexts/LanguageContext";
import { services } from "@/data/services";

export function ServicesSection() {
  const { t } = useLanguage();
  return <CatalogSection id="services" index="01" copy={t.services} items={services} />;
}
