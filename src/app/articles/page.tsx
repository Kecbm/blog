import { Article, getArticles } from "@/src/lib/articles";
import { ArrowUpRight } from "lucide-react";

// Para mais artigos acesse meu perfil no Dev.to

function truncateTitle(title: string): { truncated: string; isLong: boolean } {
  const MAX_LENGTH = 33;

  if (title.length <= MAX_LENGTH) {
    return { truncated: title, isLong: false };
  }

  const truncated = title.substring(0, MAX_LENGTH - 3) + "...";
  return { truncated, isLong: true };
}

export default async function ArticlesPage() {
  const articles = getArticles();
  return (
    <div>
      <h1 className="mb-16 mt-4 text-center text-5xl max-sm:text-4xl">
        Articles
      </h1>

      <section className="flex flex-col divide-y divide-zinc-400 overflow-hidden rounded ring-1 ring-zinc-400 dark:divide-zinc-500 dark:ring-zinc-500">
        {articles.map((article: Article) => (
          <a
            href={article.devToUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center justify-between px-4 py-2 transition-all sm:p-4 sm:hover:bg-[#8338ec]/10 sm:hover:text-[#8338ec] sm:hover:font-bold dark:sm:hover:bg-[#ff006e]/10 dark:sm:hover:text-[#ff006e]"
            key={article.slug}
          >
            <div className="flex gap-1 gap-x-2 max-sm:flex-col sm:items-center">
              {(() => {
                const { truncated, isLong } = truncateTitle(article.title);
                return isLong ? (
                  <span title={article.title} className="cursor-help">
                    {truncated}
                  </span>
                ) : (
                  <span>{truncated}</span>
                );
              })()}{" "}
              <span className="flex gap-2 text-sm text-zinc-500 dark:text-zinc-400">
                {article?.tags?.map((tag) => <span key={tag}>#{tag}</span>)}
              </span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-zinc-500 max-sm:text-sm dark:text-zinc-400">
                {article.date}
              </span>
              <ArrowUpRight className="size-5 shrink-0 text-zinc-800 transition-all group-hover:rotate-45 group-hover:text-[#8338ec] dark:text-zinc-200 dark:group-hover:text-[#ff006e]" />
            </div>
          </a>
        ))}
      </section>
    </div>
  );
}
