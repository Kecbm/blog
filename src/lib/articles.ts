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
      "De Volta ao Código: Como Conquistei Minha Realocação no Mercado de Tecnologia",
      ["career", "technology", "brasil"],
      "Jul/25",
      "https://dev.to/your-username/de-volta-ao-codigo"
    )
  ];
}
