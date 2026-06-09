import type { ReactNode } from "react"
import type { ServiceIcon as ServiceIconName } from "@/lib/services"

interface ServiceIconProps {
  name: ServiceIconName
  className?: string
}

export function ServiceIcon({ name, className = "h-7 w-7" }: ServiceIconProps) {
  const icons: Record<ServiceIconName, ReactNode> = {
    headless: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className={className}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6A2.25 2.25 0 0 1 6 3.75h2.25A2.25 2.25 0 0 1 10.5 6v2.25a2.25 2.25 0 0 1-2.25 2.25H6a2.25 2.25 0 0 1-2.25-2.25V6ZM3.75 15.75A2.25 2.25 0 0 1 6 13.5h2.25a2.25 2.25 0 0 1 2.25 2.25V18a2.25 2.25 0 0 1-2.25 2.25H6A2.25 2.25 0 0 1 3.75 18v-2.25ZM13.5 6a2.25 2.25 0 0 1 2.25-2.25H18A2.25 2.25 0 0 1 20.25 6v2.25A2.25 2.25 0 0 1 18 10.5h-2.25a2.25 2.25 0 0 1-2.25-2.25V6ZM13.5 15.75a2.25 2.25 0 0 1 2.25-2.25H18a2.25 2.25 0 0 1 2.25 2.25V18A2.25 2.25 0 0 1 18 20.25h-2.25A2.25 2.25 0 0 1 13.5 18v-2.25Z" />
      </svg>
    ),
    nextjs: (
      <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
        <path d="M11.572 0c-.176 0-.31.001-.358.007a19.76 19.76 0 0 0-.364.033C7.443.346 4.25 2.185 2.228 5.012a11.875 11.875 0 0 0-2.119 5.243c-.096.659-.108.854-.108 1.747s.012 1.089.108 1.748c.652 4.506 3.86 8.292 8.209 9.695.779.251 1.6.422 2.534.525.363.04 1.935.04 2.299 0 1.611-.178 2.977-.577 4.323-1.264.207-.106.247-.134.219-.158-.02-.013-.9-1.193-1.955-2.62l-1.934-2.593-2.42-3.558c-1.332-1.956-2.42-3.559-2.42-3.56 0-.002.956.034 2.125.036 1.17.002 2.144.01 2.165.017.03.01 1.59 2.35 3.54 5.2 1.95 2.85 3.555 5.187 3.565 5.187.01.01.864-.31 1.896-.712 2.54-1.002 4.193-1.84 5.427-2.74 2.016-1.513 3.52-3.44 4.476-5.74.348-.79.62-1.57.82-2.36.096-.36.12-.47.12-.95 0-.48-.024-.59-.12-.95a11.86 11.86 0 0 0-2.712-4.77C18.88 2.88 15.3.97 11.572 0ZM8.38 14.387c-1.13 0-2.043-.9-2.043-2.01 0-1.11.913-2.01 2.043-2.01 1.13 0 2.043.9 2.043 2.01 0 1.11-.913 2.01-2.043 2.01Z" />
      </svg>
    ),
    drupal: (
      <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
        <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.894 16.894l-1.789 1.789-4.105-4.105-4.105 4.105-1.789-1.789 4.105-4.105-4.105-4.105 1.789-1.789 4.105 4.105 4.105-4.105 1.789 1.789-4.105 4.105 4.105 4.105z" />
      </svg>
    ),
    api: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className={className}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75 22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3-4.5 16.5" />
      </svg>
    ),
    design: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className={className}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.53 16.122a3 3 0 0 0-5.78 1.128 2.25 2.25 0 0 1-2.4 2.245 4.5 4.5 0 0 0 8.4-2.245c0-2.25-1.5-3.75-1.5-3.75S9.53 16.122 9.53 16.122ZM14.25 8.25l-1.5-1.5M5.25 5.25l1.5 1.5m12 12 1.5 1.5M18.75 5.25l-1.5 1.5M5.25 18.75l1.5-1.5M3 21h18M12 3v.01" />
      </svg>
    ),
    performance: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className={className}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5 10.5 6.75 14.25 10.5 21 3.75M3.75 19.5h16.5" />
      </svg>
    ),
  }

  return <>{icons[name]}</>
}
