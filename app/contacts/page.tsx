import type { Metadata } from 'next'
import Link from 'next/link'
import { MapPin, Phone, Mail, Clock, Calendar } from 'lucide-react'
import { Navbar } from '@/components/sections/navbar'
import { Footer } from '@/components/sections/footer'
import { YandexMap } from '@/components/sections/yandex-map'
import { Button } from '@/components/ui/button'
import { SocialLinks } from '@/components/ui/social-links'
import { siteConfig } from '@/lib/site-config'

export const metadata: Metadata = {
  title: 'Контакты — Центр Подологии и Остеопатии в Долгопрудном',
  description: 'Контакты центра подологии и остеопатии в Долгопрудном: адрес, телефон, часы работы и карта проезда.',
  alternates: {
    canonical: '/contacts/',
  },
  openGraph: {
    title: 'Контакты — Центр Подологии и Остеопатии в Долгопрудном',
    description: 'Контакты центра подологии и остеопатии в Долгопрудном: адрес, телефон, часы работы и карта проезда.',
    url: '/contacts/',
    type: 'website',
  },
}

const contactJsonLd = {
  '@context': 'https://schema.org',
  '@type': ['MedicalClinic', 'LocalBusiness'],
  name: 'Центр Подологии и Остеопатии',
  url: `${siteConfig.siteUrl}/contacts/`,
  telephone: siteConfig.phone.display,
  email: siteConfig.email,
  address: {
    '@type': 'PostalAddress',
    streetAddress: siteConfig.address.label,
    addressLocality: siteConfig.address.locality,
    addressCountry: siteConfig.address.country,
  },
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
      opens: '07:30',
      closes: '22:00',
    },
  ],
  sameAs: siteConfig.socials.map((social) => social.href),
}

export default function ContactsPage() {
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
        name: 'Контакты',
        item: `${siteConfig.siteUrl}/contacts/`,
      },
    ],
  }

  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbsJson) }} />

      <section className="pt-28 lg:pt-32 pb-10 sm:pb-12 bg-slate-50">
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(contactJsonLd) }} />
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center text-sm text-slate-500 mb-6 gap-2">
            <Link href="/" className="hover:text-primary transition-colors">
              Главная
            </Link>
            <span>/</span>
            <span className="text-slate-700">Контакты</span>
          </div>

          <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr] items-start">
            <div className="space-y-4">
              <span className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-semibold">
                Контакты
              </span>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900">
                Центр Подологии и Остеопатии — Долгопрудный
              </h1>
              <p className="text-slate-600 text-base sm:text-lg">
                Свяжитесь с нами удобным способом: по телефону, через онлайн-запись или в мессенджерах.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button href={siteConfig.bookingUrl} target="_blank" rel="noopener noreferrer" size="lg">
                  <Calendar className="w-5 h-5 mr-2" />
                  Записаться онлайн
                </Button>
                <Button href={siteConfig.phone.href} variant="secondary" size="lg">
                  <Phone className="w-5 h-5 mr-2" />
                  Позвонить
                </Button>
              </div>
            </div>

            <div className="rounded-2xl border border-slate-100 bg-white p-6 shadow-sm space-y-4">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-primary mt-0.5" />
                <div>
                  <p className="text-sm text-slate-500">Адрес</p>
                  <a
                    href={siteConfig.address.mapHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-slate-900 font-medium hover:text-primary"
                  >
                    {siteConfig.address.label}
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-primary mt-0.5" />
                <div>
                  <p className="text-sm text-slate-500">Телефон</p>
                  <a href={siteConfig.phone.href} className="text-slate-900 font-medium hover:text-primary">
                    {siteConfig.phone.display}
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-primary mt-0.5" />
                <div>
                  <p className="text-sm text-slate-500">Email</p>
                  <a href={`mailto:${siteConfig.email}`} className="text-slate-900 font-medium hover:text-primary">
                    {siteConfig.email}
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Clock className="w-5 h-5 text-primary mt-0.5" />
                <div>
                  <p className="text-sm text-slate-500">Часы работы</p>
                  <p className="text-slate-900 font-medium">{siteConfig.schedule}</p>
                </div>
              </div>

              <div className="pt-2">
                <p className="text-sm text-slate-500 mb-3">Соцсети и мессенджеры</p>
                <SocialLinks
                  socials={siteConfig.socials}
                  className="flex flex-wrap gap-3"
                  itemClassName="h-11 w-11 rounded-full border border-slate-200 bg-white shadow-sm transition hover:border-primary/40"
                  iconClassName="w-5 h-5"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <YandexMap />
      <Footer />
    </main>
  )
}
