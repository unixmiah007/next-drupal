export function DeviceShowcase() {
  return (
    <section className="overflow-hidden bg-slate-50 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <div className="text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-emerald-600">
            One codebase, every device
          </p>
          <h2 className="mt-2 text-3xl font-black tracking-tight text-slate-900 sm:text-4xl">
            Responsive layouts in action
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-slate-600">
            The same Drupal content adapts across breakpoints — no separate
            mobile site required.
          </p>
        </div>

        <div className="mt-16 flex flex-col items-center justify-center gap-8 lg:flex-row lg:items-end lg:gap-12">
          {/* Phone */}
          <div className="flex flex-col items-center">
            <div className="relative w-[180px] rounded-[2rem] border-4 border-slate-800 bg-slate-800 p-2 shadow-2xl shadow-slate-900/20">
              <div className="absolute left-1/2 top-3 h-1 w-12 -translate-x-1/2 rounded-full bg-slate-700" />
              <div className="overflow-hidden rounded-[1.5rem] bg-white">
                <div className="bg-gradient-to-r from-emerald-600 to-teal-600 px-3 py-4">
                  <div className="h-2 w-16 rounded bg-white/30" />
                  <div className="mt-2 h-3 w-24 rounded bg-white/50" />
                </div>
                <div className="space-y-2 p-3">
                  <div className="h-16 rounded-lg bg-slate-100" />
                  <div className="h-2 w-full rounded bg-slate-200" />
                  <div className="h-2 w-4/5 rounded bg-slate-200" />
                  <div className="mt-3 h-8 rounded-lg bg-emerald-500" />
                </div>
              </div>
            </div>
            <p className="mt-4 text-sm font-semibold text-slate-600">Mobile</p>
            <p className="text-xs text-slate-400">&lt; 640px</p>
          </div>

          {/* Tablet */}
          <div className="flex flex-col items-center">
            <div className="relative w-[280px] rounded-2xl border-4 border-slate-800 bg-slate-800 p-2 shadow-2xl shadow-slate-900/20">
              <div className="overflow-hidden rounded-xl bg-white">
                <div className="flex items-center justify-between bg-gradient-to-r from-emerald-600 to-teal-600 px-4 py-3">
                  <div className="h-2 w-20 rounded bg-white/30" />
                  <div className="flex gap-2">
                    <div className="h-2 w-8 rounded bg-white/20" />
                    <div className="h-2 w-8 rounded bg-white/20" />
                    <div className="h-2 w-8 rounded bg-white/20" />
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-2 p-3">
                  <div className="col-span-2 h-20 rounded-lg bg-slate-100" />
                  <div className="h-12 rounded-lg bg-slate-100" />
                  <div className="h-12 rounded-lg bg-slate-100" />
                  <div className="col-span-2 h-2 w-full rounded bg-slate-200" />
                </div>
              </div>
            </div>
            <p className="mt-4 text-sm font-semibold text-slate-600">Tablet</p>
            <p className="text-xs text-slate-400">640 – 1024px</p>
          </div>

          {/* Desktop */}
          <div className="flex flex-col items-center">
            <div className="relative w-[420px]">
              <div className="overflow-hidden rounded-t-xl border-4 border-b-0 border-slate-800 bg-slate-800 p-2 shadow-2xl shadow-slate-900/20">
                <div className="overflow-hidden rounded-t-lg bg-white">
                  <div className="flex items-center justify-between bg-gradient-to-r from-emerald-600 to-teal-600 px-6 py-4">
                    <div className="h-3 w-28 rounded bg-white/30" />
                    <div className="flex gap-4">
                      <div className="h-2 w-12 rounded bg-white/20" />
                      <div className="h-2 w-12 rounded bg-white/20" />
                      <div className="h-2 w-12 rounded bg-white/20" />
                      <div className="h-2 w-12 rounded bg-white/20" />
                    </div>
                  </div>
                  <div className="grid grid-cols-3 gap-3 p-4">
                    <div className="col-span-3 h-28 rounded-lg bg-gradient-to-r from-emerald-100 to-teal-100" />
                    <div className="h-24 rounded-lg bg-slate-100" />
                    <div className="h-24 rounded-lg bg-slate-100" />
                    <div className="h-24 rounded-lg bg-slate-100" />
                  </div>
                </div>
              </div>
              <div className="mx-auto h-3 w-32 rounded-b-lg bg-slate-700" />
            </div>
            <p className="mt-4 text-sm font-semibold text-slate-600">Desktop</p>
            <p className="text-xs text-slate-400">1024px+</p>
          </div>
        </div>

        <div className="mx-auto mt-16 max-w-3xl rounded-2xl border border-emerald-200 bg-emerald-50 px-6 py-5 text-center">
          <p className="text-sm font-medium text-emerald-800">
            <span className="font-bold">Pro tip:</span> Tailwind&apos;s{" "}
            <code className="rounded bg-emerald-100 px-1.5 py-0.5 text-emerald-700">sm:</code>{" "}
            <code className="rounded bg-emerald-100 px-1.5 py-0.5 text-emerald-700">md:</code>{" "}
            <code className="rounded bg-emerald-100 px-1.5 py-0.5 text-emerald-700">lg:</code>{" "}
            prefixes let you style each breakpoint without writing custom media queries.
          </p>
        </div>
      </div>
    </section>
  )
}
