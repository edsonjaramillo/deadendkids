import { Metadata } from 'next';

import RevalidateCard from '@/components/revalidate/RevalidateCard';
import Section from '@/components/shared/Section';
import { links } from '@/data/links';
import { SEO } from '@/utils/SEO';
import { CMSClient } from '@/utils/cms/CMSClient';

export async function generateMetadata(): Promise<Metadata> {
  return SEO.setMetadata({
    title: 'Revalidate',
    description: 'Revalidate pages.',
    route: '/revalidate',
    index: false,
  });
}

export default async function Page() {
  const blogPosts = await new CMSClient().getBlogPostSlugs();

  return (
    <Section header="Revalidate Pages">
      <div className="flex gap-5 flex-col">
        {links.map((link) => (
          <RevalidateCard key={link.path} name={link.name} path={link.path} />
        ))}
        {blogPosts.map((post) => (
          <RevalidateCard key={post.slug} name={post.title} path={`/blog/${post.slug}`} />
        ))}
        <RevalidateCard name="Blog" path="/blog" />
      </div>
    </Section>
  );
}
