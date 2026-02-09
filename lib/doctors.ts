import { withBasePath } from './paths'

export type DoctorSocial = {
  type: 'instagram' | 'telegram'
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
  education: Array<{ year: string; title: string }>
  certifications: string[]
  schedule: string[]
  reception: string
}

export const doctors: DoctorProfile[] = [
  {
    slug: 'tatiana-solokha',
    name: 'Солоха Татьяна Викторовна',
    specialty: 'подолог',
    medicalSpecialty: 'Подология',
    rating: '5.0',
    image: withBasePath('/images/doctors/tatiana-solokha.jpg'),
    profileUrl: '/specialisty/tatiana-solokha/',
    socials: [
      { type: 'instagram', href: 'https://www.instagram.com/tatiana_asteri', label: 'Instagram' },
      { type: 'telegram', href: 'https://t.me/podology_osteopathy', label: 'Telegram' },
    ],
    shortBio: 'Ведущий подолог и организатор центра Подологии и Остеопатии',
    bio: [
      'Специализируется на коррекции вросших ногтей, обработке стоп и ногтей, профилактике и лечении различных подологических проблем. Татьяна Викторовна использует современные безопасные методы и индивидуальный подход к каждому пациенту, обеспечивая комфорт и эффективное восстановление здоровья стоп.',
    ],
    highlights: [
      { label: 'Стаж', value: '10+ лет' },
      { label: 'Пациентов', value: '3000+' },
      { label: 'Рейтинг', value: '5.0' },
    ],
    tags: ['Медицинский педикюр'],
    education: [{ year: '2015', title: 'Институт подологии, подолог' }],
    certifications: [],
    schedule: ['ПН-ЧТ: 9:00-19:00', 'СБ: 9:00-15:30'],
    reception: 'Работаю исключительно по предварительной записи',
  },
  {
    slug: 'anna-rekunova',
    name: 'Рекунова Анна Алексеевна',
    specialty: 'подолог',
    medicalSpecialty: 'Подология',
    rating: '4.9',
    image: withBasePath('/images/doctors/anna-rekunova.jpeg'),
    profileUrl: '/specialisty/anna-rekunova/',
    socials: [],
    shortBio: 'Подолог, помогает пожилым пациентам и выезжает на дом к лежачим и тяжело больным.',
    bio: [
      'Опытный подолог, Анна Алексеевна Рекунова, является сотрудником центра Подологии и Остеопатии в Долгопрудном. Участница Международного Чемпионата по медицинскому педикюру в 2020 году.',
    ],
    highlights: [
      { label: 'Стаж', value: '8+ лет' },
      { label: 'Пациентов', value: '1200+' },
      { label: 'Рейтинг', value: '4.9' },
    ],
    tags: ['Медицинский педикюр'],
    education: [
      { year: '2013', title: 'Школа OPI, специальность - мастер-универсал ногтевого сервиса' },
      { year: '2016', title: 'Институт подологии Дитера Баумана, специальность - подолог' },
    ],
    certifications: [],
    schedule: ['с 11:00 по 23:00'],
    reception: 'Работаю исключительно по предварительной записи',
  },
  {
    slug: 'yana-ionycheva',
    name: 'Ионычева Яна Петровна',
    specialty: 'подолог',
    medicalSpecialty: 'Подология',
    rating: '5.0',
    image: withBasePath('/images/doctors/yana-ionycheva.jpg'),
    profileUrl: '/specialisty/yana-ionycheva/',
    socials: [],
    shortBio:
      'Подолог, выполняет обработку стоп и ногтей, включая аппаратную чистку поврежденных ногтевых пластин со спреем.',
    bio: [
      'Выполняет подологическую обработку стоп и ногтей, включая аппаратную чистку поврежденных ногтевых пластин со спреем.',
      'Работает с различными проблемами стоп - от натоптышей и трещин до деформаций ногтей, с вниманием к каждому клиенту.',
      'Комфорт, безопасность и гигиена - приоритет на каждом этапе процедуры.',
    ],
    highlights: [
      { label: 'Стаж', value: '9 лет' },
      { label: 'Рейтинг', value: '5.0' },
    ],
    tags: ['Подология', 'Натоптыши', 'Трещины', 'Деформации ногтей'],
    education: [],
    certifications: ['Курс общей и практической подологии'],
    schedule: ['ПН-СБ: 7:30-21:00'],
    reception: 'Работаю исключительно по предварительной записи',
  },
  {
    slug: 'dolgan-edgaev',
    name: 'Эдгаев Дольган Алексеевич',
    specialty: 'врач-остеопат',
    medicalSpecialty: 'Остеопатия',
    rating: '4.1',
    image: withBasePath('/images/doctors/dolgan-edgaev.jpeg'),
    profileUrl: '/specialisty/dolgan-edgaev/',
    socials: [],
    shortBio:
      'Врач-остеопат, работает с болями любой локализации, нарушением осанки и последствиями травм. Подбирает индивидуальную программу восстановления.',
    bio: [
      'Главный врач центра Подологии и Остеопатии - Дольган Алексеевич Эдгаев. Выпускник Первого Московского Медицинского университета имени Сеченова. Ведет прием пациентов в клинике остеопатии и классической медицины Остеополиклиник, г. Москва, и также является сотрудником центра Подологии и остеопатии в Долгопрудном.',
      'Занимается лечением пациентов с болями любой локализации. Проводит реабилитацию после травм, инсультов, инфарктов.',
    ],
    highlights: [
      { label: 'Стаж', value: '8+ лет' },
      { label: 'Пациентов', value: '1600+' },
      { label: 'Рейтинг', value: '4.1' },
    ],
    tags: ['Остеопатия', 'Боль в спине', 'Осанка', 'Реабилитация'],
    education: [
      { year: '2016', title: 'Первый Московский государственный медицинский университет им. И.М. Сеченова' },
      { year: '2017', title: 'Российский университет дружбы народов им. П. Лумумбы (РУДН)' },
    ],
    certifications: ['Остеопатия - Российская академия медико-социальной реабилитации'],
    schedule: ['ПН: 11:00-17:00'],
    reception:
      'Не принимает беременных женщин, не лечит пациентов с переломами или любыми травмами. Проводит реабилитацию, но не ранее, чем через 6 месяцев после прохождения лечения у хирурга.',
  },
  {
    slug: 'natali-golikova',
    name: 'Голикова Наталья Анатольевна',
    specialty: 'врач-реабилитолог, специалист по озонотерапии и гирудотерапии',
    medicalSpecialty: 'Реабилитация',
    rating: '4.3',
    image: withBasePath('/images/doctors/natali-golikova.jpg'),
    profileUrl: '/specialisty/natali-golikova/',
    socials: [],
    shortBio:
      'Специалист по реабилитации, помогает восстановиться после операций, травм и перегрузок.',
    bio: [
      'Наталья Анатольевна сопровождает пациентов на этапах восстановления после травм и хирургических вмешательств.',
      'Фокусируется на функциональном восстановлении, мягких тренировках и контроле нагрузки в быту и спорте.',
    ],
    highlights: [
      { label: 'Стаж', value: '35+ лет' },
      { label: 'Пациентов', value: '1800+' },
      { label: 'Рейтинг', value: '4.3' },
    ],
    tags: ['Реабилитация', 'ЛФК', 'Восстановление', 'Профилактика'],
    education: [
      { year: '1991', title: 'Ивановская государственная медицинская академия' },
      { year: '2017', title: 'Российская медицинская академия последипломного образования (РМАПО)' },
    ],
    certifications: [],
    schedule: ['ПН-ПТ: 09:00-18:00', 'СБ: 10:00-14:00', 'ВС: выходной'],
    reception: 'Взрослые пациенты.',
  },
  {
    slug: 'viktor-bembeev',
    name: 'Бембеев Виктор Шукраевич',
    specialty: 'специалист по лечебному массажу, рефлексотерапевт',
    medicalSpecialty: 'Лечебный массаж',
    rating: '4.9',
    image: withBasePath('/images/doctors/bembeev-viktor.jpeg'),
    profileUrl: '/specialisty/viktor-bembeev/',
    socials: [],
    shortBio:
      'Специалист по лечебному массажу с 24-летним стажем. Работает с мышечными зажимами, болевыми синдромами и восстановлением после нагрузок.',
    bio: [
      'Проводит курсы лечебного массажа для снижения боли, улучшения подвижности и общего самочувствия. Подбирает технику и интенсивность процедур под задачи пациента.',
      'Помогает при мышечном перенапряжении, последствиях малоподвижного образа жизни и высоких физических нагрузок.',
    ],
    highlights: [
      { label: 'Стаж', value: '24 года' },
      { label: 'Рейтинг', value: '4.9' },
    ],
    tags: ['Лечебный массаж', 'Восстановление', 'Мышечные зажимы'],
    education: [
      {
        year: '1995',
        title: 'Калмыцкий медицинский колледж им. Т. Хахлыновой, специальность "Сестринское дело"',
      },
      {
        year: '2014',
        title: 'Российский университет дружбы народов (РУДН)',
      },
    ],
    certifications: [],
    schedule: [],
    reception: '',
  },
]

export const findDoctorBySlug = (slug: string) => doctors.find((doctor) => doctor.slug === slug)
