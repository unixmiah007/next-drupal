import { Link } from "@/components/navigation/Link"

export function DemoBanner() {
  return (
    <div className="border-b border-amber-300/40 bg-gradient-to-r from-amber-100 to-orange-100 px-4 py-2 text-center text-sm text-amber-900">
      <span className="font-medium">Live demo store</span>
      <span className="mx-2 text-amber-600">·</span>
      Products from{" "}
      <a
        href="http://127.0.0.1:65204/admin/content"
        target="_blank"
        rel="noopener noreferrer"
        className="font-semibold text-amber-800 underline underline-offset-2"
      >
        Drupal admin
      </a>
      {" "}via JSON:API ·{" "}
      <Link
        href="/drupal-commerce"
        className="font-semibold text-amber-800 underline underline-offset-2"
      >
        Drupal Commerce + Next.js
      </Link>
    </div>
  )
}
