const flowSteps = [
  {
    step: "1",
    title: "Request a page",
    description:
      "A visitor hits a URL like /about or /notes/welcome. Next.js resolves the route and fetches the matching Drupal content.",
  },
  {
    step: "2",
    title: "Translate the path",
    description:
      "next-drupal calls Drupal's decoupled router to convert the URL path into a JSON:API resource type and entity UUID.",
  },
  {
    step: "3",
    title: "Fetch via JSON:API",
    description:
      "The NextDrupal client requests structured JSON — nodes, fields, media, and path aliases — over HTTP.",
  },
  {
    step: "4",
    title: "Drupal reads the database",
    description:
      "Drupal queries MariaDB for entities, applies permissions, and serializes the result as JSON:API resources.",
  },
  {
    step: "5",
    title: "Render & cache",
    description:
      "Next.js renders React Server Components, caches the page (ISR), and sends HTML to the browser. Content updates trigger revalidation.",
  },
]

const techDetails = [
  {
    label: "Protocol",
    value: "JSON:API 1.1",
    detail: "Standard REST spec for Drupal entities",
  },
  {
    label: "Client",
    value: "next-drupal 2.0",
    detail: "TypeScript JSON:API client for Next.js",
  },
  {
    label: "Path resolution",
    value: "decoupled_router",
    detail: "Maps /about → node UUID + bundle",
  },
  {
    label: "Caching",
    value: "ISR + revalidate",
    detail: "Hourly revalidation, on-demand webhooks",
  },
  {
    label: "Database",
    value: "MariaDB 10.11",
    detail: "Entity storage via Drupal's SQL layer",
  },
  {
    label: "Preview",
    value: "Draft mode",
    detail: "Editors preview unpublished content",
  },
]

function ArrowDown({ label }: { label?: string }) {
  return (
    <div className="flex flex-col items-center py-2">
      <div className="h-8 w-px bg-gradient-to-b from-blue-500 to-violet-500" />
      <svg className="h-4 w-4 text-violet-400" viewBox="0 0 20 20" fill="currentColor">
        <path
          fillRule="evenodd"
          d="M10 3a.75.75 0 0 1 .75.75v10.638l3.96-4.158a.75.75 0 1 1 1.08 1.04l-5.25 5.5a.75.75 0 0 1-1.08 0l-5.25-5.5a.75.75 0 1 1 1.08-1.04l3.96 4.158V3.75A.75.75 0 0 1 10 3Z"
          clipRule="evenodd"
        />
      </svg>
      {label && (
        <span className="mt-1 rounded-full bg-blue-500/20 px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-blue-300">
          {label}
        </span>
      )}
    </div>
  )
}

function HorizontalArrow({ label, reverse }: { label: string; reverse?: boolean }) {
  return (
    <div
      className={`flex items-center gap-1 ${reverse ? "flex-row-reverse" : ""}`}
    >
      <div className="h-px w-8 bg-gradient-to-r from-blue-500 to-violet-500 sm:w-12" />
      <svg
        className={`h-4 w-4 shrink-0 text-violet-400 ${reverse ? "rotate-180" : ""}`}
        viewBox="0 0 20 20"
        fill="currentColor"
      >
        <path
          fillRule="evenodd"
          d="M3 10a.75.75 0 0 1 .75-.75h10.638l-3.96-4.158a.75.75 0 1 1 1.08-1.04l5.25 5.5a.75.75 0 0 1 0 1.08l-5.25 5.5a.75.75 0 1 1-1.08-1.04l3.96-4.158H3.75A.75.75 0 0 1 3 10Z"
          clipRule="evenodd"
        />
      </svg>
      <span className="whitespace-nowrap rounded-full bg-violet-500/20 px-2 py-0.5 text-[10px] font-semibold text-violet-300">
        {label}
      </span>
    </div>
  )
}

