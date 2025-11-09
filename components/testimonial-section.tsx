import { Quote } from "lucide-react";
import { testimonials } from "@/lib/data";

export function TestimonialSection() {
  return (
    <section className="py-16">
      <div className="container-balanced">
        <div className="mb-10 flex flex-col gap-2 text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.32em] text-accent">
            Trusted by Professionals
          </p>
          <h2 className="text-3xl font-semibold text-[var(--primary)] sm:text-4xl">
            Voices from the Workshop Floor
          </h2>
          <p className="mx-auto max-w-2xl text-sm text-slate-600 sm:text-base">
            From modular furniture manufacturers to upholstery specialists,
            Stick-Onn adhesives power production lines across India.
          </p>
        </div>
        <div className="grid gap-4 md:grid-cols-3">
          {testimonials.map((testimonial) => (
            <article
              key={testimonial.name}
              className="flex h-full flex-col gap-4 rounded-2xl border border-slate-200 bg-white p-6"
            >
              <Quote className="h-6 w-6 text-accent" />
              <p className="flex-1 text-sm leading-relaxed text-slate-700">
                “{testimonial.quote}”
              </p>
              <div>
                <p className="text-sm font-semibold text-[var(--primary)]">
                  {testimonial.name}
                </p>
                <p className="text-xs uppercase tracking-[0.3em] text-slate-400">
                  {testimonial.role}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

