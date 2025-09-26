import Image from "next/image";

interface DemoMedia {
  title: string;
  description: string;
  mediaUrl: string;
  mediaType: 'gif' | 'video';
}

const demoMedias: DemoMedia[] = [
  {
    title: "📚 Add new words and watch the magic happen",
    description: "Instant word capture with automatic translation",
    mediaUrl: "/projects/1.add.gif",
    mediaType: "gif"
  },
  {
    title: "🎮 Turn your learning into a game",
    description: "Interactive interface for vocabulary editing and management",
    mediaUrl: "/projects/2.edit.gif",
    mediaType: "gif"
  },
  {
    title: "🔎 Find any word in seconds",
    description: "Advanced filtering system to locate words quickly",
    mediaUrl: "/projects/3.filters.gif",
    mediaType: "gif"
  },
  {
    title: "🔊 Listen and learn from a native speaker",
    description: "Authentic pronunciation with native voices",
    mediaUrl: "/projects/4.pronuciation.mp4",
    mediaType: "video"
  }
];

function DemoCard({ title, description, mediaUrl, mediaType }: DemoMedia) {
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
            unoptimized // Para GIFs animados
          />
        ) : (
          <video
            src={mediaUrl}
            controls
            className="w-full h-auto"
            preload="metadata"
          >
            Seu navegador não suporta vídeos.
          </video>
        )}
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
      <article>
        <h2 className="text-[var(--project-tag-bg-light)] dark:text-[var(--project-tag-text-dark)]">
          📖 Vocab Master – Learn Vocabulary Without Interrupting Your Reading
        </h2>

        <p>
          Transform your reading into a powerful language learning experience.
          With Vocab Master, you don&apos;t lose your rhythm: capture, translate, and study new words in English or French while reading books, articles, or any content.
        </p>

        <h2 className="text-[var(--project-tag-bg-light)] dark:text-[var(--project-tag-text-dark)]">
          ✨ Key Features
        </h2>

        <ul className="projects-list">
          <li>🚀 <strong>Instant Capture</strong> → add words with one click and get automatic translation.</li>
          <li>🧠 <strong>Smart Learning</strong> → organize by status: New, Learning, Mastered.</li>
          <li>🎧 <strong>Authentic Pronunciation</strong> → hear how the word really sounds with native voices.</li>
          <li>📊 <strong>Visible Progress</strong> → real-time statistics about your vocabulary and reading.</li>
        </ul>

        <div></div>
        <div></div>
        <div></div>

        <div className="space-y-12">
          {demoMedias.map((demo, index) => (
            <DemoCard key={index} {...demo} />
          ))}
        </div>

        <p>
          Don&apos;t let unknown words disrupt your reading.
          With Vocab Master, every page becomes an opportunity to learn.
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
            👉 Access the project
          </a>
        </p>
      </article>

      <p className="mt-8 text-center text-zinc-600 dark:text-zinc-400">
        You&apos;ll find more of my projects on{" "}
        <a
          href="https://github.com/Kecbm"
          className="underline underline-offset-4 transition-all hover:font-bold
                     text-[var(--project-button-text-light)] dark:text-[var(--project-button-text-dark)]
                     hover:text-[var(--project-button-hover-light)] dark:hover:text-[var(--project-button-hover-dark)]
                     decoration-[var(--project-button-text-light)] dark:decoration-[var(--project-button-text-dark)]
                     hover:decoration-[var(--project-button-hover-light)] dark:hover:decoration-[var(--project-button-hover-dark)]"
        >
          my GitHub profile
        </a>, take a look!
      </p>
    </>
  );
}
