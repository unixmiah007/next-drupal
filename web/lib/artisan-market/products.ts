export interface ArtisanProduct {
  id: string
  slug: string
  name: string
  description: string
  longDescription: string
  price: number
  category: string
  maker: string
  gradient: string
  emoji: string
}

/** Fallback products if Drupal is unavailable */
export const artisanProducts: ArtisanProduct[] = [
  {
    id: "fallback-1",
    slug: "hand-thrown-ceramic-mug",
    name: "Hand-Thrown Ceramic Mug",
    description: "Stoneware mug with a speckled glaze, perfect for morning coffee.",
    longDescription:
      "Each mug is thrown on the wheel and fired in a small-batch kiln.",
    price: 24,
    category: "Ceramics",
    maker: "Clay & Co.",
    gradient: "from-stone-300 to-amber-200",
    emoji: "☕",
  },
]

export function shuffleProducts(products: ArtisanProduct[]): ArtisanProduct[] {
  return [...products].sort(() => Math.random() - 0.5)
}

export function formatPrice(price: number): string {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(price)
}
