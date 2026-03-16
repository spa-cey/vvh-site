import Image from "next/image";
import { AnimateOnScroll } from "./AnimateOnScroll";

export function AboutPreview() {
  return (
    <section className="relative overflow-hidden bg-black px-6 py-24 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          {/* Text */}
          <AnimateOnScroll animation="fade-left">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-red">
                About Us
              </p>
              <h2 className="mt-3 font-display text-4xl tracking-wide text-white md:text-5xl">
                Built on Integrity.
                <br />
                Driven by Results.
              </h2>
              <div className="mt-2 h-1 w-16 bg-red" />
              <p className="mt-6 text-base leading-relaxed text-gray-400">
                VVH Construction Group is a full-service construction company
                specializing in residential and commercial
                projects. We handle everything from home renovations and exterior
                restoration to large-scale builds and new construction.
              </p>
              <p className="mt-4 text-base leading-relaxed text-gray-400">
                Founded by a team of driven entrepreneurs with deep roots in the
                trades, VVH was built on a simple principle: deliver exceptional
                work, communicate honestly, and treat every project like
                it&apos;s our own.
              </p>
            </div>
          </AnimateOnScroll>

          {/* Team photo */}
          <AnimateOnScroll animation="fade-right" delay={200}>
            <div className="relative aspect-[4/3] overflow-hidden">
              <Image
                src="/images/about-team.jpg"
                alt="VVH Construction team reviewing blueprints on site"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              {/* Red corner accent */}
              <div className="absolute bottom-0 right-0 h-16 w-16">
                <div className="absolute bottom-0 right-0 h-full w-1 bg-red" />
                <div className="absolute bottom-0 right-0 h-1 w-full bg-red" />
              </div>
            </div>
          </AnimateOnScroll>
        </div>
      </div>
    </section>
  );
}
