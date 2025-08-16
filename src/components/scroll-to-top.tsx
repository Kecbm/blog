"use client";

import { ArrowUp } from "lucide-react";
import { useEffect, useState } from "react";

export const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 400) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <button
        onClick={() => window.scrollTo({ top: 0 })}
        aria-label="Scroll to top"
        className={`${isVisible ? "opacity-100" : "opacity-0"} fixed z-10 items-center gap-2 rounded bg-transparent py-2 pl-4 pr-3 ring-1 ring-[#4f7e0d] text-[#4f7e0d] transition-all sm:right-8 sm:top-8 sm:flex hover:bg-[#4f7e0d] hover:text-white hover:font-bold dark:ring-[#B1EC4A] dark:text-[#B1EC4A] dark:hover:bg-[#B1EC4A] dark:hover:text-[#161D2A]`}
      >
        Back to top
        <ArrowUp className="size-4" />
      </button>
      <button
        onClick={() => window.scrollTo({ top: 0 })}
        aria-label="Scroll to top"
        className={`${isVisible ? "opacity-100" : "opacity-0"} fixed z-10 items-center gap-2 rounded bg-transparent p-3 ring-1 ring-[#68a60a] text-[#68a60a] transition-all max-sm:bottom-6 max-sm:right-6 max-sm:flex hover:bg-[#68a60a] hover:text-white hover:font-bold dark:ring-[#B1EC4A] dark:text-[#B1EC4A] dark:hover:bg-[#B1EC4A] dark:hover:text-[#161D2A]`}
      >
        <ArrowUp className="size-5" />
      </button>
    </>
  );
};
