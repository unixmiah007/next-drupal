import { drupal } from "@/lib/drupal"
import type { ArtisanProduct } from "@/lib/artisan-market/products"
import { artisanProducts as fallbackProducts } from "@/lib/artisan-market/products"
import type { DrupalNode } from "next-drupal"

export interface DrupalProductNode extends Omit<DrupalNode, 'path'> {
  body?: {
    summary?: string | null
    processed?: string | null
    value?: string | null
  }
  field_price?: string | number | null
  field_category?: string | null
  field_maker?: string | null
  field_emoji?: string | null
  field_gradient?: string | null
  path?: {
    alias?: string | null
  }
}

function slugFromPath(alias?: string | null): string {
  if (!alias) return ""
  const parts = alias.replace(/\/$/, "").split("/")
  return parts[parts.length - 1] ?? ""
}

export function mapDrupalProduct(node: DrupalProductNode): ArtisanProduct {
  const slug = slugFromPath(node.path?.alias)

  return {
    id: node.id,
    slug,
    name: node.title,
    description:
      node.body?.summary?.replace(/<[^>]+>/g, "").trim() ||
      "Handcrafted artisan product.",
    longDescription: node.body?.processed || node.body?.value || "",
    price: parseFloat(String(node.field_price ?? "0")),
    category: node.field_category || "General",
    maker: node.field_maker || "Artisan Market",
    gradient: node.field_gradient || "from-stone-200 to-amber-100",
    emoji: node.field_emoji || "🛍️",
  }
}

const productParams = {
  "filter[status]": 1,
  "fields[node--product]":
    "title,body,path,field_price,field_category,field_maker,field_emoji,field_gradient",
  sort: "title",
}

export async function getArtisanProducts(): Promise<ArtisanProduct[]> {
  try {
    const nodes = await drupal.getResourceCollection<DrupalProductNode[]>(
      "node--product",
      {
        params: productParams,
        next: { revalidate: 60 },
      }
    )

    if (!nodes?.length) {
      return fallbackProducts
    }

    return nodes.map(mapDrupalProduct).filter((p) => p.slug)
  } catch (error) {
    console.error("Failed to fetch products from Drupal:", error)
    return fallbackProducts
  }
}

export async function getArtisanProductBySlug(
  slug: string
): Promise<ArtisanProduct | undefined> {
  try {
    const path = `/demo/artisan-market/products/${slug}`
    const translatedPath = await drupal.translatePath(path)

    if (!translatedPath?.entity?.uuid) {
      return fallbackProducts.find((p) => p.slug === slug)
    }

    const node = await drupal.getResource<DrupalProductNode>(
      "node--product",
      translatedPath.entity.uuid,
      {
        params: productParams,
        next: { revalidate: 60 },
      }
    )

    if (!node) {
      return fallbackProducts.find((p) => p.slug === slug)
    }

    return mapDrupalProduct(node)
  } catch (error) {
    console.error(`Failed to fetch product ${slug}:`, error)
    return fallbackProducts.find((p) => p.slug === slug)
  }
}

export function getCategoriesFromProducts(products: ArtisanProduct[]): string[] {
  return [...new Set(products.map((p) => p.category))].sort()
}
