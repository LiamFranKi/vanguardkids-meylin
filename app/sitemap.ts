import type { MetadataRoute } from 'next'
import { SITE_URL } from '@/lib/constants'

const routes = [
  { path: '/', priority: 1, changeFrequency: 'weekly' },
  { path: '/services', priority: 0.9, changeFrequency: 'monthly' },
  { path: '/programs', priority: 0.9, changeFrequency: 'monthly' },
  { path: '/programs/vpk', priority: 0.8, changeFrequency: 'monthly' },
  { path: '/locations/dover', priority: 0.9, changeFrequency: 'monthly' },
  { path: '/locations/fort-myers', priority: 0.9, changeFrequency: 'monthly' },
  { path: '/about', priority: 0.7, changeFrequency: 'monthly' },
  { path: '/careers', priority: 0.6, changeFrequency: 'monthly' },
  { path: '/resources', priority: 0.7, changeFrequency: 'monthly' },
  { path: '/faq', priority: 0.7, changeFrequency: 'monthly' },
  { path: '/apply', priority: 0.7, changeFrequency: 'monthly' },
  { path: '/privacy', priority: 0.2, changeFrequency: 'yearly' },
] as const

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map((route) => ({
    url: `${SITE_URL}${route.path}`,
    lastModified: new Date(),
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }))
}
