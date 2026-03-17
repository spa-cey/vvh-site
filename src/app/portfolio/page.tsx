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
      <section className="relative bg-black px-6 pt-32 pb-16 lg:px-8">
        <div className="mx-auto max-w-7xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-red">
            Our Work
          </p>
          <h1 className="mt-3 font-display text-5xl tracking-wide text-white md:text-6xl">
            See What We&apos;ve Built
          </h1>
          <div className="mx-auto mt-3 h-1 w-16 bg-red" />
          <p className="mx-auto mt-6 max-w-2xl text-lg text-gray-400">
            A selection of our completed projects. We add new work as projects
            are finished.
          </p>
        </div>
      </section>

      <PortfolioGrid />
    </>
  );
}
