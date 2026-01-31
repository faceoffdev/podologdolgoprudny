import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Центр Подологии и Остеопатии в Долгопрудном',
  description:
    'Подологическая и остеопатическая помощь, медицинский педикюр и коррекция ногтей. Запись на приём онлайн и по телефону.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ru">
      <body className="antialiased">{children}</body>
    </html>
  )
}
