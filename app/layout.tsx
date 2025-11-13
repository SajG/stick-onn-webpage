import type { Metadata } from "next";
import { Montserrat, Poppins } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { companyInfo } from "@/lib/data";
import { absoluteUrl } from "@/lib/seo";
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

const siteTitle = "Stick-Onn Adhesives | Smart Strength. Perfect Bond.";
const siteDescription =
  "Discover Stick-Onn premium adhesives engineered by Synergy Bonding Solutions for carpenters, furniture makers, and industrial partners across India.";

export const metadata: Metadata = {
  title: {
    default: siteTitle,
    template: "%s | Stick-Onn Adhesives",
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
  },
  alternates: {
    canonical: "https://stickonn.in",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const structuredData = [
    {
      "@context": "https://schema.org",
      "@type": "Organization",
      name: companyInfo.name,
      legalName: companyInfo.legal,
      url: "https://stickonn.in",
      logo: absoluteUrl("/images/brand-logo.png"),
      sameAs: Object.values(companyInfo.social),
      contactPoint: [
        {
          "@type": "ContactPoint",
          telephone: companyInfo.phone,
          contactType: "customer service",
          areaServed: "IN",
          availableLanguage: ["English"],
        },
      ],
      address: {
        "@type": "PostalAddress",
        streetAddress: companyInfo.address,
        addressCountry: "IN",
      },
    },
    {
      "@context": "https://schema.org",
      "@type": "WebSite",
      name: companyInfo.name,
      url: "https://stickonn.in",
    },
  ];

  return (
    <html lang="en">
      <body
        className={`${montserrat.variable} ${poppins.variable} antialiased bg-[var(--background)] text-[var(--foreground)]`}
      >
        <div className="flex min-h-screen flex-col bg-white">
          <Navbar />
          <main className="flex-1 pb-24 pt-10">{children}</main>
          <Footer />
        </div>
        <script
          type="application/ld+json"
          suppressHydrationWarning
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </body>
    </html>
  );
}
