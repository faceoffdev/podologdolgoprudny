'use client'

import { useEffect, useMemo, useRef, useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { Search } from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { formatPriceRange, getServicePriceRange, type Service, type ServiceCategory } from '@/lib/services'

type CategoryGroup = {
  category: ServiceCategory
  items: Service[]
}

type ServicesCatalogProps = {
  categories: CategoryGroup[]
}

function formatServicesCount(count: number) {
  const mod10 = count % 10
  const mod100 = count % 100
  if (mod10 === 1 && mod100 !== 11) return `${count} услуга`
  if (mod10 >= 2 && mod10 <= 4 && (mod100 < 12 || mod100 > 14)) return `${count} услуги`
  return `${count} услуг`
}

export function ServicesCatalog({ categories }: ServicesCatalogProps) {
  const router = useRouter()
  const [searchQuery, setSearchQuery] = useState('')
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)
  const searchContainerRef = useRef<HTMLDivElement | null>(null)
  const normalizedSearch = searchQuery.trim().toLowerCase()

  const searchableServices = useMemo(
    () =>
      categories.flatMap(({ items }) =>
        items.map((service) => ({
          name: service.name,
          profileUrl: service.profileUrl,
        })),
      ),
    [categories],
  )

  const matchedServices = useMemo(() => {
    if (normalizedSearch.length < 2) {
      return []
    }

    return searchableServices.filter((item) => item.name.toLowerCase().includes(normalizedSearch)).slice(0, 50)
  }, [normalizedSearch, searchableServices])

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as Node
      if (searchContainerRef.current && !searchContainerRef.current.contains(target)) {
        setIsDropdownOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10 lg:space-y-12">
      <div className="w-full" ref={searchContainerRef}>
        <div className="relative">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-slate-400 pointer-events-none" />
          <input
            id="services-search"
            type="search"
            value={searchQuery}
            onChange={(event) => {
              const value = event.target.value
              setSearchQuery(value)
              setIsDropdownOpen(value.trim().length >= 2)
            }}
            onFocus={() => {
              if (normalizedSearch.length >= 2) {
                setIsDropdownOpen(true)
              }
            }}
            onKeyDown={(event) => {
              if (event.key === 'Enter' && matchedServices.length > 0) {
                event.preventDefault()
                router.push(matchedServices[0].profileUrl)
              }
              if (event.key === 'Escape') {
                setIsDropdownOpen(false)
              }
            }}
            placeholder="Поиск услуги по названию"
            aria-label="Поиск услуги по названию"
            className="w-full rounded-xl border border-slate-200 bg-white py-3 pl-12 pr-4 text-slate-800 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary/40"
          />
        </div>

        {isDropdownOpen && normalizedSearch.length >= 2 && (
          <div className="relative z-20 mt-2 w-full rounded-2xl border border-slate-200 bg-white shadow-lg overflow-hidden">
            <div className="max-h-80 overflow-y-auto">
              {matchedServices.length > 0 ? (
                matchedServices.map((item) => (
                  <button
                    key={`${item.profileUrl}-${item.name}`}
                    type="button"
                    className="w-full text-left px-4 py-3 hover:bg-slate-50 transition-colors"
                    onMouseDown={(event) => event.preventDefault()}
                    onClick={() => {
                      setIsDropdownOpen(false)
                      router.push(item.profileUrl)
                    }}
                  >
                    <p className="font-semibold text-slate-800">{item.name}</p>
                  </button>
                ))
              ) : (
                <p className="px-4 py-3 text-slate-500">По вашему запросу услуги не найдены.</p>
              )}
            </div>
          </div>
        )}

        {normalizedSearch.length > 0 && normalizedSearch.length < 2 && (
          <p className="mt-2 text-sm text-slate-500">Введите минимум 2 символа для поиска по списку.</p>
        )}
      </div>

      {categories.map(({ category, items }) => (
        <section key={category.slug} className="space-y-4 lg:space-y-6">
          <div className="space-y-2">
            <div className="flex items-center justify-between gap-3">
              <div className="flex flex-wrap items-baseline gap-2">
                <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">
                  {items.length > 3 && (
                    <Link
                      href={`/uslugi/${category.slug}/`}
                      title={`${category.name} Долгопрудный`}
                      className="hover:text-primary transition-colors"
                    >
                      {category.name}
                    </Link>
                  )}
                  {items.length <= 3 && <>{category.name}</>}
                </h2>
                <span className="text-base sm:text-lg font-medium text-slate-500 whitespace-nowrap">
                  ({formatServicesCount(items.length)})
                </span>
              </div>
            </div>
            <p className="text-slate-600">{category.description}</p>
          </div>

          <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-5 sm:gap-6">
            {items.slice(0, 3).map((service) => (
              <Card key={service.slug} className="h-full">
                <CardHeader className="space-y-2">
                  <CardTitle className="text-xl leading-snug">
                    <Link
                      href={service.profileUrl}
                      title={`${service.name} Долгопрудный`}
                      className="hover:text-primary transition-colors"
                    >
                      {service.name}
                    </Link>
                  </CardTitle>
                  <p className="text-primary font-semibold">{formatPriceRange(getServicePriceRange(service))}</p>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-slate-600">{service.shortDescription}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
      ))}
    </div>
  )
}
