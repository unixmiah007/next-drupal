const checklist = [
  "Viewport meta tag and fluid root font sizing",
  "Mobile-first Tailwind utility classes",
  "Responsive images with next/image sizes prop",
  "Drupal responsive image styles for API sources",
  "Touch-friendly 44px minimum tap targets",
  "Semantic HTML from Drupal WYSIWYG output",
  "Collapsible navigation for small screens",
  "Lazy-loaded below-the-fold content",
  "Core Web Vitals monitoring (LCP, CLS, INP)",
  "Cross-browser testing on real devices",
]

export function ChecklistSection() {
  return (
    <section className="bg-gradient-to-br from-emerald-600 to-teal-700 py-20 text-white sm:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="text-sm font-semibold uppercase tracking-wider text-emerald-200">
              Quality checklist
            </p>
            <h2 className="mt-2 text-3xl font-black tracking-tight sm:text-4xl">
              Every responsive project includes
            </h2>
            <p className="mt-4 text-lg text-emerald-100">
              We don&apos;t ship until every item on this list passes — your
              users deserve a polished experience on every device.
            </p>
          </div>

          <ul className="grid gap-3 sm:grid-cols-1">
            {checklist.map((item) => (
              <li
                key={item}
                className="flex items-start gap-3 rounded-xl border border-white/20 bg-white/10 px-4 py-3 backdrop-blur-sm"
              >
                <svg
                  className="mt-0.5 h-5 w-5 shrink-0 text-emerald-200"
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
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
