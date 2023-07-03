import { Metadata } from 'next';
import Image from 'next/image';

import RichTextRenderer from '@/components/blog/RichTextRenderer';
import { Datetime } from '@/utils/Datetime';
import { SEO } from '@/utils/SEO';
import { CMSClient } from '@/utils/cms/CMSClient';

type PageProps = { params: { slug: string } };

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const blogPost = await new CMSClient().getBlogPostBySlug(params.slug);
  return SEO.setMetadata({
    title: blogPost.title,
    description: blogPost.description,
    route: `/blog/${params.slug}`,
    openGraph: {
      url: blogPost.image.url,
      width: blogPost.image.width,
      height: blogPost.image.height,
      alt: blogPost.image.alt || blogPost.title,
    },
    index: true,
  });
}

export default async function BlogPostPage({ params }: PageProps) {
  const blogPost = await new CMSClient().getBlogPostBySlug(params.slug);
  const authorName = `${blogPost.bandMember.firstName} ${blogPost.bandMember.lastName}`;
  const releasedDate = Datetime.getFormattedDate(blogPost.releaseDate);

  return (
    <div className="responsive-sm space-y-12 py-14">
      <div className="grid md:grid-cols-2 gap-10">
        <div className="space-y-6">
          <h1 className="text-4xl font-bold">{blogPost.title}</h1>
          <p className="text-base-300">{blogPost.description}</p>
          <div className="flex gap-4">
            <Image
              className="rounded-full h-12 w-12 object-cover"
              src={blogPost.bandMember.image.url}
              width={blogPost.bandMember.image.width}
              height={blogPost.bandMember.image.height}
              alt={blogPost.bandMember.image.alt || `${authorName}'s profile picture`}
              priority
            />
            <div className="text-base-300 space-y-1">
              <p className="text-sm">{authorName}</p>
              <p className="text-xs">{releasedDate}</p>
            </div>
          </div>
        </div>
        <Image
          className="mx-auto rounded-md max-h-96 object-cover"
          src={blogPost.image.url}
          width={blogPost.image.width}
          height={blogPost.image.height}
          alt={blogPost.image.alt || blogPost.title}
          priority
        />
      </div>
      <RichTextRenderer content={blogPost.article.json} />
    </div>
  );
}

export async function generateStaticParams(): Promise<{ slug: string }[]> {
  const blogPosts = await new CMSClient().getBlogPostSlugs();
  return blogPosts.map((post) => ({ slug: post.slug }));
}