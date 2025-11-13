"use client";

import { Reveal } from "@/components/reveal";
import { cn } from "@/lib/utils";

type PageHeaderProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  className?: string;
  align?: "left" | "center";
};

export function PageHeader({
  eyebrow,
  title,
  description,
  className,
  align = "center",
}: PageHeaderProps) {
  const alignmentClasses =
    align === "left"
      ? "items-start text-left"
      : "items-center text-center";

  return (
    <Reveal
      as="section"
      className={cn(
        "relative overflow-hidden rounded-3xl border border-slate-200 bg-white px-6 py-10",
        className,
      )}
    >
      <Reveal
        as="div"
        className={cn(
          "relative mx-auto flex max-w-4xl flex-col gap-2",
          alignmentClasses,
        )}
        delay={60}
      >
        {eyebrow && (
          <Reveal
            as="p"
            className="text-xs font-semibold uppercase tracking-[0.32em] text-accent"
            delay={20}
          >
            {eyebrow}
          </Reveal>
        )}
        <Reveal
          as="h1"
          className="mt-1 text-3xl font-semibold text-[var(--primary)] sm:text-4xl"
          delay={40}
        >
          {title}
        </Reveal>
        {description && (
          <Reveal
            as="p"
            className="mt-3 max-w-3xl text-sm text-slate-600 sm:text-base"
            delay={70}
          >
            {description}
          </Reveal>
        )}
      </Reveal>
    </Reveal>
  );
}

