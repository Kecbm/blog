"use client";

import { useEffect, useState } from "react";
import { ReactNode } from "react";

interface FloatingIcon {
  id: number;
  left: number;
  animationDuration: number;
  size: number;
  iconIndex: number;
}

interface FloatingIconsProps {
  icons: ReactNode[];
  interval?: number;
  zIndex?: string;
}

export default function FloatingIcons({ 
  icons, 
  interval = 600, 
  zIndex = "z-50" 
}: FloatingIconsProps) {
  const [floatingIcons, setFloatingIcons] = useState<FloatingIcon[]>([]);

  useEffect(() => {
    const createIcon = () => {
      const newIcon: FloatingIcon = {
        id: Date.now() + Math.random(),
        left: Math.random() * 100, // Posição horizontal aleatória (0-100%)
        animationDuration: 3 + Math.random() * 2, // Duração entre 3-5 segundos
        size: 20 + Math.random() * 10, // Tamanho entre 20-30px
        iconIndex: Math.floor(Math.random() * icons.length), // Ícone aleatório
      };

      setFloatingIcons(prev => [...prev, newIcon]);

      // Remove o ícone após a animação
      setTimeout(() => {
        setFloatingIcons(prev => prev.filter(icon => icon.id !== newIcon.id));
      }, newIcon.animationDuration * 1000);
    };

    // Cria um novo ícone no intervalo especificado
    const intervalId = setInterval(createIcon, interval);

    return () => clearInterval(intervalId);
  }, [icons.length, interval]);

  return (
    <div className={`fixed inset-0 pointer-events-none ${zIndex} overflow-hidden`}>
      {floatingIcons.map((icon) => (
        <div
          key={icon.id}
          className="absolute animate-float-up opacity-70"
          style={{
            left: `${icon.left}%`,
            bottom: '-50px',
            animationDuration: `${icon.animationDuration}s`,
            fontSize: `${icon.size}px`,
          }}
        >
          <div style={{ width: icon.size, height: icon.size }}>
            {icons[icon.iconIndex]}
          </div>
        </div>
      ))}
    </div>
  );
}
