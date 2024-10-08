import './globals.css';

import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

import NextAuthProvider from './context/NextAuthProvider';
import { Texts } from './lib/texts';

const inter = Inter({
  weight: '700',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: Texts.BRAND_NAME,
  description: Texts.SLOGAN,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className='font-mono text-lg text-white h-full w-full'>
      <meta name="viewport" content="width=device-width, height=device-height initial-scale=1.0"></meta>
      <NextAuthProvider>
        <body className={`${inter.className} h-full w-full`}>
          {children}
        </body>
      </NextAuthProvider>
    </html>
  );
}
