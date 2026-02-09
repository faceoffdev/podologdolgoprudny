import type { Metadata } from 'next'
import Link from 'next/link'
import { Navbar } from '@/components/sections/navbar'
import { Footer } from '@/components/sections/footer'
import { CTA } from '@/components/sections/cta'
import { Button } from '@/components/ui/button'
import { siteConfig } from '@/lib/site-config'
import { Calendar } from 'lucide-react'
import { withBasePath } from '@/lib/paths'
import { GallerySection, type GalleryImage } from '@/components/about/gallery-section'
import { Testimonials } from '@/components/sections/testimonials'
import { EquipmentSection, QualitySection, SocialsSection } from '@/components/about/about-extras'

export const metadata: Metadata = {
  title: 'О нас — Центр Подологии и Остеопатии в Долгопрудном',
  description:
    'Центр Подологии и Остеопатии в Долгопрудном работает с 2015 года. Высокотехнологичный подологический кабинет и кабинет мануальных практик, опытные специалисты и индивидуальный подход.',
  alternates: {
    canonical: '/about/',
  },
  openGraph: {
    title: 'О нас — Центр Подологии и Остеопатии в Долгопрудном',
    description:
      'О центре, специалистах, оборудовании и стандартах работы Центра Подологии и Остеопатии в Долгопрудном.',
    url: '/about/',
    type: 'website',
  },
}

const stats = [
  { value: '10 лет', label: 'Опыт работы центра' },
  { value: '5000+', label: 'Пациентов получили помощь' },
  { value: '5.0', label: 'Средний рейтинг по отзывам' },
  { value: '3 кабинета', label: 'Подология, озонотерапия и мануальные практики' },
]

const centerGallery: GalleryImage[] = [
  {
    src: withBasePath('/images/about/center-1.webp'),
    alt: 'Центр подологии Долгопрудный',
  },
  {
    src: withBasePath('/images/about/center-2.webp'),
    alt: 'Вручение сертификата подологу Солохе Татьяне в Долгопрудном',
  },
  {
    src: withBasePath('/images/about/center-3.webp'),
    alt: 'Солоха Татьяна подолог Долгопрудный',
  },
  {
    src: withBasePath('/images/about/center-4.webp'),
    alt: 'Кабинет подологии Долгопрудный',
  },
]

const manualPracticeGallery: GalleryImage[] = [
  {
    src: withBasePath('/images/about/manual-1.webp'),
    alt: 'Кабинет мануальных практик',
  },
  {
    src: withBasePath('/images/about/manual-2.webp'),
    alt: 'Массажист Бембеев Виктор Шукраевич Долгопрудный',
  },
  {
    src: withBasePath('/images/about/manual-3.webp'),
    alt: 'Остеопат Эдгаев Дольган Алексеевич Долгопрудный',
  },
]

const ozonTherapyGallery: GalleryImage[] = [
  {
    src: withBasePath('/images/about/ozon-1.webp'),
    alt: 'Кабинет озонотерапии и косметологии',
  },
]

const equipmentGallery: GalleryImage[] = [
  {
    src: withBasePath('/images/about/equipment-1.webp'),
    alt: 'Аппарат SkinHale',
  },
  {
    src: withBasePath('/images/about/equipment-2.webp'),
    alt: 'Подологическое оборудование центра',
  },
  {
    src: withBasePath('/images/about/equipment-3.webp'),
    alt: 'Аппараты для подологических процедур',
  },
  {
    src: withBasePath('/images/about/equipment-4.webp'),
    alt: 'Оснащение кабинета подологии',
  },
  {
    src: withBasePath('/images/about/equipment-5.webp'),
    alt: 'Моечно-дезинфицирующая машина Melatherm 10',
  },
]

const worksGallery: GalleryImage[] = [
  {
    src: withBasePath('/images/about/works/work-1.jpg'),
    alt: 'Аппаратная обработка стоп и ногтей',
  },
  {
    src: withBasePath('/images/about/works/work-2.jpg'),
    alt: 'Профессиональная обработка стоп',
  },
  {
    src: withBasePath('/images/about/works/work-3.jpg'),
    alt: 'Аппаратная обработка ногтей',
  },
  {
    src: withBasePath('/images/about/works/work-4.jpg'),
    alt: 'Подологический уход за стопами',
  },
  {
    src: withBasePath('/images/about/works/work-5.jpg'),
    alt: 'Подологическая обработка',
  },
  {
    src: withBasePath('/images/about/works/work-6.jpg'),
    alt: 'Результаты подологического ухода',
  },
]

