import { HeroBanner } from "@/components/hero-banner";
import { FeatureIconRow } from "@/components/feature-icon-row";
import { ProductCard } from "@/components/product-card";
import { TestimonialSection } from "@/components/testimonial-section";
import heroImage from "@/images/Carpenter_image_gemini.png";
import {
  applications,
  companyInfo,
  products,
  upcomingProducts,
} from "@/lib/data";
import { createPageMetadata } from "@/lib/seo";
import Link from "next/link";
import { Reveal } from "@/components/reveal";

const customerSegments = [
  {
    title: "Carpenters & Site Teams",
    summary: "Fast-setting bonds that stay solid on humid sites and quick repairs.",
    cta: { label: "See wood adhesives", href: "/products/aqua-plus" },
  },
  {
    title: "Furniture & Modular OEMs",
    summary: "Assured D3 strength for export lines with consistent production batches.",
    cta: { label: "Explore Clout D3", href: "/products/clout-d3" },
  },
  {
    title: "Dealers & Distributors",
    summary: "Steady supply, quick dispatches, and ready-to-use marketing kits.",
    cta: { label: "Talk to sales", href: "/contact" },
  },
];

const workflowSteps = [
  {
    title: "Discuss your substrates",
    description: "Share timber type, finish goals, and site conditions.",
  },
  {
    title: "Select the right formula",
    description: "We shortlist the waterproof, heat, spray, or composite fit.",
  },
  {
    title: "Trial & optimise",
    description: "Sample, tweak spread rate, and lock press time.",
  },
  {
    title: "Confident delivery",
    description: "Receive steady supply, documentation, and tech backup.",
  },
];

const quickFacts = [
  { label: "Dry Time Options", value: "30 mins – 2 hrs" },
  { label: "Dealer Network", value: "120+ across India" },
  { label: "Industry Experience", value: "20+ years" },
  { label: "Application Support", value: "On-site & virtual" },
];

export const metadata = createPageMetadata({
  title: "Stick-Onn Adhesives | Smart Strength. Perfect Bond.",
  description:
    "Stick-Onn crafts premium adhesives engineered for Indian workshops, offering waterproof, heat resistant, and spray solutions with on-call technical support.",
  path: "/",
  keywords: [
    "Stick-Onn adhesives",
    "premium wood adhesive",
    "waterproof adhesive India",
    "industrial bonding solutions",
    "Synergy Bonding Solutions",
    "carpentry adhesive",
  ],
  images: ["/images/hero-carpenter.png"],
});

