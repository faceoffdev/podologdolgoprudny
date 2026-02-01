import { withBasePath } from './paths'

export type DoctorSocial = {
  type: 'facebook' | 'twitter' | 'linkedin' | 'instagram' | 'telegram'
  href: string
  label: string
}

export type DoctorProfile = {
  slug: string
  name: string
  specialty: string
  medicalSpecialty: string
  rating: string
  image: string
  profileUrl: string
  socials: DoctorSocial[]
  shortBio: string
  bio: string[]
  highlights: Array<{ label: string; value: string }>
  tags: string[]
  services: string[]
  education: Array<{ year: string; title: string }>
  certifications: string[]
  schedule: string[]
  reception: string
}

export const doctors: DoctorProfile[] = [
  {
    slug: 'anna-rekunova',
    name: 'Рекунова Анна Алексеевна',
    specialty: 'подолог',
    medicalSpecialty: 'Подология',
    rating: '4.9',
    image: withBasePath('/images/doctors/anna-rekunova.jpeg'),
    profileUrl: withBasePath('/doctors/anna-rekunova/'),
    socials: [],
    shortBio:
      'Больше всего мне нравится помогать пожилым людям, видеть их радость в глазах после процедур, которые они сами не смогли бы сделать.' +
      'Я выезжаю на дом к лежачим и тяжело больным пациентам, оказываю необходимую подологическую помощь.',
    bio: [
      'Опытный подолог, Анна Алексеевна Рекунова, ведёт приём в своей частной практике в Москве и одновременно является сотрудником центра Подологии и Остеопатии в Долгопрудном. Участница Международного Чемпионата по медицинскому педикюру в 2020 году.',
    ],
    highlights: [
      { label: 'Стаж', value: '6+ лет' },
      { label: 'Пациентов', value: '1200+' },
      { label: 'Рейтинг', value: '4.9' },
    ],
    tags: ['Медицинский педикюр'],
    services: ['Медицинский педикюр'],
    education: [
      { year: '2013', title: 'Школа OPI, специальность – мастер-универсал ногтевого сервиса' },
      { year: '2016', title: 'Институт подологии Дитера Баумана, специальность – подолог' },
    ],
    certifications: [],
    schedule: ['с 11:00 по 23:00'],
    reception: 'Работаю исключительно по предварительной записи',
  },
  {
    slug: 'dolgan-edgaev',
    name: 'Эдгаев Дольган Алексеевич',
    specialty: 'врач-остеопат',
    medicalSpecialty: 'Остеопатия',
    rating: '5.0',
    image: withBasePath('/images/doctors/dolgan-edgaev.jpeg'),
    profileUrl: withBasePath('/doctors/dolgan-edgaev/'),
    socials: [],
    shortBio:
      'Врач-остеопат, работает с болевыми синдромами, нарушением осанки и последствиями травм. Подбирает индивидуальную программу восстановления.',
    bio: [
      'Дольган Алексеевич проводит остеопатический прием для пациентов с болями в спине, шее, суставах и функциональными нарушениями.',
      'Восстановление выстраивается поэтапно: первичная диагностика, мягкие мануальные техники и рекомендации для устойчивого результата.',
    ],
    highlights: [
      { label: 'Стаж', value: '9+ лет' },
      { label: 'Пациентов', value: '1600+' },
      { label: 'Рейтинг', value: '5.0' },
    ],
    tags: ['Остеопатия', 'Боль в спине', 'Осанка', 'Реабилитация'],
    services: [
      'Остеопатическая диагностика',
      'Коррекция болевого синдрома',
      'Восстановление после травм',
      'Работа с осанкой и биомеханикой',
      'Поддерживающие курсы терапии',
    ],
    education: [
      { year: '2014', title: 'Медицинский университет, лечебное дело' },
      { year: '2017', title: 'Интернатура по мануальной терапии' },
      { year: '2021', title: 'Специализация по остеопатии' },
    ],
    certifications: ['Мягкие мануальные техники', 'Остеопатическая диагностика', 'Реабилитация после травм'],
    schedule: ['ПН, СР, ПТ: 12:00–20:00', 'ВТ, ЧТ: 10:00–18:00', 'СБ-ВС: выходной'],
    reception: 'Взрослые пациенты и подростки.',
  },
  {
    slug: 'natali-golikova',
    name: 'Голикова Наталья Анатольевна',
    specialty: 'врач-реабилитолог',
    medicalSpecialty: 'Реабилитация',
    rating: '5.0',
    image: withBasePath('/images/doctors/natali-golikova.jpg'),
    profileUrl: withBasePath('/doctors/natali-golikova/'),
    socials: [],
    shortBio:
      'Специалист по реабилитации, помогает восстановиться после операций, травм и перегрузок. Подбирает комплекс упражнений и профилактику.',
    bio: [
      'Наталья Анатольевна сопровождает пациентов на этапах восстановления после травм и хирургических вмешательств.',
      'Фокусируется на функциональном восстановлении, мягких тренировках и контроле нагрузки в быту и спорте.',
    ],
    highlights: [
      { label: 'Стаж', value: '8+ лет' },
      { label: 'Пациентов', value: '1400+' },
      { label: 'Рейтинг', value: '5.0' },
    ],
    tags: ['Реабилитация', 'ЛФК', 'Восстановление', 'Профилактика'],
    services: [
      'Первичная консультация и план восстановления',
      'Реабилитация после травм',
      'Постоперационное сопровождение',
      'Лечебная физкультура',
      'Профилактика повторных травм',
    ],
    education: [
      { year: '2013', title: 'Медицинский университет, лечебное дело' },
      { year: '2016', title: 'Ординатура по реабилитологии' },
      { year: '2020', title: 'Курсы по спортивной реабилитации' },
    ],
    certifications: ['ЛФК и кинезиотерапия', 'Постоперационная реабилитация', 'Функциональная диагностика'],
    schedule: ['ПН-ПТ: 09:00–18:00', 'СБ: 10:00–14:00', 'ВС: выходной'],
    reception: 'Взрослые пациенты.',
  },
]

export const findDoctorBySlug = (slug: string) => doctors.find((doctor) => doctor.slug === slug)
