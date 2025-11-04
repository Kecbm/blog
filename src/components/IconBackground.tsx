"use client";

import {
  // Programação (10 ícones)
  // Code2,
  Terminal,
  // Braces,
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

  // Tecnologia (10 ícones)
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

  // Estudos (10 ícones)
  BookOpen,
  GraduationCap,
  // PenTool,
  // FileText,
  Lightbulb,
  Brain,
  // Calculator,
  // Microscope,
  // Globe,
  Library,

  // Leitura (10 ícones)
  Book,
  BookMarked,
  Bookmark,
  Glasses,
  // Quote,
  // Scroll,
  Newspaper,
  // FileImage,
  // Archive,
  // Feather,

  // Academia (10 ícones)
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

  // Bicicleta (10 ícones)
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

  // Gato (2 ícones)
  Cat,
  PawPrint,

  // Cachorro (1 ícone)
  Dog,

  // Jogos (10 ícones)
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

  // Música (13 ícones)
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

interface IconPosition {
  icon: React.ReactNode;
  position: {
    top: string;
    left: string;
  };
  rotation: string;
  size: string;
}

export default function IconBackground() {
  // Arrays organizados por tema
  const programmingIcons = [Binary, Terminal, Bot, FileCode, GitBranch, Database, Server, Cpu, Monitor, Smartphone];
  const studyIcons = [BookOpen, GraduationCap, Drum, KeyboardMusic, Lightbulb, Brain, PianoIcon, FileMusic, Guitar, Library];
  const readingIcons = [Book, BookMarked, Bookmark, Disc3Icon, Music, Music2, Music3, Music4, Glasses, Newspaper];
  const gymIcons = [Dumbbell, Activity, Heart, Zap, Target, Timer, TrendingUp, Award, Trophy, Medal];
  const bikeIcons = [Bike, MapPin, Compass, Mountain, Wind, Route, Navigation, Map, Flag, Milestone];
  const catIcons = [Cat, PawPrint, Bug, CodeXml, Home, Coffee, SquareTerminal, BrainIcon, Wifi, Earth];
  const dogIcons = [Dog, Castle, FlaskConical, TestTubeDiagonal, Satellite, SigmaIcon, Fingerprint, Star, Router, Ghost];
  const gameIcons = [Gamepad2, Joystick, PuzzleIcon, TrophyIcon, Sword, Gamepad, Shapes, Mic, Volume2, Headphones];

  // Função para criar ícone com componente
  const createIcon = (IconComponent: any) => <IconComponent />;

  // Grid padronizado com espaçamento uniforme
  // Colunas: 5%, 15%, 25%, 35%, 45%, 55%, 65%, 75%, 85%, 95%
  // Linhas: 5%, 15%, 25%, 35%, 45%, 55%, 65%, 75%, 85%, 95%
  const iconPositions: IconPosition[] = [
    // Linha 1 - y: 5%
    {
      icon: createIcon(programmingIcons[0]), // Code2
      position: { top: "5%", left: "5%" },
      rotation: "rotate-12",
      size: "w-16 h-16 md:w-24 md:h-24 lg:w-32 lg:h-32",
    },
    {
      icon: createIcon(studyIcons[0]), // BookOpen
      position: { top: "5%", left: "25%" },
      rotation: "-rotate-6",
      size: "w-18 h-18 md:w-26 md:h-26 lg:w-34 lg:h-34",
    },
    {
      icon: createIcon(readingIcons[1]), // BookMarked
      position: { top: "5%", left: "45%" },
      rotation: "rotate-18",
      size: "w-20 h-20 md:w-28 md:h-28 lg:w-36 lg:h-36",
    },
    {
      icon: createIcon(gymIcons[0]), // Dumbbell
      position: { top: "5%", left: "65%" },
      rotation: "-rotate-24",
      size: "w-16 h-16 md:w-24 md:h-24 lg:w-32 lg:h-32",
    },
    {
      icon: createIcon(bikeIcons[0]), // Bike
      position: { top: "5%", left: "85%" },
      rotation: "rotate-8",
      size: "w-18 h-18 md:w-26 md:h-26 lg:w-34 lg:h-34",
    },

    // Linha 2 - y: 15%
    {
      icon: createIcon(catIcons[0]), // Cat
      position: { top: "15%", left: "15%" },
      rotation: "-rotate-15",
      size: "w-20 h-20 md:w-28 md:h-28 lg:w-36 lg:h-36",
    },
    {
      icon: createIcon(dogIcons[0]), // Dog
      position: { top: "15%", left: "35%" },
      rotation: "rotate-30",
      size: "w-16 h-16 md:w-24 md:h-24 lg:w-32 lg:h-32",
    },
    {
      icon: createIcon(gameIcons[0]), // Gamepad2
      position: { top: "15%", left: "55%" },
      rotation: "rotate-45",
      size: "w-18 h-18 md:w-26 md:h-26 lg:w-34 lg:h-34",
    },
    {
      icon: createIcon(programmingIcons[1]), // Terminal
      position: { top: "15%", left: "75%" },
      rotation: "-rotate-12",
      size: "w-20 h-20 md:w-28 md:h-28 lg:w-36 lg:h-36",
    },
    {
      icon: createIcon(studyIcons[1]), // GraduationCap
      position: { top: "15%", left: "95%" },
      rotation: "rotate-20",
      size: "w-16 h-16 md:w-24 md:h-24 lg:w-32 lg:h-32",
    },

    // Linha 3 - y: 25%
    {
      icon: createIcon(readingIcons[2]), // Bookmark
      position: { top: "25%", left: "5%" },
      rotation: "-rotate-8",
      size: "w-18 h-18 md:w-26 md:h-26 lg:w-34 lg:h-34",
    },
    {
      icon: createIcon(gymIcons[1]), // Activity
      position: { top: "25%", left: "25%" },
      rotation: "rotate-36",
      size: "w-20 h-20 md:w-28 md:h-28 lg:w-36 lg:h-36",
    },
    {
      icon: createIcon(bikeIcons[1]), // MapPin
      position: { top: "25%", left: "45%" },
      rotation: "-rotate-18",
      size: "w-16 h-16 md:w-24 md:h-24 lg:w-32 lg:h-32",
    },
    {
      icon: createIcon(catIcons[1]), // PawPrint
      position: { top: "25%", left: "65%" },
      rotation: "rotate-15",
      size: "w-18 h-18 md:w-26 md:h-26 lg:w-34 lg:h-34",
    },
    {
      icon: createIcon(dogIcons[1]), // Bone
      position: { top: "25%", left: "85%" },
      rotation: "-rotate-25",
      size: "w-20 h-20 md:w-28 md:h-28 lg:w-36 lg:h-36",
    },

    // Linha 4 - y: 35%
    {
      icon: createIcon(gameIcons[1]), // Joystick
      position: { top: "35%", left: "15%" },
      rotation: "rotate-40",
      size: "w-16 h-16 md:w-24 md:h-24 lg:w-32 lg:h-32",
    },
    {
      icon: createIcon(programmingIcons[2]), // Braces
      position: { top: "35%", left: "35%" },
      rotation: "-rotate-10",
      size: "w-18 h-18 md:w-26 md:h-26 lg:w-34 lg:h-34",
    },
    {
      icon: createIcon(studyIcons[2]), // PenTool
      position: { top: "35%", left: "55%" },
      rotation: "rotate-22",
      size: "w-20 h-20 md:w-28 md:h-28 lg:w-36 lg:h-36",
    },
    {
      icon: createIcon(readingIcons[3]), // Glasses
      position: { top: "35%", left: "75%" },
      rotation: "-rotate-14",
      size: "w-16 h-16 md:w-24 md:h-24 lg:w-32 lg:h-32",
    },
    {
      icon: createIcon(gymIcons[2]), // Heart
      position: { top: "35%", left: "95%" },
      rotation: "rotate-28",
      size: "w-18 h-18 md:w-26 md:h-26 lg:w-34 lg:h-34",
    },

    // Linha 5 - y: 45%
    {
      icon: createIcon(bikeIcons[2]), // Compass
      position: { top: "45%", left: "5%" },
      rotation: "-rotate-35",
      size: "w-20 h-20 md:w-28 md:h-28 lg:w-36 lg:h-36",
    },
    {
      icon: createIcon(catIcons[2]), // Fish
      position: { top: "45%", left: "25%" },
      rotation: "rotate-16",
      size: "w-16 h-16 md:w-24 md:h-24 lg:w-32 lg:h-32",
    },
    {
      icon: createIcon(dogIcons[2]), // CircleDot
      position: { top: "45%", left: "45%" },
      rotation: "-rotate-20",
      size: "w-18 h-18 md:w-26 md:h-26 lg:w-34 lg:h-34",
    },
    {
      icon: createIcon(gameIcons[2]), // Dice1
      position: { top: "45%", left: "65%" },
      rotation: "rotate-42",
      size: "w-20 h-20 md:w-28 md:h-28 lg:w-36 lg:h-36",
    },
    {
      icon: createIcon(programmingIcons[3]), // FileCode
      position: { top: "45%", left: "85%" },
      rotation: "-rotate-12",
      size: "w-16 h-16 md:w-24 md:h-24 lg:w-32 lg:h-32",
    },

    // Linha 6 - y: 55%
    {
      icon: createIcon(studyIcons[3]), // FileText
      position: { top: "55%", left: "15%" },
      rotation: "rotate-8",
      size: "w-18 h-18 md:w-26 md:h-26 lg:w-34 lg:h-34",
    },
    {
      icon: createIcon(readingIcons[4]), // Quote
      position: { top: "55%", left: "35%" },
      rotation: "-rotate-18",
      size: "w-20 h-20 md:w-28 md:h-28 lg:w-36 lg:h-36",
    },
    {
      icon: createIcon(gymIcons[3]), // Zap
      position: { top: "55%", left: "55%" },
      rotation: "rotate-30",
      size: "w-16 h-16 md:w-24 md:h-24 lg:w-32 lg:h-32",
    },
    {
      icon: createIcon(bikeIcons[3]), // Mountain
      position: { top: "55%", left: "75%" },
      rotation: "-rotate-6",
      size: "w-18 h-18 md:w-26 md:h-26 lg:w-34 lg:h-34",
    },
    {
      icon: createIcon(catIcons[3]), // Milk
      position: { top: "55%", left: "95%" },
      rotation: "rotate-24",
      size: "w-20 h-20 md:w-28 md:h-28 lg:w-36 lg:h-36",
    },

    // Linha 7 - y: 65%
    {
      icon: createIcon(dogIcons[3]), // Trees
      position: { top: "65%", left: "5%" },
      rotation: "-rotate-16",
      size: "w-16 h-16 md:w-24 md:h-24 lg:w-32 lg:h-32",
    },
    {
      icon: createIcon(programmingIcons[4]), // GitBranch
      position: { top: "65%", left: "25%" },
      rotation: "rotate-25",
      size: "w-18 h-18 md:w-26 md:h-26 lg:w-34 lg:h-34",
    },
    {
      icon: createIcon(studyIcons[4]), // Lightbulb
      position: { top: "65%", left: "45%" },
      rotation: "-rotate-30",
      size: "w-20 h-20 md:w-28 md:h-28 lg:w-36 lg:h-36",
    },
    {
      icon: createIcon(readingIcons[5]), // Scroll
      position: { top: "65%", left: "65%" },
      rotation: "rotate-14",
      size: "w-16 h-16 md:w-24 md:h-24 lg:w-32 lg:h-32",
    },
    {
      icon: createIcon(gymIcons[4]), // Target
      position: { top: "65%", left: "85%" },
      rotation: "-rotate-40",
      size: "w-18 h-18 md:w-26 md:h-26 lg:w-34 lg:h-34",
    },

    // Linha 8 - y: 75%
    {
      icon: createIcon(bikeIcons[4]), // Wind
      position: { top: "75%", left: "15%" },
      rotation: "rotate-10",
      size: "w-20 h-20 md:w-28 md:h-28 lg:w-36 lg:h-36",
    },
    {
      icon: createIcon(catIcons[4]), // Home
      position: { top: "75%", left: "35%" },
      rotation: "-rotate-22",
      size: "w-16 h-16 md:w-24 md:h-24 lg:w-32 lg:h-32",
    },
    {
      icon: createIcon(dogIcons[4]), // TreePine
      position: { top: "75%", left: "55%" },
      rotation: "rotate-35",
      size: "w-18 h-18 md:w-26 md:h-26 lg:w-34 lg:h-34",
    },
    {
      icon: createIcon(gameIcons[3]), // Dice6
      position: { top: "75%", left: "75%" },
      rotation: "-rotate-15",
      size: "w-20 h-20 md:w-28 md:h-28 lg:w-36 lg:h-36",
    },
    {
      icon: createIcon(programmingIcons[5]), // Database
      position: { top: "75%", left: "95%" },
      rotation: "rotate-50",
      size: "w-16 h-16 md:w-24 md:h-24 lg:w-32 lg:h-32",
    },

    // Linha 9 - y: 85%
    {
      icon: createIcon(studyIcons[5]), // Brain
      position: { top: "85%", left: "5%" },
      rotation: "-rotate-8",
      size: "w-18 h-18 md:w-26 md:h-26 lg:w-34 lg:h-34",
    },
    {
      icon: createIcon(readingIcons[6]), // Newspaper
      position: { top: "85%", left: "25%" },
      rotation: "rotate-28",
      size: "w-20 h-20 md:w-28 md:h-28 lg:w-36 lg:h-36",
    },
    {
      icon: createIcon(gymIcons[5]), // Timer
      position: { top: "85%", left: "45%" },
      rotation: "-rotate-45",
      size: "w-16 h-16 md:w-24 md:h-24 lg:w-32 lg:h-32",
    },
    {
      icon: createIcon(bikeIcons[5]), // Route
      position: { top: "85%", left: "65%" },
      rotation: "rotate-18",
      size: "w-18 h-18 md:w-26 md:h-26 lg:w-34 lg:h-34",
    },
    {
      icon: createIcon(catIcons[5]), // Bed
      position: { top: "85%", left: "85%" },
      rotation: "-rotate-32",
      size: "w-20 h-20 md:w-28 md:h-28 lg:w-36 lg:h-36",
    },

    // Linha 10 - y: 95%
    {
      icon: createIcon(dogIcons[5]), // Footprints
      position: { top: "95%", left: "15%" },
      rotation: "rotate-42",
      size: "w-16 h-16 md:w-24 md:h-24 lg:w-32 lg:h-32",
    },
    {
      icon: createIcon(gameIcons[4]), // Puzzle
      position: { top: "95%", left: "35%" },
      rotation: "-rotate-12",
      size: "w-18 h-18 md:w-26 md:h-26 lg:w-34 lg:h-34",
    },
    {
      icon: createIcon(programmingIcons[6]), // Server
      position: { top: "95%", left: "55%" },
      rotation: "rotate-26",
      size: "w-20 h-20 md:w-28 md:h-28 lg:w-36 lg:h-36",
    },
    {
      icon: createIcon(studyIcons[6]), // Calculator
      position: { top: "95%", left: "75%" },
      rotation: "-rotate-38",
      size: "w-16 h-16 md:w-24 md:h-24 lg:w-32 lg:h-32",
    },
    {
      icon: createIcon(readingIcons[7]), // FileImage
      position: { top: "95%", left: "95%" },
      rotation: "rotate-33",
      size: "w-18 h-18 md:w-26 md:h-26 lg:w-34 lg:h-34",
    },

  ];

  return (
    <div
      className="icon-background-fixed pointer-events-none z-0 overflow-hidden"
    >
      {iconPositions.map((item, index) => (
        <div
          key={index}
          className={`absolute ${item.size} ${item.rotation}`}
          style={{
            top: item.position.top,
            left: item.position.left,
            color: "var(--icon-bg-color)",
            // Garante que cada ícone também seja estático
            position: 'absolute',
            transform: 'translateZ(0)',
            WebkitTransform: 'translateZ(0)',
            backfaceVisibility: 'hidden',
            WebkitBackfaceVisibility: 'hidden',
          }}
        >
          {item.icon}
        </div>
      ))}
    </div>
  );
}
