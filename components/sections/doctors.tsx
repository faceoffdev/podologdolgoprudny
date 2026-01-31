'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { Star, Facebook, Twitter, Linkedin } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'

const doctors = [
  {
    name: 'Рекунова Анна',
    specialty: 'подолог',
    rating: '5.0',
    image: '/images/doctors/anna-rekunova.jpeg',
  },
  {
    name: 'Дольган Эдгаев',
    specialty: 'врач-остеопат',
    rating: '5.0',
    image: '/images/doctors/dolgan-edgaev.jpeg',
  },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
}

const itemVariants = {
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

export function Doctors() {
  return (
    <section id="doctors" className="py-20 lg:py-24 bg-slate-100">
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
            Наша команда
          </span>
          <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">Познакомьтесь с нашими экспертами</h2>
          <p className="text-lg text-slate-600">
            Квалифицированные медицинские работники заботятся о вашем благополучии и стремятся обеспечить вам наилучшее
            медицинское обслуживание.
          </p>
        </motion.div>

        {/* Doctors Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="grid sm:grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8"
        >
          {doctors.map((doctor, index) => (
            <motion.div key={index} variants={itemVariants}>
              <Card className="h-full overflow-hidden group">
                <div className="relative overflow-hidden">
                  <Image
                    src={doctor.image}
                    alt={doctor.name + ' ' + doctor.specialty}
                    width={400}
                    height={500}
                    className="w-full h-72 object-cover object-top group-hover:scale-105 transition-transform duration-500"
                  />
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-4 left-4 right-4 flex justify-center gap-3">
                      <button className="w-10 h-10 bg-white/90 rounded-full flex items-center justify-center hover:bg-white hover:scale-110 transition-all">
                        <Facebook className="w-5 h-5 text-slate-700" />
                      </button>
                      <button className="w-10 h-10 bg-white/90 rounded-full flex items-center justify-center hover:bg-white hover:scale-110 transition-all">
                        <Twitter className="w-5 h-5 text-slate-700" />
                      </button>
                      <button className="w-10 h-10 bg-white/90 rounded-full flex items-center justify-center hover:bg-white hover:scale-110 transition-all">
                        <Linkedin className="w-5 h-5 text-slate-700" />
                      </button>
                    </div>
                  </div>
                </div>
                <CardContent className="p-5 text-center">
                  <h3 className="text-lg font-semibold text-slate-900 mb-1">{doctor.name}</h3>
                  <p className="text-slate-500 text-sm mb-3">{doctor.specialty}</p>
                  <div className="flex items-center justify-center gap-1">
                    <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                    <span className="font-semibold text-slate-900">{doctor.rating}</span>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
