import type { Metadata } from "next";
import { PageHeader } from "@/components/page-header";
import { ApplicationCard } from "@/components/application-card";
import {
  applications,
  products,
  upcomingProducts,
} from "@/lib/data";

export const metadata: Metadata = {
  title: "Applications",
  description:
    "Discover Stick-Onn adhesive recommendations across furniture, laminates, WPC, upholstery, and specialty applications.",
};

function getPrimaryProductHref(productSlugs: string[]) {
  const primarySlug = productSlugs[0];
  if (!primarySlug) return "/products";
  const match = products.find((product) => product.slug === primarySlug);
  return match ? `/products/${match.slug}` : "/products";
}

export default function ApplicationsPage() {
  const productLookup = new Map(products.map((product) => [product.slug, product]));

  return (
    <div className="container-balanced flex flex-col gap-12">
      <PageHeader
        eyebrow="Application Expertise"
        title="Adhesive solutions engineered for real-world builds"
        description="Stick-Onn elevates production quality across carpentry, furniture, interiors, and industrial fabrication. Explore focus areas and find the adhesive curated for your substrate."
      />
      <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {applications.map((application) => (
          <ApplicationCard
            key={application.title}
            title={application.title}
            description={application.description}
            image={application.image}
            href={getPrimaryProductHref(application.products)}
            points={application.points}
            products={application.products
              .map((slug) => {
                const product = productLookup.get(slug);
                return product
                  ? { name: product.name, slug: product.slug }
                  : null;
              })
              .filter(Boolean) as { name: string; slug: string }[]}
          />
        ))}
      </div>
      <section className="space-y-6 rounded-3xl border border-slate-200 bg-white p-8">
        <div className="flex flex-col gap-2 text-center sm:text-left">
          <p className="text-xs font-semibold uppercase tracking-[0.32em] text-accent">
            Industrial formats
          </p>
          <h2 className="text-2xl font-semibold text-[var(--primary)] sm:text-3xl">
            Coming-soon smart bonding innovations
          </h2>
          <p className="max-w-3xl text-sm text-slate-600">
            Our R&D wing is developing specialist adhesives for membrane press shops,
            post forming, automated labelling, and packaging lines. Preview the
            solutions you can expect in the next release cycle.
          </p>
        </div>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {upcomingProducts.map((item) => (
            <div
              key={item.name}
              className="flex flex-col gap-3 rounded-3xl border border-dashed border-[var(--primary)]/30 bg-gradient-to-br from-white via-[#f4f8ff] to-white p-6"
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
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

