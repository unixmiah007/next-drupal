import { features } from "@/lib/responsive-design"

export function DualStackSection() {
  return (
    <section className="bg-slate-50 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <div className="text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-emerald-600">
            Best of both worlds
          </p>
          <h2 className="mt-2 text-3xl font-black tracking-tight text-slate-900 sm:text-4xl">
            Drupal + Next.js working together
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-slate-600">
            Each platform handles what it does best — content management in
            Drupal, responsive rendering in Next.js.
          </p>
        </div>

        <div className="mt-12 overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
          <div className="grid grid-cols-2 border-b border-slate-200 bg-slate-100 text-sm font-bold uppercase tracking-wider text-slate-600">
            <div className="flex items-center gap-2 px-6 py-4">
              <span className="h-3 w-3 rounded-full bg-sky-500" />
              Drupal 11
            </div>
            <div className="flex items-center gap-2 border-l border-slate-200 px-6 py-4">
              <span className="h-3 w-3 rounded-full bg-slate-800" />
              Next.js 15
            </div>
          </div>

          {features.map((feature, index) => (
            <div
              key={feature.title}
              className={`grid grid-cols-2 ${index < features.length - 1 ? "border-b border-slate-100" : ""}`}
            >
              <div className="px-6 py-5">
                <p className="mb-1 text-xs font-semibold uppercase tracking-wider text-sky-600">
                  {feature.title}
                </p>
                <p className="text-sm text-slate-700">{feature.drupal}</p>
              </div>
              <div className="border-l border-slate-100 px-6 py-5">
                <p className="mb-1 text-xs font-semibold uppercase tracking-wider text-slate-500">
                  {feature.title}
                </p>
                <p className="text-sm text-slate-700">{feature.nextjs}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
