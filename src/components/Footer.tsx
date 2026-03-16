import Link from "next/link";
import Image from "next/image";
import { Mail, Phone, MapPin, Clock, Instagram, Facebook } from "lucide-react";
import { COMPANY, NAV_LINKS, SERVICES } from "@/lib/constants";

export function Footer() {
  return (
    <footer className="border-t border-white/5 bg-charcoal">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div>
            <Link href="/" className="flex items-center gap-3">
              <Image
                src="/logo-transparent.png"
                alt="VVH Construction Group"
                width={40}
                height={40}
                className="h-9 w-auto"
                style={{ filter: "brightness(3) contrast(1.2)" }}
              />
              <div>
                <span className="font-display text-lg tracking-wide text-white">
                  VVH
                </span>
                <span className="block text-[9px] font-semibold uppercase tracking-[0.2em] text-gray-500">
                  Construction Group
                </span>
              </div>
            </Link>
            <p className="mt-4 text-sm leading-relaxed text-gray-500">
              {COMPANY.slogan}
            </p>
            <p className="mt-2 text-sm leading-relaxed text-gray-500">
              Full-service construction company delivering premium residential
              and commercial projects.
            </p>
            <div className="mt-6 flex gap-4">
              <a
                href="#"
                aria-label="Instagram"
                className="text-gray-500 transition-colors hover:text-red"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="#"
                aria-label="Facebook"
                className="text-gray-500 transition-colors hover:text-red"
              >
                <Facebook className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-display text-lg tracking-wider text-white">
              Services
            </h3>
            <ul className="mt-4 space-y-3">
              {SERVICES.map((service) => (
                <li key={service.id}>
                  <Link
                    href={`/services#${service.id}`}
                    className="text-sm text-gray-500 transition-colors hover:text-red"
                  >
                    {service.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-display text-lg tracking-wider text-white">
              Quick Links
            </h3>
            <ul className="mt-4 space-y-3">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-gray-500 transition-colors hover:text-red"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/contact"
                  className="text-sm text-gray-500 transition-colors hover:text-red"
                >
                  Free Estimate
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-display text-lg tracking-wider text-white">
              Contact
            </h3>
            <ul className="mt-4 space-y-4">
              <li className="flex items-start gap-3">
                <Phone className="mt-0.5 h-4 w-4 shrink-0 text-red" />
                <a
                  href={`tel:${COMPANY.phone.replace(/[^+\d]/g, "")}`}
                  className="text-sm text-gray-500 transition-colors hover:text-white"
                >
                  {COMPANY.phone}
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="mt-0.5 h-4 w-4 shrink-0 text-red" />
                <a
                  href={`mailto:${COMPANY.email}`}
                  className="text-sm text-gray-500 transition-colors hover:text-white"
                >
                  {COMPANY.email}
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-red" />
                <span className="text-sm text-gray-500">{COMPANY.area}</span>
              </li>
              <li className="flex items-start gap-3">
                <Clock className="mt-0.5 h-4 w-4 shrink-0 text-red" />
                <span className="text-sm text-gray-500">{COMPANY.hours}</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 border-t border-white/5 pt-8 text-center">
          <p className="text-xs text-gray-500">
            &copy; 2026 {COMPANY.legal}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
