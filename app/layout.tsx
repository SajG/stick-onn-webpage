import type { Metadata } from "next";
import { Montserrat, Poppins } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
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
      </body>
    </html>
  );
}
