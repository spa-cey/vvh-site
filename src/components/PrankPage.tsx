"use client";

import Image from "next/image";
import { useState, useEffect } from "react";

const CAUTION_TEXT = "UNDER CONSTRUCTION \u00A0\u2022\u00A0 HARD HATS REQUIRED \u00A0\u2022\u00A0 AUTHORIZED VIBES ONLY \u00A0\u2022\u00A0 CAUTION: CREW IS VIBING \u00A0\u2022\u00A0 DO NOT DISTURB \u00A0\u2022\u00A0 UNDER CONSTRUCTION \u00A0\u2022\u00A0 HARD HATS REQUIRED \u00A0\u2022\u00A0 AUTHORIZED VIBES ONLY \u00A0\u2022\u00A0 CAUTION: CREW IS VIBING \u00A0\u2022\u00A0 DO NOT DISTURB \u00A0\u2022\u00A0 ";

export function PrankPage() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setLoaded(true), 100);
    return () => clearTimeout(t);
  }, []);

  return (
    <div className="relative min-h-screen overflow-hidden bg-black">
      {/* Subtle noise texture overlay */}
      <div
        className="pointer-events-none fixed inset-0 z-50 opacity-[0.03]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
        }}
      />

      {/* Diagonal hazard lines in background */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage:
            "repeating-linear-gradient(45deg, transparent, transparent 40px, #CC0000 40px, #CC0000 42px)",
        }}
      />

      {/* ── TOP CAUTION TAPE ── */}
      <div className="relative z-10 overflow-hidden border-b border-red/30 bg-red py-2">
        <div
          className="flex whitespace-nowrap"
          style={{
            animation: "tape-scroll 20s linear infinite",
            width: "200%",
          }}
        >
          <span className="font-display text-sm tracking-[0.3em] text-white/90">
            {CAUTION_TEXT}
            {CAUTION_TEXT}
          </span>
        </div>
      </div>

      {/* ── MAIN CONTENT ── */}
      <div className="relative z-10 flex min-h-[calc(100vh-40px)] flex-col items-center justify-center px-6 py-16">
        {/* Logo */}
        <div
          className={`transition-all duration-1000 ${loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
          style={{ transitionDelay: "200ms" }}
        >
          <Image
            src="/images/logo.png"
            alt="VVH Construction Group"
            width={220}
            height={73}
            className="mx-auto h-auto w-[180px] md:w-[220px]"
            priority
          />
        </div>

        {/* Red rule */}
        <div
          className={`mx-auto mt-8 h-[2px] w-16 bg-red transition-all duration-700 ${loaded ? "opacity-100 scale-x-100" : "opacity-0 scale-x-0"}`}
          style={{ transitionDelay: "500ms" }}
        />

        {/* COMING SOON headline */}
        <h1
          className={`mt-6 font-display text-6xl tracking-[0.15em] text-white transition-all duration-1000 sm:text-7xl md:text-8xl lg:text-9xl ${loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
          style={{
            transitionDelay: "600ms",
            textShadow: "0 0 80px rgba(204, 0, 0, 0.2)",
          }}
        >
          COMING SOON
        </h1>

        {/* Subheadline */}
        <p
          className={`mt-4 max-w-lg text-center text-base leading-relaxed text-gray-500 transition-all duration-1000 md:text-lg ${loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
          style={{ transitionDelay: "800ms" }}
        >
          Our website is currently under construction.
          <br />
          In the meantime, here&apos;s our crew{" "}
          <span className="font-semibold text-white">hard at work</span>.
        </p>

        {/* ── THE PHOTO ── */}
        <div
          className={`group relative mt-12 w-full max-w-2xl transition-all duration-1000 ${loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"}`}
          style={{
            transitionDelay: "1000ms",
            animation: loaded ? "pulse-glow 4s ease-in-out infinite 2s" : "none",
          }}
        >
          {/* "EXHIBIT A" label */}
          <div className="absolute -top-4 left-4 z-20 border border-red/40 bg-black px-4 py-1.5 md:left-6">
            <span className="font-display text-xs tracking-[0.3em] text-red">
              EXHIBIT A
            </span>
          </div>

          {/* Photo container */}
          <div className="relative overflow-hidden border border-charcoal-light">
            {/* Red accent corners */}
            <div className="absolute left-0 top-0 z-10 h-8 w-[2px] bg-red" />
            <div className="absolute left-0 top-0 z-10 h-[2px] w-8 bg-red" />
            <div className="absolute bottom-0 right-0 z-10 h-8 w-[2px] bg-red" />
            <div className="absolute bottom-0 right-0 z-10 h-[2px] w-8 bg-red" />

            <Image
              src="/images/prank.jpg"
              alt="VVH Construction crew performing synchronized dance moves during lunch break"
              width={1536}
              height={1024}
              className="w-full transition-transform duration-700 group-hover:scale-[1.02]"
              priority
            />

            {/* Bottom photo caption bar */}
            <div className="absolute inset-x-0 bottom-0 z-10 bg-gradient-to-t from-black/90 via-black/60 to-transparent px-6 pb-5 pt-16">
              <div className="flex items-end justify-between">
                <div>
                  <p className="font-display text-lg tracking-wider text-white md:text-xl">
                    &ldquo;Peak Productivity&rdquo;
                  </p>
                  <p className="mt-0.5 text-xs text-gray-500">
                    Jobsite B-7 &nbsp;&bull;&nbsp; Tuesday, 12:47 PM
                  </p>
                </div>
                <span
                  className="hidden rounded-full border border-red/30 bg-red/10 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.2em] text-red sm:inline-block"
                  style={{ animation: "flicker 6s ease-in-out infinite" }}
                >
                  LIVE
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Funny quote */}
        <blockquote
          className={`mt-10 max-w-md text-center transition-all duration-1000 ${loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
          style={{ transitionDelay: "1300ms" }}
        >
          <p className="text-sm italic leading-relaxed text-gray-600">
            &ldquo;Building What&apos;s Next&rdquo;
            <br />
            <span className="text-gray-700">
              ...right after this song.
            </span>
          </p>
        </blockquote>

        {/* Status badges */}
        <div
          className={`mt-12 flex flex-wrap items-center justify-center gap-3 transition-all duration-1000 ${loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
          style={{ transitionDelay: "1500ms" }}
        >
          <StatusBadge label="Website" value="Under Construction" />
          <StatusBadge label="Crew Morale" value="Excellent" highlight />
          <StatusBadge label="ETA" value="When the song ends" />
        </div>

        {/* Contact line */}
        <p
          className={`mt-14 text-xs text-gray-700 transition-all duration-1000 ${loaded ? "opacity-100" : "opacity-0"}`}
          style={{ transitionDelay: "1800ms" }}
        >
          Questions? &nbsp;
          <a
            href="mailto:info@vvh.group"
            className="text-gray-500 underline decoration-gray-700 underline-offset-2 transition-colors hover:text-red"
          >
            info@vvh.group
          </a>
        </p>
      </div>

      {/* ── BOTTOM CAUTION TAPE ── */}
      <div className="relative z-10 overflow-hidden border-t border-red/30 bg-red py-2">
        <div
          className="flex whitespace-nowrap"
          style={{
            animation: "tape-scroll 20s linear infinite reverse",
            width: "200%",
          }}
        >
          <span className="font-display text-sm tracking-[0.3em] text-white/90">
            {CAUTION_TEXT}
            {CAUTION_TEXT}
          </span>
        </div>
      </div>
    </div>
  );
}

function StatusBadge({
  label,
  value,
  highlight = false,
}: {
  label: string;
  value: string;
  highlight?: boolean;
}) {
  return (
    <div className="flex items-center gap-2 border border-charcoal-light bg-charcoal/50 px-4 py-2 backdrop-blur-sm">
      <span className="text-[10px] font-semibold uppercase tracking-[0.15em] text-gray-600">
        {label}:
      </span>
      <span
        className={`text-xs font-semibold ${highlight ? "text-red" : "text-gray-400"}`}
      >
        {value}
      </span>
    </div>
  );
}
