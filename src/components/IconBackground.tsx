"use client";

import React, { useEffect, useState } from "react";
import {
  // Programação
  Terminal, FileCode, Binary, Bot, Bug, Database, CodeXml, Home, GitBranch, Coffee, SquareTerminal, BrainIcon, Server, Cpu,

  // Tecnologia
  Monitor, Smartphone, Wifi, Earth, FlaskConical, TestTubeDiagonal, Satellite, SigmaIcon, Fingerprint, Router,

  // Estudos
  BookOpen, GraduationCap, Lightbulb, Brain, Library,

  // Leitura
  Book, BookMarked, Bookmark, Glasses, Newspaper,

  // Academia
  Dumbbell, Activity, Heart, Zap, Target, Timer, TrendingUp, Award, Trophy, Medal,

  // Bicicleta
  Bike, MapPin, Compass, Mountain, Wind, Route, Navigation, Map, Flag, Milestone,

  // Animais
  Cat, PawPrint, Dog,

  // Jogos
  Castle, Gamepad2, Ghost, Sword, Star, Joystick, Gamepad, Shapes,

  // Música
  Mic, Volume2, Headphones, Drum, KeyboardMusic, PianoIcon, FileMusic, Guitar, Disc3Icon, Music, Music2, Music3, Music4,
} from "lucide-react";

// Lista de todos os ícones disponíveis
const allIcons = [
  Terminal, Monitor, BookOpen, Dumbbell, Bike, Cat, Castle, Mic, SquareTerminal, Gamepad,
  FileCode, Smartphone, GraduationCap, Activity, MapPin, PawPrint, Gamepad2, Volume2, Newspaper, Music,
  Binary, Wifi, Lightbulb, Heart, Compass, Dog, Ghost, Headphones, Trophy, Shapes,
  Bot, Earth, Brain, Zap, Mountain, Wind, Drum, Home, Medal, Music2,
  Bug, FlaskConical, Library, Target, Route, Sword, KeyboardMusic, Fingerprint, Flag, Music3,
  Database, TestTubeDiagonal, Book, Timer, Navigation, Star, PianoIcon, Bookmark, Disc3Icon, Music4,
  CodeXml, Satellite, SigmaIcon, BookMarked, TrendingUp, Map, Joystick, FileMusic, BrainIcon, Server,
  GitBranch, Router, Glasses, Award, Mountain, Milestone, Guitar, Coffee, Milestone, Cpu,
];

// Configurações da grade para distribuição uniforme
const GRID_ROWS = 10;
const GRID_COLS = 10;
const TOTAL_POSITIONS = GRID_ROWS * GRID_COLS;
const ICON_COUNT = allIcons.length;

// Interface para o estado do ícone (apenas casas pretas do xadrez)
interface BackgroundIcon {
  IconComponent: React.ElementType;
  x: number;
  y: number;
  rotation: number;
  isLightSquare: boolean; // Sempre false, mantido para compatibilidade
}

// CSS para os ícones nas casas pretas do xadrez com estabilidade mobile
const customCss = `
  .icon-chess-black {
    transition: opacity 0.3s ease;
    opacity: 0.25;
  }

  .icon-chess-black:hover {
    opacity: 0.8;
  }

  /* Estabilidade para mobile */
  @media (max-width: 768px) {
    .icon-chess-black {
      /* Força estabilidade dos ícones individuais e previne repintura */
      backface-visibility: hidden !important;
      -webkit-backface-visibility: hidden !important;
      will-change: opacity !important;
    }
  }
`;

export default function IconBackground() {
  const [isClient, setIsClient] = useState(false);
  const [icons, setIcons] = useState<BackgroundIcon[]>([]);

  // 1. Geração de Ícones e Posições (apenas casas pretas)
  const generateIcons = () => {
    const generated: BackgroundIcon[] = [];
    let iconIndex = 0; // Contador separado para os ícones

    for (let i = 0; i < TOTAL_POSITIONS; i++) {
      // Determina a posição na grade (0 a 100%)
      const row = Math.floor(i / GRID_COLS);
      const col = i % GRID_COLS;

      // Determina se é uma casa clara ou escura (padrão xadrez)
      // Casa escura quando a soma de row + col é ímpar
      const isLightSquare = (row + col) % 2 === 0;

      // Só adiciona ícones nas casas escuras (pretas)
      if (!isLightSquare) {
        // Distribuição percentual com margem (5% a 95%)
        const xPercent = 5 + (col / (GRID_COLS - 1)) * 90;
        const yPercent = 5 + (row / (GRID_ROWS - 1)) * 90;

        // Seleciona um ícone da lista, repetindo se necessário (loop)
        const IconComponent = allIcons[iconIndex % ICON_COUNT];

        // Randomiza apenas a rotação inicial
        const randomRotation = Math.floor(Math.random() * 360);

        generated.push({
          IconComponent,
          x: xPercent,
          y: yPercent,
          rotation: randomRotation,
          isLightSquare: false, // Sempre false, pois só geramos casas escuras
        });

        iconIndex++; // Incrementa apenas quando adiciona um ícone
      }
    }

    return generated;
  };

  useEffect(() => {
    setIsClient(true);
    // Cria ícones apenas uma vez no cliente
    if (typeof window !== 'undefined') {
      setIcons(generateIcons());
    }
  }, []);

  // 2. Renderização
  if (!isClient) {
    return null;
  }

  return (
    <>
      {/* Estilos CSS personalizados */}
      <style>{customCss}</style>

      <div
        /* FIX MOBILE:
           Alterado de 'inset-0' para 'top-0 left-0 w-full h-screen'.
           'inset-0' inclui 'bottom: 0', que se move quando a barra de URL do mobile aparece/some,
           causando o redimensionamento do container e o "pulo" dos ícones.
           'h-screen' mantém uma altura estável (100vh) que ignora o redimensionamento da barra de URL em navegadores modernos.
        */
        className="fixed top-0 left-0 w-full h-screen pointer-events-none z-0 overflow-hidden bg-white/5 dark:bg-black/5 icon-background-container"
        aria-hidden="true"
      >
        {icons.map((icon, index) => {
          const IconComponent = icon.IconComponent;

          return (
            <div
              key={index}
              className="absolute text-gray-500 dark:text-gray-400 icon-chess-black"
              style={{
                left: `${icon.x}%`,
                top: `${icon.y}%`,
                // Aplica apenas a rotação inicial estática e centraliza o elemento
                transform: `translate(-50%, -50%) rotate(${icon.rotation}deg)`,
                // Garante que o ícone é sutil e não rouba o foco
                color: 'currentColor',
              }}
            >
              <IconComponent
                // Tamanho responsivo para os ícones
                className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6"
              />
            </div>
          );
        })}
      </div>
    </>
  );
}
