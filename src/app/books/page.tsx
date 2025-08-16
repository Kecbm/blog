"use client";

import Image from "next/image";
import { useState, useEffect, useRef } from "react";
import { ChevronDown, Check, Clock, Hourglass, BookOpen } from "lucide-react";
import StatusBadge from "../../components/StatusBadge";

interface Book {
  name: string;
  imageUrl: string;
  status: "in-progress" | "done" | "pending";
}

type FilterStatus = "all" | "in-progress" | "done" | "pending";

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
          ? "bg-[#68a60a] text-white font-bold dark:bg-[#C4FC55] dark:text-[#161D2A]"
          : "border border-[#68a60a] text-[#68a60a] bg-[#fafafa] dark:border-[#B1EC4A] dark:text-[#B1EC4A] dark:bg-[#161D2A]"
      }`}
    >
      {children}
    </button>
  );
}

const books: Book[] = [
  {
    name: "Django 5 By Example",
    imageUrl: "https://m.media-amazon.com/images/I/81vUrx78p9L.jpg",
    status: "in-progress",
  },
  {
    name: "Python e Django",
    imageUrl: "https://m.media-amazon.com/images/I/81RvLKtdlrL._UF894,1000_QL80_.jpg",
    status: "pending",
  },
  {
    name: "Fluent React",
    imageUrl: "https://m.media-amazon.com/images/I/71LeIRBPrtL.jpg",
    status: "pending",
  },
  {
    name: "Clean Code",
    imageUrl: "https://m.media-amazon.com/images/I/51E2055ZGUL.jpg",
    status: "pending",
  },
  {
    name: "Self-Taught Programmer",
    imageUrl: "https://m.media-amazon.com/images/I/51+Z8QVq+WL.jpg",
    status: "pending",
  },
  {
    name: "Learn Domain-Driven Design",
    imageUrl: "https://m.media-amazon.com/images/I/819gVKYN7HL.jpg",
    status: "pending",
  },
  {
    name: "Refactoring",
    imageUrl: "https://m.media-amazon.com/images/I/71e6ndHEwqL.jpg",
    status: "pending",
  },
  {
    name: "Design Patterns",
    imageUrl: "https://m.media-amazon.com/images/I/81IGFC6oFmL._UF894,1000_QL80_.jpg",
    status: "pending",
  },
  {
    name: "Production-Ready Microservices",
    imageUrl: "https://m.media-amazon.com/images/I/81D4AHNvMsL._UF1000,1000_QL80_.jpg",
    status: "pending",
  },
  {
    name: "Product Backlog Building",
    imageUrl: "https://m.media-amazon.com/images/I/81RZV-FcqDS._UF1000,1000_QL80_.jpg",
    status: "done",
  },
  {
    name: "14 Habits of Highly Productive Developers",
    imageUrl: "https://m.media-amazon.com/images/I/719Siqxb0eL._UF894,1000_QL80_.jpg",
    status: "done",
  },
];

function BookCard({ name, imageUrl, status }: Book) {
  return (
    <div className="flex flex-col overflow-hidden rounded dark:ring-zinc-500 h-[324px] w-[280px] relative">
      <Image
        src={imageUrl}
        width={280}
        height={324}
        alt={`Cover for ${name}`}
        className="absolute inset-0 w-full h-full"
      />
      <StatusBadge status={status} inProgressLabel={"Reading"} />
    </div>
  );
}

export default function BooksPage() {
  const [activeFilter, setActiveFilter] = useState<FilterStatus>("all");
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

  const filterOptions = [
    { value: "all" as FilterStatus, label: "All Books", icon: <BookOpen size={16} /> },
    { value: "pending" as FilterStatus, label: "Pending", icon: <Hourglass size={16} /> },
    { value: "in-progress" as FilterStatus, label: "In Progress", icon: <Clock size={16} /> },
    { value: "done" as FilterStatus, label: "Done", icon: <Check size={16} strokeWidth={3} /> },
  ];

  const filteredBooks = books.filter((book) => {
    if (activeFilter === "all") return true;
    return book.status === activeFilter;
  });

  const activeFilterOption = filterOptions.find(option => option.value === activeFilter);

  return (
    <>
      <div className="relative">
        <h1 className="mb-8 mt-4 text-center text-5xl max-sm:text-4xl">
          Books
        </h1>

        {/* Filter Dropdown */}
        <div className="relative mb-8 flex justify-center">
          <div className="relative" ref={dropdownRef}>
            <button
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              className="flex items-center justify-between transition-all h-7 bg-[#68a60a] text-white font-bold dark:bg-[#C4FC55] dark:text-[#161D2A] w-[140px] pl-3 pr-3 rounded-full px-2.5 py-0.5 text-sm"
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
                      setActiveFilter(option.value);
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

        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 sm:gap-6 justify-items-center">
          {filteredBooks.map((book) => (
            <BookCard key={book.name} {...book} />
          ))}
        </div>
      </div>
    </>
  );
}
