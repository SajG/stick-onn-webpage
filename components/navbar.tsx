"use client";

import { Menu, X, ChevronDown } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { products } from "@/lib/data";
import { cn } from "@/lib/utils";
import { SiteLogo } from "./site-logo";

const mainLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/products", label: "Products" },
  { href: "/applications", label: "Applications" },
  { href: "/contact", label: "Contact" },
];

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isProductsOpen, setIsProductsOpen] = useState(false);
  const pathname = usePathname();

  const handleNavigate = () => {
    setIsMenuOpen(false);
    setIsProductsOpen(false);
  };

  return (
    <header className="sticky top-0 z-30 w-full border-b border-[var(--color-line)] bg-white/90 backdrop-blur">
      <div className="container-balanced flex items-center justify-between py-4">
        <SiteLogo compact />
        <nav className="hidden items-center gap-6 text-sm font-medium md:flex">
          {mainLinks.map((link) => {
            const isActive =
              link.href === "/"
                ? pathname === "/"
                : pathname.startsWith(link.href);
            if (link.label === "Products") {
              return (
                <div key={link.href} className="relative">
                  <button
                    type="button"
                    className={cn(
                      "inline-flex items-center gap-1 rounded-full px-3 py-1.5 transition",
                      isActive
                        ? "bg-slate-100 text-[var(--primary)]"
                        : "text-slate-600 hover:bg-slate-100 hover:text-[var(--primary)]",
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
                  </button>
                  {isProductsOpen && (
                    <div
                      id="desktop-products-menu"
                      className="absolute right-0 mt-2 w-64 rounded-xl border border-slate-200 bg-white p-3 text-sm text-slate-900 shadow-lg"
                    >
                      <p className="px-3 pb-2 text-xs font-semibold uppercase tracking-wide text-slate-400">
                        Explore adhesives
                      </p>
                      <ul className="space-y-1">
                        {products.map((product) => (
                          <li key={product.slug}>
                            <Link
                              href={`/products/${product.slug}`}
                              className="block rounded-lg px-3 py-2 transition hover:bg-slate-100"
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
                      <div className="mt-3 border-t border-slate-200 pt-3">
                        <Link
                          href="/products"
                          className="block rounded-lg bg-[var(--primary)] px-3 py-2 text-center text-sm font-semibold text-white transition hover:bg-[var(--primary-dark)]"
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
                  "rounded-full px-3 py-1.5 transition",
                  isActive
                    ? "bg-slate-100 text-[var(--primary)]"
                    : "text-slate-600 hover:bg-slate-100 hover:text-[var(--primary)]",
                )}
              >
                {link.label}
              </Link>
            );
          })}
          <Link
            href="/contact"
            className="rounded-full border border-slate-200 px-4 py-2 font-semibold text-[var(--primary)] transition hover:border-[var(--primary)] hover:text-[var(--primary-dark)]"
          >
            Find a Dealer
          </Link>
        </nav>
        <button
          type="button"
          className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 text-slate-700 transition hover:border-slate-300 hover:bg-slate-100 md:hidden"
          onClick={() => setIsMenuOpen((prev) => !prev)}
          aria-label="Toggle navigation"
        >
          {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>
      {isMenuOpen && (
        <div className="border-t border-slate-200 bg-white px-6 pb-6 pt-2 text-slate-900 md:hidden">
          <div className="py-2">
            <button
              type="button"
              className="flex w-full items-center justify-between rounded-lg px-3 py-2 text-left text-sm font-semibold hover:bg-slate-100"
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
              <ul className="mt-2 space-y-2 rounded-lg border border-slate-200 p-3 text-sm">
                {products.map((product) => (
                  <li key={product.slug}>
                    <Link
                      href={`/products/${product.slug}`}
                      className="block rounded-md px-3 py-2 text-slate-700 transition hover:bg-slate-100"
                      onClick={handleNavigate}
                    >
                      <p className="font-semibold">{product.name}</p>
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
                    "mt-1 block rounded-lg px-3 py-2 text-sm font-medium transition",
                    isActive
                      ? "bg-slate-100 text-[var(--primary)]"
                      : "text-slate-600 hover:bg-slate-100 hover:text-[var(--primary)]",
                  )}
                >
                  {link.label}
                </Link>
              );
            })}
          <Link
            href="/contact"
            onClick={handleNavigate}
            className="mt-4 block rounded-lg border border-slate-200 px-4 py-2 text-center text-sm font-semibold text-[var(--primary)] transition hover:border-[var(--primary)] hover:bg-slate-100"
          >
            Find a Dealer
          </Link>
        </div>
      )}
    </header>
  );
}

