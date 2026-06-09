export interface ResponsiveBenefit {
  id: string
  title: string
  description: string
  icon: "mobile" | "tablet" | "desktop" | "fluid" | "images" | "touch"
}

export interface Breakpoint {
  name: string
  width: string
  description: string
  tailwind: string
}

export interface ResponsiveFeature {
  title: string
  drupal: string
  nextjs: string
}

export interface ResponsivePrinciple {
  step: number
  title: string
  description: string
}

export const benefits: ResponsiveBenefit[] = [
  {
    id: "mobile-first",
    title: "Mobile-First by Default",
    description:
      "Next.js components are built from the smallest screen up — Tailwind's responsive prefixes scale layouts gracefully to tablet and desktop.",
    icon: "mobile",
  },
  {
    id: "fluid-layouts",
    title: "Fluid Grid Systems",
    description:
      "CSS Grid and Flexbox layouts adapt to any viewport. Content from Drupal flows into responsive containers without extra markup.",
    icon: "fluid",
  },
  {
    id: "adaptive-images",
    title: "Adaptive Images",
    description:
      "Next.js Image component serves optimized, correctly sized images per device — Drupal media fields power the source assets.",
    icon: "images",
  },
  {
    id: "touch-friendly",
    title: "Touch-Friendly UI",
    description:
      "Generous tap targets, swipe-friendly carousels, and accessible navigation patterns designed for phones and tablets.",
    icon: "touch",
  },
  {
    id: "tablet-optimized",
    title: "Tablet-Optimized",
    description:
      "Intermediate breakpoints get dedicated layouts — not just scaled-down desktop or blown-up mobile views.",
    icon: "tablet",
  },
  {
    id: "desktop-rich",
    title: "Desktop-Rich Experiences",
    description:
      "Multi-column layouts, hover states, and expanded navigation unlock on large screens without compromising smaller devices.",
    icon: "desktop",
  },
]

export const breakpoints: Breakpoint[] = [
  {
    name: "Mobile",
    width: "< 640px",
    description: "Single column, stacked navigation, thumb-friendly CTAs",
    tailwind: "default",
  },
  {
    name: "Tablet",
    width: "640px – 1024px",
    description: "Two-column grids, collapsible menus, optimized imagery",
    tailwind: "sm: / md:",
  },
  {
    name: "Desktop",
    width: "1024px+",
    description: "Full navigation, multi-column layouts, rich media",
    tailwind: "lg: / xl:",
  },
  {
    name: "Wide",
    width: "1280px+",
    description: "Max-width containers, expanded whitespace, hero banners",
    tailwind: "xl: / 2xl:",
  },
]

export const features: ResponsiveFeature[] = [
  {
    title: "Content Structure",
    drupal: "Structured fields, media types, and responsive image styles",
    nextjs: "Typed components map Drupal fields to responsive layouts",
  },
  {
    title: "Navigation",
    drupal: "Menu trees managed in Drupal admin",
    nextjs: "Hamburger on mobile, full nav on desktop — same JSON:API data",
  },
  {
    title: "Typography",
    drupal: "Rich text with semantic HTML from WYSIWYG",
    nextjs: "Tailwind prose scales font sizes per breakpoint",
  },
  {
    title: "Performance",
    drupal: "Image derivatives and caching at the API layer",
    nextjs: "ISR, lazy loading, and WebP/AVIF via next/image",
  },
]

export const principles: ResponsivePrinciple[] = [
  {
    step: 1,
    title: "Model in Drupal",
    description:
      "Define content types with separate fields for mobile teasers, hero images, and body copy — editors control what appears on each surface.",
  },
  {
    step: 2,
    title: "Fetch via JSON:API",
    description:
      "next-drupal retrieves structured content with image URLs, alt text, and path aliases — one source of truth for all devices.",
  },
  {
    step: 3,
    title: "Render Responsively",
    description:
      "React Server Components render device-appropriate layouts using Tailwind breakpoints — no duplicate templates per screen size.",
  },
  {
    step: 4,
    title: "Test & Iterate",
    description:
      "Preview in Drupal draft mode, validate across breakpoints, and ship with confidence using Core Web Vitals monitoring.",
  },
]

export const stats = [
  { value: "60%+", label: "Traffic from mobile devices" },
  { value: "< 2s", label: "Target LCP on 4G" },
  { value: "100%", label: "Responsive coverage" },
  { value: "WCAG", label: "Accessibility aligned" },
]
