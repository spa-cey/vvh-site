"use client";

import Link from "next/link";
import { AnimateOnScroll } from "./AnimateOnScroll";
import { ArrowRight } from "lucide-react";

export function CTASection() {
  return (
    <section className="relative overflow-hidden bg-black">
      {/* Top diagonal */}
      <div className="absolute inset-x-0 top-0 z-10 h-20">
        <svg
          viewBox="0 0 1440 80"
          fill="none"
          className="absolute bottom-0 w-full"
          preserveAspectRatio="none"
        >
          <path d="M0 80L1440 0V80H0Z" fill="#0A0A0A" />
        </svg>
      </div>

      <div className="relative z-20 px-5 pb-20 pt-28 sm:px-6 md:pb-32 md:pt-40 lg:px-8">
        <div className="mx-auto max-w-7xl">
          {/* Full-width red block with dramatic typography */}
          <AnimateOnScroll animation="scale">
            <div className="relative overflow-hidden bg-red p-8 sm:p-12 md:p-20">
              {/* Noise texture */}
              <div
                className="absolute inset-0 opacity-[0.08] mix-blend-overlay"
                style={{
                  backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 512 512' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
                }}
              />

              {/* Diagonal line accents */}
              <div className="absolute -right-20 -top-20 h-80 w-px rotate-45 bg-white/10" />
              <div className="absolute -right-10 -top-20 h-80 w-px rotate-45 bg-white/5" />
              <div className="absolute -left-20 -bottom-20 h-80 w-px rotate-45 bg-white/10" />

              {/* Content */}
              <div className="relative grid items-center gap-10 lg:grid-cols-12">
                <div className="lg:col-span-8">
                  <p className="text-sm font-semibold uppercase tracking-[0.3em] text-white/60">
                    Start Your Project
                  </p>
                  <h2 className="mt-4 font-display text-4xl leading-[0.95] tracking-wide text-white sm:text-5xl md:text-6xl lg:text-7xl">
                    Ready to
                    <br />
                    Get Started?
                  </h2>
                  <p className="mt-6 max-w-md text-base leading-relaxed text-white/80 sm:text-lg">
                    We work with residential and commercial clients to turn
                    ideas into well-managed, well-executed builds.
                  </p>
                </div>

                <div className="lg:col-span-4 lg:text-right">
                  <Link
                    href="/contact"
                    className="group inline-flex items-center gap-3 bg-white px-10 py-5 text-sm font-bold uppercase tracking-[0.2em] text-red transition-all duration-300 hover:gap-5 hover:bg-black hover:text-white"
                  >
                    Request a Quote
                    <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </Link>
                  <p className="mt-4 text-xs uppercase tracking-[0.15em] text-white/40">
                    Response within 24 hours
                  </p>
                </div>
              </div>

              {/* Corner bracket accents */}
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

          {/* Bottom trust strip */}
          <AnimateOnScroll animation="fade-up" delay={200}>
            <div className="mt-12 flex flex-wrap items-center justify-center gap-x-10 gap-y-4 text-sm font-semibold uppercase tracking-[0.2em] text-gray-500">
              <span>Fully Licensed</span>
              <span className="hidden h-3 w-px bg-gray-800 sm:block" />
              <span>Fully Insured</span>
              <span className="hidden h-3 w-px bg-gray-800 sm:block" />
              <span>NJ, NY & PA</span>
              <span className="hidden h-3 w-px bg-gray-800 sm:block" />
              <span>Est. 2016</span>
            </div>
          </AnimateOnScroll>
        </div>
      </div>
    </section>
  );
}
