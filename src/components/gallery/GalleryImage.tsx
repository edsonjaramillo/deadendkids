import Image from 'next/image';

import type { Gallery } from '@/types/cms';

type GalleryImageProps = {
  gallery: Gallery;
};

export default function GalleryImage({ gallery }: GalleryImageProps) {
  return (
    <div className="aspect-w-16 aspect-h-9">
      <Image
        alt={gallery.id}
        src={gallery.image.url}
        className="object-cover rounded-md w-full"
        width={gallery.image.width}
        height={gallery.image.height}
        loading="lazy"
      />
    </div>
  );
}
