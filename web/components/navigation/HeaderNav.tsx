import { Link } from "@/components/navigation/Link"

const navLinks = [
  { href: "/services", label: "Services" },
  { href: "/drupal-commerce", label: "Commerce" },
  { href: "/workshop", label: "Workshop" },
  { href: "/responsive-design", label: "Responsive" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
]

export function HeaderNav() {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/80 bg-white/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link
          href="/"
          className="text-lg font-bold tracking-tight text-slate-900 no-underline"
        >
          Next<span className="text-blue-600">Drupal</span>
        </Link>

        <nav className="hidden items-center gap-6 sm:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-slate-600 no-underline transition hover:text-slate-900"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <Link
          href="/contact"
          className="rounded-lg bg-blue-600 px-4 py-2 text-sm font-semibold text-white no-underline transition hover:bg-blue-500"
        >
          Get started
        </Link>
      </div>
    </header>
  )
}
