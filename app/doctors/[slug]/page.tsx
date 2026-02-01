import Image from 'next/image'
import Link from 'next/link'
import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { Calendar, Phone, CheckCircle2, GraduationCap, Award, Clock } from 'lucide-react'
import { Navbar } from '@/components/sections/navbar'
import { Footer } from '@/components/sections/footer'
import { CTA } from '@/components/sections/cta'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { doctors, findDoctorBySlug } from '@/lib/doctors'
import { siteConfig } from '@/lib/site-config'

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
    title: `${doctor.name} — ${doctor.medicalSpecialty}`,
    description: doctor.shortBio,
  }
}

export default async function DoctorProfilePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const doctor = findDoctorBySlug(slug)

  if (!doctor) {
    notFound()
  }

  const otherDoctors = doctors.filter((item) => item.slug !== doctor.slug).slice(0, 2)

  return (
    <main className="min-h-screen bg-white">
      <Navbar />

      <section className="pt-24 sm:pt-28 lg:pt-32 pb-10 sm:pb-12 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center text-sm text-slate-500 mb-5 sm:mb-6 gap-2">
            <Link href="/" className="hover:text-primary transition-colors">
              Главная
            </Link>
            <span>/</span>
            <Link href="/#doctors" className="hover:text-primary transition-colors">
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
                <CardTitle>О враче</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-slate-600 leading-relaxed">
                {doctor.bio.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Основные услуги</CardTitle>
              </CardHeader>
              <CardContent className="grid sm:grid-cols-2 gap-3 text-slate-600">
                {doctor.services.map((service) => (
                  <div key={service} className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-primary mt-0.5" />
                    <span>{service}</span>
                  </div>
                ))}
              </CardContent>
            </Card>

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
          </div>

          <div className="space-y-5 sm:space-y-6">
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

            {doctor.certifications.length > 0 && (
              <Card>
                <CardHeader>
                  <CardTitle>Сертификаты</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3 text-slate-600">
                  {doctor.certifications.map((item) => (
                    <div key={item} className="flex items-start gap-2">
                      <Award className="w-5 h-5 text-primary mt-0.5" />
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
                  Записаться онлайн
                </Button>
                <Button href={siteConfig.phone.href} variant="secondary" className="w-full">
                  Позвонить {siteConfig.phone.display}
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {otherDoctors.length > 0 ? (
        <section className="py-10 sm:py-12 lg:py-20 bg-slate-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mb-6 sm:mb-8">
              <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">Другие специалисты</h2>
              <Link href="/#doctors" className="text-primary font-medium hover:text-primary-dark">
                Смотреть всех
              </Link>
            </div>
            <div className="grid sm:grid-cols-2 gap-5 sm:gap-6">
              {otherDoctors.map((item) => (
                <Card key={item.slug} className="overflow-hidden">
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
                        <p className="text-sm text-slate-500">{item.medicalSpecialty}</p>
                        <p className="text-lg font-semibold text-slate-900">{item.name}</p>
                      </div>
                      <p className="text-sm text-slate-600">{item.shortBio}</p>
                      <Link
                        href={item.profileUrl}
                        className="inline-flex items-center text-primary font-medium hover:text-primary-dark"
                      >
                        Подробнее
                      </Link>
                    </div>
                  </div>
                </Card>
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
