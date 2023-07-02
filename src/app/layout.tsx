import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

import '@/app/globals.css';
import DesktopNav from '@/components/shared/navigation/DesktopNav';
import MobileNav from '@/components/shared/navigation/MobileNav';

type RootLayoutProps = {
  children: React.ReactNode;
};

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  category: 'website',
  themeColor: '#171717',
  viewport: 'width=device-width, initial-scale=1',
  metadataBase: new URL('https://deadendkids.com/'),
  publisher: 'Dead End Kids',
};

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en" className={inter.className}>
      <body>
        <DesktopNav />
        <MobileNav />
        <main>{children}</main>
      </body>
    </html>
  );
}
