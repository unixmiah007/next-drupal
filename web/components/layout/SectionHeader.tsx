interface SectionHeaderProps {
  eyebrow: string
  title: string
  description?: string
  centered?: boolean
  variant?: "light" | "dark"
}

export function SectionHeader({
  eyebrow,
  title,
  description,
  centered = false,
  variant = "light",
}: SectionHeaderProps) {
  const isDark = variant === "dark"

  return (
    <div className={centered ? "mx-auto max-w-2xl text-center" : "max-w-2xl"}>
      <p
        className={`text-sm font-semibold uppercase tracking-wider ${isDark ? "text-blue-400" : "text-blue-600"}`}
      >
        {eyebrow}
      </p>
      <h2
        className={`mt-2 text-3xl font-black tracking-tight sm:text-4xl ${isDark ? "text-white" : "text-slate-900"}`}
      >
        {title}
      </h2>
      {description && (
        <p className={`mt-4 text-lg ${isDark ? "text-slate-400" : "text-slate-600"}`}>
          {description}
        </p>
      )}
    </div>
  )
}
