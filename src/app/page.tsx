import { Metadata } from 'next';

import { SEO } from '@/utils/SEO';

type HomeProps = {};

export async function generateMetadata(): Promise<Metadata> {
  return SEO.setMetadata({
    title: 'Welcome to the Dead End Kids Official Website',
    description:
      'Dead End Kids is a punk rock band from Huntsville, AL. Check out our music, upcoming shows, and more! Follow us on social media for the latest updates.',
    route: '/',
    index: true,
  });
}

export default function Home({}: HomeProps) {
  return <div>Home</div>;
}
