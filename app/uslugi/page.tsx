import Link from 'next/link'
import type { Metadata } from 'next'
import { Navbar } from '@/components/sections/navbar'
import { Footer } from '@/components/sections/footer'
import { CTA } from '@/components/sections/cta'
import { ServicesCatalog } from '@/components/services/services-catalog'
import { getServicePriceRange, getServicesByCategory, serviceCategories, services } from '@/lib/services'
import { siteConfig } from '@/lib/site-config'

export const metadata: Metadata = {
  title: 'Услуги и цены центра подологии и остеопатии',
  description:
    'Полный каталог услуг центра: подология, ортониксия, лечение вросшего ногтя, озонотерапия, плазмодинамическое воздействие, остеопатия и лечебный массаж. Актуальные цены и диапазоны стоимости.',
  alternates: {
    canonical: '/uslugi/',
  },
  openGraph: {
    title: 'Услуги и цены центра подологии и остеопатии',
    description: 'Каталог услуг с диапазонами цен и переходом на детальные страницы по каждой услуге и специалисту.',
    url: '/uslugi/',
    type: 'website',
  },
}

export default function ServicesPage() {
  const categories = serviceCategories
    .map((category) => ({
      category,
      items: getServicesByCategory(category.slug),
    }))
    .filter((entry) => entry.items.length > 0)

  const breadcrumbsJson = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Главная',
        item: `${siteConfig.siteUrl}/`,
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Услуги',
        item: `${siteConfig.siteUrl}/uslugi/`,
      },
    ],
  }

  const itemListJson = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: 'Услуги центра подологии и остеопатии',
    itemListElement: services.map((service, index) => {
      const priceRange = getServicePriceRange(service)

      return {
        '@type': 'ListItem',
        position: index + 1,
        item: {
          '@type': 'Service',
          name: service.name,
          description: service.shortDescription,
          url: `${siteConfig.siteUrl}${service.profileUrl}`,
          provider: { '@id': `${siteConfig.siteUrl}/#organization` },
          ...(priceRange
            ? {
                offers:
                  priceRange.min === priceRange.max
                    ? {
                        '@type': 'Offer',
                        priceCurrency: 'RUB',
                        price: priceRange.min,
                      }
                    : {
                        '@type': 'AggregateOffer',
                        priceCurrency: 'RUB',
                        lowPrice: priceRange.min,
                        highPrice: priceRange.max,
                        offerCount: service.prices.length,
                      },
              }
            : {}),
        },
      }
    }),
  }

  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbsJson) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListJson) }} />

      <section className="pt-24 sm:pt-28 lg:pt-32 pb-10 sm:pb-12 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center text-sm text-slate-500 mb-6 gap-2">
            <Link href="/" className="hover:text-primary transition-colors">
              Главная
            </Link>
            <span>/</span>
            <span className="text-slate-700">Услуги</span>
          </div>

          <div className="space-y-4">
            <span className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-semibold">
              Каталог услуг
            </span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900">Услуги и цены</h1>
            <p className="text-base sm:text-lg text-slate-600 max-w-4xl">
              На сайте указаны диапазоны цен по специалистам. Итоговая стоимость зависит от клинической картины, объёма
              процедуры и необходимости дополнительных манипуляций.
            </p>
          </div>
        </div>
      </section>

      <section className="py-10 sm:py-12 lg:py-20">
        <ServicesCatalog categories={categories} />
      </section>

      <CTA />
      <Footer />
    </main>
  )
}
