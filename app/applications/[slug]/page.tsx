import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { applicationPages, products } from "@/lib/data";
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
  createPageMetadata,
  createProductSchema,
} from "@/lib/seo";

type SlugParams = Promise<{ slug: string }>;

export function generateStaticParams() {
  return applicationPages.map((page) => ({ slug: page.slug }));
}

async function resolvePage(params: SlugParams) {
  const { slug } = await params;
  return applicationPages.find((page) => page.slug === slug);
}

export async function generateMetadata({ params }: { params: SlugParams }) {
  const page = await resolvePage(params);
  if (!page) return { title: "Application Not Found" };

  return createPageMetadata({
    title: page.seoTitle,
    description: page.seoDescription,
    path: `/applications/${page.slug}`,
    keywords: page.keywords,
    images: [page.image],
  });
}

export default async function ApplicationDetailPage({
  params,
}: {
  params: SlugParams;
}) {
  const page = await resolvePage(params);
  if (!page) notFound();

  const recommended = page.recommendedProductSlugs
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
      { name: "Applications", path: "/applications" },
      { name: page.h1, path: `/applications/${page.slug}` },
    ]),
    ...recommended.map(createProductSchema),
  ];

  return (
    <div className="container-balanced flex flex-col gap-8 pb-8">
      <Breadcrumbs
        items={[
          { label: "Applications", href: "/applications" },
          { label: page.h1 },
        ]}
      />

      <header className="rounded-3xl border border-slate-200 bg-white p-6 sm:p-8">
        <div className="grid gap-6 lg:grid-cols-[1fr,200px] lg:items-center">
          <div className="space-y-3">
            <h1 className="text-2xl font-semibold text-[var(--primary)] sm:text-3xl">
              {page.h1}
            </h1>
            <p className="text-sm leading-relaxed text-slate-600 sm:text-base">
              {excerpt(page.intro, 220)}
            </p>
          </div>
          <div className="relative mx-auto h-40 w-full max-w-[200px] lg:h-44">
            <Image
              src={page.image}
              alt={`${page.h1} — Stick-Onn adhesives`}
              fill
              className="object-contain"
              sizes="200px"
            />
          </div>
        </div>
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

      <RelatedProducts products={recommended} title="Recommended products" />

      <FaqSection faqs={page.faqs} limit={3} />

      <WhatsAppCta
        heading="Need help choosing?"
        description="Share your substrate and volume — our team will recommend the right formula."
      />

      <div className="text-center">
        <Link
          href="/applications"
          className="text-sm font-semibold text-[var(--primary)] transition hover:text-[var(--primary-dark)]"
        >
          ← All applications
        </Link>
      </div>

      <JsonLd data={schemas} />
    </div>
  );
}
