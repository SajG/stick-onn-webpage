"use client";

import Image, { type StaticImageData } from "next/image";
import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";
import { cn } from "@/lib/utils";
import { Reveal } from "@/components/reveal";

type HeroBannerProps = {
  title: string;
  subtitle: string;
  description: string;
  primaryCta: { label: string; href: string };
  secondaryCta: { label: string; href: string };
  image?: StaticImageData | string;
  imageAlt?: string;
  className?: string;
  highlights?: string[];
};

export function HeroBanner({
  title,
  subtitle,
  description,
  primaryCta,
  secondaryCta,
  image,
  imageAlt,
  className,
  highlights,
}: HeroBannerProps) {
  const hasImage = Boolean(image);

  return (
    <Reveal
      as="section"
      className={cn(
        "relative overflow-hidden rounded-[32px] border border-slate-200 bg-white/95 px-6 py-14 text-[var(--foreground)] shadow-[0_30px_60px_rgba(16,42,97,0.12)] sm:px-12",
        hasImage && "md:flex md:items-center md:gap-14",
        className,
      )}
    >
      <div className="pointer-events-none absolute -left-[15%] top-10 hidden h-64 w-64 rounded-full bg-[#ebf3ff]/70 blur-3xl md:block" />
      <div className="pointer-events-none absolute -bottom-24 right-6 h-72 w-72 rounded-full bg-[#ffe8d1]/60 blur-[110px]" />
      <div className="pointer-events-none absolute inset-0 rounded-[32px] border border-white/40"></div>
      <Reveal
        className="relative z-10 space-y-5 md:w-[48%]"
        delay={40}
        direction="up"
      >
        <Reveal as="p" className="text-xs font-semibold uppercase tracking-[0.32em] text-accent">
          {subtitle}
        </Reveal>
        <Reveal
          as="h1"
          className="text-4xl font-semibold leading-tight text-[var(--primary)] sm:text-[44px] lg:text-[52px] xl:text-[56px]"
          delay={80}
        >
          {title}
        </Reveal>
        <Reveal
          as="p"
          className="max-w-xl text-base leading-relaxed text-slate-600 sm:text-lg"
          delay={120}
        >
          {description}
        </Reveal>
        {highlights && highlights.length > 0 && (
          <Reveal as="ul" className="grid gap-3 text-sm sm:grid-cols-2" delay={160}>
            {highlights.map((point, index) => (
              <Reveal
                as="li"
                key={point}
                className="inline-flex items-center gap-3 rounded-2xl border border-slate-200/70 bg-white/80 px-5 py-3 shadow-[0_12px_24px_rgba(18,53,105,0.06)] backdrop-blur"
                delay={180 + index * 60}
              >
                <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-[var(--primary)]/90 text-white shadow-sm">
                  <Check className="h-3.5 w-3.5 stroke-[2.5px]" />
                </span>
                <span className="text-sm font-medium text-slate-700">
                  {point}
                </span>
              </Reveal>
            ))}
          </Reveal>
        )}
        <Reveal as="div" className="flex flex-wrap gap-3 pt-2" delay={220}>
          <Link
            href={primaryCta.href}
            className="inline-flex items-center gap-2 rounded-full bg-[var(--primary)] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[var(--primary-dark)]"
          >
            {primaryCta.label}
            <ArrowRight className="h-4 w-4" />
          </Link>
          <Link
            href={secondaryCta.href}
            className="inline-flex items-center gap-2 rounded-full border border-slate-300 px-6 py-3 text-sm font-semibold text-[var(--primary)] transition hover:border-[var(--primary)] hover:text-[var(--primary-dark)]"
          >
            {secondaryCta.label}
          </Link>
        </Reveal>
      </Reveal>
      {hasImage && image && (
        <Reveal
          className="relative mt-12 flex w-full items-center justify-center md:mt-0 md:w-[52%] md:justify-end"
          delay={180}
          direction="right"
        >
          <div className="relative aspect-[4/5] w-full max-w-[520px] overflow-hidden rounded-[28px] border border-slate-200 bg-slate-50 shadow-[0_26px_60px_rgba(18,44,90,0.14)]">
            <div className="absolute inset-0 bg-gradient-to-tr from-white/10 via-transparent to-white/30" />
          <Image
            src={image}
            alt={imageAlt ?? "Stick-Onn craftsmanship at work"}
            fill
            className="object-cover object-center"
            sizes="(max-width: 768px) 100vw, 40vw"
            priority
          />
          </div>
        </Reveal>
      )}
    </Reveal>
  );
}

