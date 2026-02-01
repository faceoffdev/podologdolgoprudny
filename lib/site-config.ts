import { withBasePath } from './paths'

export const siteConfig = {
  siteUrl: 'https://podologdolgoprudny.ru',
  phone: {
    display: '+7 914 861-82-42',
    href: 'tel:+79148618242',
  },
  bookingUrl: 'https://w1058312.yclients.com/',
  email: 'info@podologdolgoprudny.ru',
  socials: [
    {
      label: 'Instagram',
      href: 'https://www.instagram.com/tatiana_asteri',
      icon: withBasePath('/icons/instagram.svg'),
    },
    {
      label: 'Telegram',
      href: 'https://t.me/podology_osteopathy',
      icon: withBasePath('/icons/telegram.svg'),
    },
  ],
} as const
