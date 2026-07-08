"use client";

import Image from "next/image";
import Link from "next/link";
import { Reveal } from "@/components/reveal";

type ApplicationCardProps = {
  title: string;
  description: string;
  image: string;
  slug: string;
  products: { name: string; slug: string }[];
  points?: string[];
  animationDelay?: number;
};

export function ApplicationCard({
  title,
  description,
  image,
  slug,
  products,
  points,
  animationDelay = 0,
}: ApplicationCardProps) {
  return (
    <Reveal
      as="div"
      className="group flex flex-col overflow-hidden rounded-3xl border border-slate-200/80 bg-white/80 backdrop-blur transition hover:-translate-y-1.5 hover:border-[var(--primary)]/50 hover:shadow-[0_25px_60px_rgba(0,60,143,0.08)]"
      delay={animationDelay}
    >
      <div className="relative h-56 w-full overflow-hidden bg-gradient-to-br from-[#f4f7ff] via-white to-[#fdf7f2]">
        <Image
          src={image}
          alt={`${title} adhesive application — Stick-Onn India`}
          fill
          className="object-contain p-6 transition duration-500 group-hover:scale-[1.03]"
          sizes="(max-width: 768px) 100vw, 33vw"
        />
      </div>
      <div className="flex flex-1 flex-col gap-4 p-6 sm:p-7">
        <div className="space-y-3">
          <h3 className="text-lg font-semibold text-[var(--primary)]">{title}</h3>
          <p className="text-sm text-slate-600 line-clamp-2">{description}</p>
        </div>
        <div className="mt-auto space-y-3 pt-2">
          <div className="text-[11px] font-semibold uppercase tracking-[0.35em] text-slate-400">
            Recommended
          </div>
          <div className="flex flex-wrap gap-2">
            {products.map((product) => (
              <Link
                key={product.slug}
                href={`/products/${product.slug}`}
                className="rounded-full border border-slate-300 bg-white px-3 py-1 text-xs font-semibold text-[var(--primary)] transition hover:border-[var(--primary)] hover:text-[var(--primary-dark)]"
              >
                {product.name}
              </Link>
            ))}
          </div>
        </div>
        <Link
          href={`/applications/${slug}`}
          className="mt-4 inline-flex w-fit items-center gap-2 text-sm font-semibold text-[var(--primary)] transition hover:text-[var(--primary-dark)]"
        >
          Explore application guide
        </Link>
      </div>
    </Reveal>
  );
}

