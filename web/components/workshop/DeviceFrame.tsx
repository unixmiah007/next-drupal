import { SitePreview } from "@/components/workshop/SitePreview"
import type { WorkshopTheme } from "@/lib/workshop"

interface DeviceFrameProps {
  theme: WorkshopTheme
  variant: "desktop" | "mobile"
  label?: string
}

export function DeviceFrame({ theme, variant, label }: DeviceFrameProps) {
  if (variant === "mobile") {
    return (
      <div className="flex flex-col items-center">
        <div className="relative w-[140px] rounded-[1.75rem] border-[3px] border-slate-800 bg-slate-800 p-1.5 shadow-xl shadow-slate-900/30 transition group-hover:shadow-2xl group-hover:shadow-blue-500/10">
          <div className="absolute left-1/2 top-2.5 h-1 w-10 -translate-x-1/2 rounded-full bg-slate-700" />
          <div className="mt-3 overflow-hidden rounded-[1.25rem] bg-white">
            <div className="h-[220px] w-full">
              <SitePreview theme={theme} variant="mobile" />
            </div>
          </div>
          <div className="absolute bottom-1.5 left-1/2 h-1 w-10 -translate-x-1/2 rounded-full bg-slate-700" />
        </div>
        {label && (
          <p className="mt-3 text-xs font-semibold uppercase tracking-wider text-slate-500">
            {label}
          </p>
        )}
      </div>
    )
  }

  return (
    <div className="flex flex-col items-center">
      <div className="relative w-full max-w-md">
        <div className="overflow-hidden rounded-t-xl border-[3px] border-b-0 border-slate-800 bg-slate-800 p-1.5 shadow-xl shadow-slate-900/30 transition group-hover:shadow-2xl group-hover:shadow-blue-500/10">
          <div className="mb-1.5 flex items-center gap-1.5 px-1">
            <div className="h-2.5 w-2.5 rounded-full bg-red-400" />
            <div className="h-2.5 w-2.5 rounded-full bg-amber-400" />
            <div className="h-2.5 w-2.5 rounded-full bg-emerald-400" />
            <div className="ml-2 h-4 flex-1 rounded-md bg-slate-700" />
          </div>
          <div className="overflow-hidden rounded-t-lg bg-white">
            <div className="h-[200px] w-full sm:h-[220px]">
              <SitePreview theme={theme} variant="desktop" />
            </div>
          </div>
        </div>
        <div className="mx-auto h-2.5 w-24 rounded-b-lg bg-slate-700" />
      </div>
      {label && (
        <p className="mt-3 text-xs font-semibold uppercase tracking-wider text-slate-500">
          {label}
        </p>
      )}
    </div>
  )
}