export default function Home() {
  const productLookup = new Map(products.map((p) => [p.slug, p]));

  return (
    <div className="space-y-20">
      <div className="container-balanced space-y-16">
        <HeroBanner
          title="Smart Strength. Perfect Bond."
          subtitle="Premium adhesive engineering"
          description="Precision adhesives crafted in India for clean installs and fast turnarounds."
          primaryCta={{ label: "Explore Products", href: "/products" }}
          secondaryCta={{ label: "Find a Dealer", href: "/contact" }}
          image={heroImage}
          imageAlt="Carpenter applying Stick-Onn adhesive"
          highlights={[
            "Waterproof, heat and spray chemistries for every substrate.",
            "On-call technical experts for trials and line optimisation.",
          ]}
        />

        <Reveal
          as="section"
          className="flex flex-col gap-6 rounded-3xl border border-slate-200 bg-white/80 p-6 text-center sm:flex-row sm:items-center sm:justify-between sm:p-8 sm:text-left"
        >
          <div className="space-y-3">
            <p className="text-xs font-semibold uppercase tracking-[0.32em] text-accent">
              Trusted nationwide
            </p>
            <h2 className="text-lg font-semibold text-[var(--primary)] sm:text-xl">
              Chosen by workshops and OEMs across India
            </h2>
            <p className="text-sm text-slate-500">
              Reliable supply, consistent batches, and people who pick up the phone.
            </p>
          </div>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center rounded-full border border-slate-300 px-5 py-2 text-xs font-semibold text-[var(--primary)] transition hover:border-[var(--primary)]"
          >
            Become a partner
          </Link>
        </Reveal>

        <Reveal
          as="section"
          className="rounded-3xl border border-slate-200 bg-white p-6 sm:p-8"
        >
          <div className="grid gap-4 sm:grid-cols-4">
            {quickFacts.map((fact, index) => (
              <Reveal
                as="div"
                key={fact.label}
                className="flex flex-col gap-2 rounded-2xl border border-slate-200 bg-slate-50/60 px-4 py-5 text-sm text-slate-600"
                delay={index * 70}
              >
                <span className="text-xs font-semibold uppercase tracking-[0.32em] text-slate-400">
                  {fact.label}
                </span>
                <span className="text-lg font-semibold text-[var(--primary)]">
                  {fact.value}
                </span>
              </Reveal>
            ))}
          </div>
        </Reveal>

        <Reveal as="section" className="space-y-6">
          <Reveal
            as="div"
            className="flex flex-col gap-2 text-center"
            delay={60}
          >
            <p className="text-xs font-semibold uppercase tracking-[0.32em] text-accent">
              Core performance pillars
            </p>
            <h2 className="text-3xl font-semibold text-[var(--primary)] sm:text-4xl">
              Adhesives engineered for Indian workshops
            </h2>
            <p className="mx-auto max-w-2xl text-sm text-slate-500 sm:text-base">
              Built to handle heat, humidity, and the daily rhythm of Indian production floors.
            </p>
          </Reveal>
          <FeatureIconRow />
        </Reveal>

        <Reveal as="section" className="space-y-10">
          <Reveal as="div" className="flex flex-col gap-2 text-center" delay={60}>
            <p className="text-xs font-semibold uppercase tracking-[0.32em] text-accent">
              Top performers
            </p>
            <h2 className="text-3xl font-semibold text-[var(--primary)] sm:text-4xl">
              Engineered for demanding projects
            </h2>
            <p className="mx-auto max-w-2xl text-sm text-slate-500 sm:text-base">
              A focused lineup that balances premium strength with everyday practicality.
            </p>
          </Reveal>
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {products.map((product, index) => (
              <ProductCard
                key={product.slug}
                product={product}
                animationDelay={index * 90}
              />
            ))}
          </div>
          <Reveal as="div" className="text-center" delay={80}>
            <Link
              href="/products"
              className="inline-flex items-center gap-2 text-sm font-semibold text-[var(--primary)] transition hover:text-[var(--primary-dark)]"
            >
              View the complete portfolio
            </Link>
          </Reveal>
        </Reveal>

        <Reveal as="section" className="space-y-8">
          <Reveal
            as="div"
            className="flex flex-col gap-2 text-center sm:text-left"
            delay={40}
          >
            <p className="text-xs font-semibold uppercase tracking-[0.32em] text-accent">
              Designed around real users
            </p>
            <h3 className="text-2xl font-semibold text-[var(--primary)] sm:text-3xl">
              Whether you build, fabricate, or distribute — Stick-Onn fits in
              effortlessly
            </h3>
          </Reveal>
          <div className="grid gap-5 md:grid-cols-3">
            {customerSegments.map((segment, index) => (
              <Reveal
                as="div"
                key={segment.title}
                className="flex flex-col gap-4 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm shadow-slate-200/60"
                delay={index * 90}
              >
                <h4 className="text-lg font-semibold text-[var(--primary)]">
                  {segment.title}
                </h4>
                <p className="text-sm text-slate-500">{segment.summary}</p>
                <Link
                  href={segment.cta.href}
                  className="text-sm font-semibold text-[var(--primary)] transition hover:text-[var(--primary-dark)]"
                >
                  {segment.cta.label}
                </Link>
              </Reveal>
            ))}
          </div>
        </Reveal>

        <Reveal
          as="section"
          className="grid gap-6 rounded-3xl border border-slate-200 bg-white p-8 md:grid-cols-[1.05fr,0.95fr] md:items-center"
        >
          <div className="space-y-4">
            <Reveal
              as="p"
              className="text-xs font-semibold uppercase tracking-[0.32em] text-accent"
              delay={30}
            >
              Applications
            </Reveal>
            <Reveal
              as="h3"
              className="text-2xl font-semibold text-[var(--primary)] sm:text-3xl"
              delay={60}
            >
              One brand, every bonding challenge
            </Reveal>
            <Reveal
              as="p"
              className="text-sm text-slate-500 sm:text-base"
              delay={90}
            >
              Waterproof joinery, high-heat laminates, and composite installs handled with the same dependable range.
            </Reveal>
            <div className="grid gap-3 text-sm text-slate-700 md:grid-cols-2">
              {applications.slice(0, 4).map((app, index) => {
                const recommended = app.products
                  .map((slug) => {
                    const product = productLookup.get(slug);
                    return product
                      ? { name: product.name, slug: product.slug }
                      : null;
                  })
                  .filter(Boolean) as { name: string; slug: string }[];
                return (
                  <Reveal
                    as="div"
                    key={app.title}
                    className="rounded-2xl border border-slate-200 bg-slate-50/80 p-4"
                    delay={120 + index * 70}
                  >
                    <p className="font-semibold text-[var(--primary)]">
                      {app.title}
                    </p>
                    <p className="mt-2 text-xs text-slate-500">
                      {app.points[0]}
                    </p>
                    {recommended.length > 0 && (
                      <div className="mt-4 flex flex-wrap gap-2">
                        {recommended.map((product) => (
                          <Link
                            key={product.slug}
                            href={`/products/${product.slug}`}
                            className="rounded-full border border-slate-300 bg-white px-3 py-1 text-xs font-semibold text-[var(--primary)] transition hover:border-[var(--primary)] hover:text-[var(--primary-dark)]"
                          >
                            {product.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </Reveal>
                );
              })}
            </div>
            <Reveal as="div" delay={160}>
            <Link
              href="/applications"
              className="inline-flex w-fit items-center gap-2 rounded-full border border-slate-300 px-5 py-2.5 text-sm font-semibold text-[var(--primary)] transition hover:border-[var(--primary)]"
            >
              Explore application insights
            </Link>
            </Reveal>
          </div>
          <div className="grid gap-4 rounded-2xl border border-slate-200 bg-slate-50 p-6 text-slate-700">
            <Reveal as="div" delay={80}>
              <p className="text-xs font-semibold uppercase tracking-[0.32em] text-accent">
                Why Stick-Onn
              </p>
              <h4 className="mt-3 text-2xl font-semibold text-[var(--primary)]">
                Premium yet practical
              </h4>
              <p className="mt-3 text-sm text-slate-500">
                Led by {companyInfo.legal} with two decades of bonding know-how and a support crew that stays involved well after delivery.
              </p>
            </Reveal>
            <dl className="grid gap-3 text-sm">
              <Reveal
                as="div"
                className="flex items-center justify-between border-b border-slate-200 pb-3"
                delay={120}
              >
                <dt className="text-slate-500">Industry Focus</dt>
                <dd className="font-semibold text-[var(--primary)]">
                  Furniture & OEM
                </dd>
              </Reveal>
              <Reveal
                as="div"
                className="flex items-center justify-between border-b border-slate-200 pb-3"
                delay={150}
              >
                <dt className="text-slate-500">Service Footprint</dt>
                <dd className="font-semibold text-[var(--primary)]">Pan-India</dd>
              </Reveal>
              <Reveal
                as="div"
                className="flex items-center justify-between border-b border-slate-200 pb-3"
                delay={180}
              >
                <dt className="text-slate-500">Quality Benchmark</dt>
                <dd className="font-semibold text-[var(--primary)]">
                  ISO & EN Standards
                </dd>
              </Reveal>
              <Reveal
                as="div"
                className="flex items-center justify-between"
                delay={210}
              >
                <dt className="text-slate-500">Support</dt>
                <dd className="font-semibold text-[var(--primary)]">
                  Technical Specialists
                </dd>
              </Reveal>
            </dl>
          </div>
        </Reveal>

        <Reveal as="section" className="space-y-8">
          <Reveal
            as="div"
            className="flex flex-col gap-2 text-center sm:text-left"
            delay={50}
          >
            <p className="text-xs font-semibold uppercase tracking-[0.32em] text-accent">
              Smooth handover, every time
            </p>
            <h3 className="text-2xl font-semibold text-[var(--primary)] sm:text-3xl">
              Our technical team stays with you through the bonding journey
            </h3>
          </Reveal>
          <div className="grid gap-4 rounded-3xl border border-slate-200 bg-white p-6 sm:grid-cols-4">
            {workflowSteps.map((step, index) => (
              <Reveal
                as="div"
                key={step.title}
                className="flex flex-col gap-3"
                delay={index * 80}
              >
                <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-slate-100 text-sm font-semibold text-[var(--primary)]">
                  {index + 1}
                </span>
                <h4 className="text-base font-semibold text-[var(--primary)]">
                  {step.title}
                </h4>
                <p className="text-sm text-slate-600">{step.description}</p>
              </Reveal>
            ))}
          </div>
        </Reveal>

        <Reveal
          as="section"
          className="space-y-8 rounded-3xl border border-slate-200 bg-white p-8"
        >
          <Reveal
            as="div"
            className="flex flex-col gap-2 text-center sm:text-left"
            delay={40}
          >
            <p className="text-xs font-semibold uppercase tracking-[0.32em] text-accent">
              Industrial lab preview
            </p>
            <h3 className="text-2xl font-semibold text-[var(--primary)] sm:text-3xl">
              Smart bonding technology launching soon
            </h3>
            <p className="max-w-3xl text-sm text-slate-500 sm:text-base">
              Purpose-built ranges for membrane, postforming, sticker work, and other high-throughput lines are in the pipeline.
            </p>
          </Reveal>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {upcomingProducts.map((item, index) => (
              <Reveal
                as="div"
                key={item.name}
                className="flex flex-col gap-3 rounded-3xl border border-dashed border-[var(--primary)]/30 bg-gradient-to-br from-white via-[#f8fbff] to-white p-6"
                delay={index * 80}
              >
                <span className="w-fit rounded-full border border-[var(--primary)]/20 bg-[var(--primary)]/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.35em] text-[var(--primary)]">
                  Coming soon
                </span>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.32em] text-accent">
                    {item.category}
                  </p>
                  <h4 className="mt-2 text-lg font-semibold text-[var(--primary)]">
                    {item.name}
                  </h4>
                </div>
                <p className="text-sm text-slate-600">{item.description}</p>
              </Reveal>
            ))}
          </div>
        </Reveal>
      </div>

      <TestimonialSection />

      <Reveal
        as="section"
        className="container-balanced rounded-3xl border border-slate-200 bg-white px-6 py-12 text-center sm:px-10"
      >
        <Reveal
          as="p"
          className="text-xs font-semibold uppercase tracking-[0.32em] text-accent"
          delay={20}
        >
          Ready to partner?
        </Reveal>
        <Reveal
          as="h3"
          className="mt-3 text-3xl font-semibold text-[var(--primary)] sm:text-4xl"
          delay={60}
        >
          Build with Stick-Onn confidence
        </Reveal>
        <Reveal
          as="p"
          className="mx-auto mt-4 max-w-2xl text-sm text-slate-500 sm:text-base"
          delay={90}
        >
          Tell us about your build, meet the closest dealer, and map support in one easy conversation.
        </Reveal>
        <Reveal as="div" className="mt-6 flex flex-wrap justify-center gap-3" delay={120}>
          <Link
            href="/contact"
            className="rounded-full bg-[var(--primary)] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[var(--primary-dark)]"
          >
            Contact the team
          </Link>
          <Link
            href="/products"
            className="rounded-full border border-slate-300 px-6 py-3 text-sm font-semibold text-[var(--primary)] transition hover:border-[var(--primary)]"
          >
            Browse products
          </Link>
        </Reveal>
      </Reveal>
    </div>
  );
}
