import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { COMPANY, SERVICES } from "@/lib/constants";
import { ServiceDetail } from "@/components/ServiceDetail";
import { AnimateOnScroll } from "@/components/AnimateOnScroll";

export const metadata: Metadata = {
  title: "Our Services",
  description:
    "VVH Construction Group offers residential construction, commercial builds, renovations, exterior services, roofing, and project management.",
};

export default function ServicesPage() {
  return (
    <>
      {/* ── HERO ── */}
      <section className="relative overflow-hidden bg-black px-5 pt-28 pb-16 sm:px-6 sm:pt-36 sm:pb-24 lg:px-8">
        {/* Giant background text */}
        <div className="pointer-events-none absolute -right-4 top-16 select-none font-display text-[12rem] leading-none tracking-wide text-white/[0.015] md:text-[20rem]">
          SERVICES
        </div>

        <div className="relative z-10 mx-auto max-w-7xl">
          <div className="flex flex-col items-start justify-between gap-8 lg:flex-row lg:items-end">
            <div>
              <AnimateOnScroll animation="fade-left">
                <p className="text-sm font-semibold uppercase tracking-[0.3em] text-red">
                  What We Do
                </p>
                <h1 className="mt-4 font-display text-4xl leading-[0.95] tracking-wide text-white sm:text-5xl md:text-6xl lg:text-7xl">
                  Our
                  <br />
                  Services
                </h1>
                <div className="mt-5 h-px w-24 bg-gradient-to-r from-red to-transparent" />
              </AnimateOnScroll>
            </div>
            <AnimateOnScroll animation="fade-right" delay={200}>
              <p className="max-w-md text-base leading-relaxed text-gray-500 lg:text-right">
                From residential renovations to large-scale commercial builds,
                VVH Construction Group delivers expert craftsmanship across
                every phase of your project.
              </p>
            </AnimateOnScroll>
          </div>

          {/* Quick-nav service chips */}
          <AnimateOnScroll animation="fade-up" delay={300}>
            <div className="-mx-5 mt-12 flex gap-2 overflow-x-auto px-5 pb-2 sm:mx-0 sm:mt-16 sm:flex-wrap sm:overflow-x-visible sm:px-0 sm:pb-0">
              {SERVICES.map((service, i) => (
                <a
                  key={service.id}
                  href={`#${service.id}`}
                  className="group flex shrink-0 items-center gap-2 border border-white/10 px-4 py-2.5 text-xs font-semibold uppercase tracking-[0.15em] text-gray-400 transition-all duration-300 hover:border-red/50 hover:bg-red/10 hover:text-white"
                >
                  <span className="text-red/50">{String(i + 1).padStart(2, "0")}</span>
                  {service.title}
                </a>
              ))}
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      {/* ── SERVICE DETAILS ── */}
      <div className="relative bg-black">
        {/* Crosshatch background */}
        <div className="pointer-events-none absolute inset-0 opacity-[0.02]">
          <svg width="100%" height="100%">
            <defs>
              <pattern
                id="svc-hatch"
                width="16"
                height="16"
                patternUnits="userSpaceOnUse"
                patternTransform="rotate(45)"
              >
                <line x1="0" y1="0" x2="0" y2="16" stroke="white" strokeWidth="1" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#svc-hatch)" />
          </svg>
        </div>

        {SERVICES.map((service, i) => (
          <ServiceDetail
            key={service.id}
            id={service.id}
            title={service.title}
            description={service.description}
            icon={service.icon}
            reversed={i % 2 === 1}
            index={i}
          />
        ))}
      </div>

      {/* ── CTA ── */}
      <section className="relative overflow-hidden bg-black px-5 py-20 sm:px-6 md:py-32 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <AnimateOnScroll animation="scale">
            <div className="relative overflow-hidden bg-red p-8 sm:p-12 md:p-20">
              <div
                className="absolute inset-0 opacity-[0.08] mix-blend-overlay"
                style={{
                  backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 512 512' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
                }}
              />
              <div className="absolute -right-20 -top-20 h-80 w-px rotate-45 bg-white/10" />
              <div className="absolute -left-20 -bottom-20 h-80 w-px rotate-45 bg-white/10" />

              <div className="relative grid items-center gap-10 lg:grid-cols-12">
                <div className="lg:col-span-8">
                  <p className="text-sm font-semibold uppercase tracking-[0.3em] text-white/60">
                    Need Something Specific?
                  </p>
                  <h2 className="mt-4 font-display text-4xl leading-[0.95] tracking-wide text-white sm:text-5xl md:text-6xl">
                    Let&apos;s Discuss
                    <br />
                    Your Project
                  </h2>
                  <p className="mt-6 max-w-md text-base leading-relaxed text-white/70">
                    Every project is different. Tell us what you need and
                    we&apos;ll put together a plan that fits your scope,
                    timeline, and budget.
                  </p>
                </div>
                <div className="lg:col-span-4 lg:text-right">
                  <Link
                    href="/contact"
                    className="group inline-flex items-center gap-3 bg-white px-10 py-5 text-sm font-bold uppercase tracking-[0.2em] text-red transition-all duration-300 hover:gap-5 hover:bg-black hover:text-white"
                  >
                    Free Estimate
                    <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </Link>
                  <p className="mt-4 text-xs uppercase tracking-[0.15em] text-white/40">
                    or call {COMPANY.phone}
                  </p>
                </div>
              </div>

              <div className="absolute left-6 top-6 h-8 w-8">
                <div className="absolute left-0 top-0 h-full w-0.5 bg-white/20" />
                <div className="absolute left-0 top-0 h-0.5 w-full bg-white/20" />
              </div>
              <div className="absolute bottom-6 right-6 h-8 w-8">
                <div className="absolute bottom-0 right-0 h-full w-0.5 bg-white/20" />
                <div className="absolute bottom-0 right-0 h-0.5 w-full bg-white/20" />
              </div>
            </div>
          </AnimateOnScroll>
        </div>
      </section>
    </>
  );
}
