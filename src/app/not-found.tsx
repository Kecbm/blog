"use client";

import Image from "next/image";
import { usePathname } from "next/navigation";

interface PS3Game {
  name: string;
  imageUrl: string;
}

const ps3Games: PS3Game[] = [
  {
    name: "Gran Turismo 6",
    imageUrl: "https://m.media-amazon.com/images/I/714eNHubwSL._UF1000,1000_QL80_.jpg",
  },
  {
    name: "Guitar Hero III",
    imageUrl: "https://upload.wikimedia.org/wikipedia/pt/b/be/Guitar_Hero_3_capa.png",
  },
  {
    name: "FIFA 19",
    imageUrl: "https://m.media-amazon.com/images/I/813OLtvhFaL.jpg",
  },
];

function PS3GameCard({ name, imageUrl }: PS3Game) {
  return (
    <div className="flex flex-col overflow-hidden rounded ring-1 ring-zinc-400 dark:ring-zinc-500 h-[324px]">
      <Image
        src={imageUrl}
        width={310}
        height={324}
        alt={`Cover for ${name}`}
        className="w-full h-full object-cover"
      />
    </div>
  );
}

export default function NotFound() {
  const pathname = usePathname();
  const isPS3Route = pathname === "/ps3";

  return (
    <>
      {!isPS3Route && (
        <div className="mb-16 mt-4 text-center">
          <h1 className="mb-6 text-5xl max-sm:text-4xl">
            This page doesn&apos;t exist.
          </h1>
          <p className="text-lg text-zinc-600 dark:text-zinc-400 max-w-2xl mx-auto">
            Oops! Looks like you took the wrong turn. You can head back to the{" "}
            <a
              href="/"
              className="about-highlight"
            >
              Home
            </a>{" "}
            page, or stick around and check out the PS3 games I&apos;m currently playing just below!
          </p>
        </div>
      )}
      {isPS3Route && (
        <h1 className="mb-16 mt-4 text-center text-5xl max-sm:text-4xl">
          PS3
        </h1>
      )}
      <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 sm:gap-6">
        {ps3Games.map((game) => (
          <PS3GameCard key={game.name} {...game} />
        ))}
      </div>
    </>
  );
}
