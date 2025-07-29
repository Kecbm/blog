"use client";

import { useState, useRef } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface PetCarouselProps {
  name: string;
  images: string[];
}

export default function PetCarousel({ name, images }: PetCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const startX = useRef(0);
  const currentX = useRef(0);
  const threshold = 50; // Distância mínima para considerar um swipe

  const nextImage = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const goToImage = (index: number) => {
    setCurrentIndex(index);
  };

  // Handlers para touch (mobile/tablet)
  const handleTouchStart = (e: React.TouchEvent) => {
    setIsDragging(true);
    startX.current = e.touches[0].clientX;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isDragging) return;
    currentX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (!isDragging) return;
    setIsDragging(false);

    const diffX = startX.current - currentX.current;

    if (Math.abs(diffX) > threshold) {
      if (diffX > 0) {
        nextImage(); // Swipe para esquerda = próxima imagem
      } else {
        prevImage(); // Swipe para direita = imagem anterior
      }
    }
  };

  return (
    <div className="flex flex-col overflow-hidden rounded ring-1 ring-zinc-400 dark:ring-zinc-500">
      <div className="p-4">
        <h3 className="text-lg font-semibold">{name}</h3>
      </div>
      
      <div
        className="relative group select-none"
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        <Image
          src={images[currentIndex]}
          width={620}
          height={324}
          alt={`Photo ${currentIndex + 1} of ${name}`}
          className="aspect-video object-cover pointer-events-none"
          draggable={false}
        />
        
        {/* Seta esquerda */}
        <button
          onClick={prevImage}
          className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white rounded-full p-2 opacity-0 group-hover:opacity-100 transition-opacity"
          aria-label="Previous image"
        >
          <ChevronLeft size={20} />
        </button>
        
        {/* Seta direita */}
        <button
          onClick={nextImage}
          className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white rounded-full p-2 opacity-0 group-hover:opacity-100 transition-opacity"
          aria-label="Next image"
        >
          <ChevronRight size={20} />
        </button>
        
        {/* Indicadores (bolinhas) */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => goToImage(index)}
              className={`w-3 h-3 rounded-full transition-colors ${
                index === currentIndex
                  ? "bg-[#9142db] dark:bg-[#921CF5]"
                  : "bg-white/50 hover:bg-white/70"
              }`}
              aria-label={`Go to image ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
