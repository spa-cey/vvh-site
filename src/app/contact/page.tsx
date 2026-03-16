import type { Metadata } from "next";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { COMPANY } from "@/lib/constants";
import { ContactForm } from "@/components/ContactForm";
import { AnimateOnScroll } from "@/components/AnimateOnScroll";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Get a free estimate from VVH Construction Group. Contact us for residential and commercial construction projects in New Jersey.",
};

export default function ContactPage() {
  return (
    <>
      {/* Page header */}
      <section className="bg-black px-6 pt-32 pb-16 lg:px-8">
        <div className="mx-auto max-w-7xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-red">
            Get In Touch
          </p>
          <h1 className="mt-3 font-display text-5xl tracking-wide text-white md:text-6xl">
            Let&apos;s Talk About Your Project
          </h1>
          <div className="mx-auto mt-3 h-1 w-16 bg-red" />
          <p className="mx-auto mt-6 max-w-2xl text-lg text-gray-400">
            Have a project in mind? Fill out the form below or give us a call.
            We respond within 24 hours.
          </p>
        </div>
      </section>

      {/* Form + Info grid */}
      <section className="bg-black px-6 pb-24 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-5 lg:gap-16">
          {/* Contact form */}
          <div className="lg:col-span-3">
            <AnimateOnScroll animation="fade-left">
              <ContactForm />
            </AnimateOnScroll>
          </div>

          {/* Contact info sidebar */}
          <div className="lg:col-span-2">
            <AnimateOnScroll animation="fade-right" delay={200}>
              <div className="border border-charcoal-light bg-charcoal p-8">
                <h2 className="font-display text-2xl tracking-wider text-white">
                  Contact Info
                </h2>
                <div className="mt-2 h-1 w-10 bg-red" />

                <ul className="mt-8 space-y-6">
                  <li className="flex items-start gap-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center bg-black">
                      <Phone className="h-5 w-5 text-red" />
                    </div>
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-[0.15em] text-gray-500">
                        Phone
                      </p>
                      <a
                        href={`tel:${COMPANY.phone.replace(/[^+\d]/g, "")}`}
                        className="mt-1 block text-base text-white transition-colors hover:text-red"
                      >
                        {COMPANY.phone}
                      </a>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center bg-black">
                      <Mail className="h-5 w-5 text-red" />
                    </div>
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-[0.15em] text-gray-500">
                        Email
                      </p>
                      <a
                        href={`mailto:${COMPANY.email}`}
                        className="mt-1 block text-base text-white transition-colors hover:text-red"
                      >
                        {COMPANY.email}
                      </a>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center bg-black">
                      <MapPin className="h-5 w-5 text-red" />
                    </div>
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-[0.15em] text-gray-500">
                        Service Area
                      </p>
                      <p className="mt-1 text-base text-white">
                        {COMPANY.area}
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center bg-black">
                      <Clock className="h-5 w-5 text-red" />
                    </div>
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-[0.15em] text-gray-500">
                        Hours
                      </p>
                      <p className="mt-1 text-base text-white">
                        {COMPANY.hours}
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
            </AnimateOnScroll>

            {/* Map placeholder */}
            <AnimateOnScroll animation="fade-right" delay={300}>
              <div className="mt-6 flex aspect-[4/3] flex-col items-center justify-center border border-charcoal-light bg-charcoal">
                <MapPin className="h-10 w-10 text-gray-700" />
                <p className="mt-3 text-xs uppercase tracking-[0.2em] text-gray-700">
                  Serving All of New Jersey
                </p>
              </div>
            </AnimateOnScroll>
          </div>
        </div>
      </section>
    </>
  );
}
