import Link from "next/link";
import { PageHeader } from "@/components/page-header";
import { createPageMetadata } from "@/lib/seo";
import { Reveal } from "@/components/reveal";

export const metadata = createPageMetadata({
  title: "About Stick-Onn Adhesives",
  description:
    "Discover Stick-Onn’s story, mission, and commitment to premium adhesive solutions that empower craftsmen, OEMs, and industrial partners across India.",
  path: "/about",
  keywords: [
    "Stick-Onn",
    "Synergy Bonding Solutions",
    "adhesive manufacturer",
    "wood adhesive company",
    "about Stick-Onn",
    "industrial adhesives India",
  ],
});

const visionStatements = [
  {
    title: "Vision",
    description:
      "To be India’s premium smart bonding technology partner for visionary architects, master carpenters, and large-scale manufacturers—delivering engineered adhesives that inspire confidence in every professional build.",
  },
  {
    title: "Mission",
    description:
      "To empower design studios, fit-out specialists, and industrial production teams with precision-engineered adhesive systems, application intelligence, and responsive technical collaboration that ensure a flawless, professional finish every time.",
  },
];

const heritage = [
  {
    title: "Precision chemistry",
    description:
      "Every Stick-Onn formulation is designed in collaboration with polymer experts and validated through rigorous climatic, shear, and endurance testing.",
  },
  {
    title: "Craft-first approach",
    description:
      "From modular furniture to bespoke interiors, we work alongside craftsmen to ensure each adhesive fits their workflow, curing window, and finish expectations.",
  },
  {
    title: "Sustainable manufacturing",
    description:
      "With our Chakan facility and trusted partner plants, we invest in cleaner processes, reduced VOC emissions, and efficient resource utilisation.",
  },
];

const milestones = [
  {
    year: "2005",
    summary: "Stick-Onn brand launched",
    detail:
      "We introduced waterproof wood adhesives for Maharashtra’s woodworking community, setting a new benchmark for consistency.",
  },
  {
    year: "2012",
    summary: "Nationwide distributor network",
    detail:
      "Expanded presence across India with technical training programmes for dealers and applicators.",
  },
  {
    year: "2018",
    summary: "Advanced specialty portfolio",
    detail:
      "Launched spray, heat resistant, and WPC-focused adhesives to serve emerging interior and industrial needs.",
  },
  {
    year: "2024",
    summary: "Process innovation lab",
    detail:
      "Established a dedicated lab for rapid prototyping, customised bonding solutions, and on-site deployment support.",
  },
];

export default function AboutPage() {
  return (
    <div className="container-balanced space-y-14 pb-24">
      <PageHeader
        eyebrow="About Stick-Onn"
        title="Built on chemistry, driven by craftsmanship"
        description="Stick-Onn was born inside workshops, not boardrooms. We combine scientific rigour with on-ground insights to craft adhesives that keep pace with India’s most demanding carpenters, fabricators, and OEMs."
      />

      <Reveal as="section" className="grid gap-6 md:grid-cols-2">
        {visionStatements.map((item, index) => (
          <Reveal
            as="div"
            key={item.title}
            className="rounded-3xl border border-slate-200 bg-white p-8 shadow-[0_20px_60px_rgba(0,60,143,0.08)]"
            delay={index * 120}
          >
            <p className="text-xs font-semibold uppercase tracking-[0.32em] text-accent">
              {item.title}
            </p>
            <p className="mt-4 text-base leading-relaxed text-slate-600">
              {item.description}
            </p>
          </Reveal>
        ))}
      </Reveal>

      <Reveal as="section" className="grid gap-6 md:grid-cols-3">
        {heritage.map((pillar, index) => (
          <Reveal
            as="div"
            key={pillar.title}
            className="rounded-3xl border border-slate-200 bg-gradient-to-br from-white via-[#f6f9ff] to-white p-8"
            delay={index * 80}
          >
            <h3 className="text-lg font-semibold text-[var(--primary)]">
              {pillar.title}
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-slate-600">
              {pillar.description}
            </p>
          </Reveal>
        ))}
      </Reveal>

      <Reveal
        as="section"
        className="space-y-6 rounded-3xl border border-slate-200 bg-white p-8"
      >
        <Reveal
          as="div"
          className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between"
          delay={40}
        >
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.32em] text-accent">
              Journey so far
            </p>
            <h2 className="text-2xl font-semibold text-[var(--primary)] sm:text-3xl">
              Milestones that shaped Stick-Onn
            </h2>
          </div>
        </Reveal>
        <div className="grid gap-4 md:grid-cols-2">
          {milestones.map((event, index) => (
            <Reveal
              as="div"
              key={event.year}
              className="rounded-2xl border border-slate-200 bg-slate-50/70 p-6"
              delay={index * 70}
            >
              <p className="text-xs font-semibold uppercase tracking-[0.32em] text-slate-400">
                {event.year}
              </p>
              <h3 className="mt-2 text-lg font-semibold text-[var(--primary)]">
                {event.summary}
              </h3>
              <p className="mt-2 text-sm text-slate-600">{event.detail}</p>
            </Reveal>
          ))}
        </div>
      </Reveal>

      <Reveal
        as="section"
        className="rounded-3xl border border-slate-200 bg-white p-8 text-center sm:p-12"
      >
        <Reveal
          as="h2"
          className="text-3xl font-semibold text-[var(--primary)] sm:text-4xl"
          delay={40}
        >
          Ready to collaborate?
        </Reveal>
        <Reveal
          as="p"
          className="mx-auto mt-4 max-w-2xl text-sm text-slate-600 sm:text-base"
          delay={70}
        >
          Invite our technical team to your workshop, explore customised bonding
          solutions, or join our distributor network. Together, we’ll ensure every
          project delivers the Stick-Onn promise of smart strength and perfect
          bonds.
        </Reveal>
        <Reveal as="div" className="mt-6 flex flex-wrap justify-center gap-3" delay={100}>
          <Link
            href="/contact"
            className="rounded-full bg-[var(--primary)] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[var(--primary-dark)]"
          >
            Connect with Stick-Onn
          </Link>
          <Link
            href="/products"
            className="rounded-full border border-slate-300 px-6 py-3 text-sm font-semibold text-[var(--primary)] transition hover:border-[var(--primary)]"
          >
            Explore product portfolio
          </Link>
        </Reveal>
      </Reveal>
    </div>
  );
}

