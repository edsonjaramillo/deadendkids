import { Metadata } from 'next';
import { getPlaiceholder } from 'plaiceholder';

import CTA from '@/components/home/CTA';
import Newsletter from '@/components/home/Newsletter';
import { SEO } from '@/utils/SEO';
import { cms } from '@/utils/cms/CMSClient';

export async function generateMetadata(): Promise<Metadata> {
  return SEO.setMetadata({
    title: 'Welcome to the Dead End Kids Official Website',
    description:
      'Dead End Kids is a punk rock band from Huntsville, AL. Check out our music, upcoming shows, and more! Follow us on social media for the latest updates.',
    route: '/',
    index: true,
  });
}

export default async function HomePage() {
  const cta = await cms.getCTA();
  const buffer = await fetch(cta.image.url).then(async (res) => Buffer.from(await res.arrayBuffer()));
  const { base64 } = await getPlaiceholder(buffer, { size: 32 });

  return (
    <>
      <CTA cta={cta} blurDataURL={base64} />
      <Newsletter />
    </>
  );
}
