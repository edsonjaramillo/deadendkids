import Link from 'next/link';

import Logo from '@/components/shared/Logo';
import ExitIcon from '@/components/shared/navigation/ExitIcon';
import HamburgerIcon from '@/components/shared/navigation/HamburgerIcon';
import MobileMenu from '@/components/shared/navigation/MobileMenu';

export default function MobileNav() {
  return (
    <nav className="relative md:hidden" aria-label="Mobile">
      <div className="responsive flex h-16 items-center justify-between">
        <Link href="/">
          <Logo />
        </Link>
        <HamburgerIcon />
        <ExitIcon />
      </div>
      <MobileMenu />
    </nav>
  );
}
