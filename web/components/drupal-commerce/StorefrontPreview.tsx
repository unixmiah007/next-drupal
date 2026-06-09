import { Link } from "@/components/navigation/Link"

export function StorefrontPreview() {
  return (
    <section className="bg-white py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div>
            <p className="text-sm font-semibold uppercase tracking-wider text-blue-600">
              Storefront preview
            </p>
            <h2 className="mt-2 text-3xl font-black tracking-tight text-slate-900 sm:text-4xl">
              Your Next.js shop window
            </h2>
            <p className="mt-4 text-lg text-slate-600">
              Product data comes from Drupal Commerce over JSON:API. Next.js
              renders a fast, branded storefront — cart, checkout, and all.
            </p>
            <Link
              href="/demo/artisan-market"
              className="mt-6 inline-flex rounded-lg bg-amber-800 px-5 py-2.5 text-sm font-semibold text-white no-underline transition hover:bg-amber-700"
            >
              Open Artisan Market demo →
            </Link>
            <div className="mt-6 space-y-3">
              {[
                "Product images from Drupal media fields",
                "Prices & SKUs from commerce variations",
                "Real-time cart state synced to Drupal orders",
                "Stripe checkout embedded via Commerce Payment",
              ].map((item) => (
                <div key={item} className="flex items-start gap-2 text-sm text-slate-700">
                  <svg className="mt-0.5 h-4 w-4 shrink-0 text-amber-500" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 1 0 0-16 8 8 0 0 0 0 16Zm3.857-9.809a.75.75 0 0 0-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 1 0-1.06 1.061l2.5 2.5a.75.75 0 0 0 1.137-.089l4-5.5Z" clipRule="evenodd" />
                  </svg>
                  {item}
                </div>
              ))}
            </div>
          </div>

          {/* Mock storefront */}
          <div className="overflow-hidden rounded-2xl border border-slate-200 bg-slate-50 shadow-xl shadow-slate-900/10">
            <div className="flex items-center gap-2 border-b border-slate-200 bg-white px-4 py-3">
              <div className="h-2.5 w-2.5 rounded-full bg-red-400" />
              <div className="h-2.5 w-2.5 rounded-full bg-amber-400" />
              <div className="h-2.5 w-2.5 rounded-full bg-emerald-400" />
              <div className="ml-2 h-5 flex-1 rounded-md bg-slate-100" />
              <div className="relative">
                <svg className="h-5 w-5 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
                </svg>
                <span className="absolute -right-1 -top-1 flex h-4 w-4 items-center justify-center rounded-full bg-amber-500 text-[9px] font-bold text-white">
                  2
                </span>
              </div>
            </div>

            <div className="p-4">
              <div className="mb-4 rounded-xl bg-gradient-to-r from-amber-500 to-orange-500 p-6 text-white">
                <p className="text-xs font-semibold uppercase tracking-wider text-amber-100">
                  New collection
                </p>
                <p className="mt-1 text-xl font-black">Artisan Market</p>
                <p className="mt-1 text-sm text-amber-100">Handcrafted goods from Drupal Commerce</p>
              </div>

              <div className="grid grid-cols-2 gap-3">
                {[
                  { name: "Ceramic Mug", price: "$24.00", color: "from-stone-200 to-amber-100" },
                  { name: "Linen Tote", price: "$38.00", color: "from-orange-100 to-rose-100" },
                  { name: "Oak Cutting Board", price: "$56.00", color: "from-amber-100 to-yellow-100" },
                  { name: "Wool Throw", price: "$89.00", color: "from-rose-100 to-pink-100" },
                ].map((product) => (
                  <div key={product.name} className="overflow-hidden rounded-xl border border-slate-200 bg-white">
                    <div className={`h-20 bg-gradient-to-br ${product.color}`} />
                    <div className="p-2.5">
                      <p className="text-xs font-bold text-slate-900">{product.name}</p>
                      <div className="mt-1 flex items-center justify-between">
                        <p className="text-xs font-semibold text-amber-600">{product.price}</p>
                        <button className="rounded bg-blue-600 px-2 py-0.5 text-[9px] font-semibold text-white">
                          Add
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-4 rounded-xl border border-blue-200 bg-blue-50 p-3">
                <div className="flex items-center justify-between text-xs">
                  <span className="font-medium text-slate-700">Cart subtotal</span>
                  <span className="font-bold text-slate-900">$62.00</span>
                </div>
                <button className="mt-2 w-full rounded-lg bg-blue-600 py-2 text-xs font-semibold text-white">
                  Proceed to checkout →
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
