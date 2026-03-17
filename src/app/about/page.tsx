import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Users, Target, Hammer, TrendingUp } from "lucide-react";
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
      {/* ── HERO ── */}
      <section className="relative bg-black px-6 pt-32 pb-20 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-red">
                Who We Are
              </p>
              <h1 className="mt-3 font-display text-4xl tracking-wide text-white md:text-5xl lg:text-6xl">
                Built by Builders.
                <br />
                <span className="text-red">Not Businessmen.</span>
              </h1>
              <div className="mt-4 h-1 w-16 bg-red" />
              <p className="mt-6 text-base leading-relaxed text-gray-400">
                VVH Construction Group was founded by three guys from Jersey City
                who grew up on job sites. We didn&apos;t come from corner offices
                &mdash; we came from the field. That&apos;s what makes us
                different. We know what good work looks like because we&apos;ve
                done it ourselves, every day, for over a decade.
              </p>
              <p className="mt-4 text-base leading-relaxed text-gray-400">
                From high-rise towers and commercial buildouts to full-home
                renovations and exterior restoration, VVH handles projects of
                every scale with the same principle: treat every job like
                it&apos;s our own.
              </p>
            </div>

            <AnimateOnScroll animation="fade-right" delay={200}>
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src="/images/about-team.jpg"
                  alt="VVH Construction team on site"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                <div className="absolute bottom-0 right-0 h-16 w-16">
                  <div className="absolute bottom-0 right-0 h-full w-1 bg-red" />
                  <div className="absolute bottom-0 right-0 h-1 w-full bg-red" />
                </div>
              </div>
            </AnimateOnScroll>
          </div>
        </div>
      </section>

      {/* ── STATS BAR ── */}
      <section className="border-y border-white/5 bg-charcoal px-6 py-12 lg:px-8">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-8 sm:grid-cols-3 lg:grid-cols-6">
          {STATS.map((stat, i) => (
            <AnimateOnScroll key={stat.label} delay={i * 80}>
              <div className="text-center">
                <p className="font-display text-3xl tracking-wide text-white md:text-4xl">
                  {stat.value}
                </p>
                <p className="mt-1 text-[10px] font-semibold uppercase tracking-[0.2em] text-gray-500">
                  {stat.label}
                </p>
              </div>
            </AnimateOnScroll>
          ))}
        </div>
      </section>

      {/* ── FOUNDERS ── */}
      <section className="bg-black px-6 py-24 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <AnimateOnScroll>
            <div className="text-center">
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-red">
                Our Leadership
              </p>
              <h2 className="mt-3 font-display text-4xl tracking-wide text-white md:text-5xl">
                The Team Behind VVH
              </h2>
              <div className="mx-auto mt-3 h-1 w-16 bg-red" />
            </div>
          </AnimateOnScroll>

          <div className="mt-16 grid gap-8 md:grid-cols-3">
            {FOUNDERS.map((founder, i) => (
              <AnimateOnScroll key={founder.name} delay={i * 150}>
                <div className="group border border-charcoal-light bg-charcoal p-8 transition-all duration-300 hover:-translate-y-1 hover:border-red/30">
                  {/* Avatar placeholder */}
                  <div className="mx-auto flex h-20 w-20 items-center justify-center border border-charcoal-light bg-black">
                    <Users className="h-8 w-8 text-red" />
                  </div>
                  <h3 className="mt-6 text-center font-display text-2xl tracking-wider text-white">
                    {founder.name}
                  </h3>
                  <p className="mt-1 text-center text-xs font-semibold uppercase tracking-[0.2em] text-red">
                    {founder.role}
                  </p>
                  <p className="mt-4 text-sm leading-relaxed text-gray-500">
                    {founder.bio}
                  </p>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* ── OUR STORY ── */}
      <section className="border-t border-white/5 bg-charcoal px-6 py-24 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
            <AnimateOnScroll animation="fade-left">
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src="/images/hero-bg.jpg"
                  alt="VVH Construction jobsite"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                <div className="absolute bottom-0 left-0 h-1 w-full bg-gradient-to-r from-red to-transparent" />
              </div>
            </AnimateOnScroll>

            <AnimateOnScroll animation="fade-right" delay={150}>
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.3em] text-red">
                  Our Story
                </p>
                <h2 className="mt-3 font-display text-3xl tracking-wide text-white md:text-4xl">
                  From the Ground Up
                </h2>
                <div className="mt-3 h-1 w-12 bg-red" />
                <p className="mt-6 text-base leading-relaxed text-gray-400">
                  Varun, Vishal, and Humza didn&apos;t meet in a boardroom. They
                  met on job sites across Jersey City and the greater
                  Tri-State area, working their way up through the trades
                  &mdash; framing, concrete, electrical, project management.
                </p>
                <p className="mt-4 text-base leading-relaxed text-gray-400">
                  After years of watching projects get mismanaged by companies
                  that cared more about margins than quality, they decided to do
                  it themselves. VVH was born out of a simple frustration:
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
              </div>
            </AnimateOnScroll>
          </div>
        </div>
      </section>

      {/* ── WHAT WE DO (services overview) ── */}
      <section className="bg-black px-6 py-24 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <AnimateOnScroll>
            <div className="text-center">
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-red">
                What We Do
              </p>
              <h2 className="mt-3 font-display text-4xl tracking-wide text-white md:text-5xl">
                Our Expertise
              </h2>
              <div className="mx-auto mt-3 h-1 w-16 bg-red" />
            </div>
          </AnimateOnScroll>

          <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
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
            ].map((item, i) => (
              <AnimateOnScroll key={item.title} delay={i * 100}>
                <div className="border border-charcoal-light bg-charcoal p-6 transition-all duration-300 hover:-translate-y-1 hover:border-red/30">
                  <item.icon className="h-7 w-7 text-red" />
                  <h3 className="mt-4 font-display text-lg tracking-wider text-white">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-gray-500">
                    {item.desc}
                  </p>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* ── CORE VALUES ── */}
      <section className="border-t border-white/5 bg-charcoal px-6 py-24 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <AnimateOnScroll>
            <div className="text-center">
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-red">
                How We Operate
              </p>
              <h2 className="mt-3 font-display text-4xl tracking-wide text-white md:text-5xl">
                Core Values
              </h2>
              <div className="mx-auto mt-3 h-1 w-16 bg-red" />
            </div>
          </AnimateOnScroll>

          <div className="mt-12 grid gap-4 sm:grid-cols-2">
            {CORE_VALUES.map((value, i) => (
              <AnimateOnScroll key={value} delay={i * 60}>
                <div className="flex items-center gap-4 border-l-2 border-red/40 bg-black px-6 py-4 transition-colors duration-200 hover:border-red">
                  <span className="font-display text-lg text-gray-700">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="text-sm font-medium text-gray-300">
                    {value}
                  </span>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="relative overflow-hidden bg-red px-6 py-20 lg:px-8">
        <div
          className="absolute inset-0 opacity-[0.06]"
          style={{
            backgroundImage:
              "repeating-linear-gradient(45deg, transparent, transparent 20px, #000 20px, #000 22px)",
          }}
        />
        <div className="relative mx-auto max-w-3xl text-center">
          <AnimateOnScroll>
            <h2 className="font-display text-4xl tracking-wide text-white md:text-5xl">
              Let&apos;s Build Something Together
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-white/80">
              Whether it&apos;s a ground-up build, a renovation, or a
              conversation about what&apos;s possible &mdash; we&apos;re ready.
            </p>
            <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
              <Link
                href="/contact"
                className="w-full border-2 border-white bg-white px-8 py-4 text-sm font-bold uppercase tracking-[0.2em] text-red transition-colors duration-200 hover:bg-transparent hover:text-white sm:w-auto"
              >
                Start the Conversation
              </Link>
              <a
                href={`tel:${COMPANY.phone.replace(/[^+\d]/g, "")}`}
                className="w-full border-2 border-white/40 px-8 py-4 text-sm font-bold uppercase tracking-[0.2em] text-white transition-all duration-200 hover:border-white hover:bg-white/10 sm:w-auto"
              >
                {COMPANY.phone}
              </a>
            </div>
          </AnimateOnScroll>
        </div>
      </section>
    </>
  );
}
