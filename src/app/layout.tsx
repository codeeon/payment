import '@/styles/globals.css';
import { Inter as FontSans } from 'next/font/google';

import { cn } from '@/lib/utils';
import { Metadata } from 'next';

const fontSans = FontSans({
  subsets: ['latin'],
  variable: '--font-sans',
});

export const metadata: Metadata = {
  title: 'Payment',
  description: "codeeon's payment practices",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en' suppressHydrationWarning>
      <head />
      <body className={cn('min-h-screen bg-background font-sans antialiased', fontSans.variable)}>
        <header className='flex items-center justify-center'>
          <h1 className='text-3xl font-bold mt-8 mb-14 '>주문/결제하기</h1>
        </header>
        <div className='flex items-center justify-center'>{children}</div>
      </body>
    </html>
  );
}
