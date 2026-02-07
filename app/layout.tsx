import type { Metadata } from 'next'
import { aggregateRating, siteConfig } from '@/lib/site-config'
import './globals.css'
import { withBasePath } from '@/lib/paths'

export const metadata: Metadata = {
  title: 'Центр Подологии и Остеопатии в Долгопрудном',
  description:
    'Подологическая и остеопатическая помощь, медицинский педикюр и коррекция ногтей. Запись на приём онлайн и по телефону.',
  metadataBase: new URL(siteConfig.siteUrl),
  openGraph: {
    title: 'Центр Подологии и Остеопатии в Долгопрудном',
    description:
      'Подологическая и остеопатическая помощь, медицинский педикюр и коррекция ногтей. Запись на приём онлайн и по телефону.',
    url: siteConfig.siteUrl,
    type: 'website',
  },
  robots: {
    index: false,
    follow: false,
    nocache: true,
  },
}

const organizationJsonMedicalClinic = {
  '@context': 'https://schema.org',
  '@type': 'MedicalClinic',
  name: 'Центр Подологии и Остеопатии',
  aggregateRating: {
    '@type': 'AggregateRating',
    ...aggregateRating,
  },
}

const organizationJsonMedicalBusiness = {
  '@context': 'https://schema.org',
  '@type': 'MedicalBusiness',
  '@id': `${siteConfig.siteUrl}/#organization`,
  name: 'Центр Подологии и Остеопатии',
  url: siteConfig.siteUrl,
  telephone: siteConfig.phone.display,
  email: siteConfig.email,
  image: `${siteConfig.siteUrl}${withBasePath('/images/logo.svg')}`,
  sameAs: siteConfig.socials.map((social) => social.href),
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ru">
      <body className="antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonMedicalClinic) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonMedicalBusiness) }}
        />
        {children}
      </body>
    </html>
  )
}
