import React from 'react';
import type { Metadata } from 'next';
import './globals.css';
import { NextUIProvider } from '@nextui-org/react';
import { Roboto } from 'next/font/google';

const roboto = Roboto({ weight: ['100', '300', '400', '500', '700', '900'], subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Career Connect Center: Your Gateway to Top Jobs, Careers, and Recruitment Solutions',
  description: 'Discover thousands of job opportunities, career advice, and recruitment solutions at Career Connect Center. Whether you\'re a job seeker or an employer, we connect you with the right opportunities.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="light">
      <body className={roboto.className}>
        <NextUIProvider>{children}</NextUIProvider>
      </body>
    </html>
  );
}
