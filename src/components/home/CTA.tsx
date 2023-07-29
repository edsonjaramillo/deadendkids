import { CTA } from '@/types/cms';
import Image from 'next/image';
import Link from 'next/link';

type CTAProps = {
  cta: CTA;
};

export default function CTA({cta}: CTAProps) {
  return (
    <div className="relative">
      <div className="mx-auto max-w-7xl lg:grid lg:grid-cols-12 lg:gap-x-8 lg:px-8">
        <div className="px-6 pb-24 pt-10 sm:pb-32 lg:col-span-7 lg:px-0 lg:pb-56 lg:pt-48 xl:col-span-6">
          <div className="mx-auto max-w-2xl lg:mx-0">
            <h1 className="text-4xl font-bold tracking-tight sm:text-6xl">
              Punk&apos;s Not Dead: The Unapologetic
              <span className="text-primary-600">{` Sound of Dissent`}</span>
            </h1>
            <p className="mt-6 text-lg leading-8 text-base-400">
              Get ready to rock with our high-octane blend of punk rock and roll. We&apos;re here to make some noise and
              have a good time doing it.
            </p>
            <div className="mt-10 flex items-center gap-x-6">
              <Link href="/music" className="btn animate bg-primary-600 px-3.5 py-2.5 hover:bg-primary-700">
                Listen to Music
              </Link>
              <Link href="/shows" className="text-sm font-semibold leading-6">
                Shows <span aria-hidden="true">→</span>
              </Link>
            </div>
          </div>
        </div>
        <div className="relative lg:col-span-5 lg:-mr-8 xl:absolute xl:inset-0 xl:left-1/2 xl:mr-0">
          <Image
            className="lg:aspect-auto aspect-[3/2] w-full bg-base-50 object-cover lg:absolute lg:inset-0 lg:h-full"
            src={cta.image.url}
            alt={cta.image.alt || 'Dead End Kids'}
            width={cta.image.width}
            height={cta.image.height}
            priority
          />
        </div>
      </div>
    </div>
  );
}
