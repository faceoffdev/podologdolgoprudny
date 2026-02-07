import type { Metadata } from 'next'
import { siteConfig } from '@/lib/site-config'
import './globals.css'

export const metadata: Metadata = {
  title: 'Центр Подологии и Остеопатии в Долгопрудном',
  description:
    'Подологическая и остеопатическая помощь, медицинский педикюр и коррекция ногтей. Запись на прием онлайн и по телефону.',
  metadataBase: new URL(siteConfig.siteUrl),
  openGraph: {
    title: 'Центр Подологии и Остеопатии в Долгопрудном',
    description:
      'Подологическая и остеопатическая помощь, медицинский педикюр и коррекция ногтей. Запись на прием онлайн и по телефону.',
    url: siteConfig.siteUrl,
    type: 'website',
  },
  robots: {
    index: false,
    follow: false,
    nocache: true,
  },
}

const organizationJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'MedicalClinic',
  name: 'Центр Подологии и Остеопатии',
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: 5.0,
    reviewCount: 78,
    ratingCount: 109,
    bestRating: 5,
    worstRating: 1,
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ru">
      <body className="antialiased">
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }} />
        {children}
      </body>
    </html>
  )
}
