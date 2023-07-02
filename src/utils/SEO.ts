import { Metadata } from 'next';

type OpenGraphOptions = {
  url: string;
  width?: number;
  height?: number;
  alt?: string;
};

type MetadataOptions = {
  title: string;
  description: string;
  openGraph?: OpenGraphOptions;
  route: string;
  index: boolean;
};

export class SEO {
  static setMetadata(props: MetadataOptions) {
    let metadata: Metadata = {
      title: `${props.title} | Dead End Kids`,
      description: props.description,
      creator: 'Dead End Kids',
      robots: props.index ? 'index, follow' : 'noindex, nofollow',
      authors: {
        name: 'Dead End Kids',
        url: 'https://deadendkidsmusic.com/',
      },
      applicationName: 'Dead End Kids',
      appleWebApp: {
        title: 'Dead End Kids',
      },

      keywords: ['Dead End Kids'],
      alternates: {
        canonical: 'https://deadendkidsmusic.com' + props.route,
      },
    };

    if (props.openGraph) {
      metadata = {
        ...metadata,
        openGraph: {
          title: `${props.title} | Dead End Kids`,
          description: props.description,
          siteName: 'Dead End Kids',
          locale: 'en_US',
          countryName: 'United States',
          type: 'website',
          url: props.openGraph.url,
        },
        other: {
          'og:image': props.openGraph.url || 'https://deadendkidsmusic.com',
          'og:image:width': props.openGraph.width || '1200',
          'og:image:height': props.openGraph.height || '630',
          'og:image:type': 'image/png',
          'og:image:alt': 'Dead End Kids',
        },
      };
    }

    return metadata;
  }
}
