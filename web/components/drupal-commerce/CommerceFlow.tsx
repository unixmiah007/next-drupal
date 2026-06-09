import { commerceFlow } from "@/lib/drupal-commerce"

export function CommerceFlow() {
  return (
    <section className="bg-slate-50 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <div className="text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-blue-600">
            Shopping journey
          </p>
          <h2 className="mt-2 text-3xl font-black tracking-tight text-slate-900 sm:text-4xl">
            From browse to fulfillment
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-slate-600">
            Five steps showing what happens in Drupal Commerce vs. what the Next.js
            UI renders for the customer.
          </p>
        </div>

        <div className="mt-14 space-y-6">
          {commerceFlow.map((step) => (
            <div
              key={step.step}
              className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm"
            >
              <div className="flex items-center gap-4 border-b border-slate-100 bg-gradient-to-r from-amber-50 to-blue-50 px-6 py-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-amber-500 to-orange-600 text-sm font-bold text-white">
                  {step.step}
                </div>
                <h3 className="text-lg font-bold text-slate-900">{step.title}</h3>
              </div>
              <div className="grid sm:grid-cols-2">
                <div className="border-b border-slate-100 px-6 py-5 sm:border-b-0 sm:border-r">
                  <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-amber-600">
                    Drupal Commerce
                  </p>
                  <p className="text-sm text-slate-700">{step.drupal}</p>
                </div>
                <div className="px-6 py-5">
                  <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-blue-600">
                    Next.js UI
                  </p>
                  <p className="text-sm text-slate-700">{step.nextjs}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
