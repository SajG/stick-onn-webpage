export type { Product, ApplicationPage, LandingPage, FaqItem, ApplicationCard } from "./types";
export { products } from "./products-data";
export { applicationPages } from "./application-pages-data";
export { landingPages } from "./landing-pages-data";

export const highlightFeatures = [
  {
    icon: "droplets",
    title: "Waterproof Assurance",
    description:
      "Engineered formulas that withstand moisture, humidity, and outdoor exposure.",
  },
  {
    icon: "flame",
    title: "Heat Resistant",
    description:
      "Confidence under pressure with adhesives that keep their hold in high temperatures.",
  },
  {
    icon: "timer",
    title: "Fast Dry & High Tack",
    description:
      "Accelerate production with rapid set times and smart stick technology.",
  },
  {
    icon: "shield-check",
    title: "Trusted Strength",
    description:
      "Consistent bond performance trusted by carpenters, fabricators, and OEMs.",
  },
];

export const testimonials = [
  {
    quote:
      "Stick-Onn Aqua Adhesive has transformed our modular kitchen installs. The fast cure and water resistance cut our callbacks dramatically.",
    name: "Rohit Kulkarni",
    role: "Director, Kulkarni Interiors (Pune)",
  },
  {
    quote:
      "We rely on Clout D3 for export furniture. The bond strength and finish quality rival any international brand we've used.",
    name: "Prerna Shah",
    role: "Head of Production, CraftHaus Living",
  },
  {
    quote:
      "AeroFix is the go-to spray adhesive for our upholstery lines. Even coverage, minimal overspray, and consistent performance.",
    name: "Shahid Ansari",
    role: "Plant Manager, LuxeSeats Manufacturing",
  },
];

import { applicationPages } from "./application-pages-data";
import { excerpt } from "./display-content";

const applicationTitles: Record<string, string> = {
  "furniture-manufacturing": "Furniture & Carpentry",
  "laminate-bonding": "Laminate & Membrane Pressing",
  "wpc-pvc-installation": "WPC Board Installation",
  "upholstery-foam-fabric": "Upholstery & Spray",
  "construction-mounting": "Construction & Mounting",
  "automotive-interior": "Automotive Interiors",
  "industrial-assembly": "Industrial Assembly",
  "epoxy-repairs": "Epoxy Repairs & Bonding",
};

export const applications = applicationPages.map((page) => ({
  slug: page.slug,
  title: applicationTitles[page.slug] ?? page.h1,
  description: excerpt(page.intro, 120),
  image: page.image,
  products: page.recommendedProductSlugs,
  points: [] as string[],
}));

export const companyInfo = {
  name: "Stick-Onn",
  legal: "Synergy Bonding Solutions Pvt. Ltd.",
  tagline: "Smart Strength. Perfect Bond.",
  email: "contact@stickonn.in",
  phone: "+91 90210 86995",
  phoneAlt: "+91 77740 55316",
  address: "205, 4th Floor, Mont Vert Spectra, Pallod Farms, Baner 411045",
  plant: "Polygon Adhesive & Resins Pvt. Ltd., Chakan Plant",
  social: {
    facebook: "https://www.facebook.com/profile.php?id=61591396277538",
    instagram: "https://www.instagram.com/stickonn_adhesive/",
    linkedin: "https://www.linkedin.com/company/synergy-bonding-solution-pvt-ltd",
    youtube: "https://www.youtube.com/@SynergyBondingSolutions",
  },
};

export const upcomingProducts = [
  {
    name: "Stick-Onn FlexFix",
    category: "Membrane Press Adhesive",
    description:
      "High-flex formulation engineered for membrane and vacuum press lines, ensuring wrinkle-free finishes on complex panel geometries.",
    status: "Coming soon",
  },
  {
    name: "Stick-Onn EdgeFix",
    category: "Post Forming Adhesive",
    description:
      "Heat-activated adhesive optimised for postforming cycles, delivering crisp bends and long-term peel resistance on contoured edges.",
    status: "Coming soon",
  },
  {
    name: "Stick-Onn EasyFix",
    category: "Sticker Adhesive – Manual",
    description:
      "Fast-grab manual sticker adhesive that keeps small-batch branding lines efficient with minimal mess and consistent tack.",
    status: "Coming soon",
  },
  {
    name: "Stick-Onn SmartFix",
    category: "Sticker Adhesive – Manual (Pro)",
    description:
      "Professional-grade version of EasyFix with extended open time and crystal clarity for premium packaging and signage applications.",
    status: "Coming soon",
  },
  {
    name: "Stick-Onn AutoFix",
    category: "Sticker Adhesive – Machine",
    description:
      "Machine-ready adhesive tuned for high-speed labelling systems, providing clean release and durable bonding across substrates.",
    status: "Coming soon",
  },
  {
    name: "Stick-Onn PaperFix",
    category: "Paper Bag Adhesive",
    description:
      "Low-viscosity adhesive designed for automated paper bag lines with superior fibre penetration and fast drying.",
    status: "Coming soon",
  },
  {
    name: "Stick-Onn ClearFix",
    category: "Dish Sticker Adhesive",
    description:
      "Crystal-clear adhesive for ceramic and dish stickers that endures washing cycles without clouding or residue.",
    status: "Coming soon",
  },
];

export const trustSignals = [
  {
    title: "20+ Years",
    description: "Adhesive formulation expertise for Indian manufacturers.",
  },
  {
    title: "ISO-Backed Quality",
    description: "Batch-tested at our Chakan plant with full TDS documentation.",
  },
  {
    title: "Pan-India Supply",
    description: "120+ dealers across Maharashtra, Delhi, Karnataka, and beyond.",
  },
  {
    title: "Technical Support",
    description: "On-site trials and line optimisation from real specialists.",
  },
  {
    title: "R&D Laboratory",
    description: "Continuous development for WPC, spray, and industrial lines.",
  },
];

export const industryCards = [
  {
    title: "Furniture Manufacturing",
    description: "Modular kitchens, wardrobes, and solid wood joinery with D3 and PUR systems.",
    href: "/applications/furniture-manufacturing",
    icon: "furniture",
  },
  {
    title: "Construction & Mounting",
    description: "Drill-free panel mounting, false ceilings, and facade installations.",
    href: "/applications/construction-mounting",
    icon: "construction",
  },
  {
    title: "Automotive Interiors",
    description: "Headliners, trim panels, and foam lamination for vehicle fit-out shops.",
    href: "/applications/automotive-interior",
    icon: "automotive",
  },
  {
    title: "Upholstery & Foam",
    description: "Sofa, mattress, and car seat bonding with spray and hot melt adhesives.",
    href: "/applications/upholstery-foam-fabric",
    icon: "upholstery",
  },
  {
    title: "WPC & PVC Fabrication",
    description: "Doors, frames, decking, and composite furniture with flexible bond lines.",
    href: "/applications/wpc-pvc-installation",
    icon: "wpc",
  },
  {
    title: "Industrial Assembly",
    description: "Hot melt, PUR, and epoxy systems for high-throughput manufacturing lines.",
    href: "/applications/industrial-assembly",
    icon: "industrial",
  },
];
