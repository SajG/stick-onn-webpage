"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import type { FaqItem } from "@/lib/types";
import { cn } from "@/lib/utils";

type FaqSectionProps = {
  faqs: FaqItem[];
  title?: string;
  limit?: number;
};

export function FaqSection({
  faqs,
  title = "Common questions",
  limit = 3,
}: FaqSectionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const visibleFaqs = faqs.slice(0, limit);

  return (
    <section className="space-y-6">
      <h2 className="text-2xl font-semibold text-[var(--primary)] sm:text-3xl">{title}</h2>
      <div className="divide-y divide-slate-200 rounded-2xl border border-slate-200 bg-white">
        {visibleFaqs.map((faq, index) => {
          const isOpen = openIndex === index;
          return (
            <div key={faq.question}>
              <button
                type="button"
                className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left transition hover:bg-slate-50"
                onClick={() => setOpenIndex(isOpen ? null : index)}
                aria-expanded={isOpen}
              >
                <span className="text-sm font-semibold text-slate-800 sm:text-base">
                  {faq.question}
                </span>
                <ChevronDown
                  className={cn(
                    "h-5 w-5 flex-shrink-0 text-slate-400 transition-transform",
                    isOpen && "rotate-180",
                  )}
                />
              </button>
              {isOpen && (
                <div className="px-6 pb-5 text-sm leading-relaxed text-slate-600">
                  {faq.answer}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}
