import { withBasePath } from '@/lib/paths'

export type ServiceCategory = {
  slug: string
  name: string
  description: string
}

export type ServicePrice = {
  doctorSlug: string
  priceMin: number | null
  priceMax: number
}

export type DoctorService = {
  name: string
  profileUrl: string
  price: PriceRange
}

export type ServiceImage = {
  src: string
  alt: string
  caption?: string
}

export type Service = {
  sourceId: number
  slug: string
  name: string
  categorySlug: string
  shortDescription: string
  description: string[]
  images?: ServiceImage[]
  duration: string
  profileUrl: string
  priceMin: number
  priceMax: number
  prices: ServicePrice[]
}

export type PriceRange = {
  min: number | null
  max: number
}

export const serviceCategories: ServiceCategory[] = [
  {
    slug: 'podologiya',
    name: 'Подология',
    description:
      'Подологические услуги для здоровья и комфорта стоп: обработка гиперкератоза, мозолей, трещин и проблемных ногтей с индивидуальным планом ухода.',
  },
  {
    slug: 'ortoniksiya',
    name: 'Ортониксия',
    description:
      'Ортониксические системы для безоперационной коррекции формы ногтя при деформации и склонности к врастанию: подбор, установка и плановые коррекции.',
  },
  {
    slug: 'vrosshiy-nogot',
    name: 'Вросший ноготь',
    description:
      'Комплексная помощь при вросшем ногте: снижение боли и воспаления, бережная обработка и профилактика рецидивов с учетом клинической картины.',
  },
  {
    slug: 'onihomikoz-dermatomikoz',
    name: 'Онихомикоз. Дерматомикоз',
    description:
      'Подологическое сопровождение при грибковых поражениях ногтей и кожи стоп: аппаратная обработка, контроль динамики и рекомендации по уходу.',
  },
  {
    slug: 'ozonoterapiya',
    name: 'Озонотерапия',
    description:
      'Озонотерапия в общих и местных протоколах для поддержки восстановительных процессов, улучшения микроциркуляции и снижения воспалительной нагрузки.',
  },
  {
    slug: 'plazmodinamicheskoe-vozdeystvie-gelios',
    name: 'Плазмодинамическое воздействие (аппарат «Гелиос»)',
    description:
      'Плазмодинамические протоколы на аппарате «Гелиос» для работы с кожей и ногтями: регенерация, восстановление качества тканей и поддержка лечения.',
  },
  {
    slug: 'osteopatiya',
    name: 'Остеопатия',
    description:
      'Остеопатические приемы для мягкой коррекции функциональных нарушений опорно-двигательной системы, снижения боли и восстановления подвижности.',
  },
  {
    slug: 'massazh',
    name: 'Массаж',
    description:
      'Лечебные и восстановительные массажные программы для расслабления мышц, уменьшения болевого синдрома и улучшения общего самочувствия.',
  },
  {
    slug: 'uhod-za-rukami',
    name: 'Уход за руками',
    description:
      'Профессиональный уход за кожей и ногтями рук: гигиеническая обработка, восстановление и профилактика дискомфорта в околоногтевой зоне.',
  },
  {
    slug: 'vyezd-na-dom-k-patsientu',
    name: 'Выезд на дом к пациенту',
    description:
      'Подологическая помощь на дому для пациентов с ограниченной мобильностью: осмотр, необходимые процедуры и рекомендации в комфортных условиях.',
  },
  {
    slug: 'kosmetologiya-trihologiya',
    name: 'Косметология/трихология',
    description:
      'Аэродинамические процедуры SkinHale для кожи лица и волосистой части головы: мягкое обновление, инфузия активных компонентов и улучшение микроциркуляции.',
  },
  {
    slug: 'girudoterapiya',
    name: 'Гирудотерапия',
    description:
      'Гирудотерапия как часть комплексных программ по показаниям: улучшение микроциркуляции, снижение отечности и поддержка восстановительных процессов.',
  },
]

