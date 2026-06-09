"use client"

import { useCart } from "@/components/artisan-market/CartProvider"
import { Link } from "@/components/navigation/Link"

export function ArtisanHeader() {
  const { itemCount } = useCart()

  return (
    <header className="sticky top-0 z-50 border-b border-amber-200/60 bg-[#faf7f2]/90 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link
          href="/demo/artisan-market"
          className="text-xl font-black tracking-tight text-amber-950 no-underline"
        >
          Artisan<span className="text-amber-600">Market</span>
        </Link>

        <nav className="hidden items-center gap-6 sm:flex">
          <Link
            href="/demo/artisan-market#products"
            className="text-sm font-medium text-amber-900/70 no-underline transition hover:text-amber-950"
          >
            Shop
          </Link>
          <Link
            href="/drupal-commerce"
            className="text-sm font-medium text-amber-900/70 no-underline transition hover:text-amber-950"
          >
            About this demo
          </Link>
        </nav>

        <Link
          href="/demo/artisan-market/cart"
          className="relative inline-flex items-center gap-2 rounded-lg bg-amber-800 px-4 py-2 text-sm font-semibold text-amber-50 no-underline transition hover:bg-amber-700"
        >
          <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
            <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
          </svg>
          Cart
          {itemCount > 0 && (
            <span className="absolute -right-1.5 -top-1.5 flex h-5 w-5 items-center justify-center rounded-full bg-orange-500 text-[10px] font-bold text-white">
              {itemCount}
            </span>
          )}
        </Link>
      </div>
    </header>
  )
}
