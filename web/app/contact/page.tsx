import { CtaBanner } from "@/components/home/CtaBanner"
import { PageHero } from "@/components/layout/PageHero"
import { SectionHeader } from "@/components/layout/SectionHeader"
import { Link } from "@/components/navigation/Link"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch to start your Drupal + Next.js project. We'd love to hear from you.",
}

const contactMethods = [
  {
    title: "Email",
    value: "hello@nextdrupal.dev",
    description: "We typically respond within one business day.",
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
      </svg>
    ),
  },
  {
    title: "Project inquiries",
    value: "New builds & migrations",
    description: "Headless Drupal, Next.js front ends, and full-stack delivery.",
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 0 0 .75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 0 0-3.413-.387m4.5 8.006c-.049.72-.12 1.433-.213 2.137M4.5 14.15v4.25c0 1.094.787 2.036 1.872 2.18 2.087.277 4.216.42 6.378.42s4.291-.143 6.378-.42c1.085-.144 1.872-1.086 1.872-2.18v-4.25m0 0a2.18 2.18 0 0 1-.75-1.661V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 0 1 3.413-.387m7.5 0V5.25A2.25 2.25 0 0 0 13.5 3h-3a2.25 2.25 0 0 0-2.25 2.25v.894m7.5 0a48.667 48.667 0 0 0-7.5 0" />
      </svg>
    ),
  },
  {
    title: "Support",
    value: "Ongoing partnerships",
    description: "Retainers, performance tuning, and feature development.",
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 5.25h.008v.008H12v-.008Z" />
      </svg>
    ),
  },
]

export default function ContactPage() {
  return (
    <>
      <PageHero
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Contact" },
        ]}
        badge="Contact us"
        title={
          <>
            Let&apos;s build something{" "}
            <span className="bg-gradient-to-r from-blue-400 to-violet-400 bg-clip-text text-transparent">
              great together
            </span>
          </>
        }
        subtitle="Whether you're starting a new headless project or migrating an existing Drupal site to Next.js — we're here to help."
        primaryCta={{ href: "#contact-form", label: "Send a message" }}
        secondaryCta={{ href: "/services", label: "View services" }}
      />

      <section className="bg-white py-20 sm:py-28">
        <div className="mx-auto max-w-6xl px-6">
          <SectionHeader
            eyebrow="Reach out"
            title="How to get in touch"
            description="Pick the channel that works best for you. We're happy to jump on a call or start async."
          />

          <div className="mt-14 grid gap-6 sm:grid-cols-3">
            {contactMethods.map((method) => (
              <article
                key={method.title}
                className="rounded-2xl border border-slate-200 p-6 transition hover:border-blue-200 hover:shadow-md"
              >
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-blue-600 to-violet-600 text-white">
                  {method.icon}
                </div>
                <h3 className="text-lg font-bold text-slate-900">
                  {method.title}
                </h3>
                <p className="mt-1 font-semibold text-blue-600">{method.value}</p>
                <p className="mt-2 text-sm text-slate-600">{method.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="contact-form" className="bg-slate-50 py-20 sm:py-28">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-start">
            <div>
              <SectionHeader
                eyebrow="Send a message"
                title="Tell us about your project"
                description="Fill out the form and we'll get back to you shortly. No commitment required."
              />

              <div className="mt-8 space-y-4">
                {[
                  "Free initial consultation",
                  "Transparent timelines & estimates",
                  "Drupal + Next.js specialists",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-3 text-slate-700">
                    <svg
                      className="h-5 w-5 text-blue-600"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 1 0 0-16 8 8 0 0 0 0 16Zm3.857-9.809a.75.75 0 0 0-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 1 0-1.06 1.061l2.5 2.5a.75.75 0 0 0 1.137-.089l4-5.5Z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span className="text-sm font-medium">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <form className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">
              <div className="space-y-5">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-semibold text-slate-700"
                  >
                    Name
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    placeholder="Your name"
                    className="mt-1.5 w-full rounded-lg border border-slate-200 px-4 py-2.5 text-slate-900 placeholder:text-slate-400 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20"
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-semibold text-slate-700"
                  >
                    Email
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="you@company.com"
                    className="mt-1.5 w-full rounded-lg border border-slate-200 px-4 py-2.5 text-slate-900 placeholder:text-slate-400 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20"
                  />
                </div>
                <div>
                  <label
                    htmlFor="project"
                    className="block text-sm font-semibold text-slate-700"
                  >
                    Project type
                  </label>
                  <select
                    id="project"
                    name="project"
                    className="mt-1.5 w-full rounded-lg border border-slate-200 px-4 py-2.5 text-slate-900 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20"
                  >
                    <option>New headless build</option>
                    <option>Drupal migration</option>
                    <option>Next.js front-end only</option>
                    <option>Ongoing support</option>
                    <option>Other</option>
                  </select>
                </div>
                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-semibold text-slate-700"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    placeholder="Tell us about your project..."
                    className="mt-1.5 w-full rounded-lg border border-slate-200 px-4 py-2.5 text-slate-900 placeholder:text-slate-400 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full rounded-lg bg-blue-600 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-blue-600/25 transition hover:bg-blue-500"
                >
                  Send message
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-br from-blue-600 to-violet-700 py-16 text-white">
        <div className="mx-auto max-w-6xl px-6 text-center">
          <p className="text-lg text-blue-100">
            Prefer to explore first?{" "}
            <Link
              href="/services"
              className="font-semibold text-white underline underline-offset-4"
            >
              Browse our services
            </Link>{" "}
            or read the{" "}
            <Link
              href="/blog/hello-next-drupal"
              className="font-semibold text-white underline underline-offset-4"
            >
              getting started guide
            </Link>
            .
          </p>
        </div>
      </section>

      <CtaBanner />
    </>
  )
}
