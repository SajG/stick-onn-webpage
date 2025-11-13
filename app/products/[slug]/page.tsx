import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  ArrowLeft,
  Download,
  Package,
  ClipboardList,
  Lightbulb,
} from "lucide-react";
import { companyInfo, products } from "@/lib/data";
import { PageHeader } from "@/components/page-header";
import { absoluteUrl, createPageMetadata } from "@/lib/seo";
import { Reveal } from "@/components/reveal";

type ProductSlugParams = Promise<{ slug: string }>;

type ProductPageProps = {
  params: ProductSlugParams;
};

async function resolveProduct(paramsPromise: ProductSlugParams) {
  const { slug } = await paramsPromise;
  const product = products.find((item) => item.slug === slug);

  return {
    slug,
    product,
  };
}

export function generateStaticParams() {
  return products.map((product) => ({ slug: product.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: ProductSlugParams;
}) {
  const { product } = await resolveProduct(params);

  if (!product) {
    return {
      title: "Product Not Found",
    };
  }

  return createPageMetadata({
    title: `${product.name} | Stick-Onn Adhesives`,
    description: product.shortDescription || product.description,
    path: `/products/${product.slug}`,
    images: [product.heroImage],
    keywords: [
      product.name,
      product.tagline,
      `${product.name} adhesive`,
      "Stick-Onn adhesive",
      "industrial adhesive",
    ],
  });
}

export default async function ProductDetailPage({ params }: ProductPageProps) {
  const { product } = await resolveProduct(params);

  if (!product) {
    notFound();
  }

  const resolvedProduct = product;
  const productSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: resolvedProduct.name,
    description: resolvedProduct.description,
    image: absoluteUrl(resolvedProduct.heroImage),
    sku: resolvedProduct.slug.toUpperCase(),
    brand: {
      "@type": "Brand",
      name: companyInfo.name,
    },
    manufacturer: {
      "@type": "Organization",
      name: companyInfo.legal,
    },
    slogan: resolvedProduct.tagline,
    category: "Adhesives",
    url: absoluteUrl(`/products/${resolvedProduct.slug}`),
    additionalProperty: resolvedProduct.features.map((feature) => ({
      "@type": "PropertyValue",
      name: "Feature",
      value: feature,
    })),
  };

  return (
    <div className="container-balanced flex flex-col gap-12">
      <Reveal as="div" delay={20}>
        <Link
          href="/products"
          className="inline-flex items-center gap-2 text-sm font-semibold text-slate-500 transition hover:text-[var(--primary)]"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to products
        </Link>
      </Reveal>

      <PageHeader
        eyebrow="Stick-Onn Product"
        title={resolvedProduct.name}
        description={resolvedProduct.tagline}
        align="left"
      />

      <Reveal
        as="section"
        className="grid gap-8 rounded-3xl border border-slate-200 bg-white p-8 md:grid-cols-[1.1fr,0.9fr] md:items-center"
      >
        <Reveal as="div" className="space-y-6" delay={60}>
          <p className="text-sm text-slate-600 sm:text-base">{resolvedProduct.description}</p>
          <Reveal as="div" className="flex flex-wrap gap-3" delay={100}>
            <a
              href={resolvedProduct.datasheetUrl}
              className="inline-flex items-center gap-2 rounded-full bg-[var(--primary)] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[var(--primary-dark)]"
            >
              <Download className="h-4 w-4" />
              Download Technical Data Sheet
            </a>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-full border border-slate-300 px-5 py-3 text-sm font-semibold text-[var(--primary)] transition hover:border-[var(--primary)]"
            >
              Connect with experts
            </Link>
          </Reveal>
        </Reveal>
        <Reveal
          as="div"
          className="relative flex min-h-[320px] w-full items-center justify-center overflow-hidden rounded-3xl border border-slate-200 bg-gradient-to-br from-white via-slate-50 to-slate-100"
          delay={120}
          direction="right"
        >
          <span className="absolute -left-20 top-4 h-40 w-40 rounded-full bg-accent/30 blur-3xl" />
          <span className="absolute -bottom-20 right-0 h-44 w-44 rounded-full bg-[var(--primary)]/15 blur-3xl" />
          <Image
            src={resolvedProduct.heroImage}
            alt={resolvedProduct.name}
            width={420}
            height={420}
            className="relative z-10 max-h-[280px] w-auto object-contain drop-shadow-2xl sm:max-h-[320px]"
            priority
          />
        </Reveal>
      </Reveal>

      <Reveal as="section" className="grid gap-8 md:grid-cols-2">
        <Reveal
          as="div"
          className="space-y-4 rounded-3xl border border-slate-200 bg-white p-8"
          delay={40}
        >
          <div className="flex items-center gap-3">
            <Lightbulb className="h-6 w-6 text-accent" />
            <h2 className="text-xl font-semibold text-[var(--primary)]">
              Key Features
            </h2>
          </div>
          <ul className="grid gap-3 text-sm text-slate-600">
            {resolvedProduct.features.map((feature, index) => (
              <Reveal
                as="li"
                key={feature}
                className="flex gap-2 rounded-2xl border border-slate-200 px-4 py-3 text-sm text-slate-700"
                delay={index * 60}
              >
                <span className="mt-1 h-2 w-2 flex-shrink-0 rounded-full bg-accent" />
                {feature}
              </Reveal>
            ))}
          </ul>
        </Reveal>
        <Reveal
          as="div"
          className="space-y-4 rounded-3xl border border-slate-200 bg-white p-8"
          delay={80}
        >
          <div className="flex items-center gap-3">
            <Package className="h-6 w-6 text-accent" />
            <h2 className="text-xl font-semibold text-[var(--primary)]">
              Available Packs
            </h2>
          </div>
          <div className="flex flex-wrap gap-2 text-sm text-[var(--primary)]">
            {resolvedProduct.packs.map((pack, index) => (
              <Reveal
                as="span"
                key={pack}
                className="rounded-full border border-slate-300 px-4 py-2 font-semibold"
                delay={index * 50}
              >
                {pack}
              </Reveal>
            ))}
          </div>
          <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4 text-xs text-slate-600">
            Custom pack sizes available on request for OEM and industrial orders.
          </div>
        </Reveal>
      </Reveal>

      <Reveal as="section" className="grid gap-8 md:grid-cols-2">
        <Reveal
          as="div"
          className="space-y-4 rounded-3xl border border-slate-200 bg-white p-8"
          delay={40}
        >
          <div className="flex items-center gap-3">
            <ClipboardList className="h-6 w-6 text-accent" />
            <h2 className="text-xl font-semibold text-[var(--primary)]">
              How to Apply
            </h2>
          </div>
          <ol className="grid gap-3 text-sm text-slate-600">
            {resolvedProduct.howToApply.map((step, index) => (
              <Reveal
                as="li"
                key={step}
                className="flex gap-3 rounded-2xl border border-slate-200 p-4"
                delay={index * 70}
              >
                <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[var(--primary)] text-sm font-semibold text-white">
                  {index + 1}
                </span>
                <span>{step}</span>
              </Reveal>
            ))}
          </ol>
        </Reveal>
        <Reveal
          as="div"
          className="space-y-4 rounded-3xl border border-slate-200 bg-white p-8"
          delay={80}
        >
          <div className="flex items-center gap-3">
            <Lightbulb className="h-6 w-6 text-accent" />
            <h2 className="text-xl font-semibold text-[var(--primary)]">
              Ideal Applications
            </h2>
          </div>
          <ul className="grid gap-3 text-sm text-slate-600">
            {resolvedProduct.applications.map((application, index) => (
              <Reveal
                as="li"
                key={application}
                className="flex gap-2 rounded-2xl border border-slate-200 px-4 py-3 text-sm text-slate-700"
                delay={index * 70}
              >
                <span className="mt-1 h-2 w-2 flex-shrink-0 rounded-full bg-accent" />
                {application}
              </Reveal>
            ))}
          </ul>
        </Reveal>
      </Reveal>

      <Reveal
        as="section"
        className="rounded-3xl border border-slate-200 bg-white px-6 py-10 text-center sm:px-10 sm:text-left"
      >
        <Reveal
          as="h2"
          className="text-3xl font-semibold text-[var(--primary)] sm:text-4xl"
          delay={40}
        >
          Need application support or bulk pricing?
        </Reveal>
        <Reveal
          as="p"
          className="mt-3 text-sm text-slate-600 sm:text-base"
          delay={70}
        >
          Our technical sales engineers can recommend the perfect bonding
          solution for your production line and arrange samples or on-site demos.
        </Reveal>
        <Reveal as="div" className="mt-6 flex flex-wrap gap-3 sm:gap-4" delay={100}>
          <Link
            href="/contact"
            className="rounded-full bg-[var(--primary)] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[var(--primary-dark)]"
          >
            Talk to Stick-Onn
          </Link>
          <Link
            href="/applications"
            className="rounded-full border border-slate-300 px-6 py-3 text-sm font-semibold text-[var(--primary)] transition hover:border-[var(--primary)]"
          >
            View application guides
          </Link>
        </Reveal>
      </Reveal>
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }}
      />
    </div>
  );
}

