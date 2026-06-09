import type { ReactNode } from "react"
import type { WorkshopTheme } from "@/lib/workshop"

interface SitePreviewProps {
  theme: WorkshopTheme
  variant: "desktop" | "mobile"
}

export function SitePreview({ theme, variant }: SitePreviewProps) {
  const isMobile = variant === "mobile"

  const previews: Record<WorkshopTheme, ReactNode> = {
    saas: (
      <div className={`flex h-full flex-col ${isMobile ? "text-[6px]" : "text-[8px]"}`}>
        <div className="flex items-center justify-between bg-indigo-600 px-3 py-2 text-white">
          <div className={`rounded bg-white/30 ${isMobile ? "h-1.5 w-8" : "h-2 w-12"}`} />
          {!isMobile && (
            <div className="flex gap-2">
              <div className="h-1 w-6 rounded bg-white/20" />
              <div className="h-1 w-6 rounded bg-white/20" />
              <div className="h-1 w-6 rounded bg-white/20" />
            </div>
          )}
        </div>
        <div className={`flex-1 bg-gradient-to-br from-indigo-50 to-blue-50 ${isMobile ? "p-2" : "p-4"}`}>
          <div className={`rounded bg-indigo-600 ${isMobile ? "mb-2 h-10" : "mb-3 h-16"} w-full`} />
          <div className={`rounded bg-white/80 ${isMobile ? "mb-1 h-1.5 w-3/4" : "mb-2 h-2 w-2/3"}`} />
          <div className={`rounded bg-white/60 ${isMobile ? "mb-2 h-1 w-1/2" : "mb-3 h-1.5 w-1/2"}`} />
          <div className={`rounded-lg bg-indigo-500 ${isMobile ? "h-3 w-14" : "h-4 w-20"}`} />
          {!isMobile && (
            <div className="mt-4 grid grid-cols-3 gap-2">
              <div className="h-12 rounded-lg bg-white shadow-sm" />
              <div className="h-12 rounded-lg bg-white shadow-sm" />
              <div className="h-12 rounded-lg bg-white shadow-sm" />
            </div>
          )}
        </div>
      </div>
    ),
    commerce: (
      <div className={`flex h-full flex-col ${isMobile ? "text-[6px]" : "text-[8px]"}`}>
        <div className="flex items-center justify-between bg-orange-600 px-3 py-2 text-white">
          <div className={`rounded bg-white/30 ${isMobile ? "h-1.5 w-10" : "h-2 w-14"}`} />
          <div className={`rounded-full bg-white/20 ${isMobile ? "h-3 w-3" : "h-4 w-4"}`} />
        </div>
        <div className={`flex-1 bg-amber-50 ${isMobile ? "p-2" : "p-3"}`}>
          <div className={`rounded-lg bg-gradient-to-r from-amber-200 to-orange-200 ${isMobile ? "mb-2 h-12" : "mb-3 h-20"}`} />
          <div className={`grid ${isMobile ? "grid-cols-2 gap-1" : "grid-cols-3 gap-2"}`}>
            {[1, 2, 3, 4, 5, 6].slice(0, isMobile ? 4 : 6).map((i) => (
              <div key={i} className="rounded bg-white p-1 shadow-sm">
                <div className={`rounded bg-amber-100 ${isMobile ? "mb-1 h-6" : "mb-1 h-10"}`} />
                <div className="h-1 w-3/4 rounded bg-amber-200" />
              </div>
            ))}
          </div>
        </div>
      </div>
    ),
    magazine: (
      <div className={`flex h-full flex-col ${isMobile ? "text-[6px]" : "text-[8px]"}`}>
        <div className="border-b border-rose-100 bg-white px-3 py-2">
          <div className={`mx-auto rounded bg-rose-900 ${isMobile ? "h-2 w-12" : "h-2.5 w-16"}`} />
        </div>
        <div className={`flex-1 bg-white ${isMobile ? "p-2" : "p-3"}`}>
          <div className={`rounded-lg bg-gradient-to-br from-rose-100 to-pink-50 ${isMobile ? "mb-2 h-14" : "mb-3 h-24"} relative overflow-hidden`}>
            <div className="absolute bottom-2 left-2 right-2">
              <div className="mb-1 h-2 w-3/4 rounded bg-rose-800/80" />
              <div className="h-1 w-1/2 rounded bg-rose-600/60" />
            </div>
          </div>
          <div className={`grid ${isMobile ? "gap-1" : "grid-cols-2 gap-2"}`}>
            <div className="rounded bg-rose-50 p-1.5">
              <div className={`rounded bg-rose-200 ${isMobile ? "mb-1 h-5" : "mb-1 h-8"}`} />
              <div className="h-1 w-full rounded bg-rose-100" />
            </div>
            {!isMobile && (
              <div className="rounded bg-rose-50 p-1.5">
                <div className="mb-1 h-8 rounded bg-rose-200" />
                <div className="h-1 w-full rounded bg-rose-100" />
              </div>
            )}
          </div>
        </div>
      </div>
    ),
    portfolio: (
      <div className={`flex h-full flex-col bg-slate-900 ${isMobile ? "text-[6px]" : "text-[8px]"}`}>
        <div className="flex items-center justify-between px-3 py-2">
          <div className={`rounded bg-white ${isMobile ? "h-1.5 w-8" : "h-2 w-10"}`} />
          <div className={`rounded bg-slate-700 ${isMobile ? "h-2 w-2" : "h-2.5 w-2.5"}`} />
        </div>
        <div className={`flex-1 ${isMobile ? "px-2 pb-2" : "px-4 pb-4"}`}>
          <div className={`rounded bg-white/10 ${isMobile ? "mb-2 h-1.5 w-2/3" : "mb-3 h-3 w-1/2"}`} />
          <div className={`rounded bg-white/5 ${isMobile ? "mb-2 h-1 w-1/3" : "mb-4 h-2 w-1/3"}`} />
          <div className={`grid ${isMobile ? "grid-cols-2 gap-1" : "grid-cols-3 gap-2"}`}>
            {[1, 2, 3, 4].slice(0, isMobile ? 4 : 3).map((i) => (
              <div
                key={i}
                className={`rounded-lg bg-gradient-to-br from-slate-700 to-slate-800 ${isMobile ? "h-10" : "h-16"}`}
              />
            ))}
          </div>
        </div>
      </div>
    ),
    restaurant: (
      <div className={`flex h-full flex-col ${isMobile ? "text-[6px]" : "text-[8px]"}`}>
        <div className="relative bg-red-800 px-3 py-2 text-white">
          <div className={`rounded bg-white/30 ${isMobile ? "h-1.5 w-12" : "h-2 w-16"}`} />
        </div>
        <div className={`flex-1 bg-stone-50 ${isMobile ? "p-2" : "p-3"}`}>
          <div className={`rounded-lg bg-gradient-to-br from-red-200 via-amber-100 to-stone-200 ${isMobile ? "mb-2 h-16" : "mb-3 h-28"}`} />
          <div className={`rounded-lg border border-stone-200 bg-white ${isMobile ? "p-1.5" : "p-2"}`}>
            <div className={`rounded bg-red-100 ${isMobile ? "mb-1 h-1.5 w-1/2" : "mb-2 h-2 w-1/3"}`} />
            {[1, 2, 3].map((i) => (
              <div key={i} className="mb-1 flex justify-between border-b border-stone-100 py-0.5">
                <div className="h-1 w-1/3 rounded bg-stone-200" />
                <div className="h-1 w-1/6 rounded bg-red-200" />
              </div>
            ))}
          </div>
        </div>
      </div>
    ),
    agency: (
      <div className={`flex h-full flex-col ${isMobile ? "text-[6px]" : "text-[8px]"}`}>
        <div className="bg-violet-700 px-3 py-2">
          <div className="flex items-center justify-between">
            <div className={`rounded bg-white/30 ${isMobile ? "h-1.5 w-8" : "h-2 w-12"}`} />
            {!isMobile && <div className="h-3 w-16 rounded-full bg-violet-500" />}
          </div>
        </div>
        <div className={`flex-1 bg-violet-950 ${isMobile ? "p-2" : "p-4"}`}>
          <div className={`rounded bg-violet-400/30 ${isMobile ? "mb-1 h-2 w-3/4" : "mb-2 h-4 w-2/3"}`} />
          <div className={`rounded bg-violet-400/20 ${isMobile ? "mb-2 h-1 w-1/2" : "mb-4 h-2 w-1/2"}`} />
          <div className={`flex ${isMobile ? "gap-1" : "gap-2"}`}>
            <div className={`rounded-lg bg-violet-600 ${isMobile ? "h-8 flex-1" : "h-14 flex-1"}`} />
            <div className={`rounded-lg bg-fuchsia-600 ${isMobile ? "h-8 flex-1" : "h-14 flex-1"}`} />
          </div>
          {!isMobile && (
            <div className="mt-3 flex gap-2">
              <div className="h-6 w-6 rounded-full bg-violet-500/40" />
              <div className="h-6 w-6 rounded-full bg-fuchsia-500/40" />
              <div className="h-6 w-6 rounded-full bg-purple-500/40" />
            </div>
          )}
        </div>
      </div>
    ),
  }

  return <div className="h-full w-full overflow-hidden">{previews[theme]}</div>
}
