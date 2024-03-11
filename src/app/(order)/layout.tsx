// import { Metadata } from 'next';

// export const metadata: Metadata = {
//   title: 'Payment',
//   description: "codeeon's payment practices",
// };

export default function OrderLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <div>{children}</div>;
}
