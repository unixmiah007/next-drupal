import {
  Breadcrumb,
  type BreadcrumbItem,
} from "@/components/navigation/Breadcrumb"
import { Link } from "@/components/navigation/Link"
import type { ReactNode } from "react"

interface PageHeroCta {
  href: string
  label: string
}

interface PageHeroStat {
  value: string
  label: string
}

interface PageHeroProps {
  badge?: string
  title: ReactNode
  subtitle?: string
  breadcrumbs?: BreadcrumbItem[]
  primaryCta?: PageHeroCta
  secondaryCta?: PageHeroCta
  stats?: PageHeroStat[]
}

export function PageHero({
  badge,
  title,
  subtitle,
  breadcrumbs,
  primaryCta,
  secondaryCta,
  stats,
}: PageHeroProps) {
  return (
    <section className="relative overflow-hidden bg-slate-950 text-white">
      {breadcrumbs && breadcrumbs.length > 0 && (
        <div className="relative z-10 border-b border-white/10">
          <div className="mx-auto max-w-6xl px-6 py-4">
            <Breadcrumb items={breadcrumbs} />
          </div>
        </div>
      )}

      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-blue-600/30 via-transparent to-transparent" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-violet-600/20 via-transparent to-transparent" />
      <div className="absolute -top-24 right-0 h-96 w-96 rounded-full bg-blue-500/10 blur-3xl" />
      <div className="absolute -bottom-24 left-0 h-96 w-96 rounded-full bg-violet-500/10 blur-3xl" />

      <div className="relative mx-auto max-w-6xl px-6 py-20 sm:py-28 lg:py-32">
        {badge && (
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-sm text-blue-200 backdrop-blur-sm">
            <span className="h-2 w-2 rounded-full bg-emerald-400" />
            {badge}
          </div>
        )}

        <h1 className="max-w-4xl text-4xl font-black leading-tight tracking-tight sm:text-5xl lg:text-6xl">
          {title}
        </h1>

        {subtitle && (
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-slate-300 sm:text-xl">
            {subtitle}
          </p>
        )}

        {(primaryCta || secondaryCta) && (
          <div className="mt-10 flex flex-wrap gap-4">
            {primaryCta && (
              <Link
                href={primaryCta.href}
                className="inline-flex items-center rounded-lg bg-blue-600 px-6 py-3 text-sm font-semibold text-white no-underline shadow-lg shadow-blue-600/25 transition hover:bg-blue-500"
              >
                {primaryCta.label}
              </Link>
            )}
            {secondaryCta && (
              <Link
                href={secondaryCta.href}
                className="inline-flex items-center rounded-lg border border-white/20 bg-white/5 px-6 py-3 text-sm font-semibold text-white no-underline backdrop-blur-sm transition hover:bg-white/10"
              >
                {secondaryCta.label}
              </Link>
            )}
          </div>
        )}

        {stats && stats.length > 0 && (
          <div className="mt-16 grid grid-cols-2 gap-6 border-t border-white/10 pt-10 sm:grid-cols-4">
            {stats.map((stat) => (
              <div key={stat.label}>
                <div className="text-2xl font-bold text-white">{stat.value}</div>
                <div className="mt-1 text-sm text-slate-400">{stat.label}</div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  )
}
