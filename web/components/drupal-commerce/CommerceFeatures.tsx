import { CommerceIcon } from "@/components/drupal-commerce/CommerceIcon"
import { commerceFeatures } from "@/lib/drupal-commerce"

export function CommerceFeatures() {
  return (
    <section className="bg-white py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-wider text-blue-600">
            Commerce modules
          </p>
          <h2 className="mt-2 text-3xl font-black tracking-tight text-slate-900 sm:text-4xl">
            Everything a store needs
          </h2>
          <p className="mt-4 text-lg text-slate-600">
            Drupal Commerce provides a full ecommerce engine — your Next.js front
            end picks the pieces it needs via API.
          </p>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {commerceFeatures.map((feature) => (
            <article
              key={feature.id}
              className="rounded-2xl border border-slate-200 p-6 transition hover:border-amber-200 hover:shadow-lg hover:shadow-amber-500/5"
            >
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-amber-500 to-orange-600 text-white">
                <CommerceIcon name={feature.icon} />
              </div>
              <h3 className="text-lg font-bold text-slate-900">{feature.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">
                {feature.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
