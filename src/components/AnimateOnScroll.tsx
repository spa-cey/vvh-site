"use client";

import { useInView } from "@/hooks/useInView";
import { cn } from "@/lib/utils";

interface AnimateOnScrollProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  animation?: "fade-up" | "fade-left" | "fade-right" | "scale";
}

export function AnimateOnScroll({
  children,
  className,
  delay = 0,
  animation = "fade-up",
}: AnimateOnScrollProps) {
  const { ref, isInView } = useInView();

  const animClass = {
    "fade-up": "animate-on-scroll",
    "fade-left": "animate-on-scroll animate-fade-left",
    "fade-right": "animate-on-scroll animate-fade-right",
    scale: "animate-on-scroll animate-scale",
  }[animation];

  return (
    <div
      ref={ref}
      className={cn(animClass, isInView && "is-visible", className)}
      style={{ "--delay": `${delay}ms` } as React.CSSProperties}
    >
      {children}
    </div>
  );
}
