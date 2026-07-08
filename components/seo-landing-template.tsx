import Link from "next/link";
import type { LandingPage } from "@/lib/types";
import { products } from "@/lib/data";
import { excerpt, takeItems, takeParagraphs } from "@/lib/display-content";
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
} from "@/lib/seo";

type SeoLandingTemplateProps = {
  page: LandingPage;
};

export function SeoLandingTemplate({ page }: SeoLandingTemplateProps) {
  const recommended = page.productSlugs
    .map((slug) => products.find((p) => p.slug === slug))
    .filter(Boolean) as typeof products;

  const displaySections = takeItems(page.sections, 2).map((section) => ({
    title: section.title,
    paragraphs: takeParagraphs(section.paragraphs, 1),
  }));

  const schemas = [
    createFaqSchema(page.faqs),
    createBreadcrumbSchema([
      { name: "Home", path: "/" },
      { name: page.h1, path: `/${page.slug}` },
    ]),
    ...recommended.map(createProductSchema),
  ];

  return (
    <div className="container-balanced flex flex-col gap-8 pb-8">
      <Breadcrumbs items={[{ label: page.h1 }]} />

      <header className="rounded-3xl border border-slate-200 bg-gradient-to-br from-white to-[#f8fbff] px-6 py-10 text-center sm:px-10">
        <h1 className="text-2xl font-semibold text-[var(--primary)] sm:text-3xl lg:text-4xl">
          {page.h1}
        </h1>
        <p className="mx-auto mt-3 max-w-2xl text-sm text-slate-600 sm:text-base">
          {excerpt(page.intro, 200)}
        </p>
      </header>

      <div className="grid gap-5 md:grid-cols-2">
        {displaySections.map((section) => (
          <section
            key={section.title}
            className="rounded-2xl border border-slate-200 bg-white p-6"
          >
            <ContentSection title={section.title} paragraphs={section.paragraphs} />
          </section>
        ))}
      </div>

      <RelatedProducts products={recommended} title="Featured products" />

      {page.relatedLinks.length > 0 && (
        <div className="flex flex-wrap justify-center gap-2">
          {page.relatedLinks.slice(0, 3).map((link) => (
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

      <FaqSection faqs={page.faqs} limit={3} />

      <WhatsAppCta />

      <JsonLd data={schemas} />
    </div>
  );
}
