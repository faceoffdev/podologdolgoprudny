'use client'

import { motion, type Variants } from 'framer-motion'
import Link from 'next/link'
import { Card, CardContent } from '@/components/ui/card'
import { formatPriceRange, getServicePriceRange, getServicesByCategory, serviceCategories } from '@/lib/services'

const featuredCategorySlugs = [
  'podologiya',
  'ortoniksiya',
  'vrosshiy-nogot',
  'onihomikoz-dermatomikoz',
  'osteopatiya',
  'plazmodinamicheskoe-vozdeystvie-gelios',
]

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
}

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: 'easeOut',
    },
  },
}

export function Services() {
  const serviceGroups = featuredCategorySlugs
    .map((categorySlug) => {
      const category = serviceCategories.find((item) => item.slug === categorySlug)
      if (!category) {
        return null
      }

      const categoryServices = getServicesByCategory(category.slug)

      return {
        slug: category.slug,
        title: category.name,
        totalServices: categoryServices.length,
        services: categoryServices.slice(0, 3),
      }
    })
    .filter((group) => group !== null)

  return (
    <section id="services" className="py-10 lg:py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <span className="inline-block text-primary font-semibold text-sm uppercase tracking-wider mb-4">
            Наши услуги
          </span>
          <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">Услуги и цены центра в Долгопрудном</h2>
          <p className="text-lg text-slate-600">
            Актуальные услуги с переходом на детальные страницы: описание, диапазон цен и специалисты, выполняющие
            процедуру.
          </p>
          <Link href="/uslugi/" className="inline-flex mt-6 text-primary font-semibold hover:text-primary-dark">
            Смотреть все услуги и цены
          </Link>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
        >
          {serviceGroups.map((group) => (
            <motion.div key={group.slug} variants={itemVariants}>
              <Card className="h-full group cursor-pointer">
                <CardContent className="p-6 lg:p-8">
                  <p className="text-xl font-semibold text-slate-900 mb-3">{group.title}</p>
                  <ul className="text-slate-600 leading-relaxed list-disc list-inside space-y-2">
                    {group.services.map((service) => (
                      <li key={service.slug}>
                        <Link href={service.profileUrl} className="hover:text-primary transition-colors">
                          {service.name}
                        </Link>{' '}
                        <span className="text-slate-500">({formatPriceRange(getServicePriceRange(service))})</span>
                      </li>
                    ))}
                  </ul>
                  {group.totalServices > 3 && (
                    <p className="mt-4">
                      <Link
                        href={`/uslugi/${group.slug}/`}
                        className="text-primary font-medium hover:text-primary-dark"
                      >
                        Подробнее по категории
                      </Link>
                    </p>
                  )}
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
