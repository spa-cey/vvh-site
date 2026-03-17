"use client";

import Image from "next/image";
import {
  Home,
  Building2,
  Hammer,
  Droplets,
  HardHat,
  ClipboardList,
} from "lucide-react";
import { AnimateOnScroll } from "./AnimateOnScroll";

const iconMap = {
  Home,
  Building2,
  Hammer,
  Droplets,
  HardHat,
  ClipboardList,
} as const;

const imageMap: Record<string, string> = {
  commercial: "/images/service-commercial.jpg",
  residential: "/images/service-renovation.jpg",
  "ground-up": "/images/service-residential.jpg",
  exterior: "/images/service-exterior.jpg",
  roofing: "/images/service-roofing.jpg",
  management: "/images/service-management.jpg",
};

interface ServiceDetailProps {
  id: string;
  title: string;
  description: string;
  icon: keyof typeof iconMap;
  reversed?: boolean;
  index: number;
}

export function ServiceDetail({
  id,
  title,
  description,
  icon,
  reversed = false,
  index,
}: ServiceDetailProps) {
  const Icon = iconMap[icon];
  const imageSrc = imageMap[id];

  return (
    <section
      id={id}
      className="group/section relative scroll-mt-24 border-b border-white/5 px-5 py-16 sm:px-6 sm:py-24 lg:px-8"
    >
      <div className="mx-auto max-w-7xl">
        <div
          className={`grid items-center gap-12 lg:grid-cols-12 lg:gap-8 ${
            reversed ? "lg:[direction:rtl] lg:*:[direction:ltr]" : ""
          }`}
        >
          {/* Image — 7 cols */}
          <div className="lg:col-span-7">
            <AnimateOnScroll animation={reversed ? "fade-right" : "fade-left"}>
              <div className="relative">
                <div className="relative aspect-[16/10] overflow-hidden">
                  <Image
                    src={imageSrc}
                    alt={title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover/section:scale-[1.02]"
                    sizes="(max-width: 1024px) 100vw, 58vw"
                  />
                  {/* Grain */}
                  <div
                    className="absolute inset-0 opacity-20 mix-blend-overlay"
                    style={{
                      backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
                    }}
                  />
                  <div className="absolute bottom-0 left-0 h-1 w-1/3 bg-red" />
                </div>

                {/* Floating number */}
                <div className="absolute -bottom-6 -right-4 hidden font-display text-8xl leading-none text-white/[0.04] lg:block">
                  {String(index + 1).padStart(2, "0")}
                </div>
              </div>
            </AnimateOnScroll>
          </div>

          {/* Text — 5 cols */}
          <div className="lg:col-span-5">
            <AnimateOnScroll
              animation={reversed ? "fade-left" : "fade-right"}
              delay={150}
            >
              <div>
                <div className="flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center border border-white/10 bg-charcoal">
                    <Icon className="h-5 w-5 text-red" />
                  </div>
                  <span className="font-display text-5xl tracking-wide text-white/[0.06]">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>

                <h2 className="mt-6 font-display text-3xl leading-[0.95] tracking-wide text-white sm:text-4xl md:text-5xl">
                  {title}
                </h2>
                <div className="mt-4 h-0.5 w-12 bg-red" />
                <p className="mt-6 text-base leading-relaxed text-gray-400">
                  {description}
                </p>
              </div>
            </AnimateOnScroll>
          </div>
        </div>
      </div>
    </section>
  );
}
