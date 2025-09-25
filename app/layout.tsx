import type { Metadata } from "next";
// @ts-expect-error
import "./globals.css";

import { Instrument_Serif } from 'next/font/google';

const instrumentSerif = Instrument_Serif({
  subsets: ['latin'], // Specify the necessary subsets
  display: 'swap', // Control font display behavior
  weight: '400', // Specify desired weights, e.g., '400', '700'
});

export const metadata: Metadata = {
  title: "Scrupulous",
  applicationName: "scrupulous freelancing",
  description:
    "Scrupulous is freelancing agency giving service of web development, graphics designing and SEO optimization, our motto is to make client happy and be their trustworthy",
  authors: [{ name: "Mussadiq khan", url: "https://mussadiqkhan.vercel.app" }],
  keywords: [
    "Web development",
    "freelancing",
    "graphics designing",
    "startup",
    "mussadiq khan",
    "scrupulous",
    "technology",
    "Scrupulous",
    "ecommerce",
    "web developer",
    "ui/ux",
  ],
  creator: "Mussadiq khan",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-snippet': -1,
      'max-image-preview': 'large',
      'max-video-preview': -1,
    },
  },
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.png" />
        <meta name="google-site-verification" content="3o7TyGVcbl7HdUTElJVPYv05mzt8Ubwu9N0oQenA0F4" />
      </head>
      <body
        className={`${instrumentSerif.className} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
