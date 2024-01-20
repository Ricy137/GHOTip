import type { Metadata } from 'next';
import Image from 'next/image';
import Script from 'next/script';
import { Inter } from 'next/font/google';
import GHOIcon from '@/assets/icons/GHOTip.svg';
import BG from '@/assets/bg.png';
import { ToastRender } from '@/components/Toast';
import ModalRender from '@/components/Modal';
import Providers from '@/modules/Providers';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'GHOTip',
  applicationName: 'GHOTip',
  description:
    'Effortlessly pay tips with the assurance of privacy, safety, and efficiency. Simplify your transactions now!',
  icons: GHOIcon,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#FF9591" />
        <link rel="apple-touch-icon" href="/pwa_192.png" sizes="180x180" />
        <link rel="mask-icon" href="/pwa_192.png" color="#FFFFFF" />
        <link rel="shortcut icon" href="/pwa_192.png" sizes="any" />
        <link rel="icon" href="/pwa_192.png" sizes="any" />
        <Script src="/js/snarkjs.min.js" />
      </head>

      <body className={inter.className}>
        <Image
          src={BG}
          alt=""
          width={1920}
          height={1357}
          className="absolute w-full h-full z-[-1000] pointer-events-none select-none"
          draggable={false}
        />
        <Providers>
          <ToastRender />
          <ModalRender />
          {children}
        </Providers>
      </body>
    </html>
  );
}
