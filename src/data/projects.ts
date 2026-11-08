import {
  budgetAnalyzerImage,
  dadsBooksImage,
  deseretImage,
  scriptworksImage,
  transliterationImage,
} from "./projectImages";

export type ProjectStatus = "live" | "in-progress" | "personal";
export type ProjectCategory = "featured" | "tools" | "family" | "experiments";

export type Project = {
  id: string;
  name: string;
  tagline: string;
  description: string;
  problem: string;
  role: string;
  outcome: string;
  status: ProjectStatus;
  category: ProjectCategory;
  featured: boolean;
  stack: string[];
  image: string;
  imageAlt: string;
  href?: string;
  repo?: string;
};

export const PROJECTS: Project[] = [
  {
    id: "scriptworks",
    name: "ScriptWorks",
    tagline: "Historical & fictional script transliterator",
    description:
      "Type Latin or English and see Baybayin, Aurebesh, Deseret, Tengwar, Klingon, and more — with fonts, documents, and downloads.",
    problem:
      "I wanted a reliable way to transliterate English and Latin text into Baybayin and other writing systems — and to share fonts, documents, and finished work without juggling spreadsheets and one-off scripts.",
    role: "Solo founder & engineer — product design, React UI, transliteration logic, font/document tooling, and GitHub Pages deployment.",
    outcome:
      "A live multi-script SPA (ScriptWorks / The Baybayin Project) that grew from transliterating Ang Aklat Ni Mormon into Baybayin into a broader toolkit for historical and fictional scripts.",
    status: "live",
    category: "featured",
    featured: true,
    stack: ["React", "TypeScript", "Vite"],
    image: scriptworksImage,
    imageAlt:
      "ScriptWorks home page with Transliterator and project navigation cards",
    href: "https://cmckinney-59.github.io/the-baybayin-project/",
    repo: "https://github.com/cmckinney-59/the-baybayin-project",
  },
  {
    id: "deseret",
    name: "The Deseret Alphabet Society",
    tagline: "Learn, read, and transliterate Deseret",
    description:
      "Guides, historical documents, fonts, events, and a live English ↔ Deseret transliterator in one focused site.",
    problem:
      "Deseret Alphabet materials were scattered. Learners needed a single place for history, reading guides, fonts, and a working transliterator.",
    role: "Solo builder — site architecture, content structure, Deseret transliteration UX, and deployment.",
    outcome:
      "A dedicated public site for the Deseret Alphabet, built on the same stack as ScriptWorks but scoped entirely to Deseret learning and use.",
    status: "live",
    category: "featured",
    featured: true,
    stack: ["React", "TypeScript", "Vite"],
    image: deseretImage,
    imageAlt: "The Deseret Alphabet Society About page with honeybee emblem",
    href: "https://cmckinney-59.github.io/the-deseret-alphabet-society/",
    repo: "https://github.com/cmckinney-59/the-deseret-alphabet-society",
  },
  {
    id: "budget-analyzer",
    name: "Budget Analyzer",
    tagline: "Spreadsheet-powered household budgeting",
    description:
      "Set budgets, categorize bank exports, and analyze spending from Excel — all in the browser.",
    problem:
      "Our household needed a private way to turn bank CSVs into categorized budgets without uploading finances to a third-party service.",
    role: "Solo engineer — Excel/CSV parsing, categorization workflow, and local-first React UI.",
    outcome:
      "A practical local-first budgeting tool used for real household money tracking, with set / categorize / analyze flows.",
    status: "personal",
    category: "tools",
    featured: true,
    stack: ["React", "TypeScript", "xlsx"],
    image: budgetAnalyzerImage,
    imageAlt: "Budget Analyzer categorize screen with spreadsheet upload area",
  },
  {
    id: "dads-books",
    name: "Dad's Books",
    tagline: "A personal library tracker for family",
    description:
      "A site for my dad to browse and update his book collection with a simple enter / list / analytics flow.",
    problem:
      "Dad needed a simple place to log books he’d read without a complicated library app.",
    role: "Designer & developer — form UX, book list, and lightweight analytics.",
    outcome:
      "A live family web app focused on clarity: enter a book, browse the list, and glance at reading habits.",
    status: "live",
    category: "family",
    featured: false,
    stack: ["Web"],
    image: dadsBooksImage,
    imageAlt: "Dad's Books app showing the Enter Book form",
    href: "https://cmckinney-59.github.io/dads-books/",
    repo: "https://github.com/cmckinney-59/dads-books",
  },
  {
    id: "transliteration-projects",
    name: "Transliteration Projects",
    tagline: "Fonts, prints, and script experiments",
    description:
      "Alphabet assets — Baybayin, Deseret, Aurebesh, and more — that feed ScriptWorks and related tools.",
    problem:
      "ScriptWorks needed a workshop of fonts, logos, and print pieces beyond the main web app.",
    role: "Designer & curator — font experiments, print layouts, and brand assets for ScriptWorks.",
    outcome:
      "An ongoing archive of transliteration assets and prints, including pieces like a Baybayin Living Christ layout.",
    status: "in-progress",
    category: "experiments",
    featured: false,
    stack: ["Fonts", "Design", "Print"],
    image: transliterationImage,
    imageAlt:
      "Baybayin print of The Living Christ, transliterated by ScriptWorks",
    repo: "https://github.com/cmckinney-59/Transliteration",
  },
];

export const CATEGORY_LABEL: Record<ProjectCategory, string> = {
  featured: "Featured",
  tools: "Tools",
  family: "Family apps",
  experiments: "Experiments",
};

export function getProjectById(id: string): Project | undefined {
  return PROJECTS.find((project) => project.id === id);
}

export function getFeaturedProjects(): Project[] {
  return PROJECTS.filter((project) => project.featured);
}
