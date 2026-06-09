import { Link } from "@/components/navigation/Link"

export function ArtisanFooter() {
  return (
    <footer className="border-t border-amber-200 bg-[#f5f0e8]">
      <div className="mx-auto max-w-6xl px-6 py-10">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="font-bold text-amber-950">Artisan Market</p>
            <p className="mt-1 text-sm text-amber-900/60">
              Live ecommerce demo · Next.js storefront
            </p>
          </div>
          <div className="flex flex-wrap gap-4 text-sm">
            <Link
              href="/drupal-commerce"
              className="font-medium text-amber-800 no-underline hover:text-amber-950"
            >
              Drupal Commerce overview
            </Link>
            <Link
              href="/contact"
              className="font-medium text-amber-800 no-underline hover:text-amber-950"
            >
              Build your store
            </Link>
            <Link
              href="/"
              className="font-medium text-amber-800 no-underline hover:text-amber-950"
            >
              NextDrupal home
            </Link>
          </div>
        </div>
        <p className="mt-8 border-t border-amber-200/60 pt-6 text-center text-xs text-amber-900/50">
          Demo storefront for sales presentations. Products are sample data —
          in production, catalog comes from Drupal Commerce via JSON:API.
        </p>
      </div>
    </footer>
  )
}
