import type { Metadata } from "next";
import Image from "next/image";
import { Users, Target, Hammer, TrendingUp, HardHat, ClipboardList, Monitor } from "lucide-react";
import { FOUNDERS, TEAM, PROOF_ITEMS, CORE_VALUES } from "@/lib/constants";
import { AnimateOnScroll } from "@/components/AnimateOnScroll";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "VVH Construction Group is a full-service construction company specializing in residential renovations, commercial buildouts, property restoration, and ground-up construction.",
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
                  Built in the Field.
                  <br />
                  <span className="text-red">Delivered with Precision.</span>
                </h1>
                <div className="mt-6 h-px w-24 bg-gradient-to-r from-red to-transparent" />
                <p className="mt-6 text-base leading-relaxed text-gray-400">
                  VVH Construction Group was founded by professionals with real
                  job-site experience and deep roots in the trades. We
                  didn&apos;t come from boardrooms, we came from the field,
                  where execution, accountability, and attention to detail
                  matter every day.
                </p>
                <div className="mt-6 h-px w-full bg-white/5" />
                <p className="mt-6 text-base leading-relaxed text-gray-400">
                  From commercial buildouts and exterior restoration to
                  residential renovations and larger-scale construction, we
                  approach every project with the same standard: clear
                  communication, disciplined execution, and pride in the work.
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

      {/* ── PROOF BAR ── */}
      <section className="border-y border-white/5 bg-charcoal py-6">
        <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3 px-5 sm:gap-x-12">
          {PROOF_ITEMS.map((item) => (
            <span
              key={item}
              className="text-xs font-semibold uppercase tracking-[0.25em] text-gray-400 sm:text-sm"
            >
              {item}
            </span>
          ))}
        </div>
      </section>

      {/* ── FOUNDERS ── */}
      <section className="relative overflow-hidden bg-black px-5 py-16 sm:px-6 md:py-24 lg:px-8">
        <div className="relative z-10 mx-auto max-w-7xl">
          <div className="mb-12 max-w-xl sm:mb-16">
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
              <p className="mt-5 text-base leading-relaxed text-gray-300">
                Built by people with real field experience and a hands-on
                approach to execution.
              </p>
            </AnimateOnScroll>
          </div>

          <div className="grid gap-5 md:grid-cols-3">
            {FOUNDERS.map((founder, i) => {
              const iconMap: Record<string, typeof HardHat> = { HardHat, Target, ClipboardList };
              const Icon = iconMap[founder.icon] || Users;
              return (
                <AnimateOnScroll key={founder.name} delay={i * 100}>
                  <div className="group relative overflow-hidden border border-white/5 bg-charcoal transition-all duration-500 hover:border-red/30">
                    <div className="absolute inset-0 origin-bottom scale-y-0 bg-red/[0.04] transition-transform duration-500 group-hover:scale-y-100" />

                    <div className="relative p-6">
                      <div className="flex h-12 w-12 items-center justify-center border border-white/10 bg-black">
                        <Icon className="h-5 w-5 text-red" />
                      </div>

                      <h3 className="mt-5 font-display text-2xl tracking-wider text-white">
                        {founder.name}
                      </h3>
                      <p className="mt-1 text-xs font-semibold uppercase tracking-[0.2em] text-red">
                        {founder.role}
                      </p>

                      <div className="mt-3 h-0.5 w-8 bg-red transition-all duration-500 group-hover:w-16" />

                      <p className="mt-4 text-sm leading-relaxed text-gray-300 transition-colors duration-300 group-hover:text-gray-200">
                        {founder.bio}
                      </p>
                    </div>
                  </div>
                </AnimateOnScroll>
              );
            })}
          </div>

          {/* Team */}
          <div className="mt-5 grid gap-5 sm:grid-cols-2">
            {TEAM.map((member, i) => {
              const teamIconMap: Record<string, typeof Monitor> = { Monitor, ClipboardList };
              const Icon = teamIconMap[member.icon] || Users;
              return (
                <AnimateOnScroll key={member.name} delay={400 + i * 100}>
                  <div className="group relative h-full overflow-hidden border border-white/5 bg-charcoal transition-all duration-500 hover:border-red/30">
                    <div className="absolute inset-0 origin-bottom scale-y-0 bg-red/[0.04] transition-transform duration-500 group-hover:scale-y-100" />
                    <div className="relative p-6">
                      <div className="flex h-12 w-12 items-center justify-center border border-white/10 bg-black">
                        <Icon className="h-5 w-5 text-red" />
                      </div>
                      <h3 className="mt-5 font-display text-2xl tracking-wider text-white">
                        {member.name}
                      </h3>
                      <p className="mt-1 text-xs font-semibold uppercase tracking-[0.2em] text-red">
                        {member.role}
                      </p>
                      <div className="mt-3 h-0.5 w-8 bg-red transition-all duration-500 group-hover:w-16" />
                      <p className="mt-4 text-sm leading-relaxed text-gray-300 transition-colors duration-300 group-hover:text-gray-200">
                        {member.bio}
                      </p>
                    </div>
                  </div>
                </AnimateOnScroll>
              );
            })}
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
                      &ldquo;Clients deserve a better building experience.&rdquo;
                    </p>
                    <p className="mt-2 text-xs font-semibold uppercase tracking-[0.2em] text-white/70">
                      VVH Founding Principle
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

                <p className="mt-8 text-base leading-relaxed text-gray-300">
                  VVH Construction Group was founded by professionals with real
                  field experience and deep roots in the trades. Long before the
                  company was formed, the work started on job sites across
                  Jersey City and the surrounding region, where execution,
                  coordination, and accountability mattered every day.
                </p>
                <p className="mt-4 text-base leading-relaxed text-gray-300">
                  After years of seeing projects mishandled by companies that
                  prioritized margins over quality, VVH was built around a
                  different standard: clear communication, disciplined
                  execution, and a better experience for the client.
                </p>
                <p className="mt-4 text-base leading-relaxed text-gray-300">
                  Today, VVH delivers residential renovations, commercial
                  buildouts, exterior restoration, and larger-scale construction
                  work with the same hands-on approach that shaped the company
                  from the start.
                </p>
              </AnimateOnScroll>
            </div>
          </div>
        </div>
      </section>

      {/* ── HOW WE DELIVER ── */}
      <section className="relative overflow-hidden bg-black px-5 py-20 sm:px-6 md:py-32 lg:px-8">
        <div className="relative z-10 mx-auto max-w-7xl">
          <div className="mb-14 sm:mb-20">
            <AnimateOnScroll animation="fade-up">
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-red sm:text-base">
                What We Do
              </p>
              <h2 className="mt-4 font-display text-4xl leading-[0.95] tracking-wide text-white sm:text-5xl md:text-6xl">
                How We Deliver
              </h2>
              <div className="mt-5 h-px w-32 bg-gradient-to-r from-red to-transparent" />
            </AnimateOnScroll>
          </div>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                icon: Target,
                title: "General Contracting",
                desc: "We manage projects from permits to punch list with one point of contact, clear coordination, and accountable execution.",
              },
              {
                icon: Hammer,
                title: "Planning & Pre-Construction",
                desc: "Before work begins, we help define scope, budget, scheduling, and project approach so the job starts on the right footing.",
              },
              {
                icon: TrendingUp,
                title: "Project Management",
                desc: "We oversee scheduling, budgeting, communication, and quality control to keep projects moving efficiently from start to finish.",
              },
              {
                icon: Users,
                title: "Design-Build Coordination",
                desc: "When design and construction need to work together, we streamline the process to reduce delays, improve communication, and simplify delivery.",
              },
            ].map((item, i) => (
              <AnimateOnScroll key={item.title} delay={i * 100}>
                <div className="group relative h-full overflow-hidden border border-white/5 bg-charcoal p-8 transition-all duration-500 hover:border-red/30">
                  <div className="absolute inset-0 origin-bottom scale-y-0 bg-red/[0.06] transition-transform duration-500 group-hover:scale-y-100" />
                  <div className="relative">
                    <div className="flex items-center gap-4">
                      <span className="font-display text-2xl tracking-wide text-red sm:text-3xl">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <item.icon className="h-6 w-6 text-red transition-transform duration-300 group-hover:scale-110" />
                    </div>
                    <h3 className="mt-5 font-display text-xl tracking-wider text-white sm:text-2xl">
                      {item.title}
                    </h3>
                    <div className="mt-3 h-0.5 w-8 bg-red transition-all duration-500 group-hover:w-16" />
                    <p className="mt-4 text-base leading-relaxed text-gray-300 transition-colors duration-300 group-hover:text-gray-200">
                      {item.desc}
                    </p>
                  </div>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* ── CORE VALUES ── */}
      <section className="relative overflow-hidden border-t border-white/5 bg-charcoal px-5 py-20 sm:px-6 md:py-32 lg:px-8">
        <div className="relative z-10 mx-auto max-w-5xl">
          <div className="mb-14 text-center sm:mb-16">
            <AnimateOnScroll animation="fade-up">
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-red sm:text-base">
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
              <AnimateOnScroll key={value.title} delay={i * 60}>
                <div className="group border-b border-white/5 px-4 py-6 transition-all duration-300 hover:bg-red/[0.04]">
                  <div className="flex items-center gap-5">
                    <span className="font-display text-2xl tracking-wide text-red/60 transition-colors duration-300 group-hover:text-red sm:text-3xl">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="font-display text-xl tracking-wider text-white sm:text-2xl">
                      {value.title}
                    </span>
                  </div>
                  <p className="mt-2 pl-[3.25rem] text-base leading-relaxed text-gray-400 transition-colors duration-300 group-hover:text-gray-300 sm:pl-[3.75rem]">
                    {value.desc}
                  </p>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
