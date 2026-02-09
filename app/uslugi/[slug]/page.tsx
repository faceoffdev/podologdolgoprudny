import Image from 'next/image'
import Link from 'next/link'
import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { ArrowRight, Calendar, Phone } from 'lucide-react'
import { Navbar } from '@/components/sections/navbar'
import { Footer } from '@/components/sections/footer'
import { CTA } from '@/components/sections/cta'
import { ServiceImagesGallery } from '@/components/services/service-images-gallery'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardMainTitle, CardTitle } from '@/components/ui/card'
import { findDoctorBySlug } from '@/lib/doctors'
import {
  findServiceBySlug,
  formatPriceRange,
  getServiceCategoryBySlug,
  getServicePriceRange,
  getServicesByCategory,
  services,
} from '@/lib/services'
import { siteConfig } from '@/lib/site-config'

export async function generateStaticParams() {
  const slugs = new Set<string>()
  services.forEach((service) => slugs.add(service.slug))
  services.forEach((service) => slugs.add(service.categorySlug))
  return Array.from(slugs).map((slug) => ({ slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  const category = getServiceCategoryBySlug(slug)
  const service = findServiceBySlug(slug)

  if (category) {
    const categoryDescription = category.description

    return {
      title: `${category.name} - услуги и цены`,
      description: categoryDescription,
      alternates: {
        canonical: `/uslugi/${category.slug}/`,
      },
      openGraph: {
        title: `${category.name} - услуги и цены`,
        description: categoryDescription,
        url: `/uslugi/${category.slug}/`,
        type: 'website',
      },
    }
  }

  if (!service) {
    return { title: 'Услуга не найдена' }
  }

  const range = getServicePriceRange(service)
  const cleanShort = service.shortDescription.replace(/[.!?]+$/, '')
  const pricePart = range ? ` ${formatPriceRange(range)}.` : '.'

  return {
    title: `${service.name} - услуги и цены`,
    description: `${cleanShort}.${pricePart}`,
    alternates: {
      canonical: service.profileUrl,
    },
    openGraph: {
      title: `${service.name} - услуги и цены`,
      description: `${cleanShort}.${pricePart}`,
      url: service.profileUrl,
      type: 'article',
    },
  }
}

export default async function ServicePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const category = getServiceCategoryBySlug(slug)
  const service = findServiceBySlug(slug)

  if (!category && !service) {
    notFound()
  }

  if (category) {
    const categoryServices = getServicesByCategory(category.slug)

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
        {
          '@type': 'ListItem',
          position: 3,
          name: category.name,
          item: `${siteConfig.siteUrl}/uslugi/${category.slug}/`,
        },
      ],
    }

    const itemListJson = {
      '@context': 'https://schema.org',
      '@type': 'ItemList',
      name: `Услуги категории: ${category.name}`,
      itemListElement: categoryServices.map((categoryService, index) => {
        const priceRange = getServicePriceRange(categoryService)

        return {
          '@type': 'ListItem',
          position: index + 1,
          item: {
            '@type': 'Service',
            name: categoryService.name,
            description: categoryService.shortDescription,
            url: `${siteConfig.siteUrl}${categoryService.profileUrl}`,
            provider: { '@id': `${siteConfig.siteUrl}/#organization` },
            ...(priceRange
              ? {
                  offers:
                    !priceRange.min || priceRange.min === priceRange.max
                      ? {
                          '@type': 'Offer',
                          priceCurrency: 'RUB',
                          price: priceRange.max,
                        }
                      : {
                          '@type': 'AggregateOffer',
                          priceCurrency: 'RUB',
                          lowPrice: priceRange.min,
                          highPrice: priceRange.max,
                          offerCount: categoryService.prices.length,
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
              <Link href="/uslugi/" className="hover:text-primary transition-colors">
                Услуги
              </Link>
              <span>/</span>
              <span className="text-slate-700">{category.name}</span>
            </div>

            <div className="space-y-4 max-w-4xl">
              <span className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-semibold">
                Категория услуг
              </span>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900">{category.name}</h1>
              <p className="text-base sm:text-lg text-slate-600">{category.description}</p>
            </div>
          </div>
        </section>

        <section className="py-10 sm:py-12 lg:py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-5 sm:gap-6">
              {categoryServices.map((categoryService) => (
                <Card key={categoryService.slug} className="h-full">
                  <CardHeader className="space-y-2">
                    <CardTitle className="text-xl leading-snug">
                      <Link
                        href={categoryService.profileUrl}
                        title={`${categoryService.name} Долгопрудный`}
                        className="hover:text-primary transition-colors"
                      >
                        {categoryService.name}
                      </Link>
                    </CardTitle>
                    <p className="text-primary font-semibold">
                      {formatPriceRange(getServicePriceRange(categoryService))}
                    </p>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-slate-600">{categoryService.shortDescription}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <CTA />
        <Footer />
      </main>
    )
  }

  if (!service) {
    notFound()
  }

  const priceRange = getServicePriceRange(service)
  const schemaPrice = Number(priceRange?.min ?? priceRange?.max ?? service.priceMax).toFixed(2)
  const serviceCategory = getServiceCategoryBySlug(service.categorySlug)
  const categoryServices = getServicesByCategory(service.categorySlug)
  const showCategoryBreadcrumb = Boolean(serviceCategory) && categoryServices.length > 3

  const doctorsWithPrices = service.prices
    .map((priceItem) => {
      const doctor = findDoctorBySlug(priceItem.doctorSlug)
      if (!doctor) {
        return null
      }

      return {
        doctor,
        price: { min: priceItem.priceMin, max: priceItem.priceMax },
      }
    })
    .filter((entry) => entry !== null)

  const relatedServices = categoryServices.filter((item) => item.slug !== service.slug).slice(0, 4)

  const breadcrumbItems: Array<{ name: string; item: string }> = [
    { name: 'Главная', item: `${siteConfig.siteUrl}/` },
    { name: 'Услуги', item: `${siteConfig.siteUrl}/uslugi/` },
  ]

  if (showCategoryBreadcrumb && serviceCategory) {
    breadcrumbItems.push({
      name: serviceCategory.name,
      item: `${siteConfig.siteUrl}/uslugi/${serviceCategory.slug}/`,
    })
  }

  breadcrumbItems.push({
    name: service.name,
    item: `${siteConfig.siteUrl}${service.profileUrl}`,
  })

  const breadcrumbsJson = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: breadcrumbItems.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.item,
    })),
  }

  const serviceJson = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: service.name,
    description: service.shortDescription,
    url: `${siteConfig.siteUrl}${service.profileUrl}`,
    provider: {
      '@id': `${siteConfig.siteUrl}/#organization`,
    },
    category: serviceCategory?.name,
    ...(priceRange
      ? {
          offers:
            !priceRange.min || priceRange.min === priceRange.max
              ? {
                  '@type': 'Offer',
                  priceCurrency: 'RUB',
                  price: priceRange.max,
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
  }

  const providersJson = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: `Специалисты по услуге: ${service.name}`,
    itemListElement: doctorsWithPrices.map((entry, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      item: {
        '@type': 'Person',
        name: entry.doctor.name,
        jobTitle: entry.doctor.specialty,
        url: `${siteConfig.siteUrl}${entry.doctor.profileUrl}`,
      },
    })),
  }

  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbsJson) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJson) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(providersJson) }} />
      <div itemScope itemType="https://schema.org/Product" className="sr-only">
        <span itemProp="name">{service.name}</span>
        <div itemProp="offers" itemScope itemType="https://schema.org/Offer">
          <span itemProp="priceCurrency" content="RUB">
            RUB
          </span>
          <span itemProp="price" content={schemaPrice}>
            {schemaPrice}
          </span>
        </div>
      </div>

      <section className="pt-24 sm:pt-28 lg:pt-32 pb-10 sm:pb-12 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center text-sm text-slate-500 mb-6 gap-2">
            <Link href="/" className="hover:text-primary transition-colors">
              Главная
            </Link>
            <span>/</span>
            <Link href="/uslugi/" className="hover:text-primary transition-colors">
              Услуги
            </Link>
            {showCategoryBreadcrumb && serviceCategory && (
              <>
                <span>/</span>
                <Link
                  href={`/uslugi/${serviceCategory.slug}/`}
                  title={`${serviceCategory.name} Долгопрудный`}
                  className="hover:text-primary transition-colors"
                >
                  {serviceCategory.name}
                </Link>
              </>
            )}
            <span>/</span>
            <span className="text-slate-700">{service.name}</span>
          </div>

          <div className="space-y-4 max-w-4xl">
            {serviceCategory && (
              <span className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-semibold">
                {serviceCategory.name}
              </span>
            )}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900">{service.name}</h1>
            <p className="text-base sm:text-lg text-slate-600">{service.shortDescription}</p>
          </div>
        </div>
      </section>

      <section className="py-10 sm:py-12 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-3 gap-6 lg:gap-8 items-start">
          <aside className="order-2 lg:order-2 lg:col-span-1 space-y-6 self-start">
            <Card>
              <CardHeader>
                <CardTitle>Стоимость</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <p className="text-2xl font-bold text-primary">{formatPriceRange(priceRange)}</p>
                <p className="text-sm text-slate-500">Длительность: {service.duration}</p>
                {service.priceMin !== service.priceMax && (
                  <p className="text-sm text-slate-500">
                    Точная цена зависит от клинической картины, объема процедуры и необходимости дополнительных
                    манипуляций.
                  </p>
                )}
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Запись на прием</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <Button href={siteConfig.bookingUrl} target="_blank" rel="noopener noreferrer" className="w-full">
                  <Calendar className="w-5 h-5 mr-2" />
                  Записаться онлайн
                </Button>
                <Button href={siteConfig.phone.href} variant="secondary" className="w-full">
                  <Phone className="w-5 h-5 mr-2" />
                  {siteConfig.phone.display}
                </Button>
              </CardContent>
            </Card>
          </aside>

          <div className="order-1 lg:order-1 lg:col-span-2 space-y-6">
            <Card>
              <CardHeader>
                <CardMainTitle>Описание услуги</CardMainTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-slate-600 leading-relaxed">
                {service.description.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
                {service.images && service.images.length > 0 && <ServiceImagesGallery images={service.images} />}
                {service.slug !== 'vyezd-na-dom-k-patsientu-usluga' && (
                  <p>📍место проведения услуги: г. Долгопрудный</p>
                )}
              </CardContent>
            </Card>

            {doctorsWithPrices.length > 0 && (
              <Card>
                <CardHeader>
                  <CardTitle>Специалисты, оказывающие услугу</CardTitle>
                </CardHeader>
                <CardContent className="grid gap-4">
                  {doctorsWithPrices.map((entry) => (
                    <Link
                      key={entry.doctor.slug}
                      href={entry.doctor.profileUrl}
                      title={`${entry.doctor.name} ${entry.doctor.specialty}`}
                    >
                      <article className="rounded-xl border border-slate-100 p-3 sm:p-4 hover:border-primary/40 transition-colors">
                        <div className="flex items-center justify-between gap-3">
                          <div className="flex items-center gap-3 min-w-0">
                            <Image
                              src={entry.doctor.image}
                              alt={entry.doctor.name}
                              width={72}
                              height={72}
                              className="w-14 h-14 sm:w-16 sm:h-16 rounded-full object-cover object-top flex-shrink-0"
                            />
                            <div className="min-w-0">
                              <p className="font-semibold text-slate-900 text-sm sm:text-base">{entry.doctor.name}</p>
                              <p className="text-sm text-slate-500">{entry.doctor.specialty}</p>
                            </div>
                          </div>
                          <p className="text-primary font-semibold whitespace-nowrap">
                            {formatPriceRange(entry.price)}
                          </p>
                        </div>
                      </article>
                    </Link>
                  ))}
                </CardContent>
              </Card>
            )}

            {relatedServices.length > 0 && (
              <Card>
                <CardHeader>
                  <CardTitle>Другие услуги категории</CardTitle>
                </CardHeader>
                <CardContent className="grid sm:grid-cols-2 gap-3">
                  {relatedServices.map((relatedService) => (
                    <Link
                      key={relatedService.slug}
                      href={relatedService.profileUrl}
                      title={`${relatedService.name} Долгопрудный`}
                      className="inline-flex items-center justify-between gap-2 rounded-lg border border-slate-100 px-3 py-2 hover:border-primary/40"
                    >
                      <span className="text-slate-700 text-sm sm:text-base">{relatedService.name}</span>
                      <ArrowRight className="w-4 h-4 text-primary flex-shrink-0" />
                    </Link>
                  ))}
                </CardContent>
              </Card>
            )}
          </div>
        </div>
      </section>

      <CTA />
      <Footer />
    </main>
  )
}
