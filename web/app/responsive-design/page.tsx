import { ApproachSection } from "@/components/responsive-design/ApproachSection"
import { BenefitsSection } from "@/components/responsive-design/BenefitsSection"
import { BreakpointsSection } from "@/components/responsive-design/BreakpointsSection"
import { ChecklistSection } from "@/components/responsive-design/ChecklistSection"
import { DeviceShowcase } from "@/components/responsive-design/DeviceShowcase"
import { DualStackSection } from "@/components/responsive-design/DualStackSection"
import { ResponsiveCta } from "@/components/responsive-design/ResponsiveCta"
import { ResponsiveHero } from "@/components/responsive-design/ResponsiveHero"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Responsive Design with Drupal & Next.js",
  description:
    "Build beautiful, device-agnostic experiences — Drupal structures content, Next.js renders responsive TypeScript layouts with Tailwind breakpoints.",
}

export default function ResponsiveDesignPage() {
  return (
    <>
      <ResponsiveHero />
      <DeviceShowcase />
      <BenefitsSection />
      <BreakpointsSection />
      <DualStackSection />
      <ApproachSection />
      <ChecklistSection />
      <ResponsiveCta />
    </>
  )
}
