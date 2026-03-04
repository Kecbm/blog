import type { Metadata } from "next";
import { Karla } from "next/font/google";
import "./globals.css";
import IconBackground from "../components/IconBackground";
import Script from "next/script";
import ClientLayout from "../components/ClientLayout";
// import { Analytics } from "@vercel/analytics/next";

export const metadata: Metadata = {
  title: "Klecianny Melo",
  description: "Klecianny Melo's personal website",
};

const karla = Karla({
  subsets: ["latin"],
  weight: "400",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="min-h-screen">
      <head>
        <link rel="icon" href="https://fav.farm/👩🏾" />
      </head>
      <body className={`${karla.className} min-h-full px-6`}>
        {/* <Analytics /> */}
        <IconBackground />
        <Script id="theme-toggle" strategy="afterInteractive">
          {`document.documentElement.classList.toggle("dark", localStorage.theme ===
        "dark" || (!("theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches))`}
        </Script>
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}
