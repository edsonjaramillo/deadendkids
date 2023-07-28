import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/revalidate'],
    },
    sitemap: 'https://deadendkidsmusic.com/sitemap.xml',
  };
}
