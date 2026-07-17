"use client";

import { Menu, X, ChevronDown, Phone, Mail, MessageCircle } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { companyInfo, products } from "@/lib/data";
import { cn } from "@/lib/utils";
import { SiteLogo } from "./site-logo";

const mainLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/products", label: "Products" },
  { href: "/applications", label: "Applications" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact" },
];

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isProductsOpen, setIsProductsOpen] = useState(false);
  const pathname = usePathname();
  const dropdownRef = useRef<HTMLDivElement>(null);

  const handleNavigate = () => {
    setIsMenuOpen(false);
    setIsProductsOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsProductsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <header className="sticky top-0 z-30 w-full">
      {/* Utility strip */}
      <div className="hidden bg-[#061c3d] text-slate-300 md:block">
        <div className="container-balanced flex items-center justify-between py-1.5 text-xs">
          <div className="flex items-center gap-5">
            <a
              href={`tel:${companyInfo.phone.replace(/\s/g, "")}`}
              className="inline-flex items-center gap-1.5 transition hover:text-white"
            >
              <Phone className="h-3 w-3 text-[var(--accent)]" />
              {companyInfo.phone}
            </a>
            <a
              href={`mailto:${companyInfo.email}`}
              className="inline-flex items-center gap-1.5 transition hover:text-white"
            >
              <Mail className="h-3 w-3 text-[var(--accent)]" />
              {companyInfo.email}
            </a>
          </div>
          <p className="font-medium uppercase tracking-[0.22em] text-slate-400">
            Speciality Adhesives · Pan-India Dealer Network
          </p>
        </div>
      </div>

      {/* Main bar */}
      <div className="border-b border-[var(--color-line)] bg-white/95 backdrop-blur">
        <div className="container-balanced flex items-center justify-between py-3.5">
          <SiteLogo compact />
          <nav className="hidden items-center gap-1 text-sm font-medium md:flex">
            {mainLinks.map((link) => {
              const isActive =
                link.href === "/"
                  ? pathname === "/"
                  : pathname.startsWith(link.href);
              if (link.label === "Products") {
                return (
                  <div key={link.href} className="relative" ref={dropdownRef}>
                    <button
                      type="button"
                      className={cn(
                        "relative inline-flex items-center gap-1 px-3 py-2 transition",
                        isActive
                          ? "text-[var(--primary)]"
                          : "text-slate-600 hover:text-[var(--primary)]",
                      )}
                      onClick={() => setIsProductsOpen((prev) => !prev)}
                      aria-expanded={isProductsOpen}
                      aria-controls="desktop-products-menu"
                    >
                      Products
                      <ChevronDown
                        className={cn(
                          "h-4 w-4 transition-transform",
                          isProductsOpen ? "rotate-180" : "",
                        )}
                      />
                      {isActive && (
                        <span className="absolute inset-x-3 -bottom-[15px] h-0.5 bg-[var(--accent)]" />
                      )}
                    </button>
                    {isProductsOpen && (
                      <div
                        id="desktop-products-menu"
                        className="absolute right-0 mt-3 w-80 rounded-lg border border-slate-200 bg-white p-3 text-sm text-slate-900 shadow-xl shadow-slate-900/10"
                      >
                        <p className="px-3 pb-2 text-[11px] font-semibold uppercase tracking-[0.2em] text-slate-400">
                          Adhesive Range
                        </p>
                        <ul className="max-h-[60vh] space-y-0.5 overflow-y-auto">
                          {products.map((product) => (
                            <li key={product.slug}>
                              <Link
                                href={`/products/${product.slug}`}
                                className="block rounded-md px-3 py-2 transition hover:bg-slate-50"
                                onClick={handleNavigate}
                              >
                                <p className="font-semibold text-slate-900">
                                  {product.name.replace("Stick-Onn ", "")}
                                </p>
                                <p className="text-xs text-slate-500">
                                  {product.shortDescription}
                                </p>
                              </Link>
                            </li>
                          ))}
                        </ul>
                        <div className="mt-2 border-t border-slate-100 pt-2">
                          <Link
                            href="/products"
                            className="block rounded-md bg-[var(--primary)] px-3 py-2 text-center text-sm font-semibold text-white transition hover:bg-[var(--primary-dark)]"
                            onClick={handleNavigate}
                          >
                            View all products
                          </Link>
                        </div>
                      </div>
                    )}
                  </div>
                );
              }
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={handleNavigate}
                  className={cn(
                    "relative px-3 py-2 transition",
                    isActive
                      ? "text-[var(--primary)]"
                      : "text-slate-600 hover:text-[var(--primary)]",
                  )}
                >
                  {link.label}
                  {isActive && (
                    <span className="absolute inset-x-3 -bottom-[15px] h-0.5 bg-[var(--accent)]" />
                  )}
                </Link>
              );
            })}
            <Link
              href="/contact"
              className="ml-4 inline-flex items-center rounded-md bg-[var(--primary)] px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-[var(--primary-dark)]"
            >
              Find a Dealer
            </Link>
          </nav>
          <button
            type="button"
            className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-slate-200 text-slate-700 transition hover:border-slate-300 hover:bg-slate-50 md:hidden"
            onClick={() => setIsMenuOpen((prev) => !prev)}
            aria-label="Toggle navigation"
          >
            {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="border-b border-slate-200 bg-white px-6 pb-6 pt-2 text-slate-900 md:hidden">
          <div className="py-2">
            <button
              type="button"
              className="flex w-full items-center justify-between rounded-md px-3 py-2.5 text-left text-sm font-semibold hover:bg-slate-50"
              onClick={() => setIsProductsOpen((prev) => !prev)}
            >
              <span>Products</span>
              <ChevronDown
                className={cn(
                  "h-4 w-4 transition-transform",
                  isProductsOpen ? "rotate-180" : "",
                )}
              />
            </button>
            {isProductsOpen && (
              <ul className="mt-2 space-y-1 rounded-lg border border-slate-200 p-2 text-sm">
                {products.map((product) => (
                  <li key={product.slug}>
                    <Link
                      href={`/products/${product.slug}`}
                      className="block rounded-md px-3 py-2 text-slate-700 transition hover:bg-slate-50"
                      onClick={handleNavigate}
                    >
                      <p className="font-semibold">
                        {product.name.replace("Stick-Onn ", "")}
                      </p>
                      <p className="text-xs text-slate-500">
                        {product.shortDescription}
                      </p>
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </div>
          {mainLinks
            .filter((link) => link.label !== "Products")
            .map((link) => {
              const isActive =
                link.href === "/"
                  ? pathname === "/"
                  : pathname.startsWith(link.href);
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={handleNavigate}
                  className={cn(
                    "mt-1 block rounded-md px-3 py-2.5 text-sm font-medium transition",
                    isActive
                      ? "border-l-2 border-[var(--accent)] bg-slate-50 text-[var(--primary)]"
                      : "text-slate-600 hover:bg-slate-50 hover:text-[var(--primary)]",
                  )}
                >
                  {link.label}
                </Link>
              );
            })}
          <div className="mt-4 space-y-2">
            <Link
              href="/contact"
              onClick={handleNavigate}
              className="block rounded-md bg-[var(--primary)] px-4 py-2.5 text-center text-sm font-semibold text-white transition hover:bg-[var(--primary-dark)]"
            >
              Find a Dealer
            </Link>
            <div className="flex gap-2">
              <a
                href={`tel:${companyInfo.phone.replace(/\s/g, "")}`}
                className="inline-flex flex-1 items-center justify-center gap-2 rounded-md border border-slate-200 px-3 py-2.5 text-sm font-medium text-slate-700 transition hover:border-slate-300"
              >
                <Phone className="h-4 w-4 text-[var(--accent)]" />
                Call
              </a>
              <a
                href={`https://wa.me/${companyInfo.phone.replace(/[^0-9]/g, "")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex flex-1 items-center justify-center gap-2 rounded-md border border-slate-200 px-3 py-2.5 text-sm font-medium text-slate-700 transition hover:border-slate-300"
              >
                <MessageCircle className="h-4 w-4 text-[#25D366]" />
                WhatsApp
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
