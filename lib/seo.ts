import type { Metadata } from "next";
import { companyInfo } from "@/lib/data";
import type { FaqItem, Product } from "@/lib/types";

const siteUrl = "https://stickonn.in";
const defaultOgImage = "/images/brand-logo.png";
const locale = "en-IN";

type OpenGraphType = "website" | "article" | "book" | "profile";

type CreatePageMetadataArgs = {
  title: string;
  description: string;
  path?: string;
  type?: OpenGraphType;
  keywords?: string[];
  images?: string[];
  other?: Metadata["other"];
};

export function absoluteUrl(path = "/") {
  if (!path.startsWith("http")) {
    return new URL(path, siteUrl).toString();
  }
  return path;
}

const allowedOgTypes: OpenGraphType[] = ["website", "article", "book", "profile"];

export function createPageMetadata({
  title,
  description,
  path = "/",
  type = "website",
  keywords = [],
  images,
  other,
}: CreatePageMetadataArgs): Metadata {
  const canonicalUrl = absoluteUrl(path);
  const resolvedImages = (images?.length ? images : [defaultOgImage]).map((image) =>
    absoluteUrl(image),
  );
  const resolvedType: OpenGraphType = allowedOgTypes.includes(type ?? "website")
    ? type ?? "website"
    : "website";

  return {
    title,
    description,
    keywords,
    alternates: {
      canonical: canonicalUrl,
      languages: {
        [locale]: canonicalUrl,
      },
    },
    openGraph: {
      title,
      description,
      type: resolvedType,
      url: canonicalUrl,
      siteName: companyInfo.name,
      locale: "en_IN",
      images: resolvedImages.map((url) => ({
        url,
        width: 1200,
        height: 630,
        alt: `${title} | ${companyInfo.name}`,
      })),
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: resolvedImages,
    },
    other,
  };
}

type BreadcrumbItem = { name: string; path: string };

export function createBreadcrumbSchema(items: BreadcrumbItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: absoluteUrl(item.path),
    })),
  };
}

export function createFaqSchema(faqs: FaqItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}

export function createProductSchema(product: Product) {
  return {
    "@context": "https://schema.org",
    "@type": "Product",
    name: product.name,
    description: product.seoDescription,
    image: absoluteUrl(product.heroImage),
    sku: product.slug.toUpperCase(),
    brand: {
      "@type": "Brand",
      name: companyInfo.name,
    },
    manufacturer: {
      "@type": "Organization",
      name: companyInfo.legal,
    },
    slogan: product.tagline,
    category: "Industrial Adhesives",
    url: absoluteUrl(`/products/${product.slug}`),
    offers: {
      "@type": "Offer",
      url: absoluteUrl(`/contact?product=${encodeURIComponent(product.name)}`),
      priceCurrency: "INR",
      availability: "https://schema.org/InStock",
      seller: {
        "@type": "Organization",
        name: companyInfo.legal,
      },
    },
    additionalProperty: product.features.map((feature) => ({
      "@type": "PropertyValue",
      name: "Feature",
      value: feature,
    })),
  };
}

export function createLocalBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: companyInfo.name,
    legalName: companyInfo.legal,
    url: siteUrl,
    logo: absoluteUrl("/images/brand-logo.png"),
    image: absoluteUrl("/images/brand-logo.png"),
    telephone: companyInfo.phone,
    email: companyInfo.email,
    priceRange: "$$",
    address: {
      "@type": "PostalAddress",
      streetAddress: companyInfo.address,
      addressLocality: "Pune",
      addressRegion: "Maharashtra",
      postalCode: "411045",
      addressCountry: "IN",
    },
    areaServed: [
      { "@type": "Country", name: "India" },
      { "@type": "State", name: "Maharashtra" },
      { "@type": "State", name: "Delhi" },
      { "@type": "City", name: "Mumbai" },
      { "@type": "City", name: "Bangalore" },
    ],
    sameAs: Object.values(companyInfo.social),
  };
}

export function createWebSiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: companyInfo.name,
    url: siteUrl,
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: `${siteUrl}/products?q={search_term_string}`,
      },
      "query-input": "required name=search_term_string",
    },
  };
}

export function createOrganizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: companyInfo.name,
    legalName: companyInfo.legal,
    url: siteUrl,
    logo: absoluteUrl("/images/brand-logo.png"),
    sameAs: Object.values(companyInfo.social),
    contactPoint: [
      {
        "@type": "ContactPoint",
        telephone: companyInfo.phone,
        contactType: "customer service",
        areaServed: "IN",
        availableLanguage: ["English", "Hindi"],
      },
    ],
    address: {
      "@type": "PostalAddress",
      streetAddress: companyInfo.address,
      addressCountry: "IN",
    },
  };
}

export const whatsappUrl = (message: string) =>
  `https://wa.me/919021086995?text=${encodeURIComponent(message)}`;
