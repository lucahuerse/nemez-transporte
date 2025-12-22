import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://nemez-transporte.de'
  
  const routes = [
    '',
    '/kleintransporte',
    '/express',
    '/umzug',
    '/entruempelung',
    '/impressum',
    '/datenschutz',
  ]

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === '' ? 'weekly' : 'monthly',
    priority: route === '' ? 1 : 0.8,
  }))
}
