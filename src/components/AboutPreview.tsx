"use client";

import Image from "next/image";
import { AnimateOnScroll } from "./AnimateOnScroll";
import { useEffect, useRef, useState } from "react";

function Counter({ target, suffix = "" }: { target: number; suffix?: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          const duration = 2000;
          const steps = 60;
          const increment = target / steps;
          let current = 0;
          const timer = setInterval(() => {
            current += increment;
            if (current >= target) {
              setCount(target);
              clearInterval(timer);
            } else {
              setCount(Math.floor(current));
            }
          }, duration / steps);
        }
      },
      { threshold: 0.5 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [target]);

  return (
    <span ref={ref}>
      {count}
      {suffix}
    </span>
  );
}

export function AboutPreview() {
  return (
    <section className="relative overflow-hidden bg-black">
      {/* Diagonal top edge */}
      <div className="absolute inset-x-0 top-0 z-10 h-24">
        <svg
          viewBox="0 0 1440 96"
          fill="none"
          className="absolute bottom-0 w-full"
          preserveAspectRatio="none"
        >
          <path d="M0 96L1440 0V96H0Z" fill="#0A0A0A" />
        </svg>
      </div>

      {/* Giant section number — decorative */}
      <div className="pointer-events-none absolute -right-8 top-12 select-none font-display text-[20rem] leading-none tracking-wide text-white/[0.02] md:text-[28rem]">
        01
      </div>

      <div className="relative z-20 mx-auto max-w-7xl px-6 pb-32 pt-40 lg:px-8">
        {/* Stats marquee bar */}
        <AnimateOnScroll animation="fade-up">
          <div className="mb-20 overflow-hidden border-y border-white/10 py-5">
            <div
              className="flex gap-16 whitespace-nowrap"
              style={{
                animation: "marquee-scroll 25s linear infinite",
              }}
            >
              {[
                { val: 10, suf: "+", label: "Years Experience" },
                { val: 200, suf: "+", label: "Projects Delivered" },
                { val: 98, suf: "%", label: "Client Satisfaction" },
                { val: 50, suf: "M+", label: "Project Value" },
                { val: 0, suf: "", label: "Safety Violations" },
                { val: 3, suf: "", label: "States Served" },
                // Duplicate for seamless loop
                { val: 10, suf: "+", label: "Years Experience" },
                { val: 200, suf: "+", label: "Projects Delivered" },
                { val: 98, suf: "%", label: "Client Satisfaction" },
                { val: 50, suf: "M+", label: "Project Value" },
                { val: 0, suf: "", label: "Safety Violations" },
                { val: 3, suf: "", label: "States Served" },
              ].map((stat, i) => (
                <div key={i} className="flex items-baseline gap-3">
                  <span className="font-display text-4xl tracking-wide text-red md:text-5xl">
                    {stat.val === 50 ? "$" : ""}
                    <Counter target={stat.val} suffix={stat.suf} />
                  </span>
                  <span className="text-xs font-semibold uppercase tracking-[0.25em] text-gray-500">
                    {stat.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </AnimateOnScroll>

        {/* Main content — asymmetric layout */}
        <div className="grid items-start gap-12 lg:grid-cols-12 lg:gap-8">
          {/* Left column — text, offset up */}
          <div className="lg:col-span-5 lg:-mt-4">
            <AnimateOnScroll animation="fade-left">
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-red">
                About Us
              </p>
              <h2 className="mt-4 font-display text-5xl leading-[0.95] tracking-wide text-white md:text-6xl lg:text-7xl">
                Built on
                <br />
                Integrity.
              </h2>
              <div className="mt-4 flex items-center gap-4">
                <div className="h-px flex-1 bg-gradient-to-r from-red to-transparent" />
              </div>
            </AnimateOnScroll>

            <AnimateOnScroll animation="fade-left" delay={200}>
              <p className="mt-8 text-base leading-relaxed text-gray-400">
                VVH Construction Group is a full-service construction company
                specializing in residential and commercial projects. We handle
                everything from home renovations and exterior restoration to
                large-scale builds and new construction.
              </p>
              <p className="mt-4 text-base leading-relaxed text-gray-400">
                Founded by a team of driven entrepreneurs with deep roots in the
                trades, VVH was built on a simple principle: deliver exceptional
                work, communicate honestly, and treat every project like
                it&apos;s our own.
              </p>
            </AnimateOnScroll>

            {/* Core values — stacked chips */}
            <AnimateOnScroll animation="fade-up" delay={400}>
              <div className="mt-10 flex flex-wrap gap-2">
                {[
                  "Honest Communication",
                  "Quality First",
                  "On-Time Delivery",
                  "No Shortcuts",
                ].map((val) => (
                  <span
                    key={val}
                    className="border border-white/10 bg-charcoal px-4 py-2 text-xs font-semibold uppercase tracking-[0.15em] text-gray-300"
                  >
                    {val}
                  </span>
                ))}
              </div>
            </AnimateOnScroll>
          </div>

          {/* Right column — stacked images with offset */}
          <div className="relative lg:col-span-7">
            <AnimateOnScroll animation="fade-right" delay={100}>
              <div className="relative">
                {/* Main image */}
                <div className="relative aspect-[16/10] overflow-hidden">
                  <Image
                    src="/images/about-team.jpg"
                    alt="VVH Construction team reviewing blueprints on site"
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 58vw"
                  />
                  {/* Grain overlay */}
                  <div
                    className="absolute inset-0 opacity-30 mix-blend-overlay"
                    style={{
                      backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='1'/%3E%3C/svg%3E")`,
                    }}
                  />
                  {/* Red accent line */}
                  <div className="absolute bottom-0 left-0 h-1 w-1/3 bg-red" />
                </div>

                {/* Floating secondary image — overlapping */}
                <div className="absolute -bottom-12 -left-6 hidden aspect-square w-48 overflow-hidden border-4 border-black shadow-2xl lg:block">
                  <Image
                    src="/images/hero-bg.jpg"
                    alt="Active construction site"
                    fill
                    className="object-cover"
                    sizes="192px"
                  />
                </div>

                {/* Quote block — overlapping right */}
                <div className="absolute -bottom-8 right-0 hidden max-w-xs bg-red p-6 lg:block">
                  <p className="font-display text-lg leading-snug tracking-wide text-white">
                    &ldquo;Treat every project like it&apos;s our own.&rdquo;
                  </p>
                  <p className="mt-2 text-xs font-semibold uppercase tracking-[0.2em] text-white/70">
                    — VVH Founding Principle
                  </p>
                </div>
              </div>
            </AnimateOnScroll>
          </div>
        </div>
      </div>
    </section>
  );
}