const certificatesGallery: GalleryImage[] = [
  {
    src: withBasePath('/images/about/certificates/Сертификат-СТВ.webp'),
    alt: 'Сертификат Солоха Татьяна Викторовна',
  },
  {
    src: withBasePath('/images/about/certificates/Диплом-ЭДА.webp'),
    alt: 'Диплом Эдгаев Дольган Алексеевич',
  },
  {
    src: withBasePath('/images/about/certificates/Диплом-ГНА.webp'),
    alt: 'Диплом Голикова Наталья Анатольевна',
  },
  {
    src: withBasePath('/images/about/certificates/Квалификация-ГНА.webp'),
    alt: 'Диплом Голикова Наталья Анатольевна',
  },
  {
    src: withBasePath('/images/about/certificates/Свидетельство-ИЯП.webp'),
    alt: 'Свидетельство Ионычева Яна Петровна',
  },
]

const equipmentItems = [
  {
    title: 'Аэродинамическая процедура SkinHale',
    description:
      'SkinHale — аппаратная аэродинамическая платформа для неинвазивного ухода за кожей лица и тела. Протоколы AD Massage (глубокий массаж для лимфодренажа и тонуса), Aero Dynamic Peeling (газожидкостный пилинг), Aero Dynamic Infusion (трансдермальная доставка веществ без инъекций) и барофорез помогают улучшить микроциркуляцию, мягко обновить кожу и доставить активные компоненты.',
  },
  {
    title: 'Melatherm 10 — моечно-дезинфицирующая машина',
    description:
      'Melatherm 10 (NSK NAKANISHI INC) — медицинская моечно-дезинфицирующая машина для автоматизированной обработки инструмента. Контролируемые циклы очистки и термодезинфекции обеспечивают стабильное качество подготовки инструментария и высокий уровень безопасности процедур.',
  },
  {
    title: 'Podolog Nova 3S',
    description:
      'Podolog Nova 3S — профессиональный подологический аппарат немецкого производителя Hellmut Ruck GmbH. Обеспечивает точную и деликатную обработку кожи и ногтевых пластин, стабильную работу и высокий комфорт пациента во время процедуры.',
  },
  {
    title: 'Автоклав класса "В"',
    description:
      'Автоклав класса "В" Europa B Evo 24 (Tecno-Gaz) используется для полной стерилизации инструмента после каждого пациента. Подходит для обработки полых, пористых и твердых материалов в упаковке и без упаковки, что поддерживает высокий стандарт инфекционной безопасности.',
  },
]

const qualityStandards = [
  'Индивидуальный план процедуры и рекомендации по уходу.',
  'Стандарты асептики и антисептики на каждом этапе.',
  'Прозрачное информирование о ходе и длительности процедуры.',
  'Комфорт пациента и бережный подход к чувствительным зонам.',
]

