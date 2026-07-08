import { HeroBanner } from "@/components/hero-banner";
import { FeatureIconRow } from "@/components/feature-icon-row";
import { ProductCard } from "@/components/product-card";
import { TestimonialSection } from "@/components/testimonial-section";
import heroImage from "@/images/Carpenter_image_gemini.png";
import {
  applications,
  industryCards,
  products,
  trustSignals,
  upcomingProducts,
} from "@/lib/data";
import { createPageMetadata } from "@/lib/seo";
import {
  Building2,
  Car,
  Factory,
  Hammer,
  Layers,
  Sofa,
} from "lucide-react";
import type { ComponentType } from "react";
import Link from "next/link";
import { Reveal } from "@/components/reveal";

const quickFacts = [
  { label: "Dry Time Options", value: "30 mins – 2 hrs" },
  { label: "Dealer Network", value: "120+ across India" },
  { label: "Industry Experience", value: "20+ years" },
  { label: "Application Support", value: "On-site & virtual" },
];

const industryIcons: Record<string, ComponentType<{ className?: string }>> = {
  furniture: Hammer,
  construction: Building2,
  automotive: Car,
  upholstery: Sofa,
  wpc: Layers,
  industrial: Factory,
};

export const metadata = createPageMetadata({
  title: "Premium Speciality Adhesives in India | Stick-Onn by Synergy Bonding Solutions",
  description:
    "Stick-Onn delivers premium speciality adhesives for furniture, WPC, upholstery, construction & industrial assembly. PUR, D3, spray, hot melt & epoxy — pan-India supply.",
  path: "/",
  keywords: [
    "premium speciality adhesives India",
    "Stick-Onn adhesives",
    "adhesive manufacturer Mumbai",
    "wood adhesive Pune",
    "industrial adhesive Delhi",
    "Synergy Bonding Solutions",
    "PUR adhesive India",
    "waterproof wood adhesive",
  ],
  images: ["/images/hero-carpenter.png"],
});

export default function Home() {
  return (
    <div className="space-y-14">
      <div className="container-balanced space-y-12">
        <HeroBanner
          title="Premium Speciality Adhesives in India"
          subtitle="Smart Strength. Perfect Bond."
          description="PUR, D3, spray, hot melt & epoxy adhesives for furniture, WPC, upholstery and industrial assembly — by Synergy Bonding Solutions."
          primaryCta={{ label: "Explore Products", href: "/products" }}
          secondaryCta={{ label: "Talk on WhatsApp", href: "https://wa.me/919021086995" }}
          image={heroImage}
          imageAlt="Carpenter applying Stick-Onn adhesive"
          highlights={[
            "Pan-India supply with on-call technical support.",
          ]}
        />

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
          <Reveal as="div" className="text-center" delay={40}>
            <h2 className="text-2xl font-semibold text-[var(--primary)] sm:text-3xl">
              Industries we serve
            </h2>
          </Reveal>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {industryCards.map((card, index) => {
              const Icon = industryIcons[card.icon] ?? Factory;
              return (
                <Reveal
                  as="div"
                  key={card.href}
                  delay={index * 70}
                >
                  <Link
                    href={card.href}
                    className="group flex flex-col gap-4 rounded-2xl border border-slate-200 bg-white p-6 transition hover:border-[var(--primary)]/40 hover:shadow-lg hover:shadow-[var(--primary)]/5"
                  >
                    <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-[var(--primary)]/10 text-[var(--primary)] transition group-hover:bg-[var(--primary)] group-hover:text-white">
                      <Icon className="h-5 w-5" />
                    </span>
                    <div>
                      <h3 className="text-lg font-semibold text-[var(--primary)]">
                        {card.title}
                      </h3>
                      <p className="mt-2 text-sm text-slate-500">{card.description}</p>
                    </div>
                    <span className="text-sm font-medium text-[var(--primary)]">
                      Learn more →
                    </span>
                  </Link>
                </Reveal>
              );
            })}
          </div>
        </Reveal>

        <Reveal as="section" className="space-y-6">
          <Reveal as="div" className="text-center" delay={40}>
            <h2 className="text-2xl font-semibold text-[var(--primary)] sm:text-3xl">
              Why Stick-Onn
            </h2>
          </Reveal>
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
            {trustSignals.map((signal, index) => (
              <Reveal
                as="div"
                key={signal.title}
                className="rounded-2xl border border-slate-200 bg-white p-4 text-center"
                delay={index * 50}
              >
                <h3 className="text-sm font-semibold text-[var(--primary)]">
                  {signal.title}
                </h3>
                <p className="mt-1 text-xs text-slate-500">{signal.description}</p>
              </Reveal>
            ))}
          </div>
        </Reveal>

        <Reveal as="section" className="space-y-6">
          <Reveal as="div" className="text-center" delay={60}>
            <h2 className="text-2xl font-semibold text-[var(--primary)] sm:text-3xl">
              Built for Indian workshops
            </h2>
          </Reveal>
          <FeatureIconRow />
        </Reveal>

        <Reveal as="section" className="space-y-6">
          <Reveal as="div" className="text-center" delay={60}>
            <h2 className="text-2xl font-semibold text-[var(--primary)] sm:text-3xl">
              Our products
            </h2>
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

        <Reveal as="section" className="space-y-6">
          <div className="flex items-end justify-between gap-4">
            <h2 className="text-2xl font-semibold text-[var(--primary)] sm:text-3xl">
              Applications
            </h2>
            <Link
              href="/applications"
              className="text-sm font-semibold text-[var(--primary)] transition hover:text-[var(--primary-dark)]"
            >
              View all →
            </Link>
          </div>
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {applications.slice(0, 4).map((app, index) => (
              <Reveal as="div" key={app.slug} delay={index * 60}>
                <Link
                  href={`/applications/${app.slug}`}
                  className="block rounded-2xl border border-slate-200 bg-white p-4 transition hover:border-[var(--primary)]/40"
                >
                  <p className="font-semibold text-[var(--primary)]">{app.title}</p>
                  <p className="mt-1 text-xs text-slate-500 line-clamp-2">{app.description}</p>
                </Link>
              </Reveal>
            ))}
          </div>
        </Reveal>

        <Reveal
          as="section"
          className="space-y-6 rounded-3xl border border-slate-200 bg-white p-6 sm:p-8"
        >
          <h2 className="text-xl font-semibold text-[var(--primary)]">Coming soon</h2>
          <div className="grid gap-3 sm:grid-cols-3">
            {upcomingProducts.slice(0, 3).map((item, index) => (
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
                <h4 className="mt-1 text-base font-semibold text-[var(--primary)]">
                  {item.name}
                </h4>
              </div>
            </Reveal>
            ))}
          </div>
        </Reveal>
      </div>

      <TestimonialSection />

      <Reveal
        as="section"
        className="container-balanced rounded-3xl border border-slate-200 bg-white px-6 py-10 text-center"
      >
        <h3 className="text-2xl font-semibold text-[var(--primary)]">
          Ready to get started?
        </h3>
        <div className="mt-5 flex flex-wrap justify-center gap-3">
          <Link
            href="/contact"
            className="rounded-full bg-[var(--primary)] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[var(--primary-dark)]"
          >
            Contact us
          </Link>
          <Link
            href="https://wa.me/919021086995"
            className="rounded-full border border-slate-300 px-6 py-3 text-sm font-semibold text-[var(--primary)] transition hover:border-[var(--primary)]"
          >
            WhatsApp
          </Link>
        </div>
      </Reveal>
    </div>
  );
}
