import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Users, Target, Hammer, TrendingUp, ArrowRight } from "lucide-react";
import { COMPANY, FOUNDERS, STATS, CORE_VALUES } from "@/lib/constants";
import { AnimateOnScroll } from "@/components/AnimateOnScroll";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "VVH Construction Group was founded by three driven entrepreneurs from Jersey City with over a decade of experience in residential and commercial construction.",
};

export default function AboutPage() {
  return (
    <>
      {/* ── HERO — editorial spread ── */}
      <section className="relative overflow-hidden bg-black px-5 pt-28 pb-0 sm:px-6 sm:pt-36 lg:px-8">
        {/* Giant background text */}
        <div className="pointer-events-none absolute -right-8 top-20 select-none font-display text-[16rem] leading-none tracking-wide text-white/[0.015] md:text-[24rem]">
          ABOUT
        </div>

        <div className="relative z-10 mx-auto max-w-7xl">
          <div className="grid items-end gap-12 lg:grid-cols-12 lg:gap-8">
            {/* Text — 5 cols */}
            <div className="lg:col-span-5">
              <AnimateOnScroll animation="fade-left">
                <p className="text-sm font-semibold uppercase tracking-[0.3em] text-red">
                  Who We Are
                </p>
                <h1 className="mt-4 font-display text-4xl leading-[0.95] tracking-wide text-white sm:text-5xl md:text-6xl lg:text-7xl">
                  Built by
                  <br />
                  Builders.
                  <br />
                  <span className="text-red">Not Businessmen.</span>
                </h1>
                <div className="mt-6 h-px w-24 bg-gradient-to-r from-red to-transparent" />
                <p className="mt-6 text-base leading-relaxed text-gray-400">
                  VVH Construction Group was founded by three guys from Jersey City
                  who grew up on job sites. We didn&apos;t come from corner offices
                  &mdash; we came from the field. That&apos;s what makes us
                  different.
                </p>
                <p className="mt-4 text-base leading-relaxed text-gray-400">
                  From high-rise towers and commercial buildouts to full-home
                  renovations and exterior restoration, VVH handles projects of
                  every scale with the same principle: treat every job like
                  it&apos;s our own.
                </p>
              </AnimateOnScroll>
            </div>

            {/* Image — 7 cols, bleeds to bottom */}
            <div className="lg:col-span-7">
              <AnimateOnScroll animation="fade-right" delay={200}>
                <div className="relative aspect-[16/10] overflow-hidden">
                  <Image
                    src="/images/about-team.jpg"
                    alt="VVH Construction team on site"
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 58vw"
                    priority
                  />
                  {/* Grain */}
                  <div
                    className="absolute inset-0 opacity-20 mix-blend-overlay"
                    style={{
                      backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
                    }}
                  />
                  <div className="absolute bottom-0 left-0 h-1 w-1/3 bg-red" />
                  {/* Corner bracket */}
                  <div className="absolute bottom-4 right-4 h-8 w-8">
                    <div className="absolute bottom-0 right-0 h-full w-0.5 bg-white/20" />
                    <div className="absolute bottom-0 right-0 h-0.5 w-full bg-white/20" />
                  </div>
                </div>
              </AnimateOnScroll>
            </div>
          </div>
        </div>
      </section>

      {/* ── STATS — scrolling ticker ── */}
      <section className="overflow-hidden border-y border-white/5 bg-charcoal py-6">
        <div
          className="flex gap-16 whitespace-nowrap"
          style={{ animation: "marquee-scroll 25s linear infinite" }}
        >
          {[...STATS, ...STATS, ...STATS].map((stat, i) => (
            <div key={i} className="flex items-baseline gap-3">
              <span className="font-display text-4xl tracking-wide text-red md:text-5xl">
                {stat.value}
              </span>
              <span className="text-xs font-semibold uppercase tracking-[0.25em] text-gray-500">
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* ── FOUNDERS — editorial cards ── */}
      <section className="relative overflow-hidden bg-black px-5 py-20 sm:px-6 md:py-32 lg:px-8">
        {/* Background number */}
        <div className="pointer-events-none absolute -left-4 top-16 select-none font-display text-[18rem] leading-none tracking-wide text-white/[0.015] md:text-[24rem]">
          01
        </div>

        <div className="relative z-10 mx-auto max-w-7xl">
          <div className="mb-20 max-w-xl">
            <AnimateOnScroll animation="fade-up">
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-red">
                Our Leadership
              </p>
              <h2 className="mt-4 font-display text-4xl leading-[0.95] tracking-wide text-white sm:text-5xl md:text-6xl">
                The Team
                <br />
                Behind VVH
              </h2>
              <div className="mt-5 h-px w-32 bg-gradient-to-r from-red to-transparent" />
            </AnimateOnScroll>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {FOUNDERS.map((founder, i) => (
              <AnimateOnScroll key={founder.name} delay={i * 150}>
                <div className="group relative overflow-hidden border border-white/5 bg-charcoal transition-all duration-500 hover:border-red/30">
                  {/* Hover fill */}
                  <div className="absolute inset-0 origin-bottom scale-y-0 bg-red/[0.04] transition-transform duration-500 group-hover:scale-y-100" />

                  <div className="relative p-8">
                    {/* Number + avatar */}
                    <div className="flex items-start justify-between">
                      <span className="font-display text-6xl leading-none text-white/[0.06]">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <div className="flex h-14 w-14 items-center justify-center border border-white/10 bg-black">
                        <Users className="h-6 w-6 text-red" />
                      </div>
                    </div>

                    <h3 className="mt-8 font-display text-3xl tracking-wider text-white">
                      {founder.name}
                    </h3>
                    <p className="mt-1 text-xs font-semibold uppercase tracking-[0.2em] text-red">
                      {founder.role}
                    </p>

                    {/* Red line that grows on hover */}
                    <div className="mt-4 h-0.5 w-8 bg-red transition-all duration-500 group-hover:w-16" />

                    <p className="mt-5 text-sm leading-relaxed text-gray-500 transition-colors duration-300 group-hover:text-gray-400">
                      {founder.bio}
                    </p>
                  </div>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* ── OUR STORY — asymmetric split ── */}
      <section className="relative overflow-hidden bg-charcoal px-5 py-20 sm:px-6 md:py-32 lg:px-8">
        {/* Crosshatch texture */}
        <div className="pointer-events-none absolute inset-0 opacity-[0.025]">
          <svg width="100%" height="100%">
            <defs>
              <pattern
                id="story-hatch"
                width="16"
                height="16"
                patternUnits="userSpaceOnUse"
                patternTransform="rotate(45)"
              >
                <line x1="0" y1="0" x2="0" y2="16" stroke="white" strokeWidth="1" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#story-hatch)" />
          </svg>
        </div>

        <div className="relative z-10 mx-auto max-w-7xl">
          <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-8">
            {/* Image — 7 cols */}
            <div className="lg:col-span-7">
              <AnimateOnScroll animation="fade-left">
                <div className="relative">
                  <div className="relative aspect-[16/10] overflow-hidden">
                    <Image
                      src="/images/hero-bg.jpg"
                      alt="VVH Construction jobsite"
                      fill
                      className="object-cover"
                      sizes="(max-width: 1024px) 100vw, 58vw"
                    />
                    <div className="absolute bottom-0 left-0 h-1 w-1/3 bg-red" />
                  </div>
                  {/* Floating quote */}
                  <div className="absolute -bottom-8 right-0 hidden max-w-xs bg-red p-6 lg:block">
                    <p className="font-display text-lg leading-snug tracking-wide text-white">
                      &ldquo;Construction doesn&apos;t have to be this hard for the client.&rdquo;
                    </p>
                    <p className="mt-2 text-xs font-semibold uppercase tracking-[0.2em] text-white/70">
                      — The Founding Moment
                    </p>
                  </div>
                </div>
              </AnimateOnScroll>
            </div>

            {/* Text — 5 cols */}
            <div className="lg:col-span-5">
              <AnimateOnScroll animation="fade-right" delay={150}>
                <p className="text-sm font-semibold uppercase tracking-[0.3em] text-red">
                  Our Story
                </p>
                <h2 className="mt-4 font-display text-4xl leading-[0.95] tracking-wide text-white sm:text-5xl md:text-6xl">
                  From the
                  <br />
                  Ground Up
                </h2>
                <div className="mt-5 h-px w-24 bg-gradient-to-r from-red to-transparent" />

                <p className="mt-8 text-base leading-relaxed text-gray-400">
                  Varun, Vishal, and Humza didn&apos;t meet in a boardroom. They
                  met on job sites across Jersey City and the greater
                  Tri-State area, working their way up through the trades
                  &mdash; framing, concrete, electrical, project management.
                </p>
                <p className="mt-4 text-base leading-relaxed text-gray-400">
                  After years of watching projects get mismanaged by companies
                  that cared more about margins than quality, they decided to do
                  it themselves. VVH was born out of frustration:
                  construction doesn&apos;t have to be this hard for the client.
                </p>
                <p className="mt-4 text-base leading-relaxed text-gray-400">
                  Today, VVH operates across multiple states with a portfolio
                  that spans high-rise residential towers, commercial retail
                  buildouts, full-home renovations, and exterior services. But
                  the principle hasn&apos;t changed: every client gets the same
                  hands-on attention, whether it&apos;s a kitchen remodel or a
                  $10M commercial project.
                </p>
              </AnimateOnScroll>
            </div>
          </div>
        </div>
      </section>

      {/* ── WHAT WE DO — staggered cards ── */}
      <section className="relative overflow-hidden bg-black px-5 py-20 sm:px-6 md:py-32 lg:px-8">
        <div className="pointer-events-none absolute -right-4 top-1/2 -translate-y-1/2 select-none font-display text-[14rem] leading-none tracking-wide text-white/[0.015] md:text-[20rem]">
          02
        </div>

        <div className="relative z-10 mx-auto max-w-7xl">
          <div className="mb-20 flex flex-col items-start justify-between gap-6 lg:flex-row lg:items-end">
            <AnimateOnScroll animation="fade-left">
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-red">
                What We Do
              </p>
              <h2 className="mt-4 font-display text-4xl leading-[0.95] tracking-wide text-white sm:text-5xl md:text-6xl">
                Our Expertise
              </h2>
            </AnimateOnScroll>
            <AnimateOnScroll animation="fade-right" delay={200}>
              <p className="max-w-sm text-sm leading-relaxed text-gray-500 lg:text-right">
                Four core capabilities that drive every project we deliver.
              </p>
            </AnimateOnScroll>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                icon: Target,
                title: "General Contracting",
                desc: "Full-scope project delivery from permits through punch list. One point of contact, zero headaches.",
              },
              {
                icon: Hammer,
                title: "Pre-Construction",
                desc: "Value engineering, cost analysis, and feasibility studies before a single shovel hits the ground.",
              },
              {
                icon: TrendingUp,
                title: "Construction Management",
                desc: "Schedule, budget, and quality oversight for projects where the owner needs a trusted advocate.",
              },
              {
                icon: Users,
                title: "Design-Build",
                desc: "Integrated design and construction under one roof. Faster delivery, fewer change orders.",
              },
            ].map((item, i) => {
              const offsetClass = i % 2 === 1 ? "lg:mt-12" : "";
              return (
                <AnimateOnScroll key={item.title} delay={i * 120}>
                  <div
                    className={`group relative overflow-hidden border border-white/5 bg-charcoal p-8 transition-all duration-500 hover:border-red/30 ${offsetClass}`}
                  >
                    <div className="absolute inset-0 origin-bottom scale-y-0 bg-red/[0.06] transition-transform duration-500 group-hover:scale-y-100" />
                    <div className="relative">
                      <div className="flex items-start justify-between">
                        <span className="font-display text-5xl leading-none text-white/[0.06]">
                          {String(i + 1).padStart(2, "0")}
                        </span>
                        <item.icon className="h-6 w-6 text-red transition-transform duration-300 group-hover:scale-110" />
                      </div>
                      <h3 className="mt-8 font-display text-2xl tracking-wider text-white">
                        {item.title}
                      </h3>
                      <div className="mt-3 h-0.5 w-8 bg-red transition-all duration-500 group-hover:w-16" />
                      <p className="mt-4 text-sm leading-relaxed text-gray-500 transition-colors duration-300 group-hover:text-gray-400">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                </AnimateOnScroll>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── CORE VALUES — full-width list ── */}
      <section className="relative overflow-hidden border-t border-white/5 bg-charcoal px-5 py-20 sm:px-6 md:py-32 lg:px-8">
        <div className="pointer-events-none absolute inset-0 opacity-[0.03]">
          <svg width="100%" height="100%">
            <defs>
              <pattern id="values-grid" width="80" height="80" patternUnits="userSpaceOnUse">
                <rect width="80" height="80" fill="none" stroke="white" strokeWidth="0.5" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#values-grid)" />
          </svg>
        </div>

        <div className="relative z-10 mx-auto max-w-5xl">
          <div className="mb-16 text-center">
            <AnimateOnScroll animation="fade-up">
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-red">
                How We Operate
              </p>
              <h2 className="mt-4 font-display text-4xl leading-[0.95] tracking-wide text-white sm:text-5xl md:text-6xl">
                Core Values
              </h2>
              <div className="mx-auto mt-5 h-px w-24 bg-gradient-to-r from-transparent via-red to-transparent" />
            </AnimateOnScroll>
          </div>

          <div className="space-y-1">
            {CORE_VALUES.map((value, i) => (
              <AnimateOnScroll key={value} delay={i * 60}>
                <div className="group flex items-center gap-6 border-b border-white/5 px-4 py-5 transition-all duration-300 hover:bg-red/[0.04]">
                  <span className="font-display text-3xl tracking-wide text-white/10 transition-colors duration-300 group-hover:text-red/40 md:text-4xl">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div className="h-px w-8 bg-white/10 transition-all duration-300 group-hover:w-12 group-hover:bg-red/40" />
                  <span className="font-display text-xl tracking-wider text-gray-300 transition-colors duration-300 group-hover:text-white md:text-2xl">
                    {value}
                  </span>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="relative overflow-hidden bg-black px-5 py-20 sm:px-6 md:py-32 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <AnimateOnScroll animation="scale">
            <div className="relative overflow-hidden bg-red p-8 sm:p-12 md:p-20">
              {/* Noise */}
              <div
                className="absolute inset-0 opacity-[0.08] mix-blend-overlay"
                style={{
                  backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 512 512' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
                }}
              />
              {/* Diagonal lines */}
              <div className="absolute -right-20 -top-20 h-80 w-px rotate-45 bg-white/10" />
              <div className="absolute -left-20 -bottom-20 h-80 w-px rotate-45 bg-white/10" />

              <div className="relative grid items-center gap-10 lg:grid-cols-12">
                <div className="lg:col-span-8">
                  <p className="text-sm font-semibold uppercase tracking-[0.3em] text-white/60">
                    Start Your Project
                  </p>
                  <h2 className="mt-4 font-display text-4xl leading-[0.95] tracking-wide text-white sm:text-5xl md:text-6xl lg:text-7xl">
                    Let&apos;s Build
                    <br />
                    Together
                  </h2>
                  <p className="mt-6 max-w-md text-base leading-relaxed text-white/70">
                    Whether it&apos;s a ground-up build, a renovation, or a
                    conversation about what&apos;s possible &mdash; we&apos;re ready.
                  </p>
                </div>
                <div className="lg:col-span-4 lg:text-right">
                  <Link
                    href="/contact"
                    className="group inline-flex items-center gap-3 bg-white px-10 py-5 text-sm font-bold uppercase tracking-[0.2em] text-red transition-all duration-300 hover:gap-5 hover:bg-black hover:text-white"
                  >
                    Get in Touch
                    <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </Link>
                  <a
                    href={`tel:${COMPANY.phone.replace(/[^+\d]/g, "")}`}
                    className="mt-4 block text-sm font-semibold text-white/50 transition-colors duration-200 hover:text-white"
                  >
                    or call {COMPANY.phone}
                  </a>
                </div>
              </div>

              {/* Corner brackets */}
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
