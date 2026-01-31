'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { ChevronDown } from 'lucide-react'
import { siteConfig } from '@/lib/site-config'

const faqs = [
  {
    question: 'Как записаться на приём?',
    answer:
      `Вы можете записаться через сайт, позвонить по телефону <a href="${siteConfig.phone.href}" class="hover:underline">${siteConfig.phone.display}</a> или прийти в клинику. Онлайн запись доступна круглосуточно.`,
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
}: {
  question: string
  answer: string
}) {
  return (
    <details
      className="border-b border-slate-200 last:border-b-0"
      itemScope
      itemType="https://schema.org/Question"
    >
      <summary className="w-full py-5 flex items-center justify-between text-left cursor-pointer list-none">
        <span className="text-lg font-medium text-slate-900 pr-8" itemProp="name">
          {question}
        </span>
        <ChevronDown className="w-5 h-5 text-slate-500" />
      </summary>
      <div
        className="pb-5 text-slate-600 leading-relaxed"
        itemProp="acceptedAnswer"
        itemScope
        itemType="https://schema.org/Answer"
      >
        <p itemProp="text" dangerouslySetInnerHTML={{__html: answer}}></p>
      </div>
    </details>
  )
}

export function FAQ() {
  return (
    <section className="py-10 lg:py-24 bg-slate-50" itemScope itemType="https://schema.org/FAQPage">
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
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-6">
              Часто задаваемые вопросы о подологии в Долгопрудном
            </h2>
            <p className="text-lg text-slate-600 mb-8">
              Ответы на вопросы о подологическом приёме, медицинском педикюре, лечении вросшего ногтя и остеопатических
              консультациях. Если нужна помощь — свяжитесь с нами.
            </p>
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 bg-primary rounded-2xl flex items-center justify-center">
                <span className="text-white font-bold text-xl">?</span>
              </div>
              <div>
                <p className="font-semibold text-slate-900">Остались вопросы?</p>
                <p className="text-slate-600">
                  Позвоните нам по телефону{' '}
                  <a href={siteConfig.phone.href} className="text-primary hover:underline">
                    {siteConfig.phone.display}
                  </a>
                </p>
              </div>
            </div>
          </motion.div>

          {/* Right Content - Accordion */}
          <div className="bg-white rounded-2xl shadow-sm p-6 lg:p-8">
            {faqs.map((faq, index) => (
              <FAQItem
                key={index}
                question={faq.question}
                answer={faq.answer}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
