import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  ArrowLeft,
  Download,
  Package,
  ClipboardList,
  Lightbulb,
  ShieldCheck,
  MapPin,
} from "lucide-react";
import { companyInfo, products } from "@/lib/data";
import { displayFeatures, takeItems } from "@/lib/display-content";
import { Breadcrumbs } from "@/components/breadcrumbs";
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

type ProductSlugParams = Promise<{ slug: string }>;

async function resolveProduct(paramsPromise: ProductSlugParams) {
  const { slug } = await paramsPromise;
  const product = products.find((item) => item.slug === slug);
  return { slug, product };
}

export function generateStaticParams() {
  return products.map((product) => ({ slug: product.slug }));
}

export async function generateMetadata({ params }: { params: ProductSlugParams }) {
  const { product } = await resolveProduct(params);
  if (!product) return { title: "Product Not Found" };

  return createPageMetadata({
    title: product.seoTitle,
    description: product.seoDescription,
    path: `/products/${product.slug}`,
    images: [product.heroImage],
    keywords: product.keywords,
  });
}

export default async function ProductDetailPage({
  params,
}: {
  params: ProductSlugParams;
}) {
  const { product } = await resolveProduct(params);
  if (!product) notFound();

  const related = product.relatedProductSlugs
    .map((slug) => products.find((p) => p.slug === slug))
    .filter(Boolean) as typeof products;

  const features = displayFeatures(product.features);
  const steps = takeItems(product.howToApply, 4);

  const schemas = [
    createProductSchema(product),
    createFaqSchema(product.faqs),
    createBreadcrumbSchema([
      { name: "Home", path: "/" },
      { name: "Products", path: "/products" },
      { name: product.name, path: `/products/${product.slug}` },
    ]),
  ];

  return (
    <div className="container-balanced flex flex-col gap-8 pb-8">
      <Breadcrumbs
        items={[
          { label: "Products", href: "/products" },
          { label: product.name.replace("Stick-Onn ", "") },
        ]}
      />

      <div className="grid gap-8 lg:grid-cols-[1fr,300px] lg:items-start">
        <div className="flex flex-col gap-8">
          <section className="overflow-hidden rounded-3xl border border-slate-200 bg-white">
            <div className="grid gap-6 p-6 md:grid-cols-[1fr,220px] md:items-center md:p-8">
              <div className="space-y-3">
                <h1 className="text-2xl font-semibold text-[var(--primary)] sm:text-3xl">
                  {product.name}
                </h1>
                <p className="text-sm text-slate-600 sm:text-base">{product.shortDescription}</p>
                <div className="flex flex-wrap gap-2 pt-1">
                  {product.applications.slice(0, 4).map((app) => (
                    <span
                      key={app}
                      className="rounded-full bg-slate-100 px-3 py-1 text-xs text-slate-600"
                    >
                      {app}
                    </span>
                  ))}
                </div>
                <div className="flex flex-wrap gap-2 pt-2">
                  <a
                    href={product.datasheetUrl}
                    className="inline-flex items-center gap-2 rounded-full bg-[var(--primary)] px-4 py-2 text-sm font-semibold text-white transition hover:bg-[var(--primary-dark)]"
                  >
                    <Download className="h-4 w-4" />
                    TDS
                  </a>
                  <Link
                    href={`/applications/${product.applicationSlug}`}
                    className="inline-flex items-center gap-2 rounded-full border border-slate-300 px-4 py-2 text-sm font-semibold text-[var(--primary)] transition hover:border-[var(--primary)]"
                  >
                    Applications
                  </Link>
                </div>
              </div>
              <div className="relative mx-auto flex h-52 w-full max-w-[220px] items-center justify-center rounded-2xl bg-slate-50">
                <Image
                  src={product.heroImage}
                  alt={`${product.name} — Stick-Onn adhesive India`}
                  width={220}
                  height={220}
                  className="object-contain p-3 drop-shadow-lg"
                  priority
                />
              </div>
            </div>
          </section>

          <div className="grid gap-5 md:grid-cols-2">
            <section className="rounded-2xl border border-slate-200 bg-white p-6">
              <div className="mb-4 flex items-center gap-2">
                <Lightbulb className="h-4 w-4 text-accent" />
                <h2 className="text-base font-semibold text-[var(--primary)]">Key features</h2>
              </div>
              <ul className="space-y-2 text-sm text-slate-700">
                {features.map((feature) => (
                  <li key={feature} className="flex gap-2">
                    <span className="mt-2 h-1 w-1 flex-shrink-0 rounded-full bg-accent" />
                    {feature}
                  </li>
                ))}
              </ul>
            </section>

            <section className="rounded-2xl border border-slate-200 bg-white p-6">
              <div className="mb-4 flex items-center gap-2">
                <ClipboardList className="h-4 w-4 text-accent" />
                <h2 className="text-base font-semibold text-[var(--primary)]">How to apply</h2>
              </div>
              <ol className="space-y-2 text-sm text-slate-700">
                {steps.map((step, index) => (
                  <li key={step} className="flex gap-2">
                    <span className="font-semibold text-[var(--primary)]">{index + 1}.</span>
                    <span>{step}</span>
                  </li>
                ))}
              </ol>
            </section>
          </div>

          <RelatedProducts products={related} />

          <FaqSection faqs={product.faqs} limit={3} />
        </div>

        <aside className="flex flex-col gap-5 lg:sticky lg:top-24">
          <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
            <div className="mb-3 flex items-center gap-2">
              <Package className="h-4 w-4 text-accent" />
              <h2 className="text-sm font-semibold text-[var(--primary)]">Pack sizes</h2>
            </div>
            <div className="flex flex-wrap gap-1.5">
              {product.packs.map((pack) => (
                <span
                  key={pack}
                  className="rounded-full border border-slate-200 px-2.5 py-1 text-xs font-medium text-[var(--primary)]"
                >
                  {pack}
                </span>
              ))}
            </div>
            <Link
              href={`/contact?product=${encodeURIComponent(product.name)}#contact-form`}
              className="mt-5 block w-full rounded-full bg-[var(--primary)] py-2.5 text-center text-sm font-semibold text-white transition hover:bg-[var(--primary-dark)]"
            >
              Get a quote
            </Link>
          </div>

          <div className="flex items-start gap-2 rounded-2xl border border-slate-200 bg-slate-50 p-4 text-xs text-slate-600">
            <MapPin className="mt-0.5 h-4 w-4 flex-shrink-0 text-accent" />
            <span>Pan-India supply via 120+ dealers</span>
          </div>

          <WhatsAppCta variant="compact" productName={product.name} />
        </aside>
      </div>

      <div className="text-center">
        <Link
          href="/products"
          className="inline-flex items-center gap-2 text-sm text-slate-500 transition hover:text-[var(--primary)]"
        >
          <ArrowLeft className="h-4 w-4" />
          All products
        </Link>
      </div>

      <JsonLd data={schemas} />
    </div>
  );
}
