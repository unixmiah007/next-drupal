import { Link } from "@/components/navigation/Link"

export function CommerceDemoCta() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-amber-600 via-orange-600 to-amber-800 py-20 text-white sm:py-24">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-white/10 via-transparent to-transparent" />
      <div className="relative mx-auto max-w-6xl px-6">
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <div>
            <p className="text-sm font-semibold uppercase tracking-wider text-amber-200">
              Live demo
            </p>
            <h2 className="mt-2 text-3xl font-black tracking-tight sm:text-4xl">
              Try Artisan Market
            </h2>
            <p className="mt-4 text-lg text-amber-100">
              Walk through a fully working storefront demo — browse artisan
              products, add to cart, and complete checkout. Show your customers
              exactly what a Drupal Commerce + Next.js store looks like.
            </p>
            <ul className="mt-6 space-y-2 text-sm text-amber-100/90">
              {[
                "16 handcrafted demo products",
                "Working cart with local storage",
                "Full checkout flow (demo mode)",
                "Separate branded storefront experience",
              ].map((item) => (
                <li key={item} className="flex items-center gap-2">
                  <span className="text-amber-200">✓</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="flex flex-col items-center justify-center rounded-3xl border border-white/20 bg-white/10 p-8 backdrop-blur-sm">
            <p className="text-6xl">🛍️</p>
            <p className="mt-4 text-center text-xl font-bold">Artisan Market</p>
            <p className="mt-1 text-center text-sm text-amber-200">
              Headless ecommerce demo store
            </p>
            <Link
              href="/demo/artisan-market"
              className="mt-8 inline-flex w-full items-center justify-center rounded-xl bg-white px-8 py-4 text-sm font-bold text-amber-800 no-underline shadow-xl transition hover:bg-amber-50 sm:w-auto"
            >
              Open live demo →
            </Link>
            <p className="mt-4 text-center text-xs text-amber-200/70">
              /demo/artisan-market
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
