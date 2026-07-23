import Image from "next/image";
import Link from "next/link";
import { ArrowRight, MessageCircle } from "lucide-react";
import type { LandingPage } from "@/lib/types";
import { products } from "@/lib/data";
import { cn } from "@/lib/utils";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { ContentSection } from "@/components/long-form-content";
import { FaqSection } from "@/components/faq-section";
import { JsonLd } from "@/components/json-ld";
import { RelatedProducts } from "@/components/related-products";
import { WhatsAppCta } from "@/components/whatsapp-cta";
import {
  createBreadcrumbSchema,
  createFaqSchema,
  createProductSchema,
  whatsappUrl,
} from "@/lib/seo";

const showcaseGradientMap: Record<string, string> = {
  "aqua-plus": "from-[#b9e1ff] via-white to-[#e9f6ff]",
  "clout-d3": "from-[#c8d4ff] via-white to-[#eef0ff]",
  "wood-to-laminate-spray-adhesive": "from-[#ffd9bf] via-white to-[#fff2e5]",
  wpcfix: "from-[#cbead1] via-white to-[#f0fff4]",
  "stick-onn-pur-adhesive": "from-[#e8d5ff] via-white to-[#f5edff]",
  "drill-free": "from-[#d4e8ff] via-white to-[#edf4ff]",
  lam2lam: "from-[#ffe4cc] via-white to-[#fff5eb]",
  hotmelt: "from-[#ffd6e0] via-white to-[#fff0f3]",
  "epoxy-resin": "from-[#d9d4f5] via-white to-[#f0eeff]",
};

type LongFormLandingTemplateProps = {
  page: LandingPage;
};

function ProductShowcase({
  title,
  items,
}: {
  title: string;
  items: NonNullable<LandingPage["productShowcase"]>;
}) {
  return (
    <section className="space-y-8">
      <h2 className="text-2xl font-semibold text-[var(--primary)] sm:text-3xl">{title}</h2>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((item) => {
          const slug = item.href.split("/products/")[1] ?? "";
          const gradient = showcaseGradientMap[slug] ?? "from-slate-100 via-white to-slate-50";
          return (
            <Link
              key={item.name}
              href={item.href}
              className="group flex flex-col overflow-hidden rounded-3xl border border-slate-200/80 bg-white transition-all duration-300 hover:-translate-y-1.5 hover:border-[var(--primary)]/50 hover:shadow-2xl hover:shadow-[var(--primary)]/10"
            >
              <div
                className={cn(
                  "relative flex h-56 items-center justify-center overflow-hidden rounded-b-[2.5rem] rounded-t-3xl bg-gradient-to-br sm:h-64",
                  gradient,
                )}
              >
                <span className="pointer-events-none absolute -left-10 top-6 h-32 w-32 rounded-full bg-white/50 blur-3xl" />
                <span className="pointer-events-none absolute -right-6 bottom-4 h-28 w-28 rounded-full bg-[var(--accent)]/30 opacity-50 blur-3xl" />
                <Image
                  src={item.image}
                  alt={item.name}
                  fill
                  className="z-10 object-contain p-6 drop-shadow-xl transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
                {item.badge && (
                  <span className="absolute right-3 top-3 z-20 rounded-full bg-[var(--accent)] px-3 py-1 text-xs font-bold text-white shadow">
                    {item.badge}
                  </span>
                )}
              </div>
              <div className="flex flex-1 flex-col gap-2 p-5 sm:p-6">
                <p className="font-semibold leading-snug text-[var(--primary)] sm:text-base">
                  {item.name}
                </p>
                <p className="text-xs leading-relaxed text-slate-500 sm:text-sm">
                  {item.description}
                </p>
                <span className="mt-auto inline-flex items-center gap-1 pt-2 text-xs font-semibold text-[var(--accent)] transition-all group-hover:gap-2">
                  View product details <ArrowRight className="h-3 w-3" />
                </span>
              </div>
            </Link>
          );
        })}
      </div>
    </section>
  );
}

function WhyChooseGrid({ sections }: { sections: LandingPage["sections"] }) {
  const cards = sections.filter((s) => s.layout === "card");
  if (cards.length === 0) return null;

  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {cards.map((card) => (
        <div
          key={card.title}
          className="rounded-2xl border border-slate-200 bg-slate-50 p-5"
        >
          <h3 className="text-base font-semibold text-[var(--primary)]">{card.title}</h3>
          <p className="mt-2 text-sm leading-relaxed text-slate-600">
            {card.paragraphs[0]}
          </p>
        </div>
      ))}
    </div>
  );
}

function isWhyChooseSection(title: string) {
  return title.startsWith("Why Choose Stick-Onn");
}

