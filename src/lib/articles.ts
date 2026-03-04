export type Article = {
  id: string;
  slug: string;
  tags: string[];
  title: string;
  date: string;
  devToUrl?: string; // Optional field for dev.to URL
};

type ArticleTranslations = {
  en: {
    title: string;
    tags: string[];
  };
  pt: {
    title: string;
    tags: string[];
  };
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

// Function to create an article with automatic slug generation and translations
export function createArticle(
  translations: ArticleTranslations,
  date: string,
  devToUrl?: string,
  language: "en" | "pt" = "en"
): Article {
  const { title, tags } = translations[language];
  const slug = generateSlug(translations.en.title); // Always use English title for slug
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

export function getArticles(language: "en" | "pt" = "en"): Article[] {
  return [
    createArticle(
      {
        en: {
          title: "Developers need to study every day",
          tags: ["learning", "productivity", "beginners"]
        },
        pt: {
          title: "Pessoas desenvolvedoras precisam estudar todos os dias",
          tags: ["aprendizado", "produtividade", "iniciantes"]
        }
      },
      "Jul/24",
      "https://dev.to/kecbm/pessoas-desenvolvedoras-precisam-estudar-todos-os-dias-5dea",
      language
    ),
    createArticle(
      {
        en: {
          title: "The Power of Tasks: How Small Deliverables Lead to Big Results",
          tags: ["productivity", "agile", "kanban"]
        },
        pt: {
          title: "O Poder das Tarefas: Como Pequenas Entregas Levam a Grandes Resultados",
          tags: ["produtividade", "agile", "kanban"]
        }
      },
      "Jun/24",
      "https://dev.to/kecbm/o-poder-das-tarefas-como-pequenas-entregas-levam-a-grandes-resultados-2of6",
      language
    ),
    createArticle(
      {
        en: {
          title: "Legacy Code: Reasons to Respect and Value It",
          tags: ["legacy", "maintenance", "refactoring"]
        },
        pt: {
          title: "Código Legado: Razões para Respeitar e Valorizar",
          tags: ["legado", "manutenção", "refatorar"]
        }
      },
      "Feb/24",
      "https://dev.to/kecbm/codigo-legado-razoes-para-respeitar-e-valorizar-4e9o",
      language
    ),
    createArticle(
      {
        en: {
          title: "You must work for yourself By Zarathon Viana",
          tags: ["career", "mentorship", "productivity"]
        },
        pt: {
          title: "Você deve trabalhar pra você Por Zarathon Viana",
          tags: ["carreira", "mentoria", "produtividade"]
        }
      },
      "Feb/24",
      "https://dev.to/kecbm/voce-deve-trabalhar-pra-voce-por-zarathon-viana-ldj",
      language
    ),
    createArticle(
      {
        en: {
          title: "Back to Code: How I Relocated to the Tech Market",
          tags: ["career", "networking", "jobsearch"]
        },
        pt: {
          title: "De Volta ao Código: Como Conquistei Minha Realocação no Mercado de Tecnologia",
          tags: ["carreira", "networking", "busca-emprego"]
        }
      },
      "Dec/23",
      "https://dev.to/kecbm/de-volta-ao-codigo-como-conquistei-minha-realocacao-no-mercado-de-tecnologia-4n5n",
      language
    ),
    createArticle(
      {
        en: {
          title: "How to be an outstanding dev by Seraphini",
          tags: ["career", "development", "learning"]
        },
        pt: {
          title: "Como ser um dev fora da curva por Seraphini",
          tags: ["carreira", "desenvolvimento", "aprendizado"]
        }
      },
      "Apr/22",
      "https://dev.to/kecbm/como-ser-um-dev-fora-da-curva-por-sseraphini-4og2",
      language
    )
  ];
}
