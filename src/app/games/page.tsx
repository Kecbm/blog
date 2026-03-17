"use client";

import Image from "next/image";
import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import FloatingIcons from "../../components/FloatingIcons";
import { PlayStationIcons } from "../../components/PlayStationIcons";
import GameStatusBadge from "../../components/StatusBadge";
import StatusFilter, { FilterStatus } from "../../components/StatusFilter";
import { useTranslation } from "@/src/hooks/useTranslation";

interface Game {
  name: string;
  imageUrl: string;
  status: "in-progress" | "done" | "pending";
}

const games: Game[] = [
  {
    name: "GTA 5",
    imageUrl: "https://m.media-amazon.com/images/I/71FVWhz78fL._UF894,1000_QL80_.jpg",
    status: "in-progress",
  },
  {
    name: "CSGO",
    imageUrl: "https://m.media-amazon.com/images/I/81L8-mjNlrL._UF1000,1000_QL80_.jpg",
    status: "pending",
  },
  {
    name: "Far Cry 3",
    imageUrl: "https://m.media-amazon.com/images/I/91l1+rbikqL._AC_UF1000,1000_QL80_.jpg",
    status: "pending",
  },
  {
    name: "Midnight Club LA",
    imageUrl: "https://m.media-amazon.com/images/I/81i6mWGgX5L._AC_UF1000,1000_QL80_.jpg",
    status: "pending",
  },
  {
    name: "Burnout Paradise",
    imageUrl: "https://m.media-amazon.com/images/I/61T9eWrgwhL.jpg",
    status: "pending",
  },
  {
    name: "Gran Turismo 6",
    imageUrl: "https://m.media-amazon.com/images/I/714eNHubwSL._UF1000,1000_QL80_.jpg",
    status: "pending",
  },
  {
    name: "The Last Of Us",
    imageUrl: "https://m.media-amazon.com/images/I/A1dXfW1yPNL.jpg",
    status: "pending",
  },
  {
    name: "God Of War",
    imageUrl: "https://m.media-amazon.com/images/I/71DG2S+Y+DL.jpg",
    status: "pending",
  },
  {
    name: "Red Dead Redemption",
    imageUrl: "https://m.media-amazon.com/images/I/81bcTFXk-rL._UF894,1000_QL80_.jpg",
    status: "pending",
  },
  {
    name: "Killzone 3",
    imageUrl: "https://m.media-amazon.com/images/I/71MNXLe0fAL._UF894,1000_QL80_.jpg",
    status: "pending",
  },
  {
    name: "MTX Mototrax",
    imageUrl: "https://m.media-amazon.com/images/I/91T0jNVxbML._AC_UF894,1000_QL80_.jpg",
    status: "pending",
  },
  {
    name: "Need For Speed Most Wantead",
    imageUrl: "https://m.media-amazon.com/images/I/71-WJMXvaLL._AC_UF1000,1000_QL80_.jpg",
    status: "pending",
  },
  {
    name: "Grand Theft Auto San Andreas",
    imageUrl: "https://m.media-amazon.com/images/I/71-hQSqBXTL._AC_UF1000,1000_QL80_.jpg",
    status: "pending",
  },
  {
    name: "God of War",
    imageUrl: "https://m.media-amazon.com/images/I/91VKfyGGkYL.jpg",
    status: "pending",
  },
  {
    name: "Tony Hawk's Underground 2",
    imageUrl: "https://m.media-amazon.com/images/I/51TT1JF5SXL._AC_UF1000,1000_QL80_.jpg",
    status: "pending",
  },
  {
    name: "Crash",
    imageUrl: "https://m.media-amazon.com/images/I/51GwB8AKooL._AC_UF1000,1000_QL80_.jpg",
    status: "pending",
  },
  {
    name: "Resident Evil 4",
    imageUrl: "https://m.media-amazon.com/images/I/71iXh6wFHNL._AC_UF1000,1000_QL80_.jpg",
    status: "pending",
  },
  {
    name: "Black",
    imageUrl: "https://m.media-amazon.com/images/I/61XL3sJl-YL._AC_UF1000,1000_QL80_.jpg",
    status: "pending",
  },
  {
    name: "Downhill Domination",
    imageUrl: "https://m.media-amazon.com/images/I/51K1+VtfMnL._AC_UF894,1000_QL80_.jpg",
    status: "pending",
  },
  {
    name: "Shadow Of The Colossus",
    imageUrl: "https://m.media-amazon.com/images/I/51SASA0K6AL._AC_UF894,1000_QL80_.jpg",
    status: "pending",
  },
  {
    name: "Guitar Hero III",
    imageUrl: "https://m.media-amazon.com/images/I/81fa9l6X9aL.jpg",
    status: "done",
  },
];

