"use client";

import { useState } from "react";
import Image from "next/image";

const PROJECTS = [
  {
    id: 1,
    type: "Residential",
    title: "New Home Construction",
    desc: "Ground-up residential build.",
    image: "/images/service-residential.jpg",
    aspect: "aspect-[3/4]",
  },
  {
    id: 2,
    type: "Commercial",
    title: "Commercial Retail Buildout",
    desc: "Steel-frame commercial building with full site work.",
    image: "/images/service-commercial.jpg",
    aspect: "aspect-[4/3]",
  },
  {
    id: 3,
    type: "Renovation",
    title: "Kitchen Renovation",
    desc: "Full kitchen remodel with custom cabinetry.",
    image: "/images/service-renovation.jpg",
    aspect: "aspect-square",
  },
  {
    id: 4,
    type: "Exterior",
    title: "Exterior Restoration",
    desc: "Driveway and exterior power washing.",
    image: "/images/service-exterior.jpg",
    aspect: "aspect-[4/3]",
  },
  {
    id: 5,
    type: "Residential",
    title: "Completed Home",
    desc: "Finished craftsman-style home with landscaping.",
    image: "/images/portfolio-hero.jpg",
    aspect: "aspect-[4/3]",
  },
  {
    id: 6,
    type: "Roofing",
    title: "Roof Replacement",
    desc: "Full residential roof tear-off and reshingle.",
    image: "/images/service-roofing.jpg",
    aspect: "aspect-[3/4]",
  },
  {
    id: 7,
    type: "Commercial",
    title: "Project Management",
    desc: "End-to-end commercial interior coordination.",
    image: "/images/service-management.jpg",
    aspect: "aspect-[4/3]",
  },
  {
    id: 8,
    type: "Residential",
    title: "Construction Progress",
    desc: "Active jobsite at golden hour.",
    image: "/images/hero-bg.jpg",
    aspect: "aspect-square",
  },
  {
    id: 9,
    type: "Renovation",
    title: "Team Coordination",
    desc: "Blueprint review and project planning on site.",
    image: "/images/about-team.jpg",
    aspect: "aspect-[3/4]",
  },
];

const FILTERS = [
  "All",
  "Residential",
  "Commercial",
  "Renovation",
  "Exterior",
  "Roofing",
];

export function PortfolioGrid() {
  const [active, setActive] = useState("All");

  const filtered =
    active === "All"
      ? PROJECTS
      : PROJECTS.filter((p) => p.type === active);

  return (
    <>
      {/* Filter bar */}
      <section className="bg-black px-6 pb-12 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-wrap gap-2">
            {FILTERS.map((filter) => (
              <button
                key={filter}
                onClick={() => setActive(filter)}
                className={`group flex items-center gap-2 px-5 py-2.5 text-xs font-semibold uppercase tracking-[0.2em] transition-all duration-300 ${
                  active === filter
                    ? "bg-red text-white"
                    : "border border-white/10 text-gray-500 hover:border-red/30 hover:text-white"
                }`}
              >
                {active === filter && (
                  <span className="h-1.5 w-1.5 rounded-full bg-white" />
                )}
                {filter}
              </button>
            ))}
          </div>

          {/* Results count */}
          <p className="mt-6 text-xs font-semibold uppercase tracking-[0.2em] text-gray-700">
            {filtered.length} Project{filtered.length !== 1 ? "s" : ""}
          </p>
        </div>
      </section>

      {/* Masonry grid */}
      <section className="bg-black px-6 pb-32 lg:px-8">
        <div className="mx-auto max-w-7xl columns-1 gap-5 sm:columns-2 lg:columns-3">
          {filtered.map((project) => (
              <div key={project.id} className="group mb-5 break-inside-avoid overflow-hidden border border-white/5 bg-charcoal transition-all duration-500 hover:border-red/30">
                <div className={`${project.aspect} relative overflow-hidden`}>
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                  {/* Subtle overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                  {/* Hover overlay */}
                  <div className="absolute inset-0 bg-black/0 transition-colors duration-500 group-hover:bg-black/20" />
                  {/* Red accent bar */}
                  <div className="absolute bottom-0 left-0 h-1 w-0 bg-red transition-all duration-500 group-hover:w-full" />
                  {/* Number */}
                  <div className="absolute right-3 top-3 font-display text-3xl leading-none text-white/0 transition-all duration-500 group-hover:text-white/20">
                    {String(project.id).padStart(2, "0")}
                  </div>
                </div>

                <div className="border-t border-white/5 p-5">
                  <div className="flex items-center gap-3">
                    <span className="h-px w-4 bg-red" />
                    <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-red">
                      {project.type}
                    </p>
                  </div>
                  <p className="mt-2 font-display text-lg tracking-wider text-white">
                    {project.title}
                  </p>
                  <p className="mt-1 text-xs leading-relaxed text-gray-500">
                    {project.desc}
                  </p>
                </div>
              </div>
          ))}
        </div>
      </section>
    </>
  );
}
