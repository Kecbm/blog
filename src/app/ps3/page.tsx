import Image from "next/image";
import FloatingIcons from "../../components/FloatingIcons";
import { PlayStationIcons } from "../../components/PlayStationIcons";
import GameStatusBadge from "../../components/StatusBadge";

interface PS3Game {
  name: string;
  imageUrl: string;
  status: "in-progress" | "done" | "pending";
}

const ps3Games: PS3Game[] = [
  {
    name: "CSGO",
    imageUrl: "https://m.media-amazon.com/images/I/81L8-mjNlrL._UF1000,1000_QL80_.jpg",
    status: "in-progress",
  },
  {
    name: "Guitar Hero III",
    imageUrl: "https://m.media-amazon.com/images/I/81fa9l6X9aL.jpg",
    status: "pending",
  },
  {
    name: "Need For Speed Underground",
    imageUrl: "https://m.media-amazon.com/images/I/71LDdKquu4L._UF894,1000_QL80_.jpg",
    status: "pending",
  },
  {
    name: "Need For Speed Underground 2",
    imageUrl: "https://m.media-amazon.com/images/I/813eYe6zO7L.jpg",
    status: "pending",
  },
  {
    name: "Need For Speed Most Wantead",
    imageUrl: "https://m.media-amazon.com/images/I/71-WJMXvaLL._AC_UF1000,1000_QL80_.jpg",
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
    name: "GTA 5",
    imageUrl: "https://m.media-amazon.com/images/I/71FVWhz78fL._UF894,1000_QL80_.jpg",
    status: "pending",
  },
  {
    name: "Red Dead Redemption",
    imageUrl: "https://m.media-amazon.com/images/I/81bcTFXk-rL._UF894,1000_QL80_.jpg",
    status: "pending",
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
  return (
    <>
      <FloatingIcons icons={PlayStationIcons} interval={700} />
      <div className="relative">
        <h1 className="mb-16 mt-4 text-center text-5xl max-sm:text-4xl">
          PS3
        </h1>
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 sm:gap-6 justify-items-center">
          {ps3Games.map((game) => (
            <PS3GameCard key={game.name} {...game} />
          ))}
        </div>
      </div>
    </>
  );
}
