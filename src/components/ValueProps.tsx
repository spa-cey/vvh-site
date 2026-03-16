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
    <section className="bg-black px-6 py-24 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <AnimateOnScroll>
          <div className="text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-red">
              Why VVH
            </p>
            <h2 className="mt-3 font-display text-4xl tracking-wide text-white md:text-5xl">
              What Sets Us Apart
            </h2>
            <div className="mx-auto mt-3 h-1 w-16 bg-red" />
          </div>
        </AnimateOnScroll>

        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {VALUE_PROPS.map((prop, i) => {
            const Icon = iconMap[prop.icon];
            return (
              <AnimateOnScroll key={prop.title} delay={i * 100}>
                <div className="text-center">
                  <div className="mx-auto flex h-16 w-16 items-center justify-center border border-red/20 bg-charcoal">
                    <Icon className="h-7 w-7 text-red" />
                  </div>
                  <h3 className="mt-5 font-display text-lg tracking-wider text-white">
                    {prop.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-gray-500">
                    {prop.description}
                  </p>
                </div>
              </AnimateOnScroll>
            );
          })}
        </div>
      </div>
    </section>
  );
}
