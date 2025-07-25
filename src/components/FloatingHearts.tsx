"use client";

import { useEffect, useState } from "react";
import { Heart } from "lucide-react";

interface FloatingHeart {
  id: number;
  left: number;
  animationDuration: number;
  size: number;
}

export default function FloatingHearts() {
  const [hearts, setHearts] = useState<FloatingHeart[]>([]);

  useEffect(() => {
    const createHeart = () => {
      const newHeart: FloatingHeart = {
        id: Date.now() + Math.random(),
        left: Math.random() * 100, // Posição horizontal aleatória (0-100%)
        animationDuration: 3 + Math.random() * 2, // Duração entre 3-5 segundos
        size: 20 + Math.random() * 10, // Tamanho entre 20-30px
      };

      setHearts(prev => [...prev, newHeart]);

      // Remove o coração após a animação
      setTimeout(() => {
        setHearts(prev => prev.filter(heart => heart.id !== newHeart.id));
      }, newHeart.animationDuration * 1000);
    };

    // Cria um novo coração a cada 400ms
    const interval = setInterval(createHeart, 600);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-50 overflow-hidden">
      {hearts.map((heart) => (
        <div
          key={heart.id}
          className="absolute animate-float-up opacity-70"
          style={{
            left: `${heart.left}%`,
            bottom: '-50px',
            animationDuration: `${heart.animationDuration}s`,
          }}
        >
          <Heart
            size={heart.size}
            className="text-[#9142db] fill-[#9142db] dark:text-[#921CF5] dark:fill-[#921CF5]"
          />
        </div>
      ))}
    </div>
  );
}
