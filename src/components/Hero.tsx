"use client";

import Link from "next/link";
import Image from "next/image";
import { ChevronDown } from "lucide-react";

export function Hero() {
  return (
    <section className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-black px-6 text-center">
      {/* Background video time-lapse */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 h-full w-full object-cover"
        poster="/images/hero-bg.jpg"
      >
        <source src="/hero-loop.mp4" type="video/mp4" />
      </video>
      {/* Fallback static image for no-JS / unsupported */}
      <noscript>
        <Image src="/images/hero-bg.jpg" alt="" fill className="object-cover" priority />
      </noscript>

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/65" />
      {/* Bottom gradient fade */}
      <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-black to-transparent" />

      <div className="relative z-10 max-w-4xl">
        {/* Main heading */}
        <h1 className="font-display text-4xl leading-[0.95] tracking-wide text-white sm:text-5xl md:text-7xl lg:text-8xl">
          Built with Vision.
          <br />
          <span className="text-red">Executed with Precision.</span>
        </h1>

        {/* Subheadline */}
        <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-gray-300 sm:text-lg md:text-xl">
          VVH Construction Group delivers residential construction, commercial
          buildouts, property restoration, and ground-up construction with
          principal oversight and disciplined execution founded on trust and
          transparency.
        </p>

        {/* CTAs */}
        <div className="mt-8 flex flex-col items-center gap-3 sm:mt-10 sm:flex-row sm:justify-center sm:gap-4">
          <Link
            href="/contact"
            className="w-full bg-red px-8 py-4 text-sm font-bold uppercase tracking-[0.2em] text-white transition-colors duration-200 hover:bg-red-bright sm:w-auto"
          >
            Request a Quote
          </Link>
          <Link
            href="/portfolio"
            className="w-full border border-white/20 px-8 py-4 text-sm font-bold uppercase tracking-[0.2em] text-white transition-all duration-200 hover:border-white/50 hover:bg-white/5 sm:w-auto"
          >
            View Projects
          </Link>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
        <ChevronDown
          className="h-6 w-6 text-gray-500"
          style={{ animation: "chevron-bounce 2s ease-in-out infinite" }}
        />
      </div>
    </section>
  );
}
