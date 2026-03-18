"use client";

import Link from "next/link";
import Image from "next/image";
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  Instagram,
  Facebook,
  ArrowUpRight,
  ArrowUp,
} from "lucide-react";
import { COMPANY, NAV_LINKS, SERVICES } from "@/lib/constants";

export function Footer() {
  return (
    <footer className="relative overflow-hidden bg-charcoal">
      {/* Blueprint grid background */}
      <div className="pointer-events-none absolute inset-0 opacity-[0.025]">
        <svg width="100%" height="100%">
          <defs>
            <pattern
              id="footer-grid"
              width="60"
              height="60"
              patternUnits="userSpaceOnUse"
            >
              <rect
                width="60"
                height="60"
                fill="none"
                stroke="white"
                strokeWidth="0.5"
              />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#footer-grid)" />
        </svg>
      </div>

      {/* Top marquee strip — services ticker */}
      <div className="relative overflow-hidden border-b border-white/5 bg-black/40 py-4">
        <div
          className="flex gap-12 whitespace-nowrap"
          style={{ animation: "marquee-scroll 30s linear infinite" }}
        >
          {[...SERVICES, ...SERVICES, ...SERVICES].map((service, i) => (
            <span
              key={i}
              className="flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.25em] text-gray-500"
            >
              <span className="h-1 w-1 rounded-full bg-red" />
              {service.title}
            </span>
          ))}
        </div>
      </div>

      {/* Main footer — big brand moment + columns */}
      <div className="relative z-10 mx-auto max-w-7xl px-5 pt-12 sm:px-6 sm:pt-20 lg:px-8">
        {/* Big brand typography row */}
        <div className="mb-10 flex flex-col items-start justify-between gap-6 sm:mb-16 sm:gap-8 lg:flex-row lg:items-end">
          <div>
            <Link href="/" className="group inline-flex items-center gap-4">
              <Image
                src="/logo-transparent.png"
                alt="VVH Construction Group"
                width={56}
                height={56}
                className="h-14 w-auto transition-transform duration-300 group-hover:scale-105"
              />
              <div>
                <span className="font-display text-4xl tracking-wide text-white md:text-5xl">
                  VVH
                </span>
                <span className="block text-[10px] font-semibold uppercase tracking-[0.3em] text-gray-500">
                  Construction Group
                </span>
              </div>
            </Link>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-gray-400 sm:text-base">
              Full-service construction company delivering residential and
              commercial projects across NJ, NY, and PA.
            </p>
          </div>

          {/* Back to top + socials */}
          <div className="flex flex-wrap items-center gap-4 sm:gap-6">
            <div className="flex gap-3">
              <a
                href="#"
                aria-label="Instagram"
                className="flex h-10 w-10 items-center justify-center border border-white/10 text-gray-500 transition-all duration-300 hover:border-red/50 hover:bg-red/10 hover:text-red"
              >
                <Instagram className="h-4 w-4" />
              </a>
              <a
                href="#"
                aria-label="Facebook"
                className="flex h-10 w-10 items-center justify-center border border-white/10 text-gray-500 transition-all duration-300 hover:border-red/50 hover:bg-red/10 hover:text-red"
              >
                <Facebook className="h-4 w-4" />
              </a>
            </div>
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="group flex items-center gap-2 border border-white/10 px-5 py-2.5 text-xs font-semibold uppercase tracking-[0.2em] text-gray-500 transition-all duration-300 hover:border-red/50 hover:text-white"
            >
              Back to Top
              <ArrowUp className="h-3 w-3 transition-transform duration-300 group-hover:-translate-y-0.5" />
            </button>
          </div>
        </div>

        {/* Divider with red accent */}
        <div className="flex items-center gap-4">
          <div className="h-px flex-1 bg-white/5" />
          <div className="h-1 w-12 bg-red" />
          <div className="h-px flex-1 bg-white/5" />
        </div>

        {/* Link columns */}
        <div className="grid grid-cols-2 gap-8 py-12 sm:gap-12 sm:py-16 lg:grid-cols-4">
          {/* Services */}
          <div>
            <h3 className="flex items-center gap-3 font-display text-lg tracking-wider text-white">
              <span className="h-px w-6 bg-red" />
              Services
            </h3>
            <ul className="mt-6 space-y-3">
              {SERVICES.map((service) => (
                <li key={service.id}>
                  <Link
                    href={`/services#${service.id}`}
                    className="group flex items-center gap-2 text-sm text-gray-400 transition-colors duration-200 hover:text-white"
                  >
                    <span className="h-px w-0 bg-red transition-all duration-300 group-hover:w-3" />
                    {service.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="flex items-center gap-3 font-display text-lg tracking-wider text-white">
              <span className="h-px w-6 bg-red" />
              Quick Links
            </h3>
            <ul className="mt-6 space-y-3">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="group flex items-center gap-2 text-sm text-gray-400 transition-colors duration-200 hover:text-white"
                  >
                    <span className="h-px w-0 bg-red transition-all duration-300 group-hover:w-3" />
                    {link.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/contact"
                  className="group flex items-center gap-2 text-sm text-gray-400 transition-colors duration-200 hover:text-white"
                >
                  <span className="h-px w-0 bg-red transition-all duration-300 group-hover:w-3" />
                  Request a Quote
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="flex items-center gap-3 font-display text-lg tracking-wider text-white">
              <span className="h-px w-6 bg-red" />
              Contact
            </h3>
            <ul className="mt-6 space-y-5">
              <li>
                <a
                  href={`tel:${COMPANY.phone.replace(/[^+\d]/g, "")}`}
                  className="group flex items-start gap-3 transition-colors duration-200"
                >
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center border border-white/10 transition-all duration-300 group-hover:border-red/40 group-hover:bg-red/10">
                    <Phone className="h-3.5 w-3.5 text-red" />
                  </div>
                  <div>
                    <span className="block text-[10px] font-semibold uppercase tracking-[0.2em] text-gray-500">
                      Phone
                    </span>
                    <span className="text-sm text-gray-400 transition-colors duration-200 group-hover:text-white">
                      {COMPANY.phone}
                    </span>
                  </div>
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${COMPANY.email}`}
                  className="group flex items-start gap-3 transition-colors duration-200"
                >
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center border border-white/10 transition-all duration-300 group-hover:border-red/40 group-hover:bg-red/10">
                    <Mail className="h-3.5 w-3.5 text-red" />
                  </div>
                  <div>
                    <span className="block text-[10px] font-semibold uppercase tracking-[0.2em] text-gray-500">
                      Email
                    </span>
                    <span className="text-sm text-gray-400 transition-colors duration-200 group-hover:text-white">
                      {COMPANY.email}
                    </span>
                  </div>
                </a>
              </li>
              <li className="flex items-start gap-3">
                <div className="flex h-8 w-8 shrink-0 items-center justify-center border border-white/10">
                  <MapPin className="h-3.5 w-3.5 text-red" />
                </div>
                <div>
                  <span className="block text-[10px] font-semibold uppercase tracking-[0.2em] text-gray-500">
                    Service Area
                  </span>
                  <span className="text-sm text-gray-400">{COMPANY.area}</span>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <div className="flex h-8 w-8 shrink-0 items-center justify-center border border-white/10">
                  <Clock className="h-3.5 w-3.5 text-red" />
                </div>
                <div>
                  <span className="block text-[10px] font-semibold uppercase tracking-[0.2em] text-gray-500">
                    Hours
                  </span>
                  <span className="text-sm text-gray-400">{COMPANY.hours}</span>
                </div>
              </li>
            </ul>
          </div>

          {/* CTA block */}
          <div>
            <h3 className="flex items-center gap-3 font-display text-lg tracking-wider text-white">
              <span className="h-px w-6 bg-red" />
              Get Started
            </h3>
            <p className="mt-6 text-sm leading-relaxed text-gray-400">
              Ready to start your next project? Get a no-obligation quote
              from our team.
            </p>
            <Link
              href="/contact"
              className="group mt-6 inline-flex items-center gap-3 bg-red px-6 py-3 text-xs font-bold uppercase tracking-[0.2em] text-white transition-all duration-300 hover:bg-red-bright hover:gap-4"
            >
              Request Estimate
              <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </Link>

            {/* Slogan */}
            <div className="mt-10 border-l-2 border-red/30 pl-4">
              <p className="font-display text-xl tracking-wide text-white/20">
                {COMPANY.slogan}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="relative border-t border-white/5 bg-black/30">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 py-6 sm:flex-row lg:px-8">
          <p className="text-xs text-gray-500">
            &copy; 2026 {COMPANY.legal}. All rights reserved.
          </p>
          <div className="flex gap-6 text-xs text-gray-500">
            <span>Licensed & Insured</span>
            <span className="h-3 w-px bg-gray-800" />
            <span>NJ &middot; NY &middot; PA</span>
          </div>
        </div>

        {/* Corner bracket accents */}
        <div className="absolute bottom-4 right-6 hidden h-6 w-6 lg:block">
          <div className="absolute bottom-0 right-0 h-full w-0.5 bg-white/5" />
          <div className="absolute bottom-0 right-0 h-0.5 w-full bg-white/5" />
        </div>
      </div>
    </footer>
  );
}
