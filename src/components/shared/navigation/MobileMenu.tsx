'use client';

import { toggleMobileMenu } from '@/animations/navigation';
import { links } from '@/data/links';

export default function MobileMenu() {
  return (
    <div id="mobile-menu" className="animate close-mobile-menu overflow-hidden bg-base-900" style={{ maxHeight: 0 }}>
      <div className="responsive flex flex-col gap-3 py-4 text-lg" role="menu">
        {links.map((link) => (
          <a
            key={link.name}
            onClick={() => toggleMobileMenu('closed')}
            role="menuitem"
            className="animate-link animate rounded px-4 py-2 text-sm font-semibold text-base-300 hover:bg-base-800"
            href={link.path}>
            {link.name}
          </a>
        ))}
      </div>
    </div>
  );
}
