import type { Metadata } from "next";
import { Montserrat, Poppins } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { WhatsAppSticky } from "@/components/whatsapp-sticky";
import { JsonLd } from "@/components/json-ld";
import { companyInfo } from "@/lib/data";
import {
  createLocalBusinessSchema,
  createOrganizationSchema,
  createWebSiteSchema,
} from "@/lib/seo";

const montserrat = Montserrat({
  variable: "--font-heading",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

const poppins = Poppins({
  variable: "--font-body",
  subsets: ["latin"],
  display: "swap",
  weight: ["300", "400", "500", "600"],
});

const siteTitle = "Stick-Onn Adhesives | Premium Speciality Adhesives in India";
const siteDescription =
  "Stick-Onn crafts premium speciality adhesives engineered by Synergy Bonding Solutions for furniture manufacturers, fabricators, and industrial partners across India.";

export const metadata: Metadata = {
  title: {
    default: siteTitle,
    template: "%s",
  },
  description: siteDescription,
  metadataBase: new URL("https://stickonn.in"),
  icons: {
    icon: "/icon.png",
    shortcut: "/icon.png",
    apple: "/icon.png",
  },
  openGraph: {
    title: siteTitle,
    description: siteDescription,
    url: "https://stickonn.in",
    siteName: "Stick-Onn Adhesives",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "https://stickonn.in/images/brand-logo.png",
        width: 1200,
        height: 630,
        alt: "Stick-Onn Adhesives — Premium speciality adhesives in India",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteTitle,
    description: siteDescription,
    images: ["https://stickonn.in/images/brand-logo.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const structuredData = [
    createOrganizationSchema(),
    createLocalBusinessSchema(),
    createWebSiteSchema(),
  ];

  return (
    <html lang="en-IN">
      <body
        className={`${montserrat.variable} ${poppins.variable} antialiased bg-[var(--background)] text-[var(--foreground)]`}
      >
        <div className="flex min-h-screen flex-col bg-white">
          <Navbar />
          <main className="flex-1 pb-24 pt-10">{children}</main>
          <Footer />
        </div>
        <WhatsAppSticky />
        <JsonLd data={structuredData} />
      </body>
    </html>
  );
}
