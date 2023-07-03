import { RichText } from '@graphcms/rich-text-react-renderer';
import Image from 'next/image';
import Link from 'next/link';

type RendererProps = {
  content: any;
};

export default function Renderer({ content }: RendererProps) {
  return (
    <RichText
      content={content}
      renderers={{
        h1: ({ children }) => <h1 className="text-4xl font-bold">{children}</h1>,
        h2: ({ children }) => <h2 className="text-3xl font-bold">{children}</h2>,
        h3: ({ children }) => <h3 className="text-2xl font-bold">{children}</h3>,
        h4: ({ children }) => <h4 className="text-xl font-bold">{children}</h4>,
        h5: ({ children }) => <h5 className="text-lg font-bold">{children}</h5>,
        h6: ({ children }) => <h6 className="text-base font-bold">{children}</h6>,
        p: ({ children }) => <p className="text-base text-base-200">{children}</p>,
        bold: ({ children }) => <span className="font-bold">{children}</span>,
        italic: ({ children }) => <span className="italic text-base-200">{children}</span>,
        underline: ({ children }) => <span className="underline">{children}</span>,
        ul: ({ children }) => <ul className="list-disc list-inside text-base-200">{children}</ul>,
        ol: ({ children }) => <ol className="list-decimal list-inside text-base-200">{children}</ol>,
        li: ({ children }) => <li className="text-base text-base-200">{children}</li>,
        a: ({ children, href }) => {
          // regex to check if the link is https://deadendkidsmusic.com with http or https
          const link = href as string;
          const isDeadEndKidsLink = /^https?:\/\/deadendkidsmusic.com/;
          const isInternalLink = /^\/(?!\/)/;
          const isInternal = isDeadEndKidsLink.test(link) || isInternalLink.test(link);

          if (isInternal) {
            return (
              <Link className="text-base text-primary-500 hover:underline" href={link}>
                {children}
              </Link>
            );
          }

          return (
            <a
              rel="noopener nofollow noreferrer external"
              target="_blank"
              className="text-base text-primary-500 hover:underline"
              href={link}>
              {children}
            </a>
          );
        },
        blockquote: ({ children }) => (
          <blockquote className="border-l-4 border-primary-500 pl-4">{children}</blockquote>
        ),
        img: ({ src, height, width, altText }) => (
          <Image src={src!} height={height} width={width} alt={altText!} loading="lazy" />
        ),
      }}
    />
  );
}
