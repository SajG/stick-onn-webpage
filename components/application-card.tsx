import Image from "next/image";
import Link from "next/link";

type ApplicationCardProps = {
  title: string;
  description: string;
  image: string;
  href: string;
  products: { name: string; slug: string }[];
  points?: string[];
};

export function ApplicationCard({
  title,
  description,
  image,
  href,
  products,
  points,
}: ApplicationCardProps) {
  return (
    <div className="group flex flex-col overflow-hidden rounded-3xl border border-slate-200/80 bg-white/80 backdrop-blur transition hover:-translate-y-1.5 hover:border-[var(--primary)]/50 hover:shadow-[0_25px_60px_rgba(0,60,143,0.08)]">
      <div className="relative h-56 w-full overflow-hidden bg-gradient-to-br from-[#f4f7ff] via-white to-[#fdf7f2]">
        <Image
          src={image}
          alt={title}
          fill
          className="object-contain p-6 transition duration-500 group-hover:scale-[1.03]"
          sizes="(max-width: 768px) 100vw, 33vw"
        />
      </div>
      <div className="flex flex-1 flex-col gap-4 p-6 sm:p-7">
        <div className="space-y-3">
          <h3 className="text-lg font-semibold text-[var(--primary)]">{title}</h3>
          {points && points.length > 0 ? (
            <ul className="space-y-2 text-sm text-slate-600">
              {points.map((point) => (
                <li key={point} className="flex items-start gap-2">
                  <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-accent" />
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          ) : (
            <p className="text-sm text-slate-600">{description}</p>
          )}
        </div>
        <div className="mt-auto space-y-3 pt-2">
          <div className="text-[11px] font-semibold uppercase tracking-[0.35em] text-slate-400">
            Recommended
          </div>
          <div className="flex flex-wrap gap-2">
            {products.map((product) => (
              <Link
                key={product.slug}
                href={`/products/${product.slug}`}
                className="rounded-full border border-slate-300 bg-white px-3 py-1 text-xs font-semibold text-[var(--primary)] transition hover:border-[var(--primary)] hover:text-[var(--primary-dark)]"
              >
                {product.name}
              </Link>
            ))}
          </div>
        </div>
        <Link
          href={href}
          className="mt-4 inline-flex w-fit items-center gap-2 text-sm font-semibold text-[var(--primary)] transition hover:text-[var(--primary-dark)]"
        >
          Explore {title}
        </Link>
      </div>
    </div>
  );
}

