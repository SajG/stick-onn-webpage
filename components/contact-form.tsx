export function ContactForm() {
  return (
    <form className="grid gap-4 rounded-3xl border border-slate-200 bg-white p-8">
      <div className="grid gap-1">
        <label htmlFor="name" className="text-sm font-semibold text-[var(--primary)]">
          Name
        </label>
        <input
          id="name"
          name="name"
          type="text"
          placeholder="Enter your full name"
          className="rounded-xl border border-slate-200 px-4 py-3 text-sm outline-none transition focus:border-[var(--primary)] focus:ring-2 focus:ring-[var(--primary)]/20"
          required
        />
      </div>
      <div className="grid gap-1 sm:grid-cols-2 sm:gap-4">
        <div className="grid gap-1">
          <label
            htmlFor="email"
            className="text-sm font-semibold text-[var(--primary)]"
          >
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            placeholder="you@company.com"
            className="rounded-xl border border-slate-200 px-4 py-3 text-sm outline-none transition focus:border-[var(--primary)] focus:ring-2 focus:ring-[var(--primary)]/20"
            required
          />
        </div>
        <div className="grid gap-1">
          <label
            htmlFor="phone"
            className="text-sm font-semibold text-[var(--primary)]"
          >
            Phone
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            placeholder="+91 9XXXXXXXXX"
            className="rounded-xl border border-slate-200 px-4 py-3 text-sm outline-none transition focus:border-[var(--primary)] focus:ring-2 focus:ring-[var(--primary)]/20"
            required
          />
        </div>
      </div>
      <div className="grid gap-1">
        <label
          htmlFor="message"
          className="text-sm font-semibold text-[var(--primary)]"
        >
          Message
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          placeholder="Tell us about your requirement..."
          className="rounded-xl border border-slate-200 px-4 py-3 text-sm outline-none transition focus:border-[var(--primary)] focus:ring-2 focus:ring-[var(--primary)]/20"
          required
        />
      </div>
      <button
        type="submit"
        className="mt-2 inline-flex items-center justify-center rounded-full bg-[var(--primary)] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[var(--primary-dark)]"
      >
        Submit Inquiry
      </button>
      <p className="text-xs text-slate-500">
        By submitting this form you agree to be contacted by the Stick-Onn team.
      </p>
    </form>
  );
}

