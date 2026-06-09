import { Link } from "@/components/navigation/Link"
import type { DrupalNode } from "next-drupal"

interface NoteTeaserProps {
  node: DrupalNode
  compact?: boolean
}

export function NoteTeaser({ node, compact = false, ...props }: NoteTeaserProps) {
  return (
    <article {...props}>
      <Link href={node.path.alias} className="no-underline hover:text-blue-600">
        <h2
          className={
            compact
              ? "mb-2 text-xl font-bold text-slate-900"
              : "mb-4 text-4xl font-bold"
          }
        >
          {node.title}
        </h2>
      </Link>
      {node.body?.summary && (
        <div
          dangerouslySetInnerHTML={{ __html: node.body.summary }}
          className={
            compact
              ? "text-sm leading-relaxed text-slate-600"
              : "font-serif text-lg text-gray-600"
          }
        />
      )}
    </article>
  )
}
