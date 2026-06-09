function FlowArrow({ label }: { label: string }) {
  return (
    <div className="flex flex-col items-center py-3">
      <div className="h-6 w-px bg-gradient-to-b from-amber-500 to-blue-500" />
      <svg className="h-3.5 w-3.5 text-blue-400" viewBox="0 0 20 20" fill="currentColor">
        <path fillRule="evenodd" d="M10 3a.75.75 0 0 1 .75.75v10.638l3.96-4.158a.75.75 0 1 1 1.08 1.04l-5.25 5.5a.75.75 0 0 1-1.08 0l-5.25-5.5a.75.75 0 1 1 1.08-1.04l3.96 4.158V3.75A.75.75 0 0 1 10 3Z" clipRule="evenodd" />
      </svg>
      <span className="mt-1 rounded-full bg-amber-500/20 px-2 py-0.5 text-[10px] font-semibold text-amber-300">
        {label}
      </span>
    </div>
  )
}

function SideArrow({ label, direction }: { label: string; direction: "left" | "right" }) {
  return (
    <div className={`flex items-center gap-1 ${direction === "left" ? "flex-row-reverse" : ""}`}>
      <div className="h-px w-6 bg-gradient-to-r from-amber-500 to-blue-500 sm:w-10" />
      <svg
        className={`h-3.5 w-3.5 text-blue-400 ${direction === "left" ? "rotate-180" : ""}`}
        viewBox="0 0 20 20"
        fill="currentColor"
      >
        <path fillRule="evenodd" d="M3 10a.75.75 0 0 1 .75-.75h10.638l-3.96-4.158a.75.75 0 1 1 1.08-1.04l5.25 5.5a.75.75 0 0 1 0 1.08l-5.25 5.5a.75.75 0 1 1-1.08-1.04l3.96-4.158H3.75A.75.75 0 0 1 3 10Z" clipRule="evenodd" />
      </svg>
      <span className="rounded bg-blue-500/20 px-1.5 py-0.5 text-[9px] font-medium text-blue-300">
        {label}
      </span>
    </div>
  )
}

