import { Metadata } from 'next';

import GalleryImage from '@/components/gallery/GalleryImage';
import PageHeader from '@/components/shared/PageHeader';
import { SEO } from '@/utils/SEO';
import { CMSClient } from '@/utils/cms/CMSClient';

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
  const galleries = await new CMSClient().getGalleries();

  return (
    <>
      <PageHeader
        header="Gallery"
        subHeader="Explore our photo gallery and relive our high-energy performances, backstage antics, and punk rock lifestyle. From sweaty basement shows to packed club gigs, our photos capture the essence of our band and the punk rock scene."
      />
      {/* create a mosaic grid that takes in all different kinds of sized images with tailwind */}
      <div className="responsive py-16">
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
          {galleries.map((gallery) => (
            <GalleryImage key={gallery.id} gallery={gallery} />
          ))}
        </div>
      </div>
    </>
  );
}
