'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown } from 'lucide-react'

const faqs = [
  {
    question: 'Как записаться на приём?',
    answer:
      'Вы можете записаться через сайт, позвонить по телефону +7 914 861-82-42 или прийти в клинику. Онлайн запись доступна круглосуточно.',
  },
  {
    question: 'Какие услуги вы оказываете?',
    answer:
      'Мы занимаемся подологией, коррекцией ногтей, медицинским педикюром, обработкой мозолей и трещин, а также ведем остеопатический приём.',
  },
  {
    question: 'Нужно ли приходить заранее?',
    answer: 'Рекомендуем прийти за 10–15 минут до приёма, чтобы спокойно оформить документы и обсудить жалобы.',
  },
  {
    question: 'Можно ли получить консультацию дистанционно?',
    answer:
      'В отдельных случаях возможна дистанционная консультация. Уточните доступность у администратора по телефону.',
  },
  {
    question: 'Что взять с собой на первый визит?',
    answer: 'Возьмите паспорт, медицинские документы по проблеме и список принимаемых препаратов, если они есть.',
  },
]

function FAQItem({
  question,
  answer,
  isOpen,
  onClick,
}: {
  question: string
  answer: string
  isOpen: boolean
  onClick: () => void
}) {
  return (
    <div className="border-b border-slate-200 last:border-b-0">
      <button onClick={onClick} className="w-full py-5 flex items-center justify-between text-left group">
        <span className="text-lg font-medium text-slate-900 group-hover:text-primary transition-colors pr-8">
          {question}
        </span>
        <motion.div animate={{ rotate: isOpen ? 180 : 0 }} transition={{ duration: 0.3 }} className="flex-shrink-0">
          <ChevronDown className="w-5 h-5 text-slate-500" />
        </motion.div>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="overflow-hidden"
          >
            <p className="pb-5 text-slate-600 leading-relaxed">{answer}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <section className="py-10 lg:py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block text-primary font-semibold text-sm uppercase tracking-wider mb-4">
              Вопросы и ответы
            </span>
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-6">Часто задаваемые вопросы</h2>
            <p className="text-lg text-slate-600 mb-8">
              Собрали ответы на популярные вопросы о приёме и услугах. Если не нашли нужную информацию, свяжитесь с
              нами.
            </p>
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 bg-primary rounded-2xl flex items-center justify-center">
                <span className="text-white font-bold text-xl">?</span>
              </div>
              <div>
                <p className="font-semibold text-slate-900">Остались вопросы?</p>
                <p className="text-slate-600">
                  Позвоните нам по телефону{' '}
                  <a href="tel:+79148618242" className="text-primary hover:underline">
                    +7 914 861-82-42
                  </a>
                </p>
              </div>
            </div>
          </motion.div>

          {/* Right Content - Accordion */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-white rounded-2xl shadow-sm p-6 lg:p-8"
          >
            {faqs.map((faq, index) => (
              <FAQItem
                key={index}
                question={faq.question}
                answer={faq.answer}
                isOpen={openIndex === index}
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              />
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
