import { CtaBanner } from "@/components/home/CtaBanner"
import { PageHero } from "@/components/layout/PageHero"
import { SectionHeader } from "@/components/layout/SectionHeader"
import { Link } from "@/components/navigation/Link"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "About",
  description:
    "We build headless Drupal and Next.js experiences — decoupled, fast, and editor-friendly.",
}

const values = [
  {
    title: "Content-first",
    description:
      "Editors deserve great tools. We build Drupal backends that teams actually enjoy using.",
  },
  {
    title: "Performance obsessed",
    description:
      "Next.js ISR, optimized images, and edge caching — every millisecond matters.",
  },
  {
    title: "Type-safe by default",
    description:
      "TypeScript from API to UI. Fewer bugs, better DX, happier developers.",
  },
  {
    title: "Partnership mindset",
    description:
      "We work alongside your team — not just hand off code. Training and docs included.",
  },
]

const highlights = [
  {
    label: "Founded on",
    value: "Open source",
    detail: "Drupal & Next.js communities",
  },
  {
    label: "Specialty",
    value: "Headless CMS",
    detail: "Decoupled architectures",
  },
  {
    label: "Stack",
    value: "D11 + N15",
    detail: "Drupal 11 & Next.js 15",
  },
  {
    label: "Approach",
    value: "Agile",
    detail: "Iterate fast, ship often",
  },
]

export default function AboutPage() {
  return (
    <>
      <PageHero
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "About" },
        ]}
        badge="About NextDrupal"
        title={
          <>
            Building the future of{" "}
            <span className="bg-gradient-to-r from-blue-400 to-violet-400 bg-clip-text text-transparent">
              headless web
            </span>
          </>
        }
        subtitle="We're a team focused on pairing Drupal's editorial excellence with Next.js front-end performance — delivering sites that are fast for visitors and friendly for content teams."
        primaryCta={{ href: "/services", label: "View services" }}
        secondaryCta={{ href: "/contact", label: "Get in touch" }}
      />

      <section className="bg-white py-20 sm:py-28">
        <div className="mx-auto max-w-6xl px-6">
          <SectionHeader
            eyebrow="Our story"
            title="Why we chose Drupal + Next.js"
            description="Traditional monolithic CMS sites are slow to iterate and hard to scale. Headless architecture separates content from presentation — Drupal manages data, Next.js delivers the experience."
          />

          <div className="mt-14 grid gap-8 lg:grid-cols-2">
            <div className="rounded-2xl border border-slate-200 bg-slate-50 p-8">
              <h3 className="text-xl font-bold text-slate-900">The problem</h3>
              <p className="mt-4 leading-relaxed text-slate-600">
                Marketing teams need to publish fast. Developers need modern
                tooling. Legacy Drupal themes tie both together in ways that
                slow everyone down.
              </p>
            </div>
            <div className="rounded-2xl border border-blue-200 bg-gradient-to-br from-blue-50 to-violet-50 p-8">
              <h3 className="text-xl font-bold text-slate-900">Our solution</h3>
              <p className="mt-4 leading-relaxed text-slate-600">
                Decouple with JSON:API. Editors stay in Drupal. Visitors get a
                Next.js site with TypeScript, Tailwind, and sub-second page loads.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-slate-50 py-20 sm:py-28">
        <div className="mx-auto max-w-6xl px-6">
          <SectionHeader
            eyebrow="What we stand for"
            title="Our values"
            centered
          />

          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((value) => (
              <article
                key={value.title}
                className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:border-blue-200 hover:shadow-md"
              >
                <div className="mb-4 h-1 w-12 rounded-full bg-gradient-to-r from-blue-600 to-violet-600" />
                <h3 className="text-lg font-bold text-slate-900">
                  {value.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">
                  {value.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-slate-900 py-20 text-white sm:py-28">
        <div className="mx-auto max-w-6xl px-6">
          <SectionHeader
            eyebrow="At a glance"
            title="Quick facts"
            centered
            variant="dark"
          />
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {highlights.map((item) => (
              <div
                key={item.label}
                className="rounded-2xl border border-white/10 bg-white/5 p-6 text-center backdrop-blur-sm"
              >
                <p className="text-xs font-semibold uppercase tracking-wider text-blue-400">
                  {item.label}
                </p>
                <p className="mt-2 text-2xl font-black">{item.value}</p>
                <p className="mt-1 text-sm text-slate-400">{item.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-20 sm:py-28">
        <div className="mx-auto max-w-6xl px-6 text-center">
          <h2 className="text-3xl font-black tracking-tight text-slate-900">
            Want to work together?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-lg text-slate-600">
            Explore our services or reach out — we&apos;d love to hear about
            your project.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link
              href="/services"
              className="inline-flex rounded-lg bg-blue-600 px-6 py-3 text-sm font-semibold text-white no-underline shadow-lg shadow-blue-600/25 transition hover:bg-blue-500"
            >
              View services
            </Link>
            <Link
              href="/contact"
              className="inline-flex rounded-lg border border-slate-200 px-6 py-3 text-sm font-semibold text-slate-700 no-underline transition hover:border-slate-300"
            >
              Contact us
            </Link>
          </div>
        </div>
      </section>

      <CtaBanner />
    </>
  )
}
