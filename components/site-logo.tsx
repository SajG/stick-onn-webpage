"use client";

import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/utils";

type SiteLogoProps = {
  className?: string;
  compact?: boolean;
};

export function SiteLogo({ className, compact }: SiteLogoProps) {
  return (
    <Link
      href="/"
      className={cn(
        "inline-flex items-center gap-3 text-primary transition hover:opacity-80",
        className,
      )}
    >
      <span className="relative flex h-9 w-36 items-center">
        <Image
          src="/images/brand-logo.png"
          alt="Stick-Onn logo"
          fill
          className="object-contain"
          sizes="144px"
          priority
        />
      </span>
      {!compact && (
        <span className="hidden text-xs font-semibold uppercase tracking-[0.3em] text-slate-500 sm:inline">
          Adhesives
        </span>
      )}
    </Link>
  );
}

