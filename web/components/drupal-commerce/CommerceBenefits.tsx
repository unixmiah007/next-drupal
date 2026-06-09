import { commerceBenefits } from "@/lib/drupal-commerce"

export function CommerceBenefits() {
  return (
    <section className="bg-gradient-to-br from-amber-600 to-orange-700 py-20 text-white sm:py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="text-center">
          <h2 className="text-3xl font-black tracking-tight sm:text-4xl">
            Why Drupal Commerce + Next.js?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-lg text-amber-100">
            The best of enterprise ecommerce and modern front-end performance in
            one integrated stack.
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {commerceBenefits.map((benefit) => (
            <div
              key={benefit.title}
              className="rounded-2xl border border-white/20 bg-white/10 p-6 backdrop-blur-sm"
            >
              <h3 className="font-bold">{benefit.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-amber-100">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