export default function AboutPage() {
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
        name: 'О нас',
        item: `${siteConfig.siteUrl}/about/`,
      },
    ],
  }

  return (
    <main className="min-h-screen">
      <Navbar />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbsJson) }} />

      <section id="about" className="pt-28 lg:pt-32 pb-12 lg:pb-20 bg-slate-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center text-sm text-slate-500 mb-6 gap-2">
            <Link href="/" className="hover:text-primary transition-colors">
              Главная
            </Link>
            <span>/</span>
            <span className="text-slate-700">О нас</span>
          </div>

          <div className="grid lg:grid-cols-2 gap-10 items-center">
            <div className="space-y-6">
              <span className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-semibold">
                О центре
              </span>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 leading-tight">
                Центр Подологии и Остеопатии — город Долгопрудный
              </h1>
              <p className="text-lg text-slate-600">
                Мы работаем в Долгопрудном с 2015 года и объединяем три направления в одном центре: подология,
                озонотерапия и мануальные практики. Для приёма предусмотрены отдельные кабинеты, современное
                оборудование и продуманный комфорт. Ведут приём опытные подологи, врач ортопед-остеопат, врач-
                реабилитолог и массажисты. Также доступны гирудотерапия и аэродинамическая процедура SkinHale.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button href={siteConfig.bookingUrl} target="_blank" rel="noopener noreferrer" size="lg">
                  <Calendar className="w-5 h-5 mr-2" />
                  Записаться на приём
                </Button>
                <Button href={siteConfig.phone.href} variant="secondary" size="lg">
                  Позвонить
                </Button>
              </div>
            </div>
            <div className="grid sm:grid-cols-2 gap-4">
              {stats.map((stat) => (
                <div key={stat.label} className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100">
                  <p className="text-2xl font-bold text-slate-900">{stat.value}</p>
                  <p className="text-sm text-slate-500 mt-1">{stat.label}</p>
                </div>
              ))}
            </div>
            <div className="lg:col-span-2 pt-2 border-t border-slate-200">
              <p className="text-sm font-medium text-slate-900 mb-3">Реквизиты</p>
              <div className="flex flex-wrap gap-2">
                <span className="inline-flex items-center rounded-full border border-slate-200 bg-white px-3 py-1.5 text-xs text-slate-600">
                  ООО «Центр Подологии и Остеопатии»
                </span>
                <span className="inline-flex items-center rounded-full border border-slate-200 bg-white px-3 py-1.5 text-xs text-slate-600">
                  ИНН 5047321471
                </span>
                <span className="inline-flex items-center rounded-full border border-slate-200 bg-white px-3 py-1.5 text-xs text-slate-600">
                  ОГРН 1255000100200
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 lg:py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-[1.2fr_0.8fr] gap-10 items-start">
            <div className="space-y-6">
              <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">
                Подология — специализация на стыке эстетики и медицины
              </h2>
              <p className="text-slate-600">
                Подологи помогают при проблемах стоп и ногтевых пластин: мозоли, трещины, локальный гиперкератоз,
                врастание и деформация ногтей. Используем современные методы коррекции и бережной обработки, чтобы
                восстановить комфорт и внешний вид стоп. Дополняем подологический уход востребованными процедурами:
                озонотерапией (общие и местные методики), гирудотерапией (в том числе вагинальной) и новейшей
                аэродинамической процедурой SkinHale.
              </p>
            </div>
            <div className="bg-slate-900 text-white rounded-2xl p-6 shadow-lg">
              <p className="text-base leading-relaxed">
                «Подологическая практика — это там, где я оказываю людям квалифицированную помощь, работая со сложными
                случаями, провожу тренинги повышения квалификации подологов и бесконечно учусь сама».
              </p>
              <p className="mt-4 text-sm text-white/70">— Солоха Татьяна Викторовна</p>
            </div>
          </div>
        </div>
      </section>

      <GallerySection
        title="Центр Подологии и Остеопатии"
        description="Фотографии кабинетов и специалистов центра."
        images={centerGallery}
        columns="md:grid-cols-2"
        sizes="(min-width: 768px) 33vw, 100vw"
        sectionClassName="py-12 lg:py-20 bg-slate-50"
      />

      <GallerySection
        title="Кабинет мануальных практик"
        description="Комфортное пространство для остеопатии и восстановительных практик."
        images={manualPracticeGallery}
        columns="md:grid-cols-3"
        sizes="(min-width: 768px) 50vw, 100vw"
      />

      <GallerySection
        title="Кабинет озонотерапии и косметологии"
        description="Фотографии кабинета для озонотерапии и уходовых процедур."
        images={ozonTherapyGallery}
        columns="md:grid-cols-2"
        sizes="(min-width: 768px) 50vw, 100vw"
        sectionClassName="py-12 lg:py-20 bg-slate-50"
      />

      <GallerySection
        title="Оборудование центра"
        description="Оснащение кабинетов и профессиональные аппараты центра."
        images={equipmentGallery}
        columns="sm:grid-cols-2 lg:grid-cols-3"
        sizes="(min-width: 1024px) 25vw, 100vw"
      />

      <GallerySection
        title="Фото работ подологов"
        description="Примеры аппаратной обработки стоп и ногтей в нашем центре."
        images={worksGallery}
        columns="sm:grid-cols-2 lg:grid-cols-3"
        sizes="(min-width: 1024px) 33vw, 100vw"
        sectionClassName="py-12 lg:py-20 bg-slate-50"
      />

      <GallerySection
        title="Дипломы и сертификаты"
        description="Документы, подтверждающие квалификацию специалистов центра."
        images={certificatesGallery}
        columns="sm:grid-cols-2 lg:grid-cols-3"
        sizes="(min-width: 1024px) 33vw, 100vw"
      />

      <EquipmentSection items={equipmentItems} />
      <QualitySection items={qualityStandards} />
      <Testimonials />
      <SocialsSection socials={siteConfig.socials} />
      <CTA />
      <Footer />
    </main>
  )
}
