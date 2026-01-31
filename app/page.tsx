import { Navbar } from '@/components/sections/navbar'
import { Hero } from '@/components/sections/hero'
import { Services } from '@/components/sections/services'
import { HowItWorks } from '@/components/sections/how-it-works'
import { Doctors } from '@/components/sections/doctors'
import { Testimonials } from '@/components/sections/testimonials'
import { FAQ } from '@/components/sections/faq'
import { CTA } from '@/components/sections/cta'
import { Footer } from '@/components/sections/footer'
import { YandexMap } from '@/components/sections/yandex-map'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <Services />
      <HowItWorks />
      <Doctors />
      <Testimonials />
      <FAQ />
      <CTA />
      <YandexMap />
      <Footer />
    </main>
  )
}
