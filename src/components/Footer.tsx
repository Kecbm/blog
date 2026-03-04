"use client";

import { useTranslation } from "@/src/hooks/useTranslation";

export default function Footer() {
  const { t } = useTranslation();

  return (
    <footer className="relative z-10 mx-auto flex max-w-prose flex-col items-center gap-2 py-6 text-sm text-zinc-500 dark:text-zinc-400">
      <div className="flex items-center gap-4">
        <a
          className="decoration-[#68a60a] underline-offset-4 transition-all hover:underline hover:text-[#68a60a] hover:font-bold dark:decoration-[#acf328] dark:hover:text-[#acf328]"
          href="https://github.com/Kecbm/blog"
          target="_blank"
        >
          {t.footer.code}
        </a>

        <a
          className="decoration-[#68a60a] underline-offset-4 transition-all hover:underline hover:text-[#68a60a] hover:font-bold dark:decoration-[#acf328] dark:hover:text-[#acf328]"
          href="https://github.com/Kecbm"
          target="_blank"
        >
          @Kecbm
        </a>
      </div>
      <blockquote className="text-zinc-800 dark:text-zinc-300">
        {t.footer.quote}
      </blockquote>
    </footer>
  );
}

