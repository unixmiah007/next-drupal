"use client"

import { useCart } from "@/components/artisan-market/CartProvider"
import { Link } from "@/components/navigation/Link"
import { useState } from "react"

export default function CheckoutPage() {
  const { items, formattedSubtotal, clearCart, itemCount } = useCart()
  const [submitted, setSubmitted] = useState(false)

  if (itemCount === 0 && !submitted) {
    return (
      <div className="mx-auto max-w-lg px-6 py-20 text-center">
        <h1 className="text-2xl font-black text-amber-950">Nothing to checkout</h1>
        <Link
          href="/demo/artisan-market"
          className="mt-6 inline-flex rounded-xl bg-amber-800 px-6 py-3 text-sm font-semibold text-amber-50 no-underline"
        >
          Go shopping
        </Link>
      </div>
    )
  }

  if (submitted) {
    return (
      <div className="mx-auto max-w-lg px-6 py-20 text-center">
        <p className="text-5xl">✓</p>
        <h1 className="mt-4 text-2xl font-black text-amber-950">
          Order placed — demo complete!
        </h1>
        <p className="mt-4 text-amber-900/70">
          In a real build, this order would be created in{" "}
          <strong>Drupal Commerce</strong> and payment processed via{" "}
          <strong>Stripe</strong>. Your customer gets this exact experience.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <Link
            href="/demo/artisan-market"
            className="rounded-xl bg-amber-800 px-6 py-3 text-sm font-semibold text-amber-50 no-underline hover:bg-amber-700"
          >
            Shop again
          </Link>
          <Link
            href="/drupal-commerce"
            className="rounded-xl border border-amber-300 px-6 py-3 text-sm font-semibold text-amber-800 no-underline hover:bg-amber-50"
          >
            Learn about Drupal Commerce
          </Link>
          <Link
            href="/contact"
            className="rounded-xl border border-amber-300 px-6 py-3 text-sm font-semibold text-amber-800 no-underline hover:bg-amber-50"
          >
            Build your store
          </Link>
        </div>
      </div>
    )
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    clearCart()
    setSubmitted(true)
  }

  return (
    <div className="mx-auto max-w-3xl px-6 py-12">
      <h1 className="text-3xl font-black text-amber-950">Checkout</h1>
      <p className="mt-1 text-sm text-amber-800/50">
        Demo checkout — no payment will be processed
      </p>

      <form onSubmit={handleSubmit} className="mt-8 grid gap-8 lg:grid-cols-2">
        <div className="space-y-4">
          <h2 className="font-bold text-amber-900">Shipping</h2>
          <input
            required
            placeholder="Full name"
            className="w-full rounded-xl border border-amber-200 px-4 py-2.5 focus:border-amber-500 focus:outline-none focus:ring-2 focus:ring-amber-500/20"
          />
          <input
            required
            type="email"
            placeholder="Email"
            className="w-full rounded-xl border border-amber-200 px-4 py-2.5 focus:border-amber-500 focus:outline-none focus:ring-2 focus:ring-amber-500/20"
          />
          <input
            required
            placeholder="Address"
            className="w-full rounded-xl border border-amber-200 px-4 py-2.5 focus:border-amber-500 focus:outline-none focus:ring-2 focus:ring-amber-500/20"
          />
          <div className="grid grid-cols-2 gap-4">
            <input
              required
              placeholder="City"
              className="rounded-xl border border-amber-200 px-4 py-2.5 focus:border-amber-500 focus:outline-none"
            />
            <input
              required
              placeholder="ZIP"
              className="rounded-xl border border-amber-200 px-4 py-2.5 focus:border-amber-500 focus:outline-none"
            />
          </div>
        </div>

        <div>
          <div className="rounded-2xl border border-amber-200 bg-white p-6">
            <h2 className="font-bold text-amber-900">Order summary</h2>
            <ul className="mt-4 space-y-2">
              {items.map(({ product, quantity }) => (
                <li
                  key={product.id}
                  className="flex justify-between text-sm text-amber-900/70"
                >
                  <span>
                    {product.name} × {quantity}
                  </span>
                </li>
              ))}
            </ul>
            <div className="mt-4 flex justify-between border-t border-amber-100 pt-4 font-bold text-amber-950">
              <span>Total</span>
              <span>{formattedSubtotal}</span>
            </div>
            <button
              type="submit"
              className="mt-6 w-full rounded-xl bg-amber-800 py-3 text-sm font-semibold text-amber-50 hover:bg-amber-700"
            >
              Place order (demo)
            </button>
          </div>
        </div>
      </form>
    </div>
  )
}
