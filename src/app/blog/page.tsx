import { Metadata } from 'next';

import BlogPostCard from '@/components/blog/BlogPostCard';
import PageHeader from '@/components/shared/PageHeader';
import Section from '@/components/shared/Section';
import { SEO } from '@/utils/SEO';
import { cms } from '@/utils/cms/CMSClient';

export async function generateMetadata(): Promise<Metadata> {
  return SEO.setMetadata({
    title: 'Blog',
    description: 'Stay Tuned for the Latest Updates and Breaking News from Dead End Kids!',
    route: '/blog',
    index: true,
  });
}

export default async function BlogPage() {
  const posts = await cms.getBlogPosts();

  return (
    <>
      <PageHeader header="Blog" subHeader="Stay Tuned for the Latest Updates and Breaking News from Dead End Kids!" />
      <Section header="Latest Blogs">
        <div className="grid grid-cols-1 gap-x-8 gap-y-20 lg:grid-cols-3">
          {posts.map((post) => (
            <BlogPostCard key={post.slug} blogPost={post} />
          ))}
        </div>
      </Section>
    </>
  );
}
