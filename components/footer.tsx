import Image from "next/image";
import Link from "next/link";
import { Mail, MapPin, Phone, Linkedin, Instagram, Youtube } from "lucide-react";
import { companyInfo, products } from "@/lib/data";

const socialIcons = [
  { name: "LinkedIn", href: companyInfo.social.linkedin, icon: Linkedin },
  { name: "Instagram", href: companyInfo.social.instagram, icon: Instagram },
  { name: "YouTube", href: companyInfo.social.youtube, icon: Youtube },
];

export function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white text-slate-600">
      <div className="container-balanced grid gap-10 py-12 md:grid-cols-4">
        <div className="space-y-3">
          <Link href="/" className="inline-flex items-center gap-3">
            <span className="relative flex h-9 w-36 items-center">
              <Image
                src="/images/brand-logo.png"
                alt="Stick-Onn logo"
                fill
                className="object-contain"
                sizes="144px"
              />
            </span>
          </Link>
          <p className="max-w-xs text-sm leading-relaxed">
            {companyInfo.legal} delivers advanced adhesive solutions engineered
            for premium furniture makers, contractors, and industrial partners.
          </p>
          <Link
            href="/about"
            className="inline-flex items-center gap-2 text-sm font-semibold text-[var(--primary)] transition hover:text-[var(--primary-dark)]"
          >
            Learn about our journey
          </Link>
        </div>
        <div>
          <h4 className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-400">
            Products
          </h4>
          <ul className="mt-4 space-y-2 text-sm">
            {products.map((product) => (
              <li key={product.slug}>
                <Link
                  href={`/products/${product.slug}`}
                  className="transition hover:text-[var(--primary)]"
                >
                  {product.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-400">
            Contact
          </h4>
          <ul className="mt-4 space-y-3 text-sm leading-relaxed">
            <li className="flex gap-2 text-slate-700">
              <Mail className="mt-0.5 h-4 w-4 text-accent" />
              <span>{companyInfo.email}</span>
            </li>
            <li className="flex gap-2 text-slate-700">
              <Phone className="mt-0.5 h-4 w-4 text-accent" />
              <span>{companyInfo.phone}</span>
            </li>
            <li className="flex gap-2 text-slate-700">
              <Phone className="mt-0.5 h-4 w-4 text-accent" />
              <span>{companyInfo.phoneAlt}</span>
            </li>
            <li className="flex gap-2 text-slate-700">
              <MapPin className="mt-0.5 h-4 w-4 text-accent" />
              <span>{companyInfo.address}</span>
            </li>
            <li className="flex gap-2 text-slate-700">
              <MapPin className="mt-0.5 h-4 w-4 text-accent" />
              <span>{companyInfo.plant}</span>
            </li>
          </ul>
        </div>
        <div>
          <h4 className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-400">
            Connect
          </h4>
          <div className="mt-4 flex gap-3">
            {socialIcons.map(({ name, href, icon: Icon }) => (
              <Link
                key={name}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 text-slate-600 transition hover:border-[var(--primary)] hover:text-[var(--primary)]"
                aria-label={name}
              >
                <Icon className="h-5 w-5" />
              </Link>
            ))}
          </div>
        </div>
      </div>
      <div className="border-t border-slate-200 py-4 text-center text-xs text-slate-400">
        © {new Date().getFullYear()} {companyInfo.legal}. All rights reserved.
      </div>
    </footer>
  );
}

