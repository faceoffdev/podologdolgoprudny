'use client'

import { motion } from 'framer-motion'

export function Testimonials() {
  return (
    <section className="py-10 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-start">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6 }}
            className="text-left max-w-2xl"
          >
            <span className="inline-block text-primary font-semibold text-sm uppercase tracking-wider mb-4">
              Отзывы пациентов
            </span>
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">
              Отзывы о центре подологии и остеопатии в Долгопрудном
            </h2>
            <p className="text-lg text-slate-600">
              Читайте реальные отзывы о медицинском педикюре, коррекции ногтей, лечении вросшего ногтя и остеопатическом
              приеме. Все отзывы собраны на Яндекс Картах.
            </p>
          </motion.div>

          {/* Right Content - Yandex Maps Reviews Widget */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative w-full max-w-[560px] h-[520px] lg:h-[600px] overflow-hidden">
              <iframe
                className="w-full h-full border border-slate-200 rounded-lg"
                src="https://yandex.ru/maps-reviews-widget/183656109627?comments"
                title="Отзывы на Яндекс Картах"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
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
      </div>
    </section>
  )
}
