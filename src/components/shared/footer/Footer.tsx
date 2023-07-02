import Link from 'next/link';

import Logo from '@/components/shared/Logo';
import SocicalIcon, { socials } from '@/components/shared/SocialIcon';
import FooterLink from '@/components/shared/footer/FooterLink';
import FooterSection from '@/components/shared/footer/FooterSection';

function getYear() {
  return new Date().getFullYear();
}

export default async function Footer() {
  return (
    <footer className="bg-base-950">
      <div className="responsive py-12 pb-8">
        <Link href="/" legacyBehavior>
          <a>
            <Logo />
          </a>
        </Link>
        <nav aria-label="Footer" className="mt-4 grid grid-cols-2 gap-4 md:grid-cols-3 lg:mt-8 lg:grid-cols-4 lg:gap-8">
          <FooterSection title="Creativity">
            <FooterLink href="/music" title="Music" />
            <FooterLink href="/shows" title="Shows" />
            <FooterLink href="/gallery" title="Gallery" />
          </FooterSection>
          <FooterSection title="Information">
            <FooterLink href="/about" title="About" />
            <FooterLink href="/contact" title="Contact" />
            <FooterLink href="/blog" title="Blog" />
          </FooterSection>
          <FooterSection title="Legal">
            <FooterLink href="/legal/privacy" title="Privacy Policy" />
            <FooterLink href="/legal/terms" title="Terms of Service" />
          </FooterSection>
          <FooterSection title="Latest Blogs">
            <FooterLink href="blog/example1" title="Example 1" />
          </FooterSection>
        </nav>

        <div className="mt-8 border-t border-white/10 pt-8 md:flex md:items-center md:justify-between">
          <nav aria-label="Social Media Links" className="flex space-x-4 md:order-2">
            {socials.map((social) => (
              <SocicalIcon key={social.name} name={social.name} url={social.url}>
                {social.icon}
              </SocicalIcon>
            ))}
          </nav>
          <p className="text-xs leading-5 text-base-400 mt-4 md:mt-0">
            &copy; {getYear()} Dead End Kids. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