export function CommerceArchitecture() {
  return (
    <section id="architecture" className="bg-slate-950 py-20 text-white sm:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <div className="text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-amber-400">
            Architecture
          </p>
          <h2 className="mt-2 text-3xl font-black tracking-tight sm:text-4xl">
            Drupal Commerce + Next.js stack
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-slate-400">
            Commerce entities live in Drupal 11. Your Next.js storefront reads and
            writes them over JSON:API — one database, two powerful layers.
          </p>
        </div>

        <div className="relative mt-14 overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-6 sm:p-10">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-amber-600/10 via-transparent to-blue-600/10" />

          <div className="relative space-y-2">
            {/* Shopper */}
            <div className="flex justify-center">
              <div className="rounded-2xl border border-white/10 bg-slate-800/80 px-6 py-4 text-center">
                <p className="font-bold">🛍️ Shoppers</p>
                <p className="text-xs text-slate-400">Browse · Cart · Checkout</p>
              </div>
            </div>

            <FlowArrow label="HTTPS" />

            {/* Next.js Storefront */}
            <div className="flex justify-center">
              <div className="w-full max-w-lg rounded-2xl border-2 border-slate-600 bg-slate-900 p-5">
                <div className="flex items-center gap-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-slate-800 text-white">
                    <svg className="h-7 w-7" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M11.572 0c-.176 0-.31.001-.358.007a19.76 19.76 0 0 0-.364.033C7.443.346 4.25 2.185 2.228 5.012a11.875 11.875 0 0 0-2.119 5.243c-.096.659-.108.854-.108 1.747s.012 1.089.108 1.748c.652 4.506 3.86 8.292 8.209 9.695.779.251 1.6.422 2.534.525.363.04 1.935.04 2.299 0 1.611-.178 2.977-.577 4.323-1.264.207-.106.247-.134.219-.158-.02-.013-.9-1.193-1.955-2.62l-1.934-2.593-2.42-3.558c-1.332-1.956-2.42-3.559-2.42-3.56 0-.002.956.034 2.125.036 1.17.002 2.144.01 2.165.017.03.01 1.59 2.35 3.54 5.2 1.95 2.85 3.555 5.187 3.565 5.187.01.01.864-.31 1.896-.712 2.54-1.002 4.193-1.84 5.427-2.74 2.016-1.513 3.52-3.44 4.476-5.74.348-.79.62-1.57.82-2.36.096-.36.12-.47.12-.95 0-.48-.024-.59-.12-.95a11.86 11.86 0 0 0-2.712-4.77C18.88 2.88 15.3.97 11.572 0ZM8.38 14.387c-1.13 0-2.043-.9-2.043-2.01 0-1.11.913-2.01 2.043-2.01 1.13 0 2.043.9 2.043 2.01 0 1.11-.913 2.01-2.043 2.01Z" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-bold">Next.js Storefront</p>
                    <p className="text-xs text-slate-400">Product pages · Cart UI · Checkout</p>
                  </div>
                </div>
                <div className="mt-3 grid grid-cols-2 gap-2 sm:grid-cols-4">
                  {["ProductPage", "CartDrawer", "CheckoutForm", "OrderHistory"].map((c) => (
                    <div key={c} className="rounded-lg bg-slate-800 px-2 py-1.5 text-center text-[10px] text-slate-300">
                      {c}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* API arrows */}
            <div className="flex flex-wrap items-center justify-center gap-4 py-2">
              <SideArrow label="GET products" direction="right" />
              <SideArrow label="PATCH cart" direction="left" />
              <SideArrow label="POST checkout" direction="right" />
            </div>

            <FlowArrow label="JSON:API + Commerce API" />

            {/* Drupal + Commerce */}
            <div className="flex justify-center">
              <div className="w-full max-w-lg rounded-2xl border-2 border-amber-500/40 bg-gradient-to-br from-amber-950 to-orange-950 p-5">
                <div className="flex items-center gap-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-amber-600 text-white">
                    <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 21v-7.5a.75.75 0 0 1 .75-.75h3a.75.75 0 0 1 .75.75V21m-4.5 0H2.36m11.14 0H18m0 0h3.64m-1.39 0V9.349M3.75 21V9.349m0 0a3.001 3.001 0 0 0 3.75-.615A2.993 2.993 0 0 0 9.75 9.75c.896 0 1.7-.393 2.25-1.016a2.993 2.993 0 0 0 2.25 1.016c.896 0 1.7-.393 2.25-1.016a3.001 3.001 0 0 0 3.75.614m-16.5 0a3.004 3.004 0 0 1-.621-3.72L4.5 4.5m12 0a3.004 3.004 0 0 0 .621-3.72L19.5 4.5" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-bold">Drupal 11 + Commerce</p>
                    <p className="text-xs text-amber-200/70">Products · Orders · Payments · Promotions</p>
                  </div>
                </div>
                <div className="mt-3 flex flex-wrap gap-1.5">
                  {["commerce_product", "commerce_order", "commerce_payment", "commerce_promotion"].map((m) => (
                    <span key={m} className="rounded bg-amber-900/60 px-2 py-0.5 text-[10px] text-amber-200">
                      {m}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <FlowArrow label="Entity API / SQL" />

            {/* Database */}
            <div className="flex justify-center">
              <div className="w-full max-w-sm rounded-2xl border-2 border-emerald-500/40 bg-gradient-to-br from-emerald-950 to-teal-950 p-5">
                <div className="flex items-center gap-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-600 text-white">
                    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 6.375c0 2.278-3.694 4.125-8.25 4.125S3.75 8.653 3.75 6.375m16.5 0c0-2.278-3.694-4.125-8.25-4.125S3.75 4.097 3.75 6.375m16.5 0v11.25c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125V6.375m16.5 0v3.75m-16.5-3.75v3.75m16.5 0v3.75C20.25 16.153 16.556 18 12 18s-8.25-1.847-8.25-4.125v-3.75m16.5 0c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-bold">MariaDB</p>
                    <p className="text-xs text-emerald-200/70">commerce_* tables · orders · line items</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Payment gateway callout */}
            <div className="mt-8 flex justify-center">
              <div className="flex max-w-md items-center gap-3 rounded-xl border border-dashed border-violet-500/30 bg-violet-500/5 px-4 py-3">
                <div className="text-2xl">💳</div>
                <div>
                  <p className="text-sm font-bold text-violet-200">Payment gateways</p>
                  <p className="text-xs text-violet-200/70">
                    Stripe · PayPal handled server-side in Drupal — card data never hits Next.js
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Split responsibility diagram */}
        <div className="mt-14 grid gap-6 lg:grid-cols-2">
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <p className="text-sm font-semibold uppercase tracking-wider text-amber-400">
              Drupal Commerce handles
            </p>
            <ul className="mt-4 space-y-3">
              {[
                "Product & variation entities",
                "Cart & order lifecycle",
                "Pricing, tax, and promotions",
                "Payment gateway integration",
                "Inventory & fulfillment",
                "Admin order management",
              ].map((item) => (
                <li key={item} className="flex items-center gap-2 text-sm text-slate-300">
                  <span className="h-1.5 w-1.5 rounded-full bg-amber-400" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <p className="text-sm font-semibold uppercase tracking-wider text-blue-400">
              Next.js handles
            </p>
            <ul className="mt-4 space-y-3">
              {[
                "Product listing & detail pages",
                "Cart drawer & quantity controls",
                "Checkout form & validation UI",
                "Order confirmation & history",
                "SEO, performance & ISR caching",
                "Responsive mobile storefront",
              ].map((item) => (
                <li key={item} className="flex items-center gap-2 text-sm text-slate-300">
                  <span className="h-1.5 w-1.5 rounded-full bg-blue-400" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
