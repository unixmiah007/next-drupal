import { techStack } from "@/lib/services"

export function TechStackSection() {
  return (
    <section className="bg-slate-900 py-20 text-white sm:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <div className="text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-blue-400">
            Our stack
          </p>
          <h2 className="mt-2 text-3xl font-black tracking-tight sm:text-4xl">
            Built with the best of both worlds
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-slate-400">
            Drupal handles content. Next.js delivers the experience. TypeScript
            ties it all together.
          </p>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {techStack.map((item) => (
            <div
              key={item.name}
              className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm"
            >
              <p className="text-xs font-semibold uppercase tracking-wider text-blue-400">
                {item.role}
              </p>
              <h3 className="mt-2 text-xl font-bold">{item.name}</h3>
              <p className="mt-3 text-sm leading-relaxed text-slate-400">
                {item.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-14 flex flex-wrap items-center justify-center gap-4 rounded-2xl border border-white/10 bg-gradient-to-r from-blue-600/20 to-violet-600/20 px-8 py-6">
          <span className="rounded-lg bg-white px-4 py-2 text-sm font-bold text-slate-900">
            Drupal 11
          </span>
          <span className="text-slate-500">+</span>
          <span className="rounded-lg bg-slate-800 px-4 py-2 text-sm font-bold text-white ring-1 ring-white/20">
            Next.js 15
          </span>
          <span className="text-slate-500">+</span>
          <span className="rounded-lg bg-blue-600 px-4 py-2 text-sm font-bold text-white">
            TypeScript
          </span>
          <span className="text-slate-500">+</span>
          <span className="rounded-lg bg-emerald-600 px-4 py-2 text-sm font-bold text-white">
            next-drupal
          </span>
        </div>
      </div>
    </section>
  )
}
