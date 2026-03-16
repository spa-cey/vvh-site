import Image from "next/image";
import {
  Home,
  Building2,
  Hammer,
  Droplets,
  HardHat,
  ClipboardList,
} from "lucide-react";
import { AnimateOnScroll } from "./AnimateOnScroll";
import { cn } from "@/lib/utils";

const iconMap = {
  Home,
  Building2,
  Hammer,
  Droplets,
  HardHat,
  ClipboardList,
} as const;

const imageMap: Record<string, string> = {
  residential: "/images/service-residential.jpg",
  commercial: "/images/service-commercial.jpg",
  renovations: "/images/service-renovation.jpg",
  exterior: "/images/service-exterior.jpg",
  roofing: "/images/service-roofing.jpg",
  management: "/images/service-management.jpg",
};

interface ServiceDetailProps {
  id: string;
  title: string;
  description: string;
  icon: keyof typeof iconMap;
  reversed?: boolean;
}

export function ServiceDetail({
  id,
  title,
  description,
  icon,
  reversed = false,
}: ServiceDetailProps) {
  const Icon = iconMap[icon];
  const imageSrc = imageMap[id];

  return (
    <section
      id={id}
      className="scroll-mt-24 border-b border-white/5 px-6 py-20 lg:px-8"
    >
      <div className="mx-auto max-w-7xl">
        <div
          className={cn(
            "grid items-center gap-12 lg:grid-cols-2 lg:gap-20",
            reversed && "lg:[direction:rtl] lg:*:[direction:ltr]"
          )}
        >
          {/* Service image */}
          <AnimateOnScroll animation={reversed ? "fade-right" : "fade-left"}>
            <div className="relative aspect-[4/3] overflow-hidden">
              <Image
                src={imageSrc}
                alt={title}
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute bottom-0 left-0 h-1 w-full bg-gradient-to-r from-red to-transparent" />
            </div>
          </AnimateOnScroll>

          {/* Text */}
          <AnimateOnScroll
            animation={reversed ? "fade-left" : "fade-right"}
            delay={150}
          >
            <div>
              <Icon className="h-8 w-8 text-red" />
              <h2 className="mt-4 font-display text-3xl tracking-wide text-white md:text-4xl">
                {title}
              </h2>
              <div className="mt-3 h-1 w-12 bg-red" />
              <p className="mt-6 text-base leading-relaxed text-gray-400">
                {description}
              </p>
            </div>
          </AnimateOnScroll>
        </div>
      </div>
    </section>
  );
}
