"use client";

import { useState, useEffect, useRef } from "react";
import { ChevronDown, Home, FolderOpen, FileText, User, BookOpen, Gamepad2 } from "lucide-react";
import { useRouter, usePathname } from "next/navigation";

export type PageOption = "home" | "projects" | "articles" | "about" | "books" | "ps3";

interface PageOptionConfig {
  value: PageOption;
  label: string;
  icon: React.ReactNode;
  href: string;
  showInDropdown?: boolean; // Nova propriedade para controlar se aparece no dropdown
}

interface PageButtonProps {
  children: React.ReactNode;
  isActive: boolean;
  onClick: () => void;
}

function PageButton({ children, isActive, onClick }: PageButtonProps) {
  const handleClick = () => {
    onClick();
  };

  return (
    <button
      onClick={handleClick}
      type="button"
      className={`w-full text-left transition-all hover:opacity-80 h-7 py-0 flex items-center justify-start pl-3 rounded-full px-2.5 text-sm cursor-pointer ${
        isActive
          ? "bg-[#68a60a] text-white font-bold dark:bg-[#acf328] dark:text-[#161D2A]"
          : "border border-[#68a60a] text-[#68a60a] bg-[#fafafa] hover:bg-[#68a60a] hover:text-white dark:border-[#acf328] dark:text-[#acf328] dark:bg-[#161D2A] dark:hover:bg-[#acf328] dark:hover:text-[#161D2A]"
      }`}
    >
      {children}
    </button>
  );
}

interface PageSelectorProps {
  className?: string;
}

export default function PageSelector({ className = "" }: PageSelectorProps) {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsDropdownOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const getPageOptions = (): PageOptionConfig[] => {
    return [
      { value: "home", label: "Home", icon: <Home size={16} />, href: "/", showInDropdown: true },
      { value: "projects", label: "Projects", icon: <FolderOpen size={16} />, href: "/projects", showInDropdown: true },
      { value: "articles", label: "Articles", icon: <FileText size={16} />, href: "/articles", showInDropdown: true },
      { value: "about", label: "About", icon: <User size={16} />, href: "/about", showInDropdown: true },
      { value: "books", label: "Books", icon: <BookOpen size={16} />, href: "/books", showInDropdown: false },
      { value: "ps3", label: "PS3", icon: <Gamepad2 size={16} />, href: "/ps3", showInDropdown: false },
    ];
  };

  const getCurrentPage = (): PageOptionConfig => {
    const pageOptions = getPageOptions();

    if (pathname === "/") return pageOptions[0]; // home
    if (pathname === "/projects") return pageOptions[1]; // projects
    if (pathname.startsWith("/articles")) return pageOptions[2]; // articles
    if (pathname === "/about") return pageOptions[3]; // about
    if (pathname === "/books") return pageOptions[4]; // books
    if (pathname === "/ps3") return pageOptions[5]; // ps3

    // Default to home if no match
    return pageOptions[0];
  };

  const pageOptions = getPageOptions();
  const currentPage = getCurrentPage();

  const handlePageChange = (option: PageOptionConfig) => {
    setIsDropdownOpen(false);
    router.push(option.href);
  };

  return (
    <div className={`relative ${className}`}>
      <div className="relative" ref={dropdownRef}>
        <button
          onClick={() => setIsDropdownOpen(!isDropdownOpen)}
          className="flex items-center justify-between transition-all h-7 border border-[#68a60a] text-[#68a60a] bg-transparent hover:bg-[#68a60a] hover:text-white font-bold dark:border-[#acf328] dark:text-[#acf328] dark:bg-transparent dark:hover:bg-[#acf328] dark:hover:text-[#161D2A] w-[140px] pl-3 pr-3 rounded-full px-2.5 py-0.5 text-sm"
        >
          <div className="flex items-center gap-2">
            {currentPage.icon}
            <span>{currentPage.label}</span>
          </div>
          <ChevronDown
            className={`size-4 transition-transform ${isDropdownOpen ? "rotate-180" : ""}`}
          />
        </button>

        {isDropdownOpen && (
          <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-1 p-2 space-y-1 z-[9999] w-[140px] pointer-events-auto">
            {pageOptions
              .filter((option) => option.showInDropdown)
              .map((option) => (
                <PageButton
                  key={option.value}
                  isActive={currentPage.value === option.value}
                  onClick={() => handlePageChange(option)}
                >
                  <div className="flex items-center gap-2">
                    {option.icon}
                    <span>{option.label}</span>
                  </div>
                </PageButton>
              ))}
          </div>
        )}
      </div>
    </div>
  );
}
