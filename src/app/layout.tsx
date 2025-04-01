import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import SmoothScrollContext from "@/components/page-effects/SmoothScrollContext";
import { siteConfig } from "@/config/site";
import NavBar from "@/components/ui/NavBar";
import { ViewTransitions } from "next-view-transitions";
import Footer from "@/components/ui/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s - ${siteConfig.name}`,
  },
  description: siteConfig.description,
  icons: {
    icon: "/favicon.ico",
    apple: "/favicon.ico",
  },
  metadataBase: new URL(siteConfig.url),
  twitter: {
    card: "summary",
    site: siteConfig.url,
    creator: siteConfig.creator,
    title: siteConfig.longName,
    description: siteConfig.description,
    images: [{ url: "/img/opengraph-image.jpg" }],
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteConfig.url,
    title: siteConfig.longName,
    description: siteConfig.description,
    images: [{ url: "/img/opengraph-image.jpg" }],
    siteName: siteConfig.name,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ViewTransitions>
      <html lang="en">
        <body className={`${geistSans.variable} ${geistMono.variable}`}>
          <SmoothScrollContext>
            <NavBar />
            {children}
            <Footer />
          </SmoothScrollContext>
        </body>
      </html>
    </ViewTransitions>
  );
}
