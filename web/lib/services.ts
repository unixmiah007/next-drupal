export type ServiceIcon =
  | "headless"
  | "nextjs"
  | "drupal"
  | "api"
  | "design"
  | "performance"

export interface Service {
  id: string
  title: string
  description: string
  icon: ServiceIcon
  features: string[]
  accent: string
  href?: string
}

export interface ProcessStep {
  step: number
  title: string
  description: string
}

export interface TechStackItem {
  name: string
  role: string
  description: string
}

export const services: Service[] = [
  {
    id: "headless-cms",
    title: "Headless CMS Architecture",
    description:
      "Decouple Drupal's editorial power from your front end. Content teams manage everything in Drupal while visitors get a blazing-fast Next.js experience.",
    icon: "headless",
    features: [
      "Structured content modeling",
      "Multi-channel publishing",
      "Editor-friendly workflows",
    ],
    accent: "from-violet-500 to-purple-600",
  },
  {
    id: "nextjs-frontend",
    title: "Next.js Front-End Development",
    description:
      "Modern React applications with the App Router, Server Components, and edge-ready performance — built in TypeScript for maintainability.",
    icon: "nextjs",
    features: [
      "App Router & Server Components",
      "Static & dynamic rendering",
      "Full TypeScript codebase",
    ],
    accent: "from-slate-700 to-slate-900",
  },
  {
    id: "drupal-backend",
    title: "Drupal 11 Back-End",
    description:
      "Enterprise-grade CMS with flexible content types, workflows, permissions, and a mature module ecosystem powering your headless API.",
    icon: "drupal",
    features: [
      "Custom content types & fields",
      "Role-based access control",
      "Drupal 11 & JSON:API",
    ],
    accent: "from-sky-500 to-blue-600",
  },
  {
    id: "jsonapi-integration",
    title: "JSON:API Integration",
    description:
      "Seamless data fetching between Drupal and Next.js using the next-drupal client, path translation, and on-demand revalidation.",
    icon: "api",
    features: [
      "next-drupal 2.0 client",
      "Path alias resolution",
      "Cache tag revalidation",
    ],
    accent: "from-emerald-500 to-teal-600",
  },
  {
    id: "ui-ux",
    title: "UI/UX Design & Theming",
    description:
      "Pixel-perfect, accessible interfaces with Tailwind CSS. Component-driven design systems that scale with your product.",
    icon: "design",
    features: [
      "Responsive layouts",
      "Accessible components",
      "Tailwind design system",
    ],
    accent: "from-rose-500 to-pink-600",
    href: "/responsive-design",
  },
  {
    id: "performance",
    title: "Performance & SEO",
    description:
      "Core Web Vitals optimization, ISR, image optimization, and metadata management so your site ranks and loads fast.",
    icon: "performance",
    features: [
      "ISR & edge caching",
      "Image optimization",
      "SEO metadata & sitemaps",
    ],
    accent: "from-amber-500 to-orange-600",
  },
]

export const processSteps: ProcessStep[] = [
  {
    step: 1,
    title: "Discover & Plan",
    description:
      "Audit your content model, define user journeys, and architect the headless stack.",
  },
  {
    step: 2,
    title: "Build in Drupal",
    description:
      "Configure content types, fields, permissions, and JSON:API exposure in Drupal 11.",
  },
  {
    step: 3,
    title: "Develop in Next.js",
    description:
      "Build typed React components, dynamic routes, and connect via next-drupal.",
  },
  {
    step: 4,
    title: "Launch & Scale",
    description:
      "Deploy, monitor performance, and iterate with preview mode and cache revalidation.",
  },
]

export const techStack: TechStackItem[] = [
  {
    name: "Drupal 11",
    role: "Content Engine",
    description:
      "Structured content, workflows, and a battle-tested CMS powering your JSON:API.",
  },
  {
    name: "Next.js 15",
    role: "Front-End Framework",
    description:
      "React Server Components, App Router, and edge-ready rendering for modern UX.",
  },
  {
    name: "TypeScript",
    role: "Type Safety",
    description:
      "End-to-end typed data models from Drupal entities to React components.",
  },
  {
    name: "next-drupal",
    role: "Integration Layer",
    description:
      "Official JSON:API client with path translation, draft mode, and revalidation.",
  },
]
