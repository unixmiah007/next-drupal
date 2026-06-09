import { AddToCartButton } from "@/components/artisan-market/AddToCartButton"
import { Link } from "@/components/navigation/Link"
import {
  getArtisanProductBySlug,
  getArtisanProducts,
} from "@/lib/artisan-market/drupal"
import { formatPrice } from "@/lib/artisan-market/products"
import type { Metadata } from "next"
import { notFound } from "next/navigation"

interface ProductPageProps {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  const products = await getArtisanProducts()
  return products.map((p) => ({ slug: p.slug }))
}

export async function generateMetadata({
  params,
}: ProductPageProps): Promise<Metadata> {
  const { slug } = await params
  const product = await getArtisanProductBySlug(slug)
  return { title: product?.name ?? "Product" }
}

export default async function ProductPage({ params }: ProductPageProps) {
  const { slug } = await params
  const product = await getArtisanProductBySlug(slug)

  if (!product) notFound()

  return (
    <div className="mx-auto max-w-6xl px-6 py-12">
      <Link
        href="/demo/artisan-market#products"
        className="inline-flex items-center gap-1 text-sm font-medium text-amber-700 no-underline hover:text-amber-900"
      >
        ← Back to shop
      </Link>

      <div className="mt-8 grid gap-10 lg:grid-cols-2">
        <div
          className={`flex aspect-square items-center justify-center rounded-3xl bg-gradient-to-br ${product.gradient} shadow-lg`}
        >
          <span className="text-8xl sm:text-9xl">{product.emoji}</span>
        </div>

        <div>
          <span className="rounded-full bg-amber-100 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-amber-800">
            {product.category}
          </span>
          <h1 className="mt-4 text-3xl font-black text-amber-950 sm:text-4xl">
            {product.name}
          </h1>
          <p className="mt-2 text-sm text-amber-800/60">
            Handmade by {product.maker}
          </p>
          <p className="mt-2 text-3xl font-bold text-amber-900">
            {formatPrice(product.price)}
          </p>
          <div
            className="prose prose-amber mt-6 max-w-none leading-relaxed text-amber-900/70"
            dangerouslySetInnerHTML={{ __html: product.longDescription }}
          />
          <div className="mt-8 max-w-xs">
            <AddToCartButton product={product} />
          </div>
          <p className="mt-4 text-xs text-amber-800/50">
            Free shipping on orders over $75 · Demo store, no real charges
          </p>
        </div>
      </div>
    </div>
  )
}
