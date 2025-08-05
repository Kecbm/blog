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
  url: string;
  technologies: ReactNode;
}

// Front: https://trivia-kecbm.vercel.app/
// Back: https://github.com/Kecbm/car-shop
// Full Stack: https://github.com/Kecbm/delivery-app

// Para mais projetos acesse meu perfil no GitHub

const projects: Project[] = [
  {
    name: "css2wind",
    description:
      "Learn TailwindCSS by playing a minigame: there are eight CSS properties that you must translate to the equivalent TailwindCSS utility. Bet you can't get 8/8.",
    url: "https://css2wind.com",
    imageUrl: "/projects/css2wind.png",
    githubUrl: "https://github.com/LukeberryPi/css2wind",
    technologies: (
      <div className="flex items-center gap-x-3">
        <ProjectTag>TypeScript</ProjectTag>
        <ProjectTag>TailwindCSS</ProjectTag>
        <ProjectTag>Next.js</ProjectTag>
      </div>
    ),
  },
  {
    name: "phived",
    description:
      "Stop procrastinating by dealing with five tasks at a time. If you want to add more tasks you need to resolve a previous one. Surprisingly effective.",
    url: "https://phived.com",
    imageUrl: "/projects/phived.png",
    githubUrl: "https://github.com/LukeberryPi/phived",
    technologies: (
      <div className="flex items-center gap-x-3">
        <ProjectTag>React</ProjectTag>
        <ProjectTag>TailwindCSS</ProjectTag>
        <ProjectTag>Vite</ProjectTag>
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
          <ProjectCard key={project.url} {...project} />
        ))}
      </div>
      <p className="mt-8 text-center text-zinc-600 dark:text-zinc-400">
        You&apos;ll find more of my projects on{" "}
        <a
          href="https://github.com/Kecbm"
          className="underline underline-offset-4 transition-all hover:text-[#eb8c15] hover:font-bold decoration-[#eb8c15] dark:hover:text-[#F2B13E] dark:decoration-[#F2B13E]"
        >
          my GitHub profile
        </a>, take a look!
      </p>
    </>
  );
}
