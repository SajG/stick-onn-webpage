export type Product = {
  slug: string;
  name: string;
  tagline: string;
  shortDescription: string;
  description: string;
  features: string[];
  applications: string[];
  howToApply: string[];
  packs: string[];
  heroImage: string;
  datasheetUrl: string;
};

export const products: Product[] = [
  {
    slug: "aqua-plus",
    name: "Stick-Onn Aqua+",
    tagline: "Waterproof Adhesive for wood bonding in wet environments",
    shortDescription: "Premium waterproof wood adhesive with rapid drying performance.",
    description:
      "Stick-Onn Aqua+ delivers dependable waterproof bonding for kitchen, bathroom, and outdoor furniture projects. Its advanced formulation cures 3X faster, allowing carpenters to complete installations with confidence in any climate.",
    features: [
      "3X faster dry time for quicker assembly",
      "Superior waterproof bond for kitchens and bathrooms",
      "High shear strength for hardwoods and laminates",
      "Brushable viscosity with clean, even spread",
      "Available packaging: pouch, pouch in box, pouch in drum, jar box, drum, loose drum (60 kg), pouch in drum (60 kg)",
    ],
    applications: [
      "Kitchen and bathroom cabinetry",
      "Outdoor furniture and pergolas",
      "High moisture plywood lamination",
      "Boat and marine woodwork",
    ],
    howToApply: [
      "Ensure surfaces are clean, dry, and dust-free.",
      "Apply an even coat on both surfaces using a brush or roller.",
      "Press the surfaces together within 10 minutes for best adhesion.",
      "Clamp for 25–30 minutes; allow full cure for 24 hours.",
    ],
    packs: ["800 g", "4 kg", "8 kg", "16 kg", "60 kg"],
    heroImage: "/images/products/aqua-plus.png",
    datasheetUrl: "/pdfs/stick-onn-technical-data-sheet.pdf",
  },
  {
    slug: "clout-d3",
    name: "Stick-Onn Clout D3",
    tagline: "High-performance D3 grade adhesive for demanding builds",
    shortDescription:
      "Engineered D3 wood adhesive offering exceptional strength and quick setting.",
    description:
      "Stick-Onn Clout D3 is purpose-built for premium furniture makers who demand D3 grade bonding assurance. It offers excellent resistance to heat, humidity, and mechanical stress, making it ideal for modular furniture and export builds.",
    features: [
      "D3 grade performance for international quality standards",
      "Rapid 2-hour drying to accelerate assembly lines",
      "High bond strength for edge and face joints",
      "Low VOC formulation for healthier workshops",
      "Available packaging: pouch, pouch in box, pouch in drum, jar box, drum, loose drum (60 kg), pouch in drum (60 kg)",
    ],
    applications: [
      "Modular kitchen manufacturing",
      "Interior fit-outs and panel bonding",
      "Edge bonding for hardwood joinery",
      "Flush door manufacturing",
    ],
    howToApply: [
      "Prepare surfaces by sanding lightly and removing contaminants.",
      "Apply a uniform layer to one or both surfaces.",
      "Assemble components and apply consistent pressure or clamping.",
      "Allow a minimum of 2 hours before machining; full strength in 24 hours.",
    ],
    packs: ["800 g", "4 kg", "8 kg", "16 kg", "60 kg"],
    heroImage: "/images/products/clout-d3.png",
    datasheetUrl: "/pdfs/stick-onn-technical-data-sheet.pdf",
  },
  {
    slug: "aerofix",
    name: "Stick-Onn AeroFix",
    tagline: "Spray adhesive for instant bonding across large surfaces",
    shortDescription:
      "Fast tack spray adhesive ideal for foam, fabric, and panel lamination.",
    description:
      "Stick-Onn AeroFix makes quick work of upholstery, insulation, and panel lamination tasks. The controlled spray pattern offers consistent coverage, reduces wastage, and delivers a clean bond without bleed-through.",
    features: [
      "Fine mist spray pattern for uniform coverage",
      "Aggressive tack with repositioning window",
      "Low soak-in for fabrics and foam",
      "Temperature resistant once cured",
    ],
    applications: [
      "Upholstery and sofa manufacturing",
      "Acoustic panel and insulation bonding",
      "Foam to plywood lamination",
      "Automotive interior trims",
    ],
    howToApply: [
      "Shake can well before use; ensure surfaces are dry.",
      "Spray both surfaces from 6–8 inches away in a sweeping motion.",
      "Wait 30–60 seconds until adhesive becomes tacky.",
      "Join surfaces with firm pressure; roll or press for best results.",
    ],
    packs: ["500 ml", "1 L", "5 L (bulk)"],
    heroImage: "/images/products/aerofix.png",
    datasheetUrl: "/pdfs/stick-onn-technical-data-sheet.pdf",
  },
  {
    slug: "heatfix",
    name: "Stick-Onn HeatFix",
    tagline: "Heat resistant rubber adhesive for laminates and veneer pressing",
    shortDescription:
      "Contact adhesive formulated for high temperature laminate applications.",
    description:
      "Stick-Onn HeatFix is a specialty rubber adhesive designed for postforming, membrane pressing, and heat-intense installations. It maintains bond integrity even under elevated temperatures, ensuring lasting finishes.",
    features: [
      "Sustains bond under high heat and postforming cycles",
      "Flexible film that absorbs vibration and impact",
      "Excellent grab for vertical and overhead applications",
      "Resistant to plasticizer migration and peeling",
    ],
    applications: [
      "Membrane and vacuum pressing",
      "Postforming laminates and veneers",
      "High-heat countertop installations",
      "Rubber to metal bonding",
    ],
    howToApply: [
      "Stir adhesive thoroughly and apply to both surfaces using brush or spray.",
      "Allow solvent flash-off for 10–15 minutes until tacky.",
      "Align carefully and make contact; bond forms instantly.",
      "Apply uniform pressure using roller; allow cure before heat exposure.",
    ],
    packs: ["500 ml", "1 L", "5 L", "10 L"],
    heroImage: "/images/products/heatfix.png",
    datasheetUrl: "/pdfs/stick-onn-technical-data-sheet.pdf",
  },
  {
    slug: "wpcfix",
    name: "Stick-Onn WPCFix",
    tagline: "High grab adhesive for wood-plastic composite materials",
    shortDescription:
      "Specialty adhesive tuned for WPC boards, profiles, and hybrid substrates.",
    description:
      "Stick-Onn WPCFix offers exceptional bonding for WPC boards, profiles, and composite furniture components. Its engineered formula balances flexibility and strength to handle thermal expansion without delamination.",
    features: [
      "Optimized for WPC and other composite substrates",
      "Flexible bond line that absorbs movement",
      "Excellent gap filling with high initial tack",
      "Water and UV resistant for exterior use",
    ],
    applications: [
      "WPC door and frame assembly",
      "Composite modular furniture",
      "Outdoor decking panels",
      "Hybrid wood-plastic installations",
    ],
    howToApply: [
      "Clean surfaces with a dry cloth to remove dust and release agents.",
      "Apply adhesive bead or spread evenly depending on the joint.",
      "Clamp or screw components to maintain pressure during cure.",
      "Allow curing for 6–8 hours before load or machining.",
    ],
    packs: ["600 g", "1.2 kg", "6 kg", "12 kg"],
    heroImage: "/images/products/wpcfix.png",
    datasheetUrl: "/pdfs/stick-onn-technical-data-sheet.pdf",
  },
];

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
      "Stick-Onn Aqua+ has transformed our modular kitchen installs. The fast cure and water resistance cut our callbacks dramatically.",
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