export function LongFormLandingTemplate({ page }: LongFormLandingTemplateProps) {
  const recommended = page.productSlugs
    .map((slug) => products.find((p) => p.slug === slug))
    .filter(Boolean) as typeof products;

  const mainSections = page.sections.filter((s) => s.layout !== "card");
  const rangeSectionTitle = page.rangeSectionTitle ?? "";
  const showcaseTitle = page.productShowcaseTitle ?? "Featured Stick-Onn Products";

  const schemas = [
    createFaqSchema(page.faqs),
    createBreadcrumbSchema([
      { name: "Home", path: "/" },
      { name: page.h1, path: `/${page.slug}` },
    ]),
    ...recommended.map(createProductSchema),
  ];

  let showcaseInserted = false;

  return (
    <div className="container-balanced flex flex-col gap-10 pb-10">
      <Breadcrumbs items={[{ label: page.h1 }]} />

      <header className="rounded-3xl border border-slate-200 bg-gradient-to-br from-white to-[#f8fbff] px-6 py-10 sm:px-10">
        <h1 className="text-2xl font-semibold text-[var(--primary)] sm:text-3xl lg:text-4xl">
          {page.h1}
        </h1>
        <p className="mt-4 max-w-3xl text-sm leading-relaxed text-slate-600 sm:text-base">
          {page.intro}
        </p>
        {page.heroCta && (
          <div className="mt-6 flex flex-wrap gap-3">
            <Link
              href={`/contact?product=${encodeURIComponent(page.heroCta.productName)}#contact-form`}
              className="inline-flex items-center gap-2 rounded-full bg-[var(--primary)] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[var(--primary-dark)]"
            >
              {page.heroCta.primaryLabel}
              <ArrowRight className="h-4 w-4" />
            </Link>
            <a
              href={whatsappUrl(
                `Hi Stick-Onn team, I'd like a quote for ${page.heroCta.productName}. Please share pricing and technical details.`,
              )}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-slate-300 px-6 py-3 text-sm font-semibold text-[var(--primary)] transition hover:border-[var(--primary)]"
            >
              <MessageCircle className="h-4 w-4" />
              {page.heroCta.secondaryLabel}
            </a>
          </div>
        )}
      </header>

      {mainSections.map((section, index) => {
        const isWhyChoose = isWhyChooseSection(section.title);
        const isRangeSection = section.title === rangeSectionTitle;
        const insertShowcase = isRangeSection && page.productShowcase && !showcaseInserted;
        if (insertShowcase) showcaseInserted = true;

        return (
          <div key={section.title} className="space-y-6">
            <section className="rounded-2xl border border-slate-200 bg-white p-6 sm:p-8">
              {isWhyChoose ? (
                <div className="space-y-6">
                  <ContentSection title={section.title} paragraphs={section.paragraphs} />
                  <WhyChooseGrid sections={page.sections} />
                </div>
              ) : (
                <div className="space-y-4">
                  <ContentSection title={section.title} paragraphs={section.paragraphs} />
                  {section.bullets && section.bullets.length > 0 && (
                    <ul className="ml-1 space-y-2 border-t border-slate-100 pt-4">
                      {section.bullets.map((bullet) => (
                        <li
                          key={bullet}
                          className="flex gap-2 text-sm leading-relaxed text-slate-600 sm:text-base"
                        >
                          <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[var(--primary)]" />
                          {bullet}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              )}
            </section>

            {insertShowcase && (
              <ProductShowcase title={showcaseTitle} items={page.productShowcase!} />
            )}

            {index === 1 && page.midPageCta && (
              <section className="rounded-2xl border border-[var(--primary)]/15 bg-[#f8fbff] px-6 py-6 sm:px-8">
                <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                  <div className="space-y-1">
                    <p className="text-sm font-semibold text-[var(--primary)]">
                      {page.midPageCta.title}
                    </p>
                    <p className="text-sm text-slate-600">{page.midPageCta.description}</p>
                  </div>
                  <WhatsAppCta
                    variant="compact"
                    productName={page.midPageCta.productName}
                  />
                </div>
              </section>
            )}

            {isRangeSection && (
              <RelatedProducts
                products={recommended}
                title="Related Stick-Onn bonding solutions"
              />
            )}
          </div>
        );
      })}

      {page.bottomCta && (
        <WhatsAppCta
          heading={page.bottomCta.title}
          description={page.bottomCta.description}
          productName={page.bottomCta.productName}
        />
      )}

      {page.relatedLinks.length > 0 && (
        <div className="flex flex-wrap justify-center gap-2">
          {page.relatedLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="rounded-full border border-slate-300 px-4 py-2 text-sm font-medium text-[var(--primary)] transition hover:border-[var(--primary)]"
            >
              {link.label}
            </Link>
          ))}
        </div>
      )}

      <FaqSection faqs={page.faqs} title="Frequently Asked Questions" limit={page.faqs.length} />

      <JsonLd data={schemas} />
    </div>
  );
}
