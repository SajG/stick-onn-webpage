"use client";

import Image from "next/image";
import Link from "next/link";
import { useMemo, useState } from "react";
import { FileText, Search, ShieldAlert, Download } from "lucide-react";
import type { Product } from "@/lib/types";
import {
  downloadCategories,
  type DocumentFile,
  type ProductDocuments,
} from "@/lib/downloads-data";
import { cn } from "@/lib/utils";

type LibraryEntry = ProductDocuments & {
  product: Pick<Product, "slug" | "name" | "heroImage" | "shortDescription">;
};

type DocumentLibraryProps = {
  entries: LibraryEntry[];
};

const filters = ["All", ...downloadCategories] as const;

function DocButton({
  file,
  kind,
  productName,
}: {
  file: DocumentFile;
  kind: "TDS" | "MSDS";
  productName: string;
}) {
  const isTds = kind === "TDS";
  const Icon = isTds ? FileText : ShieldAlert;
  return (
    <a
      href={file.href}
      download
      aria-label={`Download ${kind} for ${productName}${file.label ? ` (${file.label})` : ""}`}
      className={cn(
        "group/btn flex items-center gap-3 rounded-xl border px-3.5 py-2.5 transition",
        isTds
          ? "border-[var(--primary)]/20 bg-[var(--primary)]/[0.04] hover:border-[var(--primary)] hover:bg-[var(--primary)] hover:text-white"
          : "border-[var(--accent)]/30 bg-[var(--accent)]/[0.06] hover:border-[var(--accent)] hover:bg-[var(--accent)] hover:text-white",
      )}
    >
      <span
        className={cn(
          "flex h-9 w-9 shrink-0 items-center justify-center rounded-lg text-white transition group-hover/btn:bg-white/20",
          isTds ? "bg-[var(--primary)]" : "bg-[var(--accent)]",
        )}
      >
        <Icon className="h-4 w-4" />
      </span>
      <span className="min-w-0 flex-1 leading-tight">
        <span className="block text-sm font-semibold">
          {isTds ? "Technical Data Sheet" : "Safety Data Sheet"}
        </span>
        <span className="block truncate text-[11px] text-slate-500 transition group-hover/btn:text-white/80">
          {file.label ? `${file.label} · ` : ""}
          PDF · {file.pages} {file.pages === 1 ? "page" : "pages"} · {file.size}
        </span>
      </span>
      <Download className="h-4 w-4 shrink-0 opacity-60 transition group-hover/btn:translate-y-0.5 group-hover/btn:opacity-100" />
    </a>
  );
}

export function DocumentLibrary({ entries }: DocumentLibraryProps) {
  const [query, setQuery] = useState("");
  const [filter, setFilter] = useState<(typeof filters)[number]>("All");

  const visible = useMemo(() => {
    const q = query.trim().toLowerCase();
    return entries.filter((entry) => {
      if (filter !== "All" && entry.category !== filter) return false;
      if (!q) return true;
      return [entry.product.name, entry.chemistry, entry.category]
        .join(" ")
        .toLowerCase()
        .includes(q);
    });
  }, [entries, filter, query]);

  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
        <div className="flex flex-wrap gap-2" role="group" aria-label="Filter by category">
          {filters.map((item) => (
            <button
              key={item}
              type="button"
              onClick={() => setFilter(item)}
              aria-pressed={filter === item}
              className={cn(
                "rounded-full border px-4 py-1.5 text-sm font-medium transition",
                filter === item
                  ? "border-[var(--primary)] bg-[var(--primary)] text-white"
                  : "border-slate-200 bg-white text-slate-600 hover:border-[var(--primary)]/50 hover:text-[var(--primary)]",
              )}
            >
              {item}
            </button>
          ))}
        </div>
        <label className="relative block w-full lg:w-72">
          <span className="sr-only">Search documents</span>
          <Search className="pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
          <input
            type="search"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Search product or chemistry…"
            className="w-full rounded-full border border-slate-200 bg-white py-2.5 pl-10 pr-4 text-sm outline-none transition focus:border-[var(--primary)] focus:ring-2 focus:ring-[var(--primary)]/15"
          />
        </label>
      </div>

      {visible.length === 0 ? (
        <p className="rounded-2xl border border-dashed border-slate-300 bg-white p-10 text-center text-sm text-slate-500">
          No documents match “{query}”. Try another product name, or{" "}
          <Link href="/contact" className="font-semibold text-[var(--primary)]">
            ask our team
          </Link>
          .
        </p>
      ) : (
        <div className="grid gap-5 md:grid-cols-2">
          {visible.map((entry) => (
            <article
              key={entry.productSlug}
              className="flex flex-col gap-5 rounded-3xl border border-slate-200 bg-white p-5 transition hover:border-[var(--primary)]/40 hover:shadow-xl hover:shadow-[var(--primary)]/5 sm:p-6"
            >
              <div className="flex items-start gap-4">
                <Link
                  href={`/products/${entry.productSlug}`}
                  className="relative flex h-20 w-20 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-slate-100 via-white to-slate-50"
                >
                  <Image
                    src={entry.product.heroImage}
                    alt={entry.product.name}
                    width={80}
                    height={80}
                    className="object-contain p-1.5 drop-shadow"
                  />
                </Link>
                <div className="min-w-0 space-y-1.5">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="rounded-full bg-slate-100 px-2.5 py-0.5 text-[11px] font-semibold uppercase tracking-[0.14em] text-slate-500">
                      {entry.category}
                    </span>
                    <span className="text-xs text-slate-400">{entry.chemistry}</span>
                  </div>
                  <h3 className="text-lg font-semibold leading-snug text-[var(--primary)]">
                    <Link href={`/products/${entry.productSlug}`} className="hover:underline">
                      {entry.product.name}
                    </Link>
                  </h3>
                  <p className="line-clamp-2 text-sm text-slate-500">
                    {entry.product.shortDescription}
                  </p>
                </div>
              </div>
              <div className="mt-auto grid gap-2.5">
                {entry.tds.map((file) => (
                  <DocButton key={file.href} file={file} kind="TDS" productName={entry.product.name} />
                ))}
                {entry.msds.map((file) => (
                  <DocButton key={file.href} file={file} kind="MSDS" productName={entry.product.name} />
                ))}
              </div>
            </article>
          ))}
        </div>
      )}
    </div>
  );
}
