"use client";

import { ChevronLeft, Moon, Sun } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import NavLink from "@/src/components/NavLink";

function isThemeSetToDark() {
  if (window == undefined) return;

  return (
    localStorage.theme === "dark" ||
    (!("theme" in localStorage) &&
      window.matchMedia("(prefers-color-scheme: dark)").matches)
  );
}

export default function Header() {
  const path = usePathname();
  const isHome = path === "/";
  const [isDarkMode, setIsDarkMode] = useState(isThemeSetToDark());

  useEffect(() => {
    if (isThemeSetToDark()) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, []);

  const toggleTheme = () => {
    if (isDarkMode) {
      localStorage.theme = "light";
      document.documentElement.classList.remove("dark");
      setIsDarkMode(false);
    } else {
      localStorage.theme = "dark";
      document.documentElement.classList.add("dark");
      setIsDarkMode(true);
    }
  };

  return (
    <header className="mx-auto max-w-prose py-8 max-sm:pt-4">
      <nav className="flex items-center justify-between max-sm:flex-col max-sm:gap-6">
        <Link
          className={`group relative -m-12 -my-2 -mr-4 flex items-center py-2 pl-12 pr-4 transition-all max-sm:text-center ${isHome ? "text-[#68a60a] dark:text-[#B1EC4A]" : "nav-link-base ring-1 ring-transparent sm:hover:ring-opacity-100"}`}
          href="/"
          aria-label="Back to home"
        >
          <div
            className={`${isHome ? "hidden" : "absolute"} left-1 flex size-4 h-full w-12 items-center px-2`}
          >
            <ChevronLeft strokeWidth={1.4} />
          </div>
          <div className="flex flex-col max-sm:items-center">
            Klecianny Melo
            <span className="text-zinc-500 dark:text-zinc-400">
              Software Engineer AI First
            </span>
          </div>
        </Link>
        <div className="flex items-center gap-4">
          <button
            onClick={() => toggleTheme()}
            className="group relative flex items-center"
            aria-label="Toggle theme"
          >
            {isDarkMode ? (
              <Moon
                strokeWidth={1.4}
                className="size-5 fill-gray-700 transition-all sm:hover:rotate-45"
              />
            ) : (
              <Sun
                strokeWidth={1.4}
                className="size-5 fill-yellow-300 transition-all sm:hover:rotate-45"
              />
            )}
          </button>
          <NavLink
            href="/projects"
            label="View projects"
            isActive={path === "/projects"}
          >
            /projects
          </NavLink>
          <NavLink
            href="/articles"
            label="View articles"
            isActive={path.startsWith("/articles")}
          >
            /articles
          </NavLink>
          <NavLink
            href="/about"
            label="View about page"
            isActive={path === "/about"}
          >
            /about
          </NavLink>
        </div>
      </nav>
    </header>
  );
}
