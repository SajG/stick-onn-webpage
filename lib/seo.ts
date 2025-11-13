import type { Metadata } from "next";
import { companyInfo } from "@/lib/data";

const siteUrl = "https://stickonn.in";
const defaultOgImage = "/images/brand-logo.png";

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
    },
    openGraph: {
      title,
      description,
      type: resolvedType,
      url: canonicalUrl,
      siteName: companyInfo.name,
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



