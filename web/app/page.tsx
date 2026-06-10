import { CtaBanner } from "@/components/home/CtaBanner"
import { FeaturedNotes } from "@/components/home/FeaturedNotes"
import { HeroBanner } from "@/components/home/HeroBanner"
import { ProcessSection } from "@/components/home/ProcessSection"
import { ServicesSection } from "@/components/home/ServicesSection"
import { TechStackSection } from "@/components/home/TechStackSection"
import { drupal } from "@/lib/drupal"
import type { Metadata } from "next"
import type { DrupalNode } from "next-drupal"

export const metadata: Metadata = {
  title: "Web Development with Next.js & Drupal",
  description:
    "Headless web development services — Drupal 11 content management with Next.js 15 and TypeScript front ends.",
}

export default async function Home() {
  let nodes: DrupalNode[] = []

  try {
    const result = await drupal.getResourceCollection<DrupalNode[]>("node--note", {
      params: {
        "filter[status]": 1,
        "fields[node--note]": "title,path,body",
        sort: "title",
      },
      next: {
        revalidate: 3600,
      },
    })
    nodes = result ?? []
  } catch (error) {
    console.error("Failed to fetch featured notes from Drupal:", error)
    // nodes remains empty array, page renders without featured notes
  }

  return (
    <>
      <HeroBanner />
      <ServicesSection />
      <TechStackSection />
      <ProcessSection />
      <FeaturedNotes nodes={nodes} />
      <CtaBanner />
    </>
  )
}
