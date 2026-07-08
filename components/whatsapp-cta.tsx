import Link from "next/link";
import { MessageCircle, Mail } from "lucide-react";
import { companyInfo } from "@/lib/data";
import { whatsappUrl } from "@/lib/seo";

type WhatsAppCtaProps = {
  heading?: string;
  description?: string;
  productName?: string;
  variant?: "default" | "compact";
};

export function WhatsAppCta({
  heading = "Talk to our technical team",
  description = "Get substrate-specific recommendations, bulk pricing, and sample requests from our adhesive specialists.",
  productName,
  variant = "default",
}: WhatsAppCtaProps) {
  const message = productName
    ? `Hi Stick-Onn team, I'd like a quote for ${productName}. Please share pricing and technical details.`
    : "Hi Stick-Onn team, I'd like to discuss adhesive requirements for my project. Please connect me with your technical team.";

  const waLink = whatsappUrl(message);
  const contactHref = productName
    ? `/contact?product=${encodeURIComponent(productName)}#contact-form`
    : "/contact#contact-form";

  if (variant === "compact") {
    return (
      <div className="flex flex-wrap gap-3">
        <a
          href={waLink}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-full bg-[#25D366] px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-[#1da851]"
        >
          <MessageCircle className="h-4 w-4" />
          WhatsApp us
        </a>
        <Link
          href={contactHref}
          className="inline-flex items-center gap-2 rounded-full border border-slate-300 px-5 py-2.5 text-sm font-semibold text-[var(--primary)] transition hover:border-[var(--primary)]"
        >
          <Mail className="h-4 w-4" />
          Email enquiry
        </Link>
      </div>
    );
  }

  return (
    <section className="relative overflow-hidden rounded-3xl border border-[var(--primary)]/15 bg-gradient-to-br from-[var(--primary)] via-[#0d4a9e] to-[var(--primary-dark)] px-8 py-10 text-white shadow-xl shadow-[var(--primary)]/20">
      <div className="pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full bg-white/10 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-12 left-8 h-36 w-36 rounded-full bg-accent/20 blur-3xl" />
      <div className="relative z-10 max-w-2xl space-y-4">
        <p className="text-xs font-semibold uppercase tracking-[0.32em] text-white/70">
          Expert support
        </p>
        <h2 className="text-2xl font-semibold sm:text-3xl">{heading}</h2>
        <p className="text-sm leading-relaxed text-white/85 sm:text-base">{description}</p>
        <div className="flex flex-wrap gap-3 pt-2">
          <a
            href={waLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-[#25D366] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#1da851]"
          >
            <MessageCircle className="h-4 w-4" />
            Talk to our team on WhatsApp
          </a>
          <Link
            href={contactHref}
            className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/10 px-6 py-3 text-sm font-semibold text-white backdrop-blur transition hover:bg-white/20"
          >
            <Mail className="h-4 w-4" />
            {companyInfo.email}
          </Link>
        </div>
      </div>
    </section>
  );
}
