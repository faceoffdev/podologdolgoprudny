import Image from 'next/image'
import Link from 'next/link'
import type { Metadata } from 'next'
import { Navbar } from '@/components/sections/navbar'
import { Footer } from '@/components/sections/footer'
import { CTA } from '@/components/sections/cta'
import { Card, CardContent } from '@/components/ui/card'
import { doctors } from '@/lib/doctors'
import { siteConfig } from '@/lib/site-config'
import { withBasePath } from '@/lib/paths'

export const metadata: Metadata = {
  title: 'Наши специалисты',
  description: 'Команда центра подологии и остеопатии: три подолога, врач-остеопат, врач-реабилитолог и специалист по лечебному массажу. Комплексный подход к здоровью стоп и восстановлению.',
  alternates: {
    canonical: '/doctors',
  },
}

export default function DoctorsPage() {
  const siteUrl = siteConfig.siteUrl
  const organizationId = `${siteUrl}/#organization`

  const organizationJson = {
    '@context': 'https://schema.org',
    '@type': 'MedicalBusiness',
    '@id': organizationId,
    name: 'Центр Подологии и Остеопатии',
    url: siteUrl,
    telephone: siteConfig.phone.display,
    email: siteConfig.email,
    image: `${siteUrl}${withBasePath('/images/logo.svg')}`,
    sameAs: siteConfig.socials.map((social) => social.href),
  }

  const itemListJson = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: 'Наши специалисты',
    itemListElement: doctors.map((doctor, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      item: {
        '@type': 'Person',
        name: doctor.name,
        jobTitle: doctor.specialty,
        medicalSpecialty: doctor.medicalSpecialty,
        image: `${siteUrl}${doctor.image}`,
        url: `${siteUrl}${doctor.profileUrl}`,
        worksFor: {
          '@id': organizationId,
        },
      },
    })),
  }

  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJson) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListJson) }} />

      <section className="pt-24 sm:pt-28 lg:pt-32 pb-10 sm:pb-12 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center text-sm text-slate-500 mb-6 gap-2">
            <Link href="/" className="hover:text-primary transition-colors">
              Главная
            </Link>
            <span>/</span>
            <span className="text-slate-700">Специалисты</span>
          </div>

          <div className="space-y-4">
            <span className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-semibold">
              Команда центра
            </span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900">
              Специалисты в центре подологии и остеопатии
            </h1>
            <p className="text-base sm:text-lg text-slate-600">
              В команде — три подолога, врач-остеопат, врач-реабилитолог и специалист по лечебному массажу. Помогаем
              при проблемах стоп и ногтей, болевых синдромах и восстановлении после травм, подбираем персональные
              планы процедур и профилактики.
            </p>
          </div>
        </div>
      </section>

      <section className="py-10 sm:py-12 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {doctors.map((doctor) => (
              <Link key={doctor.slug} href={doctor.profileUrl} className="hover:text-primary transition-colors">
                <Card className="h-full overflow-hidden group">
                  <div className="relative overflow-hidden">
                    <Image
                      src={doctor.image}
                      alt={`Фото: ${doctor.name}`}
                      width={480}
                      height={600}
                      className="w-full h-72 object-cover object-top group-hover:scale-105 transition-transform duration-500"
                    />
                    {/* Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                  <CardContent className="p-5 text-center space-y-3">
                    <div>
                      <p className="text-sm text-slate-500">{doctor.medicalSpecialty}</p>
                      <p className="text-lg font-semibold text-slate-900">{doctor.name}</p>
                    </div>
                    <p className="text-sm text-slate-600">{doctor.shortBio}</p>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CTA />
      <Footer />
    </main>
  )
}
