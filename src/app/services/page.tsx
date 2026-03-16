import type { Metadata } from "next";
import { SERVICES } from "@/lib/constants";
import { ServiceDetail } from "@/components/ServiceDetail";

export const metadata: Metadata = {
  title: "Our Services",
  description:
    "VVH Construction Group offers residential construction, commercial builds, renovations, exterior services, roofing, and project management.",
};

export default function ServicesPage() {
  return (
    <>
      {/* Page header */}
      <section className="bg-black px-6 pt-32 pb-16 lg:px-8">
        <div className="mx-auto max-w-7xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-red">
            What We Do
          </p>
          <h1 className="mt-3 font-display text-5xl tracking-wide text-white md:text-6xl">
            Our Services
          </h1>
          <div className="mx-auto mt-3 h-1 w-16 bg-red" />
          <p className="mx-auto mt-6 max-w-2xl text-lg text-gray-400">
            From residential renovations to large-scale commercial builds, VVH
            Construction Group delivers expert craftsmanship across every phase
            of your project.
          </p>
        </div>
      </section>

      {/* Service details */}
      <div className="bg-black">
        {SERVICES.map((service, i) => (
          <ServiceDetail
            key={service.id}
            id={service.id}
            title={service.title}
            description={service.description}
            icon={service.icon}
            reversed={i % 2 === 1}
          />
        ))}
      </div>
    </>
  );
}
