"use client";

import { LanguageProvider } from "../contexts/LanguageContext";
import { ScrollToTop } from "./scroll-to-top";
import Footer from "./Footer";
import dynamic from "next/dynamic";

const Header = dynamic(() => import("../app/Header"), { ssr: false });

export default function ClientLayout({ children }: { children: React.ReactNode }) {
  return (
    <LanguageProvider>
      <Header />
      <main className="relative z-10 mx-auto max-w-prose pb-4">
        {children}
        <ScrollToTop />
      </main>
      <Footer />
    </LanguageProvider>
  );
}

