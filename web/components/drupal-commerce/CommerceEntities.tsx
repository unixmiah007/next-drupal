import { commerceEntities } from "@/lib/drupal-commerce"

export function CommerceEntities() {
  return (
    <section className="bg-slate-900 py-20 text-white sm:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <div className="text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-amber-400">
            JSON:API endpoints
          </p>
          <h2 className="mt-2 text-3xl font-black tracking-tight sm:text-4xl">
            Commerce entities exposed to Next.js
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-slate-400">
            next-drupal fetches these resources and maps them to typed TypeScript
            interfaces in your storefront.
          </p>
        </div>

        <div className="mt-14 grid gap-4 sm:grid-cols-2">
          {commerceEntities.map((entity) => (
            <div
              key={entity.name}
              className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm"
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="text-lg font-bold">{entity.name}</p>
                  <p className="mt-2 text-sm text-slate-400">{entity.description}</p>
                </div>
              </div>
              <code className="mt-4 block overflow-x-auto rounded-lg bg-slate-950 px-3 py-2 text-xs text-amber-300">
                {entity.endpoint}
              </code>
            </div>
          ))}
        </div>

        <div className="mt-10 rounded-2xl border border-white/10 bg-slate-950 p-6 font-mono text-xs">
          <p className="mb-3 font-sans text-sm font-bold text-slate-300">
            Example: fetch a product in Next.js
          </p>
          <pre className="overflow-x-auto leading-relaxed text-slate-400">
            <code>{`import { drupal } from "@/lib/drupal"

const products = await drupal.getResourceCollection(
  "commerce_product--default",
  {
    params: {
      include: "variations,field_image",
      "filter[status]": 1,
    },
    next: { revalidate: 3600 },
  }
)

// → Render <ProductGrid products={products} />`}</code>
          </pre>
        </div>
      </div>
    </section>
  )
}
