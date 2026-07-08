import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import type { Product } from "@/lib/types";

type RelatedProductsProps = {
  products: Product[];
  title?: string;
};

export function RelatedProducts({
  products,
  title = "You may also need",
}: RelatedProductsProps) {
  if (products.length === 0) return null;

  return (
    <section className="space-y-6">
      <h2 className="text-2xl font-semibold text-[var(--primary)]">{title}</h2>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {products.map((product) => (
          <Link
            key={product.slug}
            href={`/products/${product.slug}`}
            className="group flex items-center gap-4 rounded-2xl border border-slate-200 bg-white p-4 transition hover:border-[var(--primary)]/40 hover:shadow-lg hover:shadow-[var(--primary)]/5"
          >
            <div className="relative h-16 w-16 flex-shrink-0 overflow-hidden rounded-xl bg-slate-50">
              <Image
                src={product.heroImage}
                alt={`${product.name} adhesive`}
                fill
                className="object-contain p-1"
                sizes="64px"
              />
            </div>
            <div className="min-w-0 flex-1">
              <p className="truncate text-sm font-semibold text-[var(--primary)]">
                {product.name}
              </p>
              <p className="mt-0.5 line-clamp-2 text-xs text-slate-500">
                {product.shortDescription}
              </p>
            </div>
            <ArrowUpRight className="h-4 w-4 flex-shrink-0 text-slate-400 transition group-hover:text-[var(--primary)]" />
          </Link>
        ))}
      </div>
    </section>
  );
}
