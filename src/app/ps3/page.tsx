"use client";

import Image from "next/image";
import { useState } from "react";
import FloatingIcons from "../../components/FloatingIcons";
import { PlayStationIcons } from "../../components/PlayStationIcons";
import GameStatusBadge from "../../components/StatusBadge";
import StatusFilter, { FilterStatus } from "../../components/StatusFilter";

interface PS3Game {
  name: string;
  imageUrl: string;
  status: "in-progress" | "done" | "pending";
}

const ps3Games: PS3Game[] = [
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
    name: "Guitar Hero III",
    imageUrl: "https://m.media-amazon.com/images/I/81fa9l6X9aL.jpg",
    status: "done",
  },
];

function PS3GameCard({ name, imageUrl, status }: PS3Game) {
  return (
    <div className="flex flex-col overflow-hidden rounded dark:ring-zinc-500 h-[324px] w-[281px] relative">
      <Image
        src={imageUrl}
        width={310}
        height={324}
        alt={`Cover for ${name}`}
        className="w-full h-full object-cover"
      />
      <GameStatusBadge status={status} />
    </div>
  );
}

export default function PS3Page() {
  const [activeFilter, setActiveFilter] = useState<FilterStatus>("all");

  const filteredGames = ps3Games.filter((game) => {
    if (activeFilter === "all") return true;
    return game.status === activeFilter;
  });

  return (
    <>
      <FloatingIcons icons={PlayStationIcons} interval={700} />
      <div className="relative">
        <h1 className="mb-8 mt-4 text-center text-5xl max-sm:text-4xl">
          PS3
        </h1>

        {/* Status Filter */}
        <StatusFilter
          activeFilter={activeFilter}
          onFilterChange={setActiveFilter}
          type="games"
        />

        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 sm:gap-6 justify-items-center">
          {filteredGames.map((game) => (
            <PS3GameCard key={game.name} {...game} />
          ))}
        </div>
      </div>
    </>
  );
}
