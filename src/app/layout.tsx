import type { Metadata } from "next";
import { Karla } from "next/font/google";
import "./globals.css";
import { ScrollToTop } from "../components/scroll-to-top";
import Script from "next/script";
import dynamic from "next/dynamic";
// import { Analytics } from "@vercel/analytics/next";

export const metadata: Metadata = {
  title: "Klecianny Melo",
  description: "Klecianny Melo's personal website",
};

const karla = Karla({
  subsets: ["latin"],
  weight: "400",
});

// https://www.reddit.com/r/nextjs/comments/1bhfikg/comment/kxwj9ou/?utm_source=share&utm_medium=web3x&utm_name=web3xcss&utm_term=1&utm_content=share_button
const Header = dynamic(() => import("./Header"), { ssr: false });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="min-h-screen">
      <body className={`${karla.className} min-h-full px-6`}>
        {/* <Analytics /> */}
        <Script id="theme-toggle" strategy="afterInteractive">
          {`document.documentElement.classList.toggle("dark", localStorage.theme ===
        "dark" || (!("theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches))`}
        </Script>
        <Header />
        <main className="mx-auto max-w-prose pb-4">
          {children}
          <ScrollToTop />
        </main>
        <footer className="mx-auto flex max-w-prose flex-col items-center gap-2 py-6 text-sm text-zinc-500 dark:text-zinc-400">
          <div className="flex items-center gap-4">
            <a
              className="decoration-[#88d012] underline-offset-4 transition-all hover:underline hover:text-[#88d012] hover:font-bold dark:decoration-[#C4FC55] dark:hover:text-[#C4FC55]"
              href="https://github.com/Kecbm/blog"
              target="_blank"
            >
              Code
            </a>

            <a
              className="decoration-[#88d012] underline-offset-4 transition-all hover:underline hover:text-[#88d012] hover:font-bold dark:decoration-[#C4FC55] dark:hover:text-[#C4FC55]"
              href="https://github.com/Kecbm"
              target="_blank"
            >
              @Kecbm
            </a>
          </div>
          <blockquote className="text-zinc-800 dark:text-zinc-300">
            Life is good
          </blockquote>
        </footer>
      </body>
    </html>
  );
}
