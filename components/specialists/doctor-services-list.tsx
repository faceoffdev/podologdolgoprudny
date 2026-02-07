'use client'

import { useMemo, useState } from 'react'
import Link from 'next/link'
import { CheckCircle2, ChevronDown, ChevronUp } from 'lucide-react'
import { type DoctorService, formatPriceRange } from '@/lib/services'
import { Button } from '@/components/ui/button'

type DoctorServicesListProps = {
  services: DoctorService[]
  initialVisibleCount?: number
}

export function DoctorServicesList({ services, initialVisibleCount = 5 }: DoctorServicesListProps) {
  const [isExpanded, setIsExpanded] = useState(false)
  const hasMore = services.length > initialVisibleCount

  const visibleServices = useMemo(() => {
    if (isExpanded || !hasMore) {
      return services
    }

    return services.slice(0, initialVisibleCount)
  }, [hasMore, initialVisibleCount, isExpanded, services])

  return (
    <div className="space-y-3 text-slate-600">
      {visibleServices.map((service) => (
        <div key={service.profileUrl} className="flex items-start gap-2">
          <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 shrink-0" />
          <div className="space-y-0.5">
            <Link href={service.profileUrl} className="font-medium text-slate-800 hover:text-primary">
              {service.name}
            </Link>
            <p className="text-sm text-slate-500">{formatPriceRange(service.price)}</p>
          </div>
        </div>
      ))}

      {hasMore && (
        <Button
          variant="ghost"
          size="sm"
          className="mt-2 !h-auto !px-3 !py-2 !bg-transparent !text-primary hover:!bg-slate-100 hover:!text-primary-dark"
          onClick={() => setIsExpanded((current) => !current)}
          aria-expanded={isExpanded}
        >
          {isExpanded ? (
            <>
              <ChevronUp className="w-4 h-4 mr-1" />
              Свернуть список
            </>
          ) : (
            <>
              <ChevronDown className="w-4 h-4 mr-1" />
              Показать еще {services.length - initialVisibleCount}
            </>
          )}
        </Button>
      )}
    </div>
  )
}
