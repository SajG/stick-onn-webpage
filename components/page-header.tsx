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
    <section
      className={cn(
        "relative overflow-hidden rounded-3xl border border-slate-200 bg-white px-6 py-10",
        className,
      )}
    >
      <div
        className={cn(
          "relative mx-auto flex max-w-4xl flex-col gap-2",
          alignmentClasses,
        )}
      >
        {eyebrow && (
          <p className="text-xs font-semibold uppercase tracking-[0.32em] text-accent">
            {eyebrow}
          </p>
        )}
        <h1 className="mt-1 text-3xl font-semibold text-[var(--primary)] sm:text-4xl">
          {title}
        </h1>
        {description && (
          <p className="mt-3 max-w-3xl text-sm text-slate-600 sm:text-base">
            {description}
          </p>
        )}
      </div>
    </section>
  );
}

