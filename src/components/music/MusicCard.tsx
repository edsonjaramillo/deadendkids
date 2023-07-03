import Image from 'next/image';

import SocialIcon from '@/components/shared/SocialIcon';
import type { CMSImage, URL } from '@/types/cms';
import { Datetime } from '@/utils/Datetime';

type MusicCardProps = {
  title: string;
  releaseDate: string;
  image: CMSImage;
  url: URL;
};

export default function MusicCard({ title, image, releaseDate, url }: MusicCardProps) {
  return (
    <article>
      <div className="aspect-h-1 aspect-w-1 overflow-hidden rounded-md">
        <Image
          src={image.url}
          alt={image.alt as string}
          className="h-full w-full object-cover object-center"
          width={image.width}
          height={image.height}
          loading="lazy"
        />
      </div>
      <div className="mt-3 flex justify-between">
        <div>
          <h3 className="text-sm font-semibold">{title}</h3>
        </div>
        <span className="text-sm font-medium text-base-300">{Datetime.getYear(releaseDate)}</span>
      </div>
      <div className="flex gap-2 mt-2 justify-end">
        <div className="self-end">
          <SocialIcon name="Apple Music" url={url.appleMusicUrl}>
            <path d="M22 17.607c-.786 2.28-3.139 6.317-5.563 6.361-1.608.031-2.125-.953-3.963-.953-1.837 0-2.412.923-3.932.983-2.572.099-6.542-5.827-6.542-10.995 0-4.747 3.308-7.1 6.198-7.143 1.55-.028 3.014 1.045 3.959 1.045.949 0 2.727-1.29 4.596-1.101.782.033 2.979.315 4.389 2.377-3.741 2.442-3.158 7.549.858 9.426zm-5.222-17.607c-2.826.114-5.132 3.079-4.81 5.531 2.612.203 5.118-2.725 4.81-5.531z" />
          </SocialIcon>
        </div>
        <SocialIcon name="Spotify" url={url.spotifyUrl}>
          <path d="M19.098 10.638c-3.868-2.297-10.248-2.508-13.941-1.387-.593.18-1.22-.155-1.399-.748-.18-.593.154-1.22.748-1.4 4.239-1.287 11.285-1.038 15.738 1.605.533.317.708 1.005.392 1.538-.316.533-1.005.709-1.538.392zm-.126 3.403c-.272.44-.847.578-1.287.308-3.225-1.982-8.142-2.557-11.958-1.399-.494.15-1.017-.129-1.167-.623-.149-.495.13-1.016.624-1.167 4.358-1.322 9.776-.682 13.48 1.595.44.27.578.847.308 1.286zm-1.469 3.267c-.215.354-.676.465-1.028.249-2.818-1.722-6.365-2.111-10.542-1.157-.402.092-.803-.16-.895-.562-.092-.403.159-.804.562-.896 4.571-1.045 8.492-.595 11.655 1.338.353.215.464.676.248 1.028zm-5.503-17.308c-6.627 0-12 5.373-12 12 0 6.628 5.373 12 12 12 6.628 0 12-5.372 12-12 0-6.627-5.372-12-12-12z" />
        </SocialIcon>
      </div>
    </article>
  );
}
