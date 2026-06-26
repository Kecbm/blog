"use client";

import React, { useEffect, useState } from "react";
import {
  // Programação
  Binary, Bot, Bug, Database, CodeXml, Home, GitBranch, SquareTerminal, Server, Cpu,

  // Tecnologia
  Monitor, Smartphone, Wifi, Earth, TestTubeDiagonal, Satellite, SigmaIcon, Fingerprint, Router,

  // Estudos
  GraduationCap, Lightbulb, Brain,

  // Leitura
  Book, Glasses,

  // Academia
  Dumbbell, Activity, Heart, Zap, Target, Trophy,

  // Bicicleta
  Bike, Mountain, Wind, Route, Map, Milestone,

  // Animais
  Cat, PawPrint, Dog,

  // Jogos
  Castle, Gamepad2, Ghost, Sword, Star,

  // Música
  Mic, Volume2, Headphones, FileMusic, Disc3Icon, Music,
} from "lucide-react";

// Agrupamento de ícones por tema
const iconGroups = {
  "Programação": [Binary, Bot, Bug, Database, CodeXml, Home, GitBranch, SquareTerminal, Server, Cpu],
  "Tecnologia": [Monitor, Smartphone, Wifi, Earth, TestTubeDiagonal, Satellite, SigmaIcon, Fingerprint, Router],
  "Estudos": [GraduationCap, Lightbulb, Brain],
  "Leitura": [Book, Glasses],
  "Academia": [Dumbbell, Activity, Heart, Zap, Target, Trophy],
  "Bicicleta": [Bike, Mountain, Wind, Route, Map, Milestone],
  "Animais": [Cat, PawPrint, Dog],
  "Jogos": [Castle, Gamepad2, Ghost, Sword, Star],
  "Música": [Mic, Volume2, Headphones, FileMusic, Disc3Icon, Music],
};

// Lista plana de todos os ícones (mantida para compatibilidade)
const allIcons = Object.values(iconGroups).flat();

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

  // 1. Geração de Ícones e Posições (apenas casas pretas, sem repetição, com distribuição por grupos)
  const generateIcons = () => {
    const generated: BackgroundIcon[] = [];
    const groupNames = Object.keys(iconGroups) as Array<keyof typeof iconGroups>;
    const groupCount = groupNames.length; // 9 grupos

    // Rastreia quais índices de cada grupo já foram usados
    const usedIndicesPerGroup: Record<string, Set<number>> = {};
    groupNames.forEach(group => {
      usedIndicesPerGroup[group] = new Set();
    });

    // Rastreia todos os ícones usados globalmente (para garantir unicidade)
    const allUsedIcons: React.ElementType[] = [];

    // Função para obter próximo ícone disponível de um grupo
    const getNextAvailableIcon = (groupName: keyof typeof iconGroups): React.ElementType | null => {
      const groupIcons = iconGroups[groupName];
      const usedInGroup = usedIndicesPerGroup[groupName as string];
      
      // Procura por um ícone não usado neste grupo
      for (let i = 0; i < groupIcons.length; i++) {
        const randomIndex = Math.floor(Math.random() * groupIcons.length);
        const candidateIcon = groupIcons[randomIndex];
        
        if (!usedInGroup.has(randomIndex) && !allUsedIcons.includes(candidateIcon)) {
          usedInGroup.add(randomIndex);
          allUsedIcons.push(candidateIcon);
          return candidateIcon;
        }
      }
      
      // Se não encontrou neste grupo, retorna null
      return null;
    };

    // Função para obter ícone de qualquer grupo disponível
    const getIconFromAnyAvailableGroup = (startGroupIndex: number): React.ElementType | null => {
      // Tenta a partir do grupo atual e avança para os próximos
      for (let offset = 0; offset < groupCount; offset++) {
        const groupIndex = (startGroupIndex + offset) % groupCount;
        const groupName = groupNames[groupIndex];
        const icon = getNextAvailableIcon(groupName);
        
        if (icon !== null) {
          return icon;
        }
      }
      
      // Se nenhum grupo tem ícones disponíveis, retorna null
      return null;
    };

    for (let row = 0; row < GRID_ROWS; row++) {
      let groupIndex = 0; // Reinicia o índice de grupo para cada linha
      
      for (let col = 0; col < GRID_COLS; col++) {
        // Determina se é uma casa clara ou escura (padrão xadrez)
        // Casa escura quando a soma de row + col é ímpar
        const isLightSquare = (row + col) % 2 === 0;

        // Só adiciona ícones nas casas escuras (pretas)
        if (!isLightSquare) {
          // Distribuição percentual com margem (5% a 95%)
          const xPercent = 5 + (col / (GRID_COLS - 1)) * 90;
          const yPercent = 5 + (row / (GRID_ROWS - 1)) * 90;

          // Tenta pegar ícone do grupo atual, ou de outros grupos se necessário
          let IconComponent = getNextAvailableIcon(groupNames[groupIndex % groupCount]);
          
          // Se o grupo atual não tem ícones disponíveis, procura em outros grupos
          if (IconComponent === null) {
            IconComponent = getIconFromAnyAvailableGroup(groupIndex);
          }

          // Se ainda não encontrou (todos os ícones foram usados), para de gerar
          if (IconComponent === null) {
            return generated;
          }

          // Randomiza apenas a rotação inicial
          const randomRotation = Math.floor(Math.random() * 360);

          generated.push({
            IconComponent,
            x: xPercent,
            y: yPercent,
            rotation: randomRotation,
            isLightSquare: false, // Sempre false, pois só geramos casas escuras
          });

          groupIndex++; // Avança para o próximo grupo
        }
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
