import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Portfolio",
  description:
    "View completed projects by VVH Construction Group. Residential builds, commercial projects, renovations, and exterior work.",
};

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

const FILTERS = ["All", "Residential", "Commercial", "Renovation", "Exterior"];

export default function PortfolioPage() {
  return (
    <>
      {/* Page header with background */}
      <section className="relative bg-black px-6 pt-32 pb-16 lg:px-8">
        <div className="mx-auto max-w-7xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-red">
            Our Work
          </p>
          <h1 className="mt-3 font-display text-5xl tracking-wide text-white md:text-6xl">
            See What We&apos;ve Built
          </h1>
          <div className="mx-auto mt-3 h-1 w-16 bg-red" />
          <p className="mx-auto mt-6 max-w-2xl text-lg text-gray-400">
            A selection of our completed projects. We add new
            work as projects are finished.
          </p>
        </div>
      </section>

      {/* Filter buttons */}
      <section className="bg-black px-6 pb-8 lg:px-8">
        <div className="mx-auto flex max-w-7xl flex-wrap justify-center gap-3">
          {FILTERS.map((filter, i) => (
            <button
              key={filter}
              className={`px-5 py-2 text-xs font-semibold uppercase tracking-[0.2em] transition-all duration-200 ${
                i === 0
                  ? "bg-red text-white"
                  : "border border-charcoal-light text-gray-500 hover:border-red/30 hover:text-white"
              }`}
            >
              {filter}
            </button>
          ))}
        </div>
      </section>

      {/* Masonry grid */}
      <section className="bg-black px-6 pb-24 lg:px-8">
        <div className="mx-auto max-w-7xl columns-1 gap-4 sm:columns-2 lg:columns-3">
          {PROJECTS.map((project) => (
            <div
              key={project.id}
              className="group mb-4 break-inside-avoid overflow-hidden border border-charcoal-light bg-charcoal"
            >
              <div className={`${project.aspect} relative overflow-hidden`}>
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
                {/* Hover overlay */}
                <div className="absolute inset-0 bg-red/0 transition-colors duration-300 group-hover:bg-red/10" />
              </div>
              <div className="border-t border-charcoal-light p-4">
                <p className="text-xs font-semibold uppercase tracking-[0.15em] text-red">
                  {project.type}
                </p>
                <p className="mt-1 text-sm font-medium text-white">
                  {project.title}
                </p>
                <p className="mt-1 text-xs text-gray-500">{project.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
