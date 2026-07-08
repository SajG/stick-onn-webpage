type LongFormContentProps = {
  paragraphs: string[];
  className?: string;
};

export function LongFormContent({ paragraphs, className }: LongFormContentProps) {
  return (
    <div className={className}>
      <div className="prose prose-slate max-w-none space-y-5">
        {paragraphs.map((paragraph, index) => (
          <p key={index} className="text-sm leading-relaxed text-slate-600 sm:text-base">
            {paragraph}
          </p>
        ))}
      </div>
    </div>
  );
}

type ContentSectionProps = {
  title: string;
  paragraphs: string[];
};

export function ContentSection({ title, paragraphs }: ContentSectionProps) {
  return (
    <section className="space-y-4">
      <h2 className="text-xl font-semibold text-[var(--primary)] sm:text-2xl">{title}</h2>
      <LongFormContent paragraphs={paragraphs} />
    </section>
  );
}
