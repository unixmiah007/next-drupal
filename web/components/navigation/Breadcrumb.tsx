import { Link } from "@/components/navigation/Link"

export interface BreadcrumbItem {
  label: string
  href?: string
}

interface BreadcrumbProps {
  items: BreadcrumbItem[]
  variant?: "blue" | "emerald"
}

export function Breadcrumb({ items, variant = "blue" }: BreadcrumbProps) {
  const linkClass =
    variant === "emerald"
      ? "text-emerald-300 no-underline transition hover:text-emerald-200"
      : "text-blue-300 no-underline transition hover:text-blue-200"

  const currentClass =
    variant === "emerald" ? "text-emerald-100" : "text-white"

  const separatorClass =
    variant === "emerald" ? "text-emerald-600" : "text-slate-600"

  return (
    <nav aria-label="Breadcrumb">
      <ol className="flex flex-wrap items-center gap-1.5 text-sm">
        {items.map((item, index) => {
          const isLast = index === items.length - 1

          return (
            <li key={item.label} className="flex items-center gap-1.5">
              {index > 0 && (
                <span aria-hidden="true" className={separatorClass}>
                  /
                </span>
              )}
              {item.href && !isLast ? (
                <Link href={item.href} className={linkClass}>
                  {item.label}
                </Link>
              ) : (
                <span
                  className={currentClass}
                  {...(isLast ? { "aria-current": "page" as const } : {})}
                >
                  {item.label}
                </span>
              )}
            </li>
          )
        })}
      </ol>
    </nav>
  )
}
