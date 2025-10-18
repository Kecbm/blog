"use client";

import Image from "next/image";
import { useState, useEffect, useRef } from "react";
import { ChevronDown, Check, Clock, Hourglass, BookOpen, ExternalLink, X } from "lucide-react";
import StatusBadge from "../../components/StatusBadge";

interface Book {
  name: string;
  imageUrl: string;
  status: "in-progress" | "done" | "pending";
  highlight?: string;
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
          ? "bg-[#68a60a] text-white font-bold dark:bg-[#acf328] dark:text-[#161D2A]"
          : "border border-[#68a60a] text-[#68a60a] bg-[#fafafa] dark:border-[#acf328] dark:text-[#acf328] dark:bg-[#161D2A]"
      }`}
    >
      {children}
    </button>
  );
}

interface BookModalProps {
  book: Book | null;
  isOpen: boolean;
  onClose: () => void;
}

function BookModal({ book, isOpen, onClose }: BookModalProps) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
    };
  }, [isOpen, onClose]);

  if (!isOpen || !book) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      onClick={onClose}
    >
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />

      {/* Modal Content */}
      <div
        className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto bg-zinc-50 dark:bg-[#161D2A] rounded-lg shadow-2xl border border-zinc-200 dark:border-zinc-700"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-start justify-between p-6 border-b border-zinc-200 dark:border-zinc-700">
          <div className="flex-1 pr-4">
            <h2 className="text-2xl font-bold text-zinc-900 dark:text-zinc-100 leading-tight">
              {book.name}
            </h2>
          </div>
          <button
            onClick={onClose}
            className="flex-shrink-0 p-2 rounded-full hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors"
            aria-label="Fechar modal"
          >
            <X size={20} className="text-zinc-600 dark:text-zinc-400" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6">
          <div className="flex gap-6 max-sm:flex-col">
            {/* Book Cover */}
            <div className="flex-shrink-0">
              <Image
                src={book.imageUrl}
                width={160}
                height={200}
                alt={`Cover for ${book.name}`}
                className="rounded shadow-lg"
              />
            </div>

            {/* Highlight Text */}
            <div className="flex-1">
              <blockquote className="text-lg leading-relaxed text-zinc-700 dark:text-zinc-300 italic border-l-4 border-[#68a60a] dark:border-[#acf328] pl-4">
                "{book.highlight}"
              </blockquote>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="px-6 py-4 bg-zinc-100 dark:bg-zinc-800/50 border-t border-zinc-200 dark:border-zinc-700 rounded-b-lg">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2 text-sm text-zinc-600 dark:text-zinc-400">
              <Check size={16} className="text-[#68a60a] dark:text-[#acf328]" strokeWidth={3} />
              <span>Book finished</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

const books: Book[] = [
  {
    name: "Django 5 by Example",
    imageUrl: "https://m.media-amazon.com/images/I/81vUrx78p9L.jpg",
    status: "in-progress",
  },
  {
    name: "Classic Computer Science Problems With Python",
    imageUrl: "https://m.media-amazon.com/images/I/81ltJW5jJmL.jpg",
    status: "pending",
  },
  {
    name: "Fluent React",
    imageUrl: "https://m.media-amazon.com/images/I/71LeIRBPrtL.jpg",
    status: "pending",
  },
  {
    name: "React Design Patterns and Best Practices",
    imageUrl: "https://m.media-amazon.com/images/I/71ZOTiUqmuL.jpg",
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
    name: "AI-Assisted Programming",
    imageUrl: "https://m.media-amazon.com/images/I/81Q1ydwpYLL._UF1000,1000_QL80_.jpg",
    status: "done",
    highlight: "AI-powered programming tools are powerful, but they’re not here to replace you. They’re more like assistants, designed to help you become an even better programmer.",
  },
  {
    name: "Product Backlog Building",
    imageUrl: "https://m.media-amazon.com/images/I/81RZV-FcqDS._UF1000,1000_QL80_.jpg",
    status: "done",
    highlight: "Agile teams work with continuous refinement and continuous delivery, and PBB makes this journey toward success easier.",
  },
  {
    name: "14 Habits of Highly Productive Developers",
    imageUrl: "https://m.media-amazon.com/images/I/719Siqxb0eL._UF894,1000_QL80_.jpg",
    status: "done",
    highlight: "Learning the fundamentals will prepare you for the future. If you decide to become a great developer, it’s important to understand the key concepts such as algorithms, logic, networking, accessibility, security, and user experience. You don’t necessarily need them to build your first app, but knowing them will help you create the next complex applications you’ll build in the future.",
  },
];

interface BookCardProps extends Book {
  onClick?: () => void;
}

function BookCard({ name, imageUrl, status, onClick }: BookCardProps) {
  const isDone = status === "done";

  return (
    <div
      className={`flex flex-col overflow-hidden rounded dark:ring-zinc-500 h-[324px] w-[280px] relative ${
        isDone ? 'cursor-pointer hover:scale-105 transition-transform duration-200' : ''
      }`}
      onClick={isDone ? onClick : undefined}
    >
      <Image
        src={imageUrl}
        width={280}
        height={324}
        alt={`Cover for ${name}`}
        className="absolute inset-0 w-full h-full"
      />
      <StatusBadge status={status} inProgressLabel={"Reading"} />

      {/* External Link Icon for completed books */}
      {isDone && (
        <div className="absolute bottom-3 right-3 bg-[#68a60a]/90 dark:bg-[#acf328]/90 p-2 rounded-full shadow-lg hover:bg-[#68a60a] dark:hover:bg-[#acf328] transition-colors">
          <ExternalLink
            size={16}
            className="text-white dark:text-[#161D2A]"
            strokeWidth={2.5}
          />
        </div>
      )}
    </div>
  );
}

export default function BooksPage() {
  const [activeFilter, setActiveFilter] = useState<FilterStatus>("all");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [selectedBook, setSelectedBook] = useState<Book | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
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

  const handleBookClick = (book: Book) => {
    if (book.status === "done" && book.highlight) {
      setSelectedBook(book);
      setIsModalOpen(true);
    }
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedBook(null);
  };

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
            <BookCard
              key={book.name}
              {...book}
              onClick={() => handleBookClick(book)}
            />
          ))}
        </div>
      </div>

      {/* Modal */}
      <BookModal
        book={selectedBook}
        isOpen={isModalOpen}
        onClose={handleCloseModal}
      />
    </>
  );
}
