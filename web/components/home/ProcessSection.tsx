import { processSteps } from "@/lib/services"

export function ProcessSection() {
  return (
    <section className="bg-slate-50 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-wider text-blue-600">
            How we work
          </p>
          <h2 className="mt-2 text-3xl font-black tracking-tight text-slate-900 sm:text-4xl">
            From idea to launch in four steps
          </h2>
        </div>

        <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {processSteps.map((step) => (
            <div key={step.step} className="relative">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-blue-600 text-lg font-bold text-white shadow-lg shadow-blue-600/25">
                {step.step}
              </div>
              <h3 className="text-lg font-bold text-slate-900">{step.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
