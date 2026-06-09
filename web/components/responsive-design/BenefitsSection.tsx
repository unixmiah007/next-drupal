import { ResponsiveIcon } from "@/components/responsive-design/ResponsiveIcon"
import { benefits } from "@/lib/responsive-design"

export function BenefitsSection() {
  return (
    <section id="benefits" className="bg-white py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-wider text-emerald-600">
            Why it matters
          </p>
          <h2 className="mt-2 text-3xl font-black tracking-tight text-slate-900 sm:text-4xl">
            Responsive design benefits
          </h2>
          <p className="mt-4 text-lg text-slate-600">
            Every visitor gets an experience tailored to their device — without
            maintaining separate codebases or duplicate content.
          </p>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {benefits.map((benefit) => (
            <article
              key={benefit.id}
              className="group rounded-2xl border border-slate-200 p-6 transition hover:border-emerald-200 hover:shadow-lg hover:shadow-emerald-500/5"
            >
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-emerald-500 to-teal-600 text-white">
                <ResponsiveIcon name={benefit.icon} />
              </div>
              <h3 className="text-lg font-bold text-slate-900">{benefit.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">
                {benefit.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
