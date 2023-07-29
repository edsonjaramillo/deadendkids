import { Metadata } from 'next';

import CTA from '@/components/home/CTA';
import Newsletter from '@/components/home/Newsletter';
import { SEO } from '@/utils/SEO';
import { CMSClient } from '@/utils/cms/CMSClient';

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
  const cta = await new CMSClient().getCTA();
  console.log('🚀 ~ file: page.tsx:20 ~ HomePage ~ cta:', cta);

  return (
    <>
      <CTA cta={cta} />
      <Newsletter />
    </>
  );
}
