"use client";

import { useEffect, useState } from "react";
import {
  // Programação
  Terminal,
  FileCode,
  Binary,
  Bot,
  Bug,
  Database,
  CodeXml,
  Home,
  GitBranch,
  Coffee,
  SquareTerminal,
  BrainIcon,
  Server,
  Cpu,

  // Tecnologia
  Monitor,
  Smartphone,
  Wifi,
  Earth,
  FlaskConical,
  TestTubeDiagonal,
  Satellite,
  SigmaIcon,
  Fingerprint,
  Router,

  // Estudos
  BookOpen,
  GraduationCap,
  Lightbulb,
  Brain,
  Library,

  // Leitura
  Book,
  BookMarked,
  Bookmark,
  Glasses,
  Newspaper,

  // Academia
  Dumbbell,
  Activity,
  Heart,
  Zap,
  Target,
  Timer,
  TrendingUp,
  Award,
  Trophy,
  Medal,

  // Bicicleta
  Bike,
  MapPin,
  Compass,
  Mountain,
  Wind,
  Route,
  Navigation,
  Map,
  Flag,
  Milestone,

  // Animais
  Cat,
  PawPrint,
  Dog,

  // Jogos
  Castle,
  Gamepad2,
  Ghost,
  PuzzleIcon,
  TrophyIcon,
  Sword,
  Star,
  Joystick,
  Gamepad,
  Shapes,

  // Música
  Mic,
  Volume2,
  Headphones,
  Drum,
  KeyboardMusic,
  PianoIcon,
  FileMusic,
  Guitar,
  Disc3Icon,
  Music,
  Music2,
  Music3,
  Music4,
} from "lucide-react";

interface AnimatedIcon {
  IconComponent: any;
  id: string;
  size: 'small' | 'medium' | 'large';
  rotation: number;
}

export default function IconBackground() {
  const [isClient, setIsClient] = useState(false);
  const [icons, setIcons] = useState<AnimatedIcon[]>([]);

  // Função para criar grade de ícones preenchendo 100% da tela
  const createFullScreenIcons = () => {
    const iconsArray: AnimatedIcon[] = [];
    const totalIcons = allIcons.length; // 80 ícones disponíveis

    // Calcular grade para máxima distribuição por toda a tela
    const screenWidth = typeof window !== 'undefined' ? window.innerWidth : 1200;
    const screenHeight = typeof window !== 'undefined' ? window.innerHeight : 800;

    // Forçar uma grade maior para garantir distribuição completa
    // Calcular baseado em espaçamento generoso
    const targetSpacingX = 150; // Espaçamento horizontal muito maior
    const targetSpacingY = 120; // Espaçamento vertical muito maior

    // Calcular grade mínima baseada na tela
    const minCols = Math.max(8, Math.floor(screenWidth / targetSpacingX));
    const minRows = Math.max(6, Math.floor(screenHeight / targetSpacingY));

    // Para garantir que todos os 80 ícones apareçam, calcular grade necessária
    const totalPositionsNeeded = totalIcons * 2; // Padrão xadrez
    const calculatedCols = Math.ceil(Math.sqrt(totalPositionsNeeded * 1.5));
    const calculatedRows = Math.ceil(totalPositionsNeeded / calculatedCols);

    // Usar a maior grade para garantir distribuição completa
    const cols = Math.max(minCols, calculatedCols);
    const finalRows = Math.max(minRows, calculatedRows);

    let iconIndex = 0;

    for (let row = 0; row < finalRows && iconIndex < totalIcons; row++) {
      for (let col = 0; col < cols && iconIndex < totalIcons; col++) {
        // Efeito xadrez: só coloca ícone nas posições alternadas
        const isEvenRow = row % 2 === 0;
        const isEvenCol = col % 2 === 0;
        const shouldPlaceIcon = (isEvenRow && isEvenCol) || (!isEvenRow && !isEvenCol);

        if (shouldPlaceIcon && iconIndex < totalIcons) {
          // Cada ícone aparece apenas uma vez
          const staticIcon = generateStaticIcon(allIcons[iconIndex], iconIndex);

          // Posições distribuídas por toda a tela com espaçamento máximo
          const xPercent = 2 + ((col / Math.max(cols - 1, 1)) * 96); // 2% a 98%
          const yPercent = 2 + ((row / Math.max(finalRows - 1, 1)) * 96); // 2% a 98%

          // Adiciona posição à estrutura do ícone
          (staticIcon as any).position = {
            x: xPercent,
            y: yPercent,
          };

          iconsArray.push(staticIcon);
          iconIndex++;
        }
      }
    }

    return iconsArray;
  };

  useEffect(() => {
    setIsClient(true);

    // Criar ícones apenas no cliente
    if (typeof window !== 'undefined') {
      const createdIcons = createFullScreenIcons();
      setIcons(createdIcons);
    }
  }, []);

  // Todos os ícones organizados em um array único
  const allIcons = [
    // Programação
    Terminal, FileCode, Binary, Bot, Bug, Database, CodeXml, Home, GitBranch, Coffee,
    SquareTerminal, BrainIcon, Server, Cpu,

    // Tecnologia
    Monitor, Smartphone, Wifi, Earth, FlaskConical, TestTubeDiagonal, Satellite,
    SigmaIcon, Fingerprint, Router,

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
    Castle, Gamepad2, Ghost, PuzzleIcon, TrophyIcon, Sword, Star, Joystick, Gamepad, Shapes,

    // Música
    Mic, Volume2, Headphones, Drum, KeyboardMusic, PianoIcon, FileMusic, Guitar,
    Disc3Icon, Music, Music2, Music3, Music4,
  ];

  // Função para gerar ícones estáticos com tamanho padronizado
  const generateStaticIcon = (IconComponent: any, index: number): AnimatedIcon => {
    const randomRotation = Math.floor(Math.random() * 360);

    return {
      IconComponent,
      id: `icon-${index}`,
      size: 'small', // Tamanho padronizado
      rotation: randomRotation,
    };
  };


  // Classes de tamanho padronizado para todos os ícones
  const standardIconSize = 'w-4 h-4 md:w-5 md:h-5 lg:w-6 lg:h-6';

  // Não renderizar no servidor para evitar hidration mismatch
  if (!isClient) {
    return null;
  }

  return (
    <div className="icon-background-fixed pointer-events-none z-0 overflow-hidden">
      {icons.map((icon, index) => {
        const IconComponent = icon.IconComponent;
        const position = (icon as any).position;

        return (
          <div
            key={`${icon.id}-${index}`}
            className={`absolute ${standardIconSize}`}
            style={{
              left: `${position.x}%`,
              top: `${position.y}%`,
              transform: `translate(-50%, -50%) rotate(${icon.rotation}deg)`,
              color: 'var(--icon-bg-color)',
            }}
          >
            <IconComponent className="w-full h-full" />
          </div>
        );
      })}


    </div>
  );
}
