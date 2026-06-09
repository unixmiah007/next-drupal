import { NoteTeaser } from "@/components/drupal/NoteTeaser"
import { Link } from "@/components/navigation/Link"
import type { DrupalNode } from "next-drupal"

interface FeaturedNotesProps {
  nodes: DrupalNode[]
}

export function FeaturedNotes({ nodes }: FeaturedNotesProps) {
  if (!nodes?.length) {
    return null
  }

  return (
    <section className="bg-white py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="text-sm font-semibold uppercase tracking-wider text-blue-600">
              Live from Drupal
            </p>
            <h2 className="mt-2 text-3xl font-black tracking-tight text-slate-900 sm:text-4xl">
              Content powered by JSON:API
            </h2>
            <p className="mt-4 max-w-xl text-lg text-slate-600">
              These notes are authored in Drupal 11 and rendered here by Next.js
              — a real example of headless content in action.
            </p>
          </div>
          <Link
            href="/notes/welcome"
            className="text-sm font-semibold text-blue-600 no-underline hover:text-blue-500"
          >
            View all notes →
          </Link>
        </div>

        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {nodes.slice(0, 3).map((node) => (
            <div
              key={node.id}
              className="rounded-2xl border border-slate-200 p-6 transition hover:border-slate-300 hover:shadow-sm"
            >
              <NoteTeaser node={node} compact />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