export const applications = [
  {
    title: "Furniture & Carpentry",
    description:
      "Precision bonding for modular furniture, cabinetry, and hardwood joinery.",
    image: "/images/products/clout-d3.png",
    products: ["aqua-plus", "clout-d3", "wpcfix"],
    points: [
      "Modular furniture carcasses and wardrobe systems",
      "Solid wood joinery, edge banding, and veneer lamination",
      "Moisture-prone kitchens, baths, and outdoor installations",
    ],
  },
  {
    title: "Laminate & Membrane Pressing",
    description:
      "Reliable adhesives for membrane doors, postforming, and heat-intensive laminations.",
    image: "/images/products/heatfix.png",
    products: ["heatfix", "clout-d3"],
    points: [
      "Membrane and vacuum press doors with complex contours",
      "Postformed countertops, shutters, and curved panels",
      "High-heat laminate installations requiring flexible bonds",
    ],
  },
  {
    title: "WPC Board Installation",
    description:
      "Engineered adhesion for WPC doors, frames, facades, and composite furniture.",
    image: "/images/products/wpcfix.png",
    products: ["wpcfix", "aqua-plus"],
    points: [
      "WPC door, frame, and partition fabrication",
      "Hybrid wood-plastic outdoor furniture and facades",
      "Gap-filling adhesion for decking and modular panels",
    ],
  },
  {
    title: "Upholstery & Spray",
    description:
      "Instant tack for foam, fabric, acoustic panels, and automotive trims.",
    image: "/images/products/aerofix.png",
    products: ["aerofix", "heatfix"],
    points: [
      "Foam-to-foam and foam-to-wood upholstery work",
      "Acoustic panel, insulation, and HVAC applications",
      "Automotive trim, headliner, and interior panel bonding",
    ],
  },
  {
    title: "Paper Bag & Lamination",
    description:
      "Clean, high-speed bonding for paper bag manufacturing and graphic lamination.",
    image: "/images/products/aqua-plus.png",
    products: ["aqua-plus", "clout-d3"],
    points: [
      "High-speed paper bag and shopping bag assembly lines",
      "Graphic lamination for premium cartons and sleeves",
      "Stationery, bookbinding, and boutique packaging work",
    ],
  },
];

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
    linkedin: "https://www.linkedin.com/company/stickonn",
    instagram: "https://www.instagram.com/stickonn.in",
    youtube: "https://www.youtube.com/@stickonn",
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

