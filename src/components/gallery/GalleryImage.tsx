import Image from 'next/image';

import type { Gallery } from '@/types/cms';

type GalleryImageProps = {
  gallery: Gallery;
};

function getAspectRatio(width: number, height: number) {
  const ratio = width / height;

  if (ratio > 1) {
    return 'landscape';
  } else {
    return 'portrait';
  }
}

export default function GalleryImage({ gallery }: GalleryImageProps) {
  const { image } = gallery;
  const aspectRatio = getAspectRatio(image.width, image.height);

  return (
    <div className={aspectRatio}>
      <Image
        alt={gallery.id}
        src={gallery.image.url}
        className="rounded-md h-full"
        width={image.width}
        height={image.height}
        loading="lazy"
      />
    </div>
  );
}
