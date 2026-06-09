import { SitePreview } from "@/components/workshop/SitePreview"
import { workshopProjects } from "@/lib/workshop"

export function WorkshopMosaic() {
  const mosaicItems = workshopProjects.slice(0, 4)

  return (
    <section className="bg-slate-900 py-20 text-white sm:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <div className="text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-blue-400">
            Snapshot gallery
          </p>
          <h2 className="mt-2 text-3xl font-black tracking-tight sm:text-4xl">
            Desktop &amp; mobile, side by side
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-slate-400">
            Every project ships with responsive layouts — here&apos;s how the
            same brand looks across devices.
          </p>
        </div>

        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {mosaicItems.map((project) => (
            <div
              key={project.id}
              className="overflow-hidden rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm transition hover:border-blue-500/30 hover:bg-white/10"
            >
              <div className="border-b border-white/10 p-3">
                <div className="flex items-center gap-1.5">
                  <div className="h-2 w-2 rounded-full bg-red-400" />
                  <div className="h-2 w-2 rounded-full bg-amber-400" />
                  <div className="h-2 w-2 rounded-full bg-emerald-400" />
                </div>
                <div className="mt-2 h-[100px] overflow-hidden rounded-lg">
                  <SitePreview theme={project.theme} variant="desktop" />
                </div>
              </div>
              <div className="flex items-center gap-3 p-3">
                <div className="h-[80px] w-[48px] shrink-0 overflow-hidden rounded-lg border border-white/20">
                  <SitePreview theme={project.theme} variant="mobile" />
                </div>
                <div>
                  <p className="font-bold">{project.name}</p>
                  <p className="text-xs text-slate-400">{project.category}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
