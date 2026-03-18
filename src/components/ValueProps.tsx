"use client";

import { DollarSign, Clock, Award, ShieldCheck } from "lucide-react";
import { VALUE_PROPS } from "@/lib/constants";
import { AnimateOnScroll } from "./AnimateOnScroll";

const iconMap = {
  DollarSign,
  Clock,
  Award,
  ShieldCheck,
} as const;

export function ValueProps() {
  return (
    <section className="relative overflow-hidden bg-black px-5 py-20 sm:px-6 md:py-32 lg:px-8">
      {/* Blueprint grid background */}
      <div className="pointer-events-none absolute inset-0 opacity-[0.04]">
        <svg width="100%" height="100%">
          <defs>
            <pattern
              id="blueprint"
              width="80"
              height="80"
              patternUnits="userSpaceOnUse"
            >
              <rect
                width="80"
                height="80"
                fill="none"
                stroke="white"
                strokeWidth="0.5"
              />
              <rect
                x="40"
                y="0"
                width="0.5"
                height="80"
                fill="white"
                opacity="0.3"
              />
              <rect
                x="0"
                y="40"
                width="80"
                height="0.5"
                fill="white"
                opacity="0.3"
              />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#blueprint)" />
        </svg>
      </div>

      <div className="relative z-10 mx-auto max-w-7xl">
        {/* Asymmetric header */}
        <div className="mb-12 max-w-2xl sm:mb-20">
          <AnimateOnScroll animation="fade-up">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-red">
              Why VVH
            </p>
            <h2 className="mt-4 font-display text-4xl leading-[0.95] tracking-wide text-white sm:text-5xl md:text-6xl">
              The VVH
              <br />
              Difference
            </h2>
            <div className="mt-5 h-px w-32 bg-gradient-to-r from-red to-transparent" />
          </AnimateOnScroll>
        </div>

        {/* 2x2 grid with staggered heights */}
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {VALUE_PROPS.map((prop, i) => {
            const Icon = iconMap[prop.icon];
            return (
              <AnimateOnScroll key={prop.title} delay={i * 120}>
                <div
                  className="group relative overflow-hidden border border-white/5 bg-charcoal p-8 transition-all duration-500 hover:border-red/30"
                >
                  {/* Hover fill effect */}
                  <div className="absolute inset-0 origin-bottom scale-y-0 bg-red/[0.06] transition-transform duration-500 group-hover:scale-y-100" />

                  {/* Content */}
                  <div className="relative">
                    {/* Number + icon row */}
                    <Icon className="h-6 w-6 text-red transition-transform duration-300 group-hover:scale-110" />

                    <h3 className="mt-5 font-display text-xl tracking-wider text-white sm:text-2xl">
                      {prop.title}
                    </h3>

                    {/* Red accent line that grows on hover */}
                    <div className="mt-3 h-0.5 w-8 bg-red transition-all duration-500 group-hover:w-16" />

                    <p className="mt-4 text-base leading-relaxed text-gray-300 transition-colors duration-300 group-hover:text-gray-200">
                      {prop.description}
                    </p>
                  </div>
                </div>
              </AnimateOnScroll>
            );
          })}
        </div>
      </div>
    </section>
  );
}
