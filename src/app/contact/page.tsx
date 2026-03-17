import type { Metadata } from "next";
import Link from "next/link";
import { Phone, Mail, MapPin, Clock, ArrowUpRight } from "lucide-react";
import { COMPANY } from "@/lib/constants";
import { ContactForm } from "@/components/ContactForm";
import { AnimateOnScroll } from "@/components/AnimateOnScroll";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Get a free estimate from VVH Construction Group. Contact us for residential and commercial construction projects.",
};

export default function ContactPage() {
  return (
    <>
      {/* ── HERO ── */}
      <section className="relative overflow-hidden bg-black px-5 pt-28 pb-16 sm:px-6 sm:pt-36 sm:pb-24 lg:px-8">
        {/* Giant background text */}
        <div className="pointer-events-none absolute -right-4 top-16 select-none font-display text-[12rem] leading-none tracking-wide text-white/[0.015] md:text-[20rem]">
          CONTACT
        </div>

        <div className="relative z-10 mx-auto max-w-7xl">
          <div className="flex flex-col items-start justify-between gap-8 lg:flex-row lg:items-end">
            <div>
              <AnimateOnScroll animation="fade-left">
                <p className="text-sm font-semibold uppercase tracking-[0.3em] text-red">
                  Get In Touch
                </p>
                <h1 className="mt-4 font-display text-4xl leading-[0.95] tracking-wide text-white sm:text-5xl md:text-6xl lg:text-7xl">
                  Let&apos;s Talk
                  <br />
                  About Your
                  <br />
                  Project
                </h1>
                <div className="mt-5 h-px w-24 bg-gradient-to-r from-red to-transparent" />
              </AnimateOnScroll>
            </div>
            <AnimateOnScroll animation="fade-right" delay={200}>
              <p className="max-w-sm text-base leading-relaxed text-gray-500 lg:text-right">
                Have a project in mind? Fill out the form below or give us a
                call. We respond within 24 hours.
              </p>
            </AnimateOnScroll>
          </div>
        </div>
      </section>

      {/* ── FORM + INFO ── */}
      <section className="relative overflow-hidden bg-black px-5 pb-20 sm:px-6 md:pb-32 lg:px-8">
        {/* Blueprint grid */}
        <div className="pointer-events-none absolute inset-0 opacity-[0.025]">
          <svg width="100%" height="100%">
            <defs>
              <pattern
                id="contact-grid"
                width="80"
                height="80"
                patternUnits="userSpaceOnUse"
              >
                <rect
                  width="80"
                  height="80"
                  fill="none"
                  stroke="white"
                  strokeWidth="0.5"
                />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#contact-grid)" />
          </svg>
        </div>

        <div className="relative z-10 mx-auto grid max-w-7xl gap-10 sm:gap-12 lg:grid-cols-12 lg:gap-16">
          {/* Form — 7 cols */}
          <div className="lg:col-span-7">
            <AnimateOnScroll animation="fade-left">
              <div className="border border-white/5 bg-charcoal p-5 sm:p-8 md:p-10">
                {/* Form header */}
                <div className="mb-8">
                  <div className="flex items-center gap-3">
                    <span className="h-px w-6 bg-red" />
                    <p className="text-xs font-semibold uppercase tracking-[0.25em] text-red">
                      Request a Quote
                    </p>
                  </div>
                  <h2 className="mt-3 font-display text-3xl tracking-wide text-white md:text-4xl">
                    Request a Quote
                  </h2>
                </div>
                <ContactForm />
              </div>
            </AnimateOnScroll>
          </div>

          {/* Sidebar — 5 cols */}
          <div className="lg:col-span-5">
            <AnimateOnScroll animation="fade-right" delay={200}>
              <div className="border border-white/5 bg-charcoal p-8">
                <div className="flex items-center gap-3">
                  <span className="h-px w-6 bg-red" />
                  <h2 className="text-xs font-semibold uppercase tracking-[0.25em] text-red">
                    Contact Info
                  </h2>
                </div>
                <h3 className="mt-3 font-display text-3xl tracking-wide text-white">
                  Reach Us
                  <br />
                  Directly
                </h3>
                <div className="mt-4 h-0.5 w-12 bg-red" />

                <ul className="mt-10 space-y-6">
                  {[
                    {
                      icon: Phone,
                      label: "Phone",
                      value: COMPANY.phone,
                      href: `tel:${COMPANY.phone.replace(/[^+\d]/g, "")}`,
                    },
                    {
                      icon: Mail,
                      label: "Email",
                      value: COMPANY.email,
                      href: `mailto:${COMPANY.email}`,
                    },
                    {
                      icon: MapPin,
                      label: "Service Area",
                      value: COMPANY.area,
                    },
                    {
                      icon: Clock,
                      label: "Hours",
                      value: COMPANY.hours,
                    },
                  ].map((item) => (
                    <li key={item.label}>
                      {item.href ? (
                        <a
                          href={item.href}
                          className="group flex items-start gap-4 transition-colors duration-200"
                        >
                          <div className="flex h-10 w-10 shrink-0 items-center justify-center border border-white/10 transition-all duration-300 group-hover:border-red/40 group-hover:bg-red/10">
                            <item.icon className="h-4 w-4 text-red" />
                          </div>
                          <div>
                            <span className="block text-[10px] font-semibold uppercase tracking-[0.2em] text-gray-700">
                              {item.label}
                            </span>
                            <span className="mt-0.5 block text-base text-gray-300 transition-colors duration-200 group-hover:text-white">
                              {item.value}
                            </span>
                          </div>
                        </a>
                      ) : (
                        <div className="flex items-start gap-4">
                          <div className="flex h-10 w-10 shrink-0 items-center justify-center border border-white/10">
                            <item.icon className="h-4 w-4 text-red" />
                          </div>
                          <div>
                            <span className="block text-[10px] font-semibold uppercase tracking-[0.2em] text-gray-700">
                              {item.label}
                            </span>
                            <span className="mt-0.5 block text-base text-gray-300">
                              {item.value}
                            </span>
                          </div>
                        </div>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            </AnimateOnScroll>

            {/* Service area map placeholder */}
            <AnimateOnScroll animation="fade-right" delay={300}>
              <div className="mt-5 relative overflow-hidden border border-white/5 bg-charcoal p-8">
                <div className="flex items-center gap-3">
                  <span className="h-px w-6 bg-red" />
                  <p className="text-xs font-semibold uppercase tracking-[0.25em] text-red">
                    Service Area
                  </p>
                </div>
                <div className="mt-6 flex items-center justify-between">
                  <div>
                    <p className="font-display text-2xl tracking-wider text-white">
                      NJ &middot; NY &middot; PA
                    </p>
                    <p className="mt-1 text-xs text-gray-500">
                      Greater Tri-State Area
                    </p>
                  </div>
                  <div className="flex h-16 w-16 items-center justify-center border border-white/5 bg-black">
                    <MapPin className="h-6 w-6 text-red/40" />
                  </div>
                </div>

                {/* States visual */}
                <div className="mt-6 grid grid-cols-3 gap-2">
                  {["New Jersey", "New York", "Pennsylvania"].map((state) => (
                    <div
                      key={state}
                      className="border border-white/5 bg-black px-3 py-3 text-center"
                    >
                      <span className="text-[10px] font-semibold uppercase tracking-[0.15em] text-gray-500">
                        {state}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </AnimateOnScroll>

            {/* Quick CTA */}
            <AnimateOnScroll animation="fade-right" delay={400}>
              <div className="mt-5 border border-white/5 bg-red p-8">
                <p className="font-display text-2xl tracking-wide text-white">
                  Prefer to talk?
                </p>
                <p className="mt-2 text-sm text-white/70">
                  Call us directly for a quick conversation about your project.
                </p>
                <a
                  href={`tel:${COMPANY.phone.replace(/[^+\d]/g, "")}`}
                  className="group mt-5 inline-flex items-center gap-3 bg-white px-6 py-3 text-xs font-bold uppercase tracking-[0.2em] text-red transition-all duration-300 hover:gap-4 hover:bg-black hover:text-white"
                >
                  {COMPANY.phone}
                  <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </a>
              </div>
            </AnimateOnScroll>
          </div>
        </div>
      </section>
    </>
  );
}
