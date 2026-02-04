import { withBasePath } from './paths'

export const siteConfig = {
  siteUrl: 'https://podologdolgoprudny.ru',
  phone: {
    display: '+7 914 861-82-42',
    href: 'tel:+79148618242',
  },
  bookingUrl: 'https://w1058312.yclients.com/',
  email: 'info@podologdolgoprudny.ru',
  address: {
    label: 'Лихачёвское ш., 1, корп. 4, Долгопрудный',
    mapHref: 'https://yandex.ru/maps/-/CPAFbZYd',
    locality: 'Долгопрудный',
    country: 'RU',
  },
  schedule: 'ПН-ВС: 07:30 - 22:00',
  socials: [
    {
      label: 'Instagram',
      href: 'https://www.instagram.com/tatiana_asteri',
      icon: withBasePath('/icons/instagram.svg'),
      color: '#E1306C',
    },
    {
      label: 'Telegram',
      href: 'https://t.me/podology_osteopathy',
      icon: withBasePath('/icons/telegram.svg'),
      color: '#229ED9',
    },
  ],
} as const
