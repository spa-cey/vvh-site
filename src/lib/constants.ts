export const COMPANY = {
  name: "VVH Construction Group",
  legal: "VVH Construction Group, LLC",
  slogan: "Building What's Next.",
  email: "info@vvh.group",
  phone: "(908) 555-0199",
  area: "Northeast US",
  hours: "Monday\u2013Saturday, 7:00 AM \u2013 6:00 PM",
} as const;

export const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Portfolio", href: "/portfolio" },
  { label: "Contact", href: "/contact" },
] as const;

export const FOUNDERS = [
  {
    name: "Varun Kumar",
    role: "Principal / Co-Founder",
    bio: "Varun brings over a decade of hands-on experience in large-scale commercial construction across the Northeast. From high-rise residential towers in Jersey City to mixed-use developments in Manhattan, he has managed projects exceeding $50M in value. His background in structural engineering and field operations gives VVH its technical edge. Varun oversees all project execution, subcontractor relationships, and quality control.",
  },
  {
    name: "Vishal Kumar",
    role: "Principal / Co-Founder",
    bio: "Vishal\u2019s career in construction began on the ground floor \u2014 literally. Starting as a laborer at 18, he worked his way through every trade before transitioning to project management and business development. His deep understanding of the craft, combined with a sharp eye for opportunity, drives VVH\u2019s growth strategy. Vishal leads client relationships, estimating, and pre-construction planning.",
  },
  {
    name: "Humza Ahmed",
    role: "Principal / Co-Founder",
    bio: "Humza is the operational backbone of VVH. With experience spanning residential renovations, commercial buildouts, and exterior restoration services, he ensures every project runs on time and on budget. His background in construction management and logistics keeps VVH\u2019s crews coordinated across multiple active job sites. Humza oversees scheduling, procurement, and safety compliance.",
  },
] as const;

export const STATS = [
  { value: "10+", label: "Years of Experience" },
  { value: "200+", label: "Projects Completed" },
  { value: "98%", label: "Client Satisfaction" },
  { value: "$50M+", label: "Total Project Value" },
  { value: "0", label: "Safety Violations" },
  { value: "3", label: "States Served" },
] as const;

export const CORE_VALUES = [
  "Accept Responsibility",
  "Communicate Honestly",
  "Deliver on Promises",
  "Treat Every Project Like Our Own",
  "Never Cut Corners",
  "Respect Every Trade",
  "Stay Hungry, Stay Humble",
  "Build Relationships, Not Just Buildings",
] as const;

export const SERVICES = [
  {
    id: "residential",
    title: "Residential Construction",
    icon: "Home" as const,
    summary:
      "Full-service home construction, from renovations and additions to complete new builds. We work with homeowners to bring their vision to life.",
    description:
      "Full-service home construction, from renovations and additions to complete new builds. We work with homeowners to bring their vision to life \u2014 on time and on budget. Whether you\u2019re building your dream home from the ground up or adding an extension to your current property, our team manages every detail from permits and planning through final walkthrough.",
  },
  {
    id: "commercial",
    title: "Commercial Construction",
    icon: "Building2" as const,
    summary:
      "Retail buildouts, office renovations, and ground-up commercial projects. We manage every phase from pre-construction through delivery.",
    description:
      "Retail buildouts, office renovations, and ground-up commercial projects. We manage every phase from pre-construction planning through final delivery. Our commercial team understands the unique demands of business construction \u2014 tight timelines, regulatory compliance, and the need to minimize disruption to your operations.",
  },
  {
    id: "renovations",
    title: "Renovations & Remodeling",
    icon: "Hammer" as const,
    summary:
      "Kitchens, bathrooms, basements, and full-home renovations. We modernize spaces with quality materials and expert craftsmanship.",
    description:
      "Kitchens, bathrooms, basements, and full-home renovations. We modernize and upgrade existing spaces with quality materials and expert craftsmanship. From a single bathroom refresh to a complete whole-home transformation, we handle demolition, structural changes, finishes, and everything in between.",
  },
  {
    id: "exterior",
    title: "Exterior Services & Powerwashing",
    icon: "Droplets" as const,
    summary:
      "Professional exterior restoration including powerwashing, deck work, siding, and curb appeal upgrades.",
    description:
      "Professional exterior restoration including powerwashing, deck and patio work, siding, and curb appeal upgrades. The perfect complement to any construction or renovation project. We restore and protect your property\u2019s exterior surfaces, making them look brand new while extending their lifespan.",
  },
  {
    id: "roofing",
    title: "Roofing & Structural Work",
    icon: "HardHat" as const,
    summary:
      "Roof repairs, replacements, and structural improvements. We ensure your property is protected and built to code.",
    description:
      "Roof repairs, replacements, and structural improvements. We ensure your property is protected and built to code. From emergency leak repairs to complete roof replacements and structural reinforcement, our team delivers reliable work that stands up to demanding Northeast weather conditions.",
  },
  {
    id: "management",
    title: "Project Management & General Contracting",
    icon: "ClipboardList" as const,
    summary:
      "End-to-end project coordination including scheduling, budgeting, subcontractor management, and quality control.",
    description:
      "End-to-end project coordination including scheduling, budgeting, subcontractor management, and quality control. We keep your project on track so you don\u2019t have to. Our project managers serve as your single point of contact, coordinating all trades and ensuring every phase hits its deadline.",
  },
] as const;

export const VALUE_PROPS = [
  {
    title: "Transparent Pricing",
    icon: "DollarSign" as const,
    description:
      "No hidden fees. No surprise change orders. You know exactly what you\u2019re paying for before we start.",
  },
  {
    title: "On-Time Delivery",
    icon: "Clock" as const,
    description:
      "We set realistic timelines and hit them. Your project stays on schedule from day one.",
  },
  {
    title: "Quality Craftsmanship",
    icon: "Award" as const,
    description:
      "Every detail matters. We hold ourselves to the highest standards on every project, big or small.",
  },
  {
    title: "Licensed & Insured",
    icon: "ShieldCheck" as const,
    description:
      "Fully licensed and insured for your protection. We operate by the book so you can build with confidence.",
  },
] as const;

export const PROJECT_TYPES = [
  "Residential",
  "Commercial",
  "Renovation",
  "Exterior / Powerwashing",
  "Roofing",
  "Project Management",
  "Other",
] as const;
