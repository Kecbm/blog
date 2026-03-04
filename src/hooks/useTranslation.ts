import { useLanguage } from "@/src/contexts/LanguageContext";
import { translations } from "@/src/translations";

export function useTranslation() {
  const { language } = useLanguage();
  
  return {
    t: translations[language],
    language,
  };
}

