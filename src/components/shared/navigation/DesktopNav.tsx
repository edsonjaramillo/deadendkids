import Link from 'next/link';

import Logo from '@/components/shared/Logo';
import { links } from '@/data/links';

export default function DesktopNav() {
  return (
    <nav className="bg-base hidden md:block" aria-label="Desktop">
      <div className="responsive flex h-16 items-center">
        <div className="flex w-full justify-between">
          <Logo />
          <ul className="flex space-x-6 items-center">
            {links.map((link) => (
              <li key={link.name}>
                <Link href={link.path} className="animated-link text-white">
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
}
