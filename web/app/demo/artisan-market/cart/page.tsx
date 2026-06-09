"use client"

import { useCart } from "@/components/artisan-market/CartProvider"
import { Link } from "@/components/navigation/Link"
import { formatPrice } from "@/lib/artisan-market/products"

export default function CartPage() {
  const { items, formattedSubtotal, updateQuantity, removeItem, itemCount } =
    useCart()

  if (itemCount === 0) {
    return (
      <div className="mx-auto max-w-lg px-6 py-20 text-center">
        <p className="text-5xl">🛒</p>
        <h1 className="mt-4 text-2xl font-black text-amber-950">
          Your cart is empty
        </h1>
        <p className="mt-2 text-amber-900/60">
          Browse our artisan collection and add something special.
        </p>
        <Link
          href="/demo/artisan-market#products"
          className="mt-8 inline-flex rounded-xl bg-amber-800 px-6 py-3 text-sm font-semibold text-amber-50 no-underline hover:bg-amber-700"
        >
          Continue shopping
        </Link>
      </div>
    )
  }

  return (
    <div className="mx-auto max-w-3xl px-6 py-12">
      <h1 className="text-3xl font-black text-amber-950">Your cart</h1>
      <p className="mt-1 text-amber-900/60">{itemCount} items</p>

      <ul className="mt-8 space-y-4">
        {items.map(({ product, quantity }) => (
          <li
            key={product.id}
            className="flex gap-4 rounded-2xl border border-amber-200 bg-white p-4"
          >
            <div
              className={`flex h-20 w-20 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br ${product.gradient}`}
            >
              <span className="text-2xl">{product.emoji}</span>
            </div>
            <div className="flex flex-1 flex-col sm:flex-row sm:items-center sm:justify-between">
              <div>
                <Link
                  href={`/demo/artisan-market/products/${product.slug}`}
                  className="font-bold text-amber-950 no-underline hover:text-amber-700"
                >
                  {product.name}
                </Link>
                <p className="text-sm text-amber-800/60">{product.maker}</p>
                <p className="mt-1 font-semibold text-amber-900">
                  {formatPrice(product.price)}
                </p>
              </div>
              <div className="mt-3 flex items-center gap-3 sm:mt-0">
                <div className="flex items-center rounded-lg border border-amber-200">
                  <button
                    type="button"
                    onClick={() => updateQuantity(product.id, quantity - 1)}
                    className="px-3 py-1.5 text-amber-800 hover:bg-amber-50"
                  >
                    −
                  </button>
                  <span className="w-8 text-center text-sm font-semibold">
                    {quantity}
                  </span>
                  <button
                    type="button"
                    onClick={() => updateQuantity(product.id, quantity + 1)}
                    className="px-3 py-1.5 text-amber-800 hover:bg-amber-50"
                  >
                    +
                  </button>
                </div>
                <button
                  type="button"
                  onClick={() => removeItem(product.id)}
                  className="text-sm text-red-600 hover:text-red-700"
                >
                  Remove
                </button>
              </div>
            </div>
          </li>
        ))}
      </ul>

      <div className="mt-8 rounded-2xl border border-amber-200 bg-[#f5f0e8] p-6">
        <div className="flex justify-between text-lg font-bold text-amber-950">
          <span>Subtotal</span>
          <span>{formattedSubtotal}</span>
        </div>
        <p className="mt-1 text-xs text-amber-800/50">
          Shipping calculated at checkout (demo)
        </p>
        <Link
          href="/demo/artisan-market/checkout"
          className="mt-6 flex w-full items-center justify-center rounded-xl bg-amber-800 py-3 text-sm font-semibold text-amber-50 no-underline hover:bg-amber-700"
        >
          Proceed to checkout →
        </Link>
      </div>
    </div>
  )
}
