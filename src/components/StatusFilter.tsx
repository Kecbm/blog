"use client";

import { useState, useEffect, useRef } from "react";
import { ChevronDown, Check, Clock, Hourglass, BookOpen, Gamepad2 } from "lucide-react";

export type FilterStatus = "all" | "in-progress" | "done" | "pending";

interface FilterOption {
  value: FilterStatus;
  label: string;
  icon: React.ReactNode;
}

interface FilterButtonProps {
  children: React.ReactNode;
  isActive: boolean;
  onClick: () => void;
}

function FilterButton({ children, isActive, onClick }: FilterButtonProps) {
  return (
    <button
      onClick={onClick}
      className={`w-full text-left transition-all hover:opacity-80 h-7 py-0 flex items-center justify-start pl-3 rounded-full px-2.5 text-sm ${
        isActive
          ? "bg-[#68a60a] text-white font-bold dark:bg-[#acf328] dark:text-[#161D2A]"
          : "border border-[#68a60a] text-[#68a60a] bg-[#fafafa] dark:border-[#acf328] dark:text-[#acf328] dark:bg-[#161D2A]"
      }`}
    >
      {children}
    </button>
  );
}

interface StatusFilterProps {
  activeFilter: FilterStatus;
  onFilterChange: (filter: FilterStatus) => void;
  type?: "books" | "games";
}

export default function StatusFilter({ 
  activeFilter, 
  onFilterChange, 
  type = "books" 
}: StatusFilterProps) {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

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

  const getFilterOptions = (): FilterOption[] => {
    const baseIcon = type === "books" ? <BookOpen size={16} /> : <Gamepad2 size={16} />;
    const allLabel = type === "books" ? "All Books" : "All Games";
    
    return [
      { value: "all", label: allLabel, icon: baseIcon },
      { value: "pending", label: "Pending", icon: <Hourglass size={16} /> },
      { value: "in-progress", label: "In Progress", icon: <Clock size={16} /> },
      { value: "done", label: "Done", icon: <Check size={16} strokeWidth={3} /> },
    ];
  };

  const filterOptions = getFilterOptions();
  const activeFilterOption = filterOptions.find(option => option.value === activeFilter);

  return (
    <div className="relative mb-8 flex justify-center">
      <div className="relative" ref={dropdownRef}>
        <button
          onClick={() => setIsDropdownOpen(!isDropdownOpen)}
          className="flex items-center justify-between transition-all h-7 bg-[#68a60a] text-white font-bold dark:bg-[#acf328] dark:text-[#161D2A] w-[140px] pl-3 pr-3 rounded-full px-2.5 py-0.5 text-sm"
        >
          <div className="flex items-center gap-2">
            {activeFilterOption?.icon}
            <span>{activeFilterOption?.label}</span>
          </div>
          <ChevronDown
            className={`size-4 transition-transform ${isDropdownOpen ? "rotate-180" : ""}`}
          />
        </button>

        {isDropdownOpen && (
          <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-1 p-2 space-y-1 z-10 w-[140px]">
            {filterOptions.map((option) => (
              <FilterButton
                key={option.value}
                isActive={activeFilter === option.value}
                onClick={() => {
                  onFilterChange(option.value);
                  setIsDropdownOpen(false);
                }}
              >
                <div className="flex items-center gap-2">
                  {option.icon}
                  <span>{option.label}</span>
                </div>
              </FilterButton>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
