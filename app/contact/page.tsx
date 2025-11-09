import type { Metadata } from "next";
import { Mail, Phone, MapPin, Clock } from "lucide-react";
import { PageHeader } from "@/components/page-header";
import { ContactForm } from "@/components/contact-form";
import { companyInfo } from "@/lib/data";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Reach out to Stick-Onn for product support, dealer inquiries, and technical assistance.",
};

const contactDetails = [
  {
    icon: Mail,
    label: "Email",
    value: companyInfo.email,
    href: `mailto:${companyInfo.email}`,
  },
  {
    icon: Phone,
    label: "Phone",
    value: companyInfo.phone,
    href: `tel:${companyInfo.phone.replace(/\s+/g, "")}`,
  },
  {
    icon: Phone,
    label: "Alternate",
    value: companyInfo.phoneAlt,
    href: `tel:${companyInfo.phoneAlt.replace(/\s+/g, "")}`,
  },
  {
    icon: Clock,
    label: "Support Hours",
    value: "Monday – Saturday, 9:30 AM to 6:30 PM",
  },
  {
    icon: MapPin,
    label: "Manufacturing Plant",
    value: companyInfo.plant,
  },
];

export default function ContactPage() {
  return (
    <div className="container-balanced flex flex-col gap-12">
      <PageHeader
        eyebrow="Let’s collaborate"
        title="Talk to the Stick-Onn team"
        description="Request samples, technical guidance, or distributor partnerships. Our adhesive specialists will respond within one business day."
      />

      <div className="grid gap-12 md:grid-cols-[1fr,1.1fr]">
        <div className="space-y-6">
          <div className="rounded-3xl border border-slate-200 bg-white p-8">
            <h2 className="text-xl font-semibold text-[var(--primary)]">
              Dealer & distributor desk
            </h2>
            <p className="mt-2 text-sm text-slate-600">
              Looking to stock Stick-Onn or need on-site technical training?
              Reach out and our regional team will coordinate the next steps.
            </p>
            <ul className="mt-6 space-y-4 text-sm text-primary-dark">
              {contactDetails.map(({ icon: Icon, label, value, href }) => (
                <li key={label} className="flex items-start gap-3">
                  <span className="rounded-full bg-slate-100 p-2 text-[var(--primary)]">
                    <Icon className="h-4 w-4" />
                  </span>
                  <div>
                    <p className="text-xs uppercase tracking-[0.3em] text-slate-400">
                      {label}
                    </p>
                    {href ? (
                      <a
                        href={href}
                        className="font-semibold text-[var(--primary)] transition hover:text-[var(--primary-dark)]"
                      >
                        {value}
                      </a>
                    ) : (
                      <p className="font-semibold text-slate-700">{value}</p>
                    )}
                  </div>
                </li>
              ))}
              <li className="flex items-start gap-3">
                <span className="rounded-full bg-slate-100 p-2 text-[var(--primary)]">
                  <MapPin className="h-4 w-4" />
                </span>
                <div>
                  <p className="text-xs uppercase tracking-[0.3em] text-slate-400">
                    Pune Headquarters
                  </p>
                  <p className="font-semibold text-slate-700">
                    {companyInfo.address}
                  </p>
                </div>
              </li>
            </ul>
          </div>

          <div className="overflow-hidden rounded-3xl border border-slate-200 bg-slate-50 p-6 text-slate-700">
            <h3 className="text-lg font-semibold text-[var(--primary)]">
              Visit our demo center
            </h3>
            <p className="mt-2 text-sm text-slate-600">
              Experience Stick-Onn products in action at our Pune application lab.
              Schedule a session to test adhesives on your substrates.
            </p>
            <a
              href="https://maps.app.goo.gl/bJQ8kYtDemo"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-[var(--primary)] underline underline-offset-4 transition hover:text-[var(--primary-dark)]"
            >
              Get directions
            </a>
          </div>
        </div>

        <ContactForm />
      </div>
    </div>
  );
}

