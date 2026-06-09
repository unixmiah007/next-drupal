import { CtaBanner } from "@/components/home/CtaBanner"
import { ProcessSection } from "@/components/home/ProcessSection"
import { ServicesSection } from "@/components/home/ServicesSection"
import { TechStackSection } from "@/components/home/TechStackSection"
import { PageHero } from "@/components/layout/PageHero"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Services",
  description:
    "Headless web development services — Drupal 11, Next.js 15, TypeScript, JSON:API, and more.",
}

export default function ServicesPage() {
  return (
    <>
      <PageHero
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Services" },
        ]}
        badge="Our services · Drupal + Next.js"
        title={
          <>
            Everything you need to ship a{" "}
            <span className="bg-gradient-to-r from-blue-400 to-violet-400 bg-clip-text text-transparent">
              headless product
            </span>
          </>
        }
        subtitle="From content modeling in Drupal to pixel-perfect Next.js front ends — we cover the full stack so you can focus on your business."
        primaryCta={{ href: "/contact", label: "Start a project" }}
        secondaryCta={{ href: "/about", label: "About us" }}
        stats={[
          { value: "6+", label: "Core services" },
          { value: "D11", label: "Drupal 11" },
          { value: "N15", label: "Next.js 15" },
          { value: "TS", label: "TypeScript" },
        ]}
      />
      <ServicesSection />
      <TechStackSection />
      <ProcessSection />
      <CtaBanner />
    </>
  )
}
