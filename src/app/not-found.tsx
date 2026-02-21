'use client';

import { useState } from 'react';
import { ChevronLeft, ChevronRight, Volume2, VolumeX } from 'lucide-react';

export default function NotFound() {
  const [currentReel, setCurrentReel] = useState(0);
  const [isMuted, setIsMuted] = useState(true);

  // Array de reels - você pode substituir pelos seus próprios reels
  const reels = [
    {
      id: 1,
      title: "Ressuscitou",
      videoUrl: "/reels/1.mp4",
      description: "Comunidade Católica Shalom"
    },
    {
      id: 2,
      title: "",
      videoUrl: "/reels/2.mp4",
      description: "Orquestra Manoel Rabelo"
    },
    {
      id: 3,
      title: "",
      videoUrl: "/reels/3.mp4",
      description: ""
    },
    {
      id: 4,
      title: "Cavalgada",
      videoUrl: "/reels/4.mp4",
      description: "Roberto Carlos"
    },
    {
      id: 5,
      title: "Boate Azul",
      videoUrl: "/reels/5.mp4",
      description: "Bruno & Marrone"
    },
    {
      id: 6,
      title: "Volta vai",
      videoUrl: "/reels/6.mp4",
      description: "Simone & Simaria"
    },
  ];

  const nextReel = () => {
    setCurrentReel((prev) => (prev + 1) % reels.length);
  };

  const prevReel = () => {
    setCurrentReel((prev) => (prev - 1 + reels.length) % reels.length);
  };
  return (
    <div className="mb-16 mt-16 text-center">
      <h1 className="mb-6 text-5xl max-sm:text-4xl">
        This page doesn&apos;t exist.
      </h1>
      <p className="text-sm mb-8">
        Oops! It looks like you’ve taken a wrong turn. No worries, you can head back to the{" "}
        <a
          href="/"
          className="notfound-highlight"
        >
          Home
        </a>{" "}
        page, or if you’re curious, check out the{" "}
        <a
          href="/ps3"
          className="notfound-highlight"
        >
          PS3
        </a>{" "}
        games I&apos;ve been enjoying lately or the{" "}
        <a
          href="/books"
          className="notfound-highlight"
        >
          books
        </a>{" "}
        I&apos;m currently reading!
      </p>

      {/* Carrossel de Reels */}
      <div className="mt-12">
        <h2 className="text-2xl font-bold mb-6">Before tech, I spent 10 years as a professional musician. Here are some of the groups I played with! 🎷</h2>

        <div className="relative max-w-sm mx-auto">
          {/* Container do Reel */}
          <div className="relative aspect-[9/16] bg-zinc-200 dark:bg-zinc-800 rounded-2xl overflow-hidden shadow-2xl">
            <video
              src={reels[currentReel].videoUrl}
              className="w-full h-full object-cover transition-opacity duration-300"
              autoPlay
              loop
              muted={isMuted}
              playsInline
            />

            {/* Overlay com informações */}
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6 text-white">
              <h3 className="text-xl font-bold mb-2">{reels[currentReel].title}</h3>
              <p className="text-sm opacity-90">{reels[currentReel].description}</p>
            </div>

            {/* Botão de Som */}
            <button
              onClick={() => setIsMuted(!isMuted)}
              className="absolute top-4 right-4 bg-black/30 hover:bg-black/40 text-white rounded-full p-2.5 transition-all hover:scale-105 backdrop-blur-sm"
              aria-label={isMuted ? "Ativar som" : "Desativar som"}
            >
              {isMuted ? <VolumeX className="w-5 h-5" /> : <Volume2 className="w-5 h-5" />}
            </button>

            {/* Botão Anterior */}
            <button
              onClick={prevReel}
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/30 hover:bg-black/40 text-white rounded-full p-2.5 transition-all hover:scale-105 backdrop-blur-sm"
              aria-label="Reel anterior"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            {/* Botão Próximo */}
            <button
              onClick={nextReel}
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/30 hover:bg-black/40 text-white rounded-full p-2.5 transition-all hover:scale-105 backdrop-blur-sm"
              aria-label="Próximo reel"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>

          {/* Indicadores */}
          <div className="flex justify-center gap-2 mt-4">
            {reels.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentReel(index)}
                className={`h-2 rounded-full transition-all ${
                  index === currentReel
                    ? 'w-8 bg-[#2a67e6] dark:bg-[#6190f9]'
                    : 'w-2 bg-zinc-300 dark:bg-zinc-600 hover:bg-zinc-400 dark:hover:bg-zinc-500'
                }`}
                aria-label={`Ir para reel ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
