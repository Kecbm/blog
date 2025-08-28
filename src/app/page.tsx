import {
  SiGithub,
  SiLinkedin,
  SiDevdotto,
} from "@icons-pack/react-simple-icons";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import ExternalLinkComponent from "@/src/components/ExternalLink";

const XLogo = ({ className = "" }: { className?: string }) => {
  return (
    <svg viewBox="0 0 24 24" width="20" height="20" className="ml-1">
      <g>
        <path
          className={className}
          fill="currentColor"
          d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"
        ></path>
      </g>
    </svg>
  );
};

const externalLinksData = [
  {
    name: "LinkedIn",
    description: "follow my career",
    url: "https://linkedin.com/in/kecbm",
    icon: <SiLinkedin />,
    iconType: 'linkedin' as const,
  },
  {
    name: "GitHub",
    description: "steal my code",
    url: "https://github.com/Kecbm",
    icon: <SiGithub />,
    iconType: 'github' as const,
  },
  {
    name: "Twitter",
    description: "read my mind",
    url: "https://x.com/kecbm",
    icon: <XLogo />,
    iconType: 'twitter' as const,
  },
  {
    name: "Dev.to",
    description: "decode my ideas",
    url: "https://dev.to/kecbm",
    icon: <SiDevdotto />,
    iconType: 'dev.to' as const,
  }
];

export default function HomePage() {
  return (
    <div className="flex flex-col gap-6">
      {/* Profile Section */}
      <div className="flex flex-col items-center gap-4">
        <div className="relative">
          <Image
            src="https://avatars.githubusercontent.com/u/67391952?v=4&s=400"
            alt="Klecianny Melo"
            width={120}
            height={120}
            className="rounded-full object-cover ring-4 ring-[#68a60a] dark:ring-[#acf328] transition-all"
          />
        </div>
        <div className="flex items-center gap-2">
          <h2 className="text-xl font-black">Klecianny Melo</h2>
          <div className="relative">
            <svg
              width="30"
              height="30"
              viewBox="0 0 24 24"
              className="relative"
            >
              {/* Twitter verification badge background */}
              <path
                d="M22.25 12c0-1.43-.88-2.67-2.19-3.34.46-1.39.2-2.9-.81-3.91s-2.52-1.27-3.91-.81c-.66-1.31-1.91-2.19-3.34-2.19s-2.67.88-3.33 2.19c-1.4-.46-2.91-.2-3.92.81s-1.26 2.52-.8 3.91c-1.31.67-2.19 1.91-2.19 3.34s.88 2.67 2.16 3.34c-.46 1.39-.21 2.9.8 3.91s2.52 1.26 3.91.81c.67 1.31 1.91 2.19 3.34 2.19s2.68-.88 3.34-2.19c1.39.45 2.9.2 3.91-.81s1.27-2.52.81-3.91c1.31-.67 2.19-1.91 2.19-3.34z"
                fill="#3b82f6"
              />
              {/* White checkmark */}
              <path
                d="M10.54 16.2L6.8 12.46l1.41-1.42 2.26 2.26 4.8-5.23 1.47 1.36-6.2 6.77z"
                fill="white"
              />
            </svg>
          </div>
        </div>
      </div>
      <p className="text-sm">
        Brazilian, obsessed with growth. Working as a Software Engineer. I love React, Python, TailwindCSS, playing PS3, and solving problems.
      </p>
      <div className="divide-y divide-zinc-400 overflow-hidden rounded ring-1 ring-zinc-400 dark:divide-zinc-500 dark:ring-zinc-500">
        {externalLinksData.map((link) => (
          <ExternalLinkComponent key={link.url} {...link} />
        ))}
      </div>
      <div className="flex justify-center gap-6 max-sm:flex-col-reverse sm:justify-between">
        <div className="flex flex-col justify-center gap-4 max-sm:items-center">
          {/* Online Status Badge */}
          <div className="flex items-center gap-3 rounded-full bg-[#4f7e0d]/90 px-2 py-1 text-xs font-bold shadow-lg dark:bg-[#8dd909]/90 text-white dark:text-[#161D2A]">
            <div className="relative flex items-center justify-center">
              {/* Ripple waves animation */}
              <div className="absolute size-4 rounded-full bg-white/30 dark:bg-[#161D2A]/30 animate-ping" style={{
                animationDuration: '4s'
              }} />
              <div className="absolute size-3 rounded-full bg-white/50 dark:bg-[#161D2A]/50 animate-ping" style={{
                animationDuration: '4s',
                animationDelay: '1s'
              }} />
              <div className="absolute size-2.5 rounded-full bg-white/70 dark:bg-[#161D2A]/70 animate-ping" style={{
                animationDuration: '4s',
                animationDelay: '2s'
              }} />
              {/* Inner dot with breathing effect */}
              <div className="relative size-2 rounded-full bg-white dark:bg-[#161D2A] z-10" style={{
                animation: 'breathe 5s ease-in-out infinite'
              }} />
            </div>
            <span>Online</span>
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <a
            href="mailto:kleciannymelo@gmail.com"
            className="flex flex-row items-center justify-center gap-3 rounded bg-[#4f7e0d]/10 p-4 text-[#4f7e0d] ring-1 ring-[#4f7e0d] transition-all hover:bg-[#68a60a] hover:ring-transparent hover:text-white dark:bg-transparent dark:text-[#8dd909] dark:ring-[#8dd909] dark:hover:bg-[#acf328] dark:hover:text-[#161D2A]"
          >
            <span className="text-nowrap">Contact Me</span>
            <ArrowUpRight strokeWidth={1.4} className="size-5" />
          </a>
        </div>
      </div>
    </div>
  );
}
