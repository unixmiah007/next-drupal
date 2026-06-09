import { Link } from "@/components/navigation/Link"

export function ResponsiveCta() {
  return (
    <section className="bg-slate-950 py-20 text-white sm:py-24">
      <div className="mx-auto max-w-6xl px-6 text-center">
        <h2 className="text-3xl font-black tracking-tight sm:text-4xl">
          Ready for a site that works everywhere?
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-lg text-slate-400">
          Let&apos;s build a responsive Drupal + Next.js experience your
          audience will love — on any device, any connection.
        </p>
        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <Link
            href="/contact"
            className="inline-flex items-center rounded-lg bg-emerald-600 px-6 py-3 text-sm font-semibold text-white no-underline shadow-lg shadow-emerald-600/25 transition hover:bg-emerald-500"
          >
            Get in touch
          </Link>
          <Link
            href="/"
            className="inline-flex items-center rounded-lg border border-white/20 px-6 py-3 text-sm font-semibold text-white no-underline transition hover:bg-white/10"
          >
            View all services
          </Link>
        </div>
      </div>
    </section>
  )
}
