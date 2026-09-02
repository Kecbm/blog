'use client';

import { useState } from 'react';
import { ChevronLeft, ChevronRight, Volume2, VolumeX, Music } from 'lucide-react';
import { useTranslation } from '@/src/hooks/useTranslation';

export default function NotFound() {
  const { t } = useTranslation();
  const [currentReel, setCurrentReel] = useState(0);
  const [isMuted, setIsMuted] = useState(true);
  const [isTransitioning, setIsTransitioning] = useState(false);

  // Array de reels - você pode substituir pelos seus próprios reels
  const reels = [
    {
      id: 1,
      title: t.notFound.reels.reel1,
      videoUrl: "/reels/1.mp4",
      description: "Comunidade Católica Shalom"
    },
    {
      id: 2,
      title: t.notFound.reels.reel2,
      videoUrl: "/reels/2.mp4",
      description: "Orquestra Manoel Rabelo"
    },
    {
      id: 3,
      title: t.notFound.reels.reel3,
      videoUrl: "/reels/3.mp4",
      description: ""
    },
    {
      id: 4,
      title: t.notFound.reels.reel4,
      videoUrl: "/reels/4.mp4",
      description: "Roberto Carlos"
    },
    {
      id: 5,
      title: t.notFound.reels.reel5,
      videoUrl: "/reels/5.mp4",
      description: "Bruno & Marrone"
    },
    {
      id: 6,
      title: t.notFound.reels.reel6,
      videoUrl: "/reels/6.mp4",
      description: "Frank Sinatra"
    },
    {
      id: 7,
      title: t.notFound.reels.reel7,
      videoUrl: "/reels/7.mp4",
      description: "Simone & Simaria"
    },
    {
      id: 8,
      title: t.notFound.reels.reel8,
      videoUrl: "/reels/8.mp4",
      description: "Comunidade Católica Shalom"
    },
    {
      id: 9,
      title: t.notFound.reels.reel9,
      videoUrl: "/reels/9.mp4",
      description: "Orquestra Manoel Rabelo"
    },
    {
      id: 10,
      title: t.notFound.reels.reel10,
      videoUrl: "/reels/10.mp4",
      description: ""
    },
    {
      id: 11,
      title: t.notFound.reels.reel11,
      videoUrl: "/reels/11.mp4",
      description: "Whitney Houston"
    },
  ];

  const nextReel = () => {
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentReel((prev) => (prev + 1) % reels.length);
      setIsTransitioning(false);
    }, 300);
  };

  const prevReel = () => {
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentReel((prev) => (prev - 1 + reels.length) % reels.length);
      setIsTransitioning(false);
    }, 300);
  };

  const goToReel = (index: number) => {
    if (index === currentReel) return;
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentReel(index);
      setIsTransitioning(false);
    }, 300);
  };
  return (
    <div className="mb-16 mt-16 text-center">
      <div className="flex items-center justify-center gap-4 mb-6">
        <Music size={80} strokeWidth={2} />
        <h1 className="notfound-title text-8xl max-sm:text-7xl font-bold">404</h1>
        <Music size={80} strokeWidth={2} />
      </div>
      <h2 className="mb-6 text-5xl max-sm:text-4xl">
        {t.notFound.title}
      </h2>
      {/* Carrossel de Reels */}
      <div className="mt-12">
        <p className="text-sm mb-8">{t.notFound.intro}</p>

        <div className="relative max-w-sm mx-auto">
          {/* Container do Reel */}
          <div className="relative aspect-[9/16] bg-zinc-200 dark:bg-zinc-800 rounded-2xl overflow-hidden shadow-2xl">
            <video
              key={reels[currentReel].id}
              src={reels[currentReel].videoUrl}
              className={`w-full h-full object-cover transition-opacity duration-500 ${
                isTransitioning ? 'opacity-0' : 'opacity-100'
              }`}
              autoPlay
              loop
              muted={isMuted}
              playsInline
            />

            {/* Overlay com informações */}
            <div className={`absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6 text-white transition-opacity duration-500 ${
              isTransitioning ? 'opacity-0' : 'opacity-100'
            }`}>
              <h3 className="text-xl font-bold mb-2">{reels[currentReel].title}</h3>
              <p className="text-sm opacity-90">{reels[currentReel].description}</p>
            </div>

            {/* Botão de Som */}
            <button
              onClick={() => setIsMuted(!isMuted)}
              className="absolute top-4 right-4 bg-black/30 hover:bg-black/40 text-white rounded-full p-2.5 transition-all hover:scale-105 backdrop-blur-sm"
              aria-label={isMuted ? t.notFound.unmuteAriaLabel : t.notFound.muteAriaLabel}
            >
              {isMuted ? <VolumeX className="w-5 h-5" /> : <Volume2 className="w-5 h-5" />}
            </button>

            {/* Botão Anterior */}
            <button
              onClick={prevReel}
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/30 hover:bg-black/40 text-white rounded-full p-2.5 transition-all hover:scale-105 backdrop-blur-sm"
              aria-label={t.notFound.previousReelAriaLabel}
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            {/* Botão Próximo */}
            <button
              onClick={nextReel}
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/30 hover:bg-black/40 text-white rounded-full p-2.5 transition-all hover:scale-105 backdrop-blur-sm"
              aria-label={t.notFound.nextReelAriaLabel}
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>

          {/* Indicadores */}
          <div className="flex justify-center gap-2 mt-4">
            {reels.map((_, index) => (
              <button
                key={index}
                onClick={() => goToReel(index)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  index === currentReel
                    ? 'w-8 bg-[#2a67e6] dark:bg-[#6190f9]'
                    : 'w-2 bg-zinc-300 dark:bg-zinc-600 hover:bg-zinc-400 dark:hover:bg-zinc-500'
                }`}
                aria-label={`${t.notFound.goToReelAriaLabel} ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
