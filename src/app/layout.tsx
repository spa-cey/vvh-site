import type { Metadata } from "next";
import { Bebas_Neue, Barlow } from "next/font/google";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import "./globals.css";

const bebasNeue = Bebas_Neue({
  weight: "400",
  variable: "--font-bebas-neue",
  subsets: ["latin"],
  display: "swap",
});

const barlow = Barlow({
  weight: ["400", "500", "600", "700"],
  variable: "--font-barlow",
  subsets: ["latin"],
  display: "swap",
});

const isPrank = process.env.NEXT_PUBLIC_PRANK_MODE === "true";

export const metadata: Metadata = {
  metadataBase: new URL("https://vvh.group"),
  title: {
    default:
      "VVH Construction Group | Residential & Commercial Construction",
    template: "%s | VVH Construction Group",
  },
  description:
    "VVH Construction Group is a full-service construction company specializing in residential and commercial builds, renovations, exterior services, and project management. Get a free estimate today.",
  keywords: [
    "construction company",
    "residential construction",
    "commercial contractor",
    "home renovation",
    "general contractor",
    "powerwashing",
    "roofing",
    "construction company northeast",
  ],
  openGraph: {
    title: "VVH Construction Group | Building What's Next.",
    description:
      "Premium residential & commercial construction services. Renovations, new builds, exterior services, and project management.",
    url: "https://vvh.group",
    siteName: "VVH Construction Group",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "VVH Construction Group | Building What's Next.",
    description:
      "Premium residential & commercial construction. Building What's Next.",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${bebasNeue.variable} ${barlow.variable}`}>
      <body>
        {!isPrank && <Navbar />}
        <main>{children}</main>
        {!isPrank && <Footer />}
      </body>
    </html>
  );
}
