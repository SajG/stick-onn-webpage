"use client";

import {
  Droplets,
  Flame,
  Timer,
  ShieldCheck,
  type LucideIcon,
} from "lucide-react";
import { highlightFeatures } from "@/lib/data";
import { Reveal } from "@/components/reveal";

const iconMap: Record<string, LucideIcon> = {
  droplets: Droplets,
  flame: Flame,
  timer: Timer,
  "shield-check": ShieldCheck,
};

export function FeatureIconRow() {
  return (
    <Reveal as="section" className="grid gap-4 md:grid-cols-4">
      {highlightFeatures.map((feature, index) => {
        const Icon = iconMap[feature.icon] ?? ShieldCheck;
        return (
          <Reveal
            as="div"
            key={feature.title}
            className="flex flex-col gap-3 rounded-2xl border border-slate-200 bg-white p-5"
            delay={index * 80}
          >
            <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-slate-100 text-[var(--primary)]">
              <Icon className="h-6 w-6" />
            </span>
            <h3 className="text-base font-semibold text-[var(--primary)]">
              {feature.title}
            </h3>
            <p className="text-sm text-slate-600">{feature.description}</p>
          </Reveal>
        );
      })}
    </Reveal>
  );
}