export function ArchitectureDiagram() {
  return (
    <section id="architecture" className="bg-slate-950 py-20 text-white sm:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <div className="text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-blue-400">
            System architecture
          </p>
          <h2 className="mt-2 text-3xl font-black tracking-tight sm:text-4xl">
            How Next.js, Drupal 11 &amp; the database connect
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-slate-400">
            A headless stack — three layers, two applications, one source of
            truth for your content.
          </p>
        </div>

        {/* Main diagram */}
        <div className="relative mt-14 overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm sm:p-10">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-600/10 via-transparent to-violet-600/10" />

          <div className="relative">
            {/* Row 1: Browser */}
            <div className="flex justify-center">
              <div className="rounded-2xl border border-white/10 bg-slate-800/80 px-8 py-5 text-center shadow-lg">
                <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-slate-600 to-slate-700">
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
                  </svg>
                </div>
                <p className="font-bold">Visitors</p>
                <p className="mt-1 text-xs text-slate-400">Browser · Mobile · Desktop</p>
              </div>
            </div>

            <ArrowDown label="HTTPS" />

            {/* Row 2: Next.js */}
            <div className="flex justify-center">
              <div className="w-full max-w-md rounded-2xl border-2 border-slate-700 bg-slate-900 px-6 py-6 shadow-xl shadow-black/30">
                <div className="flex items-center gap-4">
                  <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-slate-800 text-white">
                    <svg className="h-8 w-8" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M11.572 0c-.176 0-.31.001-.358.007a19.76 19.76 0 0 0-.364.033C7.443.346 4.25 2.185 2.228 5.012a11.875 11.875 0 0 0-2.119 5.243c-.096.659-.108.854-.108 1.747s.012 1.089.108 1.748c.652 4.506 3.86 8.292 8.209 9.695.779.251 1.6.422 2.534.525.363.04 1.935.04 2.299 0 1.611-.178 2.977-.577 4.323-1.264.207-.106.247-.134.219-.158-.02-.013-.9-1.193-1.955-2.62l-1.934-2.593-2.42-3.558c-1.332-1.956-2.42-3.559-2.42-3.56 0-.002.956.034 2.125.036 1.17.002 2.144.01 2.165.017.03.01 1.59 2.35 3.54 5.2 1.95 2.85 3.555 5.187 3.565 5.187.01.01.864-.31 1.896-.712 2.54-1.002 4.193-1.84 5.427-2.74 2.016-1.513 3.52-3.44 4.476-5.74.348-.79.62-1.57.82-2.36.096-.36.12-.47.12-.95 0-.48-.024-.59-.12-.95a11.86 11.86 0 0 0-2.712-4.77C18.88 2.88 15.3.97 11.572 0ZM8.38 14.387c-1.13 0-2.043-.9-2.043-2.01 0-1.11.913-2.01 2.043-2.01 1.13 0 2.043.9 2.043 2.01 0 1.11-.913 2.01-2.043 2.01Z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-lg font-bold">Next.js 15</p>
                    <p className="text-sm text-slate-400">Front-end · App Router</p>
                    <p className="mt-1 font-mono text-xs text-blue-400">localhost:3000</p>
                  </div>
                </div>
                <div className="mt-4 flex flex-wrap gap-2">
                  {["React 19", "TypeScript", "Tailwind", "next-drupal"].map(
                    (tag) => (
                      <span
                        key={tag}
                        className="rounded-md bg-slate-800 px-2 py-1 text-[10px] font-medium text-slate-300"
                      >
                        {tag}
                      </span>
                    )
                  )}
                </div>
              </div>
            </div>

            {/* Bidirectional arrow to Drupal */}
            <div className="my-4 flex flex-col items-center gap-3 sm:flex-row sm:justify-center sm:gap-6">
              <div className="flex items-center gap-2 text-xs text-slate-500">
                <span className="rounded bg-blue-500/20 px-2 py-1 text-blue-300">
                  GET /jsonapi/node/page/uuid
                </span>
              </div>
              <div className="hidden h-px w-16 bg-gradient-to-r from-transparent via-violet-500 to-transparent sm:block" />
              <div className="flex items-center gap-2 text-xs text-slate-500">
                <span className="rounded bg-violet-500/20 px-2 py-1 text-violet-300">
                  POST /api/revalidate
                </span>
              </div>
            </div>

            <div className="flex justify-center">
              <div className="flex flex-col items-center sm:flex-row sm:items-center sm:gap-4">
                <HorizontalArrow label="JSON:API" />
                <ArrowDown />
                <HorizontalArrow label="webhook" reverse />
              </div>
            </div>

            {/* Row 3: Drupal */}
            <div className="flex justify-center">
              <div className="w-full max-w-md rounded-2xl border-2 border-sky-600/50 bg-gradient-to-br from-sky-950 to-blue-950 px-6 py-6 shadow-xl shadow-sky-900/20">
                <div className="flex items-center gap-4">
                  <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-sky-600 text-white">
                    <svg className="h-8 w-8" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 15v-4H8v-2h3V9h2v4h3v2h-3v4h-2z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-lg font-bold">Drupal 11</p>
                    <p className="text-sm text-sky-200/70">CMS · JSON:API · Admin</p>
                    <p className="mt-1 font-mono text-xs text-sky-400">127.0.0.1:65204</p>
                  </div>
                </div>
                <div className="mt-4 flex flex-wrap gap-2">
                  {["next module", "decoupled_router", "pathauto", "JSON:API"].map(
                    (tag) => (
                      <span
                        key={tag}
                        className="rounded-md bg-sky-900/60 px-2 py-1 text-[10px] font-medium text-sky-200"
                      >
                        {tag}
                      </span>
                    )
                  )}
                </div>
              </div>
            </div>

            <ArrowDown label="SQL queries" />

            {/* Row 4: Database */}
            <div className="flex justify-center">
              <div className="w-full max-w-md rounded-2xl border-2 border-emerald-600/40 bg-gradient-to-br from-emerald-950 to-teal-950 px-6 py-6 shadow-xl shadow-emerald-900/20">
                <div className="flex items-center gap-4">
                  <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-emerald-600 text-white">
                    <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 6.375c0 2.278-3.694 4.125-8.25 4.125S3.75 8.653 3.75 6.375m16.5 0c0-2.278-3.694-4.125-8.25-4.125S3.75 4.097 3.75 6.375m16.5 0v11.25c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125V6.375m16.5 0v3.75m-16.5-3.75v3.75m16.5 0v3.75C20.25 16.153 16.556 18 12 18s-8.25-1.847-8.25-4.125v-3.75m16.5 0c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-lg font-bold">MariaDB</p>
                    <p className="text-sm text-emerald-200/70">Entity storage · DDEV</p>
                    <p className="mt-1 font-mono text-xs text-emerald-400">db:3306 · user: db</p>
                  </div>
                </div>
                <div className="mt-4 flex flex-wrap gap-2">
                  {["nodes", "users", "path_alias", "media", "config"].map(
                    (tag) => (
                      <span
                        key={tag}
                        className="rounded-md bg-emerald-900/60 px-2 py-1 text-[10px] font-medium text-emerald-200"
                      >
                        {tag}
                      </span>
                    )
                  )}
                </div>
              </div>
            </div>

            {/* Editor sidebar callout */}
            <div className="mt-10 flex justify-center">
              <div className="flex max-w-lg items-center gap-4 rounded-xl border border-dashed border-amber-500/30 bg-amber-500/5 px-5 py-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-amber-500/20 text-amber-300">
                  <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10" />
                  </svg>
                </div>
                <div>
                  <p className="text-sm font-bold text-amber-200">Content editors</p>
                  <p className="text-xs text-amber-200/70">
                    Create &amp; edit nodes in Drupal admin → saved to MariaDB →
                    instantly available via JSON:API to Next.js
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Request flow steps */}
        <div className="mt-14">
          <h3 className="text-center text-xl font-bold">Request lifecycle</h3>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {flowSteps.map((item) => (
              <div
                key={item.step}
                className="relative rounded-2xl border border-white/10 bg-white/5 p-5"
              >
                <div className="mb-3 flex h-8 w-8 items-center justify-center rounded-full bg-blue-600 text-sm font-bold">
                  {item.step}
                </div>
                <p className="font-bold">{item.title}</p>
                <p className="mt-2 text-xs leading-relaxed text-slate-400">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Tech detail grid */}
        <div className="mt-14">
          <h3 className="text-center text-xl font-bold">Technical details</h3>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {techDetails.map((item) => (
              <div
                key={item.label}
                className="rounded-2xl border border-white/10 bg-white/5 p-5"
              >
                <p className="text-xs font-semibold uppercase tracking-wider text-blue-400">
                  {item.label}
                </p>
                <p className="mt-1 text-lg font-bold">{item.value}</p>
                <p className="mt-1 text-sm text-slate-400">{item.detail}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Data shape example */}
        <div className="mt-14 rounded-2xl border border-white/10 bg-slate-900 p-6 font-mono text-xs sm:p-8">
          <p className="mb-4 text-sm font-sans font-bold text-slate-300">
            Example JSON:API response shape
          </p>
          <pre className="overflow-x-auto leading-relaxed text-slate-400">
            <code>{`GET /jsonapi/node/note/{uuid}

{
  "data": {
    "type": "node--note",
    "id": "3b518a2f-...",
    "attributes": {
      "title": "Welcome",
      "body": { "processed": "<p>...</p>" },
      "path": { "alias": "/notes/welcome" }
    }
  }
}

→ Next.js maps this to a typed DrupalNode → renders <Note /> component`}</code>
          </pre>
        </div>
      </div>
    </section>
  )
}