function GameCard({ name, imageUrl, status, badgeLabels }: Game & { badgeLabels: { playing: string; completed: string; pending: string } }) {
  return (
    <div className="flex flex-col overflow-hidden rounded dark:ring-zinc-500 h-[324px] w-[281px] relative">
      <Image
        src={imageUrl}
        width={310}
        height={324}
        alt={`Cover for ${name}`}
        className="w-full h-full object-cover"
      />
      <GameStatusBadge
        status={status}
        labels={{
          inProgress: badgeLabels.playing,
          completed: badgeLabels.completed,
          pending: badgeLabels.pending,
        }}
      />
    </div>
  );
}

export default function GamesPage() {
  const { t } = useTranslation();
  const [activeFilter, setActiveFilter] = useState<FilterStatus>("all");
  const [currentPage, setCurrentPage] = useState(1);
  const gamesPerPage = 10;

  // Filtrar jogos por status
  const filteredGames = games.filter((game) => {
    if (activeFilter === "all") return true;
    return game.status === activeFilter;
  });

  // Calcular paginação
  const totalPages = Math.ceil(filteredGames.length / gamesPerPage);
  const startIndex = (currentPage - 1) * gamesPerPage;
  const endIndex = startIndex + gamesPerPage;
  const currentGames = filteredGames.slice(startIndex, endIndex);

  // Resetar para página 1 quando mudar o filtro
  const handleFilterChange = (filter: FilterStatus) => {
    setActiveFilter(filter);
    setCurrentPage(1);
  };

  const goToPage = (page: number) => {
    setCurrentPage(page);
    // Scroll suave para o topo da página
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <FloatingIcons icons={PlayStationIcons} interval={700} />
      <div className="relative">
        <h1 className="mb-8 mt-4 text-center text-5xl max-sm:text-4xl">
          {t.games.title}
        </h1>

        {/* Status Filter */}
        <StatusFilter
          activeFilter={activeFilter}
          onFilterChange={handleFilterChange}
          type="games"
          labels={{
            all: t.games.filter.allGames,
            pending: t.games.filter.pending,
            inProgress: t.games.filter.inProgress,
            done: t.games.filter.done,
          }}
        />

        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 sm:gap-6 justify-items-center">
          {currentGames.map((game) => (
            <GameCard
              key={game.name}
              {...game}
              badgeLabels={t.games.badges}
            />
          ))}
        </div>

        {/* Paginação */}
        {totalPages > 1 && (
          <div className="flex items-center justify-center gap-2 mt-8 mb-4">
            {/* Botão Anterior */}
            <button
              onClick={() => goToPage(currentPage - 1)}
              disabled={currentPage === 1}
              className="p-2 rounded-full border border-[#68a60a] text-[#68a60a] bg-[#fafafa] dark:border-[#acf328] dark:text-[#acf328] dark:bg-[#161D2A] hover:opacity-80 disabled:opacity-30 disabled:cursor-not-allowed"
              aria-label="Previous page"
            >
              <ChevronLeft size={18} />
            </button>

            {/* Números das páginas */}
            <div className="flex gap-2">
              {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                <button
                  key={page}
                  onClick={() => goToPage(page)}
                  className={`min-w-[36px] h-[36px] px-3 rounded-full font-bold text-sm hover:opacity-80 ${
                    currentPage === page
                      ? 'bg-[#68a60a] text-white dark:bg-[#acf328] dark:text-[#161D2A]'
                      : 'border border-[#68a60a] text-[#68a60a] bg-[#fafafa] dark:border-[#acf328] dark:text-[#acf328] dark:bg-[#161D2A]'
                  }`}
                  aria-label={`Go to page ${page}`}
                  aria-current={currentPage === page ? 'page' : undefined}
                >
                  {page}
                </button>
              ))}
            </div>

            {/* Botão Próximo */}
            <button
              onClick={() => goToPage(currentPage + 1)}
              disabled={currentPage === totalPages}
              className="p-2 rounded-full border border-[#68a60a] text-[#68a60a] bg-[#fafafa] dark:border-[#acf328] dark:text-[#acf328] dark:bg-[#161D2A] hover:opacity-80 disabled:opacity-30 disabled:cursor-not-allowed transition-all"
              aria-label="Next page"
            >
              <ChevronRight size={18} />
            </button>
          </div>
        )}
      </div>
    </>
  );
}
