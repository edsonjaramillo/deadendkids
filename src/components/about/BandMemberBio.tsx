import Image from 'next/image';

import { BandMember } from '@/types/cms';

type BandMemberBioProps = {
  bandMember: BandMember;
};

export default function BandMemberBio({ bandMember }: BandMemberBioProps) {
  return (
    <article>
      <div className="aspect-w-3 aspect-h-4 overflow-hidden rounded-md">
        <Image
          className="h-full w-full object-cover object-center"
          src={bandMember.image.url}
          alt={`${bandMember.firstName} ${bandMember.lastName} profile picture`}
          width={bandMember.image.width}
          height={bandMember.image.height}
          loading="lazy"
        />
      </div>
      <div className="mt-6">
        <h3 className="text-lg font-semibold leading-8">{`${bandMember.firstName} ${bandMember.lastName}`}</h3>
        <p className="text-base leading-7 text-base-400">{bandMember.role}</p>
      </div>
    </article>
  );
}
