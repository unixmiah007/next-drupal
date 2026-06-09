import { principles } from "@/lib/responsive-design"

export function ApproachSection() {
  return (
    <section className="bg-white py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-wider text-emerald-600">
            Our approach
          </p>
          <h2 className="mt-2 text-3xl font-black tracking-tight text-slate-900 sm:text-4xl">
            How we build responsive experiences
          </h2>
        </div>

        <div className="mt-14 grid gap-8 lg:grid-cols-2">
          {principles.map((principle) => (
            <div
              key={principle.step}
              className="relative flex gap-5 rounded-2xl border border-slate-200 p-6 transition hover:border-emerald-200 hover:shadow-md"
            >
              <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-emerald-500 to-teal-600 text-xl font-black text-white shadow-lg shadow-emerald-500/20">
                {principle.step}
              </div>
              <div>
                <h3 className="text-lg font-bold text-slate-900">
                  {principle.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">
                  {principle.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
