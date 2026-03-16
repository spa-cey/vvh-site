import Link from "next/link";
import { AnimateOnScroll } from "./AnimateOnScroll";

export function CTASection() {
  return (
    <section className="relative overflow-hidden bg-red px-6 py-20 lg:px-8">
      {/* Subtle pattern */}
      <div
        className="absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage:
            "linear-gradient(45deg, #000 25%, transparent 25%, transparent 75%, #000 75%, #000), linear-gradient(45deg, #000 25%, transparent 25%, transparent 75%, #000 75%, #000)",
          backgroundSize: "20px 20px",
          backgroundPosition: "0 0, 10px 10px",
        }}
      />

      <div className="relative z-10 mx-auto max-w-3xl text-center">
        <AnimateOnScroll>
          <h2 className="font-display text-4xl tracking-wide text-white md:text-5xl lg:text-6xl">
            Ready to Build?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-lg text-white/80">
            Get a free estimate on your next residential or commercial project.
            No pressure, no obligation — just an honest assessment and a clear
            plan.
          </p>
          <Link
            href="/contact"
            className="mt-8 inline-block border-2 border-white bg-white px-10 py-4 text-sm font-bold uppercase tracking-[0.2em] text-red transition-all duration-200 hover:bg-transparent hover:text-white"
          >
            Request Your Free Estimate
          </Link>
        </AnimateOnScroll>
      </div>
    </section>
  );
}
