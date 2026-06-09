import { breakpoints } from "@/lib/responsive-design"

export function BreakpointsSection() {
  return (
    <section className="bg-slate-900 py-20 text-white sm:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <div className="text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-emerald-400">
            Breakpoints
          </p>
          <h2 className="mt-2 text-3xl font-black tracking-tight sm:text-4xl">
            Designed for every viewport
          </h2>
        </div>

        <div className="mt-14 space-y-4">
          {breakpoints.map((bp, index) => (
            <div
              key={bp.name}
              className="flex flex-col gap-4 rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm sm:flex-row sm:items-center sm:justify-between"
              style={{ marginLeft: `${index * 12}px`, maxWidth: `calc(100% - ${index * 12}px)` }}
            >
              <div className="flex items-center gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-emerald-600 text-sm font-bold">
                  {index + 1}
                </div>
                <div>
                  <h3 className="font-bold">{bp.name}</h3>
                  <p className="text-sm text-slate-400">{bp.description}</p>
                </div>
              </div>
              <div className="flex flex-wrap gap-3 sm:justify-end">
                <span className="rounded-lg bg-slate-800 px-3 py-1.5 font-mono text-sm text-emerald-300">
                  {bp.width}
                </span>
                <span className="rounded-lg border border-white/10 px-3 py-1.5 font-mono text-sm text-slate-400">
                  {bp.tailwind}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
