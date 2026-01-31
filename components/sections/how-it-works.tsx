'use client'

import { motion } from 'framer-motion'
import { Calendar, ClipboardCheck, Stethoscope } from 'lucide-react'

const steps = [
  {
    icon: Calendar,
    number: '01',
    title: 'Выбрать услугу',
    description:
      'Выберите подологическую услугу: медицинский педикюр, коррекция ногтей, лечение вросшего ногтя или консультация остеопата в Долгопрудном.',
  },
  {
    icon: ClipboardCheck,
    number: '02',
    title: 'Выбрать дату и время',
    description: 'Запишитесь на удобную дату и время онлайн или по телефону — подтвердим запись в день обращения.',
  },
  {
    icon: Stethoscope,
    number: '03',
    title: 'Прийти на приём',
    description: 'Посетите центр подологии и остеопатии и получите квалифицированную помощь специалиста.',
  },
]

export function HowItWorks() {
  return (
    <section id="about" className="py-10 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block text-primary font-semibold text-sm uppercase tracking-wider mb-4">
              Как записаться в Долгопрудном
            </span>
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-6">
              Запись к подологу и остеопату — 3 простых шага
            </h2>
            <p className="text-lg text-slate-600 mb-10">
              Записаться на приём в центр подологии и остеопатии стало проще: выберите услугу, дату и время, затем
              приходите на консультацию или лечение.
            </p>

            {/* Steps */}
            <div className="space-y-8">
              {steps.map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex gap-5"
                >
                  <div className="flex-shrink-0">
                    <div className="w-14 h-14 bg-primary rounded-2xl flex items-center justify-center shadow-lg shadow-primary/25">
                      <step.icon className="w-6 h-6 text-white" />
                    </div>
                  </div>
                  <div>
                    <div className="flex items-center gap-3 mb-2">
                      <span className="text-sm font-bold text-primary">{step.number}</span>
                      <h3 className="text-xl font-semibold text-slate-900">{step.title}</h3>
                    </div>
                    <p className="text-slate-600">{step.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right Content - Decorative */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative hidden lg:block"
          >
            <div className="relative">
              {/* Background decoration */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-primary/5 rounded-3xl transform rotate-3" />

              {/* Main content */}
              <div className="relative bg-slate-50 rounded-3xl p-8 shadow-xl">
                {/* Appointment card mockup */}
                <div className="bg-white rounded-2xl shadow-lg p-6 mb-6">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 bg-primary-light rounded-full flex items-center justify-center">
                      <Calendar className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <p className="font-semibold text-slate-900">Выбрать дату и время</p>
                      <p className="text-sm text-slate-500">Выберите удобное для вас время</p>
                    </div>
                  </div>
                  <div className="grid grid-cols-3 gap-3">
                    {['9:00', '11:30', '14:00'].map((time, i) => (
                      <button
                        key={i}
                        className={`py-2 px-3 rounded-lg text-sm font-medium transition-colors ${
                          i === 1 ? 'bg-primary text-white' : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                        }`}
                      >
                        {time}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Doctor card mockup */}
                <div className="bg-white rounded-2xl shadow-lg p-6">
                  <p className="text-sm text-slate-500 mb-4">Специалист</p>
                  <div className="flex items-center gap-4">
                    <div className="w-14 h-14 bg-primary-light rounded-full flex items-center justify-center">
                      <span className="text-white font-bold text-lg">НА</span>
                    </div>
                    <div>
                      <p className="font-semibold text-slate-900">Наталия Анатольевна Голикова</p>
                      <p className="text-sm text-slate-500">Фельдшер</p>
                    </div>
                    <div className="ml-auto flex items-center gap-1">
                      <span className="text-yellow-500">★</span>
                      <span className="font-semibold text-slate-900">5.0</span>
                    </div>
                  </div>
                </div>

                {/* Decorative elements */}
                <div className="absolute -top-4 -right-4 w-20 h-20 bg-primary/20 rounded-full blur-xl" />
                <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-secondary/20 rounded-full blur-xl" />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
