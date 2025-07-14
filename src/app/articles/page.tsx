import { Article, getArticles } from "@/src/lib/articles";

// Para mais artigos acesse meu perfil no Dev.to

export default async function ArticlesPage() {
  const articles = getArticles();
  return (
    <div>
      <h1 className="mb-16 mt-4 text-center text-5xl max-sm:text-4xl">
        Articles
      </h1>

      <section className="flex flex-col divide-y divide-zinc-400 overflow-hidden rounded ring-1 ring-zinc-400 dark:divide-zinc-500 dark:ring-zinc-500">
        {articles.map((article: Article) => (
          article.devToUrl ? (
            <a
              href={article.devToUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between px-4 py-2 transition-all sm:p-4 sm:hover:bg-zinc-200 sm:dark:hover:bg-zinc-800"
              key={article.slug}
            >
              <div className="flex gap-1 gap-x-2 max-sm:flex-col sm:items-center">
                {article.title}{" "}
                <span className="flex gap-2 text-sm text-zinc-500 dark:text-zinc-400">
                  {article?.tags?.map((tag) => <span key={tag}>#{tag}</span>)}
                </span>
              </div>
              <span className="text-zinc-500 max-sm:text-sm dark:text-zinc-400">
                {article.date}
              </span>
            </a>
          ) : (
            <div
              className="flex items-center justify-between px-4 py-2 transition-all sm:p-4"
              key={article.slug}
            >
              <div className="flex gap-1 gap-x-2 max-sm:flex-col sm:items-center">
                {article.title}{" "}
                <span className="flex gap-2 text-sm text-zinc-500 dark:text-zinc-400">
                  {article?.tags?.map((tag) => <span key={tag}>#{tag}</span>)}
                </span>
              </div>
              <span className="text-zinc-500 max-sm:text-sm dark:text-zinc-400">
                {article.date}
              </span>
            </div>
          )
        ))}
      </section>
    </div>
  );
}
