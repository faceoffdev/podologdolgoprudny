'use client'

import { motion } from 'framer-motion'

export function Testimonials() {
  return (
    <section className="py-10 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <span className="inline-block text-primary font-semibold text-sm uppercase tracking-wider mb-4">
            О нас говорят
          </span>
          <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">Отзывы на Яндекс Картах</h2>
          <p className="text-lg text-slate-600">Реальные отзывы пациентов из Яндекс Карт.</p>
        </motion.div>

        {/* Yandex Maps Reviews Widget */}
        <div className="flex justify-center">
          <div className="relative w-full max-w-[560px] h-[800px] overflow-hidden">
            <iframe
              className="w-full h-full border border-slate-200 rounded-lg"
              src="https://yandex.ru/maps-reviews-widget/183656109627?comments"
              title="Отзывы Яндекс.Карт"
            />
            <a
              href="https://yandex.ru/maps/org/tsentr_podologii_i_osteopatii/183656109627/"
              target="_blank"
              rel="noreferrer"
              className="absolute bottom-2 left-0 w-full text-center text-[10px] text-slate-400 truncate px-4"
            >
              Центр Подологии и Остеопатии на карте Долгопрудного — Яндекс Карты
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
