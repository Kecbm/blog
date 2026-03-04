"use client";

import { createContext, useContext, useEffect, useState, ReactNode } from "react";

type Language = "en" | "pt";

interface LanguageContextType {
  language: Language;
  toggleLanguage: () => void;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>("en");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // Load language from localStorage on mount
    const savedLanguage = localStorage.getItem("language") as Language;
    if (savedLanguage === "en" || savedLanguage === "pt") {
      setLanguage(savedLanguage);
    }
    setMounted(true);
  }, []);

  const toggleLanguage = () => {
    const newLanguage = language === "en" ? "pt" : "en";
    setLanguage(newLanguage);
    localStorage.setItem("language", newLanguage);
  };

  // Prevent hydration mismatch
  if (!mounted) {
    return <>{children}</>;
  }

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);

  // Return default value during SSR or if context is not available
  if (context === undefined) {
    return {
      language: "en" as Language,
      toggleLanguage: () => {},
    };
  }

  return context;
}

