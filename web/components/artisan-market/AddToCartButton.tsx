"use client"

import { useCart } from "@/components/artisan-market/CartProvider"
import type { ArtisanProduct } from "@/lib/artisan-market/products"
import { useState } from "react"

interface AddToCartButtonProps {
  product: ArtisanProduct
  compact?: boolean
  quantity?: number
}

export function AddToCartButton({
  product,
  compact = false,
  quantity = 1,
}: AddToCartButtonProps) {
  const { addItem } = useCart()
  const [added, setAdded] = useState(false)

  function handleClick() {
    addItem(product, quantity)
    setAdded(true)
    setTimeout(() => setAdded(false), 1500)
  }

  return (
    <button
      type="button"
      onClick={handleClick}
      className={
        compact
          ? `rounded-lg px-3 py-1.5 text-xs font-semibold transition ${
              added
                ? "bg-emerald-600 text-white"
                : "bg-amber-800 text-amber-50 hover:bg-amber-700"
            }`
          : `w-full rounded-xl py-3 text-sm font-semibold transition ${
              added
                ? "bg-emerald-600 text-white"
                : "bg-amber-800 text-amber-50 hover:bg-amber-700"
            }`
      }
    >
      {added ? "Added ✓" : compact ? "Add" : "Add to cart"}
    </button>
  )
}
