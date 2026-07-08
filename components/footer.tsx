import Image from "next/image";
import Link from "next/link";
import {
  Mail,
  MapPin,
  Phone,
  Linkedin,
  Instagram,
  Youtube,
  MessageCircle,
  ArrowUpRight,
} from "lucide-react";
import { companyInfo, landingPages, products } from "@/lib/data";
import { whatsappUrl } from "@/lib/seo";

function FacebookIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-hidden
    >
      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
    </svg>
  );
}

const socialIcons = [
  { name: "Facebook", href: companyInfo.social.facebook, icon: FacebookIcon },
  { name: "Instagram", href: companyInfo.social.instagram, icon: Instagram },
  { name: "LinkedIn", href: companyInfo.social.linkedin, icon: Linkedin },
  { name: "YouTube", href: companyInfo.social.youtube, icon: Youtube },
];

const companyLinks = [
  { href: "/about", label: "About Stick-Onn" },
  { href: "/products", label: "All Products" },
  { href: "/applications", label: "Applications" },
  { href: "/contact", label: "Contact & Dealers" },
];

function guideTitle(slug: string) {
  return slug.replace(/-/g, " ").replace(/\b\w/g, (c) => c.toUpperCase());
}

export function Footer() {
  const waLink = whatsappUrl(
    "Hi Stick-Onn team, I'd like to discuss adhesive requirements for my project.",
  );

  return (
    <footer className="bg-[#061c3d] text-slate-300">
      {/* Brand + CTA band */}
      <div className="container-balanced flex flex-col gap-8 border-b border-white/10 py-12 lg:flex-row lg:items-center lg:justify-between">
        <div className="max-w-xl space-y-4">
          <Link href="/" className="inline-flex">
            <span className="relative flex h-10 w-40 items-center rounded-md bg-white px-2 py-1">
              <Image
                src="/images/brand-logo.png"
                alt="Stick-Onn Adhesives — speciality adhesive brand, India"
                fill
                className="object-contain p-1.5"
                sizes="160px"
              />
            </span>
          </Link>
          <p className="text-sm leading-relaxed text-slate-400">
            Stick-Onn Adhesives — speciality bonding solutions engineered for
            furniture manufacturers, fabricators, and industrial partners
            across India.
          </p>
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[var(--accent)]">
            {companyInfo.tagline}
          </p>
        </div>
        <div className="flex flex-wrap items-center gap-3">
          <a
            href={waLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-md bg-[#25D366] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#1da851]"
          >
            <MessageCircle className="h-4 w-4" />
            WhatsApp our team
          </a>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 rounded-md border border-white/20 px-5 py-3 text-sm font-semibold text-white transition hover:border-white/50 hover:bg-white/5"
          >
            Find a Dealer
            <ArrowUpRight className="h-4 w-4" />
          </Link>
        </div>
      </div>

      {/* Link columns */}
      <div className="container-balanced grid gap-10 py-12 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <h4 className="text-xs font-semibold uppercase tracking-[0.28em] text-slate-500">
            Products
          </h4>
          <ul className="mt-5 space-y-2.5 text-sm">
            {products.map((product) => (
              <li key={product.slug}>
                <Link
                  href={`/products/${product.slug}`}
                  className="transition hover:text-white"
                >
                  {product.name.replace("Stick-Onn ", "")}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="text-xs font-semibold uppercase tracking-[0.28em] text-slate-500">
            Adhesive Guides
          </h4>
          <ul className="mt-5 space-y-2.5 text-sm">
            {landingPages.map((page) => (
              <li key={page.slug}>
                <Link href={`/${page.slug}`} className="transition hover:text-white">
                  {guideTitle(page.slug)}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="text-xs font-semibold uppercase tracking-[0.28em] text-slate-500">
            Company
          </h4>
          <ul className="mt-5 space-y-2.5 text-sm">
            {companyLinks.map((link) => (
              <li key={link.href + link.label}>
                <Link href={link.href} className="transition hover:text-white">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
          <div className="mt-6 flex gap-3">
            {socialIcons.map(({ name, href, icon: Icon }) => (
              <Link
                key={name}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-9 w-9 items-center justify-center rounded-md border border-white/15 text-slate-400 transition hover:border-white/40 hover:text-white"
                aria-label={name}
              >
                <Icon className="h-4 w-4" />
              </Link>
            ))}
          </div>
        </div>
        <div>
          <h4 className="text-xs font-semibold uppercase tracking-[0.28em] text-slate-500">
            Contact
          </h4>
          <ul className="mt-5 space-y-3.5 text-sm leading-relaxed">
            <li>
              <a
                href={`mailto:${companyInfo.email}`}
                className="flex gap-2.5 transition hover:text-white"
              >
                <Mail className="mt-0.5 h-4 w-4 shrink-0 text-[var(--accent)]" />
                <span>{companyInfo.email}</span>
              </a>
            </li>
            <li>
              <a
                href={`tel:${companyInfo.phone.replace(/\s/g, "")}`}
                className="flex gap-2.5 transition hover:text-white"
              >
                <Phone className="mt-0.5 h-4 w-4 shrink-0 text-[var(--accent)]" />
                <span>{companyInfo.phone}</span>
              </a>
            </li>
            <li>
              <a
                href={`tel:${companyInfo.phoneAlt.replace(/\s/g, "")}`}
                className="flex gap-2.5 transition hover:text-white"
              >
                <Phone className="mt-0.5 h-4 w-4 shrink-0 text-[var(--accent)]" />
                <span>{companyInfo.phoneAlt}</span>
              </a>
            </li>
            <li className="flex gap-2.5">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-[var(--accent)]" />
              <span>{companyInfo.address}</span>
            </li>
            <li className="flex gap-2.5">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-[var(--accent)]" />
              <span>{companyInfo.plant}</span>
            </li>
          </ul>
        </div>
      </div>

      {/* Legal bar */}
      <div className="border-t border-white/10">
        <div className="container-balanced flex flex-col items-center justify-between gap-2 py-5 text-xs text-slate-500 sm:flex-row">
          <p>© {new Date().getFullYear()} Stick-Onn Adhesives. All rights reserved.</p>
          <p>A brand of {companyInfo.legal}</p>
        </div>
      </div>
    </footer>
  );
}
