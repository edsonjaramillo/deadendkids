import BlogPostCard from '@/components/blog/BlogPostCard';
import PageHeader from '@/components/shared/PageHeader';
import Section from '@/components/shared/Section';
import { CMSClient } from '@/utils/cms/CMSClient';

export default async function BlogPage() {
  const posts = await new CMSClient().getBlogPosts();

  return (
    <>
      <PageHeader
        header="Blog"
        subHeader="Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque alias ducimus omnis accusamus animi aliquam?"
      />
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
