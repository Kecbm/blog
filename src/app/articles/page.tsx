import { Article, getArticles } from "@/src/lib/articles";
import { ArrowUpRight } from "lucide-react";

// Para mais artigos acesse meu perfil no Dev.to

function truncateTitle(title: string, tags: string[]): { truncated: string; isLong: boolean } {
  const tagsString = tags.map(tag => `#${tag}`).join(' ');
  const tagsLength = tagsString.length;

  const MAX_TOTAL_LENGTH = 67;
  const MAX_TITLE_LENGTH = MAX_TOTAL_LENGTH - tagsLength;

  if (title.length <= MAX_TITLE_LENGTH) {
    return { truncated: title, isLong: false };
  }

  const truncated = title.substring(0, MAX_TITLE_LENGTH - 3) + "...";
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
            className="group flex items-center justify-between px-4 py-2 transition-all sm:p-4 text-[#527b10] sm:hover:bg-[#6ca20e]/10 sm:hover:text-[#6ca20e] sm:hover:font-bold dark:text-[#AFEC4A] dark:sm:hover:bg-[#CDF37B]/10 dark:sm:hover:text-[#CDF37B]"
            key={article.slug}
          >
            <div className="flex gap-1 gap-x-2 max-sm:flex-col sm:items-center">
              {(() => {
                const { truncated, isLong } = truncateTitle(article.title, article.tags || []);
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
              <ArrowUpRight className="size-5 shrink-0 text-[#527b10] transition-all group-hover:rotate-45 group-hover:text-[#6ca20e] dark:text-[#AFEC4A] dark:group-hover:text-[#CDF37B]" />
            </div>
          </a>
        ))}
      </section>

      <p className="mt-8 text-center text-zinc-600 dark:text-zinc-400">
        You&apos;ll find more of my articles on{" "}
        <a
          href="https://dev.to/kecbm"
          className="underline underline-offset-4 transition-all hover:text-[#6ca20e] hover:font-bold decoration-[#6ca20e] dark:hover:text-[#CDF37B] dark:decoration-[#CDF37B]"
        >
          my Dev.to profile
        </a>, take a look!
      </p>
    </div>
  );
}
