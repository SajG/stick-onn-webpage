import type { Metadata } from "next";
import { PageHeader } from "@/components/page-header";
import { ProductCard } from "@/components/product-card";
import { products, upcomingProducts } from "@/lib/data";

export const metadata: Metadata = {
  title: "Products",
  description:
    "Explore the full range of Stick-Onn premium adhesives designed for woodworking, WPC, laminates, and spray applications.",
};

export default function ProductsPage() {
  return (
    <div className="container-balanced flex flex-col gap-12">
      <PageHeader
        eyebrow="Product Portfolio"
        title="Adhesives engineered for every substrate"
        description="Each Stick-Onn adhesive is formulated with modern chemistries to deliver reliable strength, speed, and finish quality for professional workshops."
      />
      <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {products.map((product) => (
          <ProductCard key={product.slug} product={product} />
        ))}
      </div>

      <section className="space-y-6 rounded-3xl border border-slate-200 bg-white p-8">
        <div className="flex flex-col gap-2 text-center sm:text-left">
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
        </div>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {upcomingProducts.map((item) => (
            <div
              key={item.name}
              className="flex flex-col gap-3 rounded-3xl border border-dashed border-[var(--primary)]/30 bg-gradient-to-br from-white via-[#f5f9ff] to-white p-6"
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

