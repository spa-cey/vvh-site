"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { NAV_LINKS } from "@/lib/constants";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled
          ? "bg-black/95 backdrop-blur-lg border-b border-white/5"
          : "bg-transparent"
      )}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
        <Link href="/" className="relative z-50 flex items-center gap-3">
          <Image
            src="/logo-transparent.png"
            alt="VVH Construction Group"
            width={48}
            height={48}
            className="h-10 w-auto md:h-12"
            style={{ filter: "brightness(3) contrast(1.2)" }}
            priority
          />
          <div className="hidden sm:block">
            <span className="font-display text-xl tracking-wide text-white">
              VVH
            </span>
            <span className="block text-[10px] font-semibold uppercase tracking-[0.2em] text-gray-500">
              Construction Group
            </span>
          </div>
        </Link>

        {/* Desktop nav */}
        <div className="hidden items-center gap-8 lg:flex">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "relative text-sm font-medium uppercase tracking-[0.15em] transition-colors duration-200",
                pathname === link.href
                  ? "text-white"
                  : "text-gray-400 hover:text-white"
              )}
            >
              {link.label}
              {pathname === link.href && (
                <span className="absolute -bottom-1 left-0 h-0.5 w-full bg-red" />
              )}
            </Link>
          ))}
          <Link
            href="/contact"
            className="bg-red px-5 py-2.5 text-sm font-semibold uppercase tracking-wider text-white transition-colors duration-200 hover:bg-red-bright"
          >
            Get a Quote
          </Link>
        </div>

        {/* Mobile hamburger */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="relative z-50 lg:hidden"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
        >
          {menuOpen ? (
            <X className="h-6 w-6 text-white" />
          ) : (
            <Menu className="h-6 w-6 text-white" />
          )}
        </button>
      </nav>

      {/* Mobile overlay */}
      <div
        className={cn(
          "fixed inset-0 z-40 flex flex-col items-center justify-center bg-black/98 transition-all duration-300 lg:hidden",
          menuOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        )}
      >
        <div className="flex flex-col items-center gap-8">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "font-display text-4xl tracking-wider transition-colors duration-200",
                pathname === link.href
                  ? "text-red"
                  : "text-white hover:text-red"
              )}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/contact"
            className="mt-4 bg-red px-8 py-3 text-lg font-semibold uppercase tracking-wider text-white transition-colors duration-200 hover:bg-red-bright"
          >
            Get a Quote
          </Link>
        </div>
      </div>
    </header>
  );
}
