import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import 'react-toastify/dist/ReactToastify.css';

import '@/app/globals.css';
import Footer from '@/components/shared/footer/Footer';
import DesktopNav from '@/components/shared/navigation/DesktopNav';
import MobileNav from '@/components/shared/navigation/MobileNav';
import ToastWrapper from '@/components/util/ToastWrapper';

type RootLayoutProps = {
  children: React.ReactNode;
};

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  openGraph: {
    type: 'website',
    siteName: 'Dead End Kids',
    description: 'Dead End Kids Logo',
    images: ['https://media.graphassets.com/ICK9f34TySthKPmvKpKT'],
  },
  category: 'website',
  themeColor: '#171717',
  viewport: 'width=device-width, initial-scale=1',
  metadataBase: new URL('https://deadendkidsmusic.com/'),
  publisher: 'Dead End Kids',
};

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en" className={inter.className}>
      <body>
        <DesktopNav />
        <MobileNav />
        <main>{children}</main>
        <Footer />
        <ToastWrapper />
      </body>
    </html>
  );
}
