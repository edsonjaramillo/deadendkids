import { Metadata } from 'next';

import GalleryImage from '@/components/gallery/GalleryImage';
import PageHeader from '@/components/shared/PageHeader';
import { SEO } from '@/utils/SEO';
import { cms } from '@/utils/cms/CMSClient';

export async function generateMetadata(): Promise<Metadata> {
  return SEO.setMetadata({
    title: 'Gallery',
    description:
      'Explore our photo gallery and relive our high-energy performances, backstage antics, and punk rock lifestyle. From sweaty basement shows to packed club gigs, our photos capture the essence of our band and the punk rock scene.',

    route: '/gallery',
    index: true,
  });
}

export default async function GalleryPage() {
  const galleries = await cms.getGalleries();

  return (
    <>
      <PageHeader
        header="Gallery"
        subHeader="Explore our photo gallery and relive our high-energy performances, backstage antics, and punk rock lifestyle. From sweaty basement shows to packed club gigs, our photos capture the essence of our band and the punk rock scene."
      />
      <div className="responsive py-16">
        <div className="grid gap-4 sm:grid-cols-3 md:grid-cols-5 lg:grid-cols-7">
          {galleries.map((gallery) => (
            <GalleryImage key={gallery.id} gallery={gallery} />
          ))}
        </div>
      </div>
    </>
  );
}
