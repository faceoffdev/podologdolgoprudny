import type { Metadata } from 'next'
import Link from 'next/link'
import { Navbar } from '@/components/sections/navbar'
import { Footer } from '@/components/sections/footer'
import { siteConfig } from '@/lib/site-config'

export const metadata: Metadata = {
  title: 'Пользовательское соглашение — Центр Подологии и Остеопатии',
  description:
    'Пользовательское соглашение (публичная оферта) сайта Центра Подологии и Остеопатии: правила использования и записи на услуги.',
  alternates: {
    canonical: '/terms',
  },
}

export default function TermsPage() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />

      <section className="pt-24 sm:pt-28 lg:pt-32 pb-10 sm:pb-12 bg-slate-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center text-sm text-slate-500 mb-6 gap-2">
            <Link href="/" className="hover:text-primary transition-colors">
              Главная
            </Link>
            <span>/</span>
            <span className="text-slate-700">Пользовательское соглашение</span>
          </div>

          <div className="space-y-4">
            <span className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-semibold">
              Документы
            </span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900">
              Пользовательское соглашение (договор-оферта)
            </h1>
            <p className="text-base sm:text-lg text-slate-600">
              Настоящее соглашение определяет правила использования сайта и порядок получения услуг Центра Подологии и
              Остеопатии.
            </p>
            <p className="text-sm text-slate-500">Дата последнего обновления: 5 февраля 2026 г.</p>
          </div>
        </div>
      </section>

      <section className="py-10 sm:py-12 lg:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10 text-slate-700">
          <div className="space-y-3">
            <h2 className="text-xl sm:text-2xl font-semibold text-slate-900">1. Общие положения</h2>
            <p>
              В соответствии со ст. 437 ГК РФ данный документ является публичной офертой, адресованной любому
              физическому лицу (далее — Клиент), и представляет собой предложение владельца сайта{' '}
              <strong>{siteConfig.siteUrl}</strong> (далее — Исполнитель) заключить договор на оказание услуг на
              условиях, изложенных ниже.
            </p>
            <p>
              Полным и безоговорочным акцептом является запись на услуги, оплата, посещение и иные фактические действия,
              свидетельствующие о намерении получить услуги. Акцепт означает согласие Клиента со всеми условиями
              Соглашения.
            </p>
            <p className="rounded-xl border border-amber-200 bg-amber-50 p-4 text-sm text-amber-900">
              Совершая действия по акцепту оферты, Клиент подтверждает, что ознакомлен с условиями, полностью понимает
              их и принимает безоговорочно.
            </p>
          </div>

          <div className="space-y-3">
            <h2 className="text-xl sm:text-2xl font-semibold text-slate-900">2. Термины и определения</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>Исполнитель — владелец и администратор Сайта, оказывающий услуги.</li>
              <li>Клиент (Пользователь) — физическое лицо, использующее Сайт и/или получающее услуги.</li>
              <li>Сайт — интернет-ресурс по адресу: {siteConfig.siteUrl}.</li>
              <li>Услуги — комплекс услуг, перечень и стоимость которых указаны на Сайте.</li>
              <li>Запись — заявка Клиента на получение услуг с указанием даты, времени и вида услуги.</li>
            </ul>
          </div>

          <div className="space-y-3">
            <h2 className="text-xl sm:text-2xl font-semibold text-slate-900">3. Предмет соглашения</h2>
            <p>
              Исполнитель обязуется оказать Клиенту услуги в соответствии с перечнем и прайс-листом, размещенными на
              Сайте, а Клиент обязуется принять и оплатить услуги в порядке и на условиях настоящего Соглашения.
            </p>
            <p>
              Исполнитель вправе изменять перечень и стоимость услуг без предварительного уведомления. Стоимость уже
              оплаченных услуг изменению не подлежит.
            </p>
            <p>Услуги оказываются по адресу: {siteConfig.address.label}.</p>
          </div>

          <div className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-semibold text-slate-900">4. Права и обязанности Исполнителя</h2>
            <div className="space-y-2">
              <h3 className="text-lg font-semibold text-slate-900">4.1. Исполнитель обязуется:</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>Оказывать услуги надлежащего качества в согласованные сроки.</li>
                <li>Соблюдать санитарно-гигиенические нормы и использовать безопасные материалы.</li>
                <li>Информировать о противопоказаниях к процедурам (при наличии).</li>
                <li>Обеспечивать конфиденциальность персональных данных Клиента.</li>
              </ul>
            </div>
            <div className="space-y-2">
              <h3 className="text-lg font-semibold text-slate-900">4.2. Исполнитель имеет право:</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>Изменять условия Соглашения, перечень и стоимость услуг.</li>
                <li>Переносить время оказания услуг по согласованию с Клиентом.</li>
                <li>Привлекать к оказанию услуг других специалистов.</li>
                <li>Осуществлять фото- и видеосъемку для профессиональных целей с согласия Клиента.</li>
              </ul>
            </div>
            <div className="space-y-2">
              <h3 className="text-lg font-semibold text-slate-900">4.3. Исполнитель вправе отказать:</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>Лицам в состоянии алкогольного или наркотического опьянения.</li>
                <li>При агрессивном поведении и нарушении общественного порядка.</li>
                <li>При наличии противопоказаний к процедурам.</li>
                <li>При задолженности по оплате ранее оказанных услуг.</li>
              </ul>
            </div>
          </div>

          <div className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-semibold text-slate-900">5. Права и обязанности Клиента</h2>
            <div className="space-y-2">
              <h3 className="text-lg font-semibold text-slate-900">5.1. Клиент обязуется:</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>Предоставлять достоверные данные при записи.</li>
                <li>Сообщать о противопоказаниях и особенностях здоровья.</li>
                <li>Соблюдать правила поведения и рекомендации специалистов.</li>
                <li>Прибыть в согласованное время или предупредить об отмене не позднее 24 часов.</li>
              </ul>
            </div>
            <div className="space-y-2">
              <h3 className="text-lg font-semibold text-slate-900">5.2. Клиент имеет право:</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>Получить информацию об услугах, стоимости и сроках оказания.</li>
                <li>Получить консультацию специалиста до процедуры.</li>
                <li>Отказаться от услуг до начала их оказания.</li>
              </ul>
            </div>
          </div>

          <div className="space-y-3">
            <h2 className="text-xl sm:text-2xl font-semibold text-slate-900">6. Порядок записи на услуги</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>Через форму записи на Сайте.</li>
              <li>По телефону или через мессенджеры.</li>
              <li>При личном обращении.</li>
            </ul>
            <p>
              При записи Клиент указывает ФИО, контактный телефон, желаемую дату и время, а также вид услуги (если
              определен). Исполнитель подтверждает запись и сообщает детали приема.
            </p>
          </div>

          <div className="space-y-3">
            <h2 className="text-xl sm:text-2xl font-semibold text-slate-900">7. Отмена и перенос записи</h2>
            <p>
              Клиент вправе отменить или перенести запись, уведомив Исполнителя не менее чем за 24 часа. При отмене
              менее чем за 24 часа Исполнитель вправе удержать предоплату или запросить предоплату при последующих
              записях.
            </p>
            <p>
              Исполнитель имеет право перенести запись при форс-мажоре или болезни специалиста с предварительным
              уведомлением Клиента.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-semibold text-slate-900">8. Стоимость услуг и порядок расчетов</h2>
            <p>Стоимость услуг определяется прайс-листом на Сайте на момент записи.</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Наличными после оказания услуг.</li>
              <li>Банковской картой через терминал.</li>
              <li>Безналичным переводом на расчетный счет или карту.</li>
              <li>Иными способами по согласованию сторон.</li>
            </ul>
            <p>
              Исполнитель вправе требовать предоплату 30–100% при первичной записи, записи на дорогостоящие услуги или
              при неоднократных отменах. Предоплата не возвращается при неявке или отмене менее чем за 24 часа.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-semibold text-slate-900">9. Порядок оказания услуг</h2>
            <p>
              Услуги оказываются в согласованные дату и время. До начала процедуры проводится осмотр и консультация,
              уточняются пожелания и противопоказания. При необходимости могут применяться дополнительные материалы и
              методики.
            </p>
            <p>
              Услуга считается оказанной и принятой Клиентом по завершении процедуры, если не заявлены обоснованные
              претензии.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-semibold text-slate-900">
              10. Качество услуг и порядок предъявления претензий
            </h2>
            <p>
              Исполнитель гарантирует качество при соблюдении рекомендаций по уходу. Претензии по качеству принимаются в
              течение 24 часов после оказания услуги.
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Устно при личном обращении.</li>
              <li>Письменно по email или через форму обратной связи.</li>
              <li>Через мессенджеры или социальные сети.</li>
            </ul>
            <p>
              При обоснованной претензии Исполнитель может устранить недостатки, оказать услугу повторно либо вернуть
              оплату по соглашению сторон.
            </p>
          </div>

          <div className="space-y-3">
            <h2 className="text-xl sm:text-2xl font-semibold text-slate-900">11. Противопоказания</h2>
            <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5">
              <p className="font-semibold text-slate-900">Клиент обязан сообщить о наличии противопоказаний:</p>
              <ul className="mt-3 list-disc pl-6 space-y-2">
                <li>Острые инфекционные и воспалительные заболевания.</li>
                <li>Грибковые заболевания в острой стадии.</li>
                <li>Сахарный диабет в стадии декомпенсации.</li>
                <li>Заболевания крови и нарушения свертываемости.</li>
                <li>Эпилепсия и психические расстройства в стадии обострения.</li>
                <li>Онкологические заболевания.</li>
                <li>Беременность (в отдельных случаях).</li>
                <li>Аллергические реакции на используемые материалы.</li>
              </ul>
              <p className="mt-3 text-sm text-slate-600">
                Исполнитель не несет ответственности за последствия, если Клиент умолчал о противопоказаниях.
              </p>
            </div>
          </div>

          <div className="space-y-3">
            <h2 className="text-xl sm:text-2xl font-semibold text-slate-900">12. Ответственность сторон</h2>
            <p>
              Стороны несут ответственность за неисполнение обязательств по Соглашению в соответствии с
              законодательством РФ. Исполнитель не несет ответственности за последствия, возникшие из-за несоблюдения
              рекомендаций, а также за индивидуальную непереносимость материалов.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-semibold text-slate-900">13. Конфиденциальность и данные</h2>
            <p>
              Обработка персональных данных осуществляется в соответствии с Политикой конфиденциальности, размещенной на
              Сайте по адресу: {siteConfig.siteUrl}/privacy.
            </p>
            <p>
              Предоставляя данные при записи, Клиент соглашается на их обработку в целях исполнения настоящего
              Соглашения.
            </p>
          </div>

          <div className="space-y-3">
            <h2 className="text-xl sm:text-2xl font-semibold text-slate-900">14. Интеллектуальная собственность</h2>
            <p>
              Материалы Сайта (текст, графика, изображения, дизайн) являются объектами интеллектуальной собственности и
              охраняются законом. Использование материалов без письменного согласия запрещено.
            </p>
          </div>

          <div className="space-y-3">
            <h2 className="text-xl sm:text-2xl font-semibold text-slate-900">15. Срок действия и изменения</h2>
            <p>
              Соглашение вступает в силу с момента акцепта и действует до полного исполнения обязательств. Исполнитель
              вправе изменять условия в одностороннем порядке, публикуя новую редакцию на Сайте. Действующая редакция
              доступна по адресу: {siteConfig.siteUrl}/terms.
            </p>
          </div>

          <div className="space-y-3">
            <h2 className="text-xl sm:text-2xl font-semibold text-slate-900">16. Разрешение споров</h2>
            <p>
              Споры разрешаются путем переговоров. При недостижении согласия спор передается в суд по месту нахождения
              Исполнителя. Срок рассмотрения претензии — 10 рабочих дней.
            </p>
          </div>

          <div className="space-y-3">
            <h2 className="text-xl sm:text-2xl font-semibold text-slate-900">17. Прочие условия</h2>
            <p>
              Соглашение регулируется и толкуется в соответствии с законодательством РФ. Признание судом
              недействительности отдельных положений не влияет на действительность остальных.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-semibold text-slate-900">18. Реквизиты и контакты</h2>
            <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5">
              <p className="font-semibold text-slate-900">Исполнитель:</p>
              <p className="mt-2">
                <strong>Адрес сайта:</strong> {siteConfig.siteUrl}
                <br />
                <strong>Электронная почта:</strong>{' '}
                <a href={`mailto:${siteConfig.email}`} className="text-slate-900 font-medium hover:text-primary">
                  {siteConfig.email}
                </a>
                <br />
                <strong>Телефон:</strong>{' '}
                <a href={siteConfig.phone.href} className="text-slate-900 font-medium hover:text-primary">
                  {siteConfig.phone.display}
                </a>
                <br />
                <strong>Адрес оказания услуг:</strong> {siteConfig.address.label}
                <br />
                <strong>ООО:</strong> ООО «Центр Подологии и Остеопатии», ИНН 5047321471, ОГРН 1255000100200
              </p>
              <p className="mt-4 text-sm text-slate-600">
                По всем вопросам, связанным с настоящим Соглашением, Клиент может обратиться по указанным контактным
                данным.
              </p>
            </div>
          </div>

          <div className="space-y-3">
            <h2 className="text-xl sm:text-2xl font-semibold text-slate-900">19. Согласие с условиями</h2>
            <p className="rounded-xl border border-amber-200 bg-amber-50 p-4 text-sm text-amber-900">
              Совершая действия по акцепту оферты (запись, оплата, посещение), Клиент подтверждает согласие со всеми
              условиями Соглашения и Политикой конфиденциальности.
            </p>
            <p className="text-center text-sm text-slate-500">
              Настоящее Соглашение является публичной офертой в соответствии со ст. 437 ГК РФ.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
