import type { Metadata } from "next";
import { PortfolioGrid } from "@/components/PortfolioGrid";

export const metadata: Metadata = {
  title: "Portfolio",
  description:
    "View completed projects by VVH Construction Group. Residential builds, commercial projects, renovations, and exterior work.",
};

export default function PortfolioPage() {
  return (
    <>
      {/* ── HERO ── */}
      <section className="relative overflow-hidden bg-black px-5 pt-28 pb-14 sm:px-6 sm:pt-36 sm:pb-20 lg:px-8">
        <div className="pointer-events-none absolute -right-4 top-12 select-none font-display text-[12rem] leading-none tracking-wide text-white/[0.015] md:text-[20rem]">
          WORK
        </div>

        <div className="relative z-10 mx-auto max-w-7xl">
          <div className="flex flex-col items-start justify-between gap-8 lg:flex-row lg:items-end">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-red">
                Our Work
              </p>
              <h1 className="mt-4 font-display text-4xl leading-[0.95] tracking-wide text-white sm:text-5xl md:text-6xl lg:text-7xl">
                See What
                <br />
                We&apos;ve Built
              </h1>
              <div className="mt-5 h-px w-24 bg-gradient-to-r from-red to-transparent" />
            </div>
            <p className="max-w-sm text-base leading-relaxed text-gray-500 lg:text-right">
              A selection of completed residential, commercial, and renovation
              projects. We add new work as projects are finished.
            </p>
          </div>
        </div>
      </section>

      <PortfolioGrid />
    </>
  );
}
