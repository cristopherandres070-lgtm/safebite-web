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

export const metadata: Metadata = {
  metadataBase: new URL("https://safebite.cl"),
  title: "Safe Bite - Verificador de alérgenos alimentarios con IA",
  description:
    "Escanea productos y recibe alertas sobre alérgenos, trazas e ingredientes según tu perfil alimentario. Safe Bite está en beta en Chile.",
  openGraph: {
    title: "Safe Bite - Verificador de alérgenos alimentarios con IA",
    description:
      "Escanea productos y recibe alertas sobre alérgenos, trazas e ingredientes según tu perfil alimentario. Safe Bite está en beta en Chile.",
    url: "https://safebite.cl",
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
        <MotionConfig reducedMotion="user">{children}</MotionConfig>
      </body>
    </html>
  );
}
