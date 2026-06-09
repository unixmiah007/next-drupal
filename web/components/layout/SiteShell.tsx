"use client"

import { Footer } from "@/components/navigation/Footer"
import { HeaderNav } from "@/components/navigation/HeaderNav"
import { usePathname } from "next/navigation"
import type { ReactNode } from "react"

export function SiteShell({ children }: { children: ReactNode }) {
  const pathname = usePathname()
  const isDemoStore = pathname.startsWith("/demo/artisan-market")

  if (isDemoStore) {
    return <>{children}</>
  }

  return (
    <>
      <HeaderNav />
      <main>{children}</main>
      <Footer />
    </>
  )
}
