'use client'

import { motion, type Variants } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { Card, CardContent } from '@/components/ui/card'
import { doctors } from '@/lib/doctors'
import { withBasePath } from '@/lib/paths'

const socialIcons = {
  instagram: withBasePath('/icons/instagram.svg'),
  telegram: withBasePath('/icons/telegram.svg'),
} as const

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

export function Doctors() {
  return (
    <section id="doctors" className="py-10 lg:py-24 bg-slate-100">
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
          <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">Наши специалисты в Долгопрудном</h2>
          <p className="text-lg text-slate-600">
            Опытные подологи и врач-остеопат ведут приём в центре подологии и остеопатии. Помогаем с проблемами стоп,
            ногтей и болевыми синдромами, подбираем индивидуальные решения и план лечения.
          </p>
        </motion.div>

        {/* Doctors Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="grid sm:grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8"
        >
          {doctors.map((doctor, index) => (
            <motion.div key={index} variants={itemVariants} itemScope itemType="https://schema.org/Person">
              <Link href={doctor.profileUrl} itemProp="url" className="hover:text-primary transition-colors">
                <Card className="h-full overflow-hidden group">
                  <div className="relative overflow-hidden">
                    <Image
                      src={doctor.image}
                      alt={doctor.name + ' ' + doctor.specialty}
                      width={400}
                      height={500}
                      itemProp="image"
                      className="w-full h-72 object-cover object-top group-hover:scale-105 transition-transform duration-500"
                    />
                    {/* Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                  <CardContent className="p-5 text-center">
                    <p className="text-lg font-semibold text-slate-900 mb-1" itemProp="name">
                      {doctor.name}
                    </p>
                    <p className="text-slate-500 text-sm mb-3" itemProp="jobTitle">
                      {doctor.specialty}
                    </p>
                    <meta itemProp="medicalSpecialty" content={doctor.medicalSpecialty} />
                    <div itemProp="worksFor" itemScope itemType="https://schema.org/Organization">
                      <meta itemProp="name" content="Центр Подологии и Остеопатии" />
                    </div>
                  </CardContent>
                </Card>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
