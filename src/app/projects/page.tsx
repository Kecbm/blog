"use client";

import Image from "next/image";
import { useTranslation } from "@/src/hooks/useTranslation";

interface DemoMedia {
  titleKey: 'add' | 'edit' | 'filters' | 'pronunciation';
  mediaUrl: string;
  mediaType: 'gif' | 'video';
}

const demoMedias: DemoMedia[] = [
  {
    titleKey: "add",
    mediaUrl: "/projects/1.add.gif",
    mediaType: "gif"
  },
  {
    titleKey: "edit",
    mediaUrl: "/projects/2.edit.gif",
    mediaType: "gif"
  },
  {
    titleKey: "filters",
    mediaUrl: "/projects/3.filters.gif",
    mediaType: "gif"
  },
  {
    titleKey: "pronunciation",
    mediaUrl: "/projects/4.pronuciation.mp4",
    mediaType: "video"
  }
];

interface DemoCardProps extends DemoMedia {
  title: string;
  description: string;
  videoNotSupported: string;
}

function DemoCard({ title, description, mediaUrl, mediaType, videoNotSupported }: DemoCardProps) {
  return (
    <div className="flex flex-col divide-y divide-zinc-400 overflow-hidden rounded ring-1 ring-zinc-400 dark:divide-zinc-500 dark:ring-zinc-500">
      <div className="flex items-center justify-between gap-4 p-4 max-sm:flex-col">
        <div className="flex-1">
          <h3 className="text-xl font-semibold text-[var(--project-tag-bg-light)] dark:text-[var(--project-tag-text-dark)] mb-2">
            {title}
          </h3>
          <p className="text-zinc-600 dark:text-zinc-400">
            {description}
          </p>
        </div>
      </div>
      <div className="bg-zinc-100 dark:bg-zinc-900">
        {mediaType === 'gif' ? (
          <Image
            src={mediaUrl}
            alt={description}
            width={620}
            height={324}
            className="w-full h-auto object-contain"
            unoptimized
          />
        ) : (
          <video
            src={mediaUrl}
            controls
            className="w-full h-auto"
            preload="metadata"
          >
            {videoNotSupported}
          </video>
        )}
      </div>
    </div>
  );
}

export default function ProjectsPage() {
  const { t } = useTranslation();

  return (
    <>
      <h1 className="mb-16 mt-4 text-center text-5xl max-sm:text-4xl">
        {t.projects.title}
      </h1>
      <article>
        <h2 className="text-[var(--project-tag-bg-light)] dark:text-[var(--project-tag-text-dark)]">
          {t.projects.vocabMaster.title}
        </h2>

        <p>
          {t.projects.vocabMaster.description}
        </p>

        <h2 className="text-[var(--project-tag-bg-light)] dark:text-[var(--project-tag-text-dark)]">
          {t.projects.vocabMaster.keyFeatures}
        </h2>

        <ul className="projects-list">
          <li>{t.projects.vocabMaster.features.instantCapture}</li>
          <li>{t.projects.vocabMaster.features.smartLearning}</li>
          <li>{t.projects.vocabMaster.features.pronunciation}</li>
          <li>{t.projects.vocabMaster.features.progress}</li>
        </ul>

        <div></div>
        <div></div>
        <div></div>

        <div className="space-y-12">
          {demoMedias.map((demo, index) => (
            <DemoCard
              key={index}
              {...demo}
              title={t.projects.vocabMaster.demos[demo.titleKey].title}
              description={t.projects.vocabMaster.demos[demo.titleKey].description}
              videoNotSupported={t.projects.videoNotSupported}
            />
          ))}
        </div>

        <p>
          {t.projects.vocabMaster.closing}
        </p>

        <p>
          <a
            href="https://mastervocab.vercel.app/"
            className="text-[var(--project-button-text-light)] dark:text-[var(--project-button-text-dark)]
                       hover:text-[var(--project-button-hover-light)] dark:hover:text-[var(--project-button-hover-dark)]
                       underline underline-offset-4 transition-all hover:font-bold
                       decoration-[var(--project-button-text-light)] dark:decoration-[var(--project-button-text-dark)]
                       hover:decoration-[var(--project-button-hover-light)] dark:hover:decoration-[var(--project-button-hover-dark)]"
          >
            {t.projects.vocabMaster.accessProject}
          </a>
        </p>
      </article>

      <p className="mt-8 text-center text-zinc-600 dark:text-zinc-400">
        {t.projects.moreProjects}{" "}
        <a
          href="https://github.com/Kecbm"
          className="underline underline-offset-4 transition-all hover:font-bold
                     text-[var(--project-button-text-light)] dark:text-[var(--project-button-text-dark)]
                     hover:text-[var(--project-button-hover-light)] dark:hover:text-[var(--project-button-hover-dark)]
                     decoration-[var(--project-button-text-light)] dark:decoration-[var(--project-button-text-dark)]
                     hover:decoration-[var(--project-button-hover-light)] dark:hover:decoration-[var(--project-button-hover-dark)]"
        >
          {t.projects.myGitHub}
        </a>{t.projects.takeLook}
      </p>
    </>
  );
}
