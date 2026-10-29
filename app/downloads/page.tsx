import Image from "next/image";
import Link from "next/link";
import {
  BookOpen,
  CheckCircle2,
  Download,
  ExternalLink,
  FileText,
  MessageCircle,
  ShieldAlert,
} from "lucide-react";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { DocumentLibrary } from "@/components/document-library";
import { JsonLd } from "@/components/json-ld";
import { PageHeader } from "@/components/page-header";
import { Reveal } from "@/components/reveal";
import { products } from "@/lib/data";
import { brochure, productDocuments } from "@/lib/downloads-data";
import { createBreadcrumbSchema, createPageMetadata, whatsappUrl } from "@/lib/seo";

export const metadata = createPageMetadata({
  title: "Downloads — TDS, MSDS & Product Brochure | Stick-Onn Adhesives",
  description:
    "Download Technical Data Sheets (TDS), Material Safety Data Sheets (MSDS) and the complete product brochure for every Stick-Onn adhesive. Free PDF downloads.",
  path: "/downloads",
  keywords: [
    "Stick-Onn TDS",
    "Stick-Onn MSDS",
    "adhesive technical data sheet",
    "adhesive safety data sheet",
    "PUR adhesive MSDS",
    "Synergy Bonding brochure",
  ],
});

const docTypes = [
  {
    icon: FileText,
    title: "Technical Data Sheet (TDS)",
    description:
      "Typical properties, coverage, open and cure times, compatible substrates, directions for use, pack sizes and storage.",
    tone: "bg-[var(--primary)]",
  },
  {
    icon: ShieldAlert,
    title: "Material Safety Data Sheet (MSDS)",
    description:
      "16-section GHS format: hazard identification, composition, first aid, fire-fighting, handling, PPE, transport and disposal.",
    tone: "bg-[var(--accent)]",
  },
];

export default function DownloadsPage() {
  const entries = productDocuments.flatMap((docs) => {
    const product = products.find((item) => item.slug === docs.productSlug);
    if (!product) return [];
    const { slug, name, heroImage, shortDescription } = product;
    return [{ ...docs, product: { slug, name, heroImage, shortDescription } }];
  });
  const documentCount = entries.reduce(
    (count, entry) => count + entry.tds.length + entry.msds.length,
    0,
  );

  return (
    <div className="container-balanced flex flex-col gap-12 pb-8">
      <div className="-mb-6">
        <Breadcrumbs items={[{ label: "Downloads" }]} />
      </div>

      <PageHeader
        eyebrow="Resource Centre"
        title="Technical downloads"
        description="Technical Data Sheets, Material Safety Data Sheets and our complete product brochure — free to download, no sign-up required."
      />

      {/* Brochure feature */}
      <Reveal
        as="section"
        className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#061c3d] via-[var(--primary)] to-[#0d4aa6] text-white"
      >
        <span className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-[var(--accent)]/30 blur-3xl" />
        <span className="pointer-events-none absolute -bottom-32 left-1/3 h-72 w-72 rounded-full bg-sky-400/20 blur-3xl" />
        <div className="relative grid items-center gap-10 p-8 md:grid-cols-[280px_1fr] md:p-12 lg:grid-cols-[320px_1fr] lg:gap-14">
          <a
            href={brochure.href}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative mx-auto block w-56 md:w-full"
            aria-label="Open the product brochure"
          >
            <span className="absolute inset-0 translate-x-3 translate-y-3 rounded-xl bg-white/15" />
            <Image
              src={brochure.cover}
              alt="Synergy Bonding Solutions product brochure cover"
              width={636}
              height={900}
              className="relative rounded-xl shadow-2xl shadow-black/40 transition duration-500 group-hover:-translate-y-1 group-hover:rotate-[-1deg]"
              sizes="(min-width: 1024px) 320px, 280px"
            />
          </a>
          <div className="space-y-6">
            <div className="space-y-3">
              <p className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.3em] text-[var(--accent)]">
                <BookOpen className="h-4 w-4" />
                Product Brochure
              </p>
              <h2 className="text-2xl font-semibold leading-tight sm:text-3xl">
                {brochure.title}
              </h2>
              <p className="text-sm text-white/70">
                PDF · {brochure.pages} pages · {brochure.size}
              </p>
            </div>
            <ul className="grid gap-2.5 text-sm text-white/85 sm:grid-cols-2">
              {brochure.highlights.map((item) => (
                <li key={item} className="flex gap-2.5">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-[var(--accent)]" />
                  {item}
                </li>
              ))}
            </ul>
            <div className="flex flex-wrap gap-3">
              <a
                href={brochure.href}
                download
                className="inline-flex items-center gap-2 rounded-full bg-[var(--accent)] px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-black/20 transition hover:bg-[#e86e00]"
              >
                <Download className="h-4 w-4" />
                Download brochure
              </a>
              <a
                href={brochure.href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-white/30 px-6 py-3 text-sm font-semibold text-white transition hover:border-white hover:bg-white/10"
              >
                <ExternalLink className="h-4 w-4" />
                View online
              </a>
            </div>
          </div>
        </div>
      </Reveal>

      {/* Document library */}
      <section className="space-y-6">
        <div className="flex flex-col gap-2">
          <p className="text-xs font-semibold uppercase tracking-[0.32em] text-accent">
            Document library
          </p>
          <h2 className="text-2xl font-semibold text-[var(--primary)] sm:text-3xl">
            TDS &amp; MSDS for every Stick-Onn adhesive
          </h2>
          <p className="max-w-3xl text-sm text-slate-600">
            {documentCount} documents across {entries.length} products. Each file downloads
            as a PDF — share it with your purchase, QA or safety team.
          </p>
        </div>
        <DocumentLibrary entries={entries} />
      </section>

      {/* What's inside + help */}
      <section className="grid gap-5 lg:grid-cols-3">
        {docTypes.map(({ icon: Icon, title, description, tone }) => (
          <div key={title} className="flex gap-4 rounded-3xl border border-slate-200 bg-white p-6">
            <span
              className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl text-white ${tone}`}
            >
              <Icon className="h-5 w-5" />
            </span>
            <div className="space-y-1.5">
              <h3 className="text-base font-semibold text-[var(--primary)]">{title}</h3>
              <p className="text-sm text-slate-600">{description}</p>
            </div>
          </div>
        ))}
        <div className="flex flex-col justify-between gap-4 rounded-3xl border border-[var(--primary)]/20 bg-gradient-to-br from-white via-[#f5f9ff] to-white p-6">
          <div className="space-y-1.5">
            <h3 className="text-base font-semibold text-[var(--primary)]">
              Need a COA or another document?
            </h3>
            <p className="text-sm text-slate-600">
              Batch Certificates of Analysis, test reports and private-label documentation are
              available on request.
            </p>
          </div>
          <a
            href={whatsappUrl("Hi Stick-Onn team, I need product documentation (TDS / MSDS / COA).")}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex w-fit items-center gap-2 rounded-full bg-[#25D366] px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-[#1da851]"
          >
            <MessageCircle className="h-4 w-4" />
            Request on WhatsApp
          </a>
        </div>
      </section>

      <p className="text-center text-xs text-slate-400">
        Documents are provided for information. Values are typical and not specification limits.
        Always read the product label and MSDS before use.{" "}
        <Link href="/contact" className="underline hover:text-[var(--primary)]">
          Contact us
        </Link>{" "}
        for the latest revision.
      </p>

      <JsonLd
        data={[
          createBreadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Downloads", path: "/downloads" },
          ]),
        ]}
      />
    </div>
  );
}
