export type DocumentFile = {
  href: string;
  /** Shown when a product has more than one grade document */
  label?: string;
  pages: number;
  size: string;
};

export type ProductDocuments = {
  productSlug: string;
  category: DownloadCategory;
  chemistry: string;
  tds: DocumentFile[];
  msds: DocumentFile[];
};

export const downloadCategories = [
  "Wood & Laminate",
  "MS Polymer",
  "Industrial",
  "Spray",
] as const;

export type DownloadCategory = (typeof downloadCategories)[number];

export const brochure = {
  title: "Synergy Bonding Solutions — Complete Product Brochure",
  href: "/downloads/synergy-bonding-product-brochure.pdf",
  cover: "/images/downloads/brochure-cover.jpg",
  pages: 24,
  size: "4.1 MB",
  highlights: [
    "Full Stick-Onn industrial range with technical data",
    "Polygum professional woodworking adhesives",
    "Hot melt grade selector and industrial packaging grades",
    "Pack sizes, applications and company certifications",
  ],
};

const tds = (slug: string, pages: number, size: string, label?: string): DocumentFile => ({
  href: `/downloads/tds/${slug}-tds.pdf`,
  pages,
  size,
  label,
});

const msds = (slug: string, pages: number, size: string, label?: string): DocumentFile => ({
  href: `/downloads/msds/${slug}-msds.pdf`,
  pages,
  size,
  label,
});

export const productDocuments: ProductDocuments[] = [
  {
    productSlug: "stick-onn-pur-adhesive",
    category: "Industrial",
    chemistry: "1K moisture-curing polyurethane",
    tds: [tds("stick-onn-pur-adhesive", 2, "11 KB")],
    msds: [msds("stick-onn-pur-adhesive", 5, "199 KB")],
  },
  {
    productSlug: "clout-d3",
    category: "Wood & Laminate",
    chemistry: "D3 cross-linked PVA",
    tds: [tds("clout-d3", 1, "152 KB")],
    msds: [msds("clout-d3", 4, "178 KB")],
  },
  {
    productSlug: "aqua-plus",
    category: "Wood & Laminate",
    chemistry: "Waterproof cross-linking PVA",
    tds: [tds("aqua-plus", 1, "149 KB")],
    msds: [msds("aqua-plus", 4, "178 KB")],
  },
  {
    productSlug: "drill-free",
    category: "MS Polymer",
    chemistry: "High-tack MS Polymer",
    tds: [tds("drill-free", 2, "659 KB")],
    msds: [msds("drill-free", 4, "179 KB")],
  },
  {
    productSlug: "lam2lam",
    category: "MS Polymer",
    chemistry: "Solvent-free MS Polymer",
    tds: [tds("lam2lam", 2, "644 KB")],
    msds: [msds("lam2lam", 4, "180 KB")],
  },
  {
    productSlug: "wpcfix",
    category: "Wood & Laminate",
    chemistry: "Fast-tack clear adhesive",
    tds: [tds("wpcfix", 1, "144 KB")],
    msds: [msds("wpcfix", 4, "191 KB")],
  },
  {
    productSlug: "hotmelt",
    category: "Industrial",
    chemistry: "EVA & SIS hot melt",
    tds: [
      tds("hotmelt", 1, "147 KB", "EVA edge banding granules"),
      tds("hotmelt-psa-bls89", 2, "31 KB", "C Melt PSA-BLS89 labelling grade"),
    ],
    msds: [
      msds("hotmelt", 4, "178 KB", "EVA edge banding granules"),
      msds("hotmelt-psa-bls89", 4, "178 KB", "C Melt PSA-BLS89 labelling grade"),
    ],
  },
  {
    productSlug: "epoxy-resin",
    category: "Industrial",
    chemistry: "2K epoxy resin + hardener",
    tds: [tds("epoxy-resin", 1, "145 KB")],
    msds: [msds("epoxy-resin", 5, "197 KB")],
  },
  {
    productSlug: "wood-to-laminate-spray-adhesive",
    category: "Spray",
    chemistry: "Synthetic rubber aerosol",
    tds: [tds("wood-to-laminate-spray-adhesive", 1, "288 KB")],
    msds: [msds("wood-to-laminate-spray-adhesive", 5, "197 KB")],
  },
];

export function getProductDocuments(slug: string) {
  return productDocuments.find((doc) => doc.productSlug === slug);
}
