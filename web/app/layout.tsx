import { SiteShell } from "@/components/layout/SiteShell"
import { DraftAlert } from "@/components/misc/DraftAlert"
import type { Metadata } from "next"
import type { ReactNode } from "react"

import "@/styles/globals.css"

export const metadata: Metadata = {
  title: {
    default: "NextDrupal — Web Development Services",
    template: "%s | NextDrupal",
  },
  description:
    "Headless web development with Drupal 11 and Next.js. TypeScript front ends powered by JSON:API.",
  icons: {
    icon: "/favicon.ico",
  },
}

export default function RootLayout({
  children,
}: {
  children: ReactNode
}) {
  return (
    <html lang="en">
      <body className="bg-white text-slate-900 antialiased">
        <DraftAlert />
        <SiteShell>{children}</SiteShell>
      </body>
    </html>
  )
}
