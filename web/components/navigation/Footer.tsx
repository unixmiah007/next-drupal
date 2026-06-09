import { Link } from "@/components/navigation/Link"

export function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-slate-50">
      <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-4 px-6 py-8 text-sm text-slate-500">
        <p>© {new Date().getFullYear()} Next.js for Drupal</p>
        <nav className="flex flex-wrap gap-6">
          <Link href="/services" className="no-underline hover:text-slate-900">
            Services
          </Link>
          <Link href="/drupal-commerce" className="no-underline hover:text-slate-900">
            Commerce
          </Link>
          <Link href="/workshop" className="no-underline hover:text-slate-900">
            Workshop
          </Link>
          <Link href="/about" className="no-underline hover:text-slate-900">
            About
          </Link>
          <Link href="/contact" className="no-underline hover:text-slate-900">
            Contact
          </Link>
          <Link
            href="https://next-drupal.org/docs"
            target="_blank"
            rel="external"
            className="no-underline hover:text-slate-900"
          >
            Documentation
          </Link>
        </nav>
      </div>
    </footer>
  )
}
