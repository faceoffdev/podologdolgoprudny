import type { MetadataRoute } from 'next'
import { doctors } from '@/lib/doctors'
import { siteConfig } from '@/lib/site-config'
import { getServicesByCategory, serviceCategories, services } from '@/lib/services'

export const dynamic = 'force-static'

const staticRoutes = ['/', '/about/', '/contacts/', '/privacy/', '/terms/', '/uslugi/', '/specialisty/'] as const

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date()

  const staticEntries: MetadataRoute.Sitemap = staticRoutes.map((path) => ({
    url: `${siteConfig.siteUrl}${path}`,
    lastModified: now,
    changeFrequency: 'weekly',
    priority: path === '/' ? 1 : 0.8,
  }))

  const serviceEntries: MetadataRoute.Sitemap = services.map((service) => ({
    url: `${siteConfig.siteUrl}${service.profileUrl}`,
    lastModified: now,
    changeFrequency: 'weekly',
    priority: 0.9,
  }))

  const categoryEntries: MetadataRoute.Sitemap = serviceCategories
    .filter((category) => getServicesByCategory(category.slug).length > 3)
    .map((category) => ({
      url: `${siteConfig.siteUrl}/uslugi/${category.slug}/`,
      lastModified: now,
      changeFrequency: 'weekly',
      priority: 0.85,
    }))

  const specialistEntries: MetadataRoute.Sitemap = doctors.map((doctor) => ({
    url: `${siteConfig.siteUrl}${doctor.profileUrl}`,
    lastModified: now,
    changeFrequency: 'weekly',
    priority: 0.8,
  }))

  return [...staticEntries, ...categoryEntries, ...serviceEntries, ...specialistEntries]
}