export const services: Service[] = [
  {
    sourceId: 14672888,
    slug: 'konsultatsiya-podologa',
    name: 'Первичный прием подолога',
    categorySlug: 'podologiya',
    shortDescription: 'В первичный прием входит манипуляция по проблеме, с которой обращается пациент.',
    description: [
      'Первичный прием подолога в Долгопрудном начинается с подробного осмотра стоп и ногтевых пластин, оценки жалоб и выявления причины дискомфорта.',
      'Во время консультации подолог выполняет необходимую базовую манипуляцию по текущей проблеме и объясняет дальнейшую тактику лечения и ухода.',
      'По итогам приема пациент получает персональные рекомендации по домашнему уходу, профилактике рецидивов и плану последующих процедур при необходимости.',
    ],
    duration: '30 минут',
    profileUrl: '/uslugi/konsultatsiya-podologa/',
    priceMin: 3500,
    priceMax: 4500,
    prices: [
      {
        doctorSlug: 'tatiana-solokha',
        priceMin: null,
        priceMax: 4500,
      },
      {
        doctorSlug: 'anna-rekunova',
        priceMin: 3500,
        priceMax: 4500,
      },
      {
        doctorSlug: 'yana-ionycheva',
        priceMin: 3500,
        priceMax: 4500,
      },
    ],
  },
  {
    sourceId: 14563269,
    slug: 'meditsinskiy-pedikyur',
    name: 'Комплексный подологический уход',
    categorySlug: 'podologiya',
    shortDescription:
      'Комплексный подологический уход направлен на оздоровление кожи стоп и ногтей, их эстетический вид.',
    description: [
      'Процедура рекомендована один раз в 4-8 недель в зависимости от потребности человека. Обработка выполняется на самом современном оборудовании с подачей спрея, дионизированная вода снижает трение, температуру, делая процедуру очень комфортной и приятной.',
      'В процессе обрабатываются особым образом все проблемные участки: мозоли, локальный гиперкератоз (натоптыши), трещины. После процедуры улучшается общее состояние стоп.',
      'Даются рекомендации по домашнему уходу, их выполнение - залог продолжения качественного педикюра на более долгий срок. Пусть ваши ноги будут легкими!',
    ],
    duration: '1 ч',
    profileUrl: '/uslugi/meditsinskiy-pedikyur/',
    priceMin: 6500,
    priceMax: 7500,
    prices: [
      {
        doctorSlug: 'tatiana-solokha',
        priceMin: 7000,
        priceMax: 7500,
      },
      {
        doctorSlug: 'anna-rekunova',
        priceMin: 6500,
        priceMax: 7500,
      },
      {
        doctorSlug: 'yana-ionycheva',
        priceMin: 6500,
        priceMax: 7000,
      },
    ],
  },
  {
    sourceId: 22881624,
    slug: 'kompleksnyy-podologicheskiy-uhod-povyshennoy-slozhnosti',
    name: 'Комплексный подологический уход повышенной сложности',
    categorySlug: 'podologiya',
    shortDescription:
      'Комплексный подологический уход повышенной сложности с индивидуальным подбором тактики и рекомендациями по дальнейшему уходу.',
    description: [
      'Услуга «Комплексный подологический уход повышенной сложности» проводится по показаниям после очной оценки состояния.',
      'Во время приема специалист выполняет необходимые манипуляции с учетом клинической задачи и текущей динамики.',
      'По итогам процедуры пациент получает персональные рекомендации и план дальнейшего наблюдения при необходимости.',
    ],
    duration: '1 ч 15 минут',
    profileUrl: '/uslugi/kompleksnyy-podologicheskiy-uhod-povyshennoy-slozhnosti/',
    priceMin: 8500,
    priceMax: 8500,
    prices: [
      {
        doctorSlug: 'tatiana-solokha',
        priceMin: null,
        priceMax: 8500,
      },
      {
        doctorSlug: 'anna-rekunova',
        priceMin: null,
        priceMax: 8500,
      },
      {
        doctorSlug: 'yana-ionycheva',
        priceMin: null,
        priceMax: 8500,
      },
    ],
  },
  {
    sourceId: 14737703,
    slug: 'obrabotka-stop-plantarnaya-chast',
    name: 'Обработка стоп (плантарная часть)',
    categorySlug: 'podologiya',
    shortDescription:
      'Подологическая обработка подошвенной части стоп для уменьшения гиперкератоза, натоптышей и дискомфорта при ходьбе.',
    description: [
      'Обработка стоп (плантарная часть) направлена на аккуратное удаление избыточного ороговения и снижение нагрузки на болезненные участки подошвы.',
      'Во время процедуры подолог прорабатывает зоны гиперкератоза, натоптыши и участки дискомфорта, восстанавливая комфорт при ходьбе.',
      'После приема пациент получает рекомендации по домашнему уходу и профилактике повторного образования плотной кожи.',
    ],
    duration: '30 минут',
    profileUrl: '/uslugi/obrabotka-stop-plantarnaya-chast/',
    priceMin: 4000,
    priceMax: 4500,
    prices: [
      {
        doctorSlug: 'tatiana-solokha',
        priceMin: 4000,
        priceMax: 4500,
      },
      {
        doctorSlug: 'anna-rekunova',
        priceMin: 4000,
        priceMax: 4500,
      },
      {
        doctorSlug: 'yana-ionycheva',
        priceMin: 4000,
        priceMax: 4500,
      },
    ],
  },
  {
    sourceId: 15352838,
    slug: 'piling-dmk-dlya-suhoy-kozhi-stopy',
    name: 'Пилинг DMK для сухой кожи (стопы)',
    categorySlug: 'podologiya',
    shortDescription:
      'Процедура биохимического воздействия, устраняющая даже сильно выраженный гиперкератоз, мозоли и натоптыши, возвращая гладкость и мягкость стопам сразу после первой процедуры.',
    description: [
      'Процедура биохимического воздействия, устраняющая даже сильно выраженный гиперкератоз, мозоли и натоптыши, возвращая гладкость и мягкость стопам сразу после первой процедуры. Процедура включает в себя следующие этапы: очищение, щелочной пилинг Alkaline Wash, нейтрализация, нанесение специального крема Calerase и масла Herbal Pigment Oil. Для поддержания эффекта мягкости и гладкости в течение длительного времени, в домашний уход назначается крем Calerase.',
      'Рекомендуется в комплексе с обработкой плантарной (подошвенной) части стопы.',
    ],
    duration: '30 минут',
    profileUrl: '/uslugi/piling-dmk-dlya-suhoy-kozhi-stopy/',
    priceMin: 4000,
    priceMax: 4000,
    prices: [
      {
        doctorSlug: 'tatiana-solokha',
        priceMin: null,
        priceMax: 4000,
      },
      {
        doctorSlug: 'anna-rekunova',
        priceMin: null,
        priceMax: 4000,
      },
    ],
  },
  {
    sourceId: 14737684,
    slug: 'obrabotka-slozhnyh-nogtey',
    name: 'Обработка сложных ногтей',
    categorySlug: 'podologiya',
    shortDescription:
      'Подологическая обработка деформированных, утолщенных и травмированных ногтей для снижения дискомфорта и улучшения состояния ногтевой пластины.',
    description: [
      'Обработка сложных ногтей проводится при утолщении, деформации, травматических изменениях и выраженном дискомфорте в области ногтевой пластины.',
      'Во время процедуры подолог аккуратно уменьшает толщину и неровности ногтя, очищает проблемные участки и снижает давление на окружающие ткани.',
      'После приема специалист дает рекомендации по домашнему уходу и, при необходимости, формирует план повторных визитов для устойчивого результата.',
    ],
    duration: '30 минут',
    profileUrl: '/uslugi/obrabotka-slozhnyh-nogtey/',
    priceMin: 4000,
    priceMax: 4500,
    prices: [
      {
        doctorSlug: 'tatiana-solokha',
        priceMin: 4000,
        priceMax: 4500,
      },
      {
        doctorSlug: 'anna-rekunova',
        priceMin: 4000,
        priceMax: 4500,
      },
      {
        doctorSlug: 'yana-ionycheva',
        priceMin: 4000,
        priceMax: 4500,
      },
    ],
  },
  {
    sourceId: 14563280,
    slug: 'udalenie-sterzhnevoy-mezhpaltsevoy-mozoli',
    name: 'Удаление стержневой/межпальцевой мозоли',
    categorySlug: 'podologiya',
    shortDescription:
      'Точечное удаление стержневой и межпальцевой мозоли для снижения боли, давления и дискомфорта при ходьбе.',
    description: [
      'Удаление стержневой/межпальцевой мозоли выполняется при локальной боли, жжении и дискомфорте во время нагрузки на стопу.',
      'Подолог аккуратно устраняет ороговевшие ткани и стержневой компонент мозоли, снижая давление на чувствительные участки кожи.',
      'После процедуры пациент получает рекомендации по профилактике повторного образования мозоли и подбору домашнего ухода.',
    ],
    duration: '20 минут',
    profileUrl: '/uslugi/udalenie-sterzhnevoy-mezhpaltsevoy-mozoli/',
    priceMin: 2000,
    priceMax: 2000,
    prices: [
      {
        doctorSlug: 'tatiana-solokha',
        priceMin: null,
        priceMax: 2000,
      },
      {
        doctorSlug: 'anna-rekunova',
        priceMin: null,
        priceMax: 2000,
      },
      {
        doctorSlug: 'yana-ionycheva',
        priceMin: null,
        priceMax: 2000,
      },
    ],
  },
  {
    sourceId: 15182184,
    slug: 'chistka-gematomy-travma',
    name: 'Чистка гематомы (травма)',
    categorySlug: 'podologiya',
    shortDescription:
      'Подологическая чистка подногтевой гематомы после травмы для уменьшения давления, боли и восстановления комфорта.',
    description: [
      'Чистка гематомы (травма) проводится при болезненном давлении под ногтевой пластиной после ушиба или другой механической травмы.',
      'Во время процедуры подолог аккуратно обрабатывает поврежденный участок, снижает болевой синдром и помогает предотвратить осложнения.',
      'После приема пациент получает рекомендации по уходу за ногтем и контролю восстановления до полного заживления.',
    ],
    duration: '30 минут',
    profileUrl: '/uslugi/chistka-gematomy-travma/',
    priceMin: 3500,
    priceMax: 3500,
    prices: [
      {
        doctorSlug: 'tatiana-solokha',
        priceMin: null,
        priceMax: 3500,
      },
      {
        doctorSlug: 'anna-rekunova',
        priceMin: null,
        priceMax: 3500,
      },
      {
        doctorSlug: 'yana-ionycheva',
        priceMin: null,
        priceMax: 3500,
      },
    ],
  },
  {
    sourceId: 14738390,
    slug: 'obrabotka-borodavok-povtornyy-priem',
    name: 'Обработка бородавок (повторный прием)',
    categorySlug: 'podologiya',
    shortDescription:
      'Повторная подологическая обработка бородавок для контроля динамики лечения и снижения дискомфорта.',
    description: [
      'Повторный прием по обработке бородавок проводится для оценки результата предыдущей процедуры и дальнейшей коррекции тактики лечения.',
      'Подолог аккуратно обрабатывает проблемную зону, контролирует состояние окружающих тканей и снижает риск распространения поражения.',
      'После процедуры пациент получает рекомендации по домашнему уходу и графику следующих визитов для достижения устойчивого результата.',
    ],
    duration: '15 минут',
    profileUrl: '/uslugi/obrabotka-borodavok-povtornyy-priem/',
    priceMin: 2000,
    priceMax: 4000,
    prices: [
      {
        doctorSlug: 'tatiana-solokha',
        priceMin: 2000,
        priceMax: 4000,
      },
      {
        doctorSlug: 'anna-rekunova',
        priceMin: 2000,
        priceMax: 4000,
      },
      {
        doctorSlug: 'yana-ionycheva',
        priceMin: 2000,
        priceMax: 4000,
      },
    ],
  },
  {
    sourceId: 14808081,
    slug: 'rekonstruktsiya-nogtya-cvetootverdayuschimi-materialami',
    name: 'Реконструкция ногтя светоотверждаемыми материалами',
    categorySlug: 'podologiya',
    shortDescription:
      'Восстановление формы и защиты ногтевой пластины светоотверждаемыми материалами после травм и деформаций.',
    description: [
      'Реконструкция ногтя светоотверждаемыми материалами выполняется при частичной утрате ногтевой пластины, травматических изменениях и выраженной деформации.',
      'Во время процедуры подолог формирует анатомически корректную форму ногтя, снижает нагрузку на ногтевое ложе и повышает комфорт при ходьбе.',
      'После реконструкции пациент получает рекомендации по уходу и контролю состояния ногтя для безопасного отрастания и сохранения результата.',
    ],
    duration: '40 минут',
    profileUrl: '/uslugi/rekonstruktsiya-nogtya-cvetootverdayuschimi-materialami/',
    priceMin: 5000,
    priceMax: 5000,
    prices: [
      {
        doctorSlug: 'tatiana-solokha',
        priceMin: null,
        priceMax: 5000,
      },
      {
        doctorSlug: 'anna-rekunova',
        priceMin: null,
        priceMax: 5000,
      },
      {
        doctorSlug: 'yana-ionycheva',
        priceMin: null,
        priceMax: 5000,
      },
    ],
  },
  {
    sourceId: 14672584,
    slug: 'izgotovlenie-ortoza',
    name: 'Изготовление ортоза',
    categorySlug: 'podologiya',
    shortDescription:
      'Изготовление индивидуального ортоза для разгрузки проблемных зон стопы и снижения боли при ходьбе.',
    description: [
      'Изготовление ортоза проводится при локальной перегрузке стопы, болезненных натоптышах, мозолях и других состояниях, требующих точечной коррекции давления.',
      'Подолог подбирает форму и материал ортоза с учетом анатомии стопы и задач пациента, чтобы повысить комфорт в повседневной обуви.',
      'После изготовления специалист дает рекомендации по ношению, адаптации и уходу за ортозом для стабильного лечебного эффекта.',
    ],
    duration: '45 минут',
    profileUrl: '/uslugi/izgotovlenie-ortoza/',
    priceMin: 4000,
    priceMax: 6000,
    prices: [
      {
        doctorSlug: 'tatiana-solokha',
        priceMin: 4000,
        priceMax: 6000,
      },
    ],
  },
  {
    sourceId: 21522172,
    slug: 'snyatie-iskusstvennogo-pokrytiya',
    name: 'Снятие искусственного покрытия',
    categorySlug: 'podologiya',
    shortDescription:
      'Безопасное снятие искусственного покрытия с ногтей с минимальной травматизацией ногтевой пластины.',
    description: [
      'Снятие искусственного покрытия выполняется щадящим способом, чтобы сохранить целостность ногтевой пластины и снизить риск повреждений.',
      'Подолог аккуратно удаляет материал, оценивает состояние ногтя после снятия и при необходимости проводит базовую обработку поверхности.',
      'После процедуры пациент получает рекомендации по восстановлению ногтевой пластины и дальнейшему уходу.',
    ],
    duration: '15 минут',
    profileUrl: '/uslugi/snyatie-iskusstvennogo-pokrytiya/',
    priceMin: 1000,
    priceMax: 1000,
    prices: [
      {
        doctorSlug: 'tatiana-solokha',
        priceMin: null,
        priceMax: 1000,
      },
      {
        doctorSlug: 'anna-rekunova',
        priceMin: null,
        priceMax: 1000,
      },
      {
        doctorSlug: 'yana-ionycheva',
        priceMin: null,
        priceMax: 1000,
      },
      {
        doctorSlug: 'dolgan-edgaev',
        priceMin: null,
        priceMax: 1000,
      },
    ],
  },
  {
    sourceId: 14758925,
    slug: 'snyatie-skoby-obrabotka-nogtya',
    name: 'Снятие скобы и обработка ногтя',
    categorySlug: 'ortoniksiya',
    shortDescription:
      'Снятие ортониксической скобы и подологическая обработка ногтя для комфортного завершения этапа коррекции.',
    description: [
      'Снятие скобы и обработка ногтя проводится после этапа ортониксии, когда требуется корректно завершить коррекцию и оценить состояние ногтевой пластины.',
      'Во время процедуры подолог аккуратно удаляет установленную систему, обрабатывает ноготь и околоногтевые ткани, снижая риск раздражения и дискомфорта.',
      'После приема специалист дает рекомендации по дальнейшему уходу и профилактике повторного врастания ногтя.',
    ],
    duration: '20 минут',
    profileUrl: '/uslugi/snyatie-skoby-obrabotka-nogtya/',
    priceMin: 2000,
    priceMax: 2000,
    prices: [
      {
        doctorSlug: 'tatiana-solokha',
        priceMin: null,
        priceMax: 2000,
      },
      {
        doctorSlug: 'anna-rekunova',
        priceMin: null,
        priceMax: 2000,
      },
      {
        doctorSlug: 'yana-ionycheva',
        priceMin: null,
        priceMax: 2000,
      },
    ],
  },
  {
    sourceId: 14804099,
    slug: 'korrektsiya-titanovoy-niti',
    name: 'Коррекция титановой нити',
    categorySlug: 'ortoniksiya',
    shortDescription:
      'Плановая коррекция титановой нити для поддержания правильной формы ногтя и контроля динамики лечения.',
    description: [
      'Коррекция титановой нити выполняется на повторных приемах для сохранения лечебного эффекта и безопасного выравнивания ногтевой пластины.',
      'Подолог оценивает состояние ногтя и околоногтевых тканей, при необходимости корректирует натяжение системы и обрабатывает проблемные участки.',
      'Регулярная коррекция помогает снизить риск повторного врастания и поддерживать комфорт пациента на всех этапах ортониксии.',
    ],
    duration: '30 минут',
    profileUrl: '/uslugi/korrektsiya-titanovoy-niti/',
    priceMin: 5000,
    priceMax: 5000,
    prices: [
      {
        doctorSlug: 'tatiana-solokha',
        priceMin: null,
        priceMax: 5000,
      },
      {
        doctorSlug: 'anna-rekunova',
        priceMin: null,
        priceMax: 5000,
      },
      {
        doctorSlug: 'yana-ionycheva',
        priceMin: null,
        priceMax: 5000,
      },
    ],
  },
  {
    sourceId: 14768776,
    slug: 'nalozhenie-fiksiruyuschego-kompozita',
    name: 'Наложение фиксирующего композита',
    categorySlug: 'ortoniksiya',
    shortDescription:
      'Наложение фиксирующего композита для устранения локальной проблемы, снижения дискомфорта и улучшения функционального состояния.',
    description: [
      'Процедура выполняется после снятия корректирующих систем в качестве стабилизации ногтевой пластины.',
    ],
    duration: '10 минут',
    profileUrl: '/uslugi/nalozhenie-fiksiruyuschego-kompozita/',
    priceMin: 3000,
    priceMax: 3000,
    prices: [
      {
        doctorSlug: 'tatiana-solokha',
        priceMin: null,
        priceMax: 3000,
      },
      {
        doctorSlug: 'anna-rekunova',
        priceMin: null,
        priceMax: 3000,
      },
      {
        doctorSlug: 'yana-ionycheva',
        priceMin: null,
        priceMax: 3000,
      },
    ],
  },
  {
    sourceId: 14672758,
    slug: 'korrektsiya-skob',
    name: 'Коррекция скоб',
    categorySlug: 'ortoniksiya',
    shortDescription: 'Плановая коррекция для поддержания лечебного эффекта и безопасного продолжения курса лечения.',
    description: [
      'Услуга «Коррекция скоб» выполняется на повторных приемах для оценки динамики и точной настройки ранее выбранной тактики.',
      'Специалист обрабатывает проблемную зону и при необходимости корректирует лечебную систему или нагрузку на ткани.',
      'Регулярная коррекция помогает закрепить результат и снизить риск рецидива.',
    ],
    duration: '40 минут',
    profileUrl: '/uslugi/korrektsiya-skob/',
    priceMin: 5000,
    priceMax: 5000,
    prices: [
      {
        doctorSlug: 'tatiana-solokha',
        priceMin: null,
        priceMax: 5000,
      },
      {
        doctorSlug: 'yana-ionycheva',
        priceMin: null,
        priceMax: 5000,
      },
    ],
  },
  {
    sourceId: 14804114,
    slug: 'obrabotka-nogtya-so-skoboy',
    name: 'Обработка ногтя со скобой',
    categorySlug: 'ortoniksiya',
    shortDescription:
      'Обработка ногтя со скобой для устранения локальной проблемы, снижения дискомфорта и улучшения функционального состояния.',
    description: [
      'Услуга «Обработка ногтя со скобой» выполняется после осмотра и направлена на аккуратное устранение текущей проблемы в зоне обращения.',
      'Специалист проводит необходимую обработку с учетом клинической картины и переносимости процедуры пациентом.',
      'По завершении приема даются рекомендации по домашнему уходу и профилактике повторного обострения.',
    ],
    duration: '20 минут',
    profileUrl: '/uslugi/obrabotka-nogtya-so-skoboy/',
    priceMin: 1000,
    priceMax: 2000,
    prices: [
      {
        doctorSlug: 'tatiana-solokha',
        priceMin: 1000,
        priceMax: 2000,
      },
      {
        doctorSlug: 'anna-rekunova',
        priceMin: 1000,
        priceMax: 2000,
      },
      {
        doctorSlug: 'yana-ionycheva',
        priceMin: 1000,
        priceMax: 2000,
      },
    ],
  },
  {
    sourceId: 14671262,
    slug: 'ustanovka-titanovoy-niti',
    name: 'Установка титановой нити',
    categorySlug: 'ortoniksiya',
    shortDescription:
      'Установка корректирующей системы для деликатного выравнивания ногтевой пластины и профилактики повторного врастания.',
    description: [
      'Титановая нить представляет собой тонкую эластичную проволоку из сплава титана и никеля с эффектом памяти формы. Она фиксируется на ногтевой пластине композитом, приподнимает ее края и корректирует рост ногтя без хирургического вмешательства.',
      'Процедура обычно безболезненна и выполняется без анестезии, подходит детям и взрослым.',
      'Установка занимает в среднем 10-15 минут. Нить носится от 3 до 12 месяцев, плановая коррекция проводится в среднем 1 раз в 6-12 недель.',
      'Преимущества: уменьшение боли от давления на околоногтевые валики, профилактика рецидивов онихокриптоза и постепенная коррекция формы ногтевой пластины.',
    ],
    duration: '30 минут',
    profileUrl: '/uslugi/ustanovka-titanovoy-niti/',
    priceMin: 7000,
    priceMax: 7000,
    prices: [
      {
        doctorSlug: 'tatiana-solokha',
        priceMin: null,
        priceMax: 7000,
      },
      {
        doctorSlug: 'anna-rekunova',
        priceMin: null,
        priceMax: 7000,
      },
      {
        doctorSlug: 'yana-ionycheva',
        priceMin: null,
        priceMax: 7000,
      },
    ],
    images: [
      {
        src: withBasePath('/images/services/ustanovka-titanovoy-niti.webp'),
        alt: 'Вид услуги: Установка титановой нити',
      },
    ],
  },
  {
    sourceId: 14670458,
    slug: 'ustanovka-skoby-frezera',
    name: 'Установка скобы Фрезера',
    categorySlug: 'ortoniksiya',
    shortDescription:
      'Установка корректирующей системы для деликатного выравнивания ногтевой пластины и профилактики повторного врастания.',
    description: [
      'Скоба Фрезера - ортониксическая система для коррекции вросших ногтей. Она изготавливается индивидуально из гипоаллергенной медицинской проволоки (0,5 мм, с никелем и хромом) и фиксируется на ногтевой пластине.',
      'Конструкция включает два крючка на концах проволоки, которые заводятся за края ногтя, и центральную петлю «Омега».',
      'Показания: врастание ногтя (онихокриптоз), деформации после травм, рецидивы после операций, скручивание ногтевой пластины. Система подходит для ногтей разной толщины.',
      'Перед установкой подолог подготавливает ноготь, формирует скобу и фиксирует ее. Процедура обычно безболезненна, занимает до 60 минут; далее выполняется плановая коррекция в среднем 1 раз в 8 недель.',
      'Преимущества: без хирургического вмешательства и длительной реабилитации, снижение боли сразу после установки, постепенная коррекция деформированной ногтевой пластины.',
    ],
    duration: '1 ч',
    profileUrl: '/uslugi/ustanovka-skoby-frezera/',
    priceMin: 10000,
    priceMax: 10000,
    prices: [
      {
        doctorSlug: 'tatiana-solokha',
        priceMin: null,
        priceMax: 10000,
      },
      {
        doctorSlug: 'yana-ionycheva',
        priceMin: null,
        priceMax: 10000,
      },
    ],
    images: [
      {
        src: withBasePath('/images/services/ustanovka-skoby-frezera.jpg'),
        alt: 'Вид услуги: Установка скобы Фрезера',
      },
    ],
  },
  {
    sourceId: 14669599,
    slug: 'ustanovka-skoby-zto',
    name: 'Установка скобы 3ТО',
    categorySlug: 'ortoniksiya',
    shortDescription:
      'Установка корректирующей системы для деликатного выравнивания ногтевой пластины и профилактики повторного врастания.',
    description: [
      'Скоба 3ТО представляет собой трехкомпонентную коррекционную систему для лечения вросшего или деформированного ногтя. Она состоит из двух скоб и стягивающего зажима, которые устанавливаются на ногтевую пластину для постепенного выравнивания ее роста.',
      'Система фиксируется под края ногтя, стягивается зажимом и закрепляется композитом. По мере отрастания ногтя выполняется плановая коррекция скобы в среднем 1 раз в 6-8 недель.',
      'Метод помогает уменьшить боль уже после первой установки. Процедура обычно безболезненна и не ограничивает повседневную активность: можно носить привычную обувь, плавать и заниматься спортом.',
      'Преимущества: эффективна при сложных случаях врастания без хирургического вмешательства, способствует правильному росту ногтя, помогает корректировать деформацию и врастание ногтевой пластины.',
    ],
    duration: '1 ч',
    profileUrl: '/uslugi/ustanovka-skoby-zto/',
    priceMin: 8000,
    priceMax: 8000,
    prices: [
      {
        doctorSlug: 'tatiana-solokha',
        priceMin: null,
        priceMax: 8000,
      },
      {
        doctorSlug: 'yana-ionycheva',
        priceMin: null,
        priceMax: 8000,
      },
    ],
    images: [
      {
        src: withBasePath('/images/services/ustanovka-skoby-zto.jpg'),
        alt: 'Вид услуги: Установка скобы 3ТО',
      },
    ],
  },
  {
    sourceId: 14563355,
    slug: 'vyezd-na-dom-k-patsientu-usluga',
    name: 'Выезд на дом к пациенту',
    categorySlug: 'vyezd-na-dom-k-patsientu',
    shortDescription:
      'Выезд специалиста на дом для подологической помощи пациентам, которым сложно посетить клинику лично.',
    description: [
      'Услуга «Выезд на дом к пациенту» предназначена для пациентов, которым необходима подологическая помощь в домашних условиях.',
      'Специалист проводит осмотр, выполняет необходимую обработку и помогает снизить дискомфорт с учетом состояния пациента.',
      'По итогам визита даются рекомендации по уходу и согласовывается план дальнейшего наблюдения при необходимости.',
    ],
    duration: '1 ч',
    profileUrl: '/uslugi/vyezd-na-dom-k-patsientu-usluga/',
    priceMin: 15000,
    priceMax: 20000,
    prices: [
      {
        doctorSlug: 'anna-rekunova',
        priceMin: 15000,
        priceMax: 20000,
      },
    ],
  },
  {
    sourceId: 14659657,
    slug: 'kompleksnyy-podologicheskiy-uhod-pri-onihomikoze-i-dermatomikoze',
    name: 'Комплексный подологический уход при онихомикозе и дерматомикозе',
    categorySlug: 'onihomikoz-dermatomikoz',
    shortDescription: 'Первичная процедура с обработкой стоп и глубокой чисткой ногтей, поврежденных микозом.',
    description: [
      'Комплексный подологический уход при онихомикозе и дерматомикозе проводится на первичном этапе для снижения симптомов и улучшения состояния кожи стоп и ногтей.',
      'Во время процедуры специалист выполняет обработку стоп и глубокую чистку ногтевых пластин, поврежденных микозом, с учетом клинической картины.',
      'После приема пациент получает рекомендации по домашнему уходу и плану последующих визитов для контроля динамики лечения.',
    ],
    duration: '1 ч 20 минут',
    profileUrl: '/uslugi/kompleksnyy-podologicheskiy-uhod-pri-onihomikoze-i-dermatomikoze/',
    priceMin: 7500,
    priceMax: 10000,
    prices: [
      {
        doctorSlug: 'tatiana-solokha',
        priceMin: 8500,
        priceMax: 10000,
      },
      {
        doctorSlug: 'anna-rekunova',
        priceMin: 7500,
        priceMax: 10000,
      },
      {
        doctorSlug: 'yana-ionycheva',
        priceMin: 7500,
        priceMax: 10000,
      },
    ],
  },
  {
    sourceId: 14672477,
    slug: 'chistka-povrezhdennogo-nogtya',
    name: 'Чистка поврежденного ногтя',
    categorySlug: 'onihomikoz-dermatomikoz',
    shortDescription:
      'Чистка поврежденного ногтя для устранения локальной проблемы, снижения дискомфорта и улучшения функционального состояния.',
    description: [
      'Услуга «Чистка поврежденного ногтя» выполняется после осмотра и направлена на аккуратное устранение текущей проблемы в зоне обращения.',
      'Специалист проводит необходимую обработку с учетом клинической картины и переносимости процедуры пациентом.',
      'По завершении приема даются рекомендации по домашнему уходу и профилактике повторного обострения.',
    ],
    duration: '15 минут',
    profileUrl: '/uslugi/chistka-povrezhdennogo-nogtya/',
    priceMin: 2000,
    priceMax: 3000,
    prices: [
      {
        doctorSlug: 'tatiana-solokha',
        priceMin: 2000,
        priceMax: 3000,
      },
      {
        doctorSlug: 'anna-rekunova',
        priceMin: 2000,
        priceMax: 3000,
      },
      {
        doctorSlug: 'yana-ionycheva',
        priceMin: 2000,
        priceMax: 3000,
      },
    ],
  },
  {
    sourceId: 14854949,
    slug: 'analiz-na-patogennye-griby-mikroskopiya',
    name: 'Анализ на патогенные грибы (микроскопия)',
    categorySlug: 'onihomikoz-dermatomikoz',
    shortDescription:
      'Лабораторный анализ на патогенные грибы для уточнения диагноза и подбора эффективной тактики лечения.',
    description: [
      'Услуга «Анализ на патогенные грибы (микроскопия)» проводится для подтверждения или исключения грибковой природы поражения ногтей и кожи стоп.',
      'Исследование помогает врачу объективно оценить клиническую картину и выбрать корректную схему лечения.',
      'Результаты анализа используются для контроля динамики терапии и последующей профилактики рецидивов.',
    ],
    duration: '10 минут',
    profileUrl: '/uslugi/analiz-na-patogennye-griby-mikroskopiya/',
    priceMin: 1500,
    priceMax: 1500,
    prices: [
      {
        doctorSlug: 'tatiana-solokha',
        priceMin: null,
        priceMax: 1500,
      },
      {
        doctorSlug: 'anna-rekunova',
        priceMin: null,
        priceMax: 1500,
      },
      {
        doctorSlug: 'yana-ionycheva',
        priceMin: null,
        priceMax: 1500,
      },
    ],
  },
  {
    sourceId: 14970943,
    slug: 'chistka-povrezhdennyh-nogtey-bez-obrabotki-stop',
    name: 'Чистка поврежденных ногтей (без обработки стоп)',
    categorySlug: 'onihomikoz-dermatomikoz',
    shortDescription:
      'Чистка поврежденных ногтей (без обработки стоп) для устранения локальной проблемы, снижения дискомфорта и улучшения функционального состояния.',
    description: [
      'Услуга «Чистка поврежденных ногтей (без обработки стоп)» выполняется после осмотра и направлена на аккуратное устранение текущей проблемы в зоне обращения.',
      'Специалист проводит необходимую обработку с учетом клинической картины и переносимости процедуры пациентом.',
      'По завершении приема даются рекомендации по домашнему уходу и профилактике повторного обострения.',
    ],
    duration: '1 ч',
    profileUrl: '/uslugi/chistka-povrezhdennyh-nogtey-bez-obrabotki-stop/',
    priceMin: 5500,
    priceMax: 5500,
    prices: [
      {
        doctorSlug: 'tatiana-solokha',
        priceMin: null,
        priceMax: 5500,
      },
      {
        doctorSlug: 'anna-rekunova',
        priceMin: null,
        priceMax: 5500,
      },
      {
        doctorSlug: 'yana-ionycheva',
        priceMin: null,
        priceMax: 5500,
      },
    ],
  },
  {
    sourceId: 14563225,
    slug: 'snyatie-posleoperatsionnyh-shvov',
    name: 'Снятие послеоперационных швов',
    categorySlug: 'vrosshiy-nogot',
    shortDescription: 'Аккуратное снятие и обработка для завершения этапа лечения с сохранением комфорта пациента.',
    description: [
      'Услуга «Снятие послеоперационных швов» проводится, когда необходимо безопасно завершить текущий этап лечения или восстановления.',
      'Специалист выполняет деликатную обработку и оценивает состояние тканей после снятия системы или швов.',
      'После приема пациент получает рекомендации по дальнейшему уходу и профилактике осложнений.',
    ],
    duration: '30 минут',
    profileUrl: '/uslugi/snyatie-posleoperatsionnyh-shvov/',
    priceMin: 2000,
    priceMax: 2000,
    prices: [
      {
        doctorSlug: 'tatiana-solokha',
        priceMin: null,
        priceMax: 2000,
      },
      {
        doctorSlug: 'anna-rekunova',
        priceMin: null,
        priceMax: 2000,
      },
    ],
  },
  {
    sourceId: 14672548,
    slug: 'tamponirovanie',
    name: 'Тампонирование',
    categorySlug: 'vrosshiy-nogot',
    shortDescription:
      'Процедура назначается после удаления вросшего сегмента ногтя, обычно на 3-й день и далее по необходимости.',
    description: [
      'Тампонирование проводится после удаления вросшего сегмента ногтя для мягкой защиты околоногтевого валика и снижения болевых ощущений.',
      'Процедура обычно назначается на 3-й день после вмешательства и далее выполняется по показаниям в рамках динамического наблюдения.',
      'На приеме подолог оценивает заживление тканей, корректирует тактику ухода и дает рекомендации для профилактики повторного воспаления.',
    ],
    duration: '20 минут',
    profileUrl: '/uslugi/tamponirovanie/',
    priceMin: 1000,
    priceMax: 1500,
    prices: [
      {
        doctorSlug: 'tatiana-solokha',
        priceMin: 1000,
        priceMax: 1500,
      },
      {
        doctorSlug: 'anna-rekunova',
        priceMin: 1000,
        priceMax: 1500,
      },
      {
        doctorSlug: 'yana-ionycheva',
        priceMin: 1000,
        priceMax: 1500,
      },
    ],
  },
  {
    sourceId: 14672553,
    slug: 'obrabotka-vrosshego-segmenta-nogtya',
    name: 'Обработка вросшего сегмента ногтя',
    categorySlug: 'vrosshiy-nogot',
    shortDescription:
      'Обработка вросшего сегмента ногтя для устранения локальной проблемы, снижения дискомфорта и улучшения функционального состояния.',
    description: [
      'Услуга «Обработка вросшего сегмента ногтя» выполняется после осмотра и направлена на аккуратное устранение текущей проблемы в зоне обращения.',
      'Специалист проводит необходимую обработку с учетом клинической картины и переносимости процедуры пациентом.',
      'По завершении приема даются рекомендации по домашнему уходу и профилактике повторного обострения.',
    ],
    duration: '30 минут',
    profileUrl: '/uslugi/obrabotka-vrosshego-segmenta-nogtya/',
    priceMin: 3500,
    priceMax: 5000,
    prices: [
      {
        doctorSlug: 'tatiana-solokha',
        priceMin: 4500,
        priceMax: 5000,
      },
      {
        doctorSlug: 'anna-rekunova',
        priceMin: 3500,
        priceMax: 4000,
      },
      {
        doctorSlug: 'yana-ionycheva',
        priceMin: 3500,
        priceMax: 4000,
      },
    ],
  },
  {
    sourceId: 14737721,
    slug: 'tamponirovanie-pri-vrosshem-nogte',
    name: 'Тампонирование (при вросшем ногте)',
    categorySlug: 'vrosshiy-nogot',
    shortDescription:
      'Подологическое тампонирование для разгрузки околоногтевого валика и уменьшения боли при врастании ногтя.',
    description: [
      'Услуга «Тампонирование (при вросшем ногте)» применяется для мягкой коррекции и защиты околоногтевых тканей при врастании ногтевой пластины.',
      'Во время процедуры специалист формирует корректную разгрузку проблемной зоны и снижает травматизацию валика.',
      'Дальнейшая тактика определяется по динамике и может включать повторные обработки или ортониксию.',
    ],
    duration: '15 минут',
    profileUrl: '/uslugi/tamponirovanie-pri-vrosshem-nogte/',
    priceMin: 1000,
    priceMax: 1000,
    prices: [
      {
        doctorSlug: 'tatiana-solokha',
        priceMin: null,
        priceMax: 1000,
      },
      {
        doctorSlug: 'anna-rekunova',
        priceMin: null,
        priceMax: 1000,
      },
      {
        doctorSlug: 'yana-ionycheva',
        priceMin: null,
        priceMax: 1000,
      },
    ],
  },
  {
    sourceId: 15245897,
    slug: 'tamponirovanie-silikonovym-kompozitom',
    name: 'Тампонирование силиконовым композитом',
    categorySlug: 'vrosshiy-nogot',
    shortDescription:
      'Подологическое тампонирование для разгрузки околоногтевого валика и уменьшения боли при врастании ногтя.',
    description: [
      'Услуга «Тампонирование силиконовым композитом» применяется для мягкой коррекции и защиты околоногтевых тканей при врастании ногтевой пластины.',
      'Во время процедуры специалист формирует корректную разгрузку проблемной зоны и снижает травматизацию валика.',
      'Дальнейшая тактика определяется по динамике и может включать повторные обработки или ортониксию.',
    ],
    duration: '15 минут',
    profileUrl: '/uslugi/tamponirovanie-silikonovym-kompozitom/',
    priceMin: 2000,
    priceMax: 2000,
    prices: [
      {
        doctorSlug: 'tatiana-solokha',
        priceMin: 2000,
        priceMax: 2000,
      },
      {
        doctorSlug: 'anna-rekunova',
        priceMin: 2000,
        priceMax: 2000,
      },
    ],
  },
  {
    sourceId: 15330010,
    slug: 'issechenie-granulyatsii',
    name: 'Иссечение грануляции',
    categorySlug: 'vrosshiy-nogot',
    shortDescription:
      'Процедура удаления избыточных грануляций для уменьшения воспаления и подготовки к дальнейшему лечению.',
    description: [
      'Услуга «Иссечение грануляции» проводится при наличии избыточной грануляционной ткани в зоне хронического воспаления.',
      'Процедура направлена на снижение болевого синдрома, уменьшение раздражения и улучшение условий для заживления.',
      'После манипуляции назначаются рекомендации по уходу и контролю состояния на последующих визитах.',
    ],
    duration: '1 ч 30 минут',
    profileUrl: '/uslugi/issechenie-granulyatsii/',
    priceMin: 9000,
    priceMax: 9000,
    prices: [
      {
        doctorSlug: 'dolgan-edgaev',
        priceMin: null,
        priceMax: 9000,
      },
    ],
  },
  {
    sourceId: 20175414,
    slug: 'lechebnyy-massazh',
    name: 'Лечебный массаж',
    categorySlug: 'massazh',
    shortDescription: 'Лечебный массаж для снижения мышечного напряжения, улучшения подвижности и общего самочувствия.',
    description: [
      'Услуга «Лечебный массаж» направлена на мягкую проработку тканей, уменьшение болевых ощущений и восстановление функциональной активности.',
      'Интенсивность и техника воздействия подбираются специалистом по показаниям, текущему состоянию и целям пациента.',
      'По результатам приема могут быть даны рекомендации по домашнему режиму и оптимальной периодичности процедур.',
    ],
    duration: '1-2 ч',
    profileUrl: '/uslugi/lechebnyy-massazh/',
    priceMin: 6000,
    priceMax: 12000,
    prices: [
      {
        doctorSlug: 'viktor-bembeev',
        priceMin: 6000,
        priceMax: 12000,
      },
    ],
  },
  {
    sourceId: 14672774,
    slug: 'osteopaticheskaya-korrektsiya-tela',
    name: 'Остеопатическая коррекция тела',
    categorySlug: 'osteopatiya',
    shortDescription: 'Плановая коррекция для поддержания лечебного эффекта и безопасного продолжения курса лечения.',
    description: [
      'Услуга «Остеопатическая коррекция тела» выполняется на повторных приемах для оценки динамики и точной настройки ранее выбранной тактики.',
      'Специалист обрабатывает проблемную зону и при необходимости корректирует лечебную систему или нагрузку на ткани.',
      'Регулярная коррекция помогает закрепить результат и снизить риск рецидива.',
    ],
    duration: '1 ч 30 минут',
    profileUrl: '/uslugi/osteopaticheskaya-korrektsiya-tela/',
    priceMin: 9000,
    priceMax: 9000,
    prices: [
      {
        doctorSlug: 'dolgan-edgaev',
        priceMin: null,
        priceMax: 9000,
      },
    ],
  },
  {
    sourceId: 14672816,
    slug: 'izgotovlenie-stelek-formthotics',
    name: 'Изготовление индивидуальных стелек Formthotics (система коррекции осанки)',
    categorySlug: 'osteopatiya',
    shortDescription:
      'Индивидуальное изготовление изделия с учетом анатомических особенностей и лечебных задач пациента.',
    description: [
      'Услуга «Изготовление индивидуальных стелек Formthotics (система коррекции осанки)» выполняется после оценки состояния и определения зон, требующих коррекции нагрузки.',
      'Специалист подбирает конструкцию и параметры изделия для комфортного использования в повседневной активности.',
      'После изготовления даются рекомендации по адаптации, уходу и контролю эффективности в динамике.',
    ],
    duration: '1 ч',
    profileUrl: '/uslugi/izgotovlenie-stelek-formthotics/',
    priceMin: 13000,
    priceMax: 13000,
    prices: [
      {
        doctorSlug: 'dolgan-edgaev',
        priceMin: null,
        priceMax: 13000,
      },
    ],
  },
  {
    sourceId: 18873378,
    slug: 'konsultatsiya-ortopeda-osteopata',
    name: 'Консультация врача ортопеда-остеопата',
    categorySlug: 'osteopatiya',
    shortDescription:
      'Консультационный прием для оценки состояния, постановки задач лечения и выбора персональной тактики ведения.',
    description: [
      'На услуге «Консультация врача ортопеда-остеопата» специалист проводит осмотр, анализирует жалобы и формирует клинические приоритеты лечения.',
      'Пациент получает разъяснение причин симптомов, план процедур и рекомендации по домашнему уходу.',
      'При необходимости назначаются дополнительные обследования и определяется график контрольных визитов.',
    ],
    duration: '30 минут',
    profileUrl: '/uslugi/konsultatsiya-ortopeda-osteopata/',
    priceMin: 4000,
    priceMax: 4000,
    prices: [
      {
        doctorSlug: 'dolgan-edgaev',
        priceMin: null,
        priceMax: 4000,
      },
    ],
  },
  {
    sourceId: 18873558,
    slug: 'plazmodinamicheskoe-vozdeystvie-protsedura-na-apparate-gelios',
    name: 'Плазмодинамическое воздействие на аппарате «Гелиос»',
    categorySlug: 'plazmodinamicheskoe-vozdeystvie-gelios',
    shortDescription:
      'Короткая процедура плазмодинамического воздействия на аппарате «Гелиос» для локальной обработки проблемной зоны. Тарификация по минутам.',
    description: [
      'Плазмодинамическое воздействие на аппарате «Гелиос» (тарификация по минутам) применяется для локальной обработки выбранной зоны по назначению специалиста.',
      'Процедура помогает активизировать восстановительные процессы в тканях и дополняет основной план лечения или эстетической коррекции.',
      'Количество минут и итоговый объем воздействия определяются на приеме индивидуально, исходя из клинической задачи.',
    ],
    duration: '1 минута',
    profileUrl: '/uslugi/plazmodinamicheskoe-vozdeystvie-protsedura-na-apparate-gelios/',
    priceMin: 500,
    priceMax: 500,
    prices: [
      {
        doctorSlug: 'tatiana-solokha',
        priceMin: null,
        priceMax: 500,
      },
      {
        doctorSlug: 'anna-rekunova',
        priceMin: null,
        priceMax: 500,
      },
      {
        doctorSlug: 'yana-ionycheva',
        priceMin: null,
        priceMax: 500,
      },
    ],
  },
  {
    sourceId: 18881817,
    slug: 'plazmodinamicheskoe-vozdeystvie-plazmennyy-lifting-vek-obrabotka-10-min-kazhdoe-veko-na-apparate-gelios-holodnaya-plazma',
    name: 'Плазмодинамическое воздействие: плазменный лифтинг век (10 минут на каждое веко), аппарат «Гелиос»',
    categorySlug: 'plazmodinamicheskoe-vozdeystvie-gelios',
    shortDescription:
      'Плазменный лифтинг век на аппарате «Гелиос» для повышения тонуса кожи и уменьшения возрастных изменений периорбитальной зоны.',
    description: [
      'Плазмодинамическое воздействие на аппарате «Гелиос» выполняется по протоколу лифтинга век и направлено на деликатную стимуляцию кожи периорбитальной области.',
      'Процедура помогает улучшить качество кожи, повысить ее упругость и уменьшить выраженность мелких возрастных изменений вокруг глаз.',
      'Курс и периодичность сеансов подбираются индивидуально после осмотра специалиста с учетом состояния кожи и ожидаемого результата.',
    ],
    duration: '40 минут',
    profileUrl:
      '/uslugi/plazmodinamicheskoe-vozdeystvie-plazmennyy-lifting-vek-obrabotka-10-min-kazhdoe-veko-na-apparate-gelios-holodnaya-plazma/',
    priceMin: 8000,
    priceMax: 8000,
    prices: [
      {
        doctorSlug: 'tatiana-solokha',
        priceMin: null,
        priceMax: 8000,
      },
      {
        doctorSlug: 'anna-rekunova',
        priceMin: null,
        priceMax: 8000,
      },
    ],
  },
  {
    sourceId: 18971482,
    slug: 'plazmodinamicheskoe-vozdeystvie-plazmennoe-omolozhenie-litsa-antikuperoz-profilaktika-rozatsei-na-apparate-gelios-holodnaya-plazma',
    name: 'Плазмодинамическое воздействие: плазменное омоложение лица (антикупероз, профилактика розацеа), аппарат «Гелиос»',
    categorySlug: 'plazmodinamicheskoe-vozdeystvie-gelios',
    shortDescription:
      'Плазмодинамическое омоложение лица при склонности к куперозу и розацеа для выравнивания тона кожи и снижения реактивности.',
    description: [
      'Процедура на аппарате «Гелиос» по протоколу антикупероза и профилактики розацеа направлена на деликатную работу с сосудистой реактивностью кожи лица.',
      'Плазмодинамическое воздействие помогает улучшить микрорельеф, сделать тон кожи более ровным и уменьшить выраженность покраснений.',
      'Курс и интервалы между процедурами подбираются специалистом индивидуально после осмотра и оценки текущего состояния кожи.',
    ],
    duration: '1 ч',
    profileUrl:
      '/uslugi/plazmodinamicheskoe-vozdeystvie-plazmennoe-omolozhenie-litsa-antikuperoz-profilaktika-rozatsei-na-apparate-gelios-holodnaya-plazma/',
    priceMin: 10000,
    priceMax: 10000,
    prices: [
      {
        doctorSlug: 'tatiana-solokha',
        priceMin: null,
        priceMax: 10000,
      },
      {
        doctorSlug: 'anna-rekunova',
        priceMin: null,
        priceMax: 10000,
      },
    ],
  },
  {
    sourceId: 18971519,
    slug: 'plazmodinamicheskoe-vozdeystvie-plazmennoe-omolozhenie-litsa-suhaya-kozha-na-apparate-gelios-holodnaya-plazma',
    name: 'Плазмодинамическое воздействие: плазменное омоложение лица (сухая кожа), аппарат «Гелиос»',
    categorySlug: 'plazmodinamicheskoe-vozdeystvie-gelios',
    shortDescription:
      'Плазмодинамическое омоложение для сухой кожи лица, направленное на повышение увлажненности, тонуса и улучшение качества кожи.',
    description: [
      'Процедура на аппарате «Гелиос» по протоколу для сухой кожи лица помогает деликатно стимулировать обновление и восстановление кожного барьера.',
      'Плазмодинамическое воздействие способствует улучшению текстуры кожи, повышению ее упругости и уменьшению ощущения сухости и стянутости.',
      'Оптимальное количество сеансов и интервалы между ними определяются специалистом индивидуально после очной оценки состояния кожи.',
    ],
    duration: '1 ч',
    profileUrl:
      '/uslugi/plazmodinamicheskoe-vozdeystvie-plazmennoe-omolozhenie-litsa-suhaya-kozha-na-apparate-gelios-holodnaya-plazma/',
    priceMin: 10000,
    priceMax: 10000,
    prices: [
      {
        doctorSlug: 'tatiana-solokha',
        priceMin: null,
        priceMax: 10000,
      },
      {
        doctorSlug: 'anna-rekunova',
        priceMin: null,
        priceMax: 10000,
      },
    ],
  },
  {
    sourceId: 18971541,
    slug: 'plazmodinamicheskoe-vozdeystvie-plazmennoe-omolozhenie-litsa-zhirnaya-kozha-na-apparate-gelios-holodnaya-plazma',
    name: 'Плазмодинамическое воздействие: плазменное омоложение лица (жирная кожа), аппарат «Гелиос»',
    categorySlug: 'plazmodinamicheskoe-vozdeystvie-gelios',
    shortDescription:
      'Плазмодинамическое омоложение для жирной кожи лица для нормализации себорегуляции и улучшения текстуры кожи.',
    description: [
      'Процедура на аппарате «Гелиос» по протоколу для жирной кожи лица направлена на бережную коррекцию качества кожи и уменьшение выраженности несовершенств.',
      'Плазмодинамическое воздействие помогает улучшить рельеф кожи, снизить выраженность воспалительных элементов и сделать тон лица более ровным.',
      'Курс и частота сеансов подбираются специалистом индивидуально с учетом типа кожи, клинической картины и задач пациента.',
    ],
    duration: '1 ч',
    profileUrl:
      '/uslugi/plazmodinamicheskoe-vozdeystvie-plazmennoe-omolozhenie-litsa-zhirnaya-kozha-na-apparate-gelios-holodnaya-plazma/',
    priceMin: 10000,
    priceMax: 10000,
    prices: [
      {
        doctorSlug: 'tatiana-solokha',
        priceMin: null,
        priceMax: 10000,
      },
      {
        doctorSlug: 'anna-rekunova',
        priceMin: null,
        priceMax: 10000,
      },
    ],
  },
  {
    sourceId: 18971558,
    slug: 'plazmodinamicheskoe-vozdeystvie-lechenie-rubtsov-postakne-na-apparate-gelios-holodnaya-plazma',
    name: 'Плазмодинамическое воздействие: лечение рубцов постакне, аппарат «Гелиос»',
    categorySlug: 'plazmodinamicheskoe-vozdeystvie-gelios',
    shortDescription:
      'Плазмодинамическая процедура для коррекции рубцов постакне и улучшения рельефа кожи на аппарате «Гелиос».',
    description: [
      'Процедура на аппарате «Гелиос» применяется для работы с рубцовыми изменениями после акне и направлена на постепенное выравнивание текстуры кожи.',
      'Плазмодинамическое воздействие помогает стимулировать регенерацию тканей, уменьшить выраженность постакне и улучшить общий тон и рельеф кожи.',
      'Курс процедур и интервалы между сеансами определяются специалистом индивидуально с учетом глубины и характера рубцовых изменений.',
    ],
    duration: '1 ч',
    profileUrl:
      '/uslugi/plazmodinamicheskoe-vozdeystvie-lechenie-rubtsov-postakne-na-apparate-gelios-holodnaya-plazma/',
    priceMin: 10000,
    priceMax: 10000,
    prices: [
      {
        doctorSlug: 'tatiana-solokha',
        priceMin: null,
        priceMax: 10000,
      },
      {
        doctorSlug: 'anna-rekunova',
        priceMin: null,
        priceMax: 10000,
      },
    ],
  },
  {
    sourceId: 18971584,
    slug: 'plazmodinamicheskoe-vozdeystvie-obrabotka-nogtey-i-kozhi-vokrug-na-apparate-gelios-holodnaya-plazma',
    name: 'Плазмодинамическое воздействие: обработка ногтей и кожи вокруг, аппарат «Гелиос»',
    categorySlug: 'plazmodinamicheskoe-vozdeystvie-gelios',
    shortDescription:
      'Воздействие плазменным лучом на корень ногтя и ногтевое ложе (после чистки) для стимуляции регенерации и восстановления качества ногтевой пластины. Область применения: псориаз ногтей, онихомикоз, онихолизис, ожоги ногтевых пластин, в том числе после химиотерапии.',
    description: [
      'Плазмодинамическое воздействие в зоне ногтей и околоногтевой кожи выполняется на аппарате «Гелиос» после предварительной подологической обработки.',
      'Процедура помогает стимулировать регенерацию тканей, улучшить состояние ногтевой пластины и поддержать восстановление при онихомикозе, онихолизисе и других повреждениях ногтя.',
      'Курс и периодичность сеансов подбираются специалистом индивидуально с учетом диагноза, выраженности изменений и динамики лечения.',
    ],
    duration: '45 минут',
    profileUrl:
      '/uslugi/plazmodinamicheskoe-vozdeystvie-obrabotka-nogtey-i-kozhi-vokrug-na-apparate-gelios-holodnaya-plazma/',
    priceMin: 8000,
    priceMax: 8000,
    prices: [
      {
        doctorSlug: 'tatiana-solokha',
        priceMin: null,
        priceMax: 8000,
      },
      {
        doctorSlug: 'anna-rekunova',
        priceMin: null,
        priceMax: 8000,
      },
      {
        doctorSlug: 'yana-ionycheva',
        priceMin: null,
        priceMax: 8000,
      },
    ],
  },
  {
    sourceId: 25528962,
    slug: 'nanesenie-syvorotki',
    name: 'Нанесение сыворотки',
    categorySlug: 'plazmodinamicheskoe-vozdeystvie-gelios',
    shortDescription:
      'Нанесение активной сыворотки для усиления эффекта процедуры и дополнительного ухода за кожей или ногтевой зоной.',
    description: [
      'Нанесение сыворотки выполняется как дополнительный этап ухода после аппаратной или подологической обработки.',
      'Активные компоненты подбираются по показаниям и помогают поддержать восстановление тканей, увлажнение и комфорт кожи.',
      'Процедура усиливает общий эффект основного протокола и дополняется индивидуальными рекомендациями по домашнему уходу.',
    ],
    duration: '30 минут',
    profileUrl: '/uslugi/nanesenie-syvorotki/',
    priceMin: 1000,
    priceMax: 1000,
    prices: [
      {
        doctorSlug: 'tatiana-solokha',
        priceMin: null,
        priceMax: 1000,
      },
      {
        doctorSlug: 'anna-rekunova',
        priceMin: null,
        priceMax: 1000,
      },
      {
        doctorSlug: 'yana-ionycheva',
        priceMin: null,
        priceMax: 1000,
      },
    ],
  },
  {
    sourceId: 20396070,
    slug: 'ozonoterapiya-metodom-gazatsii-1-stopa',
    name: 'Озонотерапия методом газации 1 стопа',
    categorySlug: 'ozonoterapiya',
    shortDescription:
      'Процедура озонотерапии для улучшения микроциркуляции, снижения воспалительной нагрузки и ускорения восстановления тканей.',
    description: [
      'Услуга «Озонотерапия методом газации 1 стопа» применяется как часть комплексной программы восстановления в зависимости от клинической задачи.',
      'Метод направлен на улучшение местного кровообращения, снижение отечности и поддержку регенеративных процессов.',
      'Формат и курс процедур подбираются специалистом индивидуально по показаниям и динамике состояния.',
    ],
    duration: '30 минут',
    profileUrl: '/uslugi/ozonoterapiya-metodom-gazatsii-1-stopa/',
    priceMin: 3000,
    priceMax: 3000,
    prices: [
      {
        doctorSlug: 'natali-golikova',
        priceMin: null,
        priceMax: 3000,
      },
      {
        doctorSlug: 'tatiana-solokha',
        priceMin: null,
        priceMax: 3000,
      },
      {
        doctorSlug: 'yana-ionycheva',
        priceMin: null,
        priceMax: 3000,
      },
    ],
  },
  {
    sourceId: 19951103,
    slug: 'ozonoterapiya-metodom-gazatsii-2-stopy',
    name: 'Озонотерапия методом газации 2 стопы',
    categorySlug: 'ozonoterapiya',
    shortDescription:
      'Процедура озонотерапии для улучшения микроциркуляции, снижения воспалительной нагрузки и ускорения восстановления тканей.',
    description: [
      'Услуга «Озонотерапия методом газации 2 стопы» применяется как часть комплексной программы восстановления в зависимости от клинической задачи.',
      'Метод направлен на улучшение местного кровообращения, снижение отечности и поддержку регенеративных процессов.',
      'Формат и курс процедур подбираются специалистом индивидуально по показаниям и динамике состояния.',
    ],
    duration: '40 минут',
    profileUrl: '/uslugi/ozonoterapiya-metodom-gazatsii-2-stopy/',
    priceMin: 5000,
    priceMax: 5000,
    prices: [
      {
        doctorSlug: 'natali-golikova',
        priceMin: null,
        priceMax: 5000,
      },
      {
        doctorSlug: 'tatiana-solokha',
        priceMin: null,
        priceMax: 5000,
      },
      {
        doctorSlug: 'anna-rekunova',
        priceMin: null,
        priceMax: 5000,
      },
    ],
  },
  {
    sourceId: 19963205,
    slug: 'ozonoterapiya-metodom-rektalnoy-insufflyatsii',
    name: 'Озонотерапия методом ректальной инсуффляции',
    categorySlug: 'ozonoterapiya',
    shortDescription:
      'Процедура озонотерапии для улучшения микроциркуляции, снижения воспалительной нагрузки и ускорения восстановления тканей.',
    description: [
      'Услуга «Озонотерапия методом ректальной инсуффляции» применяется как часть комплексной программы восстановления в зависимости от клинической задачи.',
      'Метод направлен на улучшение местного кровообращения, снижение отечности и поддержку регенеративных процессов.',
      'Формат и курс процедур подбираются специалистом индивидуально по показаниям и динамике состояния.',
    ],
    duration: '45 минут',
    profileUrl: '/uslugi/ozonoterapiya-metodom-rektalnoy-insufflyatsii/',
    priceMin: 4000,
    priceMax: 4000,
    prices: [
      {
        doctorSlug: 'natali-golikova',
        priceMin: null,
        priceMax: 4000,
      },
      {
        doctorSlug: 'tatiana-solokha',
        priceMin: null,
        priceMax: 4000,
      },
    ],
  },
  {
    sourceId: 20427177,
    slug: 'tsellyulit',
    name: 'Целлюлит',
    categorySlug: 'ozonoterapiya',
    shortDescription:
      'Инъекционное введение озоно-кислородной смеси в проблемные зоны. Периодичность: 1-2 раза в неделю курсом по индивидуальной схеме.',
    description: [
      'Озонотерапия при целлюлите проводится методом инъекционного введения озоно-кислородной смеси в проблемные зоны для улучшения локальной микроциркуляции.',
      'Процедура помогает уменьшить выраженность застойных явлений, улучшить качество кожи и поддержать комплексную программу коррекции контуров тела.',
      'Курс обычно проводится 1-2 раза в неделю по индивидуальной схеме, с последующими поддерживающими сеансами по рекомендации специалиста.',
    ],
    duration: '45 минут',
    profileUrl: '/uslugi/tsellyulit/',
    priceMin: 5000,
    priceMax: 5000,
    prices: [
      {
        doctorSlug: 'natali-golikova',
        priceMin: null,
        priceMax: 5000,
      },
      {
        doctorSlug: 'tatiana-solokha',
        priceMin: null,
        priceMax: 5000,
      },
    ],
  },
  {
    sourceId: 20520546,
    slug: 'metodom-vvedeniya-vnutrivenno-ozonirovannogo-fizrastvora',
    name: 'Методом введения внутривенно озонированного физраствора',
    categorySlug: 'ozonoterapiya',
    shortDescription:
      'Системная озонотерапия для поддержки восстановительных процессов, снижения воспалительной нагрузки и активации иммунного ответа.',
    description: [
      'Процедура выполняется методом трех игл: в вену вводится физраствор, обогащенный озоно-кислородной смесью.',
      'Рекомендуемый курс составляет 6-8 процедур с частотой 1-2 раза в неделю; поддерживающие курсы назначаются по показаниям.',
    ],
    duration: '1 ч',
    profileUrl: '/uslugi/metodom-vvedeniya-vnutrivenno-ozonirovannogo-fizrastvora/',
    priceMin: 6500,
    priceMax: 6500,
    prices: [
      {
        doctorSlug: 'natali-golikova',
        priceMin: null,
        priceMax: 6500,
      },
    ],
  },
  {
    sourceId: 20578650,
    slug: 'ozonoterapii-metodom-gazatsii-vypadenie-volos',
    name: 'Озонотерапия методом газации (выпадение волос)',
    categorySlug: 'ozonoterapiya',
    shortDescription:
      'Озонотерапия кожи головы при выпадении волос для стимуляции роста, улучшения микроциркуляции и снижения воспалительной нагрузки.',
    description: [
      'Процедура выполняется на чистые волосы: под специальную шапочку подается озоно-кислородная смесь заданной концентрации для мягкого воздействия на кожу головы.',
      'Метод направлен на улучшение микроциркуляции, снижение выраженности патологического выпадения и стимуляцию роста волос.',
      'По завершении сеанса наносится специализированный лосьон, а курс процедур подбирается индивидуально по показаниям и динамике состояния.',
    ],
    duration: '45 минут',
    profileUrl: '/uslugi/ozonoterapii-metodom-gazatsii-vypadenie-volos/',
    priceMin: 3500,
    priceMax: 5000,
    prices: [
      {
        doctorSlug: 'natali-golikova',
        priceMin: 3500,
        priceMax: 5000,
      },
    ],
  },
  {
    sourceId: 21646844,
    slug: 'ozonoteraapiya-metodom-gazatsii-sluhovye-i-nosovye-prohody',
    name: 'Озонотерапия методом газации (слуховые и носовые проходы)',
    categorySlug: 'ozonoterapiya',
    shortDescription:
      'Локальная озонотерапия слуховых и носовых проходов для снижения воспаления и подавления патогенной микрофлоры.',
    description: [
      'Процедура выполняется безыгольным способом: озоно-кислородная смесь деликатно вводится в слуховые и носовые проходы по назначению специалиста.',
      'Метод применяется в составе комплексной терапии при воспалительных состояниях ЛОР-зоны, в том числе при синусите, отите и локальных инфекционных процессах.',
      'Озонотерапия помогает снизить воспалительную нагрузку, подавить патогенную флору и ускорить восстановление слизистых оболочек.',
    ],
    duration: '15 минут',
    profileUrl: '/uslugi/ozonoteraapiya-metodom-gazatsii-sluhovye-i-nosovye-prohody/',
    priceMin: 1500,
    priceMax: 1500,
    prices: [
      {
        doctorSlug: 'natali-golikova',
        priceMin: null,
        priceMax: 1500,
      },
      {
        doctorSlug: 'tatiana-solokha',
        priceMin: null,
        priceMax: 1500,
      },
    ],
  },
  {
    sourceId: 21646847,
    slug: 'magt',
    name: 'МАГТ',
    categorySlug: 'ozonoterapiya',
    shortDescription:
      'МАГТ-процедура с озоно-кислородной смесью для снижения воспалительной нагрузки и поддержки восстановительных процессов.',
    description: [
      'МАГТ выполняется с использованием собственной крови пациента, которая обогащается озоно-кислородной смесью и вводится по протоколу процедуры.',
      'Метод применяется в составе комплексной терапии для снижения воспалительных проявлений и активации восстановительных процессов организма.',
      'Схема и периодичность сеансов подбираются индивидуально специалистом с учетом диагноза, сопутствующих состояний и динамики лечения.',
    ],
    duration: '1 ч',
    profileUrl: '/uslugi/magt/',
    priceMin: 5000,
    priceMax: 5000,
    prices: [
      {
        doctorSlug: 'natali-golikova',
        priceMin: null,
        priceMax: 5000,
      },
    ],
  },
  {
    sourceId: 23353599,
    slug: 'inektsionnoe-omolozhenie-kistey-ruk-ozono-islorodnoy-smesyu',
    name: 'Инъекционное омоложение кистей рук озоно-кислородной смесью',
    categorySlug: 'ozonoterapiya',
    shortDescription:
      'Инъекционное омоложение кистей рук озоно-кислородной смесью с индивидуальным подбором тактики и рекомендациями по дальнейшему уходу.',
    description: [
      'Услуга «Инъекционное омоложение кистей рук озоно-кислородной смесью» проводится по показаниям после очной оценки состояния.',
      'Во время приема специалист выполняет необходимые манипуляции с учетом клинической задачи и текущей динамики.',
      'По итогам процедуры пациент получает персональные рекомендации и план дальнейшего наблюдения при необходимости.',
    ],
    duration: '15 минут',
    profileUrl: '/uslugi/inektsionnoe-omolozhenie-kistey-ruk-ozono-islorodnoy-smesyu/',
    priceMin: 3000,
    priceMax: 3000,
    prices: [
      {
        doctorSlug: 'natali-golikova',
        priceMin: null,
        priceMax: 3000,
      },
      {
        doctorSlug: 'tatiana-solokha',
        priceMin: null,
        priceMax: 3000,
      },
    ],
  },
  {
    sourceId: 23701143,
    slug: 'ozonoterapiya-metodom-ofr-gazatsiya-stop',
    name: 'Озонотерапия методом ОФР + газация стоп',
    categorySlug: 'ozonoterapiya',
    shortDescription:
      'Процедура озонотерапии для улучшения микроциркуляции, снижения воспалительной нагрузки и ускорения восстановления тканей.',
    description: [
      'Услуга «Озонотерапия методом ОФР + газация стоп» применяется как часть комплексной программы восстановления в зависимости от клинической задачи.',
      'Метод направлен на улучшение местного кровообращения, снижение отечности и поддержку регенеративных процессов.',
      'Формат и курс процедур подбираются специалистом индивидуально по показаниям и динамике состояния.',
    ],
    duration: '1 ч 40 минут',
    profileUrl: '/uslugi/ozonoterapiya-metodom-ofr-gazatsiya-stop/',
    priceMin: 9500,
    priceMax: 9500,
    prices: [
      {
        doctorSlug: 'natali-golikova',
        priceMin: null,
        priceMax: 9500,
      },
    ],
  },
  {
    sourceId: 21646795,
    slug: 'gigienicheskiy-manikyur',
    name: 'Гигиенический маникюр',
    categorySlug: 'uhod-za-rukami',
    shortDescription:
      'Гигиенический маникюр для устранения локальной проблемы, снижения дискомфорта и улучшения функционального состояния.',
    description: [
      'Услуга «Гигиенический маникюр» выполняется после осмотра и направлена на аккуратное устранение текущей проблемы в зоне обращения.',
      'Специалист проводит необходимую обработку с учетом клинической картины и переносимости процедуры пациентом.',
      'По завершении приема даются рекомендации по домашнему уходу и профилактике повторного обострения.',
    ],
    duration: '1 ч',
    profileUrl: '/uslugi/gigienicheskiy-manikyur/',
    priceMin: 3500,
    priceMax: 3500,
    prices: [
      {
        doctorSlug: 'yana-ionycheva',
        priceMin: null,
        priceMax: 3500,
      },
    ],
  },
  {
    sourceId: 21646821,
    slug: 'apparatnoe-omolozhenie-kistey-ruk-plazmodinamicheskim-vozdeystviem',
    name: 'Аппаратное омоложение кистей рук плазмодинамическим воздействием',
    categorySlug: 'uhod-za-rukami',
    shortDescription:
      'Аппаратное омоложение кистей рук плазмодинамическим воздействием с индивидуальным подбором тактики и рекомендациями по дальнейшему уходу.',
    description: [
      'Услуга «Аппаратное омоложение кистей рук плазмодинамическим воздействием» проводится по показаниям после очной оценки состояния.',
      'Во время приема специалист выполняет необходимые манипуляции с учетом клинической задачи и текущей динамики.',
      'По итогам процедуры пациент получает персональные рекомендации и план дальнейшего наблюдения при необходимости.',
    ],
    duration: '30 минут',
    profileUrl: '/uslugi/apparatnoe-omolozhenie-kistey-ruk-plazmodinamicheskim-vozdeystviem/',
    priceMin: 5000,
    priceMax: 5000,
    prices: [
      {
        doctorSlug: 'tatiana-solokha',
        priceMin: null,
        priceMax: 5000,
      },
      {
        doctorSlug: 'anna-rekunova',
        priceMin: null,
        priceMax: 5000,
      },
      {
        doctorSlug: 'yana-ionycheva',
        priceMin: null,
        priceMax: 5000,
      },
    ],
  },
  {
    sourceId: 26191020,
    slug: 'aerodinamicheskiy-massazh-piling',
    name: 'Аэродинамический массаж/пилинг',
    categorySlug: 'kosmetologiya-trihologiya',
    shortDescription:
      'Аппаратный аэродинамический массаж и пилинг для глубокого лимфодренажа, улучшения рельефа и мягкого обновления кожи.',
    description: [
      'Процедура сочетает аппаратный миофасциальный массаж и аэродинамический пилинг для комплексной работы с качеством кожи лица.',
      'Массажный этап обеспечивает выраженный лимфодренаж, улучшает микроциркуляцию и помогает глубоко проработать мягкие ткани лица.',
      'Пилинг выполняется атравматично, без длительной реабилитации, и способствует выравниванию рельефа и повышению тонуса кожи.',
    ],
    duration: '30 минут',
    profileUrl: '/uslugi/aerodinamicheskiy-massazh-piling/',
    priceMin: 5000,
    priceMax: 5000,
    prices: [
      {
        doctorSlug: 'natali-golikova',
        priceMin: null,
        priceMax: 5000,
      },
    ],
  },
  {
    sourceId: 26191031,
    slug: 'aerodinamicheskaya-infuziya',
    name: 'Аэродинамическая инфузия',
    categorySlug: 'kosmetologiya-trihologiya',
    shortDescription:
      'Аэродинамическая инфузия для глубокой трансдермальной доставки активных компонентов без травматизации кожи.',
    description: [
      'Аэродинамическая инфузия обеспечивает доставку активных компонентов в глубокие слои кожи без инъекций и повреждения поверхности.',
      'Технология сочетает высокочастотное воздействие и направленный поток кислорода, что помогает улучшить тонус, увлажненность и качество кожи.',
      'Состав активных средств и параметры процедуры подбираются специалистом индивидуально в зависимости от состояния кожи и поставленных задач.',
    ],
    duration: '30 минут',
    profileUrl: '/uslugi/aerodinamicheskaya-infuziya/',
    priceMin: 6500,
    priceMax: 6500,
    prices: [
      {
        doctorSlug: 'natali-golikova',
        priceMin: null,
        priceMax: 6500,
      },
    ],
  },
  {
    sourceId: 26191045,
    slug: 'kompleksnoe-aerodinamicheskoe-vozdeystvie-massazh-piling-infuziya',
    name: 'Комплексное аэродинамическое воздействие (массаж, пилинг, инфузия)',
    categorySlug: 'kosmetologiya-trihologiya',
    shortDescription:
      'Комплексная аэродинамическая процедура, объединяющая массаж, пилинг и инфузию для выраженного обновления и улучшения качества кожи.',
    description: [
      'Комплексное аэродинамическое воздействие сочетает три этапа в одной процедуре: аппаратный миофасциальный массаж, атравматичный пилинг и инфузионную доставку активных компонентов.',
      'Показания к применению: возрастные изменения (морщины, потеря упругости, отечность), проблемная кожа (акне, постакне, гиперпигментация, купероз, неровный рельеф), а также увлажнение и подготовка к процедурам как альтернатива мезотерапии.',
      'Эффекты и преимущества: улучшение микроциркуляции, повышение синтеза коллагена и эластина (до 20% плотности дермы), осветление пигмента и сокращение времени массажа в 5-6 раз. Первые результаты заметны после 1 сеанса, накопительный лифтинг-эффект — после 5 процедур.',
      'SkinHale применяется и в трихологии для ухода за волосистой частью головы благодаря аэродинамической доставке активных веществ в устья волосяных фолликулов.',
      'Эффекты для волос: снижение выпадения, стимуляция роста, очищение устьев фолликулов и уменьшение проявлений себорейного дерматита. Технология использует микрокапли на сверхзвуковой скорости и вибрации для улучшения питания тканей и микроциркуляции кожи головы.',
      'Механизм работы: манипулы создают поток воздуха с активными гелями, которые проникают в протоки сальных и волосяных желез на глубину до 2,5 мм без инъекций.',
    ],
    images: [
      {
        src: '/images/about/equipment-1.webp',
        alt: 'Аэродинамическая процедура SkinHale',
        caption: 'Аппарат SkinHale для аэродинамических процедур',
      },
    ],
    duration: '55 минут',
    profileUrl: '/uslugi/kompleksnoe-aerodinamicheskoe-vozdeystvie-massazh-piling-infuziya/',
    priceMin: 10500,
    priceMax: 10500,
    prices: [
      {
        doctorSlug: 'natali-golikova',
        priceMin: null,
        priceMax: 10500,
      },
    ],
  },
  {
    sourceId: 26248650,
    slug: 'girudoterapiya-usluga',
    name: 'Гирудотерапия',
    categorySlug: 'girudoterapiya',
    shortDescription:
      'Вагинальная гирудотерапия в составе комплексного лечения для улучшения кровообращения в органах малого таза и снижения воспалительных проявлений.',
    description: [
      'Вагинальная гирудотерапия применяется в составе комплексного лечения гинекологических состояний: помогает уменьшить воспаление, улучшить кровообращение в органах малого таза и снизить выраженность спаечного процесса.',
      'Метод может быть рекомендован при эндометриозе, миоме матки, аднекситах, спаечном процессе, нарушениях менструального цикла, некоторых формах бесплодия, а также при подготовке к программам ЭКО.',
      'Во время сеанса врач устанавливает 2-5 медицинских пиявок интравагинально или на рефлексогенные зоны без анестезии; процедура обычно переносится комфортно, длится 20-60 минут. Курс в среднем составляет 7-10 процедур с интервалом 4-7 дней и подбирается индивидуально по показаниям.',
      'Слюна пиявок усиливает микроциркуляцию, снимает воспаление и стимулирует иммунитет.',
    ],
    duration: '1 ч 30 минут',
    profileUrl: '/uslugi/girudoterapiya-usluga/',
    priceMin: 6500,
    priceMax: 6500,
    prices: [
      {
        doctorSlug: 'natali-golikova',
        priceMin: 6500,
        priceMax: 6500,
      },
    ],
  },
]

