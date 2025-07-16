export type Article = {
  id: string;
  slug: string;
  tags: string[];
  title: string;
  date: string;
  devToUrl?: string; // Optional field for dev.to URL
};

// Utility function to generate slug from title
export function generateSlug(title: string): string {
  return title
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, '') // Remove special characters
    .replace(/[\s_-]+/g, '-') // Replace spaces and underscores with hyphens
    .replace(/^-+|-+$/g, ''); // Remove leading/trailing hyphens
}

// Function to create an article with automatic slug generation
export function createArticle(
  title: string,
  tags: string[],
  date: string,
  devToUrl?: string
): Article {
  const slug = generateSlug(title); // Auto-generate slug from title
  return {
    id: slug, // Using slug as ID for consistency
    slug,
    title,
    tags,
    date,
    devToUrl
  };
}

export function getAllTags() {
  return [];
}

// Implementar o corte do title com "..." para nao quebrar o layout

// PROMPT FOR TAGS
// Acesse esse artigo: "". Quais as 3 tags principais que podem classifica-lo de acordo com a relevancia na pesquisa por seo? Me fale apenas as 3 tags

export function getArticles(): Article[] {
  return [
    createArticle(
      "Developers need to study every day",
      ["learning", "productivity", "beginners"],
      "Jul/24",
      "https://dev.to/kecbm/pessoas-desenvolvedoras-precisam-estudar-todos-os-dias-5dea"
    ),
    createArticle(
      "The Power of Tasks: How Small Deliverables Lead to Big Results",
      ["productivity", "agile", "kanban"],
      "Jun/24",
      "https://dev.to/kecbm/o-poder-das-tarefas-como-pequenas-entregas-levam-a-grandes-resultados-2of6"
    ),
    createArticle(
      "Legacy Code: Reasons to Respect and Value It",
      ["legacy", "maintenance", "refactoring"],
      "Feb/24",
      "https://dev.to/kecbm/codigo-legado-razoes-para-respeitar-e-valorizar-4e9o"
    ),
    createArticle(
      "You must work for yourself By Zarathon Viana",
      ["career", "mentorship", "productivity"],
      "Feb/24",
      "https://dev.to/kecbm/voce-deve-trabalhar-pra-voce-por-zarathon-viana-ldj"
    ),
    createArticle(
      "Back to Code: How I Relocated to the Tech Market",
      ["career", "networking", "jobsearch"],
      "Dec/23",
      "https://dev.to/kecbm/de-volta-ao-codigo-como-conquistei-minha-realocacao-no-mercado-de-tecnologia-4n5n"
    ),
    createArticle(
      "How to be an outstanding dev by Seraphini",
      ["career", "development", "learning"],
      "Apr/22",
      "https://dev.to/kecbm/como-ser-um-dev-fora-da-curva-por-sseraphini-4og2"
    )
  ];
}
