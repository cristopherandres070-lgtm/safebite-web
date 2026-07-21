import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { MotionConfig } from "framer-motion";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const SITE_URL = "https://www.safebite.cl";
const SITE_TITLE = "Safe Bite - Verificador de alérgenos alimentarios con IA";
const SITE_DESCRIPTION =
  "Escanea productos y recibe alertas sobre alérgenos, trazas e ingredientes según tu perfil alimentario. Safe Bite está en beta en Chile.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: SITE_TITLE,
  description: SITE_DESCRIPTION,
  keywords: [
    "alérgenos",
    "alergias alimentarias",
    "verificador de alérgenos",
    "trazas de alimentos",
    "Safe Bite",
    "seguridad alimentaria",
    "Chile",
  ],
  authors: [{ name: "Safe Bite" }],
  creator: "Safe Bite",
  publisher: "Safe Bite",
  applicationName: "Safe Bite",
  category: "food",
  alternates: {
    canonical: SITE_URL,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  openGraph: {
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    url: SITE_URL,
    siteName: "Safe Bite",
    locale: "es_CL",
    type: "website",
    images: [
      {
        url: "/image/logo-safebite.png",
        width: 1024,
        height: 1024,
        alt: "Safe Bite, verificador de alérgenos",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    images: ["/image/logo-safebite.png"],
  },
};

export const viewport = {
  themeColor: "#050A05",
};

const softwareApplicationSchema = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "Safe Bite",
  description: SITE_DESCRIPTION,
  url: SITE_URL,
  applicationCategory: "MobileApplication",
  operatingSystem: "iOS, Android",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-[#050A05] font-sans">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(softwareApplicationSchema),
          }}
        />
        <MotionConfig reducedMotion="user">{children}</MotionConfig>
      </body>
    </html>
  );
}
