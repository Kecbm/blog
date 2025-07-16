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

// https://dev.to/kecbm/pessoas-desenvolvedoras-precisam-estudar-todos-os-dias-5dea
// r-das-tarefas-como-pequenas-entregas-levam-a-grandes-resultados-2of6
// https://dev.to/kecbm/codigo-legado-razoes-para-respeitar-e-valorizar-4e9o
// https://dev.to/kecbm/voce-deve-trabalhar-pra-voce-por-zarathon-viana-ldj
// https://dev.to/kecbm/de-volta-ao-codigo-como-conquistei-minha-realocacao-no-mercado-de-tecnologia-4n5n
// Implementar o corte do title com "..." para nao quebrar o layout

export function getArticles(): Article[] {
  // Example of how you can manually define articles (slug auto-generated from title):
  return [
    createArticle(
      "Frontend Debugging 101",
      ["frontend", "debugging", "javascript"],
      "Jul/25",
      "https://dev.to/your-username/frontend-debugging-101"
    ),
    createArticle(
      "Como ser um dev fora da curva por Seraphini",
      ["career", "technology", "brasil"],
      "Jul/25",
      "https://dev.to/kecbm/como-ser-um-dev-fora-da-curva-por-sseraphini-4og2"
    )
  ];
}
