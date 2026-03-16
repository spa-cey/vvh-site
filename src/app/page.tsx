import Image from "next/image";
import { PrankPage } from "@/components/PrankPage";
import { Hero } from "@/components/Hero";
import { AboutPreview } from "@/components/AboutPreview";
import { ServicesGrid } from "@/components/ServicesGrid";
import { ValueProps } from "@/components/ValueProps";
import { CTASection } from "@/components/CTASection";

const isPrank = process.env.NEXT_PUBLIC_PRANK_MODE === "true";

export default function Home() {
  if (isPrank) {
    return <PrankPage />;
  }

  return (
    <>
      <Hero />
      <AboutPreview />
      <ServicesGrid />
      <ValueProps />
      <CTASection />
    </>
  );
}
