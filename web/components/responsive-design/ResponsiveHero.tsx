import { Breadcrumb } from "@/components/navigation/Breadcrumb"
import { Link } from "@/components/navigation/Link"
import { stats } from "@/lib/responsive-design"

export function ResponsiveHero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-emerald-950 via-slate-950 to-teal-950 text-white">
      <div className="relative z-10 border-b border-white/10">
        <div className="mx-auto max-w-6xl px-6 py-4">
          <Breadcrumb
            variant="emerald"
            items={[
              { label: "Home", href: "/" },
              { label: "Services", href: "/services" },
              { label: "Responsive Design" },
            ]}
          />
        </div>
      </div>

      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-emerald-500/20 via-transparent to-transparent" />
      <div className="absolute right-0 top-1/2 h-[500px] w-[500px] -translate-y-1/2 rounded-full bg-teal-500/10 blur-3xl" />

      <div className="relative mx-auto max-w-6xl px-6 py-20 sm:py-28 lg:py-36">
        <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-4 py-1.5 text-sm text-emerald-200">
          <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-400" />
          Responsive Design · Drupal + Next.js collide together
        </div>

        <h1 className="max-w-4xl text-4xl font-black leading-tight tracking-tight sm:text-5xl lg:text-6xl">
          Beautiful on{" "}
          <span className="bg-gradient-to-r from-emerald-400 to-teal-300 bg-clip-text text-transparent">
            every screen
          </span>
        </h1>

        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-slate-300 sm:text-xl">
          Drupal structures your content once. Next.js renders it flawlessly on
          phones, tablets, and desktops — with TypeScript components, Tailwind
          breakpoints, and optimized images.
        </p>

        <div className="mt-10 flex flex-wrap gap-4">
          <Link
            href="#benefits"
            className="inline-flex items-center rounded-lg bg-emerald-600 px-6 py-3 text-sm font-semibold text-white no-underline shadow-lg shadow-emerald-600/25 transition hover:bg-emerald-500"
          >
            See how it works
          </Link>
          <Link
            href="/contact"
            className="inline-flex items-center rounded-lg border border-white/20 bg-white/5 px-6 py-3 text-sm font-semibold text-white no-underline backdrop-blur-sm transition hover:bg-white/10"
          >
            Start a project
          </Link>
        </div>

        <div className="mt-16 grid grid-cols-2 gap-6 border-t border-white/10 pt-10 sm:grid-cols-4">
          {stats.map((stat) => (
            <div key={stat.label}>
              <div className="text-2xl font-bold text-emerald-300">{stat.value}</div>
              <div className="mt-1 text-sm text-slate-400">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
