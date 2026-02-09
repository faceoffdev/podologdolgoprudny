import Image from 'next/image'
import Link from 'next/link'
import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { Calendar, Phone, GraduationCap, Award, Clock } from 'lucide-react'
import { Navbar } from '@/components/sections/navbar'
import { Footer } from '@/components/sections/footer'
import { CTA } from '@/components/sections/cta'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardMainTitle, CardTitle } from '@/components/ui/card'
import { DoctorServicesList } from '@/components/specialists/doctor-services-list'
import { doctors, findDoctorBySlug } from '@/lib/doctors'
import { findServicesByDoctorSlug } from '@/lib/services'
import { siteConfig } from '@/lib/site-config'
import { withBasePath } from '@/lib/paths'

const socialIcons = {
  instagram: withBasePath('/icons/instagram.svg'),
  telegram: withBasePath('/icons/telegram.svg'),
} as const

export async function generateStaticParams() {
  return doctors.map((doctor) => ({ slug: doctor.slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  const doctor = findDoctorBySlug(slug)

  if (!doctor) {
    return { title: 'Специалист не найден' }
  }

  return {
    title: `${doctor.name} - ${doctor.medicalSpecialty}`,
    description: doctor.shortBio,
    alternates: {
      canonical: doctor.profileUrl,
    },
    openGraph: {
      title: `${doctor.name} - ${doctor.medicalSpecialty}`,
      description: doctor.shortBio,
      url: doctor.profileUrl,
      type: 'profile',
      images: [{ url: doctor.image }],
    },
  }
}

export default async function DoctorProfilePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const doctor = findDoctorBySlug(slug)

  if (!doctor) {
    notFound()
  }

  const doctorServices = findServicesByDoctorSlug(doctor.slug)

  const otherDoctors = doctors
    .filter((item) => item.slug !== doctor.slug && item.medicalSpecialty === doctor.medicalSpecialty)
    .slice(0, 2)

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
        name: 'Специалисты',
        item: `${siteConfig.siteUrl}/specialisty/`,
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: doctor.name,
        item: `${siteConfig.siteUrl}${doctor.profileUrl}`,
      },
    ],
  }

  const personJson = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: doctor.name,
    jobTitle: doctor.specialty,
    medicalSpecialty: doctor.medicalSpecialty,
    image: `${siteConfig.siteUrl}${doctor.image}`,
    description: doctor.shortBio,
    url: `${siteConfig.siteUrl}${doctor.profileUrl}`,
    worksFor: {
      '@id': `${siteConfig.siteUrl}/#organization`,
      '@type': 'MedicalBusiness',
      name: 'Центр Подологии и Остеопатии',
    },
    knowsAbout: doctorServices.map((service) => service.name),
    ...(doctor.socials.length > 0 ? { sameAs: doctor.socials.map((social) => social.href) } : {}),
  }

  const offersJson = {
    '@context': 'https://schema.org',
    '@type': 'OfferCatalog',
    name: `Услуги специалиста ${doctor.name}`,
    itemListElement: doctorServices.map((service) => {
      return {
        '@type': 'Offer',
        price: service.price.min || service.price.max,
        priceCurrency: 'RUB',
        itemOffered: {
          '@type': 'Service',
          name: service.name,
          url: `${siteConfig.siteUrl}${service.profileUrl}`,
        },
      }
    }),
  }

  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbsJson) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(personJson) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(offersJson) }} />

      <section className="pt-24 sm:pt-28 lg:pt-32 pb-10 sm:pb-12 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center text-sm text-slate-500 mb-5 sm:mb-6 gap-2">
            <Link href="/" className="hover:text-primary transition-colors">
              Главная
            </Link>
            <span>/</span>
            <Link href="/specialisty/" className="hover:text-primary transition-colors">
              Специалисты
            </Link>
            <span>/</span>
            <span className="text-slate-700">{doctor.name}</span>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 lg:gap-10 items-center">
            <div className="space-y-5 sm:space-y-6">
              <span className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-semibold">
                {doctor.medicalSpecialty}
              </span>
              <div className="space-y-3">
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900">{doctor.name}</h1>
                <p className="text-base sm:text-lg text-slate-600">{doctor.shortBio}</p>
              </div>

              <div className="flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4">
                <Button href={siteConfig.bookingUrl} target="_blank" rel="noopener noreferrer" size="lg">
                  <Calendar className="w-5 h-5 mr-2" />
                  Записаться на прием
                </Button>
                <Button href={siteConfig.phone.href} variant="secondary" size="lg">
                  <Phone className="w-5 h-5 mr-2" />
                  Позвонить
                </Button>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-4">
                {doctor.highlights.map((highlight) => (
                  <Card key={highlight.label} className="hover:translate-y-0">
                    <CardContent className="p-4 text-center">
                      <p className="text-2xl font-bold text-slate-900">{highlight.value}</p>
                      <p className="text-sm text-slate-500">{highlight.label}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>

              <div className="flex flex-wrap gap-2">
                {doctor.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 rounded-full bg-white border border-slate-200 text-sm text-slate-600"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            <div className="relative order-first lg:order-none">
              <div className="absolute -top-6 -right-6 w-24 h-24 bg-primary/10 rounded-full blur-2xl" />
              <div className="relative bg-white rounded-3xl p-3 sm:p-4 shadow-xl">
                <Image
                  src={doctor.image}
                  alt={`Фото специалиста ${doctor.name}`}
                  width={560}
                  height={720}
                  className="w-full h-[320px] sm:h-[420px] lg:h-[480px] object-cover object-top rounded-2xl"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-10 sm:py-12 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-3 gap-6 lg:gap-8">
          <div className="lg:col-span-2 space-y-6 lg:space-y-8">
            <Card>
              <CardHeader>
                <CardMainTitle>О специалисте</CardMainTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-slate-600 leading-relaxed">
                {doctor.bio.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Услуги специалиста</CardTitle>
              </CardHeader>
              <CardContent>
                <DoctorServicesList services={doctorServices} initialVisibleCount={5} />
              </CardContent>
            </Card>

            {doctor.education.length > 0 && (
              <Card>
                <CardHeader>
                  <CardTitle>Образование</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  {doctor.education.map((item) => (
                    <div key={`${item.year}-${item.title}`} className="flex items-start gap-3">
                      <GraduationCap className="w-5 h-5 text-primary mt-0.5" />
                      <div>
                        <p className="text-sm text-slate-500">{item.year}</p>
                        <p className="text-slate-700 font-medium">{item.title}</p>
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>
            )}
          </div>

          <div className="space-y-5 sm:space-y-6">
            {doctor.schedule.length > 0 && (
              <Card>
                <CardHeader>
                  <CardTitle>Прием и расписание</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3 text-slate-600">
                  <div className="flex items-start gap-3">
                    <Clock className="w-5 h-5 text-primary mt-0.5" />
                    <div className="space-y-1">
                      {doctor.schedule.map((item) => (
                        <p key={item}>{item}</p>
                      ))}
                    </div>
                  </div>
                  <p className="text-sm text-slate-500">{doctor.reception}</p>
                </CardContent>
              </Card>
            )}

            {doctor.certifications.length > 0 && (
              <Card>
                <CardHeader>
                  <CardTitle>Сертификаты</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3 text-slate-600">
                  {doctor.certifications.map((item) => (
                    <div key={item} className="flex items-start gap-2">
                      <Award className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                      <span>{item}</span>
                    </div>
                  ))}
                </CardContent>
              </Card>
            )}

            <Card>
              <CardHeader>
                <CardTitle>Связаться</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <Button href={siteConfig.bookingUrl} target="_blank" rel="noopener noreferrer" className="w-full">
                  <Calendar className="w-5 h-5 mr-2" />
                  Записаться онлайн
                </Button>
                <Button href={siteConfig.phone.href} variant="secondary" className="w-full" aria-label="Позвонить">
                  <Phone className="w-5 h-5 mr-2" />
                  {siteConfig.phone.display}
                </Button>
                {doctor.socials.length > 0 && (
                  <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
                    {doctor.socials.map((social, socialIndex) => {
                      const iconSrc = socialIcons[social.type]
                      const iconColor = social.type === 'instagram' ? '#E1306C' : '#229ED9'
                      return (
                        <a
                          key={`${doctor.name}-${social.type}-${socialIndex}`}
                          href={social.href}
                          target="_blank"
                          rel="noreferrer"
                          aria-label={social.label}
                          className="w-10 h-10 bg-slate-100 rounded-full flex items-center justify-center hover:bg-slate-200 hover:scale-105 transition-all"
                        >
                          <span
                            className="w-5 h-5 inline-block"
                            style={{
                              backgroundColor: iconColor,
                              maskImage: `url(${iconSrc})`,
                              WebkitMaskImage: `url(${iconSrc})`,
                              maskSize: 'contain',
                              WebkitMaskSize: 'contain',
                              maskRepeat: 'no-repeat',
                              WebkitMaskRepeat: 'no-repeat',
                              maskPosition: 'center',
                              WebkitMaskPosition: 'center',
                            }}
                          />
                        </a>
                      )
                    })}
                  </div>
                )}
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {otherDoctors.length > 0 ? (
        <section className="py-10 sm:py-12 lg:py-20 bg-slate-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mb-6 sm:mb-8">
              <h3 className="text-2xl sm:text-3xl font-bold text-slate-900">Другие специалисты</h3>
            </div>
            <div className="grid sm:grid-cols-2 gap-5 sm:gap-6">
              {otherDoctors.map((item) => (
                <Link
                  key={item.slug}
                  href={item.profileUrl}
                  title={`${item.name} ${item.specialty}`}
                  className="inline-flex items-center text-primary font-medium hover:text-primary-dark"
                >
                  <Card className="overflow-hidden">
                    <div className="grid sm:grid-cols-2">
                      <Image
                        src={item.image}
                        alt={item.name}
                        width={320}
                        height={400}
                        className="w-full h-52 sm:h-60 object-cover object-top"
                      />
                      <div className="p-5 sm:p-6 space-y-3">
                        <div>
                          <p className="text-sm text-slate-500">{item.specialty}</p>
                          <p className="text-lg font-semibold text-slate-900">{item.name}</p>
                        </div>
                        <p className="text-sm text-slate-600">{item.shortBio}</p>
                      </div>
                    </div>
                  </Card>
                </Link>
              ))}
            </div>
          </div>
        </section>
      ) : null}

      <CTA />
      <Footer />
    </main>
  )
}
