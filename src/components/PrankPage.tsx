"use client";

import Image from "next/image";
import { useState, useEffect, useRef, useCallback } from "react";
import { Volume2, VolumeX } from "lucide-react";

const CAUTION_TEXT =
  "UNDER CONSTRUCTION \u00A0\u2022\u00A0 HARD HATS REQUIRED \u00A0\u2022\u00A0 AUTHORIZED VIBES ONLY \u00A0\u2022\u00A0 CAUTION: CREW IS VIBING \u00A0\u2022\u00A0 DO NOT DISTURB \u00A0\u2022\u00A0 UNDER CONSTRUCTION \u00A0\u2022\u00A0 HARD HATS REQUIRED \u00A0\u2022\u00A0 AUTHORIZED VIBES ONLY \u00A0\u2022\u00A0 CAUTION: CREW IS VIBING \u00A0\u2022\u00A0 DO NOT DISTURB \u00A0\u2022\u00A0 ";

export function PrankPage() {
  const [loaded, setLoaded] = useState(false);
  const [playing, setPlaying] = useState(false);
  const [hasInteracted, setHasInteracted] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    const t = setTimeout(() => setLoaded(true), 100);
    return () => clearTimeout(t);
  }, []);

  const toggleMusic = useCallback(() => {
    const audio = audioRef.current;
    if (!audio) return;

    if (playing) {
      audio.pause();
      setPlaying(false);
    } else {
      audio.currentTime = 26;
      audio.play().then(() => {
        setPlaying(true);
        setHasInteracted(true);
      }).catch(() => {});
    }
  }, [playing]);

  // Try autoplay on first user interaction anywhere on the page
  useEffect(() => {
    if (hasInteracted) return;

    const handleFirstInteraction = () => {
      const audio = audioRef.current;
      if (!audio || hasInteracted) return;
      audio.currentTime = 26;
      audio.play().then(() => {
        setPlaying(true);
        setHasInteracted(true);
      }).catch(() => {});
    };

    window.addEventListener("click", handleFirstInteraction, { once: true });
    window.addEventListener("touchstart", handleFirstInteraction, { once: true });
    return () => {
      window.removeEventListener("click", handleFirstInteraction);
      window.removeEventListener("touchstart", handleFirstInteraction);
    };
  }, [hasInteracted]);

  return (
    <div className="relative min-h-[100dvh] overflow-hidden bg-black">
      {/* Audio element */}
      <audio ref={audioRef} src="/tunak.mp3" loop preload="auto" />

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

      {/* ── MUSIC TOGGLE — fixed bottom-right ── */}
      <button
        onClick={toggleMusic}
        className={`fixed bottom-5 right-5 z-40 flex items-center gap-2 border bg-black/80 px-3 py-2 backdrop-blur-sm transition-all duration-300 sm:bottom-6 sm:right-6 sm:px-4 sm:py-2.5 ${
          playing
            ? "border-red/40 text-red"
            : "border-charcoal-light text-gray-500 hover:border-red/30 hover:text-gray-300"
        }`}
        aria-label={playing ? "Mute music" : "Play music"}
      >
        {playing ? (
          <Volume2 className="h-4 w-4" style={playing ? { animation: "hard-hat-bounce 0.6s ease-in-out infinite" } : undefined} />
        ) : (
          <VolumeX className="h-4 w-4" />
        )}
        <span className="font-display text-[10px] tracking-[0.2em] sm:text-xs">
          {playing ? "NOW PLAYING" : "PLAY ANTHEM"}
        </span>
      </button>

      {/* ── TOP CAUTION TAPE ── */}
      <div className="relative z-10 overflow-hidden border-b border-red/30 bg-red py-1.5 sm:py-2">
        <div
          className="flex whitespace-nowrap"
          style={{
            animation: "tape-scroll 20s linear infinite",
            width: "200%",
          }}
        >
          <span className="font-display text-[10px] tracking-[0.25em] text-white/90 sm:text-sm sm:tracking-[0.3em]">
            {CAUTION_TEXT}
            {CAUTION_TEXT}
          </span>
        </div>
      </div>

      {/* ── MAIN CONTENT ── */}
      <div className="relative z-10 flex min-h-[calc(100dvh-72px)] flex-col items-center justify-center px-4 py-10 sm:px-6 sm:py-16">
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
            className="mx-auto h-auto w-[140px] sm:w-[180px] md:w-[220px]"
            priority
          />
        </div>

        {/* Red rule */}
        <div
          className={`mx-auto mt-5 h-[2px] w-12 bg-red transition-all duration-700 sm:mt-8 sm:w-16 ${loaded ? "opacity-100 scale-x-100" : "opacity-0 scale-x-0"}`}
          style={{ transitionDelay: "500ms" }}
        />

        {/* COMING SOON headline */}
        <h1
          className={`mt-4 font-display text-[2.75rem] leading-none tracking-[0.1em] text-white transition-all duration-1000 sm:mt-6 sm:text-7xl sm:tracking-[0.15em] md:text-8xl lg:text-9xl ${loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
          style={{
            transitionDelay: "600ms",
            textShadow: "0 0 80px rgba(204, 0, 0, 0.2)",
          }}
        >
          COMING SOON
        </h1>

        {/* Subheadline */}
        <p
          className={`mt-3 max-w-sm text-center text-sm leading-relaxed text-gray-500 transition-all duration-1000 sm:mt-4 sm:max-w-lg sm:text-base md:text-lg ${loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
          style={{ transitionDelay: "800ms" }}
        >
          Our website is currently under construction.
          <br className="hidden sm:block" />
          <span className="sm:hidden"> </span>
          In the meantime, here&apos;s our crew{" "}
          <span className="font-semibold text-white">hard at work</span>.
        </p>

        {/* ── THE PHOTO ── */}
        <div
          className={`group relative mt-8 w-full max-w-2xl transition-all duration-1000 sm:mt-12 ${loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"}`}
          style={{
            transitionDelay: "1000ms",
            animation: loaded ? "pulse-glow 4s ease-in-out infinite 2s" : "none",
          }}
        >
          {/* "EXHIBIT A" label */}
          <div className="absolute -top-3 left-3 z-20 border border-red/40 bg-black px-3 py-1 sm:-top-4 sm:left-4 sm:px-4 sm:py-1.5 md:left-6">
            <span className="font-display text-[10px] tracking-[0.25em] text-red sm:text-xs sm:tracking-[0.3em]">
              EXHIBIT A
            </span>
          </div>

          {/* Photo container */}
          <div className="relative overflow-hidden border border-charcoal-light">
            {/* Red accent corners */}
            <div className="absolute left-0 top-0 z-10 h-6 w-[2px] bg-red sm:h-8" />
            <div className="absolute left-0 top-0 z-10 h-[2px] w-6 bg-red sm:w-8" />
            <div className="absolute bottom-0 right-0 z-10 h-6 w-[2px] bg-red sm:h-8" />
            <div className="absolute bottom-0 right-0 z-10 h-[2px] w-6 bg-red sm:w-8" />

            <Image
              src="/images/prank.jpg"
              alt="VVH Construction crew performing synchronized dance moves during lunch break"
              width={1536}
              height={1024}
              className="w-full transition-transform duration-700 group-hover:scale-[1.02]"
              priority
            />

            {/* Bottom photo caption bar */}
            <div className="absolute inset-x-0 bottom-0 z-10 bg-gradient-to-t from-black/90 via-black/60 to-transparent px-4 pb-3 pt-10 sm:px-6 sm:pb-5 sm:pt-16">
              <div className="flex items-end justify-between">
                <div>
                  <p className="font-display text-base tracking-wider text-white sm:text-lg md:text-xl">
                    &ldquo;Peak Productivity&rdquo;
                  </p>
                  <p className="mt-0.5 text-[10px] text-gray-500 sm:text-xs">
                    Jobsite B-7 &nbsp;&bull;&nbsp; Tuesday, 12:47 PM
                  </p>
                </div>
                <span
                  className="rounded-full border border-red/30 bg-red/10 px-2 py-0.5 text-[8px] font-semibold uppercase tracking-[0.15em] text-red sm:px-3 sm:py-1 sm:text-[10px] sm:tracking-[0.2em]"
                  style={{ animation: "flicker 6s ease-in-out infinite" }}
                >
                  LIVE
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Now Playing track info — shows when music is playing */}
        <div
          className={`mt-6 flex items-center gap-2 transition-all duration-500 sm:mt-8 ${playing ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2 pointer-events-none"}`}
        >
          {/* Equalizer bars */}
          <div className="flex items-end gap-[3px]">
            {[0.6, 1, 0.4, 0.8, 0.5].map((h, i) => (
              <div
                key={i}
                className="w-[3px] rounded-full bg-red"
                style={{
                  height: `${h * 16}px`,
                  animation: playing ? `hard-hat-bounce ${0.4 + i * 0.1}s ease-in-out infinite ${i * 0.05}s` : "none",
                }}
              />
            ))}
          </div>
          <p className="font-display text-xs tracking-[0.15em] text-gray-500 sm:text-sm">
            Tunak Tunak Tun — Daler Mehndi
          </p>
        </div>

        {/* Funny quote */}
        <blockquote
          className={`mt-6 max-w-sm text-center transition-all duration-1000 sm:mt-8 sm:max-w-md ${loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
          style={{ transitionDelay: "1300ms" }}
        >
          <p className="text-xs italic leading-relaxed text-gray-600 sm:text-sm">
            &ldquo;Building What&apos;s Next&rdquo;
            <br />
            <span className="text-gray-700">...right after this song.</span>
          </p>
        </blockquote>

        {/* Status badges */}
        <div
          className={`mt-8 flex flex-wrap items-center justify-center gap-2 transition-all duration-1000 sm:mt-12 sm:gap-3 ${loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
          style={{ transitionDelay: "1500ms" }}
        >
          <StatusBadge label="Website" value="Under Construction" />
          <StatusBadge label="Crew Morale" value="Excellent" highlight />
          <StatusBadge label="ETA" value="When the song ends" />
        </div>

        {/* Contact line */}
        <p
          className={`mt-10 text-[11px] text-gray-700 transition-all duration-1000 sm:mt-14 sm:text-xs ${loaded ? "opacity-100" : "opacity-0"}`}
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
      <div className="relative z-10 overflow-hidden border-t border-red/30 bg-red py-1.5 sm:py-2">
        <div
          className="flex whitespace-nowrap"
          style={{
            animation: "tape-scroll 20s linear infinite reverse",
            width: "200%",
          }}
        >
          <span className="font-display text-[10px] tracking-[0.25em] text-white/90 sm:text-sm sm:tracking-[0.3em]">
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
    <div className="flex items-center gap-1.5 border border-charcoal-light bg-charcoal/50 px-3 py-1.5 backdrop-blur-sm sm:gap-2 sm:px-4 sm:py-2">
      <span className="text-[9px] font-semibold uppercase tracking-[0.1em] text-gray-600 sm:text-[10px] sm:tracking-[0.15em]">
        {label}:
      </span>
      <span
        className={`text-[10px] font-semibold sm:text-xs ${highlight ? "text-red" : "text-gray-400"}`}
      >
        {value}
      </span>
    </div>
  );
}
