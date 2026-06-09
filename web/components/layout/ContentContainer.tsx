import type { ReactNode } from "react"

interface ContentContainerProps {
  children: ReactNode
}

export function ContentContainer({ children }: ContentContainerProps) {
  return (
    <div className="mx-auto max-w-3xl px-6 py-10">{children}</div>
  )
}
