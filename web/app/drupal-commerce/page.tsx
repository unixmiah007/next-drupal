import { CtaBanner } from "@/components/home/CtaBanner"
import { CommerceDemoCta } from "@/components/drupal-commerce/CommerceDemoCta"
import { CommerceArchitecture } from "@/components/drupal-commerce/CommerceArchitecture"
import { CommerceBenefits } from "@/components/drupal-commerce/CommerceBenefits"
import { CommerceEntities } from "@/components/drupal-commerce/CommerceEntities"
import { CommerceFeatures } from "@/components/drupal-commerce/CommerceFeatures"
import { CommerceFlow } from "@/components/drupal-commerce/CommerceFlow"
import { StorefrontPreview } from "@/components/drupal-commerce/StorefrontPreview"
import { PageHero } from "@/components/layout/PageHero"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Drupal Commerce",
  description:
    "Headless ecommerce with Drupal Commerce 11 and Next.js — products, cart, checkout, and payments via JSON:API.",
}

export default function DrupalCommercePage() {
  return (
    <>
      <PageHero
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Services", href: "/services" },
          { label: "Drupal Commerce" },
        ]}
        badge="Headless ecommerce · Drupal Commerce + Next.js"
        title={
          <>
            Sell with{" "}
            <span className="bg-gradient-to-r from-amber-400 to-orange-300 bg-clip-text text-transparent">
              Drupal Commerce
            </span>
            , shop with{" "}
            <span className="bg-gradient-to-r from-blue-400 to-violet-400 bg-clip-text text-transparent">
              Next.js
            </span>
          </>
        }
        subtitle="Drupal Commerce powers your catalog, cart, orders, and payments. Next.js delivers a blazing-fast, branded storefront — connected over JSON:API with full TypeScript support."
        primaryCta={{ href: "/demo/artisan-market", label: "Open live demo" }}
        secondaryCta={{ href: "#architecture", label: "See architecture" }}
        stats={[
          { value: "D11", label: "Drupal Commerce" },
          { value: "JSON:API", label: "Product data" },
          { value: "N15", label: "Storefront UI" },
          { value: "Stripe", label: "Payments ready" },
        ]}
      />

      <CommerceFeatures />
      <CommerceDemoCta />
      <CommerceArchitecture />
      <StorefrontPreview />
      <CommerceFlow />
      <CommerceEntities />
      <CommerceBenefits />
      <CtaBanner />
    </>
  )
}
