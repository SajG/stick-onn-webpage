"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { Product } from "@/lib/data";
import { cn } from "@/lib/utils";
import { Reveal } from "@/components/reveal";

type ProductCardProps = {
  product: Product;
  animationDelay?: number;
};

const gradientMap: Record<string, string> = {
  "aqua-plus": "from-[#b9e1ff] via-white to-[#e9f6ff]",
  "clout-d3": "from-[#c8d4ff] via-white to-[#eef0ff]",
  aerofix: "from-[#ffd9bf] via-white to-[#fff2e5]",
  heatfix: "from-[#ffc9aa] via-white to-[#ffe9dc]",
  wpcfix: "from-[#cbead1] via-white to-[#f0fff4]",
};

export function ProductCard({ product, animationDelay = 0 }: ProductCardProps) {
  const gradientClass =
    gradientMap[product.slug] ?? "from-slate-200 via-white to-slate-100";
  const orderNowHref = `/contact?product=${encodeURIComponent(
    product.name,
  )}#contact-form`;

  return (
    <Reveal
      as="div"
      className="group flex flex-col overflow-hidden rounded-3xl border border-slate-200/80 bg-white/80 backdrop-blur transition-all duration-300 hover:-translate-y-1.5 hover:border-[var(--primary)]/60 hover:shadow-2xl hover:shadow-[var(--primary)]/10"
      delay={animationDelay}
    >
      <Link
        href={`/products/${product.slug}`}
        className={cn(
          "relative flex h-64 items-center justify-center overflow-hidden rounded-b-[3rem] rounded-t-3xl bg-gradient-to-br transition duration-500 sm:h-72",
          gradientClass,
        )}
      >
        <span className="pointer-events-none absolute -left-10 top-6 h-32 w-32 rounded-full bg-white/40 blur-3xl" />
        <span className="pointer-events-none absolute -right-6 bottom-4 h-28 w-28 rounded-full bg-accent/40 blur-3xl opacity-40" />
        <Image
          src={product.heroImage}
          alt={product.name}
          fill
          className="z-10 scale-105 object-contain drop-shadow-xl transition-transform duration-500 group-hover:scale-110"
          sizes="(max-width: 768px) 100vw, 33vw"
        />
      </Link>
      <div className="flex flex-1 flex-col gap-4 p-6 sm:p-7">
        <div className="space-y-3">
          <p className="inline-flex items-center gap-2 rounded-full bg-slate-100/60 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.35em] text-accent">
            {product.tagline}
          </p>
          <div>
            <h3 className="text-xl font-semibold text-[var(--primary)]">
              {product.name}
            </h3>
            <p className="mt-2 text-sm text-slate-600">
              {product.shortDescription}
            </p>
          </div>
        </div>
        <div className="mt-auto flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <Link
            href={orderNowHref}
            className="inline-flex items-center justify-center rounded-full bg-[var(--primary)] px-5 py-2 text-xs font-semibold uppercase tracking-[0.28em] text-white transition hover:bg-[var(--primary-dark)]"
          >
            Order Now
          </Link>
          <Link
            href={`/products/${product.slug}`}
            className="inline-flex items-center gap-2 text-sm font-semibold text-[var(--primary)] transition hover:text-[var(--primary-dark)]"
          >
            Learn More
            <ArrowUpRight className="h-4 w-4 transition group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </Reveal>
  );
}

