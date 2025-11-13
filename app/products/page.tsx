import Link from "next/link";
import { PageHeader } from "@/components/page-header";
import { ProductCard } from "@/components/product-card";
import { products, upcomingProducts } from "@/lib/data";
import { createPageMetadata } from "@/lib/seo";
import { Reveal } from "@/components/reveal";

export const metadata = createPageMetadata({
  title: "Stick-Onn Adhesive Products",
  description:
    "Browse Stick-Onn’s complete adhesive portfolio engineered for woodworking, laminates, WPC substrates, upholstery, and industrial applications.",
  path: "/products",
  keywords: [
    "Stick-Onn products",
    "wood adhesive",
    "spray adhesive",
    "waterproof adhesive",
    "industrial adhesive",
    "adhesive manufacturer India",
  ],
});

export default function ProductsPage() {
  return (
    <div className="container-balanced flex flex-col gap-12">
      <PageHeader
        eyebrow="Product Portfolio"
        title="Adhesives engineered for every substrate"
        description="Each Stick-Onn adhesive is formulated with modern chemistries to deliver reliable strength, speed, and finish quality for professional workshops."
      />
      <Reveal
        as="section"
        className="flex flex-col items-center justify-between gap-4 rounded-3xl border border-[var(--primary)]/20 bg-gradient-to-br from-white via-[#f8fbff] to-white p-6 text-center sm:flex-row sm:text-left"
      >
        <Reveal as="div" className="space-y-2" delay={40}>
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[var(--primary)]">
            Ready to order?
          </p>
          <h2 className="text-xl font-semibold text-slate-800">
            Talk to our sales desk and place your Stick-Onn order instantly.
          </h2>
          <p className="text-sm text-slate-600">
            Share your requirements and we’ll confirm pricing, availability, and delivery slots over WhatsApp.
          </p>
        </Reveal>
        <Reveal as="div" delay={80}>
          <Link
            href="https://wa.me/919021086995?text=Hi%20Stick-Onn%20team%2C%20I%27d%20like%20to%20place%20an%20order."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded-full bg-[var(--primary)] px-8 py-3 text-sm font-semibold text-white transition hover:bg-[var(--primary-dark)]"
          >
            Order Now
          </Link>
        </Reveal>
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

      <Reveal
        as="section"
        className="space-y-6 rounded-3xl border border-slate-200 bg-white p-8"
      >
        <Reveal
          as="div"
          className="flex flex-col gap-2 text-center sm:text-left"
          delay={40}
        >
          <p className="text-xs font-semibold uppercase tracking-[0.32em] text-accent">
            Industrial line
          </p>
          <h2 className="text-2xl font-semibold text-[var(--primary)] sm:text-3xl">
            Smart bonding innovations coming soon
          </h2>
          <p className="max-w-3xl text-sm text-slate-600">
            Stick-Onn’s R&D lab is finalising specialised formulations for membrane
            pressing, label lines, and automated packaging environments. Preview the
            solutions slated for release.
          </p>
        </Reveal>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {upcomingProducts.map((item, index) => (
            <Reveal
              as="div"
              key={item.name}
              className="flex flex-col gap-3 rounded-3xl border border-dashed border-[var(--primary)]/30 bg-gradient-to-br from-white via-[#f5f9ff] to-white p-6"
              delay={index * 80}
            >
              <span className="w-fit rounded-full border border-[var(--primary)]/20 bg-[var(--primary)]/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.35em] text-[var(--primary)]">
                {item.status}
              </span>
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.32em] text-accent">
                  {item.category}
                </p>
                <h3 className="mt-2 text-lg font-semibold text-[var(--primary)]">
                  {item.name}
                </h3>
              </div>
              <p className="text-sm text-slate-600">{item.description}</p>
            </Reveal>
          ))}
        </div>
      </Reveal>
    </div>
  );
}

