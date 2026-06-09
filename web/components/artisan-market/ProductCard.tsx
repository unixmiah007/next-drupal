"use client"

import { AddToCartButton } from "@/components/artisan-market/AddToCartButton"
import { Link } from "@/components/navigation/Link"
import type { ArtisanProduct } from "@/lib/artisan-market/products"
import { formatPrice } from "@/lib/artisan-market/products"

interface ProductCardProps {
  product: ArtisanProduct
}

export function ProductCard({ product }: ProductCardProps) {
  return (
    <article className="group flex flex-col overflow-hidden rounded-2xl border border-amber-200/80 bg-white shadow-sm transition hover:border-amber-300 hover:shadow-lg hover:shadow-amber-900/5">
      <Link
        href={`/demo/artisan-market/products/${product.slug}`}
        className="no-underline"
      >
        <div
          className={`relative flex h-44 items-center justify-center bg-gradient-to-br ${product.gradient} sm:h-52`}
        >
          <span className="text-5xl transition group-hover:scale-110">{product.emoji}</span>
          <span className="absolute left-3 top-3 rounded-full bg-white/80 px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-amber-800">
            {product.category}
          </span>
        </div>
      </Link>
      <div className="flex flex-1 flex-col p-4">
        <Link
          href={`/demo/artisan-market/products/${product.slug}`}
          className="no-underline"
        >
          <h3 className="font-bold text-amber-950 transition group-hover:text-amber-700">
            {product.name}
          </h3>
        </Link>
        <p className="mt-1 line-clamp-2 flex-1 text-sm text-amber-900/60">
          {product.description}
        </p>
        <p className="mt-1 text-xs text-amber-800/50">by {product.maker}</p>
        <div className="mt-4 flex items-center justify-between gap-2">
          <span className="text-lg font-bold text-amber-900">
            {formatPrice(product.price)}
          </span>
          <AddToCartButton product={product} compact />
        </div>
      </div>
    </article>
  )
}
