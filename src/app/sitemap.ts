import { MetadataRoute } from 'next';

import { CMSClient } from '@/utils/cms/CMSClient';

const coreRoutes = ['/', '/about', '/contact', '/gallery', '/music', '/privacy', '/shows', '/terms'];

// revalidate in 14 days
export const revalidate = 60 * 60 * 24 * 14;

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = 'https://deadendkidsmusic.com';
  const pages: MetadataRoute.Sitemap = [];
  const { blogPosts } = await new CMSClient().getAllPages();

  //   adds all the core pages to the sitemap
  coreRoutes.forEach((route) => {
    pages.push({ url: baseUrl + route, lastModified: new Date() });
  });

  //   adds all the blog posts to the sitemap
  blogPosts.forEach(({ slug, updatedAt }) => {
    pages.push({ url: baseUrl + `/blog/${slug}`, lastModified: new Date(updatedAt) });
  });

  return pages;
}
