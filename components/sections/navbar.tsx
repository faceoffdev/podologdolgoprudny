'use client'

import { useState, useEffect } from 'react'
import { Menu, X, Phone } from 'lucide-react'
import { Button, buttonVariants } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import Image from 'next/image'
import Link from 'next/link'
import { siteConfig } from '@/lib/site-config'
import { withBasePath } from '@/lib/paths'

const navLinks = [
  { name: 'Главная', href: '/#home' },
  { name: 'Услуги', href: '/#services' },
  { name: 'Специалисты', href: '/doctors' },
  { name: 'О нас', href: '/about' },
  { name: 'Контакты', href: '/#contact' },
]

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        isScrolled ? 'bg-white/95 backdrop-blur-md shadow-sm' : 'bg-transparent',
      )}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" aria-label="Основная навигация">
        <div className="flex items-center justify-between h-18 lg:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 min-w-0 pt-2 lg:pt-0">
            <Image
              src={withBasePath('/images/logo.svg')}
              alt="Центр Подологии и Остеопатии"
              width={60}
              height={60}
              className="flex items-center justify-center"
              style={{ width: '60px', height: '60px' }}
              priority
            />
            <span className="font-bold text-xl text-slate-900 leading-tight max-w-[12rem] whitespace-normal break-words">
              Центр подологии и остеопатии
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-slate-600 hover:text-primary font-medium transition-colors duration-200"
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center gap-4">
            <a href={siteConfig.phone.href} className="flex items-center gap-2 text-slate-600 hover:text-primary">
              <Phone className="w-4 h-4" />
              <span className="font-medium">{siteConfig.phone.display}</span>
            </a>
            <Button href={siteConfig.bookingUrl} target="_blank" rel="noopener noreferrer">
              Онлайн запись
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 text-slate-600 hover:text-primary"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden bg-white border-t border-slate-100 py-4 animate-slide-up">
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-slate-600 hover:text-primary font-medium px-4 py-2"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
              <div className="px-4 pt-4 border-t border-slate-100">
                <a
                  href={siteConfig.bookingUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={buttonVariants({ variant: 'default', size: 'default', className: 'w-full' })}
                >
                  Онлайн запись
                </a>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}
