import { GitBranch, Globe } from "lucide-react";
import Image from "next/image";
import { ReactNode } from "react";
import ProjectTag from "@/src/components/ProjectTag";
import ProjectButton from "@/src/components/ProjectButton";

interface Project {
  name: string;
  description: string;
  imageUrl: string;
  githubUrl: string;
  url?: string;
  technologies: ReactNode;
}

// Front: https://trivia-kecbm.vercel.app/
// Back: https://github.com/Kecbm/car-shop
// Full Stack: https://github.com/Kecbm/delivery-app

// Prompt para gerar as imagens

// Testar geracao de GIF com elementos animados

  // Crie uma imagem no formato 16:9 para ilustrar um site sobre o jogo 'Trivia', inspirado em programas de perguntas e respostas no estilo 'Who Wants to Be a Millionaire'. A cena deve incluir o título 'Trivia' em destaque e elementos visuais que remetam a um quiz show (como perguntas, botões de múltipla escolha, luzes e um palco). A estética deve ser inspirada no estilo de animacao 3d, com cores vibrantes, cenários, mantendo um visual divertido e atraente para portfólio

  // Crie uma imagem no formato 16:9 para ilustrar um site chamado 'Car Shop', voltado para a gestão e venda de veículos em uma concessionária. A cena deve incluir o título 'Car Shop' em destaque e elementos visuais que representem um showroom de carros (como automóveis brilhantes, prateleiras de catálogos, balcão de atendimento e placas de preços). A estética deve ser inspirada no estilo de animacao 3d, com cores vibrantes, cenários, transmitindo um visual divertido e chamativo para portfólio

  // Crie uma imagem no formato 16:9 para ilustrar um aplicativo chamado 'Delivery App', especializado na entrega de bebidas. A cena deve incluir o título 'Delivery App' em destaque e elementos visuais que representem o serviço de entrega de bebidas (como garrafas, copos, caixas de entrega e um entregador em movimento). A estética deve ser inspirada no estilo de animacao 3d, com cores vibrantes, cenários, transmitindo um visual divertido e atraente para portfólio

const projects: Project[] = [
  {
   name: "Trivia",
   description:
      "A question and answer game based on the game Trivia (like an American million show)",
   url: "https://trivia-kecbm.vercel.app/",
   imageUrl: "/projects/Trivia.png",
   githubUrl: "https://github.com/Kecbm/trivia",
   technologies: (
     <div className="flex items-center gap-x-3">
       <ProjectTag>JavaScript</ProjectTag>
       <ProjectTag>HTML</ProjectTag>
       <ProjectTag>CSS</ProjectTag>
     </div>
   ),
  },
  {
   name: "Car Shop",
   description:
      "API with CRUD operations for the complete management of a car dealership",
   imageUrl: "/projects/CarShop.png",
   githubUrl: "https://github.com/Kecbm/car-shop",
   technologies: (
     <div className="flex items-center gap-x-3">
       <ProjectTag>TypeScript</ProjectTag>
       <ProjectTag>MongoDB</ProjectTag>
       <ProjectTag>Docker</ProjectTag>
     </div>
   ),
  },
  {
   name: "Delivery App",
   description:
      "App for ordering and fast delivery of beverages",
   imageUrl: "/projects/DeliveryApp.png",
   githubUrl: "https://github.com/Kecbm/delivery-app",
   technologies: (
     <div className="flex items-center gap-x-3">
       <ProjectTag>React</ProjectTag>
       <ProjectTag>Node.js</ProjectTag>
       <ProjectTag>Sequelize</ProjectTag>
     </div>
   ),
  },
];

function ProjectCard({
  name,
  description,
  imageUrl,
  githubUrl,
  url,
  technologies,
}: Project) {
  return (
    <div className="flex-col divide-y divide-zinc-400 overflow-hidden rounded ring-1 ring-zinc-400 dark:divide-zinc-500 dark:ring-zinc-500">
      <div className="flex items-center justify-between gap-4 p-4 max-sm:flex-col">
        <h2 className="text-xl">{name}</h2>
        {technologies}
      </div>
      <div>
        <p className="p-4">{description}</p>
      </div>
      <Image
        src={imageUrl}
        width={620}
        height={324}
        alt="Logo for css2wind website"
      />
      {url ? (
        <div className="flex w-full justify-between divide-x divide-zinc-400 dark:divide-zinc-500">
          <ProjectButton
            href={url}
            icon={<Globe strokeWidth={1.4} />}
          >
            Visit website
          </ProjectButton>
          <ProjectButton
            href={githubUrl}
            icon={<GitBranch strokeWidth={1.4} />}
          >
            View code
          </ProjectButton>
        </div>
      ) : (
        <div className="flex w-full">
          <ProjectButton
            href={githubUrl}
            icon={<GitBranch strokeWidth={1.4} />}
          >
            View code
          </ProjectButton>
        </div>
      )}
    </div>
  );
}

export default function ProjectsPage() {
  return (
    <>
      <h1 className="mb-16 mt-4 text-center text-5xl max-sm:text-4xl">
        Projects
      </h1>
      <div className="space-y-20">
        {projects.map((project) => (
          <ProjectCard key={project.name} {...project} />
        ))}
      </div>
      <p className="mt-8 text-center text-zinc-600 dark:text-zinc-400">
        You&apos;ll find more of my projects on{" "}
        <a
          href="https://github.com/Kecbm"
          className="underline underline-offset-4 transition-all hover:text-[#d0680f] hover:font-bold decoration-[#d0680f] dark:hover:text-[#F2B13E] dark:decoration-[#F2B13E]"
        >
          my GitHub profile
        </a>, take a look!
      </p>
    </>
  );
}
