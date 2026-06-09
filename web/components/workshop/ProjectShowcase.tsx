import { DeviceFrame } from "@/components/workshop/DeviceFrame"
import type { WorkshopProject } from "@/lib/workshop"

interface ProjectShowcaseProps {
  project: WorkshopProject
  reversed?: boolean
}

export function ProjectShowcase({ project, reversed = false }: ProjectShowcaseProps) {
  return (
    <article className="group overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm transition hover:border-blue-200 hover:shadow-xl hover:shadow-blue-500/5">
      <div
        className={`grid items-center gap-8 p-6 sm:p-8 lg:grid-cols-2 lg:gap-12 ${reversed ? "lg:[&>*:first-child]:order-2" : ""}`}
      >
        <div className="flex items-end justify-center gap-6 sm:gap-10">
          <DeviceFrame theme={project.theme} variant="desktop" label="Desktop" />
          <DeviceFrame theme={project.theme} variant="mobile" label="Mobile" />
        </div>

        <div>
          <div
            className={`mb-4 inline-block h-1 w-16 rounded-full bg-gradient-to-r ${project.accent}`}
          />
          <p className="text-sm font-semibold uppercase tracking-wider text-blue-600">
            {project.category}
          </p>
          <h3 className="mt-1 text-2xl font-black tracking-tight text-slate-900 sm:text-3xl">
            {project.name}
          </h3>
          <p className="mt-4 leading-relaxed text-slate-600">
            {project.description}
          </p>
          <div className="mt-5 flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-700"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </article>
  )
}
