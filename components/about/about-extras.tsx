'use client'

import { motion } from 'framer-motion'
import { SocialLinks, type SocialLink } from '@/components/ui/social-links'

export type EquipmentItem = {
  title: string
  description: string
}

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-100px' },
  transition: { duration: 0.6 },
}

export function EquipmentSection({ items }: { items: readonly EquipmentItem[] }) {
  return (
    <section className="py-12 lg:py-20 bg-slate-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div {...fadeInUp} className="text-center max-w-2xl mx-auto mb-10">
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">Оборудование и технологии</h2>
          <p className="text-slate-600 mt-3">
            Современное оснащение и аккуратные протоколы работы для безопасных и предсказуемых результатов.
          </p>
        </motion.div>
        <div className="grid gap-6 sm:grid-cols-2">
          {items.map((item, index) => (
            <motion.article
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              className="bg-white rounded-2xl p-6 border border-slate-100 shadow-sm"
            >
              <h3 className="text-lg font-semibold text-slate-900">{item.title}</h3>
              <p className="text-slate-600 mt-2">{item.description}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}

export function QualitySection({ items }: { items: readonly string[] }) {
  return (
    <section className="py-12 lg:py-20 bg-slate-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] items-start">
          <motion.div {...fadeInUp}>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">Стандарты качества</h2>
            <p className="text-slate-600 mt-3">
              Выстроенные процедуры, безопасные материалы и понятные рекомендации после приема.
            </p>
            <ul className="mt-6 space-y-3 text-slate-700">
              {items.map((item, index) => (
                <motion.li
                  key={item}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-100px' }}
                  transition={{ duration: 0.4, delay: index * 0.04 }}
                  className="flex gap-3"
                >
                  <span className="mt-2 h-2 w-2 rounded-full bg-primary" aria-hidden="true" />
                  <span>{item}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6 }}
            className="rounded-2xl border border-slate-100 bg-white p-6 shadow-sm"
          >
            <h3 className="text-lg font-semibold text-slate-900">Как проходит прием</h3>
            <p className="mt-2 text-slate-600">
              Осмотр, диагностика, обсуждение цели, выполнение процедуры и рекомендации по домашнему уходу.
            </p>
            <p className="mt-4 text-slate-600">
              Мы заранее объясняем длительность и ожидаемый результат, чтобы пациенту было спокойно и понятно.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export function SocialsSection({ socials }: { socials: readonly SocialLink[] }) {
  return (
    <section className="py-12 lg:py-20 bg-slate-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr] items-center">
          <motion.div {...fadeInUp}>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">Соцсети и мессенджеры</h2>
            <p className="text-slate-600 mt-3">
              Делимся полезными советами, отвечаем на вопросы и рассказываем о новых материалах и процедурах.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6 }}
          >
            <SocialLinks
              socials={socials}
              className="flex flex-wrap gap-4"
              itemClassName="h-12 w-12 rounded-full border border-slate-200 bg-white shadow-sm transition hover:border-primary/40"
              iconClassName="w-5 h-5"
            />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
