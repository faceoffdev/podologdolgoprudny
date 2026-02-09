'use client'

import { Clock, Mail, MapPin, Phone } from 'lucide-react'
import { siteConfig } from '@/lib/site-config'
import Link from 'next/link'
import { SocialLinks } from '@/components/ui/social-links'
import { getServicesByCategory, serviceCategories } from '@/lib/services'
import { FooterRatingFeedback } from '@/components/sections/footer-rating-feedback'

const quickLinks = [
  { name: 'Главная', href: '/#home' },
  { name: 'Услуги', href: '/uslugi/' },
  { name: 'Специалисты', href: '/specialisty/' },
  { name: 'О нас', href: '/about' },
  { name: 'Контакты', href: '/contacts' },
]

export function Footer() {
  const categoryLinks = serviceCategories
    .map((category) => ({
      name: category.name,
      href: `/uslugi/${category.slug}/`,
      count: getServicesByCategory(category.slug).length,
    }))
    .filter((category) => category.count > 3)

  return (
    <footer id="contact" className="bg-slate-900 text-white" itemScope itemType="https://schema.org/Organization">
      <meta itemProp="name" content="Центр Подологии и Остеопатии" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer */}
        <div className="py-16 grid sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
          {/* Column 1 - About */}
          <div className="sm:col-span-2 lg:col-span-1">
            <div className="flex items-center gap-2 mb-6">
              <span className="font-bold text-lg">Центр Подологии и Остеопатии в Долгопрудном</span>
            </div>
            <p className="text-slate-400 mb-6 leading-relaxed">
              Высокотехнологичный подологический кабинет и кабинет мануальных, телесно-ориентированных практик. Приём
              ведут опытные подологи, врач ортопед-остеопат и массажисты.
            </p>
            <div className="flex gap-3" itemProp="sameAs">
              <SocialLinks
                socials={siteConfig.socials}
                className="flex gap-3 text-white"
                itemClassName="w-10 h-10 bg-slate-800 rounded-lg hover:bg-primary hover:scale-110 transition-all"
                iconClassName="w-5 h-5"
                monochrome
              />
            </div>
          </div>

          {/* Column 2 - Quick Links */}
          <div>
            <p className="font-semibold text-lg mb-6">Навигатор</p>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <Link href={link.href} className="text-slate-400 hover:text-primary transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3 - Services */}
          <div>
            <p className="font-semibold text-lg mb-6">Услуги</p>
            <ul className="space-y-3">
              {categoryLinks.map((category) => (
                <li key={category.href}>
                  <Link
                    href={category.href}
                    title={`${category.name} Долгопрудный`}
                    className="text-slate-400 hover:text-primary transition-colors"
                  >
                    {category.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4 - Contact */}
          <div>
            <p className="font-semibold text-lg mb-6">Контакты</p>
            <ul className="space-y-4">
              <li
                className="flex items-start gap-3"
                itemProp="address"
                itemScope
                itemType="https://schema.org/PostalAddress"
              >
                <MapPin className="w-5 h-5 text-white flex-shrink-0 mt-0.5" />
                <span className="text-slate-400 hover:text-primary">
                  <a
                    href={siteConfig.address.mapHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    itemProp="streetAddress"
                  >
                    {siteConfig.address.label}
                  </a>
                </span>
              </li>
              <meta itemProp="addressLocality" content={siteConfig.address.locality} />
              <meta itemProp="addressCountry" content={siteConfig.address.country} />
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-white flex-shrink-0" />
                <a
                  href={siteConfig.phone.href}
                  className="text-slate-400 hover:text-primary transition-colors"
                  itemProp="telephone"
                >
                  {siteConfig.phone.display}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-white flex-shrink-0" />
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="text-slate-400 hover:text-primary transition-colors"
                  itemProp="email"
                >
                  {siteConfig.email}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Clock className="w-5 h-5 text-white flex-shrink-0" />
                <span className="text-slate-400">{siteConfig.schedule}</span>
              </li>
            </ul>
            <FooterRatingFeedback />
          </div>
        </div>

        {/* Legal Info */}
        <div className="border-t border-slate-800 pt-8 pb-6 text-slate-400 text-sm leading-relaxed">
          <div className="grid gap-6 lg:grid-cols-2">
            <div>
              <p className="font-semibold text-white mb-2">Реквизиты ООО</p>
              <p>ООО «Центр Подологии и Остеопатии»</p>
              <p>ИНН 5047321471</p>
              <p>ОГРН 1255000100200</p>
            </div>
          </div>
          <div className="mt-6 space-y-2">
            <p>
              Материалы, размещённые на сайте, не предназначены для постановки диагноза и лечения и не заменяют приём
              врача. Имеются противопоказания. Необходима консультация специалиста.
            </p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="py-6 border-t border-slate-800 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-slate-400 text-sm text-center sm:text-left">
            © {new Date().getFullYear()} Центр Подологии и Остеопатии. Все права защищены.
          </p>
          <div className="flex gap-6">
            <Link href="/privacy" className="text-slate-400 hover:text-primary text-sm transition-colors">
              Политика конфиденциальности
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
