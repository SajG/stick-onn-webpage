import Image from "next/image";
import { whatsappUrl } from "@/lib/seo";

const LEAD_MESSAGE =
  "Hi Stick-Onn team, I'd like to enquire about your adhesive products. Please share details and pricing.";

export function WhatsAppSticky() {
  const waLink = whatsappUrl(LEAD_MESSAGE);

  return (
    <a
      href={waLink}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with Stick-Onn on WhatsApp at +91 90210 86995"
      className="group fixed bottom-5 right-4 z-50 flex max-w-[220px] flex-col items-end gap-2 sm:bottom-6 sm:right-6"
    >
      <div className="relative rotate-1 rounded-sm border border-amber-200/80 bg-[#fff9c4] px-4 py-3 shadow-lg shadow-amber-900/15 transition group-hover:-translate-y-0.5 group-hover:shadow-xl">
        <span
          className="absolute -top-2 left-1/2 h-3 w-8 -translate-x-1/2 rounded-sm bg-amber-300/70 shadow-sm"
          aria-hidden
        />
        <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-amber-800/80">
          Quick enquiry
        </p>
        <p className="mt-1 text-sm font-semibold leading-snug text-slate-800">
          Chat with us on WhatsApp
        </p>
        <p className="mt-1 text-xs font-medium text-slate-600">+91 90210 86995</p>
      </div>
      <Image
        src="/images/whatsapp-sticky.png"
        alt="WhatsApp"
        width={72}
        height={72}
        className="h-[72px] w-[72px] transition group-hover:scale-105"
      />
    </a>
  );
}