const RUB_FORMATTER = new Intl.NumberFormat('ru-RU')

export function findServiceBySlug(slug: string) {
  return services.find((service) => service.slug === slug)
}

export function getServiceCategoryBySlug(slug: string) {
  return serviceCategories.find((category) => category.slug === slug)
}

export function getServicesByCategory(categorySlug: string) {
  return services.filter((service) => service.categorySlug === categorySlug)
}

export function findServicesByDoctorSlug(doctorSlug: string) {
  const doctorServices: Array<DoctorService> = []

  services.forEach((service) => {
    for (const price of service.prices) {
      if (price.doctorSlug === doctorSlug) {
        doctorServices.push({
          name: service.name,
          profileUrl: service.profileUrl,
          price: { min: price.priceMin, max: price.priceMax },
        })
        break
      }
    }
  })

  return doctorServices
}

export function getServicePriceRange(service: Service): PriceRange | null {
  if (Number.isFinite(service.priceMin) && Number.isFinite(service.priceMax)) {
    return {
      min: Math.min(service.priceMin, service.priceMax),
      max: Math.max(service.priceMin, service.priceMax),
    }
  }

  if (service.prices.length === 0) {
    return null
  }

  const minValues = service.prices.map((item) => item.priceMin || item.priceMax)
  const maxValues = service.prices.map((item) => item.priceMax)
  return {
    min: Math.min(...minValues),
    max: Math.max(...maxValues),
  }
}

export function formatPriceRange(range: PriceRange | null) {
  if (!range) {
    return 'Цена по запросу'
  }

  if (!range.min || range.min === range.max) {
    return `${RUB_FORMATTER.format(range.max)} ₽`
  }

  return `${RUB_FORMATTER.format(range.min)} – ${RUB_FORMATTER.format(range.max)} ₽`
}
