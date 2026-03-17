"use client";

import Link from "next/link";
import Image from "next/image";
import {
  Home,
  Building2,
  Hammer,
  Droplets,
  HardHat,
  ClipboardList,
  ArrowRight,
} from "lucide-react";
import { SERVICES } from "@/lib/constants";
import { AnimateOnScroll } from "./AnimateOnScroll";
import { useState } from "react";

const iconMap = {
  Home,
  Building2,
  Hammer,
  Droplets,
  HardHat,
  ClipboardList,
} as const;

const serviceImages = [
  "/images/service-residential.jpg",
  "/images/service-commercial.jpg",
  "/images/service-renovation.jpg",
  "/images/service-exterior.jpg",
  "/images/service-roofing.jpg",
  "/images/service-management.jpg",
];

export function ServicesGrid() {
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);

  return (
    <section className="relative overflow-hidden bg-charcoal">
      {/* Diagonal divider from previous section */}
      <div className="absolute inset-x-0 top-0 z-10 h-20">
        <svg
          viewBox="0 0 1440 80"
          fill="none"
          className="absolute bottom-0 w-full"
          preserveAspectRatio="none"
        >
          <path d="M1440 80L0 0V80H1440Z" fill="#1A1A1A" />
        </svg>
      </div>

      {/* Giant decorative number */}
      <div className="pointer-events-none absolute -left-8 bottom-0 select-none font-display text-[20rem] leading-none tracking-wide text-white/[0.02] md:text-[28rem]">
        02
      </div>

      {/* Crosshatch SVG texture overlay */}
      <div className="pointer-events-none absolute inset-0 opacity-[0.03]">
        <svg width="100%" height="100%">
          <defs>
            <pattern
              id="crosshatch"
              width="16"
              height="16"
              patternUnits="userSpaceOnUse"
              patternTransform="rotate(45)"
            >
              <line
                x1="0"
                y1="0"
                x2="0"
                y2="16"
                stroke="white"
                strokeWidth="1"
              />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#crosshatch)" />
        </svg>
      </div>

      <div className="relative z-20 mx-auto max-w-7xl px-6 pb-32 pt-32 lg:px-8">
        {/* Section header — left-aligned, editorial style */}
        <div className="mb-20 grid items-end gap-6 lg:grid-cols-12">
          <AnimateOnScroll animation="fade-left" className="lg:col-span-7">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-red">
              What We Do
            </p>
            <h2 className="mt-3 font-display text-5xl leading-[0.95] tracking-wide text-white md:text-6xl lg:text-7xl">
              Services Built
              <br />
              for Results
            </h2>
          </AnimateOnScroll>
          <AnimateOnScroll
            animation="fade-right"
            delay={200}
            className="lg:col-span-5"
          >
            <p className="text-base leading-relaxed text-gray-500 lg:text-right">
              From residential renovations to ground-up commercial builds, we
              manage every phase with precision. Six core capabilities, one
              standard of excellence.
            </p>
          </AnimateOnScroll>
        </div>

        {/* Services — alternating large/small editorial layout */}
        <div className="space-y-1">
          {SERVICES.map((service, i) => {
            const Icon = iconMap[service.icon];
            const isHovered = hoveredIdx === i;
            return (
              <AnimateOnScroll key={service.id} delay={i * 80}>
                <Link
                  href={`/services#${service.id}`}
                  className="group relative block"
                  onMouseEnter={() => setHoveredIdx(i)}
                  onMouseLeave={() => setHoveredIdx(null)}
                >
                  <div
                    className="relative flex items-center gap-6 border-b border-white/5 px-2 py-7 transition-all duration-500 md:gap-10 md:px-6 md:py-9"
                    style={{
                      backgroundColor: isHovered
                        ? "rgba(204, 0, 0, 0.06)"
                        : "transparent",
                    }}
                  >
                    {/* Number */}
                    <span className="hidden font-display text-5xl tracking-wide text-white/10 transition-colors duration-300 group-hover:text-red/40 md:block">
                      {String(i + 1).padStart(2, "0")}
                    </span>

                    {/* Icon */}
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center border border-white/10 transition-all duration-300 group-hover:border-red/50 group-hover:bg-red/10">
                      <Icon className="h-5 w-5 text-gray-500 transition-colors duration-300 group-hover:text-red" />
                    </div>

                    {/* Title + desc */}
                    <div className="flex-1">
                      <h3 className="font-display text-2xl tracking-wider text-white transition-colors duration-300 group-hover:text-red md:text-3xl">
                        {service.title}
                      </h3>
                      <p className="mt-1 line-clamp-1 text-sm text-gray-500 transition-colors duration-300 group-hover:text-gray-400">
                        {service.summary}
                      </p>
                    </div>

                    {/* Arrow */}
                    <ArrowRight className="h-5 w-5 shrink-0 -translate-x-2 text-gray-700 opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:text-red group-hover:opacity-100" />

                    {/* Hover image reveal — slides in from right */}
                    <div
                      className="pointer-events-none absolute right-24 top-1/2 z-30 hidden aspect-[3/2] w-56 -translate-y-1/2 overflow-hidden opacity-0 transition-all duration-500 group-hover:opacity-100 lg:block"
                      style={{
                        transform: isHovered
                          ? "translateY(-50%) translateX(0) scale(1)"
                          : "translateY(-50%) translateX(20px) scale(0.95)",
                        boxShadow: "0 25px 50px rgba(0,0,0,0.5)",
                      }}
                    >
                      <Image
                        src={serviceImages[i]}
                        alt={service.title}
                        fill
                        className="object-cover"
                        sizes="224px"
                      />
                      <div className="absolute inset-0 border border-red/20" />
                    </div>
                  </div>
                </Link>
              </AnimateOnScroll>
            );
          })}
        </div>
      </div>
    </section>
  );
}
