import type { Metadata, Viewport } from "next";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import FloatingActions from "@/components/layout/FloatingActions";
import SmoothScrollProvider from "@/components/shared/SmoothScrollProvider";
import SchemaJsonLd from "@/components/shared/SchemaJsonLd";
import { companyData } from "@/data/company";

export const viewport: Viewport = {
  themeColor: "#0B1B3A",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://trackcargopackers.in"),
  title: {
    default: `${companyData.name} - India's Trusted Relocation Partner`,
    template: `%s | ${companyData.name}`,
  },
  description: companyData.description,
  keywords: [
    "packers and movers chennai",
    "track cargo packers and movers",
    "household shifting services chennai",
    "bike transport chennai",
    "car transportation chennai",
    "office shifting chennai",
    "intercity packers movers india",
    "chennai to bangalore packers and movers",
  ],
  authors: [{ name: companyData.name, url: "https://trackcargopackers.in" }],
  openGraph: {
    title: `${companyData.name} - 100% Insured & GPS Tracked Relocation`,
    description: companyData.subline,
    url: "https://trackcargopackers.in",
    siteName: companyData.name,
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?q=80&w=1200",
        width: 1200,
        height: 630,
        alt: `${companyData.name} Fleet`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: companyData.name,
    description: companyData.subline,
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "32x32" },
      { url: "/favicon.png", type: "image/png", sizes: "512x512" },
    ],
    apple: "/apple-icon.png",
    shortcut: "/favicon.ico",
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
        <link rel="icon" href="/heder-logo.png" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Plus+Jakarta+Sans:wght@500;600;700;800&display=swap"
          rel="stylesheet"
        />
        <SchemaJsonLd />
      </head>
      <body className="antialiased bg-white text-slate-900 selection:bg-orange selection:text-white">
        <SmoothScrollProvider>
          <div className="flex flex-col min-h-screen">
            <Navbar />
            <main className="flex-grow pt-[72px] lg:pt-[80px]">
              {children}
            </main>
            <Footer />
            <FloatingActions />
          </div>
        </SmoothScrollProvider>
      </body>
    </html>
  );
}

