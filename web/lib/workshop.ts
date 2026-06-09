export type WorkshopTheme =
  | "saas"
  | "commerce"
  | "magazine"
  | "portfolio"
  | "restaurant"
  | "agency"

export interface WorkshopProject {
  id: string
  name: string
  category: string
  description: string
  tags: string[]
  theme: WorkshopTheme
  accent: string
}

export const workshopProjects: WorkshopProject[] = [
  {
    id: "cloudflow",
    name: "CloudFlow",
    category: "SaaS Platform",
    description:
      "Headless SaaS marketing site with pricing tiers, feature grids, and a conversion-focused hero — built with Drupal content blocks and Next.js.",
    tags: ["Next.js", "Drupal", "SaaS"],
    theme: "saas",
    accent: "from-blue-500 to-indigo-600",
  },
  {
    id: "artisan-market",
    name: "Artisan Market",
    category: "E-Commerce",
    description:
      "Product catalog with category filters, hero banners, and mobile-first checkout flows powered by JSON:API product entities.",
    tags: ["E-Commerce", "Mobile", "JSON:API"],
    theme: "commerce",
    accent: "from-amber-500 to-orange-600",
  },
  {
    id: "the-daily-edit",
    name: "The Daily Edit",
    category: "Digital Magazine",
    description:
      "Editorial layout with featured articles, author bylines, and responsive typography — editors publish in Drupal, readers get instant loads.",
    tags: ["Editorial", "Typography", "ISR"],
    theme: "magazine",
    accent: "from-rose-500 to-pink-600",
  },
  {
    id: "studio-nova",
    name: "Studio Nova",
    category: "Creative Portfolio",
    description:
      "Minimal dark portfolio with project galleries and smooth scroll sections. Case studies managed as Drupal nodes with image fields.",
    tags: ["Portfolio", "Dark mode", "Gallery"],
    theme: "portfolio",
    accent: "from-slate-600 to-slate-900",
  },
  {
    id: "bella-cucina",
    name: "Bella Cucina",
    category: "Restaurant",
    description:
      "Warm, inviting restaurant site with menu sections, reservation CTA, and location map — optimized for mobile diners on the go.",
    tags: ["Restaurant", "Local", "Mobile"],
    theme: "restaurant",
    accent: "from-red-600 to-rose-700",
  },
  {
    id: "pulse-agency",
    name: "Pulse Agency",
    category: "Creative Agency",
    description:
      "Bold agency homepage with animated stats, client logos, and service breakdowns — TypeScript components with Drupal-managed case studies.",
    tags: ["Agency", "Animation", "Case studies"],
    theme: "agency",
    accent: "from-violet-500 to-purple-700",
  },
]
