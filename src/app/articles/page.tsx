import { Article, getArticles } from "@/src/lib/articles";

// https://dev.to/kecbm/pessoas-desenvolvedoras-precisam-estudar-todos-os-dias-5dea
// r-das-tarefas-como-pequenas-entregas-levam-a-grandes-resultados-2of6
// https://dev.to/kecbm/codigo-legado-razoes-para-respeitar-e-valorizar-4e9o
// https://dev.to/kecbm/voce-deve-trabalhar-pra-voce-por-zarathon-viana-ldj
// https://dev.to/kecbm/de-volta-ao-codigo-como-conquistei-minha-realocacao-no-mercado-de-tecnologia-4n5n
// https://dev.to/kecbm/como-ser-um-dev-fora-da-curva-por-sseraphini-4og2

// Para mais artigos acesse meu perfil no Dev.to

export default async function ArticlesPage() {
  const articles = getArticles();
  return (
    <div>
      <h1 className="mb-16 mt-4 text-center text-5xl max-sm:text-4xl">
        Articles
      </h1>

      <section className="flex flex-col divide-y divide-zinc-400 overflow-hidden rounded ring-1 ring-zinc-400 dark:divide-zinc-500 dark:ring-zinc-500">
        {articles.length === 0 ? (
          <div className="p-8 text-center text-zinc-500 dark:text-zinc-400">
            No articles yet. Add some articles in src/lib/articles.ts
          </div>
        ) : (
          articles.map((article: Article) => (
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
          ))
        )}
      </section>
    </div>
  );
}
