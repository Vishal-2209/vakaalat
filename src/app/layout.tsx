import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
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
  title: {
    default: "Vakaalat | Legal Technology for Indian Advocates",
    template: "%s | Vakaalat"
  },
  description: "Vakaalat is a unified legal technology ecosystem designed for Indian advocates. Manage clients, cases, and documentation with our secure, lawyer-centric software suite.",
  keywords: ["Legal Tech", "Indian Advocates", "Case Management", "Lawyer Software", "Vakaalat", "Legal Practice Management", "Indian Law"],
  authors: [{ name: "Vakaalat Team" }],
  creator: "Vakaalat",
  publisher: "Vakaalat",
  metadataBase: new URL('https://www.vakaalat.in'),
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://www.vakaalat.in",
    title: "Vakaalat | Powering the Modern Indian Lawyer",
    description: "Simplify your legal practice with Vakaalat. Intelligent tools for client management, profiling, and drafting.",
    siteName: "Vakaalat",
    images: [
      {
        url: "/images/mission.png", // Using the mission image as a fallback OG image
        width: 1200,
        height: 630,
        alt: "Vakaalat Legal Tech Ecosystem",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Vakaalat | Legal Tech for India",
    description: "The digital backbone for the Indian legal system. Secure, efficient, and lawyer-first.",
    images: ["/images/mission.png"],
    creator: "@vakaalatofficial", 
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
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
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
