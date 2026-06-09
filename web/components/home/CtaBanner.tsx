import { Link } from "@/components/navigation/Link"

export function CtaBanner() {
  return (
    <section className="bg-gradient-to-br from-blue-600 to-violet-700 py-20 text-white sm:py-24">
      <div className="mx-auto max-w-6xl px-6 text-center">
        <h2 className="text-3xl font-black tracking-tight sm:text-4xl">
          Ready to build your headless site?
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-lg text-blue-100">
          Let&apos;s combine Drupal&apos;s content power with a fast, typed
          Next.js front end. Get in touch to start your project.
        </p>
        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <Link
            href="/contact"
            className="inline-flex items-center rounded-lg bg-white px-6 py-3 text-sm font-semibold text-blue-700 no-underline shadow-lg transition hover:bg-blue-50"
          >
            Contact us
          </Link>
          <Link
            href="/blog/hello-next-drupal"
            className="inline-flex items-center rounded-lg border border-white/30 px-6 py-3 text-sm font-semibold text-white no-underline transition hover:bg-white/10"
          >
            Read our blog
          </Link>
        </div>
      </div>
    </section>
  )
}
