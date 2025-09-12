import Image from "next/image";

interface DemoMedia {
  title: string;
  description: string;
  mediaUrl: string;
  mediaType: 'gif' | 'video';
}

const demoMedias: DemoMedia[] = [
  {
    title: "📚 Adicione novas palavras e veja a mágica acontecer",
    description: "Captura instantânea de palavras com tradução automática",
    mediaUrl: "/projects/1.add.gif",
    mediaType: "gif"
  },
  {
    title: "🎮 Transforme seu aprendizado em um jogo",
    description: "Interface interativa para edição e gerenciamento de vocabulário",
    mediaUrl: "/projects/2.edit.gif",
    mediaType: "gif"
  },
  {
    title: "🔎 Encontre qualquer palavra em segundos",
    description: "Sistema de filtros avançado para localizar palavras rapidamente",
    mediaUrl: "/projects/3.filters.gif",
    mediaType: "gif"
  },
  {
    title: "🔊 Ouça e aprenda com um nativo",
    description: "Pronúncia autêntica com vozes nativas",
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
          📖 Vocab Master – Aprenda Vocabulário Sem Interromper Sua Leitura
        </h2>

        <p>
          Transforme sua leitura em uma experiência de aprendizado de idiomas poderosa.
          Com o Vocab Master, você não perde o ritmo: capture, traduza e estude novas palavras em inglês ou francês enquanto lê livros, artigos ou qualquer conteúdo.
        </p>

        <h2 className="text-[var(--project-tag-bg-light)] dark:text-[var(--project-tag-text-dark)]">
          ✨ Principais Diferenciais
        </h2>

        <ul className="projects-list">
          <li>🚀 <strong>Captura Instantânea</strong> → adicione palavras com um clique e obtenha tradução automática.</li>
          <li>🧠 <strong>Aprendizado Inteligente</strong> → organize por status: New, Learning, Mastered.</li>
          <li>📚 <strong>Foco no Contexto</strong> → relacione cada palavra ao livro ou artigo em que você a encontrou.</li>
          <li>🎧 <strong>Pronúncia Autêntica</strong> → ouça como a palavra realmente soa com vozes nativas.</li>
          <li>📊 <strong>Progresso Visível</strong> → estatísticas em tempo real sobre seu vocabulário e leitura.</li>
        </ul>

        <h2 className="text-[var(--project-tag-bg-light)] dark:text-[var(--project-tag-text-dark)]">
          🎬 Demonstrações
        </h2>

        <div className="space-y-12">
          {demoMedias.map((demo, index) => (
            <DemoCard key={index} {...demo} />
          ))}
        </div>

        <p>
          Não deixe palavras desconhecidas atrapalharem sua leitura.
          Com o Vocab Master, cada página vira uma oportunidade de aprender.
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
            👉 Acesse o projeto
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
