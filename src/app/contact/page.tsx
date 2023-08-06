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

function PhoneIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" className="fill-white">
      <path
        fillRule="evenodd"
        d="M1.5 4.5a3 3 0 013-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 01-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 006.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 011.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 01-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5z"
        clipRule="evenodd"
      />
    </svg>
  );
}

function EmailIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" className="fill-white">
      <path d="M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67z" />
      <path d="M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 5.978a1.5 1.5 0 001.572 0L22.5 6.908z" />
    </svg>
  );
}

function LocationIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" className="fill-white">
      <path
        fillRule="evenodd"
        d="M7.5 3.75A1.5 1.5 0 006 5.25v13.5a1.5 1.5 0 001.5 1.5h6a1.5 1.5 0 001.5-1.5V15a.75.75 0 011.5 0v3.75a3 3 0 01-3 3h-6a3 3 0 01-3-3V5.25a3 3 0 013-3h6a3 3 0 013 3V9A.75.75 0 0115 9V5.25a1.5 1.5 0 00-1.5-1.5h-6zm5.03 4.72a.75.75 0 010 1.06l-1.72 1.72h10.94a.75.75 0 010 1.5H10.81l1.72 1.72a.75.75 0 11-1.06 1.06l-3-3a.75.75 0 010-1.06l3-3a.75.75 0 011.06 0z"
        clipRule="evenodd"
      />
    </svg>
  );
}

export default function ContactPage() {
  return (
    <div className="relative isolate">
      <div className="mx-auto grid max-w-7xl grid-cols-1 lg:grid-cols-2">
        <div className="relative px-6 pb-20 pt-24 sm:pt-32 lg:static lg:px-8 lg:py-48">
          <div className="responsive">
            <SquareSVGBackground />
            <h1 className="text-3xl lg:text-5xl font-bold tracking-tight">Get in touch</h1>
            <p className="mt-6 text-lg leading-8 text-base-400">
              We&apos;d love to hear from you! Whether you have a question, a suggestion, or just want to say hello,
              we&apos;re all ears.
            </p>
            <dl className="mt-10 space-y-4 text-base leading-7">
              <div className="flex gap-x-4">
                <dt className="flex-none">
                  <LocationIcon />
                </dt>
                <dd>Huntsville, AL</dd>
              </div>
              <div className="flex gap-x-4">
                <dt className="flex-none">
                  <PhoneIcon />
                </dt>
                <dd>
                  <a className="hover:text-base-400 animate" href="tel:2052691766">
                    (205) 269-1766
                  </a>
                </dd>
              </div>
              <div className="flex gap-x-4">
                <dt className="flex-none">
                  <EmailIcon />
                </dt>
                <dd>
                  <a className="hover:text-base-400" href="mailto:matthew_fannin@yahoo.com">
                    matthew_fannin@yahoo.com
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
        className="absolute inset-0 h-full w-full [mask-image:radial-gradient(100%_100%_at_top_right,white,transparent)]"
        aria-hidden="true">
        <defs>
          <pattern width={200} height={200} x="100%" y={-1} patternUnits="userSpaceOnUse">
            <path d="M130 200V.5M.5 .5H200" fill="none" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" strokeWidth={0} className="text-base-900" />
        <svg x="100%" y={-1} className="overflow-visible fill-base-800">
          <path d="M-470.5 0h201v201h-201Z" strokeWidth={0} />
        </svg>
        <rect width="100%" height="100%" strokeWidth={0} />
      </svg>
    </div>
  );
}
