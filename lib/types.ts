export type FaqItem = {
  question: string;
  answer: string;
};

export type Product = {
  slug: string;
  name: string;
  tagline: string;
  shortDescription: string;
  description: string;
  longDescription: string[];
  seoTitle: string;
  seoDescription: string;
  keyBenefit: string;
  keywords: string[];
  features: string[];
  applications: string[];
  howToApply: string[];
  packs: string[];
  heroImage: string;
  datasheetUrl: string;
  faqs: FaqItem[];
  relatedProductSlugs: string[];
  applicationSlug: string;
};

export type ApplicationPage = {
  slug: string;
  seoTitle: string;
  seoDescription: string;
  keywords: string[];
  h1: string;
  intro: string;
  sections: { title: string; paragraphs: string[] }[];
  recommendedProductSlugs: string[];
  faqs: FaqItem[];
  localSeoText: string;
  image: string;
};

export type ProductShowcaseItem = {
  name: string;
  description: string;
  image: string;
  href: string;
  badge?: string;
};

export type LandingPageSection = {
  title: string;
  paragraphs: string[];
  bullets?: string[];
  /** Renders as a card nested under the preceding "Why Choose" section */
  layout?: "card";
};

export type LandingPageCta = {
  title: string;
  description: string;
  productName: string;
};

export type LandingPage = {
  slug: string;
  seoTitle: string;
  seoDescription: string;
  keywords: string[];
  h1: string;
  intro: string;
  sections: LandingPageSection[];
  productSlugs: string[];
  productShowcase?: ProductShowcaseItem[];
  productShowcaseTitle?: string;
  rangeSectionTitle?: string;
  midPageCta?: LandingPageCta;
  bottomCta?: LandingPageCta;
  faqs: FaqItem[];
  relatedLinks: { href: string; label: string }[];
  /** When true, render full content instead of truncated preview sections */
  fullContent?: boolean;
};

export type ApplicationCard = {
  slug: string;
  title: string;
  description: string;
  image: string;
  products: string[];
  points: string[];
};
