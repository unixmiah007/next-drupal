import { ArtisanFooter } from "@/components/artisan-market/ArtisanFooter"
import { ArtisanHeader } from "@/components/artisan-market/ArtisanHeader"
import { CartProvider } from "@/components/artisan-market/CartProvider"
import { DemoBanner } from "@/components/artisan-market/DemoBanner"
import type { Metadata } from "next"
import type { ReactNode } from "react"

export const metadata: Metadata = {
  title: {
    default: "Artisan Market",
    template: "%s | Artisan Market",
  },
  description:
    "Handcrafted goods from independent makers — live headless ecommerce demo powered by Next.js.",
}

export default function ArtisanMarketLayout({
  children,
}: {
  children: ReactNode
}) {
  return (
    <CartProvider>
      <div className="min-h-screen bg-[#faf7f2] text-amber-950">
        <DemoBanner />
        <ArtisanHeader />
        <main>{children}</main>
        <ArtisanFooter />
      </div>
    </CartProvider>
  )
}
