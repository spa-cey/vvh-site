import Link from "next/link";
import {
  Home,
  Building2,
  Hammer,
  Droplets,
  HardHat,
  ClipboardList,
} from "lucide-react";
import { SERVICES } from "@/lib/constants";
import { AnimateOnScroll } from "./AnimateOnScroll";

const iconMap = {
  Home,
  Building2,
  Hammer,
  Droplets,
  HardHat,
  ClipboardList,
} as const;

export function ServicesGrid() {
  return (
    <section className="bg-charcoal px-6 py-24 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <AnimateOnScroll>
          <div className="text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-red">
              What We Do
            </p>
            <h2 className="mt-3 font-display text-4xl tracking-wide text-white md:text-5xl">
              Our Services
            </h2>
            <div className="mx-auto mt-3 h-1 w-16 bg-red" />
          </div>
        </AnimateOnScroll>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((service, i) => {
            const Icon = iconMap[service.icon];
            return (
              <AnimateOnScroll key={service.id} delay={i * 100}>
                <Link
                  href={`/services#${service.id}`}
                  className="group block h-full border border-charcoal-light bg-black p-8 transition-all duration-300 hover:-translate-y-1 hover:border-red/30"
                >
                  <Icon className="h-8 w-8 text-red transition-transform duration-300 group-hover:scale-110" />
                  <h3 className="mt-5 font-display text-xl tracking-wider text-white">
                    {service.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-gray-500">
                    {service.summary}
                  </p>
                  <span className="mt-4 inline-block text-xs font-semibold uppercase tracking-[0.2em] text-red opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                    Learn More &rarr;
                  </span>
                </Link>
              </AnimateOnScroll>
            );
          })}
        </div>
      </div>
    </section>
  );
}
