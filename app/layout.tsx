import type { Metadata } from "next";
import { Geist, Geist_Mono, Pacifico } from "next/font/google";
import "./globals.css";
import { BASE_PATH } from './config';

const pacifico = Pacifico({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-pacifico',
})

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "録移音機 - 音と軌跡を記録する",
  description: "移動経路と音声を同時に記録し、後から再生できるモバイルアプリケーションです。散歩、旅行、フィールドワークの思い出を、音と位置情報で残しましょう。",
  keywords: ["録移音機", "GPS記録", "音声記録", "位置情報", "移動軌跡", "フィールドワーク", "旅行記録", "散歩記録"],
  authors: [{ name: "人流楽器制作集団" }],
  creator: "人流楽器制作集団",
  publisher: "Human Mobility Instrument",
  openGraph: {
    type: "website",
    locale: "ja_JP",
    url: "https://your-domain.com",
    title: "録移音機 - 音と軌跡を記録する",
    description: "移動経路と音声を同時に記録し、後から再生できるモバイルアプリケーション。散歩、旅行、フィールドワークの思い出を音と位置情報で記録。",
    siteName: "録移音機",
    images: [
      {
        url: "/images/hero.png",
        width: 1200,
        height: 630,
        alt: "録移音機アプリ画面",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "録移音機 - 音と軌跡を記録する",
    description: "移動経路と音声を同時に記録し、後から再生できるモバイルアプリケーション",
    images: ["/images/hero.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 5,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja" suppressHydrationWarning={true}>
      <head>
        <link rel="icon" href={`${BASE_PATH}/images/logo.png`} type="image/png" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${pacifico.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
