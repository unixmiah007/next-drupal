import { ServiceIcon } from "@/components/home/ServiceIcon"
import { Link } from "@/components/navigation/Link"
import { services } from "@/lib/services"

export function ServicesSection() {
  return (
    <section id="services" className="bg-white py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-wider text-blue-600">
            What we offer
          </p>
          <h2 className="mt-2 text-3xl font-black tracking-tight text-slate-900 sm:text-4xl">
            Services for modern web development
          </h2>
          <p className="mt-4 text-lg text-slate-600">
            From headless architecture to pixel-perfect front ends — everything
            you need to ship a Drupal + Next.js product.
          </p>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => {
            const card = (
              <>
              <div
                className={`mb-5 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br ${service.accent} text-white shadow-sm`}
              >
                <ServiceIcon name={service.icon} />
              </div>

              <h3 className="text-lg font-bold text-slate-900">
                {service.title}
              </h3>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-slate-600">
                {service.description}
              </p>

              <ul className="mt-5 space-y-2 border-t border-slate-100 pt-5">
                {service.features.map((feature) => (
                  <li
                    key={feature}
                    className="flex items-start gap-2 text-sm text-slate-700"
                  >
                    <svg
                      className="mt-0.5 h-4 w-4 shrink-0 text-emerald-500"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 1 0 0-16 8 8 0 0 0 0 16Zm3.857-9.809a.75.75 0 0 0-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 1 0-1.06 1.061l2.5 2.5a.75.75 0 0 0 1.137-.089l4-5.5Z"
                        clipRule="evenodd"
                      />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>
                {service.href && (
                  <p className="mt-4 text-sm font-semibold text-blue-600 group-hover:text-blue-500">
                    Learn more →
                  </p>
                )}
              </>
            )

            return service.href ? (
              <Link
                key={service.id}
                href={service.href}
                className="group relative flex flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white p-6 shadow-sm no-underline transition hover:border-slate-300 hover:shadow-md"
              >
                {card}
              </Link>
            ) : (
              <article
                key={service.id}
                className="group relative flex flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:border-slate-300 hover:shadow-md"
              >
                {card}
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
