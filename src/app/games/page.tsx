"use client";

import Image from "next/image";
import { useState } from "react";
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

  const filteredGames = games.filter((game) => {
    if (activeFilter === "all") return true;
    return game.status === activeFilter;
  });

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
          onFilterChange={setActiveFilter}
          type="games"
          labels={{
            all: t.games.filter.allGames,
            pending: t.games.filter.pending,
            inProgress: t.games.filter.inProgress,
            done: t.games.filter.done,
          }}
        />

        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 sm:gap-6 justify-items-center">
          {filteredGames.map((game) => (
            <GameCard
              key={game.name}
              {...game}
              badgeLabels={t.games.badges}
            />
          ))}
        </div>
      </div>
    </>
  );
}
