import ContactForm from '@/components/contact/ContactForm';
import { SEO } from '@/utils/SEO';

export async function generateMetadata() {
  return SEO.setMetadata({
    title: `Get in touch with Dead End Kids`,
    description:
      'Get in touch with Dead End Kids, the hottest punk rock band from Huntsville, Alabama. Book us for your event or just say hi! Contact us now.',
    route: '/contact',
    index: true,
  });
}

export default function ContactPage() {
  return (
    <div className="relative isolate">
      <div className="mx-auto grid max-w-7xl grid-cols-1 lg:grid-cols-2">
        <div className="relative px-6 pb-20 pt-24 sm:pt-32 lg:static lg:px-8 lg:py-48">
          <div className="responsive">
            <SquareSVGBackground />
            <h1 className="text-3xl lg:text-5xl font-bold tracking-tight">Get in touch</h1>
            <p className="mt-6 text-lg leading-8 ">
              We&apos;d love to hear from you! Whether you have a question, a suggestion, or just want to say hello,
              we&apos;re all ears.
            </p>
            <dl className="mt-10 space-y-4 text-base leading-7">
              <div className="flex gap-x-4">
                <dt className="flex-none">
                  <span className="sr-only">Telephone</span>
                  {/* <BuildingOffice2Icon className="w-6 text-base-400 h-7" aria-hidden="true" /> */}
                </dt>
                <dd>Huntsville, AL</dd>
              </div>
              <div className="flex gap-x-4">
                <dt className="flex-none">
                  <span className="sr-only">Telephone</span>
                  {/* <PhoneIcon className="w-6 text-base-400 h-7" aria-hidden="true" /> */}
                </dt>
                <dd>
                  <a className="hover:text-base-400" href="tel:+1 (555) 234-5678">
                    +1 (555) 234-5678
                  </a>
                </dd>
              </div>
              <div className="flex gap-x-4">
                <dt className="flex-none">
                  <span className="sr-only">Telephone</span>
                  {/* <EnvelopeIcon className="w-6 text-base-400 h-7" aria-hidden="true" /> */}
                </dt>
                <dd>
                  <a className="hover:text-base-400" href="mailto:contact@deadendkidsmusic.com">
                    contact@deadendkidsmusic.com
                  </a>
                </dd>
              </div>
            </dl>
          </div>
        </div>
        <ContactForm />
      </div>
    </div>
  );
}

function SquareSVGBackground() {
  return (
    <div className="absolute inset-y-0 left-0 -z-10 w-full overflow-hidden ring-1 ring-base-900/10 lg:w-1/2">
      <svg
        className="absolute inset-0 h-full w-full stroke-base-200 [mask-image:radial-gradient(100%_100%_at_top_right,white,transparent)]"
        aria-hidden="true">
        <defs>
          <pattern
            id="83fd4e5a-9d52-42fc-97b6-718e5d7ee527"
            width={200}
            height={200}
            x="100%"
            y={-1}
            patternUnits="userSpaceOnUse">
            <path d="M130 200V.5M.5 .5H200" fill="none" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" strokeWidth={0} className="text-base-900" />
        <svg x="100%" y={-1} className="overflow-visible fill-base-800">
          <path d="M-470.5 0h201v201h-201Z" strokeWidth={0} />
        </svg>
        <rect width="100%" height="100%" strokeWidth={0} fill="url(#83fd4e5a-9d52-42fc-97b6-718e5d7ee527)" />
      </svg>
    </div>
  );
}
