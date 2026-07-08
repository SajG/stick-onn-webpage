import { PageHeader } from "@/components/page-header";
import { ApplicationCard } from "@/components/application-card";
import { WhatsAppCta } from "@/components/whatsapp-cta";
import { applications, products, upcomingProducts } from "@/lib/data";
import { createPageMetadata } from "@/lib/seo";
import { Reveal } from "@/components/reveal";

export const metadata = createPageMetadata({
  title: "Adhesive Applications for Furniture, WPC, Upholstery & Industry | Stick-Onn",
  description:
    "Explore Stick-Onn adhesive applications for furniture manufacturing, laminate bonding, WPC installation, upholstery, construction mounting, and industrial assembly across India.",
  path: "/applications",
  keywords: [
    "adhesive applications India",
    "furniture adhesive Mumbai",
    "laminate bonding adhesive Pune",
    "WPC adhesive Delhi",
    "upholstery spray adhesive",
    "construction mounting adhesive",
    "industrial assembly adhesive",
    "Stick-Onn applications",
  ],
});

export default function ApplicationsPage() {
  const productLookup = new Map(products.map((product) => [product.slug, product]));

  return (
    <div className="container-balanced flex flex-col gap-12">
      <PageHeader
        eyebrow="Application Expertise"
        title="Adhesive solutions for your industry"
        description="Find the right Stick-Onn formula for furniture, WPC, upholstery, construction, and industrial assembly."
      />
      <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {applications.map((application, index) => (
          <ApplicationCard
            key={application.slug}
            slug={application.slug}
            title={application.title}
            description={application.description}
            image={application.image}
            points={application.points}
            animationDelay={index * 90}
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

      <WhatsAppCta
        heading="Need help choosing?"
        description="Tell us your substrate and volume — we'll recommend the right formula."
      />

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
            Industrial formats
          </p>
          <h2 className="text-2xl font-semibold text-[var(--primary)] sm:text-3xl">
            Coming-soon smart bonding innovations
          </h2>
          <p className="max-w-3xl text-sm text-slate-600">
            Our R&D wing is developing specialist adhesives for membrane press shops,
            post forming, automated labelling, and packaging lines.
          </p>
        </Reveal>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {upcomingProducts.slice(0, 6).map((item, index) => (
            <Reveal
              as="div"
              key={item.name}
              className="flex flex-col gap-3 rounded-3xl border border-dashed border-[var(--primary)]/30 bg-gradient-to-br from-white via-[#f4f8ff] to-white p-6"
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
