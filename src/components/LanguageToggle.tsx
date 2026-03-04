"use client";

import { useLanguage } from "@/src/contexts/LanguageContext";
import { Languages } from "lucide-react";

export default function LanguageToggle() {
  const { language, toggleLanguage } = useLanguage();

  return (
    <button
      onClick={toggleLanguage}
      className="group relative flex items-center gap-1 transition-all"
      aria-label={language === "en" ? "Switch to Portuguese" : "Mudar para Inglês"}
    >
      <Languages
        strokeWidth={1.4}
        className="size-5"
      />
      <span className="text-base font-normal">
        {language === "en" ? "EN" : "PT"}
      </span>
    </button>
  );
}

