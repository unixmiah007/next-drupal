import { Link } from "@/components/navigation/Link"

export function HeroBanner() {
  return (
    <section className="relative overflow-hidden bg-slate-950 text-white">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-blue-600/30 via-transparent to-transparent" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-violet-600/20 via-transparent to-transparent" />
      <div className="absolute -top-24 right-0 h-96 w-96 rounded-full bg-blue-500/10 blur-3xl" />
      <div className="absolute -bottom-24 left-0 h-96 w-96 rounded-full bg-violet-500/10 blur-3xl" />

      <div className="relative mx-auto max-w-6xl px-6 py-24 sm:py-32 lg:py-40">
        <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-sm text-blue-200 backdrop-blur-sm">
          <span className="h-2 w-2 rounded-full bg-emerald-400" />
          Drupal 11 + Next.js 15 + TypeScript
        </div>

        <h1 className="max-w-4xl text-4xl font-black leading-tight tracking-tight sm:text-5xl lg:text-6xl">
          Web development that pairs{" "}
          <span className="bg-gradient-to-r from-blue-400 to-violet-400 bg-clip-text text-transparent">
            Drupal&apos;s power
          </span>{" "}
          with{" "}
          <span className="bg-gradient-to-r from-white to-slate-300 bg-clip-text text-transparent">
            Next.js speed
          </span>
        </h1>

        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-slate-300 sm:text-xl">
          We build headless, high-performance websites — editors manage content
          in Drupal, visitors get a modern TypeScript front end powered by
          Next.js and JSON:API.
        </p>

        <div className="mt-10 flex flex-wrap gap-4">
          <Link
            href="/services"
            className="inline-flex items-center rounded-lg bg-blue-600 px-6 py-3 text-sm font-semibold text-white no-underline shadow-lg shadow-blue-600/25 transition hover:bg-blue-500"
          >
            Explore our services
          </Link>
          <Link
            href="/about"
            className="inline-flex items-center rounded-lg border border-white/20 bg-white/5 px-6 py-3 text-sm font-semibold text-white no-underline backdrop-blur-sm transition hover:bg-white/10"
          >
            Learn more
          </Link>
        </div>

        <div className="mt-16 grid grid-cols-2 gap-6 border-t border-white/10 pt-10 sm:grid-cols-4">
          {[
            { value: "100%", label: "TypeScript" },
            { value: "ISR", label: "Edge-ready caching" },
            { value: "JSON:API", label: "Decoupled data" },
            { value: "A11y", label: "Accessible UI" },
          ].map((stat) => (
            <div key={stat.label}>
              <div className="text-2xl font-bold text-white">{stat.value}</div>
              <div className="mt-1 text-sm text-slate-400">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
