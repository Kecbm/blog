import {
  SiGithub,
  SiLinkedin,
  SiYoutube,
} from "@icons-pack/react-simple-icons";
import { ArrowUpRight, Copy, Download, Send } from "lucide-react";
import Link from "next/link";
import { ReactNode } from "react";
import ExternalLinkComponent from "@/src/components/ExternalLink";

const XLogo = ({ className = "" }: { className?: string }) => {
  return (
    <svg viewBox="0 0 24 24" width="20" height="20" className="ml-1">
      <g>
        <path
          className={className}
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
  }
];

export default function HomePage() {
  return (
    <div className="flex flex-col gap-6">
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
          <div className="group -m-8 flex select-all items-center gap-3 p-8 transition-all">
            kleciannymelo@gmail.com
            <div className="inline-flex items-center gap-3">
              {/* TODO add copy email
                <button className="text-zinc-800 sm:group-hover:inline-flex dark:text-zinc-200">
                <Copy className="size-4" />
              </button> */}
              <a
                href="mailto:kleciannymelo@gmail.com"
                className="group text-zinc-800 dark:text-zinc-200"
              >
                <Send strokeWidth={1.4} className="size-4 transition-all group-hover:text-[#88d012] dark:group-hover:text-[#C4FC55]" />
              </a>
            </div>
          </div>
          <span className="-mt-2 inline-flex w-fit items-center gap-1 rounded-full bg-[#88d012]/10 px-2 py-0.5 text-sm text-[#68a60a] ring-1 ring-[#68a60a] dark:bg-transparent dark:text-[#B1EC4A] dark:ring-[#B1EC4A]">
            <div className="size-2 animate-pulse rounded-full bg-[#68a60a] dark:bg-[#B1EC4A]" />
            Online
          </span>
        </div>
        <div className="flex flex-col gap-2">
          <a
            href="/luke-berry-cv.pdf"
            download="Luke-Berry-CV.pdf"
            className="flex flex-row items-center justify-center gap-3 rounded bg-[#68a60a]/10 p-4 text-[#68a60a] ring-1 ring-[#68a60a] transition-all hover:bg-[#88d012] hover:ring-transparent hover:text-white dark:bg-transparent dark:text-[#B1EC4A] dark:ring-[#B1EC4A] dark:hover:bg-[#C4FC55] dark:hover:text-[#161D2A]"
          >
            <span className="text-nowrap">Download my CV</span>
            <Download strokeWidth={1.4} className="size-5 max-sm:hidden" />
          </a>
        </div>
      </div>
    </div>
  );
}
