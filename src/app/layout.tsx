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
    default: "Vakaalat.in — Lawyer-Client Management, Case Tracking & Legal Workflow Platform",
    template: "%s | Vakaalat"
  },
  description: "Vakaalat is the best lawyer management software in India. Manage clients, cases, documents, and hearings in one platform. Automate legal workflows and track court dates.",
  keywords: [
    "lawyer management software India",
    "legal case management system",
    "lawyer-client communication app",
    "law firm automation tool",
    "legal workflow software",
    "advocate case tracking app",
    "legal document management",
    "client intake system for lawyers",
    "Legal Tech",
    "Indian Advocates"
  ],
  authors: [{ name: "Vakaalat Team" }],
  creator: "Vakaalat",
  publisher: "Vakaalat",
  metadataBase: new URL('https://www.vakaalat.in'),
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://www.vakaalat.in",
    title: "Vakaalat | Best Legal Practice Management Software in India",
    description: "Secure digital workspace for advocates. Manage cases, track court dates automatically, and streamline client communication.",
    siteName: "Vakaalat",
    images: [
      {
        url: "/images/mission.png",
        width: 1200,
        height: 630,
        alt: "Vakaalat Legal Practice Management Software",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Vakaalat | Legal Tech for Indian Lawyers",
    description: "The #1 App for Indian Advocates. Case tracking, client management, and legal automation.",
    images: ["/images/mission.png"],
    creator: "@vakaalatofficial", 
  },
  icons: {
    icon: "/icon.png",
    shortcut: "/favicon.ico",
    apple: "/icon.png",
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

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "name": "Vakaalat",
      "url": "https://www.vakaalat.in",
      "logo": "https://www.vakaalat.in/icon.png",
      "sameAs": [
        "https://twitter.com/vakaalatofficial",
        "https://linkedin.com/company/vakaalat"
      ],
      "contactPoint": {
        "@type": "ContactPoint",
        "telephone": "+91-1234567890",
        "contactType": "customer service",
        "areaServed": "IN"
      }
    },
    {
      "@type": "WebSite",
      "name": "Vakaalat Legal Suite",
      "url": "https://www.vakaalat.in",
      "potentialAction": {
        "@type": "SearchAction",
        "target": "https://www.vakaalat.in/search?q={search_term_string}",
        "query-input": "required name=search_term_string"
      }
    }
  ]
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
