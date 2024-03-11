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
      <body
        className={cn(
          'min-h-screen bg-background font-sans antialiased flex items-center justify-center',
          fontSans.variable
        )}
      >
        {children}
      </body>
    </html>
  );
}
