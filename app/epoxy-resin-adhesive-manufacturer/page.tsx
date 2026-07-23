import { landingPages } from "@/lib/landing-pages-data";
import { LongFormLandingTemplate } from "@/components/long-form-landing-template";
import { createPageMetadata } from "@/lib/seo";
import { notFound } from "next/navigation";

const SLUG = "epoxy-resin-adhesive-manufacturer";
const page = landingPages.find((p) => p.slug === SLUG);

export const metadata = page
  ? createPageMetadata({
      title: page.seoTitle,
      description: page.seoDescription,
      path: `/${SLUG}`,
      keywords: page.keywords,
      images: ["/images/products/clout-d3.png"],
    })
  : {};

export default function EpoxyResinAdhesiveManufacturerPage() {
  if (!page) notFound();
  return <LongFormLandingTemplate page={page} />;
}
