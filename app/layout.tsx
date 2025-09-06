import type { Metadata } from "next";
import "./globals.css";

import { Instrument_Serif } from 'next/font/google';

const instrumentSerif = Instrument_Serif({
  subsets: ['latin'], // Specify the necessary subsets
  display: 'swap', // Control font display behavior
  weight: '400', // Specify desired weights, e.g., '400', '700'
});

export const metadata: Metadata = {
  title: "Scrupulous",
  description: "Scrupulous is freelancing agency giving service of we development",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${instrumentSerif.className} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
