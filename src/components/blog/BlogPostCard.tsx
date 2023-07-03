import Image from 'next/image';
import Link from 'next/link';

import type { BlogPost } from '@/types/cms';

type BlogPostCardProps = {
  blogPost: BlogPost;
};

export default async function BlogPostCard({ blogPost }: BlogPostCardProps) {
  return (
    <article className="flex flex-col items-start justify-between">
      <Link href={`/blog/${blogPost.slug}`} legacyBehavior>
        <a className="relative w-full">
          <Image
            className="aspect-[16/9] w-full rounded-md object-cover sm:aspect-[2/1] lg:aspect-[3/2]"
            src={blogPost.image.url}
            alt={blogPost.image.alt as string}
            width={blogPost.image.width}
            height={blogPost.image.height}
            loading="lazy"
          />
        </a>
      </Link>
      <div>
        <div className="mt-6 flex items-center gap-x-4 text-xs">
          <time dateTime={blogPost.releaseDate} className="text-base-500">
            {blogPost.releaseDate}
          </time>
        </div>
        <div className="relative">
          <h3 className="mt-3 line-clamp-1 text-lg font-semibold leading-6">
            <Link href={`/blog/${blogPost.slug}`} aria-hidden>
              <span className="absolute inset-0" />
              {blogPost.title}
            </Link>
          </h3>
          <span className="mt-4 line-clamp-3 text-sm leading-6 text-base-400">{blogPost.description}</span>
        </div>
        <div className="relative mt-6 flex items-center gap-x-4">
          <Image
            src={blogPost.bandMember.image.url}
            alt={blogPost.bandMember.image.alt as string}
            width={blogPost.bandMember.image.width}
            height={blogPost.bandMember.image.height}
            loading="lazy"
            className="h-10 w-10 rounded-full bg-base-100"
          />
          <div className="flex flex-col gap-1 text-sm leading-6">
            <span className="font-semibold">{`${blogPost.bandMember.firstName} ${blogPost.bandMember.lastName}`}</span>
            <span className="text-base-400">{blogPost.bandMember.role}</span>
          </div>
        </div>
      </div>
    </article>
  );
}
