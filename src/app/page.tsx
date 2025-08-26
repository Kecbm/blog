import {
  SiGithub,
  SiLinkedin,
  SiDevdotto,
} from "@icons-pack/react-simple-icons";
import { ArrowUpRight, Check } from "lucide-react";
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

// Home page: https://v0.app/community/v0-me-Zz6mBLdU9bC

export default function HomePage() {
  return (
    <div className="flex flex-col gap-6">
      {/* Profile Section */}
      <div className="flex flex-col items-center gap-4">
        <div className="relative">
          <Image
            src="https://avatars.githubusercontent.com/u/67391952?v=4"
            alt="Klecianny Melo"
            width={120}
            height={120}
            className="rounded-full object-cover ring-4 ring-[#68a60a] dark:ring-[#acf328] transition-all"
          />
        </div>
        <div className="flex items-center gap-2">
          <h2 className="text-xl font-bold">Klecianny Melo</h2>
          <div className="relative">
            <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center">
              <Check size={14} className="text-white" strokeWidth={3} />
            </div>
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
          <div className="flex items-center gap-1 rounded-full bg-[#68a60a]/90 px-2 py-1 text-xs font-bold shadow-lg dark:bg-[#acf328]/90 text-white dark:text-[#161D2A]">
            <div className="size-2 animate-pulse rounded-full bg-white dark:bg-[#161D2A]" />
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
