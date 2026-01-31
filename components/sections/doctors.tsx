'use client'

import { motion, type Variants } from 'framer-motion'
import Image from 'next/image'
import { Star, Facebook, Twitter, Linkedin } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'
import { withBasePath } from '@/lib/paths'

const socialIcons = {
  facebook: Facebook,
  twitter: Twitter,
  linkedin: Linkedin,
} as const

type SocialType = keyof typeof socialIcons

type DoctorSocial = {
  type: SocialType
  href: string
  label: string
}

const doctors: Array<{
  name: string
  specialty: string
  medicalSpecialty: string
  rating: string
  image: string
  profileUrl: string
  socials: DoctorSocial[]
}> = [
  {
    name: 'Рекунова Анна',
    specialty: 'подолог',
    medicalSpecialty: 'Подология',
    rating: '5.0',
    image: withBasePath('/images/doctors/anna-rekunova.jpeg'),
    profileUrl: '',
    socials: [],
  },
  {
    name: 'Дольган Эдгаев',
    specialty: 'врач-остеопат',
    medicalSpecialty: 'Остеопатия',
    rating: '5.0',
    image: withBasePath('/images/doctors/dolgan-edgaev.jpeg'),
    profileUrl: '',
    socials: [],
  },
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
          className="grid sm:grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8"
        >
          {doctors.map((doctor, index) => (
            <motion.div key={index} variants={itemVariants} itemScope itemType="https://schema.org/Person">
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
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-4 left-4 right-4 flex justify-center gap-3">
                      {doctor.socials.length > 0 ? (
                        doctor.socials.map((social, socialIndex) => {
                          const Icon = socialIcons[social.type]
                          return (
                            <a
                              key={`${doctor.name}-${social.type}-${socialIndex}`}
                              href={social.href}
                              target="_blank"
                              rel="noreferrer"
                              aria-label={social.label}
                              itemProp="sameAs"
                              className="w-10 h-10 bg-white/90 rounded-full flex items-center justify-center hover:bg-white hover:scale-110 transition-all"
                            >
                              <Icon className="w-5 h-5 text-slate-700" />
                            </a>
                          )
                        })
                      ) : (
                        <>
                          <button className="w-10 h-10 bg-white/90 rounded-full flex items-center justify-center hover:bg-white hover:scale-110 transition-all">
                            <Facebook className="w-5 h-5 text-slate-700" />
                          </button>
                          <button className="w-10 h-10 bg-white/90 rounded-full flex items-center justify-center hover:bg-white hover:scale-110 transition-all">
                            <Twitter className="w-5 h-5 text-slate-700" />
                          </button>
                          <button className="w-10 h-10 bg-white/90 rounded-full flex items-center justify-center hover:bg-white hover:scale-110 transition-all">
                            <Linkedin className="w-5 h-5 text-slate-700" />
                          </button>
                        </>
                      )}
                    </div>
                  </div>
                </div>
                <CardContent className="p-5 text-center">
                  <p className="text-lg font-semibold text-slate-900 mb-1" itemProp="name">
                    <a href="#" itemProp="url">
                      {doctor.name}
                    </a>
                  </p>
                  <p className="text-slate-500 text-sm mb-3" itemProp="jobTitle">
                    {doctor.specialty}
                  </p>
                  <meta itemProp="medicalSpecialty" content={doctor.medicalSpecialty} />
                  <div itemProp="worksFor" itemScope itemType="https://schema.org/Organization">
                    <meta itemProp="name" content="Центр Подологии и Остеопатии" />
                  </div>
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
